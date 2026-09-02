import StatsBar from "@/components/ui/StatsBar";
import EcosystemDiagram from "@/components/ui/EcosystemDiagram";
import { platformStats } from "@/config/platform";

export default function PlatformIntro() {
  return (
    <section
      aria-labelledby="platform-intro-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="grid w-full items-center gap-10 min-[1440px]:grid-cols-[520fr_840fr]">
          <div className="flex max-w-[640px] flex-col items-start gap-10">
            <h2
              id="platform-intro-heading"
              className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] font-bold leading-[1.2] text-texto"
            >
              Uma plataforma empresarial nativa em{" "}
              <span className="bg-[linear-gradient(112.76deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                AI
              </span>
            </h2>
            <p className="text-lg font-medium leading-[1.2] text-texto sm:text-xl">
              Centralize documentos, processos, pessoa, dados e comunicação em
              um único ambiente inteligente. Tudo conectado. Tudo integrado.
            </p>
          </div>

          <EcosystemDiagram />
        </div>

        <StatsBar stats={platformStats} label="Escala da plataforma Interfy" size="lg" />
      </div>
    </section>
  );
}
