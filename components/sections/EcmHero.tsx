import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ecmHeroStats } from "@/config/ecm-page";

const aiGradient = "linear-gradient(93.5deg, #184aee 22.863%, #bf18f6 96.412%)";

export default function EcmHero() {
  return (
    <section
      aria-labelledby="ecm-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image
        src="/hero/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="flex w-full max-w-[1400px] flex-1 items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[660fr_700fr]">
          <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[660px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <h1
                id="ecm-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                Seus documentos deixam de ser arquivos. Tornam-se{" "}
                <span className="inline-block bg-[linear-gradient(100.03deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                  informação inteligente.
                </span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                <span className="font-bold text-azul-base">Interfy DOCUMENTS</span> é a nova geração
                de gestão documental. Organize, encontre, proteja e compartilhe documentos com
                inteligência artificial em cada etapa.
              </p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Button href="/comece-gratis" variant="primary" className="grow whitespace-nowrap lg:grow-0">
                Teste Drive Grátis por 7 dias
              </Button>
              <Button href="/demo" variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                Agende uma demonstração
              </Button>
            </div>

            <ul className="flex w-full flex-wrap items-start gap-5">
              {ecmHeroStats.map((stat) => (
                <li key={stat.icon} className="flex min-w-[202px] flex-1 flex-col items-start gap-2.5 text-left">
                  <div className="flex w-full items-center gap-2">
                    <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">
                      {stat.label}
                    </span>
                  </div>
                  <span className="w-full text-sm leading-[1.2] font-medium text-texto-medio">
                    {stat.sublabel}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal immediate className="flex min-w-0 flex-col items-center" delayMs={120}>
            <div className="relative z-0 mb-[-56px] aspect-[2625/1793] w-full">
              <Image
                src="/ecm/hero-mockup.webp"
                alt="Plataforma Interfy Documents exibida em tablet e smartphone, mostrando a lista de documentos e pastas"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="relative z-10 flex w-full max-w-[478px] items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5 shadow-[1px_4px_10px_2px_var(--color-shadow)]">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full p-px" style={{ backgroundImage: aiGradient }}>
                <span className="flex size-full items-center justify-center rounded-full bg-branco p-px">
                  <span className="flex size-full items-center justify-center rounded-full p-2.5" style={{ backgroundImage: aiGradient }}>
                    <Image src="/icons/ecm/ia-icon.svg" alt="" aria-hidden="true" width={30} height={30} />
                  </span>
                </span>
              </span>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5 text-left">
                <p className="w-full text-lg leading-[1.2] font-extrabold text-texto">
                  Encontrar contratos assinados
                </p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">
                  com a empresa Acme em 2024
                </p>
              </div>
              <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-azul-base p-2">
                <Image src="/icons/ecm/enviar-mensagem.svg" alt="" aria-hidden="true" width={30} height={30} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
