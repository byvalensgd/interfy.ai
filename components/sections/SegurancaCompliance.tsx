import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { segurancaComplianceIcons } from "@/config/seguranca-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function SegurancaCompliance() {
  const { seguranca } = await getDictionary();
  const { compliance } = seguranca;
  const items = segurancaComplianceIcons.map((icon, i) => ({ icon, ...compliance.items[i] }));

  return (
    <section aria-labelledby="seguranca-compliance-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="seguranca-compliance-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {compliance.headline} <span className="text-azul-base">{compliance.headlineHighlight}</span>
        </h2>

        <Reveal className="w-full">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li
                key={item.icon + item.title}
                className="relative flex flex-col items-center gap-[25px] rounded-[20px] border border-contorno-base px-5 py-[30px] text-center"
              >
                {item.badge && (
                  <span className="-translate-x-1/2 absolute left-1/2 top-[-13px] rounded-full bg-azul-base px-3 py-1.5 text-base leading-[1.2] font-bold whitespace-nowrap text-branco">
                    {item.badge}
                  </span>
                )}
                <Image src={item.icon} alt="" aria-hidden="true" width={70} height={70} />
                <p className="text-xl leading-[1.2] font-bold text-azul-base">{item.title}</p>
                <p className="text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
