import type { Metadata } from "next";
import PricingHero from "@/components/sections/PricingHero";
import PricingPlans from "@/components/sections/PricingPlans";
import PricingBase from "@/components/sections/PricingBase";

export const metadata: Metadata = {
  title: "Preços e Planos",
  description:
    "Escolha o plano ideal para o tamanho da sua empresa: Free, Individual, Teams, Startup ou planos para médias e grandes empresas.",
};

export default function PlanosPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingBase />
    </>
  );
}
