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
        <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
          <div>
            <p className="text-xs leading-[1.2] font-bold tracking-wide text-texto-medio uppercase">
              {dict.featuredEyebrow}
            </p>
            <div className="mt-6 flex gap-4">
              {featuredProducts.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="group relative flex size-[250px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl px-[15px] py-[30px] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: `var(--color-${item.tint})` }}
                >
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[18px] leading-[1.2] font-bold text-branco">Interfy {dict.featured[i].title}</p>
                    <p className="text-[16px] leading-[1.2] font-medium text-branco">{dict.featured[i].tagline}</p>
                  </div>

                  <span className="inline-flex min-h-[35px] w-fit items-center justify-center rounded-full border border-branco px-5 py-2.5 text-xs leading-[1.2] font-bold text-branco uppercase transition-transform group-hover:scale-105">
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
