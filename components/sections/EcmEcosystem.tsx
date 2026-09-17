import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ecmEcosystemLinks } from "@/config/ecm-page";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function EcmEcosystem() {
  const { documents } = await getDictionary();
  const links = ecmEcosystemLinks.map((item, i) => ({ ...item, ...documents.ecosystem.items[i] }));
  const ecosystemBasis = getCompleteBoxBasis(links.length);

  return (
    <section
      aria-labelledby="ecm-ecosystem-heading"
      className="flex justify-center bg-branco px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="ecm-ecosystem-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          {documents.ecosystem.heading} <span className="text-azul-base">{documents.ecosystem.headingHighlight}</span>
        </h2>

        {/* "Complete Box" (see lib/completeBox.ts) — flex-basis keeps every
            row within 1 item of the next and stretches a short last row
            instead of a CSS Grid leaving it blank. At lg+: a single
            non-wrapping row (lg:flex-nowrap overrides the basis via
            lg:flex-1). */}
        <Reveal className="w-full">
          <div className="flex w-full flex-wrap items-start gap-x-6 gap-y-10 lg:flex-nowrap lg:gap-x-5">
            {links.map((item) => (
              <div
                key={item.product}
                className={`flex min-w-[140px] grow flex-col items-center gap-5 text-center ${ecosystemBasis} lg:flex-1`}
              >
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <div className="flex w-full flex-col items-center gap-2.5 text-lg leading-[1.2] font-extrabold">
                  <p className="w-full leading-[1.2] text-texto">{documents.ecosystem.brandPrefix}</p>
                  {item.colorClass === "gradient" ? (
                    <p className="inline-block w-full bg-[linear-gradient(141.02deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text leading-[1.2] text-transparent">
                      {item.product}
                    </p>
                  ) : (
                    <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                  )}
                </div>
                <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
