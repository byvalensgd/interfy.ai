import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/ui/StatsBar";
import Reveal from "@/components/ui/Reveal";
import { platformStats } from "@/config/platform";

export default function TestDriveCTA() {
  return (
    <section aria-label="Comece seu Test Drive" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="relative flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl p-5 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <Image
            src="/test-drive/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="flex flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
            <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">
              O futuro da sua operação começa com um Test Drive.
            </p>
            <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-2xl">
              Experimente a Interfy.ai por 7 dias. Sem cartão. Sem compromisso.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
            <Button href="/comece-gratis" variant="secondary" className="grow whitespace-nowrap lg:grow-0">
              Começar Test Drive Grátis
            </Button>
            <Link
              href="/planos"
              className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/40 px-5 py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/50 lg:grow-0"
            >
              Ver Planos
              <Calendar className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <StatsBar stats={platformStats} label="Números da plataforma Interfy" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
