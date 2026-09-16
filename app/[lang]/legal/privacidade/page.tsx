import LegalContent from "@/components/sections/LegalContent";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { legal } = await getDictionary();

  return buildMetadata({
    locale,
    title: legal.meta.privacidade.title,
    description: legal.meta.privacidade.description,
    path: "/legal/privacidade",
    keywords: legal.meta.privacidade.keywords,
  });
}

export default async function PrivacidadePage() {
  const locale = await getLocale();
  const { legal } = await getDictionary();
  const { privacidade } = legal;

  return (
    <LegalContent
      ariaLabel={privacidade.ariaLabel}
      subtitle={legal.meta.privacidade.description}
      content={privacidade}
      search={legal.search}
      certificationsCtaHref={withLocale("/legal/seguranca", locale)}
      locale={locale}
    />
  );
}
