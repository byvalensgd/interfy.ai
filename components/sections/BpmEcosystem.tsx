import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { bpmEcosystemLinks } from "@/config/bpm-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function BpmEcosystem() {
  const { process } = await getDictionary();
  const { ecosystem } = process;
  const items = bpmEcosystemLinks.map((link, i) => ({ ...link, ...ecosystem.items[i] }));

  return (
    <section
      aria-labelledby="bpm-ecosystem-heading"
      className="flex justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2
            id="bpm-ecosystem-heading"
            className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
          >
            {ecosystem.headingPrefix}
            <span className="text-azul-base">{ecosystem.headingHighlight}</span>
          </h2>
          <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-medium text-texto">
            {ecosystem.description}
          </p>
        </div>

        <Reveal className="w-full">
          <div className="grid w-full grid-cols-2 items-start gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:gap-x-5">
            {items.map((item) => (
              <div key={item.product} className="flex min-w-[140px] flex-col items-center gap-5 text-center lg:flex-1">
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <div className="flex w-full flex-col items-center gap-2.5 text-lg leading-[1.2] font-extrabold">
                  <p className="w-full leading-[1.2] text-texto">{ecosystem.brandPrefix}</p>
                  {item.colorClass === "gradient" ? (
                    <p className="inline-block w-full bg-[linear-gradient(123.44deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text leading-[1.2] text-transparent">
                      {item.product}
                    </p>
                  ) : (
                    <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                  )}
                </div>
                <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
