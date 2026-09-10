import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { statusServiceIcons } from "@/config/status-page";

type ServiceStatus = { name: string };

export default function StatusList({
  ariaLabel,
  heading,
  operationalLabel,
  services,
  incidentsHeading,
  incidentsEmpty,
}: {
  ariaLabel: string;
  heading: string;
  operationalLabel: string;
  services: ServiceStatus[];
  incidentsHeading: string;
  incidentsEmpty: string;
}) {
  const items = statusServiceIcons.map((icon, i) => ({ icon, ...services[i] }));

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[900px] flex-col items-center gap-10">
        <Reveal className="flex w-full flex-col gap-3">
          <h2 className="text-lg leading-[1.2] font-bold text-texto">{heading}</h2>
          <ul className="flex flex-col overflow-hidden rounded-2xl border border-contorno-base bg-branco">
            {items.map((service) => (
              <li
                key={service.name}
                className="flex items-center gap-3 border-b border-contorno-base p-4 last:border-b-0"
              >
                <Image src={service.icon} alt="" aria-hidden="true" width={22} height={22} className="shrink-0" />
                <span className="flex-1 text-sm font-bold leading-[1.2] text-texto">{service.name}</span>
                <span className="flex items-center gap-2 text-sm font-bold leading-[1.2] text-[#1a9b5c]">
                  <span className="size-2 shrink-0 rounded-full bg-[#1a9b5c]" aria-hidden="true" />
                  {operationalLabel}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={100} className="flex w-full flex-col gap-3">
          <h2 className="text-lg leading-[1.2] font-bold text-texto">{incidentsHeading}</h2>
          <p className="rounded-2xl border border-contorno-base bg-bg-base p-5 text-sm font-medium leading-[1.4] text-texto-medio">
            {incidentsEmpty}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
