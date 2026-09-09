import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ConnectAppMockup from "@/components/mockup/ConnectAppMockup";
import ConnectAppSlideshow from "@/components/mockup/ConnectAppSlideshow";
import { connectHeroHighlights } from "@/config/connect-page";

export default function ConnectHero() {
  return (
    <section
      aria-labelledby="connect-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center overflow-hidden bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[600fr_760fr]">
            <Reveal immediate className="flex flex-col items-center gap-10 text-center lg:max-w-[600px] lg:items-start lg:text-left">
              <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                <h1
                  id="connect-hero-heading"
                  className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto"
                >
                  Conecte pessoas, documentos e processos em uma{" "}
                  <span className="inline-block bg-[linear-gradient(104deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                    única conversa.
                  </span>
                </h1>
                <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
                  <span className="font-bold text-azul-base">Interfy Connect </span>
                  vai muito além do chat. É colaboração real, integrada aos seus documentos,
                  processos e automações para que nada se perca e tudo aconteça.
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

              <ul className="flex w-full flex-col gap-[15px]">
                {connectHeroHighlights.map((item) => (
                  <li key={item.label} className="flex w-full items-start gap-5">
                    <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                    <span className="flex min-h-[30px] min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate className="flex min-w-0 flex-col items-center" delayMs={120}>
              <div className="w-full max-w-[720px]">
                <ConnectAppMockup>
                  <ConnectAppSlideshow />
                </ConnectAppMockup>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
