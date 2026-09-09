import ConnectHero from "@/components/sections/ConnectHero";
import ConnectCapabilities from "@/components/sections/ConnectCapabilities";
import ConnectEcosystem from "@/components/sections/ConnectEcosystem";
import ConnectProductivity from "@/components/sections/ConnectProductivity";
import ConnectCTA from "@/components/sections/ConnectCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const description =
  "Interfy Connect vai muito além do chat: colaboração em tempo real integrada aos seus documentos, processos e automações, com pessoas internas e externas na mesma conversa.";

export const metadata = buildMetadata({
  title: "Connect",
  description,
  path: "/platform/connect",
  keywords: ["colaboração em equipe", "chat integrado", "comunicação corporativa", "Interfy Connect"],
});

const jsonLd = buildSoftwareAppJsonLd({ name: "Connect", description, path: "/platform/connect" });

export default function CicPage() {
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
