import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { swcFeatures } from "@/config/swc-page";
import { platformStats } from "@/config/platform";

export default function SwcFeatures() {
  return (
    <section
      aria-labelledby="swc-features-heading"
      className="flex justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="swc-features-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Recursos e benefícios do <span className="text-azul-base">Interfy Capture</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {swcFeatures.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5 text-center"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
                <div className="flex w-full flex-col items-center gap-2.5">
                  <p className="w-full text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                  <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
                </div>
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
