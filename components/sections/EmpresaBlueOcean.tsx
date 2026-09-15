import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import { empresaBlueOceanIcons } from "@/config/empresa-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function EmpresaBlueOcean() {
  const { empresa } = await getDictionary();
  const { blueOcean } = empresa;
  const items = empresaBlueOceanIcons.map((icon, i) => ({ icon, ...blueOcean.items[i] }));

  return (
    <section aria-labelledby="empresa-blueocean-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10 lg:flex-row">
        <div className="flex min-w-[280px] flex-1 flex-col items-start gap-10">
          <h2 id="empresa-blueocean-heading" className="text-2xl leading-[1.2] font-bold text-azul-base">
            {blueOcean.heading}
          </h2>
          <p className="text-lg leading-[1.2] font-semibold text-texto">
            {blueOcean.descriptionPrefix}
            <span className="font-extrabold text-azul-base">{blueOcean.descriptionHighlight}</span>
            {blueOcean.descriptionSuffix}
          </p>

          <ul aria-label={blueOcean.ariaLabel} className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.title} className="flex min-w-[220px] flex-1 flex-col items-start gap-2.5">
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

        <div className="aspect-[4/3] w-full min-w-[280px] flex-1 overflow-hidden rounded-[30px] bg-gradient-to-b from-[#fafbff] to-[#e8f1f8]">
          <AutoplayVideo src="/empresa/blue-ocean.mp4" className="size-full object-cover" />
        </div>
      </Reveal>
    </section>
  );
}
