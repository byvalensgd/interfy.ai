import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { scaleFeatures, scaleTrustBadges } from "@/config/trust";

function FeatureStrip({ items, label }: { items: typeof scaleFeatures; label: string }) {
  // Fixed column counts (instead of auto-fit) so every row holds the same
  // number of items, or at most one fewer on the last row.
  const n = items.length;
  const lgCols =
    n % 4 === 0 || n % 4 === 3 ? "lg:grid-cols-4" : n % 3 === 0 || n % 3 === 2 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <ul
      aria-label={label}
      className={`grid w-full grid-cols-2 items-stretch gap-x-10 gap-y-6 rounded-[12px] border border-contorno-base bg-branco px-5 py-[30px] ${lgCols}`}
    >
      {items.map((item) => (
        <li key={item.label} className="flex min-w-0 flex-row items-center gap-2.5">
          <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <span className="min-w-0 flex-1 text-sm leading-[1.2] font-bold text-texto">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ScaleSecurity() {
  return (
    <section
      aria-labelledby="scale-security-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="scale-security-heading"
          className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          Segura, escalável e <span className="text-azul-base">preparada para crescer.</span>
        </h2>

        <div className="flex w-full flex-col gap-6">
          <Reveal>
            <FeatureStrip items={scaleFeatures} label="Segurança e governança" />
          </Reveal>

          <Reveal
            className="relative flex w-full flex-col items-start gap-6 rounded-2xl p-5 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
            delayMs={120}
          >
            <Image
              src="/scale/cta-bg.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="-z-10 rounded-2xl object-cover"
            />
            <div className="flex flex-col items-center gap-5 text-center text-branco lg:items-start lg:text-left">
              <p className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold">Comece agora com a Interfy.</p>
              <p className="text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[1.2] font-medium lg:max-w-2xl">
                Crie sua conta, teste a plataforma e descubra como a Interfy pode transformar a
                operação da sua empresa.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href="/comece-gratis" variant="secondary" className="grow whitespace-nowrap lg:grow-0">
                Começar Grátis
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

          <Reveal delayMs={240}>
            <FeatureStrip items={scaleTrustBadges} label="Confiança e conformidade" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
