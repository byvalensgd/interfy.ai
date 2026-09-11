import SimpleHero from "@/components/sections/SimpleHero";
import CasesGrid from "@/components/sections/CasesGrid";
import GenericCTA from "@/components/sections/GenericCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { cases } = await getDictionary();

  return buildMetadata({
    locale,
    title: cases.meta.title,
    description: cases.meta.description,
    path: "/cases",
    keywords: cases.meta.keywords,
  });
}

export default async function CasesPage() {
  const locale = await getLocale();
  const { cases } = await getDictionary();

  return (
    <>
      <SimpleHero
        ariaLabel={cases.hero.ariaLabel}
        headingId="cases-hero-heading"
        eyebrow={cases.hero.eyebrow}
        titleLine1={cases.hero.titleLine1}
        titleHighlight={cases.hero.titleHighlight}
        description={cases.hero.description}
      />
      <CasesGrid
        ariaLabel={cases.grid.ariaLabel}
        heading={cases.grid.heading}
        illustrativeNote={cases.grid.illustrativeNote}
        complianceNote={cases.grid.complianceNote}
        items={cases.grid.items}
      />
      <GenericCTA
        ariaLabel={cases.cta.ariaLabel}
        heading={cases.cta.heading}
        subheading={cases.cta.subheading}
        primaryLabel={cases.cta.primaryButton}
        primaryHref={withLocale("/comece-gratis", locale)}
        secondaryLabel={cases.cta.secondaryButton}
        secondaryHref={withLocale("/demo", locale)}
      />
    </>
  );
}
