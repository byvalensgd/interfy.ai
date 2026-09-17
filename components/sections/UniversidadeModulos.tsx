import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { PLANO_AZUL_BASE } from "@/lib/backgrounds";
import { CTA_DISABLED } from "@/config/feature-flags";
import { withLocale } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

type ModulesCta = {
  heading: string;
  stats: { value: string; label: string }[];
  description: string;
};

export default function UniversidadeModulos({
  ariaLabel,
  heading,
  headingHighlight,
  description,
  items,
  cta,
  primaryLabel,
  secondaryLabel,
  locale,
}: {
  ariaLabel: string;
  heading: string;
  headingHighlight: string;
  description: string;
  items: string[];
  cta: ModulesCta;
  primaryLabel: string;
  secondaryLabel: string;
  locale: Locale;
}) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal
        immediate
        className="flex w-full max-w-[1400px] flex-col items-center gap-10 rounded-[40px] border border-contorno-base bg-gradient-to-b from-branco to-bg-base p-6 sm:p-10 lg:p-[50px]"
      >
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
            {heading}{" "}
            <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
          <p className="max-w-2xl text-lg leading-[1.5] font-medium text-texto-medio">{description}</p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-2xl border border-contorno-base bg-branco p-5"
            >
              <Image src="/icons/features/check-blue.svg" alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
              <p className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-texto">{item}</p>
            </li>
          ))}
        </ul>

        <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-2xl border border-contorno-base px-5 py-10 text-center sm:px-10 sm:py-16">
          <Image
            src={PLANO_AZUL_BASE}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="-z-10 object-cover"
          />
          <Image src="/icons/universidade/graduation-cap.svg" alt="" aria-hidden="true" width={60} height={57} />

          <p className="max-w-2xl text-2xl leading-[1.2] font-bold text-branco sm:text-[2rem]">{cta.heading}</p>

          <ul className="grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {cta.stats.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col items-center gap-2.5 rounded-2xl border-2 border-branco/30 px-5 py-5"
              >
                <p className="text-[2rem] leading-[1.2] font-bold text-branco">{stat.value}</p>
                <p className="text-base leading-[1.4] font-medium text-branco">{stat.label}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-5">
            <p className="max-w-xl text-lg leading-[1.5] font-medium text-branco">{cta.description}</p>
            <div className="@container flex w-full max-w-md flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5">
              <Button
                href={withLocale("/test-drive", locale)}
                variant="primary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:!px-5 sm:!py-2.5"
                disabled={CTA_DISABLED}
              >
                {primaryLabel}
              </Button>
              <Button
                href={withLocale("/demo", locale)}
                variant="secondary"
                className="min-w-0 flex-1 !h-auto min-h-9 border-branco bg-branco !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:!px-5 sm:!py-2.5"
                disabled={CTA_DISABLED}
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
