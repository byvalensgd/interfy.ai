import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { voiceCapabilities } from "@/config/voice-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function VoiceCapabilities() {
  const { voice } = await getDictionary();
  const { capabilities } = voice;

  return (
    <section aria-labelledby="voice-capabilities-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="voice-capabilities-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {capabilities.headingPrefix} <span className="text-azul-base">{capabilities.headingBrand}</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {voiceCapabilities.map((item, i) => (
              <li
                key={item.icon}
                className="flex flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5"
              >
                <div className="flex w-full items-center gap-[15px]">
                  <Image src={item.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">
                    {capabilities.items[i].title}
                  </p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">
                  {capabilities.items[i].description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
