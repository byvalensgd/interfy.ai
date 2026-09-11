import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { swcCtaHighlights } from "@/config/swc-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function SwcCTA() {
  const locale = await getLocale();
  const { capture } = await getDictionary();
  const { cta } = capture;

  const highlights = swcCtaHighlights.map((icon, index) => ({
    icon,
    label: cta.highlights[index].label,
    sublabel: cta.highlights[index].sublabel,
  }));

  return (
    <section aria-label={cta.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-6">
        <Reveal className="relative flex w-full flex-col items-start gap-6 rounded-2xl p-5 sm:p-10">
          <Image
            src="/swc/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 rounded-2xl object-cover"
          />
          <div className="flex w-full flex-wrap items-center justify-between gap-6">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">
                {cta.title}
              </p>
              <p className="text-[clamp(0.9375rem,0.1042vw+0.9167rem,1rem)] leading-[1.2] font-normal lg:max-w-2xl">
                {cta.description}
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href={withLocale("/comece-gratis", locale)} variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                {cta.ctaPrimary}
              </Button>
              <Link
                href={withLocale("/demo", locale)}
                className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base leading-[1.2] font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:grow-0"
              >
                {cta.ctaSecondary}
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <StatsBar stats={highlights} label={cta.statsLabel} size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
