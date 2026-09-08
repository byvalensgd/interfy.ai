import type { Metadata } from "next";
import AgentesHero from "@/components/sections/AgentesHero";
import AgentesCapabilities from "@/components/sections/AgentesCapabilities";
import AgentesEcosystem from "@/components/sections/AgentesEcosystem";
import AgentesHighlights from "@/components/sections/AgentesHighlights";
import AgentesCTA from "@/components/sections/AgentesCTA";

export const metadata: Metadata = {
  title: "Agentes de IA",
  description:
    "Interfy Agentes é a camada de inteligência da plataforma. Crie agentes inteligentes para automatizar tarefas, analisar informações e impulsionar resultados em toda a sua operação.",
};

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
