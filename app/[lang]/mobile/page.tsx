import MobileHero from "@/components/sections/MobileHero";
import MobileEcosystem from "@/components/sections/MobileEcosystem";
import MobileCapabilities from "@/components/sections/MobileCapabilities";
import MobileSecurity from "@/components/sections/MobileSecurity";
import MobileCTA from "@/components/sections/MobileCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { mobile } = await getDictionary();

  return buildMetadata({
    locale,
    title: mobile.seo.title,
    description: mobile.seo.description,
    path: "/mobile",
    keywords: mobile.seo.keywords,
  });
}

export default async function MobilePage() {
  const locale = await getLocale();
  const { mobile } = await getDictionary();

  const jsonLd = buildSoftwareAppJsonLd({
    name: "Mobile",
    description: mobile.seo.description,
    path: "/mobile",
    locale,
    freeTrialNote: mobile.seo.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MobileHero />
      <MobileEcosystem />
      <MobileCapabilities />
      <MobileSecurity />
      <MobileCTA />
    </>
  );
}
