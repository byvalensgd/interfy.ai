import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { dssHowItWorksSteps } from "@/config/dss-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function DssHowItWorks() {
  const { sign } = await getDictionary();
  const howItWorks = sign.howItWorks;

  return (
    <section aria-labelledby="dss-how-it-works-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="dss-how-it-works-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {howItWorks.headingPrefix}
          <span className="text-azul-base">{howItWorks.headingProduct}</span>
        </h2>

        {/* "Complete Box" (see lib/completeBox.ts): flex-basis (hand-calculated
            for this row's gap-5) in place of a bare flex-1, so every row stays
            within 1 item of the next and a short last row stretches (grow) to
            fill instead of an uneven greedy wrap. */}
        <Reveal className="w-full">
          <ol className="flex w-full flex-wrap items-start gap-5">
            {dssHowItWorksSteps.map((step, index) => (
              <li
                key={step.number}
                className="flex min-w-[140px] grow basis-[calc(50%-0.625rem)] flex-col items-center gap-5 sm:basis-[calc(33.3333%-0.8333rem)]"
              >
                <div className="relative flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <span className="absolute -top-px -left-[1.33px] flex size-[18px] items-center justify-center rounded-full bg-azul-base text-[10px] leading-[1.2] font-bold text-branco">
                    {step.number}
                  </span>
                  <Image src={step.icon} alt="" aria-hidden="true" width={36} height={36} />
                </div>
                <p className="w-full text-center text-base leading-[1.2] font-medium text-texto-medio">
                  {howItWorks.steps[index].description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
