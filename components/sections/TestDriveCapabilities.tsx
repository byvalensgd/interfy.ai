import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { testDriveCapabilities } from "@/config/test-drive";

export default function TestDriveCapabilities() {
  return (
    <section aria-labelledby="test-drive-capabilities-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="test-drive-capabilities-heading" className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto">
          O que você pode testar durante os <span className="text-azul-base">7 dias</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {testDriveCapabilities.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-center gap-5 rounded-2xl border border-contorno-base p-[17px] text-center"
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
                <div className="flex flex-col gap-[15px]">
                  <p className={`text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] ${item.titleClassName}`}>{item.title}</p>
                  <p className="text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
