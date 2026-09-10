import SimpleHero from "@/components/sections/SimpleHero";
import SuporteChannels from "@/components/sections/SuporteChannels";
import FaqAccordion from "@/components/ui/FaqAccordion";
import GenericCTA from "@/components/sections/GenericCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export async function generateMetadata() {
  const locale = await getLocale();
  const { suporte } = await getDictionary();

  return buildMetadata({
    locale,
    title: suporte.meta.title,
    description: suporte.meta.description,
    path: "/suporte",
    keywords: suporte.meta.keywords,
  });
}

export default async function SuportePage() {
  const locale = await getLocale();
  const { suporte } = await getDictionary();

  return (
    <>
      <SimpleHero
        ariaLabel={suporte.hero.ariaLabel}
        headingId="suporte-hero-heading"
        eyebrow={suporte.hero.eyebrow}
        titleLine1={suporte.hero.titleLine1}
        titleHighlight={suporte.hero.titleHighlight}
        description={suporte.hero.description}
        primaryLabel={suporte.hero.primaryLabel}
        primaryHref="#faq"
        secondaryLabel={suporte.hero.secondaryLabel}
        secondaryHref={withLocale("/contato", locale)}
      />
      <SuporteChannels ariaLabel={suporte.channels.ariaLabel} heading={suporte.channels.heading} items={suporte.channels.items} />
      <section id="faq" className="flex justify-center px-5 py-10 sm:py-16">
        <div className="w-full max-w-[900px]">
          <FaqAccordion faq={suporte.faq.items} heading={suporte.faq.heading} ariaExpand={suporte.faq.ariaExpand} />
        </div>
      </section>
      <GenericCTA
        ariaLabel={suporte.cta.ariaLabel}
        heading={suporte.cta.heading}
        subheading={suporte.cta.subheading}
        primaryLabel={suporte.cta.primaryButton}
        primaryHref={withLocale("/comece-gratis", locale)}
        secondaryLabel={suporte.cta.secondaryButton}
        secondaryHref={withLocale("/demo", locale)}
      />
    </>
  );
}
