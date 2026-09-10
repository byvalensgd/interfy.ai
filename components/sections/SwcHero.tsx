import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { swcHeroTrust, swcHeroFlow } from "@/config/swc-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function SwcHero() {
  const locale = await getLocale();
  const { capture } = await getDictionary();
  const { hero } = capture;

  return (
    <section
      aria-labelledby="swc-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image
        src="/swc/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="swc-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {hero.titleLine1}
                </h1>
                <p className="inline-block bg-[linear-gradient(104deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-transparent">
                  {hero.titleLine2}
                </p>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  <span className="font-bold text-azul-base">{hero.descriptionBrand} </span>
                  {hero.description}
                </p>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-bold leading-[1.2] text-azul-base">
                  {hero.descriptionNote}
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

              <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
                {swcHeroTrust.map((icon, index) => (
                  <li key={icon} className="flex min-w-0 flex-col items-center gap-2.5 p-5 text-center">
                    <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="w-full min-w-0 text-base leading-[1.2] font-extrabold text-texto">
                      {hero.trust[index].text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-start" delayMs={120}>
              <div className="relative aspect-[2400/1756] w-full">
                <Image src="/swc/hero-mockup.webp" alt={hero.mockupAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal immediate className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-[15px] rounded-[20px] bg-branco px-5 py-[30px]" delayMs={120}>
          {swcHeroFlow.map((icon, index) => (
            <div key={icon} className="flex min-w-0 items-center gap-2.5">
              <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
              <span className="w-full min-w-0 text-lg leading-[1.2] font-extrabold text-texto">
                {hero.flow[index].text}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
