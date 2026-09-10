import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { dssFeatures } from "@/config/dss-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function DssFeatures() {
  const { sign } = await getDictionary();
  const features = sign.features;

  return (
    <section
      aria-labelledby="dss-features-heading"
      className="flex justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="dss-features-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {features.headingPrefix}
          <span className="text-azul-base">{features.headingHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {dssFeatures.map((item, index) => (
              <li
                key={item.icon}
                className="flex flex-col items-start gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5"
              >
                <div className="flex w-full items-center gap-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">{features.cards[index].title}</p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{features.cards[index].description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
