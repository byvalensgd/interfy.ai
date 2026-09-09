import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { swcResultStats, swcResultsCta } from "@/config/swc-page";

export default function SwcResults() {
  return (
    <section aria-label="Resultados reais para o seu negócio" className="flex justify-center px-5 py-10 sm:py-16">
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
          <h2 className="w-full text-2xl leading-[1.2] font-bold">RESULTADOS REAIS PARA O SEU NEGÓCIO</h2>

          <ul className="flex w-full flex-wrap items-start justify-center gap-10 lg:justify-start">
            {swcResultStats.map((stat) => (
              <li key={stat.label} className="flex min-w-[180px] flex-col items-center gap-[15px] lg:items-start">
                <div className="flex items-center gap-5">
                  <Image src={stat.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                  <div className="flex flex-col items-start gap-[15px]">
                    <span className="text-2xl leading-[1.2] font-bold whitespace-nowrap" style={{ color: stat.accentColor }}>
                      {stat.accent}
                    </span>
                    <span className="text-xl leading-[1.2] font-bold text-branco whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                </div>
                <p className="w-full text-lg leading-[1.2] font-semibold text-branco">{stat.description}</p>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col items-center gap-[30px] lg:items-start">
            <p className="w-full text-2xl leading-[1.2] font-bold text-[#f4f5ff]">{swcResultsCta.title}</p>
            <p className="w-full text-xl leading-[1.2] font-medium">{swcResultsCta.description}</p>
          </div>
        </div>

        <div className="relative aspect-[270/326] w-[182px] shrink-0 sm:w-[232px] lg:w-auto lg:self-stretch lg:max-h-[370px]">
          <Image
            src="/swc/robot-mascot.webp"
            alt="Assistente de AI da Interfy"
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
