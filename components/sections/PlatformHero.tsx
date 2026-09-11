import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { platformHeroChipIcons } from "@/config/platform-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const heroSlides = ["/hero/hero-slide-3.webp", "/hero/hero-slide-1.webp"];

export default async function PlatformHero() {
  const locale = await getLocale();
  const { platform, common } = await getDictionary();
  const { hero } = platform;
  const chips = platformHeroChipIcons.map((icon, i) => ({ icon, ...hero.chips[i] }));

  return (
    <section
      aria-labelledby="platform-hero-heading"
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

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[520fr_840fr]">
            <Reveal immediate className="flex flex-col items-center gap-8 text-center lg:max-w-[520px] lg:items-start lg:text-left">
              <h1
                id="platform-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {hero.headingLine1}
                <br />
                {hero.headingLine2}
                <br />
                <span className="inline-block bg-[linear-gradient(102deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                  {hero.headingHighlight}
                </span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                {hero.description1}
              </p>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                {hero.description2}
              </p>

              <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Button href={withLocale("/comece-gratis", locale)} variant="primary" className="grow whitespace-nowrap lg:grow-0">
                  {hero.ctaPrimary}
                </Button>
                <Button href={withLocale("/demo", locale)} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                  {hero.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            <Reveal immediate className="flex min-w-0 items-center justify-center" delayMs={120}>
              <HeroSlideshow
                images={heroSlides}
                alt={hero.mockupAlt}
                prevLabel={common.prevSlide}
                nextLabel={common.nextSlide}
                className="aspect-[2625/1793] w-full"
              />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200}>
          <ul aria-label={hero.chipsAriaLabel} className="flex w-full flex-wrap items-center justify-center gap-10">
            {chips.map((chip) => (
              <li
                key={chip.icon}
                className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-contorno-base bg-branco px-[15px] py-5"
              >
                <Image src={chip.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <span className="text-base leading-[1.2] font-bold whitespace-nowrap text-texto-doc-ok">
                  {chip.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
