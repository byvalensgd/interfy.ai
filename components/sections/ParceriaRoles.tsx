import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import { parceriaRolesPartnerIcon, parceriaRolesInterfyIcon } from "@/config/parceria-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const topFadeMask = "linear-gradient(to bottom, transparent 0%, black 30px)";

export default async function ParceriaRoles() {
  const { parceria } = await getDictionary();
  const { partner, interfy } = parceria.roles;

  return (
    <section aria-label={`${partner.title} / ${interfy.title}`} className="flex justify-center bg-branco px-5 py-5">
      <div className="grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal className="min-h-[210px]">
          <div className="flex h-full flex-col items-stretch gap-5 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#001d6b] to-[#000928] sm:flex-row">
            <div className="flex min-w-[240px] flex-1 flex-col items-start justify-center gap-5 py-[30px] pl-5">
              <h2 className="text-2xl leading-[1.2] font-bold text-branco">{partner.title}</h2>
              <ul aria-label={partner.checklistAriaLabel} className="grid w-full grid-cols-2 gap-x-4 gap-y-2.5 sm:flex sm:flex-col sm:items-start">
                {partner.checklist.map((item: { label: string }) => (
                  <li key={item.label} className="flex items-center gap-2.5">
                    <Image src={parceriaRolesPartnerIcon} alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                    <p className="text-sm leading-[1.2] font-medium text-branco">{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex aspect-[5/3] w-full items-center justify-end sm:aspect-auto sm:min-w-0 sm:flex-1">
              <AutoplayVideo
                src="/parceria/voce-desenvolve-negocio"
                className="size-full object-cover mix-blend-screen sm:-ml-5"
                style={{ maskImage: topFadeMask, WebkitMaskImage: topFadeMask }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="min-h-[210px]">
          <div
            className="flex h-full flex-col items-stretch gap-5 overflow-hidden rounded-[20px] border border-contorno-base sm:flex-row"
            style={{ backgroundImage: "linear-gradient(137deg, #ffffff 4.55%, #efefff 90.43%, #c8c8ff 126.82%)" }}
          >
            <div className="flex min-w-[240px] flex-1 flex-col items-start justify-center gap-5 py-[30px] pl-5">
              <h2 className="text-2xl leading-[1.2] font-bold text-texto">{interfy.title}</h2>
              <ul aria-label={interfy.checklistAriaLabel} className="grid w-full grid-cols-2 gap-x-4 gap-y-2.5 sm:flex sm:flex-col sm:items-start">
                {interfy.checklist.map((item: { label: string }) => (
                  <li key={item.label} className="flex items-center gap-2.5">
                    <Image src={parceriaRolesInterfyIcon} alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                    <p className="text-sm leading-[1.2] font-medium text-texto">{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex aspect-[5/3] w-full items-center justify-end sm:aspect-auto sm:min-w-0 sm:flex-1">
              <AutoplayVideo
                src="/parceria/interfy-cuida-operacao-shield"
                loopImmediately
                className="size-full object-cover mix-blend-multiply"
                style={{ maskImage: topFadeMask, WebkitMaskImage: topFadeMask }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
