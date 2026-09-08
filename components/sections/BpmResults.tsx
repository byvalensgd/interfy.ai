import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ResultsChart from "@/components/ui/ResultsChart";
import { bpmProcessTypes, bpmResultsChecklist } from "@/config/bpm-page";

export default function BpmResults() {
  return (
    <section aria-label="Resultados e tipos de processos atendidos" className="flex justify-center bg-bg-base px-5 py-10 sm:py-16">
      <div className="grid w-full max-w-[1400px] items-stretch gap-5 grid-cols-[repeat(auto-fit,minmax(min(630px,100%),1fr))]">
        <Reveal className="flex w-full flex-col gap-6 overflow-hidden rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:flex-row sm:items-stretch">
          <div className="flex w-full flex-1 flex-col items-start gap-6">
            <p className="text-[20px] leading-[1.2] font-bold text-texto">
              Resultados que você vê <span className="text-azul-base">na prática</span>
            </p>
            <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-3">
              {bpmResultsChecklist.map((item) => (
                <li key={item} className="flex w-full items-center gap-2.5">
                  <Image src="/icons/segments/check.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full shrink sm:w-1/2 sm:min-w-[220px]">
            <ResultsChart />
          </div>
        </Reveal>

        <Reveal
          className="@container flex w-full flex-col gap-6 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]"
          delayMs={120}
        >
          <p className="text-[20px] leading-[1.2] font-bold text-texto">
            Feito para todos os <span className="text-azul-base">tipos de processos</span>
          </p>
          <ul className="grid w-full grid-cols-2 gap-2.5 @min-[590px]:grid-cols-4 @min-[1190px]:grid-cols-8">
            {bpmProcessTypes.map((item) => (
              <li key={item.label} className="flex flex-col items-center gap-3.5 px-1 py-5 text-center">
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                <span className="w-full text-base leading-[1.2] font-bold text-texto">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
