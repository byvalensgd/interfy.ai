import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { howItWorksSteps } from "@/config/test-drive";

export default function TestDriveSteps() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="test-drive-steps-heading"
      className="flex scroll-mt-[var(--header-height)] justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="test-drive-steps-heading" className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto">
          Como funciona o <span className="text-azul-base">Test Drive</span>
        </h2>

        <Reveal className="w-full">
          <ol className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-5 rounded-[20px] border border-contorno-base px-[15px] py-5"
              >
                <div className="flex w-full items-center gap-[15px]">
                  <Image src={step.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="flex-1 text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">{step.title}</p>
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-branco ${step.colorClass}`}
                  >
                    {step.number}
                  </span>
                </div>
                <p className="text-sm leading-[1.2] font-medium text-texto">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
