import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { mobileCapabilities } from "@/config/mobile-page";

export default async function MobileCapabilities() {
  const { mobile } = await getDictionary();
  const { capabilities } = mobile;

  return (
    <section aria-labelledby="mobile-capabilities-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="mobile-capabilities-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {capabilities.heading} <span className="text-azul-base">{capabilities.headingHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <ul className="flex w-full flex-wrap items-start gap-[15px]">
            {mobileCapabilities.map((item, i) => (
              <li
                key={item.icon}
                className="flex min-w-[280px] flex-1 flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5"
              >
                <div className="flex w-full items-center gap-[15px]">
                  <Image src={item.icon} alt="" aria-hidden="true" width={35} height={35} className="shrink-0" />
                  <p className="flex min-h-[35px] min-w-0 flex-1 flex-col justify-center text-lg leading-[1.2] font-extrabold text-texto">
                    {capabilities.items[i].title}
                  </p>
                </div>
                <p className="min-h-[45px] w-full text-sm leading-[1.2] font-medium text-texto">
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
