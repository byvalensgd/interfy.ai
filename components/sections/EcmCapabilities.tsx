import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { ecmCapabilities } from "@/config/ecm-page";
import { platformStats } from "@/config/platform";

export default function EcmCapabilities() {
  return (
    <section
      aria-labelledby="ecm-capabilities-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="ecm-capabilities-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Gestão documental completa com{" "}
          <span className="text-azul-base">Inteligência Artificial</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecmCapabilities.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-4 py-5"
              >
                <div className="flex w-full items-center gap-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="w-full" delayMs={120}>
          <StatsBar stats={platformStats} label="Escala da plataforma Interfy" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
