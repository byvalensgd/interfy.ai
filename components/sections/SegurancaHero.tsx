import Image from "next/image";
import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SegurancaRadialDiagram from "@/components/ui/SegurancaRadialDiagram";
import { segurancaHeroDiagramIcons, segurancaHeroStatIcons } from "@/config/seguranca-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function SegurancaHero() {
  const locale = await getLocale();
  const { seguranca } = await getDictionary();
  const { hero } = seguranca;
  const diagramItems = segurancaHeroDiagramIcons.map((icon, i) => ({ icon, ...hero.diagram.items[i] }));
  const stats = segurancaHeroStatIcons.map((icon, i) => ({ icon, ...hero.stats[i] }));

  return (
    <section
      aria-labelledby="seguranca-hero-heading"
      className="flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_800fr]">
            <Reveal immediate className="flex flex-col items-start gap-10">
              <h1
                id="seguranca-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {hero.headingPrefix}
                <span className="inline-block bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                  {hero.headingHighlight}
                </span>
              </h1>
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-medium leading-[1.2] text-texto">
                {hero.description}
              </p>

              <div className="flex w-full flex-wrap items-center gap-5">
                <Button href={withLocale("/contato", locale)} variant="primary" className="grow whitespace-nowrap sm:grow-0">
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

              <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                  <li key={stat.icon + stat.label} className="flex flex-col items-start gap-2.5">
                    <div className="flex items-center gap-2">
                      <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                      <p className="whitespace-nowrap text-lg leading-[1.2] font-extrabold text-texto">{stat.label}</p>
                    </div>
                    <p className="text-sm leading-[1.2] font-medium text-texto-medio">{stat.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate delayMs={120}>
              <SegurancaRadialDiagram items={diagramItems} ariaLabel={hero.diagramAriaLabel} />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <div className="flex w-full flex-wrap items-center gap-10 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:px-10">
            <div className="flex shrink-0 items-center gap-5">
              <p className="whitespace-nowrap text-base leading-[1.2] font-bold text-texto">{hero.poweredByLabel}</p>
              <Image src="/icons/features/aws.svg" alt="AWS" width={30} height={18} />
            </div>
            <ul
              aria-label={hero.awsChecklistAriaLabel}
              className="grid flex-1 grid-cols-1 gap-x-10 gap-y-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
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
