import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { segmentCatalog } from "@/config/segments";

export default function SegmentsCatalog() {
  return (
    <section
      id="catalogo"
      aria-labelledby="segments-catalog-heading"
      className="flex scroll-mt-[var(--header-height)] justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2
            id="segments-catalog-heading"
            className="text-2xl font-bold leading-[1.2] text-texto"
          >
            Um único ecossistema.{" "}
            <span className="inline-block bg-[linear-gradient(165.6deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              Infinitas possibilidades.
            </span>
          </h2>
          <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
            Escolha seu segmento e descubra como a Interfy AI transforma desafios em resultados
            reais.
          </p>
        </div>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {segmentCatalog.map((segment) => (
              <li
                key={segment.title}
                className="flex flex-col items-center gap-[35px] rounded-[20px] border border-contorno-base px-[15px] py-5"
              >
                <div className="flex w-full items-center gap-[15px]">
                  <Image src={segment.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-extrabold text-texto">
                    {segment.number ? `${segment.number}. ${segment.title}` : segment.title}
                  </p>
                </div>
                <ul className="flex w-full flex-col gap-2.5">
                  {segment.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5">
                      <Image
                        src="/icons/segments/check.svg"
                        alt=""
                        aria-hidden="true"
                        width={16}
                        height={16}
                        className="shrink-0"
                      />
                      <span className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
