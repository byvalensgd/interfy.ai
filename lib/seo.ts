import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { locales, OG_LOCALE, type Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

// The favicon mark rendered as a square PNG (social platforms don't reliably
// rasterize SVG for og:image) — used as the link-preview image everywhere
// instead of a marketing banner, so a shared link shows just the brand icon
// beside its title/description.
export const OG_ICON = `${siteConfig.url}/decor/interfy-icon-og.png`;

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
      images: [{ url: OG_ICON, width: 1200, height: 1200, alt: siteConfig.name }],
    },
    twitter: {
      // "summary" (small square thumbnail beside the text), not
      // "summary_large_image" — OG_ICON is a square brand mark, not a
      // 1.91:1 banner, so the large-image card would just crop it.
      card: "summary",
      title: fullTitle,
      description,
      images: [OG_ICON],
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
