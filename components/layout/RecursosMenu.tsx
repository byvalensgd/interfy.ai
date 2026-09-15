"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenuShell from "@/components/layout/NavMenuShell";
import { legalMenuItems, recursosMenuItems } from "@/config/recursos-menu";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

type RecursosMenuDict = {
  trigger: string;
  recursosEyebrow: string;
  cardCta: string;
  recursosItems: { label: string }[];
  legalEyebrow: string;
  legalItems: { label: string }[];
};

export default function RecursosMenu({ items: dict, locale }: { items: RecursosMenuDict; locale: Locale }) {
  return (
    <NavMenuShell trigger={dict.trigger}>
      {(close) => (
        <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.recursosEyebrow}
            </p>
            <div className="mt-6 flex gap-4">
              {recursosMenuItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="group relative flex size-[250px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl px-[15px] py-[30px] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: `var(--color-${item.tint})` }}
                >
                  <p className="text-[18px] leading-[1.2] font-bold text-branco">{dict.recursosItems[i].label}</p>

                  <span className="inline-flex min-h-[35px] w-fit items-center justify-center rounded-full border border-branco px-5 py-2.5 text-xs leading-[1.2] font-bold text-branco uppercase transition-transform group-hover:scale-105">
                    {dict.cardCta}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.legalEyebrow}
            </p>
            <div className="mt-5 flex flex-col gap-1">
              {legalMenuItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="flex min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-bg-base"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                  <span className="w-full min-w-0 text-sm leading-[1.2] font-bold text-texto">
                    {dict.legalItems[i].label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </NavMenuShell>
  );
}
