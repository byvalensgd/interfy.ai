import VoiceHero from "@/components/sections/VoiceHero";
import VoiceCapabilities from "@/components/sections/VoiceCapabilities";
import VoiceEcosystem from "@/components/sections/VoiceEcosystem";
import VoiceHighlights from "@/components/sections/VoiceHighlights";
import VoiceCTA from "@/components/sections/VoiceCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { voice } = await getDictionary();

  return buildMetadata({
    locale,
    title: voice.seo.title,
    description: voice.seo.description,
    path: "/voice",
    keywords: voice.seo.keywords,
  });
}

export default async function VoicePage() {
  const locale = await getLocale();
  const { voice } = await getDictionary();

  const jsonLd = buildSoftwareAppJsonLd({
    name: "Voice",
    description: voice.seo.description,
    path: "/voice",
    locale,
    freeTrialNote: voice.seo.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VoiceHero />
      <VoiceCapabilities />
      <VoiceEcosystem />
      <VoiceHighlights />
      <VoiceCTA />
    </>
  );
}
