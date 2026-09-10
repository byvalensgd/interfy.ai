import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { bpmHeroStatIcons } from "@/config/bpm-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

// Real product screenshots — the "ENG" set covers every non-Portuguese
// locale (en, es), the plain set is pt-BR only.
const bpmHeroSlidesPt = ["/bpm/bpm-slide-1.webp", "/bpm/bpm-slide-2.webp", "/bpm/bpm-slide-3.webp", "/bpm/bpm-slide-4.webp"];
const bpmHeroSlidesEn = ["/bpm/bpm-slide-1-en.webp", "/bpm/bpm-slide-2-en.webp", "/bpm/bpm-slide-3-en.webp", "/bpm/bpm-slide-4-en.webp"];

export default async function BpmHero() {
  const locale = await getLocale();
  const { process, common } = await getDictionary();
  const { hero } = process;
  const stats = bpmHeroStatIcons.map((icon, i) => ({ icon, ...hero.stats[i] }));
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
          <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <h1
                id="bpm-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {hero.titlePrefix}
                <span className="text-azul-base">{hero.titleHighlight}</span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                <span className="font-bold text-azul-base">{hero.descriptionBrand}</span>
                {hero.descriptionText}
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

            <ul className="flex w-full flex-wrap items-start gap-5">
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
              className="aspect-[2625/1769] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
