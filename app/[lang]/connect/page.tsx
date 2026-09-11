import ConnectHero from "@/components/sections/ConnectHero";
import ConnectCapabilities from "@/components/sections/ConnectCapabilities";
import ConnectEcosystem from "@/components/sections/ConnectEcosystem";
import ConnectProductivity from "@/components/sections/ConnectProductivity";
import ConnectCTA from "@/components/sections/ConnectCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { connect } = await getDictionary();

  return buildMetadata({
    locale,
    title: connect.seo.title,
    description: connect.seo.description,
    path: "/connect",
    keywords: connect.seo.keywords,
  });
}

export default async function CicPage() {
  const locale = await getLocale();
  const { connect } = await getDictionary();

  const jsonLd = buildSoftwareAppJsonLd({
    name: "Connect",
    description: connect.seo.description,
    path: "/connect",
    locale,
    freeTrialNote: connect.seo.freeTrialNote,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConnectHero />
      <ConnectCapabilities />
      <ConnectEcosystem />
      <ConnectProductivity />
      <ConnectCTA />
    </>
  );
}
