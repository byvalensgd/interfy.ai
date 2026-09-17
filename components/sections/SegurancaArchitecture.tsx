import Image from "next/image";
import { Fragment } from "react";
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

        <div className="flex w-full flex-col lg:flex-row lg:items-stretch">
          <div className="flex flex-1 flex-col items-center md:flex-row md:items-stretch">
            {flow.map((item, i) => (
              <Fragment key={item.icon}>
                {i > 0 && (
                  <>
                    {/* Below md the flow stacks vertically: the arrow itself (not a
                        wrapper) carries the rotated footprint — asymmetric margins
                        shrink its reserved width and grow its reserved height to
                        match what rotate-90 actually paints (7x30 instead of the
                        unrotated 30x7 layout box), so it stays fully visible between
                        the two cards with no extra space around it. */}
                    <Image
                      src="/icons/seguranca/arrow-connector.svg"
                      alt=""
                      aria-hidden="true"
                      width={30}
                      height={7}
                      className="my-[11.5px] h-auto w-[30px] shrink-0 -mx-[11.5px] rotate-90 self-center md:hidden"
                    />
                    <Image
                      src="/icons/seguranca/arrow-connector.svg"
                      alt=""
                      aria-hidden="true"
                      width={30}
                      height={7}
                      className="hidden h-auto max-w-[30px] flex-1 self-center md:block"
                    />
                  </>
                )}
                <div className="flex w-full flex-1 flex-col items-center justify-center gap-5 rounded-xl border border-contorno-base bg-branco px-2.5 py-[15px] text-center">
                  <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} />
                  <p className="text-sm leading-[1.2] font-bold text-texto-doc-ok">{item.label}</p>
                </div>
              </Fragment>
            ))}
          </div>

          {/* Below lg the flow stacks vertically, so the connector rotates
              90° and centers under Load Balancer (the last card) instead of
              sitting mid-height beside it — same relationship as the lg+
              horizontal connector below, just turned on its side. */}
          <div className="flex items-center lg:hidden">
            <div className="flex-1" aria-hidden="true" />
            <div className="w-[30px] shrink-0" aria-hidden="true" />
            <div className="flex-1" aria-hidden="true" />
            <div className="w-[30px] shrink-0" aria-hidden="true" />
            <div className="flex flex-1 items-center justify-center">
              <div className="flex h-[30px] w-[54px] items-center justify-center">
                <Image
                  src="/icons/seguranca/branch-connector.svg"
                  alt=""
                  aria-hidden="true"
                  width={30}
                  height={54}
                  className="rotate-90 shrink-0"
                />
              </div>
            </div>
          </div>

          <div className="hidden shrink-0 items-center justify-center lg:flex">
            <Image
              src="/icons/seguranca/branch-connector.svg"
              alt=""
              aria-hidden="true"
              width={30}
              height={54}
              className="shrink-0"
            />
          </div>

          <div className="flex flex-1 flex-col gap-[15px] rounded-xl border border-contorno-base bg-branco px-2.5 py-[15px]">
            <p className="text-center text-base leading-[1.2] font-bold text-azul-base">{architecture.multiAzTitle}</p>

            <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
              <div className="flex min-w-[190px] flex-1 flex-col flex-wrap items-center justify-center gap-2.5 min-[480px]:flex-row min-[480px]:items-stretch">
                <span className="flex shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                  <span className="text-sm leading-[1.2] font-bold whitespace-nowrap text-texto-doc-ok">{architecture.az1.label}</span>
                </span>
                <div className="flex w-full min-w-[190px] flex-1 flex-row items-center justify-center gap-5 rounded-xl border border-contorno-base px-3 py-2.5">
                  <Image src="/icons/seguranca/db-green.svg" alt="" aria-hidden="true" width={30} height={30} />
                  <p className="flex min-h-[35px] flex-1 items-center justify-center text-center text-sm leading-[1.2] font-bold text-texto-doc-ok">{architecture.az1.title}</p>
                  <Image src="/icons/seguranca/db-green2.svg" alt="" aria-hidden="true" width={30} height={30} />
                </div>
              </div>

              <div className="flex min-w-[190px] flex-1 flex-col flex-wrap items-center justify-center gap-2.5 min-[480px]:flex-row min-[480px]:items-stretch">
                <span className="flex shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                  <span className="text-sm leading-[1.2] font-bold whitespace-nowrap text-texto-doc-ok">{architecture.az2.label}</span>
                </span>
                <div className="flex w-full min-w-[190px] flex-1 flex-row items-center justify-center gap-5 rounded-xl border border-contorno-base px-3 py-2.5">
                  <Image src="/icons/seguranca/db-purple.svg" alt="" aria-hidden="true" width={30} height={30} />
                  <div className="flex min-h-[35px] flex-1 flex-col items-center justify-center gap-1 text-center">
                    <p className="w-full text-sm leading-[1.2] font-bold text-texto-doc-ok">{architecture.az2.title}</p>
                    <p className="w-full text-xs leading-[1.2] font-medium text-texto-doc-ok">{architecture.az2.subtitle}</p>
                  </div>
                  <Image src="/icons/seguranca/db-purple2.svg" alt="" aria-hidden="true" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below lg: no shared bordered box — each service becomes its own
            bordered card, per the site's standing icon+text mobile
            treatment (see StatsBar.tsx). Split into two grids (3 then 2)
            instead of one grid-cols-3 — a single grid would strand the 5th
            item under an empty 3rd column; a dedicated 2-up row fills the
            full width instead. */}
        <div className="flex w-full flex-col gap-4 lg:hidden">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <li
                key={service.icon}
                className="flex flex-col items-center gap-2.5 rounded-xl border border-contorno-base bg-branco p-5 text-center"
              >
                <span className="flex size-[50px] shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                  <Image src={service.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <p className="text-sm leading-[1.2] font-bold text-texto-doc-ok">{service.label}</p>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.slice(3).map((service) => (
              <li
                key={service.icon}
                className="flex flex-col items-center gap-2.5 rounded-xl border border-contorno-base bg-branco p-5 text-center"
              >
                <span className="flex size-[50px] shrink-0 items-center justify-center rounded-md bg-bg-base p-3">
                  <Image src={service.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <p className="text-sm leading-[1.2] font-bold text-texto-doc-ok">{service.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden w-full grid-cols-5 gap-5 rounded-xl border border-contorno-base bg-branco px-2.5 py-[15px] lg:grid">
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
