import { Fragment } from "react";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { casesSegmentIcons, casesResultIcons, casesClientLogos } from "@/config/cases-page";

/** Renders `**product name**` markers (used in cases.json to call out
 * Interfy product names inline) as real bold text instead of literal asterisks. */
function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

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
  items,
}: {
  ariaLabel: string;
  heading: string;
  challengeLabel: string;
  solutionLabel: string;
  resultsLabel: string;
  items: CaseItem[];
}) {
  const cases = casesSegmentIcons.map((icon, i) => ({ icon, resultIcons: casesResultIcons[i], logo: casesClientLogos[i], ...items[i] }));

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <h2 className="text-center text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
          {heading}
        </h2>
        <ul className="flex w-full flex-wrap gap-6">
          {cases.map((item, i) => (
            <Reveal key={item.client} delayMs={(i % 2) * 80} className="w-full">
              <li className="flex h-full flex-col overflow-hidden rounded-[30px] border border-contorno-base bg-branco">
                <div className="flex items-center gap-4 border-b border-contorno-base bg-bg-base p-5">
                  <span className="flex size-[60px] shrink-0 items-center justify-center rounded-xl bg-branco">
                    {/* Segment icons carry their own brand colors (gradients for some
                        segments) in the shared /icons/segments asset set; masked here to
                        a flat azul-base so every case card's icon reads the same color. */}
                    <span
                      aria-hidden="true"
                      className="block size-[30px] shrink-0 bg-azul-base"
                      style={{
                        WebkitMaskImage: `url(${item.icon})`,
                        maskImage: `url(${item.icon})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </span>
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold leading-[1.2] text-azul-base">{item.segment}</p>
                    <p className="text-xl font-bold leading-[1.2] text-texto">{item.client}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-8 p-5">
                  <div className="flex flex-col gap-8 p-5 lg:flex-row lg:gap-0 lg:divide-x lg:divide-contorno-base">
                    <div className="flex flex-col gap-2.5 lg:flex-1 lg:pr-6">
                      <p className="text-lg font-bold leading-[1.2] text-texto">{challengeLabel}:</p>
                      <p className="text-base leading-[1.4] font-normal text-texto">{renderBold(item.challenge)}</p>
                    </div>
                    <div className="flex flex-col gap-2.5 lg:flex-1 lg:px-6">
                      <p className="text-lg font-bold leading-[1.2] text-texto">{solutionLabel}:</p>
                      <p className="text-base leading-[1.4] font-normal text-texto">{renderBold(item.solution)}</p>
                    </div>
                    <div className="flex flex-col gap-2.5 lg:flex-1 lg:pl-6">
                      <p className="text-lg font-bold leading-[1.2] text-texto">{resultsLabel}:</p>
                      <ul className="flex flex-col gap-2.5">
                        {item.results.map((result, ri) => {
                          const IconComponent = (Icons[item.resultIcons[ri] as keyof typeof Icons] ?? Icons.Zap) as LucideIcon;
                          return (
                            <li key={result.label} className="flex items-center gap-2.5">
                              <IconComponent className="size-5 shrink-0 text-azul-base" aria-hidden="true" />
                              <p className="flex-1 text-base leading-[1.4] text-texto">
                                <span className="font-bold">{result.label}</span> {renderBold(result.description)}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col items-center gap-6 rounded-2xl border border-contorno-base bg-bg-base p-5 md:flex-row">
                    <span className="flex max-h-[100px] w-full max-w-[250px] shrink-0 items-center justify-center">
                      <Image src={item.logo} alt={item.client} width={250} height={100} className="h-auto max-h-[100px] w-full object-contain" />
                    </span>
                    <div className="flex flex-1 flex-col gap-5">
                      <p className="text-base leading-[1.4] font-light text-texto italic">&ldquo;{renderBold(item.quote)}&rdquo;</p>
                      <div className="flex items-center gap-2.5">
                        <p className="text-lg font-bold leading-[1.2] text-texto">{item.personName}</p>
                        <span className="h-[18px] w-px shrink-0 bg-contorno-base" aria-hidden="true" />
                        <p className="text-base leading-[1.4] text-texto">{item.personRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
