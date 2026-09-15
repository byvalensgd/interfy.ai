import EmpresaHero from "@/components/sections/EmpresaHero";
import EmpresaHistory from "@/components/sections/EmpresaHistory";
import EmpresaMissionVision from "@/components/sections/EmpresaMissionVision";
import EmpresaBlueOcean from "@/components/sections/EmpresaBlueOcean";
import EmpresaBrandsEcosystem from "@/components/sections/EmpresaBrandsEcosystem";
import EmpresaTechnology from "@/components/sections/EmpresaTechnology";
import EmpresaAiFuture from "@/components/sections/EmpresaAiFuture";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { empresa } = await getDictionary();

  return buildMetadata({
    locale,
    title: empresa.seo.title,
    description: empresa.seo.description,
    path: "/empresa/sobre",
    keywords: empresa.seo.keywords,
  });
}

export default function EmpresaSobrePage() {
  return (
    <>
      <EmpresaHero />
      <EmpresaHistory />
      <EmpresaMissionVision />
      <EmpresaBlueOcean />
      <EmpresaBrandsEcosystem />
      <EmpresaTechnology />
      <EmpresaAiFuture />
    </>
  );
}
