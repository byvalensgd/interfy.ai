import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { bpmHeroStats } from "@/config/bpm-page";

export default function BpmHero() {
  return (
    <section
      aria-labelledby="bpm-hero-heading"
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
        <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
          <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <h1
                id="bpm-hero-heading"
                className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                Crie, automatize e transforme processos{" "}
                <span className="text-azul-base">com AI.</span>
              </h1>
              <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                <span className="font-bold text-azul-base">Interfy PROCESSOS</span> permite que você
                crie processos visuais, formulários inteligentes e automações poderosas com AI. Mais
                agilidade, controle e eficiência em cada etapa.
              </p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Button href="/comece-gratis" variant="primary" className="grow whitespace-nowrap lg:grow-0">
                Teste Drive Grátis
              </Button>
              <Button href="/demo" variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                Agende uma demonstração
              </Button>
            </div>

            <ul className="flex w-full flex-wrap items-start gap-5">
              {bpmHeroStats.map((stat) => (
                <li key={stat.icon} className="flex min-w-[120px] flex-1 flex-col items-start gap-2.5 text-left">
                  <div className="flex items-center gap-2">
                    <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="text-lg leading-[1.2] font-extrabold whitespace-nowrap text-texto">
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

          <Reveal immediate className="flex min-w-0 flex-col items-end" delayMs={120}>
            <div className="relative aspect-[2625/1793] w-full">
              <Image
                src="/bpm/hero-mockup.webp"
                alt="Plataforma Interfy Process exibida em tablet e smartphone, mostrando o desenho visual de um processo e a lista de tarefas"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
