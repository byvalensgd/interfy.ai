import ParceriaHero from "@/components/sections/ParceriaHero";
import ParceriaParticipation from "@/components/sections/ParceriaParticipation";
import ParceriaHowItWorks from "@/components/sections/ParceriaHowItWorks";
import ParceriaStructure from "@/components/sections/ParceriaStructure";
import ParceriaRoles from "@/components/sections/ParceriaRoles";
import ParceriaTestDriveFaq from "@/components/sections/ParceriaTestDriveFaq";
import ParceriaGrowthCTA from "@/components/sections/ParceriaGrowthCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { parceria } = await getDictionary();

  return buildMetadata({
    locale,
    title: parceria.seo.title,
    description: parceria.seo.description,
    path: "/parceria",
    keywords: parceria.seo.keywords,
  });
}

export default function ParceriaPage() {
  return (
    <>
      <ParceriaHero />
      <ParceriaParticipation />
      <ParceriaHowItWorks />
      <ParceriaStructure />
      <ParceriaRoles />
      <ParceriaTestDriveFaq />
      <ParceriaGrowthCTA />
    </>
  );
}
