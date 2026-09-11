import SwcHero from "@/components/sections/SwcHero";
import SwcHowItWorks from "@/components/sections/SwcHowItWorks";
import SwcFeatures from "@/components/sections/SwcFeatures";
import SwcLegalValidity from "@/components/sections/SwcLegalValidity";
import SwcResults from "@/components/sections/SwcResults";
import SwcCTA from "@/components/sections/SwcCTA";
// SwcPricing and SwcCredits are temporarily hidden from this page (kept for future re-enabling).
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { capture } = await getDictionary();

  return buildMetadata({
    locale,
    title: capture.meta.title,
    description: capture.meta.description,
    path: "/capture",
    keywords: capture.meta.keywords,
  });
}

export default async function SwcPage() {
  const locale = await getLocale();
  const { capture } = await getDictionary();

  const jsonLd = buildSoftwareAppJsonLd({
    name: capture.meta.title,
    description: capture.meta.description,
    path: "/capture",
    locale,
    freeTrialNote: capture.meta.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SwcHero />
      <SwcHowItWorks />
      <SwcFeatures />
      <SwcLegalValidity />
      <SwcResults />
      <SwcCTA />
    </>
  );
}
