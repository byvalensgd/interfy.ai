import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/ui/StatsBar";
import Reveal from "@/components/ui/Reveal";
import PricingFaq from "@/components/sections/PricingFaq";
import { platformStats } from "@/config/platform";

export default function PricingBase() {
  return (
    <section aria-labelledby="pricing-base-heading" className="flex justify-center px-5 pb-10 sm:pb-16">
      <h2 id="pricing-base-heading" className="sr-only">
        Comece a usar a Interfy
      </h2>

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="flex w-full flex-col items-start gap-5 rounded-2xl bg-azul-base p-5 text-branco sm:flex-row sm:items-center">
          <Image src="/icons/pricing/speed.svg" alt="" aria-hidden="true" width={50} height={50} className="shrink-0" />
          <div className="flex flex-1 flex-col items-center gap-2.5 text-center sm:items-start sm:text-left">
            <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2]">
              Teste todos os recursos da Interfy.ai por 7 dias grátis.
            </p>
            <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-medium leading-[1.2]">Sem cartão de crédito. Sem compromisso.</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Button href="/comece-gratis" variant="secondary" showArrow>
              Test Drive Grátis
            </Button>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-branco p-[15px] text-base font-bold text-branco transition-colors hover:bg-black/10"
            >
              Agendar uma demo
              <Image src="/icons/pricing/arrow-right.svg" alt="" aria-hidden="true" width={10} height={10} />
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <StatsBar stats={platformStats} label="Números da plataforma Interfy" />
        </Reveal>

        <Reveal delayMs={240}>
          <div className="grid w-full grid-cols-1 gap-2.5 lg:grid-cols-[1fr_303px]">
            <PricingFaq />

            <div className="flex flex-col gap-5 rounded-[14px] bg-bg-base p-5">
              <h3 className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">Fale com um especialista</h3>
              <p className="flex-1 text-base leading-[1.2] font-medium text-texto">
                Nossa equipe está pronta para ajudar você a escolher o plano ideal para o seu negócio.
              </p>
              <Button href="/demo" variant="secondary" size="sm">
                Falar com especialista
                <Image src="/icons/pricing/headset.svg" alt="" aria-hidden="true" width={20} height={20} />
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex w-full flex-col items-start gap-5 rounded-2xl bg-[#0d215f] p-5 text-branco sm:flex-row sm:items-center">
          <Image src="/icons/pricing/rocket.svg" alt="" aria-hidden="true" width={50} height={50} className="shrink-0" />
          <div className="flex flex-1 flex-col items-center gap-2.5 text-center sm:items-start sm:text-left">
            <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2]">Pronto para transformar sua operação?</p>
            <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-medium leading-[1.2]">
              Junte-se a milhares de empresas que já confiam na Interfy.ai.
            </p>
          </div>
          <Button href="/comece-gratis" variant="secondary" showArrow>
            Começar agora
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
