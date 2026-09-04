"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { FooterColumn } from "@/config/footer";

export default function FooterNavColumn({ column }: { column: FooterColumn }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label={column.title}
      className="flex min-w-[150px] flex-col items-start gap-5 sm:h-full sm:min-h-[320px] sm:gap-10 sm:border-l sm:border-contorno-base sm:pl-5"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2.5 sm:pointer-events-none"
      >
        <h2 className="text-left text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto whitespace-nowrap">
          {column.title}
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
      <ul
        className={`w-full flex-1 flex-col items-start justify-between gap-2.5 sm:flex ${
          open ? "flex" : "hidden"
        }`}
      >
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-2.5 text-sm leading-[1.2] font-medium text-texto transition-colors hover:text-azul-base"
            >
              {link.icon && (
                <Image src={link.icon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              )}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
