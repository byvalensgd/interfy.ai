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
        <Reveal immediate className="flex w-full flex-1 flex-wrap items-center justify-center gap-10">
          <div className="flex w-full max-w-[620px] min-w-[280px] flex-1 flex-col items-start gap-10">
            <h1
              id="empresa-hero-heading"
              className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] leading-[1.2] font-extrabold text-texto"
            >
              {hero.headingPrefix}
              <span className="text-azul-base">{hero.headingHighlight}</span>
            </h1>

            <p className="text-xl leading-[1.2] font-medium text-texto">{hero.description}</p>

            <div className="flex w-full flex-nowrap items-center gap-2.5 sm:gap-5">
              <Button
                href={partnerHref}
                variant="primary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !text-xs !leading-tight text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5 sm:!text-base"
                showArrow
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                href={partnerHref}
                variant="secondary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !text-xs !leading-tight text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5 sm:!text-base"
                showArrow
              >
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <Reveal immediate delayMs={120} className="min-w-[400px] flex-1">
            <HeroSlideshow
              images={heroSlides}
              alt={hero.slideshowAlt}
              prevLabel={common.prevSlide}
              nextLabel={common.nextSlide}
              className="aspect-[2625/1769] w-full"
            />
          </Reveal>
        </Reveal>

        <StatsBar stats={stats} label={hero.statsAriaLabel} size="lg" />
      </div>
    </section>
  );
}
