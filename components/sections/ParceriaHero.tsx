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
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal
              immediate
              className="mx-auto flex w-full flex-col items-center gap-[30px] text-center lg:mx-0 lg:max-w-[600px] lg:items-start lg:text-left"
            >
              <div className="flex w-full flex-col items-center gap-[30px] lg:items-start">
                <h1
                  id="parceria-hero-heading"
                  className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] leading-[1.2] font-extrabold text-texto"
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

              <div className="@container flex w-full flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5 lg:justify-start">
                <Button
                  href="#participar"
                  variant="primary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                  showArrow
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  href="#participar"
                  variant="secondary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                  showArrow
                >
                  {hero.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            <Reveal immediate delayMs={120} className="mx-auto w-full max-w-[700px]">
              <HeroSlideshow
                images={heroSlides}
                alt={hero.slideshowAlt}
                prevLabel={common.prevSlide}
                nextLabel={common.nextSlide}
                className="aspect-[2625/1769] w-full"
              />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <ul aria-label={hero.bannerAriaLabel} className="flex w-full flex-wrap items-stretch justify-center gap-[15px]">
            {banner.map((item) => (
              <li
                key={item.icon}
                className="flex min-w-[240px] flex-1 flex-col items-center gap-2.5 rounded-2xl border border-contorno-base bg-branco p-5"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                <p className="w-full text-center text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
