"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenuShell from "@/components/layout/NavMenuShell";
import { featuredProducts, productsMenu } from "@/config/products-menu";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

type ProductsMenuDict = {
  trigger: string;
  featuredEyebrow: string;
  featuredCta: string;
  listEyebrow: string;
  featured: { title: string; tagline: string }[];
  items: { label: string; description: string }[];
};

export default function ProductsMenu({ items: dict, locale }: { items: ProductsMenuDict; locale: Locale }) {
  return (
    <NavMenuShell trigger={dict.trigger}>
      {(close) => (
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.featuredEyebrow}
            </p>
            <div className="mt-6 grid grid-cols-4 gap-4">
              {featuredProducts.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="group relative flex min-h-[172px] flex-col justify-between overflow-hidden rounded-xl p-4 transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(160deg, color-mix(in srgb, var(--color-${item.tint}) 75%, white) 0%, var(--color-${item.tint}) 55%, color-mix(in srgb, var(--color-${item.tint}) 65%, black) 100%)`,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 -left-6 size-24 rounded-full bg-white/25 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-8 size-20 rounded-full bg-white/20 blur-2xl"
                  />

                  <div className="relative flex flex-col gap-[5px]">
                    <p className="text-base leading-[1.2] font-bold text-branco">{dict.featured[i].title}</p>
                    <p className="text-xs leading-[1.3] font-medium text-branco/90">{dict.featured[i].tagline}</p>
                  </div>

                  <span className="relative inline-flex w-fit items-center rounded-full bg-branco px-3 py-1.5 text-xs leading-[1.2] font-bold text-texto transition-transform group-hover:scale-105">
                    {dict.featuredCta}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.listEyebrow}
            </p>
            <div className="mt-6 flex flex-col gap-1">
              {productsMenu.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="flex min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-3 transition-colors hover:bg-bg-base"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={22} height={22} className="shrink-0" />
                  <span className="flex min-w-0 flex-1 flex-col gap-[5px]">
                    <span className="text-sm leading-[1.2] font-bold text-texto">{dict.items[i].label}</span>
                    <span className="w-full text-xs leading-[1.3] font-medium text-texto-medio">
                      {dict.items[i].description}
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
