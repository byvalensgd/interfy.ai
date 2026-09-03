import Image from "next/image";
import ChatDemo from "@/components/sections/ChatDemo";
import Reveal from "@/components/ui/Reveal";

const cardBackground =
  "linear-gradient(130deg, #ffffff 35.4%, #efefff 81.5%, #c8c8ff 108.4%)";
const gradientText =
  "linear-gradient(157deg, #184aee 22.9%, #bf18f6 96.4%)";

const captureChecklist = [
  "Scanner profissional ou mobile.",
  "Reconhecimento de texto e dados com IA.",
  "Classificação automática de documentos.",
  "Indexação e enriquecimento inteligente.",
  "Envio direto para documentos e processos.",
];

export default function FeatureShowcase() {
  return (
    <section
      aria-label="Captura inteligente e agentes de IA"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Interfy Capture */}
        <Reveal
          className="flex flex-col gap-5 rounded-[12px] border border-contorno-base p-5 sm:p-[30px]"
          style={{ backgroundImage: cardBackground }}
        >
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <p
              className="bg-clip-text text-xs font-bold uppercase tracking-wide text-transparent"
              style={{ backgroundImage: gradientText }}
            >
              Captura tudo, de qualquer lugar com IA.
            </p>
            <h3 className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2] text-texto">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: gradientText }}
              >
                Interfy Capture
              </span>{" "}
              inteligente que entende e entrega
            </h3>
            <p className="text-base font-medium leading-[1.2] text-texto">
              A Interfy pode operar com a sua marca para operações especiais,
              unidades ou regiões.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <ul className="flex w-full flex-1 flex-col gap-4">
              {captureChecklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Image
                    src="/icons/features/check-blue.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="text-sm font-medium leading-[1.2] text-texto">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="relative h-[180px] w-full shrink-0 sm:h-[230px] sm:flex-1">
              <Image
                src="/features/capture-preview.webp"
                alt="Captura de documentos por scanner e mobile com reconhecimento de dados via IA"
                fill
                sizes="(min-width: 1024px) 300px, 80vw"
                className="object-contain object-right"
              />
            </div>
          </div>
        </Reveal>

        {/* Agentes / Voice */}
        <Reveal
          className="flex flex-col gap-5 rounded-[12px] border border-contorno-base p-5 sm:p-[30px]"
          style={{ backgroundImage: cardBackground }}
          delayMs={120}
        >
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <p
              className="bg-clip-text text-xs font-bold uppercase tracking-wide text-transparent"
              style={{ backgroundImage: gradientText }}
            >
              IA que entende, executa e responde.
            </p>
            <h3 className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] font-bold leading-[1.2] text-texto">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: gradientText }}
              >
                Interaja
              </span>{" "}
              com a plataforma como nunca
            </h3>
            <p className="text-base font-medium leading-[1.2] text-texto">
              Use agentes inteligentes e comandos de voz para criar, buscar,
              resumir, aprovar e muito mais.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <ChatDemo />

            <div className="relative hidden size-[180px] shrink-0 sm:block">
              <video
                src="/features/robot.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Assistente de IA da Interfy"
                className="size-full object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
