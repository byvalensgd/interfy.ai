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
  recursosItems: { label: string }[];
  legalEyebrow: string;
  legalItems: { label: string }[];
};

export default function RecursosMenu({ items: dict, locale }: { items: RecursosMenuDict; locale: Locale }) {
  return (
    <NavMenuShell trigger={dict.trigger} panelClassName="max-w-[700px]" radiusClassName="rounded-[20px]" unpadded>
      {(close) => (
        <div className="grid grid-cols-1 gap-[30px] p-10 sm:grid-cols-2">
          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.recursosEyebrow}
            </p>
            <div className="mt-5 flex flex-col gap-[30px]">
              {recursosMenuItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="flex min-w-0 items-center gap-2.5 rounded-[6px] transition-shadow hover:bg-bg-base hover:shadow-[0_0_0_10px_var(--color-bg-base)]"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                  <span className="flex min-h-[24px] min-w-0 flex-1 items-center">
                    <span className="w-full text-base leading-[1.2] font-bold text-texto">
                      {dict.recursosItems[i].label}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.legalEyebrow}
            </p>
            <div className="mt-5 flex flex-col gap-[30px]">
              {legalMenuItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="flex min-w-0 items-center gap-2.5 rounded-[6px] transition-shadow hover:bg-bg-base hover:shadow-[0_0_0_10px_var(--color-bg-base)]"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                  <span className="flex min-h-[24px] min-w-0 flex-1 items-center">
                    <span className="w-full text-base leading-[1.2] font-bold text-texto">
                      {dict.legalItems[i].label}
                    </span>
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
