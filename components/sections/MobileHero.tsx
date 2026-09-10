import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { mobileHeroHighlights, mobileHeroFloatingCards, mobileAppStoreUrl, mobileGooglePlayUrl } from "@/config/mobile-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const heroSlides = [
  "/mobile/mobile-slide-1.webp",
  "/mobile/mobile-slide-2.webp",
  "/mobile/mobile-slide-3.webp",
  "/mobile/mobile-slide-4.webp",
  "/mobile/mobile-slide-5.webp",
  "/mobile/mobile-slide-6.webp",
];

export default async function MobileHero() {
  const { mobile, common } = await getDictionary();
  const { hero } = mobile;

  return (
    <section
      aria-labelledby="mobile-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image src="/mobile/hero-bg.webp" alt="" aria-hidden="true" fill sizes="100vw" className="-z-10 object-cover" />

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <h1
                id="mobile-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {hero.heading}{" "}
                <span className="inline-block bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                  {hero.headingHighlight}
                </span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                {hero.description}
              </p>

              <div className="flex w-full flex-wrap items-center justify-center gap-[15px] lg:justify-start">
                <a href={mobileGooglePlayUrl} target="_blank" rel="noreferrer">
                  <Image
                    src="/mobile/badge-googleplay.svg"
                    alt={hero.googlePlayAlt}
                    width={170}
                    height={62}
                    className="h-[60px] w-auto"
                  />
                </a>
                <a href={mobileAppStoreUrl} target="_blank" rel="noreferrer">
                  <Image
                    src="/mobile/badge-appstore.svg"
                    alt={hero.appStoreAlt}
                    width={154}
                    height={62}
                    className="h-[60px] w-auto"
                  />
                </a>
              </div>

              <ul className="flex w-full flex-wrap items-start gap-[10px]">
                {mobileHeroHighlights.map((item, i) => (
                  <li key={item.icon} className="flex flex-1 min-w-[100px] flex-col items-center gap-[15px] text-center">
                    <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} />
                    <span className="w-full text-base leading-[1.2] font-bold text-texto">
                      {hero.highlights[i].label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              immediate
              className="flex min-w-0 flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center"
              delayMs={120}
            >
              <div className="relative z-0 flex w-full flex-1 items-center justify-center lg:mr-[-110px]">
                <HeroSlideshow
                  images={heroSlides}
                  alt={hero.mockupAlt}
                  prevLabel={common.prevSlide}
                  nextLabel={common.nextSlide}
                  className="aspect-[1142/1904] w-full max-w-[300px] shrink-0 lg:max-w-[420px] lg:max-h-[700px]"
                />
              </div>

              <div className="relative z-10 flex w-full max-w-[320px] shrink-0 flex-col items-start gap-[15px] sm:gap-[30px]">
                {mobileHeroFloatingCards.map((item, i) => (
                  <div
                    key={item.icon}
                    className="flex w-full flex-col items-start gap-5 rounded-[20px] border border-contorno-base bg-branco p-5"
                  >
                    <div className="flex h-[50px] w-full items-center gap-5">
                      <span className={`flex size-[50px] shrink-0 items-center justify-center rounded-full p-3 ${item.bgClass}`}>
                        <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} />
                      </span>
                      <p className="flex min-h-[50px] min-w-0 flex-1 flex-col justify-center text-xl leading-[1.2] font-bold text-texto-doc-ok">
                        {hero.floatingCards[i].title}
                      </p>
                    </div>
                    <p className="w-full text-base leading-[1.2] font-medium text-texto">
                      {hero.floatingCards[i].description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
