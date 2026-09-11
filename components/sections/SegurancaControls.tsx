import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { segurancaControlsIcons } from "@/config/seguranca-page";

export default async function SegurancaControls() {
  const { seguranca } = await getDictionary();
  const { controls } = seguranca;
  const items = segurancaControlsIcons.map((icon, i) => ({ icon, ...controls.items[i] }));

  return (
    <section aria-labelledby="seguranca-controls-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="seguranca-controls-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {controls.headline} <span className="text-azul-base">{controls.headlineHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <li
                key={item.icon + item.title}
                className="flex flex-col items-center gap-[15px] rounded-[20px] border border-contorno-base px-5 py-[30px] text-center"
              >
                <span
                  className="flex size-[60px] shrink-0 items-center justify-center rounded-full p-3"
                  style={{ backgroundImage: "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)" }}
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <p className="w-full text-xl leading-[1.2] font-bold text-texto">{item.title}</p>
                <p className="w-full text-base leading-[1.2] font-medium text-texto">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
