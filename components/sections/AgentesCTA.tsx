import Image from "next/image";
import { Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { agentesBenefits } from "@/config/agentes";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import CtaLink from "@/components/ui/CtaLink";

type Benefit = { label: string };

function BenefitsRow({ ariaLabel, benefits }: { ariaLabel: string; benefits: Benefit[] }) {
  return (
    <ul
      aria-label={ariaLabel}
      className="grid w-full grid-cols-2 items-stretch gap-10 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
    >
      {agentesBenefits.map((item, i) => (
        <li key={item.icon} className="flex min-w-0 flex-row items-center gap-2.5">
          <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <span className="min-w-0 flex-1 text-sm leading-[1.2] font-bold text-texto">{benefits[i].label}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function AgentesCTA() {
  const locale = await getLocale();
  const { agents } = await getDictionary();
  const cta = agents.cta;

  return (
    <section aria-label={cta.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center">
        <Reveal className="@container relative flex w-full flex-col items-center overflow-hidden rounded-2xl p-5 sm:px-[30px] sm:py-5">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <Image src="/agentes/cta-bg.webp" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover" />
          </div>

          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-10">
            {/* Tablet and mobile both stay stacked (centered text, robot in
                its own centered block below the buttons) — only real
                desktop widths (lg: viewport, 1024px+) switch to the
                side-by-side row. A plain viewport breakpoint here (not a
                @container query against the card's content-box) means
                "1024px" means exactly that, with no padding/border-box
                arithmetic to get wrong. At that point both sides become
                flex-1, sharing the row's width evenly instead of the text
                side hoarding all the leftover space — the buttons+robot
                side still caps its own column and keeps the robot anchored
                to the right edge (justify-end + pr-5) as that shared half
                grows. */}
            <div className="w-full text-center text-branco @min-[340px]:min-w-[320px] lg:flex-1 lg:text-left">
              <div className="flex flex-col items-center gap-5 lg:items-start">
                <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">{cta.title}</p>
                <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-semibold">
                  {cta.description}
                </p>
              </div>
            </div>

            <div className="flex w-full flex-row flex-wrap items-center justify-center gap-5 pr-5 @min-[340px]:min-w-[320px] lg:w-auto lg:flex-1 lg:flex-nowrap lg:justify-end">
              <div className="@container flex min-w-[200px] flex-1 flex-row flex-wrap items-stretch gap-[10px]">
                <CtaLink
                  href={withLocale("/test-drive", locale)}
                  className="inline-flex min-h-10 min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-azul-base bg-branco px-[15px] py-[10px] text-center !text-[clamp(0.625rem,2.222cqw+0.3194rem,0.875rem)] font-bold text-azul-base transition-colors hover:bg-branco/90"
                >
                  {cta.ctaPrimary}
                </CtaLink>
                <CtaLink
                  href={withLocale("/demo", locale)}
                  className="inline-flex min-h-10 min-w-[200px] flex-1 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/40 px-[15px] py-[10px] text-center !text-[clamp(0.625rem,2.222cqw+0.3194rem,0.875rem)] font-bold text-branco transition-colors hover:bg-black/50"
                >
                  {cta.ctaSecondary}
                  <Calendar className="size-5 shrink-0" aria-hidden="true" />
                </CtaLink>
              </div>
              {/* Robot sits beside the buttons at every width — the wrapper
                  is flex-wrap so it only drops to its own line if the
                  buttons genuinely can't share the row with it (narrow
                  phones), never because of the 1024px text/row breakpoint
                  above. */}
              <div className="relative h-[154px] w-[160px] shrink-0" aria-hidden="true">
                <Image src="/agentes/robot-mascot.webp" alt="" fill sizes="160px" className="object-cover object-top" />
              </div>
            </div>
          </div>

          <BenefitsRow ariaLabel={cta.benefitsAria} benefits={cta.benefits} />
        </Reveal>
      </div>
    </section>
  );
}
