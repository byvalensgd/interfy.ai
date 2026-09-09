import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildSoftwareAppJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Interfy ${name}`,
    description,
    url: `${siteConfig.url}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Test Drive grátis por 7 dias, sem cartão de crédito.",
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };
}
