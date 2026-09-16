import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import StatsBar, { type StatItem } from "@/components/ui/StatsBar";

type SimpleHeroProps = {
  ariaLabel: string;
  headingId: string;
  eyebrow?: string;
  titleLine1: string;
  titleHighlight?: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  stats?: StatItem[];
  statsLabel?: string;
};

/** Lighter hero (single centered column, no side illustration) for support-tier
 * pages — support/contact/blog/cases/status — that don't need a hero visual. */
export default function SimpleHero({
  ariaLabel,
  headingId,
  eyebrow,
  titleLine1,
  titleHighlight,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  stats,
  statsLabel,
}: SimpleHeroProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="flex justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal immediate className="flex flex-col items-center gap-6 text-center">
          {eyebrow && (
            <span className="rounded-full border border-azul-base/20 bg-azul-bg-superior px-4 py-1.5 text-sm font-bold leading-[1.2] text-azul-base">
              {eyebrow}
            </span>
          )}
          <h1
            id={headingId}
            className="max-w-3xl text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] font-extrabold leading-[1.2] text-texto"
          >
            {titleLine1}{" "}
            {titleHighlight && (
              <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            )}
          </h1>
          <p className="max-w-2xl text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto-medio">
            {description}
          </p>

          {(primaryLabel || secondaryLabel) && (
            <div className="@container flex w-full flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5">
              {primaryHref && primaryLabel && (
                <Button
                  href={primaryHref}
                  variant="primary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                >
                  {primaryLabel}
                </Button>
              )}
              {secondaryHref && secondaryLabel && (
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
        </Reveal>

        {stats && statsLabel && (
          <Reveal immediate delayMs={150} className="max-w-4xl">
            <StatsBar stats={stats} label={statsLabel} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
