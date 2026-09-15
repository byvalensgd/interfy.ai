import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { agentesHeroHighlights } from "@/config/agentes";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { getHeroSlides, withLocale } from "@/lib/i18n/paths";

export default async function AgentesHero() {
  const locale = await getLocale();
  const { agents, common } = await getDictionary();
  const hero = agents.hero;
  const heroSlides = getHeroSlides(locale);

  return (
    <section
      aria-labelledby="agentes-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="order-1 flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                <h1
                  id="agentes-hero-heading"
                  className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
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

              <div className="flex w-full flex-nowrap items-center justify-center gap-2.5 sm:gap-5 lg:justify-start">
                <Button
                  href={withLocale("/comece-gratis", locale)}
                  variant="primary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !text-xs !leading-tight text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5 sm:!text-base"
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  href={withLocale("/demo", locale)}
                  variant="secondary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !text-xs !leading-tight text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5 sm:!text-base"
                >
                  {hero.ctaSecondary}
                </Button>
              </div>

              {/* Blocos Mobile: abaixo de lg essa lista some daqui e reaparece
                  depois da imagem do banner (ver <ul order-3> abaixo). */}
              <ul className="hidden w-full flex-wrap items-center gap-5 lg:flex">
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

            <Reveal immediate className="order-2 flex min-w-0 flex-col items-start gap-5" delayMs={120}>
              <HeroSlideshow
                images={heroSlides}
                alt={hero.slideshowAlt}
                prevLabel={common.prevSlide}
                nextLabel={common.nextSlide}
                className="mx-auto aspect-[2625/1793] w-full max-w-[750px] lg:max-w-none"
              />
            </Reveal>

            {/* Blocos Mobile: versão em cards da lista acima, só abaixo de lg,
                posicionada depois da imagem do banner. */}
            <ul aria-label="Diferenciais da Interfy Agentes" className="order-3 flex w-full flex-wrap gap-4 lg:hidden">
              {agentesHeroHighlights.map((item, i) => (
                <li
                  key={item.icon}
                  className="flex min-w-[140px] flex-1 flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <span className="w-full text-sm leading-[1.2] font-bold text-texto">
                    {hero.highlights[i].label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
