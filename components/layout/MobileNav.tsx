"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";
import Button from "@/components/ui/Button";

export default function MobileNav({
  items,
  labels,
  locale,
  ariaLabel,
  openLabel,
  closeLabel,
  ctaPrimary,
  ctaSecondary,
}: {
  items: NavItem[];
  labels: string[];
  locale: Locale;
  ariaLabel: string;
  openLabel: string;
  closeLabel: string;
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

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
          className="absolute inset-x-0 top-full border-t border-contorno-base bg-branco px-4 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={withLocale(item.href, locale)}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base text-texto hover:bg-bg-base"
                >
                  {labels[i]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-contorno-base pt-4">
            <Button
              href={withLocale("/comece-gratis", locale)}
              variant="primary"
              showArrow
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              {ctaPrimary}
            </Button>
            <Button
              href={withLocale("/demo", locale)}
              variant="secondary"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              {ctaSecondary}
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
}
