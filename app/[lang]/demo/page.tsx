import DemoHero from "@/components/sections/DemoHero";
import DemoTrust from "@/components/sections/DemoTrust";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { demo } = await getDictionary();

  return buildMetadata({
    locale,
    title: demo.meta.title,
    description: demo.meta.description,
    path: "/demo",
    keywords: demo.meta.keywords,
  });
}

export default async function DemoPage() {
  const { demo } = await getDictionary();
  const { trust } = demo;

  return (
    <>
      <DemoHero />
      <DemoTrust
        ariaLabel={trust.ariaLabel}
        heading={trust.heading}
        subheading={trust.subheading}
        statsLabel={trust.statsLabel}
        stats={trust.stats}
      />
    </>
  );
}
