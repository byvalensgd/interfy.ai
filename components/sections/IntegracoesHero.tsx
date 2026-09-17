import Image from "next/image";
import { Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SegurancaRadialDiagram from "@/components/ui/SegurancaRadialDiagram";
import { integracoesHeroDiagramIcons, integracoesHeroBannerItems } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function IntegracoesHero() {
  const { integracoes } = await getDictionary();
  const { hero } = integracoes;
  const diagramItems = integracoesHeroDiagramIcons.map((item, i) => ({ ...item, ...hero.diagram.items[i] }));
  const banner = integracoesHeroBannerItems.map((item, i) => ({ ...item, ...hero.banner[i] }));

  return (
    <section
      aria-labelledby="integracoes-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 flex-wrap items-center justify-center gap-10">
          <Reveal immediate className="mx-auto flex w-full min-w-[280px] max-w-[900px] flex-1 flex-col items-center gap-10 lg:mx-0 lg:max-w-[600px] lg:items-start">
            <h1
              id="integracoes-hero-heading"
              className="text-center text-[2rem] leading-[1.2] font-extrabold text-texto lg:text-left lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)]"
            >
              {hero.headingPrefix}
              <span className="bg-[linear-gradient(102deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>
            </h1>
            <p className="text-center text-[clamp(1rem,0.4167vw+0.9167rem,1.25rem)] leading-[1.2] font-medium text-texto lg:text-left">
              {hero.description}
            </p>

            <div className="@container flex w-full flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5 lg:justify-start">
              {/* Button (an inline-flex container) has no effect from the site's global
                  text-box-trim rule — per spec that property does nothing on flex/grid
                  containers, only on the inline formatting context an actual text run
                  establishes. Wrapping the label in its own span gives it that context, so
                  it trims correctly instead of leaving the cap height sitting off-center. */}
              <Button
                href="#sistemas"
                variant="primary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                showArrow
              >
                <span>{hero.ctaPrimary}</span>
              </Button>
              <Button
                href="/suporte"
                variant="secondary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
              >
                <span>{hero.ctaSecondary}</span>
                <Code2 className="size-[18px]" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delayMs={120} className="w-full basis-full lg:w-auto lg:basis-auto lg:min-w-[400px] lg:flex-1">
            <div id="sistemas" className="scroll-mt-[calc(var(--header-height)+20px)]">
              <SegurancaRadialDiagram items={diagramItems} ariaLabel={hero.diagramAriaLabel} />
            </div>
          </Reveal>
        </div>

        {/* "Complete Box" (see lib/completeBox.ts): flex-basis (hand-calculated
            for this row's gap-5) in place of a bare flex-1, so every row stays
            within 1 item of the next and a short last row stretches (grow) to
            fill instead of an uneven greedy wrap. */}
        <Reveal immediate delayMs={200} className="w-full">
          <ul className="flex w-full flex-wrap items-stretch gap-5">
            {banner.map((item) => (
              <li
                key={item.icon}
                className="flex min-h-[140px] min-w-[320px] grow basis-[calc(50%-0.625rem)] flex-col items-center justify-center gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 text-center sm:basis-[calc(33.3333%-0.8333rem)] lg:items-stretch lg:text-left"
              >
                <div className="flex flex-col items-center gap-5 lg:h-[50px] lg:flex-row">
                  <span className={`flex size-[50px] shrink-0 items-center justify-center rounded-full p-3 ${item.bg}`}>
                    <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} />
                  </span>
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-bold text-texto-doc-ok">{item.title}</p>
                </div>
                <p className="text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
