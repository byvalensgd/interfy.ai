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
      className="flex flex-col items-start gap-5 border-l border-contorno-base pl-5 lg:h-full lg:min-h-[320px] lg:gap-10"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2.5"
      >
        <div className="flex flex-col items-start gap-2.5">
          <h2 className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
            {column.title}
          </h2>
          <div
            className="h-[1.5px] w-[30px] rounded-full"
            style={{ backgroundImage: column.accentGradient }}
          />
        </div>
        <Image
          src="/icons/pricing/chevron-down.svg"
          alt=""
          aria-hidden="true"
          width={14}
          height={14}
          className={`shrink-0 transition-transform lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <ul
        className={`w-full flex-1 flex-col items-start justify-between gap-2.5 lg:flex ${
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
