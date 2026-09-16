import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CreditsGauge from "@/components/ui/CreditsGauge";
import { agentesCreditFeatures, agentesCreditsBalance } from "@/config/agentes";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const governanceCardBackground = "linear-gradient(121deg, #ffffff 4.5532%, #eff7ff 90.434%, #c8e0ff 126.82%)";
const creditsCardBackground = "linear-gradient(126deg, #ffffff 4.5532%, #efefff 90.434%, #c8c8ff 126.82%)";

export default async function AgentesHighlights() {
  const locale = await getLocale();
  const { agents } = await getDictionary();
  const highlights = agents.highlights;

  return (
    <section aria-label={highlights.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      {/* Grid + auto-fit/minmax (not flex-wrap) so the cards actually shrink
          toward their 320px floor before dropping to a second row, and
          items-stretch so both cards always share the row's tallest height. */}
      <div className="grid w-full max-w-[1400px] items-stretch gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        <Reveal
          className="@container flex h-full flex-col overflow-hidden rounded-[20px] border border-contorno-base px-5 py-[30px]"
          style={{ backgroundImage: governanceCardBackground }}
        >
          {/* Below 570px of the card's own width, the shield can't sit beside
              the text without cramping it — stack instead, text on top
              (col-reverse keeps the image, first in the DOM so it stays on
              the left once side by side, at the bottom when stacked). */}
          <div className="flex h-full w-full flex-col-reverse gap-10 @min-[570px]:flex-row @min-[570px]:items-stretch @min-[570px]:justify-center @min-[570px]:gap-[40px]">
            <div className="relative h-[210px] w-[210px] shrink-0 self-center">
              <Image src="/agentes/shield-governance.png" alt="" aria-hidden="true" fill sizes="179px" className="object-cover" />
            </div>
            <div className="flex min-h-[220px] min-w-[280px] flex-1 flex-col gap-[30px]">
              <h3 className="text-xl leading-[1.2] font-bold text-texto">
                {highlights.governance.title} <span className="text-azul-base">{highlights.governance.titleAccent}</span>
              </h3>
              <ul className="flex flex-col gap-[15px]">
                {highlights.governance.items.map((item: string) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Image
                      src="/icons/voice/check-azul.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    <span className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={withLocale("/legal/seguranca", locale)}
                variant="secondary"
                size="sm"
                className="!mt-auto !w-fit !rounded-md"
              >
                {highlights.governance.cta}
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="@container flex h-full flex-col overflow-hidden rounded-[20px] border border-contorno-base px-5 py-[30px]"
          style={{ backgroundImage: creditsCardBackground }}
          delayMs={120}
        >
          <div className="flex h-full w-full flex-col items-center gap-[40px] @min-[570px]:flex-row @min-[570px]:items-stretch @min-[570px]:justify-center">
            <div className="flex min-h-[220px] min-w-[280px] flex-1 flex-col gap-[30px]">
              <div className="flex flex-col gap-5">
                <h3 className="inline-block bg-[linear-gradient(122deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-xl leading-[1.2] font-bold text-transparent">
                  {highlights.credits.title}
                </h3>
                <p className="text-sm leading-[1.2] font-medium text-texto">{highlights.credits.description}</p>
              </div>
              <ul className="flex flex-col gap-[15px]">
                {agentesCreditFeatures.map((item, i) => (
                  <li key={item.icon} className="flex items-center gap-2.5">
                    <Image src={item.icon} alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                    <span className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">
                      {highlights.credits.features[i].label}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                href={withLocale("/platform/ai-creditos", locale)}
                variant="secondary"
                size="sm"
                className="!mt-auto !w-fit !rounded-md"
              >
                {highlights.credits.cta}
              </Button>
            </div>
            <div className="flex w-[210px] shrink-0 items-center justify-center self-center">
              <div className="[&>div]:max-w-[210px]">
                <CreditsGauge
                  percent={agentesCreditsBalance.used}
                  label={highlights.credits.gaugeLabel}
                  value={agentesCreditsBalance.value}
                  sublabel={highlights.credits.gaugeSublabel}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
