import IntegracoesHero from "@/components/sections/IntegracoesHero";
import IntegracoesLogosStrip from "@/components/sections/IntegracoesLogosStrip";
import IntegracoesFeaturesGrid from "@/components/sections/IntegracoesFeaturesGrid";
import IntegracoesAgentsHighlight from "@/components/sections/IntegracoesAgentsHighlight";
import IntegracoesSecurityHighlight from "@/components/sections/IntegracoesSecurityHighlight";
import IntegracoesDeveloperDocs from "@/components/sections/IntegracoesDeveloperDocs";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { integracoes } = await getDictionary();

  return buildMetadata({
    locale,
    title: integracoes.seo.title,
    description: integracoes.seo.description,
    path: "/platform/integracoes",
    keywords: integracoes.seo.keywords,
  });
}

export default function IntegracoesPage() {
  return (
    <>
      <IntegracoesHero />
      <IntegracoesLogosStrip />
      <IntegracoesFeaturesGrid />
      <IntegracoesAgentsHighlight />
      <IntegracoesSecurityHighlight />
      <IntegracoesDeveloperDocs />
    </>
  );
}
