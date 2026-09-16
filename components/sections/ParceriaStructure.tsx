import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { parceriaStructureIcons } from "@/config/parceria-page";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function ParceriaStructure() {
  const { parceria } = await getDictionary();
  const { structure } = parceria;
  const items = parceriaStructureIcons.map((icon, i) => ({ icon, ...structure.items[i] }));
  const cardBasis = getCompleteBoxBasis(items.length);

  return (
    <section aria-labelledby="parceria-structure-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="parceria-structure-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {structure.headingPrefix}
          <span className="text-azul-base">{structure.headingHighlight}</span>
        </h2>

        {/* Below lg: "Blocos Mobile" — each item becomes its own bordered
            card via "Complete Box" (see lib/completeBox.ts). */}
        <ul aria-label={structure.ariaLabel} className="flex w-full flex-wrap gap-4 lg:hidden">
          {items.map((item) => (
            <li
              key={item.title}
              className={`flex min-h-[170px] min-w-[160px] grow flex-col items-center justify-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${cardBasis}`}
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
              <div className="flex w-full flex-col items-center gap-2">
                <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                  {item.title}
                </p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul aria-label={structure.ariaLabel} className="hidden w-full lg:grid lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco px-[15px] py-5 text-center"
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={40} height={40} className="shrink-0" />
              <div className="flex w-full flex-col gap-2.5 px-2.5">
                <p className="flex min-h-[35px] w-full items-center justify-center text-lg leading-[1.2] font-extrabold text-texto">
                  {item.title}
                </p>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
