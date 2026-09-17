"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NavMenuShell from "@/components/layout/NavMenuShell";
import { platformMenuItems } from "@/config/products-menu";
import { mobileAppStoreUrl, mobileGooglePlayUrl } from "@/config/mobile-page";
import type { Locale } from "@/lib/i18n/config";
import { getHeroSlides, withLocale } from "@/lib/i18n/paths";

type ProductsMenuDict = {
  trigger: string;
  items: { title: string; description?: string }[];
  mobilePromo: {
    heading: string;
    description: string;
    ctaLabel: string;
    imageAlt: string;
    appStoreAlt: string;
    googlePlayAlt: string;
  };
};

export default function ProductsMenu({ items: dict, locale }: { items: ProductsMenuDict; locale: Locale }) {
  const [promoSlide] = getHeroSlides(locale);

  return (
    <NavMenuShell trigger={dict.trigger} panelClassName="max-w-[1030px]" radiusClassName="rounded-[20px]" unpadded>
      {(close) => (
        <div className="flex w-full items-stretch">
          <div className="grid flex-1 grid-cols-1 gap-[30px] p-10 sm:grid-cols-2">
            {platformMenuItems.map((item, i) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                onClick={close}
                className="flex min-w-0 items-start gap-2.5 rounded-[6px] transition-shadow hover:bg-bg-base hover:shadow-[0_0_0_10px_var(--color-bg-base)]"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                <span className="flex min-w-0 flex-1 flex-col justify-center gap-[5px]">
                  <span className="flex min-h-[24px] w-full items-center text-base leading-[1.2] font-bold text-texto">
                    {dict.items[i].title}
                  </span>
                  {dict.items[i].description && (
                    <span className="w-full text-xs leading-[1.2] font-medium text-texto-medio">
                      {dict.items[i].description}
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>

          <div
            className="hidden w-[280px] shrink-0 flex-col items-center justify-between gap-5 self-stretch p-5 sm:flex xl:w-[343px]"
            style={{ backgroundImage: "linear-gradient(180deg, #fafbff 0%, #e8f1f8 100%)" }}
          >
            <div
              className="w-full flex-1 overflow-hidden rounded-lg p-5"
              style={{ backgroundImage: "linear-gradient(97deg, rgba(0,166,221,0.2) 4%, rgba(0,64,166,0.2) 96%)" }}
            >
              <div className="relative h-full w-full">
                <Image src={promoSlide} alt={dict.mobilePromo.imageAlt} fill sizes="300px" className="object-contain" />
              </div>
            </div>
            <p className="w-full text-center text-lg leading-[1.2] font-extrabold text-texto">
              {dict.mobilePromo.heading}
            </p>
            <p className="w-full text-center text-sm leading-[1.2] font-medium text-texto">
              {dict.mobilePromo.description}
            </p>
            <Link
              href={withLocale("/mobile", locale)}
              onClick={close}
              className="inline-flex shrink-0 items-center gap-2.5 text-base leading-[1.2] font-bold text-azul-base hover:underline"
            >
              {dict.mobilePromo.ctaLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <div className="flex w-full items-start gap-2.5">
              <a href={mobileAppStoreUrl} target="_blank" rel="noreferrer" className="relative h-[60px] min-w-px flex-1">
                <Image src="/mobile/badge-appstore.svg" alt={dict.mobilePromo.appStoreAlt} fill className="max-w-none" />
              </a>
              <a href={mobileGooglePlayUrl} target="_blank" rel="noreferrer" className="relative h-[60px] min-w-px flex-1">
                <Image src="/mobile/badge-googleplay.svg" alt={dict.mobilePromo.googlePlayAlt} fill className="max-w-none" />
              </a>
            </div>
          </div>
        </div>
      )}
    </NavMenuShell>
  );
}
