import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SegmentsTrustIllustration from "@/components/ui/SegmentsTrustIllustration";
import { trustStats } from "@/config/segments-page";

export default function SegmentsTrust() {
  return (
    <section aria-label="Confiança e adaptabilidade da plataforma" className="flex justify-center bg-bg-base px-5 py-10 sm:py-16">
      <div className="grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.7fr_1fr]">
        <Reveal className="flex w-full flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 text-center sm:flex-row sm:items-center sm:text-left lg:p-[30px]">
          <div className="flex w-full flex-1 flex-col items-center gap-5 sm:items-start">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="text-[20px] leading-[1.2] font-bold text-texto">
                Feito para a realidade de{" "}
                <span className="text-azul-base">diferentes empresas.</span>
              </p>
            </div>
            <p className="text-base leading-[1.2] font-medium text-texto">
              Da pequena empresa à operação global, a Interfy se adapta ao seu tamanho, segmento e
              objetivos.
            </p>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2.5 text-sm font-bold whitespace-nowrap text-[#0048c5] hover:underline"
            >
              Ver casos de uso
              <ArrowUpRight className="size-2.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[254/211] w-full max-w-[220px] shrink-0 sm:max-w-none sm:flex-1">
            <SegmentsTrustIllustration />
          </div>
        </Reveal>

        <Reveal
          className="flex w-full flex-col gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 lg:p-[30px]"
          delayMs={120}
        >
          <p className="text-[20px] leading-[1.2] font-bold text-texto">Empresas que confiam na Interfy</p>
          <ul className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center gap-3.5 text-center">
                <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} />
                <p className="w-full text-2xl leading-[1.2] font-bold text-texto">{stat.value}</p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
