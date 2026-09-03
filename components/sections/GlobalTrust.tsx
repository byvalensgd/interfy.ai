import Image from "next/image";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import Reveal from "@/components/ui/Reveal";
import { securityBadges } from "@/config/trust";

const whiteLabelSlides = [
  "/global/white-label-1.webp",
  "/global/white-label-2.webp",
  "/global/white-label-3.webp",
  "/global/white-label-4.webp",
];

export default function GlobalTrust() {
  return (
    <section
      aria-labelledby="global-trust-heading"
      className="flex justify-center bg-bg-base px-5 py-10 sm:py-16"
    >
      <h2 id="global-trust-heading" className="sr-only">
        Sua marca, presença global e segurança
      </h2>

      <div className="grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-5 xl:grid-cols-3">
        <Reveal className="flex flex-col gap-[30px] rounded-[12px] bg-branco p-5">
          <div className="flex flex-col items-center gap-[15px] text-center xl:items-start xl:text-left">
            <p className="bg-[linear-gradient(162.5deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-xs leading-[1.2] font-bold text-transparent">
              SUA MARCA. SUA EXPERIÊNCIA.
            </p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
              White Label &amp; Workspace{" "}
              <span className="bg-[linear-gradient(151deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                Exclusivo
              </span>
            </p>
            <p className="text-base leading-[1.2] font-medium text-texto">
              Personalize a plataforma com sua marca, cores, tela de login e domínio próprio.
            </p>
          </div>
          <ImageSlideshow
            images={whiteLabelSlides}
            alt="Plataforma personalizada com a marca do cliente (White Label)"
            className="aspect-[1756/989] w-full"
          />
        </Reveal>

        <Reveal className="flex flex-col gap-[30px] rounded-[12px] bg-branco p-5" delayMs={120}>
          <div className="flex flex-col items-center gap-[15px] text-center xl:items-start xl:text-left">
            <p className="text-xs leading-[1.2] font-bold text-azul-base">PRESENÇA GLOBAL.</p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
              Preparado <span className="text-azul-base">para o mundo</span>
            </p>
            <p className="text-base leading-[1.2] font-medium text-texto">
              A Interfy está preparada para atender empresas em mais de 180 países, com suporte em
              16 idiomas.
            </p>
          </div>
          <div className="relative aspect-[1756/989] w-full">
            <Image
              src="/global/world-map.webp"
              alt="Mapa-múndi ilustrando a presença global da Interfy"
              fill
              sizes="(min-width: 1280px) 33vw, 100vw"
              className="object-contain"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-[30px] rounded-[12px] bg-branco p-5" delayMs={240}>
          <div className="flex flex-col items-center gap-[15px] text-center xl:items-start xl:text-left">
            <p className="text-xs leading-[1.2] font-bold text-azul-base">
              SEGURANÇA E CONFIANÇA EM PRIMEIRO LUGAR.
            </p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] leading-[1.2] font-bold text-texto">
              Infraestrutura segura e confiável
            </p>
          </div>
          <ul className="flex aspect-[1756/989] w-full flex-wrap content-stretch justify-center gap-2.5">
            {securityBadges.map((badge) => (
              <li
                key={badge.label}
                className="flex basis-[calc((100%-20px)/3)] flex-col items-center justify-center gap-5 rounded-xl border border-contorno-base px-[15px] py-5 text-center"
              >
                <Image src={badge.icon} alt="" aria-hidden="true" width={40} height={40} />
                <span className="text-sm leading-[1.2] font-bold text-texto">{badge.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
