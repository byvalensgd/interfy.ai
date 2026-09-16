import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SoundWave from "@/components/ui/SoundWave";
import { voiceHeroHighlights, voicePlatformCards } from "@/config/voice-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { getHeroSlides, withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";

export default async function VoiceHero() {
  const locale = await getLocale();
  const { voice } = await getDictionary();
  const { hero } = voice;
  // Same "logged in" dashboard screenshot as the Home hero's second slide.
  const [, heroMockup] = getHeroSlides(locale);

  return (
    <section
      aria-labelledby="voice-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image src="/hero/hero-bg.webp" alt="" aria-hidden="true" fill sizes="100vw" className="-z-10 object-cover" />

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[620fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[620px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="voice-hero-heading"
                  className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
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

              {/* Never wrap into two rows — shrink padding/font (and let text
                  wrap inside the button as a last resort) so both CTAs stay
                  side by side down to the narrowest phone widths. */}
              <div className="@container flex w-full flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5 lg:justify-start">
                <Button
                  href={withLocale("/test-drive", locale)}
                  variant="primary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                  disabled={CTA_DISABLED}
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  href={withLocale("/demo", locale)}
                  variant="secondary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                  disabled={CTA_DISABLED}
                >
                  {hero.ctaSecondary}
                </Button>
              </div>

              {/* Below lg: each highlight becomes its own bordered card (icon
                  over centered text), matching the site's "Blocos Mobile"
                  pattern. */}
              <ul className="flex w-full flex-wrap gap-4 lg:hidden">
                {voiceHeroHighlights.map((item, i) => (
                  <li
                    key={item.icon}
                    className="flex min-w-[140px] flex-1 flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center"
                  >
                    <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                      {hero.highlights[i].label}
                    </p>
                  </li>
                ))}
              </ul>

              <ul className="hidden w-full flex-wrap items-start justify-center gap-5 lg:flex lg:justify-start">
                {voiceHeroHighlights.map((item, i) => (
                  <li key={item.icon} className="flex min-w-[240px] flex-1 items-center gap-[15px]">
                    <Image src={item.icon} alt="" aria-hidden="true" width={28} height={28} className="shrink-0" />
                    <span className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-texto">
                      {hero.highlights[i].label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-center" delayMs={120}>
              <div className="relative mx-auto aspect-[2625/1793] w-full max-w-[750px] lg:max-w-none">
                <Image
                  src={heroMockup}
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
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-bold text-texto">
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
