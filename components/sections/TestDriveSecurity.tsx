import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { dataPreservedList, endOfTrialFeatures } from "@/config/test-drive";

export default function TestDriveSecurity() {
  return (
    <section aria-label="Segurança de dados e continuidade após o Test Drive" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-[30px] rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] p-5 sm:flex-row sm:p-[30px]">
          <div className="flex flex-1 flex-col items-center gap-[30px] text-center lg:items-start lg:text-left">
            <h2 className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-branco">Seus dados continuam seus.</h2>
            <ul className="flex flex-col gap-[15px]">
              {dataPreservedList.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Image
                    src="/icons/test-drive/checklist-check-white.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="text-sm leading-[1.2] font-medium text-branco">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto aspect-[1214/1280] w-full max-w-[230px] shrink-0">
            <video
              src="/test-drive/security-shield.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="size-full object-contain mix-blend-lighten"
            />
          </div>
        </Reveal>

        <Reveal
          className="flex flex-col gap-5 rounded-[20px] border border-contorno-base p-5 sm:p-[30px]"
          style={{
            backgroundImage:
              "linear-gradient(126deg, #ffffff 4.55%, #efefff 90.43%, #c8c8ff 126.82%)",
          }}
          delayMs={120}
        >
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <h2 className="text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto">E se o Test Drive terminar?</h2>
            <p className="text-sm leading-[1.2] font-medium text-texto">
              Você escolhe o plano ideal e continua exatamente de onde parou. Sua Workspace e todos os
              seus dados ficam preservados.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-[15px]">
            {endOfTrialFeatures.map((item) => (
              <li key={item.label} className="flex flex-1 min-w-[100px] flex-col items-center gap-[15px] text-center">
                <div className="flex size-[55px] items-center justify-center rounded-xl border border-contorno-base bg-branco">
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} />
                </div>
                <p className="text-sm leading-[1.2] font-medium text-texto">{item.label}</p>
              </li>
            ))}
          </ul>

          <Button href="/planos" variant="secondary" size="sm" showArrow className="uppercase">
            Escolher meu plano
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
