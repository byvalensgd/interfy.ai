import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { pricingHighlights, pricingProductBadges } from "@/config/pricing";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { getHeroSlides } from "@/lib/i18n/paths";

const highlightIcons = {
  trial: "/icons/pricing/trial.svg",
  sign: "/icons/pricing/sign.svg",
  device: "/icons/pricing/device.svg",
  ai: "/icons/pricing/ai.svg",
} as const;

export default async function PricingHero() {
  const locale = await getLocale();
  const { pricing, common } = await getDictionary();
  const { hero } = pricing;
  const heroSlides = getHeroSlides(locale);

  return (
    <section
      aria-labelledby="pricing-hero-heading"
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
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[520px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                <h1
                  id="pricing-hero-heading"
                  className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {hero.headingPrefix}{" "}
                  <span className="inline-block bg-[linear-gradient(102deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {hero.headingHighlight}
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  {hero.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 lg:justify-start">
                  <Button href="?billing=mensal#planos" variant="primary" size="md">
                    {hero.monthlyCta}
                  </Button>
                  <Link
                    href="?billing=anual#planos"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 sm:gap-5 rounded-lg border-[1.5px] border-contorno-base bg-branco px-3 py-2.5 sm:px-[30px] text-base leading-[1.2] font-bold text-texto transition-colors hover:border-azul-base"
                  >
                    {hero.annualCta}
                    <span className="rounded-full bg-[#e8f7ec] px-1.5 py-1 sm:p-2 text-sm sm:text-base font-bold leading-[1.2] text-ecm">
                      {hero.saveBadge}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Below lg: each highlight becomes its own bordered card (icon
                  over label, centered), per the site's "Blocos Mobile"
                  pattern — instead of the desktop's shared borderless row. */}
              <ul className="flex w-full flex-wrap gap-4 lg:hidden">
                {pricingHighlights.map((item, index) => (
                  <li
                    key={item.icon}
                    className="flex min-w-[140px] flex-1 flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center"
                  >
                    <Image src={highlightIcons[item.icon]} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                    <span className="flex min-h-[30px] w-full items-center justify-center text-sm leading-[1.2] font-bold text-texto">
                      {hero.highlights[index]}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="hidden w-full items-center gap-[10px] lg:flex">
                {pricingHighlights.map((item, index) => (
                  <li key={item.icon} className="flex flex-1 flex-col items-center gap-[15px] text-center">
                    <Image src={highlightIcons[item.icon]} alt="" aria-hidden="true" width={40} height={40} />
                    <span className="text-base font-bold leading-[1.2] text-texto">{hero.highlights[index]}</span>
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
                className="mx-auto aspect-[2625/1793] w-full max-w-[750px] lg:max-w-none"
              />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200}>
          <ul className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-5">
            {pricingProductBadges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center justify-center gap-2.5 rounded-full border-[0.5px] border-contorno-base bg-branco px-4 py-3 sm:justify-start"
              >
                <Image src={badge.icon} alt="" aria-hidden="true" width={26} height={26} className="shrink-0" />
                <span className="whitespace-nowrap text-base font-bold leading-[1.2] text-texto">
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
