import AgentesHero from "@/components/sections/AgentesHero";
import AgentesCapabilities from "@/components/sections/AgentesCapabilities";
import AgentesEcosystem from "@/components/sections/AgentesEcosystem";
import AgentesHighlights from "@/components/sections/AgentesHighlights";
import AgentesCTA from "@/components/sections/AgentesCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { agents } = await getDictionary();

  return buildMetadata({
    locale,
    title: agents.meta.title,
    description: agents.meta.description,
    path: "/platform/agents",
    keywords: agents.meta.keywords,
  });
}

export default function AgentesPage() {
  return (
    <>
      <AgentesHero />
      <AgentesCapabilities />
      <AgentesEcosystem />
      <AgentesHighlights />
      <AgentesCTA />
    </>
  );
}
