"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";
import Button from "@/components/ui/Button";
import { CTA_DISABLED } from "@/config/feature-flags";

export type MobileNavLink = { href: string; label: string; icon?: string };
export type MobileNavGroup = {
  trigger: string;
  sections: { title?: string; items: MobileNavLink[] }[];
};
export type MobileNavEntry = { type: "link"; link: MobileNavLink } | { type: "group"; group: MobileNavGroup };

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
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base text-texto hover:bg-bg-base"
      >
        {group.trigger}
        <ChevronDown
          className={`size-[18px] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="flex flex-col gap-4 px-3 pt-1 pb-3">
          {group.sections.map((section, i) => (
            <div key={section.title ?? i} className="flex flex-col gap-1">
              {section.title && (
                <p className="px-2 text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
                  {section.title}
                </p>
              )}
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={onNavigate}
                  className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm font-medium text-texto hover:bg-bg-base"
                >
                  {item.icon && (
                    <Image src={item.icon} alt="" aria-hidden="true" width={18} height={18} className="shrink-0" />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
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
          <ul className="flex flex-col gap-1">
            {entries.map((entry) =>
              entry.type === "link" ? (
                <li key={entry.link.href}>
                  <Link
                    href={withLocale(entry.link.href, locale)}
                    onClick={close}
                    className="block rounded-md px-3 py-2.5 text-base text-texto hover:bg-bg-base"
                  >
                    {entry.link.label}
                  </Link>
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
