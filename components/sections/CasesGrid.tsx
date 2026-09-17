import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { casesSegmentIcons, casesResultIcons } from "@/config/cases-page";

type CaseResult = { label: string; description: string };

type CaseItem = {
  segment: string;
  client: string;
  challenge: string;
  solution: string;
  results: CaseResult[];
  quote: string;
  personName: string;
  personRole: string;
};

export default function CasesGrid({
  ariaLabel,
  heading,
  challengeLabel,
  solutionLabel,
  resultsLabel,
  illustrativeNote,
  complianceNote,
  items,
}: {
  ariaLabel: string;
  heading: string;
  challengeLabel: string;
  solutionLabel: string;
  resultsLabel: string;
  illustrativeNote: string;
  complianceNote?: string;
  items: CaseItem[];
}) {
  const cases = casesSegmentIcons.map((icon, i) => ({ icon, resultIcons: casesResultIcons[i], ...items[i] }));

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <h2 className="text-center text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
          {heading}
        </h2>
        {/* "Complete Box" (see lib/completeBox.ts): flex-basis in place of
            grid-cols-1/2 so a lone last card (grow) stretches to fill
            instead of a CSS Grid leaving half the row blank when the case
            count is odd. */}
        <ul className="flex w-full flex-wrap gap-6">
          {cases.map((item, i) => (
            <Reveal key={item.client} delayMs={(i % 2) * 80} className="grow basis-full lg:basis-[calc(50%-0.75rem)]">
              <li className="flex h-full flex-col overflow-hidden rounded-2xl border border-contorno-base bg-branco">
                <div className="flex items-center gap-3 border-b border-contorno-base bg-bg-base p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-azul-bg-superior">
                    <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-bold leading-[1.2] text-azul-base">{item.segment}</p>
                    <p className="text-lg font-extrabold leading-[1.2] text-texto">{item.client}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold leading-[1.2] text-texto">{challengeLabel}</p>
                    <p className="text-sm leading-[1.5] font-medium text-texto-medio">{item.challenge}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-bold leading-[1.2] text-texto">{solutionLabel}</p>
                    <p className="text-sm leading-[1.5] font-medium text-texto-medio">{item.solution}</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-sm font-bold leading-[1.2] text-texto">{resultsLabel}</p>
                    <ul className="flex flex-col gap-2">
                      {item.results.map((result, ri) => {
                        const IconComponent = (Icons[item.resultIcons[ri] as keyof typeof Icons] ?? Icons.Zap) as LucideIcon;
                        return (
                          <li key={result.label} className="flex items-start gap-2.5">
                            <IconComponent className="mt-0.5 size-4 shrink-0 text-azul-base" aria-hidden="true" />
                            <p className="text-sm leading-[1.4] font-medium text-texto">
                              <span className="font-bold">{result.label}</span> {result.description}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 rounded-xl border border-contorno-base bg-bg-base p-5">
                    <p className="text-sm leading-[1.5] font-medium italic text-texto-medio">&ldquo;{item.quote}&rdquo;</p>
                    <p className="text-sm leading-[1.2] text-texto">
                      <span className="font-bold">{item.personName}</span>
                      <span className="text-texto-medio"> — {item.personRole}</span>
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-center text-xs font-medium leading-[1.4] text-texto-medio">{illustrativeNote}</p>
          {complianceNote && (
            <p className="text-center text-xs font-bold leading-[1.4] text-texto-doc-ok">{complianceNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
