import Image from "next/image";
import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import SegurancaRadialDiagram from "@/components/ui/SegurancaRadialDiagram";
import { segurancaHeroDiagramIcons, segurancaHeroStatIcons } from "@/config/seguranca-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function SegurancaHero() {
  const locale = await getLocale();
  const { seguranca } = await getDictionary();
  const { hero } = seguranca;
  const diagramItems = segurancaHeroDiagramIcons.map((icon, i) => ({ icon, ...hero.diagram.items[i] }));
  const stats = segurancaHeroStatIcons.map((icon, i) => ({
    icon,
    label: hero.stats[i].label,
    sublabel: hero.stats[i].description,
    // "Seguro & Confiável" hugs its own (wider) content instead of being
    // squeezed into an equal third — see StatsBar's fill/hug split, node 5389:25960.
    fill: i !== segurancaHeroStatIcons.length - 1,
  }));

  return (
    <section
      aria-labelledby="seguranca-hero-heading"
      className="flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_800fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 lg:items-start">
              <h1
                id="seguranca-hero-heading"
                className="text-center text-[2rem] leading-[1.2] font-extrabold text-texto lg:text-left lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)]"
              >
                {hero.headingPrefix}
                <span className="inline-block bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                  {hero.headingHighlight}
                </span>
              </h1>
              <p className="text-center text-base sm:text-lg lg:text-[clamp(1.125rem,0.48077vw+0.81731rem,1.25rem)] font-medium lg:[font-weight:clamp(400,-24.03846vw+746.15385,500)] leading-[1.2] text-texto lg:text-left">
                {hero.description}
              </p>

              <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Button
                  href={withLocale("/contato", locale)}
                  variant="primary"
                  className="grow whitespace-nowrap sm:grow-0"
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  href={withLocale("/contato", locale)}
                  variant="secondary"
                  className="grow whitespace-nowrap sm:grow-0"
                >
                  {hero.ctaSecondary}
                  <Download className="size-[18px]" aria-hidden="true" />
                </Button>
              </div>

              <StatsBar stats={stats} label={hero.statsAriaLabel} />
            </Reveal>

            <Reveal immediate delayMs={120}>
              <SegurancaRadialDiagram items={diagramItems} ariaLabel={hero.diagramAriaLabel} />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <div className="flex w-full flex-col items-center gap-10 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:px-10 lg:flex-row">
            <div className="flex shrink-0 items-center gap-5">
              <p className="whitespace-nowrap text-base leading-[1.2] font-bold text-texto">{hero.poweredByLabel}</p>
              <div className="relative h-[60px] w-[100px] shrink-0">
                <Image src="/icons/features/aws.svg" alt="AWS" fill sizes="100px" className="object-contain" />
              </div>
            </div>
            {/* Below lg: each item becomes its own bordered card, per the
                site's standing icon+text mobile treatment (see StatsBar.tsx) —
                a fixed 6-column row doesn't leave room for these labels above
                that breakpoint. */}
            <ul aria-label={hero.awsChecklistAriaLabel} className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
              {hero.awsChecklist.map((item: string) => (
                <li
                  key={item}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-contorno-base bg-branco p-4 text-center"
                >
                  <Image src="/icons/features/check-blue.svg" alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                  <p className="text-sm leading-[1.2] font-medium text-texto">{item}</p>
                </li>
              ))}
            </ul>

            <ul
              aria-label={hero.awsChecklistAriaLabel}
              className="hidden w-full flex-1 grid-cols-3 gap-x-10 gap-y-[15px] lg:grid xl:grid-cols-6"
            >
              {hero.awsChecklist.map((item: string) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Image src="/icons/features/check-blue.svg" alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                  <div className="flex min-h-[20px] flex-1 flex-col justify-center">
                    <p className="text-base leading-[1.2] font-medium text-texto">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
