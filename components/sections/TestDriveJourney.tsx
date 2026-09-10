import { Fragment } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import {
  journeyConnectorGradients,
  journeyDays,
  readyChecklistStyles,
} from "@/config/test-drive";
import { getDictionary } from "@/lib/i18n/dictionaries";

function Connector({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative mt-[35px] hidden h-px min-w-6 flex-1 bg-contorno-base lg:block" aria-hidden="true">
      <span
        className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: `linear-gradient(180deg, ${from}, ${to})` }}
      />
    </div>
  );
}

export default async function TestDriveJourney() {
  const { testDrive } = await getDictionary();
  const journey = testDrive.journey;
  const readyCard = journey.readyCard;
  const timelineCard = journey.timelineCard;

  return (
    <section aria-labelledby="test-drive-journey-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-10">
        <Reveal className="flex flex-col gap-5 rounded-[20px] border border-contorno-base p-5 sm:p-[30px]">
          <h2 id="test-drive-journey-heading" className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto">
            {readyCard.headingPrefix}
            <span className="inline-block bg-[linear-gradient(168deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {readyCard.headingHighlight}
            </span>
            {readyCard.headingSuffix}
          </h2>
          <p className="text-base leading-[1.2] font-medium text-texto">{readyCard.paragraph}</p>

          <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-[15px] sm:grid-cols-2 lg:grid-cols-4">
            {readyChecklistStyles.map((style, index) => {
              const item = readyCard.checklist[index];
              return (
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
                      <span className={`font-bold ${style.highlightClassName}`}>{item.highlight}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal className="flex flex-col gap-5 rounded-[20px] border border-contorno-base p-5 sm:p-[30px]" delayMs={120}>
          <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
            {timelineCard.paragraphPrefix}
            <span className="inline-block bg-[linear-gradient(170deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {timelineCard.paragraphHighlight}
            </span>{" "}
            <span className="text-base font-medium">{timelineCard.paragraphNote}</span>
          </p>

          <div className="grid w-full grid-cols-2 items-start gap-x-6 gap-y-8 sm:grid-cols-4 lg:flex lg:flex-nowrap lg:gap-x-0">
            {journeyDays.map((day, index) => {
              const text = timelineCard.days[index];
              return (
                <Fragment key={text.line2}>
                  <div className="flex min-w-[100px] flex-col items-center gap-5 text-center lg:flex-1">
                    <div className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                      <Image src={day.icon} alt="" aria-hidden="true" width={30} height={30} />
                    </div>
                    <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">
                      {timelineCard.dayLabel.replace("{number}", String(index + 1))}
                    </p>
                    <div className="flex flex-col gap-2.5 text-base leading-[1.2] text-texto-medio">
                      <span className="font-medium">{text.line1}</span>
                      <span className="font-bold">{text.line2}</span>
                    </div>
                  </div>
                  {index < journeyDays.length - 1 && (
                    <Connector
                      from={journeyConnectorGradients[index][0]}
                      to={journeyConnectorGradients[index][1]}
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
