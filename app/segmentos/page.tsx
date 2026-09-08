import type { Metadata } from "next";
import SegmentsHero from "@/components/sections/SegmentsHero";
import SegmentsCatalog from "@/components/sections/SegmentsCatalog";
import SegmentsHighlights from "@/components/sections/SegmentsHighlights";
import SegmentsTrust from "@/components/sections/SegmentsTrust";
import SegmentsPlatform from "@/components/sections/SegmentsPlatform";
import SegmentsCTA from "@/components/sections/SegmentsCTA";

export const metadata: Metadata = {
  title: "Segmentos",
  description:
    "A Interfy atende empresas de diferentes setores e tamanhos com uma única plataforma AI-native: Financeiro, Saúde, Jurídico, Indústria, Governo e mais de 20 segmentos.",
};

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
