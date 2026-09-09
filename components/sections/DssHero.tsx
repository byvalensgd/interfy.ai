import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { dssHeroFeatureChips } from "@/config/dss-page";

export default function DssHero() {
  return (
    <section
      aria-labelledby="dss-hero-heading"
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

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="dss-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  Assinatura{" "}
                  <span className="inline-block bg-[linear-gradient(117.12deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                    digital grátis
                  </span>
                </h1>
                <p className="text-[clamp(1.375rem,1.1111vw+1.1111rem,2rem)] font-bold leading-[1.2] text-texto">
                  para todos os usuários da plataforma.
                </p>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  Assine e acompanhe documentos com{" "}
                  <span className="text-azul-base">velocidade, segurança e integração total</span> com
                  sua operação.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Image src="/icons/dss/checkin.svg" alt="" aria-hidden="true" width={22} height={22} className="shrink-0" />
                <span className="text-lg leading-[1.2] font-extrabold text-texto">Sem cartão de crédito</span>
              </div>

              <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
                <Button href="/comece-gratis" variant="primary" className="grow whitespace-nowrap lg:grow-0">
                  Teste Drive Grátis por 7 dias
                </Button>
                <Button href="/demo" variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                  Agende uma demonstração
                </Button>
              </div>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-center" delayMs={120}>
              <div className="relative aspect-[2625/1793] w-full">
                <Image
                  src="/dss/hero-mockup.webp"
                  alt="Plataforma Interfy Sign exibida em tablet e smartphone, mostrando um documento pronto para assinatura"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <ul className="flex w-full flex-wrap items-start justify-between gap-y-5 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]">
            {dssHeroFeatureChips.map((item) => (
              <li key={item.icon} className="flex flex-col items-center gap-2.5 text-center">
                <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} className="shrink-0" />
                <div className="flex flex-col items-center gap-1.5 text-sm leading-[1.2] font-bold whitespace-nowrap text-texto">
                  <span>{item.labelLines[0]}</span>
                  <span>{item.labelLines[1]}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
