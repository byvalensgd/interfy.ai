import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { empresaTechnologyIcons, empresaSaasIcons } from "@/config/empresa-page";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function EmpresaTechnology() {
  const { empresa } = await getDictionary();
  const { technology } = empresa;
  const { saas } = technology;
  const techItems = empresaTechnologyIcons.map((icon, i) => ({ icon, ...technology.items[i] }));
  const saasItems = empresaSaasIcons.map((icon, i) => ({ icon, ...saas.items[i] }));
  const saasItemsBasis = getCompleteBoxBasis(saasItems.length);

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
          <div className="flex w-full flex-col items-start gap-5 sm:flex-row">
            {/* Below sm: each benefit becomes its own bordered card ("Blocos Mobile"),
                same treatment as StatsBar.tsx's mobile card list — this is the point
                where the list + image can no longer both hold their 220px minimum
                side by side. From sm up, keep the plain desktop list beside the image.
                "Complete Box" (see lib/completeBox.ts) keeps every row balanced within
                1 item of the next and stretches a short last row instead of leaving a gap. */}
            <ul aria-label={saas.ariaLabel} className="flex w-full flex-wrap gap-4 sm:hidden">
              {saasItems.map((item) => (
                <li
                  key={item.title}
                  className={`flex min-w-[220px] grow flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${saasItemsBasis}`}
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <div className="flex w-full flex-col items-center gap-2">
                    <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto">
                      {item.title}
                    </p>
                    <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <ul aria-label={saas.ariaLabel} className="hidden min-w-[220px] flex-1 flex-col items-start gap-5 sm:flex">
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
            <div className="relative aspect-[4/3] w-full min-w-[220px] flex-1 self-stretch overflow-hidden rounded-2xl sm:aspect-auto">
              <Image src="/sobre-nos/saas-handshake.webp" alt="" aria-hidden="true" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
