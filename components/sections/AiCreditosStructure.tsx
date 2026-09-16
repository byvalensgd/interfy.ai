import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aiCreditosStructureIcons } from "@/config/ai-creditos-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function AiCreditosStructure() {
  const { aiCreditos } = await getDictionary();
  const { structure } = aiCreditos;
  const items = aiCreditosStructureIcons.map((icon, i) => ({ icon, ...structure.items[i] }));

  return (
    <section aria-labelledby="ai-creditos-structure-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="ai-creditos-structure-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {structure.headingPrefix}
          <span className="text-azul-base">{structure.headingHighlight}</span>
        </h2>

        <ul aria-label={structure.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex min-w-[200px] flex-1 flex-col items-center gap-5 rounded-[20px] border border-contorno-base px-[15px] py-5 text-center"
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
