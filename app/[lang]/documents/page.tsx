import EcmHero from "@/components/sections/EcmHero";
import EcmCapabilities from "@/components/sections/EcmCapabilities";
import EcmEcosystem from "@/components/sections/EcmEcosystem";
import EcmHighlights from "@/components/sections/EcmHighlights";
import EcmCTA from "@/components/sections/EcmCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { documents } = await getDictionary();

  return buildMetadata({
    locale,
    title: documents.meta.title,
    description: documents.meta.description,
    path: "/documents",
    keywords: documents.meta.keywords,
  });
}

export default async function EcmPage() {
  const locale = await getLocale();
  const { documents } = await getDictionary();

  const jsonLd = buildSoftwareAppJsonLd({
    name: documents.meta.title,
    description: documents.meta.description,
    path: "/documents",
    locale,
    freeTrialNote: documents.meta.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EcmHero />
      <EcmCapabilities />
      <EcmEcosystem />
      <EcmHighlights />
      <EcmCTA />
    </>
  );
}
