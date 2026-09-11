import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  segurancaArchitectureFlowIcons,
  segurancaArchitectureServiceIcons,
} from "@/config/seguranca-page";

const cardBackground = "linear-gradient(130deg, #ffffff 4.55%, #eff7ff 90.43%, #c8e0ff 126.82%)";

export default async function SegurancaArchitecture() {
  const { seguranca } = await getDictionary();
  const { architecture } = seguranca;
  const flow = segurancaArchitectureFlowIcons.map((icon, i) => ({ icon, ...architecture.flow[i] }));
  const services = segurancaArchitectureServiceIcons.map((icon, i) => ({ icon, ...architecture.services[i] }));

  return (
    <section aria-labelledby="seguranca-architecture-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <Reveal
        className="flex w-full max-w-[1400px] flex-col items-center gap-10 rounded-[20px] border border-contorno-base px-5 py-[30px] sm:px-10"
        style={{ backgroundImage: cardBackground }}
      >
        <h2 id="seguranca-architecture-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {architecture.headlinePrefix}
          <span className="text-azul-base">{architecture.headlineHighlight}</span>
          {architecture.headlineSuffix}
        </h2>

        <div className="flex w-full flex-col gap-5 xl:flex-row xl:items-stretch">
          <ul className="flex flex-1 flex-col items-center gap-5 min-[420px]:flex-row">
            {flow.map((item, i) => (
              <li key={item.icon} className="flex flex-1 items-center gap-5 min-[420px]:flex-col">
                <div className="flex w-full flex-1 flex-col items-center gap-5 rounded-xl border border-contorno-base bg-branco px-2.5 py-[15px] text-center">
                  <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} />
                  <p className="text-sm leading-[1.2] font-bold text-texto-doc-ok">{item.label}</p>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight
                    className="size-[18px] shrink-0 rotate-90 text-texto-medio min-[420px]:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-[1.6] flex-col gap-[15px] rounded-xl border border-contorno-base bg-branco px-2.5 py-[15px]">
            <p className="text-center text-base leading-[1.2] font-bold text-azul-base">{architecture.multiAzTitle}</p>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="flex min-w-[60px] shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                <span className="text-sm leading-[1.2] font-bold whitespace-nowrap text-texto-doc-ok">{architecture.az1.label}</span>
              </span>
              <div className="flex min-w-[190px] flex-1 flex-wrap items-center justify-center gap-5 rounded-xl border border-contorno-base px-3 py-2.5">
                <Image src="/icons/seguranca/db-green.svg" alt="" aria-hidden="true" width={30} height={30} />
                <p className="min-w-[155px] flex-1 text-center text-sm leading-[1.2] font-bold text-texto-doc-ok">{architecture.az1.title}</p>
                <Image src="/icons/seguranca/db-green2.svg" alt="" aria-hidden="true" width={30} height={30} />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="flex min-w-[60px] shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                <span className="text-sm leading-[1.2] font-bold whitespace-nowrap text-texto-doc-ok">{architecture.az2.label}</span>
              </span>
              <div className="flex min-w-[190px] flex-1 flex-wrap items-center justify-center gap-5 rounded-xl border border-contorno-base px-3 py-2.5">
                <Image src="/icons/seguranca/db-purple.svg" alt="" aria-hidden="true" width={30} height={30} />
                <div className="flex min-w-[155px] flex-1 flex-col items-center gap-1 text-center">
                  <p className="text-sm leading-[1.2] font-bold text-texto-doc-ok">{architecture.az2.title}</p>
                  <p className="text-xs leading-[1.2] font-medium text-texto-doc-ok">{architecture.az2.subtitle}</p>
                </div>
                <Image src="/icons/seguranca/db-purple2.svg" alt="" aria-hidden="true" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid w-full grid-cols-1 gap-5 rounded-xl border border-contorno-base bg-branco px-2.5 py-[15px] sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <li key={service.icon} className="flex items-center gap-2.5">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                <Image src={service.icon} alt="" aria-hidden="true" width={30} height={30} />
              </span>
              <p className="min-w-0 flex-1 text-sm leading-[1.2] font-bold text-texto-doc-ok">{service.label}</p>
            </li>
          ))}
        </ul>

        <ul aria-label={architecture.featuresAriaLabel} className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {architecture.features.map((feature: string) => (
            <li
              key={feature}
              className="flex items-center gap-2 rounded-full border border-contorno-base bg-branco py-1.5 pl-2 pr-3"
            >
              <Image src="/icons/features/check-blue.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
              <p className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{feature}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
