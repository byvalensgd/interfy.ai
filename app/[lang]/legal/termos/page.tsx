import LegalHero from "@/components/sections/LegalHero";
import LegalContent from "@/components/sections/LegalContent";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export async function generateMetadata() {
  const locale = await getLocale();
  const { legal } = await getDictionary();

  return buildMetadata({
    locale,
    title: legal.meta.termos.title,
    description: legal.meta.termos.description,
    path: "/legal/termos",
    keywords: legal.meta.termos.keywords,
  });
}

export default async function TermosPage() {
  const { legal } = await getDictionary();
  const { termos } = legal;

  return (
    <>
      <LegalHero ariaLabel={termos.ariaLabel} subtitle={legal.meta.termos.description} content={termos} />
      <LegalContent ariaLabel={termos.ariaLabel} content={termos} />
    </>
  );
}
