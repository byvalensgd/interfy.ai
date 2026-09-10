import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { voiceEcosystemLinks } from "@/config/voice-page";

export default async function VoiceEcosystem() {
  const { voice } = await getDictionary();
  const { ecosystem } = voice;

  return (
    <section aria-labelledby="voice-ecosystem-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="voice-ecosystem-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {ecosystem.headingPrefix} <span className="text-azul-base">{ecosystem.headingHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <div className="flex w-full flex-wrap items-start gap-5">
            {voiceEcosystemLinks.map((item, i) => (
              <div key={item.product} className="flex min-w-[120px] flex-1 flex-col items-center gap-5">
                <span
                  className={`flex size-[70px] shrink-0 items-center justify-center rounded-full border bg-branco p-4 ${
                    item.highlight
                      ? "border-2 border-[rgba(9,161,234,0.3)] shadow-[0_0_15px_rgba(9,161,234,0.2),0_0_10px_rgba(9,161,234,0.4),0_0_7.5px_rgba(9,161,234,0.6)]"
                      : "border-contorno-base"
                  }`}
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                {item.gradient ? (
                  <p className="w-full bg-[linear-gradient(141deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-center text-lg leading-[1.2] font-extrabold text-transparent">
                    {item.product}
                  </p>
                ) : (
                  <p className={`w-full text-center text-lg leading-[1.2] font-extrabold ${item.colorClass}`}>
                    {item.product}
                  </p>
                )}
                <p className="w-full text-center text-base leading-[1.2] font-medium text-texto-medio">
                  {ecosystem.items[i].description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
