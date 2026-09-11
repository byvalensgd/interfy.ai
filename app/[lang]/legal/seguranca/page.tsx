import SegurancaHero from "@/components/sections/SegurancaHero";
import SegurancaControls from "@/components/sections/SegurancaControls";
import SegurancaCompliance from "@/components/sections/SegurancaCompliance";
import SegurancaArchitecture from "@/components/sections/SegurancaArchitecture";
import SegurancaCTA from "@/components/sections/SegurancaCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { seguranca } = await getDictionary();

  return buildMetadata({
    locale,
    title: seguranca.seo.title,
    description: seguranca.seo.description,
    path: "/legal/seguranca",
    keywords: seguranca.seo.keywords,
  });
}

export default function SegurancaPage() {
  return (
    <>
      <SegurancaHero />
      <SegurancaControls />
      <SegurancaCompliance />
      <SegurancaArchitecture />
      <SegurancaCTA />
    </>
  );
}
