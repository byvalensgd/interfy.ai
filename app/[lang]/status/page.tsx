import SimpleHero from "@/components/sections/SimpleHero";
import StatusList from "@/components/sections/StatusList";
import StatusInfra from "@/components/sections/StatusInfra";
import GenericCTA from "@/components/sections/GenericCTA";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { statusInfraIcons } from "@/config/status-page";

export async function generateMetadata() {
  const locale = await getLocale();
  const { status } = await getDictionary();

  return buildMetadata({
    locale,
    title: status.meta.title,
    description: status.meta.description,
    path: "/status",
    keywords: status.meta.keywords,
  });
}

const ctaStatIcons = ["/icons/stats/disponibilidade.svg", "/icons/stats/seguranca.svg", "/icons/stats/conformidade.svg"];

export default async function StatusPage() {
  const locale = await getLocale();
  const { status } = await getDictionary();
  const ctaStats = ctaStatIcons.map((icon, i) => ({ icon, ...status.cta.stats[i] }));
  const infraItems = statusInfraIcons.map((icon, i) => ({ icon, ...status.infra.items[i] }));

  return (
    <>
      <SimpleHero
        ariaLabel={status.hero.ariaLabel}
        headingId="status-hero-heading"
        eyebrow={status.hero.eyebrow}
        titleLine1={status.hero.titleLine1}
        titleHighlight={status.hero.titleHighlight}
        description={status.hero.description}
      />
      <StatusList
        ariaLabel={status.list.ariaLabel}
        heading={status.list.heading}
        operationalLabel={status.list.operationalLabel}
        services={status.list.services}
        incidentsHeading={status.list.incidentsHeading}
        incidentsEmpty={status.list.incidentsEmpty}
      />
      <StatusInfra
        ariaLabel={status.infra.ariaLabel}
        heading={status.infra.heading}
        subheading={status.infra.subheading}
        items={infraItems}
        certifications={status.infra.certifications}
        certificationsCtaHref={withLocale("/legal/seguranca", locale)}
      />
      <GenericCTA
        ariaLabel={status.cta.ariaLabel}
        heading={status.cta.heading}
        subheading={status.cta.subheading}
        primaryLabel={status.cta.primaryButton}
        primaryHref={withLocale("/comece-gratis", locale)}
        secondaryLabel={status.cta.secondaryButton}
        secondaryHref={withLocale("/demo", locale)}
        stats={ctaStats}
        statsLabel={status.cta.statsLabel}
      />
    </>
  );
}
