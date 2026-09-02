import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import { scaleFeatures, scaleTrustBadges } from "@/config/trust";

function FeatureStrip({ items, label }: { items: typeof scaleFeatures; label: string }) {
  return (
    <ul
      aria-label={label}
      className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px]"
    >
      {items.map((item) => (
        <li key={item.label} className="flex flex-1 items-center gap-2.5 min-w-[180px]">
          <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <span className="text-sm leading-[1.2] font-bold text-texto">{item.label}</span>
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
        <h2 id="scale-security-heading" className="text-2xl leading-[1.2] font-bold text-texto">
          Segura, escalável e <span className="text-azul-base">preparada para crescer.</span>
        </h2>

        <div className="flex w-full flex-col gap-6">
          <FeatureStrip items={scaleFeatures} label="Segurança e governança" />

          <div className="relative flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl p-5 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <Image
              src="/scale/cta-bg.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="-z-10 object-cover"
            />
            <div className="flex flex-col gap-5 text-branco">
              <p className="text-2xl leading-[1.2] font-bold">Comece agora com a Interfy.</p>
              <p className="max-w-2xl text-lg leading-[1.2] font-medium">
                Crie sua conta, teste a plataforma e descubra como a Interfy pode transformar a
                operação da sua empresa.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-5 lg:w-auto lg:shrink-0">
              <Button href="/comece-gratis" variant="secondary" className="flex-1 lg:flex-none">
                Começar Grátis
              </Button>
              <Link
                href="/demo"
                className="inline-flex min-h-[50px] flex-1 shrink-0 items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-branco bg-black/20 px-5 py-2.5 text-base font-bold whitespace-nowrap text-branco transition-colors hover:bg-black/30 lg:flex-none"
              >
                Agendar Demonstração
                <Calendar className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <FeatureStrip items={scaleTrustBadges} label="Confiança e conformidade" />
        </div>
      </div>
    </section>
  );
}
