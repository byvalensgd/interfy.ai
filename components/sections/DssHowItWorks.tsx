import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { dssHowItWorksSteps } from "@/config/dss-page";

export default function DssHowItWorks() {
  return (
    <section aria-labelledby="dss-how-it-works-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="dss-how-it-works-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Como funciona o <span className="text-azul-base">Interfy Sign</span>
        </h2>

        <Reveal className="w-full">
          <ol className="flex w-full flex-wrap items-start gap-5">
            {dssHowItWorksSteps.map((step) => (
              <li key={step.number} className="flex min-w-[140px] flex-1 flex-col items-center gap-5">
                <div className="relative flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <span className="absolute -top-px -left-[1.33px] flex size-[18px] items-center justify-center rounded-full bg-azul-base text-[10px] leading-[1.2] font-bold text-branco">
                    {step.number}
                  </span>
                  <Image src={step.icon} alt="" aria-hidden="true" width={36} height={36} />
                </div>
                <p className="w-full text-center text-base leading-[1.2] font-medium text-texto-medio">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
