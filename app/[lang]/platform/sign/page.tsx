import DssHero from "@/components/sections/DssHero";
import DssLifecycle from "@/components/sections/DssLifecycle";
import DssHowItWorks from "@/components/sections/DssHowItWorks";
import DssFeatures from "@/components/sections/DssFeatures";
import DssCTA from "@/components/sections/DssCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { sign } = await getDictionary();

  return buildMetadata({
    locale,
    title: sign.seo.title,
    description: sign.seo.description,
    path: "/platform/sign",
    keywords: sign.seo.keywords,
  });
}

export default async function DssPage() {
  const locale = await getLocale();
  const { sign } = await getDictionary();

  const jsonLd = buildSoftwareAppJsonLd({
    name: "Sign",
    description: sign.seo.description,
    path: "/platform/sign",
    locale,
    freeTrialNote: sign.seo.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DssHero />
      <DssLifecycle />
      <DssHowItWorks />
      <DssFeatures />
      <DssCTA />
    </>
  );
}
