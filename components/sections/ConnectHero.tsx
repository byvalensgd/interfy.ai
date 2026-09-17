import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { connectHeroHighlights } from "@/config/connect-page";
import { CTA_DISABLED } from "@/config/feature-flags";
import { getCompleteBoxBasis } from "@/lib/completeBox";

// Real product screenshots — the "ENG" set covers every non-Portuguese
// locale (en, es), the plain set is pt-BR only.
const heroSlidesPt = ["/connect/cic-slide-1.webp", "/connect/cic-slide-2.webp", "/connect/cic-slide-3.webp"];
const heroSlidesEn = ["/connect/cic-slide-1-en.webp", "/connect/cic-slide-2-en.webp", "/connect/cic-slide-3-en.webp"];

export default async function ConnectHero() {
  const locale = await getLocale();
  const { connect, common } = await getDictionary();
  const { hero } = connect;
  const heroSlides = locale === "pt" ? heroSlidesPt : heroSlidesEn;
  const highlightsBasis = getCompleteBoxBasis(connectHeroHighlights.length);

  return (
    <section
      aria-labelledby="connect-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center lg:mx-0 lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="connect-hero-heading"
                  className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {hero.heading}{" "}
                  <span className="inline-block bg-[linear-gradient(104deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                    {hero.headingHighlight}
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  <span className="font-bold text-azul-base">{hero.descriptionBrand} </span>
                  {hero.description}
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

              <ul className="hidden w-full flex-col gap-[15px] lg:flex">
                {connectHeroHighlights.map((item, i) => (
                  <li key={item.icon} className="flex w-full items-start gap-5">
                    <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="flex min-h-[30px] min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                      {hero.highlights[i].label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-start gap-5" delayMs={120}>
              <HeroSlideshow
                images={heroSlides}
                alt={hero.imageAlt}
                prevLabel={common.prevSlide}
                nextLabel={common.nextSlide}
                className="mx-auto aspect-[2625/1769] w-full max-w-[750px] lg:max-w-none"
              />
            </Reveal>
          </div>
        </div>

        {/* Below lg: each highlight becomes its own bordered card (icon over
            centered text), matching the site's "Blocos Mobile" pattern —
            placed after the slideshow image, not beside/above it. */}
        <Reveal immediate delayMs={200} className="w-full lg:hidden">
          <ul className="flex w-full flex-wrap gap-4">
            {connectHeroHighlights.map((item, i) => (
              <li
                key={item.icon}
                className={`flex min-w-[140px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${highlightsBasis}`}
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                  {hero.highlights[i].label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
