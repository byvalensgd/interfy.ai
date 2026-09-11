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
      className="flex justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-wrap items-center justify-center gap-10">
          <Reveal immediate className="flex w-full max-w-[600px] min-w-[280px] flex-1 flex-col items-start gap-10">
            <h1
              id="integracoes-hero-heading"
              className="text-[clamp(2rem,2.5vw+1.5rem,3.5rem)] leading-[1.2] font-extrabold text-texto"
            >
              {hero.headingPrefix}
              <span className="bg-[linear-gradient(102deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>
            </h1>
            <p className="text-[clamp(1rem,0.4167vw+0.9167rem,1.25rem)] leading-[1.2] font-medium text-texto">
              {hero.description}
            </p>

            <div className="flex w-full flex-wrap items-center gap-5">
              <Button href="#sistemas" variant="primary" className="grow whitespace-nowrap sm:grow-0" showArrow>
                {hero.ctaPrimary}
              </Button>
              <Button href="/suporte" variant="secondary" className="grow whitespace-nowrap sm:grow-0">
                {hero.ctaSecondary}
                <Code2 className="size-[18px]" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delayMs={120} className="min-w-[400px] flex-1">
            <div id="sistemas" className="scroll-mt-[var(--header-height)]">
              <SegurancaRadialDiagram items={diagramItems} ariaLabel={hero.diagramAriaLabel} />
            </div>
          </Reveal>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <ul className="flex w-full flex-wrap items-stretch gap-5">
            {banner.map((item) => (
              <li
                key={item.icon}
                className="flex min-h-[140px] min-w-[320px] flex-1 flex-col justify-center gap-5 rounded-[20px] border border-contorno-base bg-branco p-5"
              >
                <div className="flex h-[50px] items-center gap-5">
                  <span className={`flex size-[50px] shrink-0 items-center justify-center rounded-full p-3 ${item.bg}`}>
                    <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} />
                  </span>
                  <p className="min-w-0 flex-1 text-xl leading-[1.2] font-bold text-texto-doc-ok">{item.title}</p>
                </div>
                <p className="text-base leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
