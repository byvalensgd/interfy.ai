import SwcHero from "@/components/sections/SwcHero";
import SwcHowItWorks from "@/components/sections/SwcHowItWorks";
import SwcFeatures from "@/components/sections/SwcFeatures";
import SwcLegalValidity from "@/components/sections/SwcLegalValidity";
import SwcResults from "@/components/sections/SwcResults";
import SwcCTA from "@/components/sections/SwcCTA";
// SwcPricing and SwcCredits are temporarily hidden from this page (kept for future re-enabling).
import { buildMetadata, buildSoftwareAppJsonLd } from "@/lib/seo";

const description =
  "Interfy Capture transforma documentos físicos e digitais em informação inteligente em segundos. Capture pelo navegador, scanners profissionais ou smartphone, com a AI reconhecendo, extraindo, classificando e encaminhando tudo automaticamente.";

export const metadata = buildMetadata({
  title: "Capture",
  description,
  path: "/platform/capture",
  keywords: ["captura inteligente de documentos", "digitalização com IA", "OCR", "reconhecimento de documentos", "Interfy Capture"],
});

const jsonLd = buildSoftwareAppJsonLd({ name: "Capture", description, path: "/platform/capture" });

export default function SwcPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SwcHero />
      <SwcHowItWorks />
      <SwcFeatures />
      <SwcLegalValidity />
      <SwcResults />
      <SwcCTA />
    </>
  );
}
