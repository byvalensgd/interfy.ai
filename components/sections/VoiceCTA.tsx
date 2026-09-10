import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import SoundWave from "@/components/ui/SoundWave";
import { voiceCtaStatIcons } from "@/config/voice-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function VoiceCTA() {
  const locale = await getLocale();
  const { voice } = await getDictionary();
  const { cta } = voice;
  const stats = voiceCtaStatIcons.map((icon, i) => ({ icon, ...cta.stats[i] }));

  return (
    <section aria-label={cta.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-2xl p-5 sm:p-[30px]">
          <Image src="/agentes/cta-bg.png" alt="" aria-hidden="true" fill sizes="100vw" className="-z-10 object-cover" />

          <div className="flex w-full flex-wrap items-center justify-center gap-10">
            <div className="relative flex h-[110px] w-[240px] shrink-0 items-center justify-center">
              <SoundWave
                id="cta-mic"
                className="relative h-full w-full mix-blend-lighten [filter:drop-shadow(0_0_6px_rgba(9,161,234,0.85))]"
                barClassName="fill-branco"
                bars={40}
              />
              <Image
                src="/voice/cta-mic.webp"
                alt=""
                aria-hidden="true"
                width={69}
                height={110}
                className="absolute inset-0 m-auto h-[110px] w-auto object-contain"
              />
            </div>

            <div className="flex min-w-[280px] flex-1 flex-col items-center gap-2 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[32px] leading-[1.2] font-bold">{cta.heading}</p>
              <p className="text-[32px] leading-[1.2] font-bold">{cta.subheading}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[15px]">
              <Button href={withLocale("/comece-gratis", locale)} variant="secondary" className="whitespace-nowrap">
                {cta.primaryButton}
              </Button>
              <Link
                href={withLocale("/demo", locale)}
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-[30px] py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30"
              >
                {cta.secondaryButton}
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <StatsBar stats={stats} label={cta.statsLabel} />
        </Reveal>
      </div>
    </section>
  );
}
