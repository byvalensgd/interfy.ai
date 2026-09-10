import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { casesSegmentIcons } from "@/config/cases-page";

type CaseItem = {
  segment: string;
  description: string;
  metricValue: string;
  metricLabel: string;
};

export default function CasesGrid({
  ariaLabel,
  heading,
  illustrativeNote,
  items,
}: {
  ariaLabel: string;
  heading: string;
  illustrativeNote: string;
  items: CaseItem[];
}) {
  const cases = casesSegmentIcons.map((icon, i) => ({ icon, ...items[i] }));

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <h2 className="text-center text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
          {heading}
        </h2>
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.segment} delayMs={(i % 3) * 80}>
              <li className="flex h-full flex-col gap-5 rounded-2xl border border-contorno-base bg-branco p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-azul-bg-superior">
                    <Image src={item.icon} alt="" aria-hidden="true" width={22} height={22} />
                  </span>
                  <p className="text-base leading-[1.2] font-bold text-texto">{item.segment}</p>
                </div>
                <p className="flex-1 text-sm leading-[1.5] font-medium text-texto-medio">{item.description}</p>
                <div className="flex flex-col gap-0.5 border-t border-contorno-base pt-4">
                  <p className="text-[28px] leading-[1.2] font-extrabold text-azul-base">{item.metricValue}</p>
                  <p className="text-sm leading-[1.2] font-medium text-texto-medio">{item.metricLabel}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="text-center text-xs font-medium leading-[1.4] text-texto-medio">{illustrativeNote}</p>
      </div>
    </section>
  );
}
