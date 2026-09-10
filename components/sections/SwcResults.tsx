import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { swcResultStats } from "@/config/swc-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function SwcResults() {
  const { capture } = await getDictionary();
  const { results } = capture;

  return (
    <section aria-label={results.ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal className="relative flex w-full max-w-[1400px] flex-col items-center gap-10 overflow-hidden rounded-2xl p-5 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <Image
          src="/swc/results-bg.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 rounded-2xl object-cover"
        />

        <div className="flex flex-1 flex-col items-center gap-[30px] pb-5 text-center text-branco lg:items-start lg:pb-0 lg:text-left">
          <h2 className="w-full text-2xl leading-[1.2] font-bold">{results.heading}</h2>

          <ul className="flex w-full flex-wrap items-start justify-center gap-10 lg:justify-start">
            {swcResultStats.map((visual, index) => {
              const stat = results.stats[index];
              return (
                <li key={visual.icon} className="flex min-w-[180px] flex-col items-center gap-[15px] lg:items-start">
                  <div className="flex items-center gap-5">
                    <Image src={visual.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                    <div className="flex flex-col items-start gap-[15px]">
                      <span className="text-[22px] leading-[1.2] font-bold whitespace-nowrap" style={{ color: visual.accentColor }}>
                        {stat.accent}
                      </span>
                      <span className="text-lg leading-[1.2] font-bold text-branco whitespace-nowrap">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                  <p className="w-full text-base leading-[1.2] font-semibold text-branco">{stat.description}</p>
                </li>
              );
            })}
          </ul>

          <div className="flex w-full flex-col items-center gap-[30px] lg:items-start">
            <p className="w-full text-[22px] leading-[1.2] font-bold text-[#f4f5ff]">{results.ctaTitle}</p>
            <p className="w-full text-xl leading-[1.2] font-medium">{results.ctaDescription}</p>
          </div>
        </div>

        <div className="relative aspect-[270/326] w-[182px] shrink-0 sm:w-[232px] lg:w-auto lg:self-stretch lg:max-h-[370px]">
          <Image
            src="/swc/robot-mascot.webp"
            alt={results.mascotAlt}
            fill
            sizes="(min-width: 1024px) 310px, 232px"
            className="object-contain object-bottom"
          />
          <span className="absolute right-[-12px] top-1/2 size-10 -translate-y-1/2 overflow-hidden rounded-xl shadow-[1px_4px_10px_2px_var(--color-shadow)]">
            <Image src="/swc/ai-block.webp" alt="" aria-hidden="true" fill sizes="40px" className="object-cover" />
          </span>
        </div>
      </Reveal>
    </section>
  );
}
