"use client";

import Link from "next/link";
import NavMenuShell from "@/components/layout/NavMenuShell";
import { empresaMenuItems } from "@/config/empresa-menu";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

type EmpresaMenuDict = {
  trigger: string;
  eyebrow: string;
  cardCta: string;
  items: { label: string }[];
};

export default function EmpresaMenu({ items: dict, locale }: { items: EmpresaMenuDict; locale: Locale }) {
  return (
    <NavMenuShell trigger={dict.trigger}>
      {(close) => (
        <div>
          <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">{dict.eyebrow}</p>
          <div className="mt-6 flex gap-4">
            {empresaMenuItems.map((item, i) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                onClick={close}
                className="group relative flex size-[250px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl px-[15px] py-[30px] transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: `var(--color-${item.tint})` }}
              >
                <p className="text-[18px] leading-[1.2] font-bold text-branco">{dict.items[i].label}</p>

                <span className="inline-flex min-h-[35px] w-fit items-center justify-center rounded-full border border-branco px-5 py-2.5 text-xs leading-[1.2] font-bold text-branco uppercase transition-transform group-hover:scale-105">
                  {dict.cardCta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </NavMenuShell>
  );
}
