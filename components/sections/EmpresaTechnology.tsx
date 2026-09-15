import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { empresaTechnologyIcons, empresaSaasIcons } from "@/config/empresa-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function EmpresaTechnology() {
  const { empresa } = await getDictionary();
  const { technology } = empresa;
  const { saas } = technology;
  const techItems = empresaTechnologyIcons.map((icon, i) => ({ icon, ...technology.items[i] }));
  const saasItems = empresaSaasIcons.map((icon, i) => ({ icon, ...saas.items[i] }));

  return (
    <section aria-label={technology.heading} className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-stretch gap-5 lg:flex-row">
        <div className="flex min-w-[280px] flex-1 flex-col items-start gap-[25px] rounded-[20px] border border-contorno-base p-5">
          <h2 className="text-2xl leading-[1.2] font-bold text-texto">{technology.heading}</h2>
          <ul aria-label={technology.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {techItems.map((item) => (
              <li
                key={item.title}
                className="flex min-w-[220px] flex-1 flex-col items-start gap-2.5 rounded-2xl border border-contorno-base px-2.5 py-[15px]"
              >
                <div className="flex w-full items-center gap-[15px]">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full p-2"
                    style={{ backgroundImage: "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)" }}
                  >
                    <Image src={item.icon} alt="" aria-hidden="true" width={20} height={20} />
                  </span>
                  <p className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-texto">{item.title}</p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-[280px] flex-1 flex-col items-start gap-[25px] rounded-[20px] border border-contorno-base p-5">
          <h2 className="text-[26px] leading-[1.2] font-bold text-texto">
            {saas.headingPrefix}
            <span className="text-azul-base">{saas.headingHighlight}</span>
          </h2>
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row">
            <ul aria-label={saas.ariaLabel} className="flex flex-1 flex-col items-start gap-5">
              {saasItems.map((item) => (
                <li key={item.title} className="flex w-full flex-col items-start gap-[15px]">
                  <div className="flex w-full items-center gap-[15px]">
                    <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                    <p className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-texto">{item.title}</p>
                  </div>
                  <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="relative aspect-square w-full max-w-[320px] flex-1 overflow-hidden rounded-2xl">
              <Image src="/sobre-nos/saas-handshake.jpg" alt="" aria-hidden="true" fill sizes="320px" className="object-cover" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
