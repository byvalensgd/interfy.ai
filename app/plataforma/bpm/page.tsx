import type { Metadata } from "next";
import BpmHero from "@/components/sections/BpmHero";
import BpmCapabilities from "@/components/sections/BpmCapabilities";
import BpmEcosystem from "@/components/sections/BpmEcosystem";
import BpmHighlights from "@/components/sections/BpmHighlights";
import BpmResults from "@/components/sections/BpmResults";
import BpmCTA from "@/components/sections/BpmCTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Interfy Process permite que você crie processos visuais, formulários inteligentes e automações poderosas com AI. Mais agilidade, controle e eficiência em cada etapa.",
};

export default function BpmPage() {
  return (
    <>
      <BpmHero />
      <BpmCapabilities />
      <BpmEcosystem />
      <BpmHighlights />
      <BpmResults />
      <BpmCTA />
    </>
  );
}
