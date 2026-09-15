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
  listEyebrow: string;
  featured: { title: string; tagline: string }[];
  items: { label: string; description: string }[];
};

export default function ProductsMenu({ items: dict, locale }: { items: ProductsMenuDict; locale: Locale }) {
  return (
    <NavMenuShell trigger={dict.trigger} panelClassName="max-w-[700px]">
      {(close) => (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col gap-1">
              {featuredProducts.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="flex min-h-[70px] min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-3 transition-colors hover:bg-bg-base"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={22} height={22} className="shrink-0" />
                  <span className="flex min-w-0 flex-1 flex-col gap-[5px]">
                    <span className="text-sm leading-[1.2] font-bold text-texto">{dict.featured[i].title}</span>
                    <span className="w-full text-xs leading-[1.3] font-medium text-texto-medio">
                      {dict.featured[i].tagline}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-1">
              {productsMenu.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href, locale)}
                  onClick={close}
                  className="flex min-h-[70px] min-w-0 items-center gap-2.5 rounded-lg px-2.5 py-3 transition-colors hover:bg-bg-base"
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
