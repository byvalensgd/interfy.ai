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
    title: legal.meta.lgpd.title,
    description: legal.meta.lgpd.description,
    path: "/legal/lgpd",
    keywords: legal.meta.lgpd.keywords,
  });
}

export default async function LgpdPage() {
  const locale = await getLocale();
  const { legal } = await getDictionary();
  const { lgpd } = legal;

  return (
    <>
      <LegalHero ariaLabel={lgpd.ariaLabel} subtitle={legal.meta.lgpd.description} content={lgpd} />
      <LegalContent
        ariaLabel={lgpd.ariaLabel}
        content={lgpd}
        certificationsCtaHref={withLocale("/legal/seguranca", locale)}
        locale={locale}
      />
    </>
  );
}
