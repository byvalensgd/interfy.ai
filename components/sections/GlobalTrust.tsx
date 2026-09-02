import Image from "next/image";
import { securityBadges } from "@/config/trust";

export default function GlobalTrust() {
  return (
    <section
      aria-labelledby="global-trust-heading"
      className="flex justify-center bg-bg-base px-5 py-10 sm:py-16"
    >
      <h2 id="global-trust-heading" className="sr-only">
        Sua marca, presença global e segurança
      </h2>

      <div className="grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-[30px] rounded-[20px] bg-branco p-5">
          <div className="flex flex-col gap-[15px]">
            <p className="bg-[linear-gradient(162.5deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-xs leading-[1.2] font-bold text-transparent">
              SUA MARCA. SUA EXPERIÊNCIA.
            </p>
            <p className="text-xl leading-[1.2] font-bold text-texto">
              White Label &amp; Workspace{" "}
              <span className="bg-[linear-gradient(151deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                Exclusivo
              </span>
            </p>
            <p className="text-base leading-[1.2] font-medium text-texto">
              Personalize a plataforma com sua marca, cores, tela de login e domínio próprio.
            </p>
          </div>
          <div className="relative aspect-[2300/1202] w-full overflow-hidden rounded-[12px]">
            <Image
              src="/global/login-preview.webp"
              alt="Tela de login personalizada com a marca do cliente"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px] rounded-[20px] bg-branco p-5">
          <div className="flex flex-col gap-[15px]">
            <p className="text-xs leading-[1.2] font-bold text-azul-base">PRESENÇA GLOBAL.</p>
            <p className="text-xl leading-[1.2] font-bold text-texto">
              Preparado <span className="text-azul-base">para o mundo</span>
            </p>
            <p className="text-base leading-[1.2] font-medium text-texto">
              A Interfy está preparada para atender empresas em mais de 180 países, com suporte em
              16 idiomas.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="relative aspect-[3403/2334] w-full max-w-[495px]">
              <Image
                src="/global/world-map.webp"
                alt="Mapa-múndi ilustrando a presença global da Interfy"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] rounded-[20px] bg-branco p-5">
          <div className="flex flex-col gap-[15px]">
            <p className="text-xs leading-[1.2] font-bold text-azul-base">
              SEGURANÇA E CONFIANÇA EM PRIMEIRO LUGAR.
            </p>
            <p className="text-xl leading-[1.2] font-bold text-texto">
              Infraestrutura segura e confiável
            </p>
          </div>
          <ul className="flex flex-1 flex-wrap gap-2.5">
            {securityBadges.map((badge) => (
              <li
                key={badge.label}
                className="flex min-w-[120px] flex-1 flex-col items-center justify-center gap-5 rounded-xl border border-contorno-base px-[15px] py-5 text-center"
              >
                <Image src={badge.icon} alt="" aria-hidden="true" width={40} height={40} />
                <span className="text-sm leading-[1.2] font-bold text-texto">{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
