import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ecmHeroStatIcons } from "@/config/ecm-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";
import { getCompleteBoxBasis } from "@/lib/completeBox";

const aiGradient = "linear-gradient(93.5deg, #184aee 22.863%, #bf18f6 96.412%)";

// Real product screenshot — the English asset covers every non-Portuguese
// locale (en, es), the pt asset is pt-BR only.
const heroMockupPt = "/ecm/hero-mockup.webp";
const heroMockupEn = "/ecm/hero-mockup-en.webp";

export default async function EcmHero() {
  const locale = await getLocale();
  const { documents } = await getDictionary();
  const stats = ecmHeroStatIcons.map((icon, i) => ({ icon, ...documents.hero.stats[i] }));
  const statsBasis = getCompleteBoxBasis(stats.length);
  const heroMockup = locale === "pt" ? heroMockupPt : heroMockupEn;

  return (
    <section
      aria-labelledby="ecm-hero-heading"
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
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
          <Reveal immediate className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center lg:mx-0 lg:max-w-[600px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <h1
                id="ecm-hero-heading"
                className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {documents.hero.headingLine1}{" "}
                <span className="inline-block bg-[linear-gradient(100.03deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                  {documents.hero.headingHighlight}
                </span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                <span className="font-bold text-azul-base">{documents.hero.descriptionBrand}</span>{" "}
                {documents.hero.description}
              </p>
            </div>

            <div className="@container flex w-full flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5 lg:justify-start">
              <Button
                href={withLocale("/test-drive", locale)}
                variant="primary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                disabled={CTA_DISABLED}
              >
                {documents.hero.ctaPrimary}
              </Button>
              <Button
                href={withLocale("/demo", locale)}
                variant="secondary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                disabled={CTA_DISABLED}
              >
                {documents.hero.ctaSecondary}
              </Button>
            </div>

            <ul className="hidden w-full flex-wrap items-start gap-5 lg:flex">
              {stats.map((stat, index) => {
                const grows = index < 2;
                return (
                  <li
                    key={stat.icon}
                    className={`flex flex-col items-start gap-2.5 rounded-[14px] text-left ${grows ? "flex-[1_0_0]" : "shrink-0"}`}
                  >
                    <div className="flex items-center gap-2">
                      <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                      <span className="text-lg leading-[1.2] font-extrabold whitespace-nowrap text-texto">
                        {stat.label}
                      </span>
                    </div>
                    <span
                      className={`text-sm leading-[1.2] font-medium whitespace-nowrap text-texto-medio ${grows ? "w-full" : ""}`}
                    >
                      {stat.sublabel}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal immediate className="flex min-w-0 flex-col items-center" delayMs={120}>
            <div className="relative z-0 mx-auto mb-[-56px] aspect-[2625/1769] w-full max-w-[750px] lg:max-w-none">
              <Image
                src={heroMockup}
                alt={documents.hero.mockupAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="relative z-10 flex w-full max-w-[478px] items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5 shadow-[1px_4px_10px_2px_var(--color-shadow)]">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full p-px" style={{ backgroundImage: aiGradient }}>
                <span className="flex size-full items-center justify-center rounded-full bg-branco p-px">
                  <span className="flex size-full items-center justify-center rounded-full p-2.5" style={{ backgroundImage: aiGradient }}>
                    <Image src="/icons/ecm/ia-icon.svg" alt="" aria-hidden="true" width={30} height={30} />
                  </span>
                </span>
              </span>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5 text-left">
                <p className="w-full text-lg leading-[1.2] font-extrabold text-texto">
                  {documents.hero.chatCard.line1}
                </p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">
                  {documents.hero.chatCard.line2}
                </p>
              </div>
              <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-azul-base p-2">
                <Image src="/icons/ecm/enviar-mensagem.svg" alt="" aria-hidden="true" width={30} height={30} />
              </span>
            </div>
          </Reveal>
        </div>
        </div>

        {/* Below lg: hero stats become their own bordered-card block
            (icon over centered text), matching the site's mobile blocks
            pattern. "Complete Box" (see lib/completeBox.ts) keeps every row
            balanced within 1 item of the next and stretches a short last row
            instead of leaving a gap. */}
        <Reveal immediate delayMs={200} className="w-full lg:hidden">
          <ul className="flex w-full flex-wrap gap-4">
            {stats.map((stat) => (
              <li
                key={stat.icon}
                className={`flex min-w-[140px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${statsBasis}`}
              >
                <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <p className="w-full text-base leading-[1.2] font-bold text-texto-doc-ok">{stat.label}</p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{stat.sublabel}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
