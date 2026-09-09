import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatsBar from "@/components/ui/StatsBar";
import { bpmCtaFeatures } from "@/config/bpm-page";

export default function EcmCTA() {
  return (
    <section aria-label="Comece a usar a Interfy Documents" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-6">
        <Reveal className="relative flex w-full flex-col items-start gap-6 rounded-2xl p-5 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <Image
            src="/ecm/cta-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="-z-10 rounded-2xl object-cover"
          />
          <div className="flex flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
            <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">
              Transforme seus documentos em informação estratégica
            </p>
            <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-2xl">
              Comece agora com 7 dias grátis e veja como a Interfy Documents pode revolucionar sua
              gestão documental.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
            <Button href="/comece-gratis" variant="secondary" className="grow whitespace-nowrap lg:grow-0">
              Test Drive Grátis por 7 dias
            </Button>
            <Link
              href="/demo"
              className="inline-flex min-h-[50px] grow shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:grow-0"
            >
              Agendar Demonstração
              <Calendar className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <StatsBar stats={bpmCtaFeatures} label="Diferenciais do Interfy Documents" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
