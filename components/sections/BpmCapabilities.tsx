import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { bpmCapabilityIcons } from "@/config/bpm-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function BpmCapabilities() {
  const { process } = await getDictionary();
  const { capabilities } = process;
  const items = bpmCapabilityIcons.map((icon, i) => ({ icon, ...capabilities.items[i] }));

  return (
    <section
      aria-labelledby="bpm-capabilities-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="bpm-capabilities-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {capabilities.headingPrefix}
          <span className="inline-block bg-[linear-gradient(168deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            {capabilities.headingHighlight}
          </span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <li
                key={item.icon}
                className="flex flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-4 py-5"
              >
                <div className="flex w-full items-center gap-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">{item.title}</p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
