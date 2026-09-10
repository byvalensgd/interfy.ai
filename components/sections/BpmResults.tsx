import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ResultsChart from "@/components/ui/ResultsChart";
import { bpmProcessTypeIcons } from "@/config/bpm-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function BpmResults() {
  const { process } = await getDictionary();
  const { results } = process;
  const processTypes = bpmProcessTypeIcons.map((icon, i) => ({ icon, ...results.processTypes[i] }));

  return (
    <section aria-label={results.ariaLabel} className="flex justify-center bg-bg-base px-5 py-10 sm:py-16">
      <div className="grid w-full max-w-[1400px] items-stretch gap-5 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <Reveal className="@container w-full overflow-hidden rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]">
          <div className="flex w-full flex-col gap-6 @min-[630px]:flex-row @min-[630px]:items-stretch">
            <div className="flex w-full flex-col items-start gap-6 @min-[630px]:flex-1">
              <p className="text-[20px] leading-[1.2] font-bold text-texto">
                {results.practiceTitlePrefix}
                <span className="text-azul-base">{results.practiceTitleHighlight}</span>
              </p>
              <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-3">
                {(results.checklist as string[]).map((item) => (
                  <li key={item} className="flex w-full items-center gap-2.5">
                    <Image src="/icons/segments/check.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                    <span className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full @min-[630px]:w-1/2">
              <ResultsChart
                title={results.chartTitle}
                ariaLabel={results.chartAriaLabel}
                months={results.chartMonths}
              />
            </div>
          </div>
        </Reveal>

        <Reveal
          className="@container flex w-full flex-col gap-6 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]"
          delayMs={120}
        >
          <p className="text-[20px] leading-[1.2] font-bold text-texto">
            {results.typesTitlePrefix}
            <span className="text-azul-base">{results.typesTitleHighlight}</span>
          </p>
          <ul className="grid w-full grid-cols-2 gap-2.5 @min-[590px]:grid-cols-4 @min-[1190px]:grid-cols-8">
            {processTypes.map((item) => (
              <li key={item.icon} className="flex flex-col items-center gap-3.5 px-1 py-5 text-center">
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
