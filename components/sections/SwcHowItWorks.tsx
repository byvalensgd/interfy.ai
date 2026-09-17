import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { swcHowItWorksSteps } from "@/config/swc-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function SwcHowItWorks() {
  const { capture } = await getDictionary();
  const { howItWorks } = capture;

  return (
    <section aria-labelledby="swc-how-it-works-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="swc-how-it-works-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {howItWorks.headingPrefix}
          <span className="text-azul-base">{howItWorks.headingHighlight}</span>
        </h2>

        <Reveal className="w-full">
          {/* "Complete Box" (see lib/completeBox.ts): flex-basis per
              breakpoint in place of grid-cols-1/2/4/7 so a short last row
              (grow) stretches to fill instead of a CSS Grid leaving it
              blank (7 items in a 2- or 4-col row lands on an incomplete
              last row). */}
          <ol className="flex w-full flex-wrap gap-5">
            {swcHowItWorksSteps.map((icon, index) => {
              const step = howItWorks.steps[index];
              return (
                <li
                  key={icon}
                  className="flex min-w-0 grow basis-full flex-col items-center gap-10 sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(25%-0.9375rem)] xl:basis-[calc(14.2857%-1.0714rem)]"
                >
                  <div className="relative flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                    <span className="absolute -top-px -left-[1.33px] flex size-[18px] items-center justify-center rounded-full bg-azul-base text-[10px] leading-[1.2] font-bold text-branco">
                      {index + 1}
                    </span>
                    <Image src={icon} alt="" aria-hidden="true" width={36} height={36} />
                  </div>
                  <div className="flex w-full flex-col items-center gap-[30px] text-center">
                    <p className="flex min-h-[2.7rem] w-full items-center justify-center text-center text-lg leading-[1.2] font-extrabold text-texto">
                      {step.title}
                    </p>
                    <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
