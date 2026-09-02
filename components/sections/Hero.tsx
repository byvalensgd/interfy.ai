import Image from "next/image";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/ui/StatsBar";
import { heroBadges, heroStats } from "@/config/hero";

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
            <div className="flex max-w-[520px] flex-col items-start gap-8">
              <h1
                id="hero-heading"
                className="text-[clamp(2rem,4vw+1rem,3rem)] font-extrabold leading-[1.2] text-texto"
              >
                Transforme sua operação com IA.
              </h1>
              <p className="text-lg font-medium leading-[1.2] text-texto sm:text-xl">
                Gestão de Documentos, Automação de Processos, Captura
                Inteligente, Assinatura Digital, Colaboração e Mobile em uma
                única plataforma.
              </p>

              <div className="flex w-full items-center gap-5">
                <Image
                  src="/icons/sign-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <p className="flex-1 text-base leading-[1.2] text-azul-base sm:text-xl">
                  <span className="font-bold">A Interfy</span> oferece
                  assinatura digital grátis para todos os usuários da
                  plataforma.
                </p>
              </div>

              <div className="flex w-full flex-wrap items-center gap-5">
                <Button
                  href="/comece-gratis"
                  variant="primary"
                  className="flex-1 min-w-[190px]"
                >
                  Teste grátis por 14 dias
                </Button>
                <Button
                  href="/demo"
                  variant="secondary"
                  className="flex-1 min-w-[222px]"
                >
                  Agende uma demonstração
                </Button>
              </div>
            </div>

            <div className="flex min-w-0 flex-col items-start gap-5">
              <div className="relative aspect-[4096/2250] w-full">
                <Image
                  src="/hero/hero-screens.webp"
                  alt="Plataforma Interfy exibida em laptop e smartphone, mostrando o painel de gestão com IA"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>

              <div className="flex w-full flex-wrap items-center justify-center gap-4 px-0 sm:px-12">
                <p className="whitespace-nowrap text-lg font-extrabold text-texto">
                  Disponível via:
                </p>
                <div className="flex flex-1 flex-wrap items-center justify-end gap-4">
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
            </div>
          </div>
        </div>

        <StatsBar stats={heroStats} label="Diferenciais da plataforma" />
      </div>
    </section>
  );
}
