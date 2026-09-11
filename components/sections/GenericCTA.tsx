import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar, { type StatItem } from "@/components/ui/StatsBar";

type GenericCTAProps = {
  ariaLabel: string;
  heading: string;
  subheading: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  stats?: StatItem[];
  statsLabel?: string;
};

/** Shared CTA card (brand gradient in place of a page-specific illustration)
 * reused by support-tier pages that don't have a dedicated bg image. */
export default function GenericCTA({
  ariaLabel,
  heading,
  subheading,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  stats,
  statsLabel,
}: GenericCTAProps) {
  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col">
        <Reveal className="relative flex w-full flex-col items-center gap-8 rounded-2xl bg-[linear-gradient(135deg,#0c2f8f_0%,#184aee_45%,#bf18f6_100%)] p-5 py-8 sm:gap-10 sm:px-[30px] sm:py-10">
          <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center gap-3 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">{heading}</p>
              <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-2xl">
                {subheading}
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href={primaryHref} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                {primaryLabel}
              </Button>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base leading-[1.2] font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:grow-0"
                >
                  {secondaryLabel}
                  <Calendar className="size-5" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>

          {stats && statsLabel && <StatsBar stats={stats} label={statsLabel} dense />}
        </Reveal>
      </div>
    </section>
  );
}
