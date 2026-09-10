import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { locales, OG_LOCALE, type Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

export function buildMetadata({
  locale,
  title,
  description,
  path,
  keywords,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${withLocale(path, locale)}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}${withLocale(path, l)}`])),
        "x-default": `${siteConfig.url}${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: OG_LOCALE[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function buildSoftwareAppJsonLd({
  name,
  description,
  path,
  locale,
  freeTrialNote,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  freeTrialNote: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Interfy ${name}`,
    description,
    url: `${siteConfig.url}${withLocale(path, locale)}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: freeTrialNote,
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };
}
