import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { swcHeroTrust, swcHeroFlow } from "@/config/swc-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function SwcHero() {
  const locale = await getLocale();
  const { capture } = await getDictionary();
  const { hero } = capture;
  const mobileCardsBasis = getCompleteBoxBasis(swcHeroTrust.length + swcHeroFlow.length);

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
            <Reveal immediate className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center lg:mx-0 lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="swc-hero-heading"
                  className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  {hero.titleLine1}{" "}
                  <span className="bg-[linear-gradient(104deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                    {hero.titleLine2}
                  </span>
                </h1>
                <p className="text-pretty text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
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

              <ul className="hidden w-full flex-col items-start gap-[15px] lg:flex">
                {swcHeroTrust.map((icon, index) => (
                  <li key={icon} className="flex w-full min-w-[240px] items-start gap-5">
                    <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="flex min-h-[30px] w-full min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                      {hero.trust[index].text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-start" delayMs={120}>
              <div className="relative mx-auto aspect-[2400/1756] w-full max-w-[750px] lg:max-w-none">
                <Image src="/swc/hero-mockup.webp" alt={hero.mockupAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Below lg: trust + flow items merge into one bordered-card block
            (icon over centered text), matching StatsBar's mobile pattern.
            "Complete Box" (see lib/completeBox.ts) keeps every row balanced
            within 1 item of the next and stretches a short last row instead
            of leaving a gap. */}
        <Reveal immediate className="w-full lg:hidden">
          <ul className="flex w-full flex-wrap gap-4">
            {swcHeroTrust.map((icon, index) => (
              <li
                key={icon}
                className={`flex min-w-[140px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${mobileCardsBasis}`}
              >
                <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                  {hero.trust[index].text}
                </p>
              </li>
            ))}
            {swcHeroFlow.map((icon, index) => (
              <li
                key={icon}
                className={`flex min-w-[140px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${mobileCardsBasis}`}
              >
                <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                  {hero.flow[index].text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal immediate className="w-full" delayMs={120}>
          <div className="hidden w-full grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-[15px] rounded-[20px] bg-branco px-5 py-[30px] lg:grid">
            {swcHeroFlow.map((icon, index) => (
              <div key={icon} className="flex min-w-0 items-center gap-2.5">
                <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <span className="w-full min-w-0 text-lg leading-[1.2] font-extrabold text-texto">
                  {hero.flow[index].text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
