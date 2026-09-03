import Image from "next/image";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/ui/StatsBar";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { heroBadges, heroStats } from "@/config/hero";

const heroSlides = Array.from({ length: 9 }, (_, i) => `/hero/hero-slide-${i + 1}.webp`);

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
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
          <div className="grid w-full items-center gap-10 lg:grid-cols-[520fr_840fr]">
            <Reveal className="flex flex-col items-center gap-8 lg:max-w-[520px] lg:items-start">
              <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                <h1
                  id="hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  Transforme sua operação com{" "}
                  <span className="bg-[linear-gradient(123.44deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    IA
                  </span>
                  .
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  Gestão de Documentos, Automação de Processos, Captura
                  Inteligente, Assinatura Digital, Colaboração e Mobile em uma
                  única plataforma.
                </p>
              </div>

              <div className="flex w-full items-center justify-center gap-5 lg:justify-start">
                <Image
                  src="/icons/sign-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <p className="text-center text-[clamp(1rem,0.4167vw+0.9167rem,1.25rem)] leading-[1.2] text-azul-base lg:flex-1 lg:text-left">
                  <span className="font-bold">A Interfy</span> oferece
                  assinatura digital grátis para todos os usuários da
                  plataforma.
                </p>
              </div>

              <div className="flex w-full flex-wrap items-center gap-5">
                <Button
                  href="/comece-gratis"
                  variant="primary"
                  className="grow whitespace-nowrap"
                >
                  Teste grátis por 14 dias
                </Button>
                <Button
                  href="/demo"
                  variant="secondary"
                  className="grow whitespace-nowrap"
                >
                  Agende uma demonstração
                </Button>
              </div>
            </Reveal>

            <Reveal className="flex min-w-0 flex-col items-start gap-5" delayMs={120}>
              <HeroSlideshow
                images={heroSlides}
                alt="Plataforma Interfy exibida em laptop e smartphone, mostrando o painel de gestão com IA"
                className="aspect-[2625/1793] w-full"
              />

              <div className="flex w-full flex-col items-center gap-4 px-0 sm:px-12 lg:flex-row lg:flex-wrap">
                <p className="whitespace-nowrap text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold text-texto">
                  Disponível via:
                </p>
                <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-auto lg:flex-1 lg:justify-end">
                  {heroBadges.map((badge) => (
                    <div
                      key={badge.src}
                      className="flex h-[60px] flex-1 min-w-[100px] items-center justify-center rounded-xl border border-contorno-base bg-branco px-5 py-[15px]"
                    >
                      <div
                        className="relative h-full max-h-10 w-full"
                        style={{ aspectRatio: badge.aspectRatio }}
                      >
                        <Image
                          src={badge.src}
                          alt={badge.alt}
                          fill
                          sizes="150px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delayMs={200}>
          <StatsBar stats={heroStats} label="Diferenciais da plataforma" />
        </Reveal>
      </div>
    </section>
  );
}
