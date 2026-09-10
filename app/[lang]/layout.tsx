import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { articulat } from "@/app/fonts";
import { locales, HTML_LANG, OG_LOCALE } from "@/lib/i18n/config";
import { getLocale, getDictionary } from "@/lib/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { common } = await getDictionary();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: common.defaultTitle,
      template: common.titleTemplate,
    },
    description: common.defaultDescription,
    keywords: common.keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: locale === "pt" ? siteConfig.url : `${siteConfig.url}/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, l === "pt" ? siteConfig.url : `${siteConfig.url}/${l}`])),
        "x-default": siteConfig.url,
      },
    },
    icons: {
      icon: [{ url: "/decor/interfy-icon-sm.svg", type: "image/svg+xml" }],
      shortcut: "/decor/interfy-icon-sm.svg",
      apple: "/decor/interfy-icon-sm.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: common.defaultTitle,
      description: common.defaultDescription,
      url: locale === "pt" ? siteConfig.url : `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      locale: OG_LOCALE[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: common.defaultTitle,
      description: common.defaultDescription,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const { common } = await getDictionary();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/interfy-logo.svg`,
    description: common.defaultDescription,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/segmentos?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={HTML_LANG[locale]} className={`${articulat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-[var(--header-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
