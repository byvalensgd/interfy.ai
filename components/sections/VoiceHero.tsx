import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SoundWave from "@/components/ui/SoundWave";
import { voiceHeroHighlights, voicePlatformCards } from "@/config/voice-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function VoiceHero() {
  const locale = await getLocale();
  const { voice } = await getDictionary();
  const { hero } = voice;

  return (
    <section
      aria-labelledby="voice-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image src="/hero/hero-bg.webp" alt="" aria-hidden="true" fill sizes="100vw" className="-z-10 object-cover" />

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="voice-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {hero.heading}{" "}
                  <span className="inline-block bg-[linear-gradient(137deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                    {hero.headingHighlight}
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  {hero.description}
                </p>
              </div>

              <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Button href={withLocale("/comece-gratis", locale)} variant="primary" className="grow whitespace-nowrap lg:grow-0">
                  {hero.ctaPrimary}
                </Button>
                <Button href={withLocale("/demo", locale)} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                  {hero.ctaSecondary}
                </Button>
              </div>

              <ul className="flex w-full flex-wrap items-start justify-center gap-5 lg:justify-start">
                {voiceHeroHighlights.map((item, i) => (
                  <li key={item.icon} className="flex min-w-[100px] flex-1 flex-col items-center gap-[15px] text-center">
                    <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                    <span className="w-full text-base leading-[1.2] font-bold text-texto">
                      {hero.highlights[i].label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-center" delayMs={120}>
              <div className="relative aspect-[2625/1793] w-full">
                <Image
                  src="/voice/hero-mockup.webp"
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <ul className="flex w-full flex-wrap items-stretch justify-center gap-[30px]">
            {voicePlatformCards.map((item, i) => (
              <li
                key={item.icon}
                className="flex min-w-[320px] flex-1 flex-col items-start gap-5 rounded-[20px] border border-contorno-base bg-branco p-5"
              >
                <div className="flex w-full items-center gap-5">
                  <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-xl leading-[1.2] font-bold text-texto">
                    {hero.platformCards[i].title}
                  </p>
                </div>
                <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">
                  {hero.platformCards[i].description}
                </p>
                <SoundWave id={`hero-platform-${i}`} className="h-[22.5px] w-full" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
