import SegmentsHero from "@/components/sections/SegmentsHero";
import SegmentsCatalog from "@/components/sections/SegmentsCatalog";
import SegmentsHighlights from "@/components/sections/SegmentsHighlights";
import SegmentsTrust from "@/components/sections/SegmentsTrust";
import SegmentsPlatform from "@/components/sections/SegmentsPlatform";
import SegmentsCTA from "@/components/sections/SegmentsCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Segmentos",
  description:
    "A Interfy atende empresas de diferentes setores e tamanhos com uma única plataforma AI-native: Financeiro, Saúde, Jurídico, Indústria, Governo e mais de 20 segmentos.",
  path: "/segmentos",
  keywords: ["Interfy por segmento", "gestão de documentos por setor", "software para financeiro saúde jurídico indústria governo"],
});

export default function SegmentosPage() {
  return (
    <>
      <SegmentsHero />
      <SegmentsCatalog />
      <SegmentsHighlights />
      <SegmentsTrust />
      <SegmentsPlatform />
      <SegmentsCTA />
    </>
  );
}
