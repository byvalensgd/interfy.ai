import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PlatformIntro from "@/components/sections/PlatformIntro";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import WhyInterfy from "@/components/sections/WhyInterfy";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import Segments from "@/components/sections/Segments";
import GlobalTrust from "@/components/sections/GlobalTrust";
import ScaleSecurity from "@/components/sections/ScaleSecurity";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { home } = await getDictionary();

  return buildMetadata({
    locale,
    title: home.meta.title,
    description: home.meta.description,
    path: "/",
    keywords: home.meta.keywords,
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformIntro />
      <EcosystemGrid />
      <WhyInterfy />
      <FeatureShowcase />
      <Segments />
      <GlobalTrust />
      <ScaleSecurity />
    </>
  );
}
