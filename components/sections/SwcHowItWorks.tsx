import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { swcHowItWorksSteps } from "@/config/swc-page";

export default function SwcHowItWorks() {
  return (
    <section aria-labelledby="swc-how-it-works-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="swc-how-it-works-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Como funciona o <span className="text-azul-base">Interfy Capture</span>
        </h2>

        <Reveal className="w-full">
          <ol className="flex w-full flex-wrap items-start gap-5">
            {swcHowItWorksSteps.map((step, index) => (
              <li key={step.title} className="flex min-w-[140px] flex-1 flex-col items-center gap-10">
                <div className="relative flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <span className="absolute -top-px -left-[1.33px] flex size-[18px] items-center justify-center rounded-full bg-azul-base text-[10px] leading-[1.2] font-bold text-branco">
                    {index + 1}
                  </span>
                  <Image src={step.icon} alt="" aria-hidden="true" width={36} height={36} />
                </div>
                <div className="flex w-full flex-col items-center gap-[30px] text-center">
                  <p className="w-full text-lg leading-[1.2] font-extrabold text-texto">{step.title}</p>
                  <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
