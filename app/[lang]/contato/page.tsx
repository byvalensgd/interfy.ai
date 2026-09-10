import SimpleHero from "@/components/sections/SimpleHero";
import ContatoChannels from "@/components/sections/ContatoChannels";
import GenericCTA from "@/components/sections/GenericCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { contato } = await getDictionary();

  return buildMetadata({
    locale,
    title: contato.meta.title,
    description: contato.meta.description,
    path: "/contato",
    keywords: contato.meta.keywords,
  });
}

export default async function ContatoPage() {
  const locale = await getLocale();
  const { contato } = await getDictionary();

  return (
    <>
      <SimpleHero
        ariaLabel={contato.hero.ariaLabel}
        headingId="contato-hero-heading"
        eyebrow={contato.hero.eyebrow}
        titleLine1={contato.hero.titleLine1}
        titleHighlight={contato.hero.titleHighlight}
        description={contato.hero.description}
        primaryLabel={contato.hero.primaryLabel}
        primaryHref={withLocale("/demo", locale)}
        secondaryLabel={contato.hero.secondaryLabel}
        secondaryHref={withLocale("/comece-gratis", locale)}
      />
      <ContatoChannels ariaLabel={contato.channels.ariaLabel} heading={contato.channels.heading} items={contato.channels.items} />
      <GenericCTA
        ariaLabel={contato.cta.ariaLabel}
        heading={contato.cta.heading}
        subheading={contato.cta.subheading}
        primaryLabel={contato.cta.primaryButton}
        primaryHref={withLocale("/comece-gratis", locale)}
        secondaryLabel={contato.cta.secondaryButton}
        secondaryHref={withLocale("/demo", locale)}
      />
    </>
  );
}
