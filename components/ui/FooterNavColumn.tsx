"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { FooterColumn } from "@/config/footer";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";
import { getCompleteBoxBasis } from "@/lib/completeBox";

type FooterColumnDict = {
  title: string;
  links: { label: string }[];
};

export default function FooterNavColumn({
  column,
  dict,
  locale,
}: {
  column: FooterColumn;
  dict: FooterColumnDict;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const cardBasis = getCompleteBoxBasis(column.links.length);

  return (
    <nav
      aria-label={dict.title}
      className="flex min-w-[150px] flex-col items-start gap-5 sm:h-full sm:min-h-[320px] sm:gap-10"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2.5 sm:pointer-events-none"
      >
        <h2 className="text-left text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto whitespace-nowrap">
          {dict.title}
        </h2>
        <Image
          src="/icons/pricing/chevron-down.svg"
          alt=""
          aria-hidden="true"
          width={14}
          height={14}
          className={`shrink-0 transition-transform sm:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      {/* Below sm (accordion open): "Blocos Mobile" — each link becomes its
          own bordered card via "Complete Box" (see lib/completeBox.ts),
          with half the standard card padding. At sm+: the plain list below. */}
      <ul className={`w-full flex-wrap gap-2.5 sm:hidden ${open ? "flex" : "hidden"}`}>
        {column.links.map((link, i) => (
          <li key={link.href} className={`flex min-w-[90px] grow ${cardBasis}`}>
            <Link
              href={withLocale(link.href, locale)}
              className="flex min-h-[76px] w-full flex-col items-center justify-center gap-2 rounded-[14px] border border-contorno-base p-2.5 text-center text-sm leading-[1.2] font-medium text-texto transition-colors hover:text-azul-base"
            >
              {link.icon && (
                <Image src={link.icon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              )}
              {dict.links[i].label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="hidden w-full flex-1 flex-col items-start justify-between gap-2.5 sm:flex">
        {column.links.map((link, i) => (
          <li key={link.href}>
            <Link
              href={withLocale(link.href, locale)}
              className="flex items-center gap-2.5 text-sm leading-[1.2] font-medium text-texto transition-colors hover:text-azul-base"
            >
              {link.icon && (
                <Image src={link.icon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              )}
              {dict.links[i].label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
