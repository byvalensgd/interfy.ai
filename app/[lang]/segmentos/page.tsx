import SegmentsHero from "@/components/sections/SegmentsHero";
import SegmentsCatalog from "@/components/sections/SegmentsCatalog";
import SegmentsHighlights from "@/components/sections/SegmentsHighlights";
import SegmentsTrust from "@/components/sections/SegmentsTrust";
import SegmentsPlatform from "@/components/sections/SegmentsPlatform";
import SegmentsCTA from "@/components/sections/SegmentsCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { segments } = await getDictionary();

  return buildMetadata({
    locale,
    title: segments.seo.title,
    description: segments.seo.description,
    path: "/segmentos",
    keywords: segments.seo.keywords,
  });
}

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
