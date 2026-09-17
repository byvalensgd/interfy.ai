import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { empresaHeroStatIcons } from "@/config/empresa-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { getHeroSlides, withLocale } from "@/lib/i18n/paths";

export default async function EmpresaHero() {
  const locale = await getLocale();
  const { empresa, common } = await getDictionary();
  const { hero } = empresa;
  // Temporary — same slideshow as the Home hero, until a dedicated empresa visual is provided.
  const heroSlides = getHeroSlides(locale);
  const stats = empresaHeroStatIcons.map((icon, i) => ({ icon, ...hero.stats[i] }));
  const partnerHref = withLocale("/parceria", locale);

  return (
    <section
      aria-labelledby="empresa-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,620px)_1fr]">
            <Reveal immediate className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-10 text-center lg:mx-0 lg:max-w-[620px] lg:items-start lg:text-left">
              <h1
                id="empresa-hero-heading"
                className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] leading-[1.2] font-extrabold text-texto"
              >
                {hero.headingPrefix}
                <span className="text-azul-base">{hero.headingHighlight}</span>
              </h1>

              <p className="text-base leading-[1.2] font-medium text-texto sm:text-lg lg:text-[clamp(1.125rem,0.48077vw+0.81731rem,1.25rem)] lg:[font-weight:clamp(400,-24.03846vw+746.15385,500)]">
                {hero.description}
              </p>

              <div className="@container flex w-full flex-wrap items-stretch justify-center gap-2.5 sm:gap-5 lg:justify-start">
                <Button
                  href={partnerHref}
                  variant="primary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                  showArrow
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  href={partnerHref}
                  variant="secondary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                  showArrow
                >
                  {hero.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            <Reveal immediate delayMs={120} className="flex min-w-0 flex-col items-center">
              <HeroSlideshow
                images={heroSlides}
                alt={hero.slideshowAlt}
                prevLabel={common.prevSlide}
                nextLabel={common.nextSlide}
                className="aspect-[2625/1769] w-full max-w-[620px] lg:max-w-none"
              />
            </Reveal>
          </div>
        </div>

        <StatsBar stats={stats} label={hero.statsAriaLabel} size="lg" />
      </div>
    </section>
  );
}
