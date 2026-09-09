import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { swcHeroTrust, swcHeroFlow } from "@/config/swc-page";

export default function SwcHero() {
  return (
    <section
      aria-labelledby="swc-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <Image
        src="/swc/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="flex w-full max-w-[1400px] flex-1 flex-col justify-center gap-10">
        <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <h1
              id="swc-hero-heading"
              className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
            >
              Capture qualquer documento.
            </h1>
            <p className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-azul-base">
              A AI faz o resto.
            </p>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
              Interfy CAPTURA transforma documentos físicos e digitais em informação inteligente em
              segundos. Capture pelo navegador, scanners profissionais ou smartphone. A Interfy AI
              reconhece, compreende, extrai, classifica, indexa e encaminha tudo automaticamente para
              a sua operação.
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

          <ul className="flex w-full flex-col items-start gap-[15px]">
            {swcHeroTrust.map((item) => (
              <li key={item.icon} className="flex w-full min-w-[240px] items-start gap-5">
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                <span className="flex min-h-[30px] w-full min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal immediate className="flex w-full flex-wrap items-center justify-around gap-[15px] rounded-[20px] bg-branco px-5 py-[30px]" delayMs={120}>
          {swcHeroFlow.map((item) => (
            <div key={item.icon} className="flex shrink-0 items-center gap-2.5">
              <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
              <span className="text-lg leading-[1.2] font-extrabold whitespace-nowrap text-texto">
                {item.text}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
