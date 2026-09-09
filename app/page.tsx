import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PlatformIntro from "@/components/sections/PlatformIntro";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import WhyInterfy from "@/components/sections/WhyInterfy";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import Segments from "@/components/sections/Segments";
import GlobalTrust from "@/components/sections/GlobalTrust";
import ScaleSecurity from "@/components/sections/ScaleSecurity";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
};

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
