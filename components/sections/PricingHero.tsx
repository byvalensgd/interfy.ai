import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { pricingHighlights, pricingProductBadges } from "@/config/pricing";

const highlightIcons = {
  trial: "/icons/pricing/trial.svg",
  sign: "/icons/pricing/sign.svg",
  device: "/icons/pricing/device.svg",
  ai: "/icons/pricing/ai.svg",
} as const;

const heroSlides = ["/hero/hero-slide-1.webp", "/hero/hero-slide-3.webp"];

export default function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-hero-heading"
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
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[520px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                <h1
                  id="pricing-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  A plataforma completa para transformar{" "}
                  <span className="inline-block bg-[linear-gradient(102deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    sua operação com AI.
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  Escolha o plano ideal para o tamanho da sua empresa e comece a transformar
                  documentos, processos e pessoas em resultados reais.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
                  <Button href="#planos" variant="primary" size="md">
                    Mensal
                  </Button>
                  <Link
                    href="#planos"
                    className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-lg border-[1.5px] border-contorno-base bg-branco px-[30px] py-2.5 text-base font-bold text-texto transition-colors hover:border-azul-base"
                  >
                    Anual
                    <span className="rounded-full bg-[#e8f7ec] p-2 text-base font-bold leading-[1.2] text-ecm">
                      Economize até 30%
                    </span>
                  </Link>
                </div>
              </div>

              <ul className="flex w-full items-center gap-[10px]">
                {pricingHighlights.map((item) => (
                  <li key={item.label} className="flex flex-1 flex-col items-center gap-[15px] text-center">
                    <Image src={highlightIcons[item.icon]} alt="" aria-hidden="true" width={40} height={40} />
                    <span className="text-base font-bold leading-[1.2] text-texto">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-start gap-5" delayMs={120}>
              <HeroSlideshow
                images={heroSlides}
                alt="Plataforma Interfy exibida em laptop e smartphone, mostrando o painel de gestão com IA"
                className="aspect-[2625/1793] w-full"
              />
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200}>
          <ul className="flex w-full flex-wrap items-center justify-center gap-5">
            {pricingProductBadges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2.5 rounded-full border-[0.5px] border-contorno-base bg-branco px-4 py-3"
              >
                <Image src={badge.icon} alt="" aria-hidden="true" width={26} height={26} />
                <span className="whitespace-nowrap text-base font-bold leading-[1.2] text-texto">
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
