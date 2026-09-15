import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { empresaVisionIcon, empresaMissionIcon, empresaPrincipleIcons } from "@/config/empresa-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const badgeGradient = "linear-gradient(93deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)";

export default async function EmpresaMissionVision() {
  const { empresa } = await getDictionary();
  const { missionVision } = empresa;
  const { vision, mission, principles } = missionVision;
  const principleItems = empresaPrincipleIcons.map((icon, i) => ({ icon, ...principles[i] }));

  return (
    <section aria-label={missionVision.sectionAriaLabel} className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col gap-5 lg:flex-row lg:items-stretch">
        <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            { icon: empresaVisionIcon, ...vision },
            { icon: empresaMissionIcon, ...mission },
          ].map((item) => (
            <div
              key={item.title}
              className="flex min-w-[280px] flex-col items-start gap-5 rounded-[20px] border border-contorno-base p-5"
            >
              <span
                className="flex size-[50px] shrink-0 items-center justify-center rounded-full p-2.5"
                style={{ backgroundImage: badgeGradient }}
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
              </span>
              <p className="text-2xl leading-[1.2] font-bold text-azul-base">{item.title}</p>
              <p className="text-base leading-[1.2] font-medium text-texto">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col items-start gap-[30px] rounded-[20px] border border-contorno-base p-5">
          <h2 className="text-2xl leading-[1.2] font-bold text-azul-base">{missionVision.principlesHeading}</h2>
          <ul
            aria-label={missionVision.principlesAriaLabel}
            className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {principleItems.map((item) => (
              <li key={item.title} className="flex flex-1 flex-col items-start gap-2.5">
                <div className="flex w-full items-center gap-[15px]">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full p-2"
                    style={{ backgroundImage: badgeGradient }}
                  >
                    <Image src={item.icon} alt="" aria-hidden="true" width={20} height={20} />
                  </span>
                  <p className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-texto">{item.title}</p>
                </div>
                <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">
                  {item.descriptionPrefix ? (
                    <>
                      {item.descriptionPrefix}
                      <span className="font-bold text-ecm">{item.descriptionProduct1}</span>
                      {item.descriptionMiddle}
                      <span className="font-bold text-bpm">{item.descriptionProduct2}</span>
                      {item.descriptionSuffix}
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
