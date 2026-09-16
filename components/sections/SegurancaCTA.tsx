import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { segurancaCtaFeatureIcons } from "@/config/seguranca-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";

export default async function SegurancaCTA() {
  const locale = await getLocale();
  const { seguranca } = await getDictionary();
  const { cta } = seguranca;
  const features = segurancaCtaFeatureIcons.map((icon, i) => ({ icon, ...cta.features[i] }));

  return (
    <section aria-label={cta.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {cta.headline} <span className="text-azul-base">{cta.headlineHighlight}</span>
        </h2>

        <Reveal className="relative flex w-full flex-col gap-[30px] rounded-2xl p-5 sm:p-[30px]">
          <Image
            src="/seguranca/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 rounded-2xl object-cover"
          />

          <div className="flex w-full flex-wrap items-center justify-between gap-6">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-2xl leading-[1.2] font-bold">{cta.title}</p>
              <p className="text-lg leading-[1.2] font-semibold lg:max-w-2xl">{cta.description}</p>
            </div>
            <div className="flex w-full flex-wrap items-stretch gap-5 lg:w-auto lg:shrink-0">
              <Button href={withLocale("/test-drive", locale)} variant="secondary" className="grow !whitespace-normal !text-base lg:grow-0" disabled={CTA_DISABLED}>
                {cta.primaryButton}
              </Button>
              <Link
                href={withLocale("/contato", locale)}
                className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base leading-[1.2] font-bold !whitespace-normal !text-base text-branco transition-colors hover:bg-black/30 lg:grow-0"
              >
                {cta.secondaryButton}
              </Link>
            </div>
          </div>

          {/* Below lg: each pillar becomes its own bordered card, per the
              site's standing icon+text mobile treatment (see StatsBar.tsx).
              Split into two grids (3 then 2) instead of one grid-cols-3 —
              a single grid would strand the 5th item under an empty 3rd
              column; a dedicated 2-up row fills the full width instead. */}
          <div className="flex w-full flex-col gap-4 lg:hidden">
            <ul aria-label={cta.featuresAriaLabel} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.slice(0, 3).map((feature) => (
                <li
                  key={feature.icon}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-contorno-base bg-branco p-5 text-center"
                >
                  <Image src={feature.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <p className="text-base leading-[1.2] font-bold text-texto">{feature.label}</p>
                </li>
              ))}
            </ul>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.slice(3).map((feature) => (
                <li
                  key={feature.icon}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-contorno-base bg-branco p-5 text-center"
                >
                  <Image src={feature.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <p className="text-base leading-[1.2] font-bold text-texto">{feature.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <ul
            aria-label={cta.featuresAriaLabel}
            className="hidden w-full grid-cols-5 gap-x-10 gap-y-8 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] lg:grid"
          >
            {features.map((feature) => (
              <li key={feature.icon} className="flex min-w-0 items-center gap-2.5">
                <Image src={feature.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <p className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-texto">{feature.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
