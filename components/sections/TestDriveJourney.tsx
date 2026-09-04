import { Fragment } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import {
  journeyConnectorGradients,
  journeyDays,
  readyChecklist,
} from "@/config/test-drive";

function Connector({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative mt-[35px] h-px min-w-6 flex-1 bg-contorno-base" aria-hidden="true">
      <span
        className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: `linear-gradient(180deg, ${from}, ${to})` }}
      />
    </div>
  );
}

export default function TestDriveJourney() {
  return (
    <section aria-labelledby="test-drive-journey-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-10">
        <Reveal className="flex flex-col gap-5 rounded-[20px] border border-contorno-base p-5 sm:p-[30px]">
          <h2 id="test-drive-journey-heading" className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto">
            Seu <span className="inline-block bg-[linear-gradient(168deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">Test Drive</span>{" "}
            já começa pronto.
          </h2>
          <p className="text-base leading-[1.2] font-medium text-texto">
            Para você aproveitar cada minuto, preparamos exemplos reais para testar imediatamente.
          </p>

          <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-[15px] sm:grid-cols-2 lg:grid-cols-4">
            {readyChecklist.map((item) => (
              <li key={item.text + (item.highlight ?? "")} className="flex items-center gap-2.5">
                <Image
                  src="/icons/test-drive/checklist-check-purple.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                <span className="text-base leading-[1.2] font-medium text-texto">
                  {item.text}
                  {item.highlight && (
                    <span className={`font-bold ${item.highlightClassName}`}>{item.highlight}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="flex flex-col gap-5 rounded-[20px] border border-contorno-base p-5 sm:p-[30px]" delayMs={120}>
          <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
            Sugerimos uma{" "}
            <span className="inline-block bg-[linear-gradient(170deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              jornada de 7 dias
            </span>{" "}
            <span className="text-base font-medium">
              (mas tudo está disponível desde o primeiro dia)
            </span>
          </p>

          <div className="flex w-full flex-wrap items-start gap-y-8">
            {journeyDays.map((day, index) => (
              <Fragment key={day.line2}>
                <div className="flex min-w-[100px] flex-1 flex-col items-center gap-5 text-center">
                  <div className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                    <Image src={day.icon} alt="" aria-hidden="true" width={30} height={30} />
                  </div>
                  <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">Dia {index + 1}</p>
                  <div className="flex flex-col gap-2.5 text-base leading-[1.2] text-texto-medio">
                    <span className="font-medium">{day.line1}</span>
                    <span className="font-bold">{day.line2}</span>
                  </div>
                </div>
                {index < journeyDays.length - 1 && (
                  <Connector
                    from={journeyConnectorGradients[index][0]}
                    to={journeyConnectorGradients[index][1]}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
