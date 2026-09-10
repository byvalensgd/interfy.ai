import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import SegmentsRadialDiagram from "@/components/ui/SegmentsRadialDiagram";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { segmentsHeroStats as segmentsHeroStatIcons } from "@/config/segments-page";

export default async function SegmentsHero() {
  const locale = await getLocale();
  const { segments } = await getDictionary();
  const heroStats = segmentsHeroStatIcons.map((item, i) => ({
    icon: item.icon,
    ...segments.hero.statsItems[i],
  }));

  return (
    <section
      aria-labelledby="segments-hero-heading"
      className="flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[520fr_840fr]">
            <Reveal immediate className="flex flex-col items-center gap-8 lg:max-w-[520px] lg:items-start">
              <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                <h1
                  id="segments-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {segments.hero.titleLine1}{" "}
                  <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {segments.hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  {segments.hero.description}
                </p>
              </div>

              <div className="flex w-full items-center justify-center gap-5 lg:justify-start">
                <Image
                  src="/icons/segments/ia-sparkle.svg"
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="hidden shrink-0 lg:block"
                />
                <p className="text-center text-[clamp(1rem,0.4167vw+0.9167rem,1.25rem)] leading-[1.2] font-bold text-texto lg:flex-1 lg:text-left">
                  {segments.hero.sparkleText}{" "}
                  <span className="inline-block bg-[linear-gradient(131deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {segments.hero.sparkleBrand}
                  </span>
                </p>
              </div>

              <div className="flex w-full flex-wrap items-center gap-5">
                <Button href="#catalogo" variant="primary" className="grow whitespace-nowrap">
                  {segments.hero.ctaPrimary}
                </Button>
                <Button href={withLocale("/demo", locale)} variant="secondary" className="grow whitespace-nowrap">
                  {segments.hero.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            <Reveal immediate className="w-full" delayMs={120}>
              <SegmentsRadialDiagram titles={segments.catalog.items.map((item: { title: string }) => item.title)} />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200}>
          <StatsBar stats={heroStats} label={segments.hero.statsLabel} />
        </Reveal>
      </div>
    </section>
  );
}
