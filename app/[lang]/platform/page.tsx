import PlatformHero from "@/components/sections/PlatformHero";
import PlatformOverview from "@/components/sections/PlatformOverview";
import PlatformAiGrid from "@/components/sections/PlatformAiGrid";
import PlatformWorkspace from "@/components/sections/PlatformWorkspace";
import PlatformTrust from "@/components/sections/PlatformTrust";
import PlatformCTA from "@/components/sections/PlatformCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { platform } = await getDictionary();

  return buildMetadata({
    locale,
    title: platform.seo.title,
    description: platform.seo.description,
    path: "/platform",
    keywords: platform.seo.keywords,
  });
}

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformAiGrid />
      <PlatformWorkspace />
      <PlatformTrust />
      <PlatformCTA />
    </>
  );
}
