"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenuShell from "@/components/layout/NavMenuShell";
import { empresaMenuItems } from "@/config/empresa-menu";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

type EmpresaMenuDict = {
  trigger: string;
  eyebrow: string;
  items: { label: string }[];
};

export default function EmpresaMenu({ items: dict, locale }: { items: EmpresaMenuDict; locale: Locale }) {
  return (
    <NavMenuShell trigger={dict.trigger} panelClassName="max-w-[340px]">
      {(close) => (
        <div>
          <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">{dict.eyebrow}</p>
          <div className="mt-5 flex flex-col gap-1">
            {empresaMenuItems.map((item, i) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                onClick={close}
                className="flex min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-bg-base"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                <span className="w-full min-w-0 text-sm leading-[1.2] font-bold text-texto">
                  {dict.items[i].label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </NavMenuShell>
  );
}
