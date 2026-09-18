import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { articulat } from "@/app/fonts";
import { locales, HTML_LANG, OG_LOCALE } from "@/lib/i18n/config";
import { getLocale, getDictionary } from "@/lib/i18n/dictionaries";
import { LANGUAGE_INFO } from "@/config/languages";
import { footerSocialLinks } from "@/config/footer";
import { withLocale } from "@/lib/i18n/paths";
import { OG_ICON } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
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
      images: [{ url: OG_ICON, width: 1200, height: 1200, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary",
      title: common.defaultTitle,
      description: common.defaultDescription,
      images: [OG_ICON],
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const { common, header } = await getDictionary();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Interfy Corporation",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/interfy-logo.svg`,
    description: common.defaultDescription,
    // Third-party profiles of the SAME entity (social + review/directory listings)
    // help Google consolidate them under this one Organization node — the reason
    // Capterra sits alongside the footer's own social links here.
    sameAs: [
      ...footerSocialLinks.filter((s) => !s.href.match(/^https:\/\/x\.com\/?$/)).map((s) => s.href),
      "https://www.capterra.com.br/software/219451/interfy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${siteConfig.url}${withLocale("/contato", locale)}`,
    },
  };

  // No SearchAction: the site has no query-param-driven search page yet,
  // so a fake target would just be invalid structured data.
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: HTML_LANG[locale],
  };

  // Helps search engines surface sitelinks under the main "interfy" result
  // by spelling out the primary sections of the site.
  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Documents",
      "Process",
      "Capture",
      "Sign",
      "Connect",
      "Voice",
      "Agents",
      header.nav.plans,
    ],
    url: [
      "/documents",
      "/process",
      "/capture",
      "/sign",
      "/connect",
      "/voice",
      "/agents",
      "/planos",
    ].map((path) => `${siteConfig.url}${withLocale(path, locale)}`),
  };

  return (
    <html
      lang={HTML_LANG[locale]}
      dir={LANGUAGE_INFO[locale].dir}
      className={`${articulat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-[var(--header-height)]">{children}</main>
        <Footer />
        <CookieConsent dict={common.cookieConsent} privacyHref={withLocale("/legal/privacidade", locale)} />
      </body>
    </html>
  );
}
