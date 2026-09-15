import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { parceriaGrowthCtaStatIcons } from "@/config/parceria-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function ParceriaGrowthCTA() {
  const locale = await getLocale();
  const { parceria } = await getDictionary();
  const { growthCta } = parceria;
  const stats = parceriaGrowthCtaStatIcons.map((icon, i) => ({ icon, ...growthCta.stats[i] }));
  const href = withLocale("/contato", locale);

  return (
    <section aria-label={growthCta.sectionAria} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col">
        <Reveal className="relative flex w-full flex-col items-center gap-[30px] overflow-hidden rounded-2xl p-5 sm:px-[30px] sm:py-10">
          <Image
            src="/parceria/cta-banner-bg.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />

          <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start gap-3 text-branco">
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">{growthCta.heading}</p>
              <p className="text-lg leading-[1.2] font-semibold lg:max-w-2xl">{growthCta.subheading}</p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href={href} variant="secondary" className="grow whitespace-nowrap lg:grow-0" showArrow>
                {growthCta.primaryButton}
              </Button>
              <Link
                href={href}
                className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/40 px-[15px] py-2.5 text-base leading-[1.2] font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/50 lg:grow-0"
              >
                {growthCta.secondaryButton}
                <ArrowUpRight className="size-6 -mx-[7px]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <StatsBar stats={stats} label={growthCta.statsLabel} dense />
        </Reveal>
      </div>
    </section>
  );
}
