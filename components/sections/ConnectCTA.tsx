import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { heroStats } from "@/config/hero";

export default function ConnectCTA() {
  return (
    <section aria-label="Comece a usar o Interfy Connect" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="relative flex w-full flex-col items-center gap-10 overflow-hidden rounded-2xl p-5 sm:p-[30px]">
          <Image
            src="/connect/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="flex w-full flex-wrap items-center justify-center gap-10">
            <div className="flex min-w-[320px] flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[32px] leading-[1.2] font-bold">
                Conecte sua equipe e transforme a colaboração em resultados.
              </p>
              <p className="min-h-[14px] text-[20px] leading-[1.2] font-medium">
                Tudo integrado. Tudo rastreável. Tudo em uma conversa.
              </p>
            </div>
            <div className="flex w-full max-w-[320px] flex-col items-start gap-5">
              <Button href="/comece-gratis" variant="secondary" className="w-full whitespace-nowrap">
                Test Drive Grátis por 7 dias
              </Button>
              <Link
                href="/demo"
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-[30px] py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30"
              >
                Agendar Demonstração
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
            <Image
              src="/connect/cta-illustration.webp"
              alt=""
              aria-hidden="true"
              width={169}
              height={120}
              className="hidden h-[120px] w-auto shrink-0 lg:block"
            />
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <StatsBar stats={heroStats} label="Números da plataforma Interfy" />
        </Reveal>
      </div>
    </section>
  );
}
