import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { agentesHeroHighlights } from "@/config/agentes";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

const heroSlides = ["/hero/hero-slide-1.webp", "/hero/hero-slide-3.webp"];

export default async function AgentesHero() {
  const locale = await getLocale();
  const { agents, common } = await getDictionary();
  const hero = agents.hero;

  return (
    <section
      aria-labelledby="agentes-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                <h1
                  id="agentes-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {hero.titleLine1}{" "}
                  <span className="inline-block bg-[linear-gradient(112deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {hero.titleGradient}
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  {hero.description}
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

              <ul className="flex w-full flex-wrap items-center gap-5">
                {agentesHeroHighlights.map((item, i) => (
                  <li key={item.icon} className="flex flex-1 min-w-[100px] flex-col items-center gap-[15px] text-center">
                    <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} />
                    <span className="w-full text-base leading-[1.2] font-bold text-texto">
                      {hero.highlights[i].label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-start gap-5" delayMs={120}>
              <HeroSlideshow
                images={heroSlides}
                alt={hero.slideshowAlt}
                prevLabel={common.prevSlide}
                nextLabel={common.nextSlide}
                className="aspect-[2625/1793] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
