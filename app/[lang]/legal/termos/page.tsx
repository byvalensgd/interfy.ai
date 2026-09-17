import LegalContent from "@/components/sections/LegalContent";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

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
  const locale = await getLocale();
  const { legal } = await getDictionary();
  const { termos } = legal;

  return (
    <LegalContent
      ariaLabel={termos.ariaLabel}
      subtitle={legal.meta.termos.description}
      content={termos}
      search={legal.search}
      certificationsCtaHref={withLocale("/seguranca", locale)}
      locale={locale}
    />
  );
}
