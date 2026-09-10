import type { Metadata } from "next";
import BpmHero from "@/components/sections/BpmHero";
import BpmCapabilities from "@/components/sections/BpmCapabilities";
import BpmEcosystem from "@/components/sections/BpmEcosystem";
import BpmHighlights from "@/components/sections/BpmHighlights";
import BpmResults from "@/components/sections/BpmResults";
import BpmCTA from "@/components/sections/BpmCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { process } = await getDictionary();
  const { meta } = process;

  return buildMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: "/platform/process",
    keywords: meta.keywords,
  });
}

export default async function BpmPage() {
  const locale = await getLocale();
  const { process } = await getDictionary();
  const { meta } = process;

  const jsonLd = buildSoftwareAppJsonLd({
    name: "Process",
    description: meta.description,
    path: "/platform/process",
    locale,
    freeTrialNote: meta.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BpmHero />
      <BpmCapabilities />
      <BpmEcosystem />
      <BpmHighlights />
      <BpmResults />
      <BpmCTA />
    </>
  );
}
