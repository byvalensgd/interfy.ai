"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";
import Button from "@/components/ui/Button";
import { CTA_DISABLED } from "@/config/feature-flags";

export type MobileNavLink = { href: string; label: string; icon?: string; description?: string };
export type MobileNavGroup = {
  trigger: string;
  sections: { title?: string; items: MobileNavLink[] }[];
};
export type MobileNavEntry = { type: "link"; link: MobileNavLink } | { type: "group"; group: MobileNavGroup };

type RenderEntry = { type: "links"; links: MobileNavLink[] } | { type: "group"; group: MobileNavGroup };

// Runs plain top-level links (Segmentos/Planos/Contato) together in a single
// horizontal row instead of one full-width block each, while accordion
// groups (Plataforma/Recursos) keep their own row.
function groupConsecutiveLinks(entries: MobileNavEntry[]): RenderEntry[] {
  const result: RenderEntry[] = [];
  for (const entry of entries) {
    if (entry.type === "link") {
      const last = result[result.length - 1];
      if (last?.type === "links") {
        last.links.push(entry.link);
      } else {
        result.push({ type: "links", links: [entry.link] });
      }
    } else {
      result.push(entry);
    }
  }
  return result;
}

function MobileNavAccordion({
  group,
  locale,
  onNavigate,
}: {
  group: MobileNavGroup;
  locale: Locale;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-[12px] border-[0.5px] border-contorno-base p-2.5 text-base text-texto transition-shadow hover:bg-bg-base hover:shadow-[0_0_0_10px_var(--color-bg-base)]"
      >
        {group.trigger}
        <ChevronDown
          className={`size-[18px] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
          {group.sections.flatMap((section) => section.items).map((item) => (
            <Link
              key={item.href}
              href={withLocale(item.href, locale)}
              onClick={onNavigate}
              className="flex min-w-0 items-start gap-2.5 rounded-[12px] border-[0.5px] border-contorno-base p-2.5 transition-shadow hover:bg-bg-base hover:shadow-[0_0_0_10px_var(--color-bg-base)]"
            >
              {item.icon && (
                <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
              )}
              <span className="flex min-w-0 flex-1 flex-col justify-center gap-[5px]">
                <span className="flex min-h-[24px] w-full items-center text-base leading-[1.2] font-bold text-texto">
                  {item.label}
                </span>
                {item.description && (
                  <span className="w-full text-xs leading-[1.2] font-medium text-texto-medio">
                    {item.description}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

export default function MobileNav({
  entries,
  locale,
  ariaLabel,
  openLabel,
  closeLabel,
  ctaPrimary,
  ctaSecondary,
}: {
  entries: MobileNavEntry[];
  locale: Locale;
  ariaLabel: string;
  openLabel: string;
  closeLabel: string;
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? closeLabel : openLabel}
        className="inline-flex items-center justify-center rounded-md p-2 text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-base"
      >
        {isOpen ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label={ariaLabel}
          className="absolute inset-x-0 top-full max-h-[calc(100vh-var(--header-height))] overflow-y-auto border-t border-contorno-base bg-branco px-4 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-2.5">
            {groupConsecutiveLinks(entries).map((entry, i) =>
              entry.type === "links" ? (
                <li key={`links-${i}`} className="flex items-stretch gap-2.5">
                  {entry.links.map((link) => (
                    <Link
                      key={link.href}
                      href={withLocale(link.href, locale)}
                      onClick={close}
                      className="flex flex-1 items-center justify-center rounded-[12px] border-[0.5px] border-contorno-base p-2.5 text-base text-texto transition-shadow hover:bg-bg-base hover:shadow-[0_0_0_10px_var(--color-bg-base)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </li>
              ) : (
                <MobileNavAccordion key={entry.group.trigger} group={entry.group} locale={locale} onNavigate={close} />
              )
            )}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-contorno-base pt-4">
            <Button
              href={withLocale("/test-drive", locale)}
              variant="primary"
              showArrow
              onClick={close}
              className="w-full"
              disabled={CTA_DISABLED}
            >
              {ctaPrimary}
            </Button>
            <Button
              href={withLocale("/demo", locale)}
              variant="secondary"
              onClick={close}
              className="w-full"
              disabled={CTA_DISABLED}
            >
              {ctaSecondary}
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
}
