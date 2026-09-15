import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { agentesBenefits } from "@/config/agentes";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

type Benefit = { label: string };

function BenefitsRow({ ariaLabel, benefits }: { ariaLabel: string; benefits: Benefit[] }) {
  return (
    <ul
      aria-label={ariaLabel}
      className="grid w-full grid-cols-2 items-stretch gap-x-8 gap-y-6 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
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
            <Image src="/agentes/cta-bg.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover" />
          </div>

          <div className="flex w-full flex-wrap items-center gap-x-10 gap-y-8">
            {/* flex-1 so this is the side that grows/shrinks; the buttons+robot
                side (below) is flex-none, sized to its own content, so it
                never fights the text for space and forces an overlap. */}
            <div className="min-w-[160px] flex-1 basis-[280px] text-center text-branco @min-[620px]:text-left">
              <div className="flex flex-col items-center gap-5 @min-[620px]:items-start">
                <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">{cta.title}</p>
                <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-semibold">
                  {cta.description}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-nowrap items-center justify-center gap-5 pr-5">
              <div className="flex w-full min-w-[220px] max-w-[260px] flex-col items-center gap-[10px]">
                <Link
                  href={withLocale("/comece-gratis", locale)}
                  className="inline-flex min-h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-branco px-[15px] py-2 text-center text-sm leading-[1.2] font-bold text-azul-base transition-colors hover:bg-branco/90"
                >
                  {cta.ctaPrimary}
                </Link>
                <Link
                  href={withLocale("/demo", locale)}
                  className="inline-flex min-h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/40 px-[15px] py-2 text-center text-sm leading-[1.2] font-bold text-branco transition-colors hover:bg-black/50"
                >
                  {cta.ctaSecondary}
                  <Calendar className="size-5 shrink-0" aria-hidden="true" />
                </Link>
              </div>
              {/* The robot only shows up once the container is wide enough for
                  it to sit beside the buttons with room to spare — below that
                  it simply isn't rendered, instead of squeezing the text. */}
              <div className="relative hidden h-[154px] w-[160px] shrink-0 @min-[620px]:block" aria-hidden="true">
                <Image src="/agentes/robot-mascot.png" alt="" fill sizes="160px" className="object-cover object-top" />
              </div>
            </div>
          </div>

          <BenefitsRow ariaLabel={cta.benefitsAria} benefits={cta.benefits} />
        </Reveal>
      </div>
    </section>
  );
}
