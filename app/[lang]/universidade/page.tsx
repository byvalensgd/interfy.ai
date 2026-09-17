import SimpleHero from "@/components/sections/SimpleHero";
import UniversidadeBenefits from "@/components/sections/UniversidadeBenefits";
import UniversidadeRecursos from "@/components/sections/UniversidadeRecursos";
import UniversidadeModulos from "@/components/sections/UniversidadeModulos";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { universidade } = await getDictionary();

  return buildMetadata({
    locale,
    title: universidade.meta.title,
    description: universidade.meta.description,
    path: "/universidade",
    keywords: universidade.meta.keywords,
  });
}

export default async function UniversidadePage() {
  const locale = await getLocale();
  const { universidade } = await getDictionary();
  const { hero, benefits, resources, modules } = universidade;

  return (
    <>
      <SimpleHero
        ariaLabel={hero.ariaLabel}
        headingId="universidade-hero-heading"
        titleLine1={hero.titleLine1}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryLabel={hero.primaryLabel}
        primaryHref={withLocale("/test-drive", locale)}
        secondaryLabel={hero.secondaryLabel}
        secondaryHref={withLocale("/demo", locale)}
      />
      <UniversidadeBenefits
        ariaLabel={benefits.ariaLabel}
        heading={benefits.heading}
        headingHighlight={benefits.headingHighlight}
        description={benefits.description}
        items={benefits.items}
      />
      <UniversidadeRecursos
        ariaLabel={resources.ariaLabel}
        heading={resources.heading}
        headingHighlight={resources.headingHighlight}
        description={resources.description}
        items={resources.items}
      />
      <UniversidadeModulos
        ariaLabel={modules.ariaLabel}
        heading={modules.heading}
        headingHighlight={modules.headingHighlight}
        description={modules.description}
        items={modules.items}
        cta={modules.cta}
        primaryLabel={hero.primaryLabel}
        secondaryLabel={hero.secondaryLabel}
        locale={locale}
      />
    </>
  );
}
