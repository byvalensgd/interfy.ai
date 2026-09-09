import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { agentesBenefits } from "@/config/agentes";

function BenefitsRow() {
  return (
    <ul
      aria-label="Benefícios da Interfy Agentes"
      className="grid w-full grid-cols-2 items-stretch gap-x-8 gap-y-6 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
    >
      {agentesBenefits.map((item) => (
        <li key={item.label} className="flex min-w-0 flex-row items-center gap-2.5">
          <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <span className="min-w-0 flex-1 text-sm leading-[1.2] font-bold text-texto">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AgentesCTA() {
  return (
    <section aria-label="Comece a usar a Interfy Agentes" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <Reveal className="relative flex w-full flex-col items-start gap-6 rounded-2xl p-5 sm:p-10">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <Image src="/agentes/cta-bg.png" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-6">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">
                Inteligência que trabalha por você.
              </p>
              <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-xl">
                Crie agentes, automatize tarefas e transforma sua operação com AI.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-[10px] lg:w-auto lg:shrink-0">
              <Link
                href="/comece-gratis"
                className="inline-flex h-10 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg border-[1.5px] border-branco bg-branco px-[15px] text-sm font-bold text-azul-base transition-colors hover:bg-branco/90"
              >
                Test Drive grátis por 7 dias
              </Link>
              <Link
                href="/demo"
                className="inline-flex h-10 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg border-[1.5px] border-branco bg-black/40 px-[15px] text-sm font-bold text-branco transition-colors hover:bg-black/50"
              >
                Agendar Demonstração
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative hidden h-[154px] w-[160px] shrink-0 lg:block" aria-hidden="true">
              <Image src="/agentes/robot-mascot.png" alt="" fill sizes="160px" className="object-cover object-top" />
            </div>
          </div>

          <BenefitsRow />

          <div className="absolute top-1/2 -right-4 hidden size-[60px] -translate-y-1/2 overflow-hidden rounded-[11px] lg:block">
            <Image src="/agentes/ai-badge.png" alt="" fill sizes="60px" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
