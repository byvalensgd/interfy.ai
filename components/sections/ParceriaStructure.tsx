import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { parceriaStructureIcons } from "@/config/parceria-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function ParceriaStructure() {
  const { parceria } = await getDictionary();
  const { structure } = parceria;
  const items = parceriaStructureIcons.map((icon, i) => ({ icon, ...structure.items[i] }));

  return (
    <section aria-labelledby="parceria-structure-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="parceria-structure-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {structure.headingPrefix}
          <span className="text-azul-base">{structure.headingHighlight}</span>
        </h2>

        <ul aria-label={structure.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
