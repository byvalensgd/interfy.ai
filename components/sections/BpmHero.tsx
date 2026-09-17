import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { bpmHeroStatIcons } from "@/config/bpm-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";
import { getCompleteBoxBasis } from "@/lib/completeBox";

// Real product screenshots — the "ENG" set covers every non-Portuguese
// locale (en, es), the plain set is pt-BR only.
const bpmHeroSlidesPt = ["/bpm/bpm-slide-1.webp", "/bpm/bpm-slide-2.webp", "/bpm/bpm-slide-3.webp", "/bpm/bpm-slide-4.webp"];
const bpmHeroSlidesEn = ["/bpm/bpm-slide-1-en.webp", "/bpm/bpm-slide-2-en.webp", "/bpm/bpm-slide-3-en.webp", "/bpm/bpm-slide-4-en.webp"];

export default async function BpmHero() {
  const locale = await getLocale();
  const { process, common } = await getDictionary();
  const { hero } = process;
  const stats = bpmHeroStatIcons.map((icon, i) => ({ icon, ...hero.stats[i] }));
  const statsBasis = getCompleteBoxBasis(stats.length);
  const heroSlides = locale === "pt" ? bpmHeroSlidesPt : bpmHeroSlidesEn;

  return (
    <section
      aria-labelledby="bpm-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image
        src="/hero/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="flex w-full max-w-[1400px] flex-1 items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
          <Reveal immediate className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center lg:mx-0 lg:max-w-[600px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <h1
                id="bpm-hero-heading"
                className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {hero.titlePrefix}
                <span className="text-azul-base">{hero.titleHighlight}</span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                <span className="font-bold text-azul-base">{hero.descriptionBrand}</span>
                {hero.descriptionText}
              </p>
            </div>

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

            {/* Below lg: each stat becomes its own bordered card (icon over
                label, centered), same mobile card pattern used across the
                site's stat/feature strips. */}
            <ul className="flex w-full flex-wrap gap-4 lg:hidden">
              {stats.map((stat) => (
                <li
                  key={stat.icon}
                  className={`flex min-w-[140px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${statsBasis}`}
                >
                  <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <div className="flex w-full flex-col items-center gap-2">
                    <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-extrabold text-texto">
                      {stat.label}
                    </p>
                    <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{stat.sublabel}</p>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="hidden w-full flex-wrap items-start gap-5 lg:flex">
              {stats.map((stat) => (
                <li key={stat.icon} className="flex min-w-[120px] flex-1 flex-col items-start gap-2.5 text-left">
                  <div className="flex items-center gap-2">
                    <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="text-lg leading-[1.2] font-extrabold whitespace-nowrap text-texto">
                      {stat.label}
                    </span>
                  </div>
                  <span className="w-full text-sm leading-[1.2] font-medium text-texto-medio">
                    {stat.sublabel}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal immediate className="flex min-w-0 flex-col items-end" delayMs={120}>
            <HeroSlideshow
              images={heroSlides}
              alt={hero.mockupAlt}
              prevLabel={common.prevSlide}
              nextLabel={common.nextSlide}
              className="mx-auto aspect-[2625/1769] w-full max-w-[750px] lg:max-w-none"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
