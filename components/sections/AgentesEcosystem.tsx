import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { agentesEcosystemLinks } from "@/config/agentes";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function AgentesEcosystem() {
  const { agents } = await getDictionary();
  const ecosystem = agents.ecosystem;

  return (
    <section
      aria-labelledby="agentes-ecosystem-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="agentes-ecosystem-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {ecosystem.headingPrefix}{" "}
          <span className="inline-block bg-[linear-gradient(169deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            {ecosystem.headingGradient}
          </span>
        </h2>

        <Reveal className="w-full">
          <div className="grid w-full grid-cols-2 items-start gap-x-6 gap-y-10 sm:grid-cols-4 lg:flex lg:flex-nowrap lg:gap-x-5">
            {agentesEcosystemLinks.map((item, i) => (
              <div
                key={item.product}
                className="flex min-w-[180px] flex-col items-center gap-5 text-center lg:flex-1"
              >
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <div className="flex w-full flex-col items-center gap-2.5 text-lg leading-[1.2] font-extrabold">
                  <p className="w-full leading-[1.2] text-texto">{ecosystem.agentsPlusLabel}</p>
                  <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                </div>
                <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">
                  {ecosystem.items[i].description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
