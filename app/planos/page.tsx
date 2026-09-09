import PricingHero from "@/components/sections/PricingHero";
import PricingPlans from "@/components/sections/PricingPlans";
import PricingBase from "@/components/sections/PricingBase";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Preços e Planos",
  description:
    "Escolha o plano ideal para o tamanho da sua empresa: Free, Individual, Teams, Startup ou planos para médias e grandes empresas.",
  path: "/planos",
  keywords: ["preços Interfy", "planos Interfy", "quanto custa gestão de documentos", "plano empresarial AI-native"],
});

export default function PlanosPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingBase />
    </>
  );
}
