import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CreditsGauge from "@/components/ui/CreditsGauge";
import { agentesCreditFeatures, agentesCreditsBalance } from "@/config/agentes";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const governanceCardBackground =
  "linear-gradient(121deg, #ffffff 4.5532%, #eff7ff 90.434%, #c8e0ff 126.82%)";
const creditsCardBackground =
  "linear-gradient(126deg, #ffffff 4.5532%, #efefff 90.434%, #c8c8ff 126.82%)";

export default async function AgentesHighlights() {
  const locale = await getLocale();
  const { agents } = await getDictionary();
  const highlights = agents.highlights;

  return (
    <section aria-label={highlights.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-wrap items-stretch justify-center gap-5">
        <Reveal
          className="flex min-w-[320px] flex-1 basis-[620px] flex-col items-start gap-8 overflow-hidden rounded-[20px] border border-contorno-base p-5 sm:flex-row sm:p-[30px]"
          style={{ backgroundImage: governanceCardBackground }}
        >
          <div className="relative h-[220px] w-full shrink-0 sm:h-auto sm:w-[210px] sm:self-stretch">
            <Image
              src="/agentes/shield-governance.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 640px) 210px, 60vw"
              className="object-contain object-top"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-between gap-[30px] sm:self-stretch">
            <div className="flex w-full flex-col gap-[30px]">
              <h3 className="text-xl leading-[1.2] font-bold text-texto">
                {highlights.governance.title} <span className="text-azul-base">{highlights.governance.titleAccent}</span>
              </h3>
              <ul className="flex flex-col gap-[15px]">
                {highlights.governance.items.map((item: string) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Image
                      src="/icons/features/check-blue.svg"
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
            </div>
            <Button href={withLocale("/legal/seguranca", locale)} variant="secondary" size="sm" className="!rounded-md">
              {highlights.governance.cta}
            </Button>
          </div>
        </Reveal>

        <Reveal
          className="flex min-w-[320px] flex-1 basis-[620px] flex-wrap items-start gap-8 overflow-hidden rounded-[20px] border border-contorno-base p-5 sm:p-[30px]"
          style={{ backgroundImage: creditsCardBackground }}
          delayMs={120}
        >
          <div className="flex min-w-[280px] flex-1 flex-col gap-[30px]">
            <div className="flex flex-col gap-5">
              <h3 className="inline-block bg-[linear-gradient(122deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-xl leading-[1.2] font-bold text-transparent">
                {highlights.credits.title}
              </h3>
              <p className="text-sm leading-[1.2] font-medium text-texto">
                {highlights.credits.description}
              </p>
            </div>
            <ul className="flex flex-col gap-[15px]">
              {agentesCreditFeatures.map((item, i) => (
                <li key={item.icon} className="flex items-center gap-[15px]">
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                  <span className="min-w-0 flex-1 text-xs leading-[1.2] font-bold text-texto">
                    {highlights.credits.features[i].label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full max-w-[200px] flex-col items-center justify-between gap-[10px] sm:w-auto sm:self-stretch">
            <CreditsGauge
              percent={agentesCreditsBalance.used}
              label={highlights.credits.gaugeLabel}
              value={agentesCreditsBalance.value}
              sublabel={highlights.credits.gaugeSublabel}
            />
            <Button href={withLocale("/platform/ai-creditos", locale)} variant="secondary" size="sm" className="!rounded-md">
              {highlights.credits.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
