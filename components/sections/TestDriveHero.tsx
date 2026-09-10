import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TestDriveSignupForm from "@/components/sections/TestDriveSignupForm";
import { heroDifferentiators } from "@/config/test-drive";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";

export default async function TestDriveHero() {
  const locale = await getLocale();
  const { testDrive } = await getDictionary();
  const hero = testDrive.hero;

  return (
    <section
      aria-labelledby="test-drive-hero-heading"
      className="flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[520fr_840fr]">
            <Reveal immediate className="flex flex-col items-center gap-8 text-center lg:max-w-[520px] lg:items-start lg:text-left">
              <h1
                id="test-drive-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                {hero.headingPrefix}
                <span className="inline-block bg-[linear-gradient(109deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                  {hero.headingBrand}
                </span>
                {hero.headingSuffix}
              </h1>

              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2] text-texto">
                {hero.subheading}
              </p>

              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-medium text-texto">
                {hero.descriptionPrefix}
                <span className="inline-block bg-[linear-gradient(110deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text font-bold text-transparent">
                  {hero.descriptionHighlight}
                </span>
                {hero.descriptionSuffix}
              </p>

              <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Button href="#como-funciona" variant="secondary">
                  {hero.ctaButton}
                </Button>
              </div>
            </Reveal>

            <Reveal immediate delayMs={120} className="w-full">
              <TestDriveSignupForm dict={testDrive.form} locale={locale} />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={240}>
          <ul
            aria-label={hero.ariaLabel}
            className="grid w-full grid-cols-1 items-center gap-x-10 gap-y-5 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-around"
          >
            {heroDifferentiators.map((item, index) => {
              const text = hero.differentiators[index];
              return (
                <li key={text.title} className="flex items-center gap-2.5">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <div className="flex min-w-0 flex-col items-start gap-2">
                    <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto-doc-ok lg:whitespace-nowrap">
                      {text.title}
                    </p>
                    <p className="text-sm font-medium leading-[1.2] text-texto lg:whitespace-nowrap">
                      {text.subtitle}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
