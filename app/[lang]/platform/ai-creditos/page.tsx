import AiCreditosHero from "@/components/sections/AiCreditosHero";
import AiCreditosUsage from "@/components/sections/AiCreditosUsage";
import AiCreditosStructure from "@/components/sections/AiCreditosStructure";
import AiCreditosBase from "@/components/sections/AiCreditosBase";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { aiCreditos } = await getDictionary();

  return buildMetadata({
    locale,
    title: aiCreditos.seo.title,
    description: aiCreditos.seo.description,
    path: "/platform/ai-creditos",
    keywords: aiCreditos.seo.keywords,
  });
}

export default function AiCreditosPage() {
  return (
    <>
      <AiCreditosHero />
      <AiCreditosUsage />
      <AiCreditosStructure />
      <AiCreditosBase />
    </>
  );
}
