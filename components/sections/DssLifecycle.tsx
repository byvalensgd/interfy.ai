import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { dssLifecycleCards } from "@/config/dss-page";

export default function DssLifecycle() {
  return (
    <section
      aria-labelledby="dss-lifecycle-heading"
      className="flex justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="dss-lifecycle-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Mais controle e eficiência para o ciclo de vida dos{" "}
          <span className="text-azul-base">seus documentos</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {dssLifecycleCards.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-start gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                <p className="w-full text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
