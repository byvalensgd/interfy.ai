import BpmHero from "@/components/sections/BpmHero";
import BpmCapabilities from "@/components/sections/BpmCapabilities";
import BpmEcosystem from "@/components/sections/BpmEcosystem";
import BpmHighlights from "@/components/sections/BpmHighlights";
import BpmResults from "@/components/sections/BpmResults";
import BpmCTA from "@/components/sections/BpmCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const description =
  "Interfy Process permite que você crie processos visuais, formulários inteligentes e automações poderosas com AI. Mais agilidade, controle e eficiência em cada etapa.";

export const metadata = buildMetadata({
  title: "Process",
  description,
  path: "/plataforma/process",
  keywords: ["automação de processos", "BPM", "workflow empresarial", "formulários inteligentes", "Interfy Process"],
});

const jsonLd = buildSoftwareAppJsonLd({ name: "Process", description, path: "/plataforma/process" });

export default function BpmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BpmHero />
      <BpmCapabilities />
      <BpmEcosystem />
      <BpmHighlights />
      <BpmResults />
      <BpmCTA />
    </>
  );
}
