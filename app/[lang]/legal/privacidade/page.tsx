import LegalHero from "@/components/sections/LegalHero";
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
    <>
      <LegalHero ariaLabel={privacidade.ariaLabel} subtitle={legal.meta.privacidade.description} content={privacidade} />
      <LegalContent
        ariaLabel={privacidade.ariaLabel}
        content={privacidade}
        certificationsCtaHref={withLocale("/legal/seguranca", locale)}
        locale={locale}
      />
    </>
  );
}
