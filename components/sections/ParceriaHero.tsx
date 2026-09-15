import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { parceriaHeroBannerIcons } from "@/config/parceria-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { getWhiteLabelSlides } from "@/lib/i18n/paths";

export default async function ParceriaHero() {
  const locale = await getLocale();
  const { parceria, common } = await getDictionary();
  const { hero } = parceria;
  const banner = parceriaHeroBannerIcons.map((icon, i) => ({ icon, ...hero.banner[i] }));
  const heroSlides = getWhiteLabelSlides(locale);

  return (
    <section
      aria-labelledby="parceria-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-1 flex-wrap items-center justify-center gap-10">
        <Reveal immediate className="flex w-full max-w-[600px] min-w-[280px] flex-1 flex-col items-start gap-[30px]">
          <div className="flex w-full flex-col items-start gap-[30px]">
            <h1
              id="parceria-hero-heading"
              className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] leading-[1.2] font-extrabold text-texto"
            >
              {hero.headingPrefix}
              <span className="bg-[linear-gradient(137deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>
            </h1>
            <p className="text-[clamp(1.5rem,0.6667vw+1.3333rem,2.5rem)] leading-[1.2] font-bold text-texto">
              {hero.subheading}
            </p>
          </div>

          <p className="text-xl leading-[1.2] font-medium text-texto">{hero.description}</p>

          <ul aria-label={hero.bannerAriaLabel} className="flex w-full flex-wrap items-center gap-[15px]">
            {banner.map((item) => (
              <li
                key={item.icon}
                className="flex min-w-[240px] flex-1 items-start gap-2.5 rounded-2xl border border-contorno-base bg-branco py-2.5 pr-2.5 pl-[15px]"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} className="shrink-0" />
                <div className="flex min-h-[30px] min-w-0 flex-1 flex-col justify-center">
                  <p className="text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-wrap items-center gap-5">
            <Button href="#participar" variant="primary" className="grow whitespace-nowrap sm:grow-0" showArrow>
              {hero.ctaPrimary}
            </Button>
            <Button href="#participar" variant="secondary" className="grow whitespace-nowrap sm:grow-0" showArrow>
              {hero.ctaSecondary}
            </Button>
          </div>
        </Reveal>

        <Reveal immediate delayMs={120} className="min-w-[400px] flex-1">
          <HeroSlideshow
            images={heroSlides}
            alt={hero.slideshowAlt}
            prevLabel={common.prevSlide}
            nextLabel={common.nextSlide}
            className="aspect-[2625/1769] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
