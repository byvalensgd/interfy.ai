import EcmHero from "@/components/sections/EcmHero";
import EcmCapabilities from "@/components/sections/EcmCapabilities";
import EcmEcosystem from "@/components/sections/EcmEcosystem";
import EcmHighlights from "@/components/sections/EcmHighlights";
import EcmCTA from "@/components/sections/EcmCTA";
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const description =
  "Interfy Documents é a nova geração de gestão documental. Organize, encontre, proteja e compartilhe documentos com inteligência artificial em cada etapa.";

export const metadata = buildMetadata({
  title: "Documents",
  description,
  path: "/plataforma/documents",
  keywords: ["gestão de documentos", "GED", "ECM", "gestão eletrônica de documentos", "Interfy Documents"],
});

const jsonLd = buildSoftwareAppJsonLd({ name: "Documents", description, path: "/plataforma/documents" });

export default function EcmPage() {
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
