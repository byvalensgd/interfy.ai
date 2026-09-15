import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { parceriaHowItWorksIcons } from "@/config/parceria-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const iconBadgeBackground = "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)";

export default async function ParceriaHowItWorks() {
  const { parceria } = await getDictionary();
  const { howItWorks } = parceria;
  const steps = parceriaHowItWorksIcons.map((item, i) => ({ ...item, ...howItWorks.steps[i] }));

  return (
    <section aria-labelledby="parceria-how-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="parceria-how-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {howItWorks.headingPrefix}
          <span className="text-azul-base">{howItWorks.headingHighlight}</span>
        </h2>

        <ol className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 120}>
              <li className="relative flex h-[170px] flex-col items-start gap-5 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]">
                <div className="flex w-full items-center gap-[15px]">
                  <span
                    className="flex size-[60px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-contorno-base p-3"
                    style={{ backgroundImage: iconBadgeBackground }}
                  >
                    <Image src={step.icon} alt="" aria-hidden="true" width={step.iconWidth} height={step.iconHeight} />
                  </span>
                  <p className="min-w-0 flex-1 text-xl leading-[1.2] font-bold text-texto">{step.title}</p>
                </div>
                <p className="text-base leading-[1.2] font-medium text-texto">{step.description}</p>

                <span
                  aria-hidden="true"
                  className="absolute -top-[11px] -right-[11px] flex size-[34px] items-center justify-center rounded-full bg-azul-base"
                >
                  <span className="text-2xl leading-[1.2] font-bold text-branco">{i + 1}</span>
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
