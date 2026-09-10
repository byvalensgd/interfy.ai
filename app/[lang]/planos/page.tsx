import PricingHero from "@/components/sections/PricingHero";
import PricingPlans from "@/components/sections/PricingPlans";
import PricingBase from "@/components/sections/PricingBase";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { pricing } = await getDictionary();

  return buildMetadata({
    locale,
    title: pricing.meta.title,
    description: pricing.meta.description,
    path: "/planos",
    keywords: pricing.meta.keywords,
  });
}

export default async function PlanosPage() {
  const locale = await getLocale();
  const { pricing } = await getDictionary();

  return (
    <>
      <PricingHero />
      <PricingPlans pricing={pricing.plansSection} smallPlans={pricing.smallPlans} largePlans={pricing.largePlans} featureRows={pricing.featureRows} resources={pricing.resources} locale={locale} />
      <PricingBase faq={pricing.faq} faqAriaExpand={pricing.faqAriaExpand} base={pricing.base} locale={locale} />
    </>
  );
}
