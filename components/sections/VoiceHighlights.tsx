import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CreditsGauge from "@/components/ui/CreditsGauge";
import { voiceCreditFeatures, voiceCreditsBalance } from "@/config/voice-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const governanceCardBackground = "linear-gradient(129.706deg, #ffffff 4.5532%, #eff7ff 90.434%, #c8e0ff 126.82%)";
const creditsCardBackground = "linear-gradient(129.706deg, #ffffff 4.5532%, #efefff 90.434%, #c8c8ff 126.82%)";

export default async function VoiceHighlights() {
  const locale = await getLocale();
  const { voice } = await getDictionary();
  const { highlights } = voice;

  return (
    <section aria-label={highlights.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-wrap items-start justify-center gap-5">
        <Reveal
          className="flex min-w-[320px] flex-1 basis-[620px] flex-col items-stretch gap-10 overflow-hidden rounded-[20px] border border-contorno-base px-5 py-[30px] sm:h-[270px] sm:flex-row sm:gap-[40px]"
          style={{ backgroundImage: governanceCardBackground }}
        >
          <div className="relative h-[220px] w-full max-w-[213px] shrink-0 sm:h-full">
            <Image
              src="/agentes/shield-governance.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="213px"
              className="object-contain"
            />
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-[30px]">
            <h3 className="text-xl leading-[1.2] font-bold text-texto">
              {highlights.governance.title} <span className="text-azul-base">{highlights.governance.titleAccent}</span>
            </h3>
            <ul className="flex flex-col gap-[15px]">
              {highlights.governance.items.map((item: string) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Image src="/icons/features/check-blue.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          className="flex min-w-[320px] flex-1 basis-[620px] flex-wrap items-start gap-[40px] overflow-hidden rounded-[20px] border border-contorno-base px-5 py-[30px]"
          style={{ backgroundImage: creditsCardBackground }}
          delayMs={120}
        >
          <div className="flex min-w-[280px] flex-1 flex-col gap-[30px]">
            <div className="flex flex-col gap-5">
              <h3 className="text-xl leading-[1.2] font-bold text-texto">
                {highlights.credits.title}{" "}
                <span className="inline-block bg-[linear-gradient(153deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                  {highlights.credits.titleBrand}
                </span>
              </h3>
              <p className="text-sm leading-[1.2] font-medium text-texto">{highlights.credits.description}</p>
            </div>
            <div className="flex w-full items-start justify-center gap-5">
              {voiceCreditFeatures.map((item, i) => (
                <div key={item.icon} className="flex min-w-0 flex-1 flex-col items-center gap-[15px]">
                  <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
                  <span className="w-full text-center text-sm leading-[1.2] font-bold text-texto">
                    {highlights.credits.features[i].label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[170px] shrink-0 flex-col items-start gap-[10px]">
            <CreditsGauge
              percent={voiceCreditsBalance.used}
              label={highlights.credits.gaugeLabel}
              value={voiceCreditsBalance.value}
              sublabel={highlights.credits.gaugeSublabel}
            />
            <Button href={withLocale("/platform/ai-creditos", locale)} variant="secondary" size="sm" className="w-full !rounded-md">
              {highlights.credits.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
