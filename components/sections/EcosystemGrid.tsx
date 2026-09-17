import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ecosystemGridItems } from "@/config/ecosystem-grid";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export default async function EcosystemGrid() {
  const { home } = await getDictionary();
  const { ecosystemGrid } = home;
  const items = ecosystemGridItems.map((item, i) => ({ ...item, ...ecosystemGrid.items[i] }));
  const itemsBasis = getCompleteBoxBasis(items.length);

  return (
    <section
      aria-labelledby="ecosystem-grid-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2
          id="ecosystem-grid-heading"
          className="text-center text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)] leading-[1.2] font-bold text-texto"
        >
          <span className="inline-block bg-[linear-gradient(168.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
            {ecosystemGrid.headline}
          </span>{" "}
          {ecosystemGrid.headlineSuffix}
        </h2>

        {/* Below lg: "Blocos Mobile" — each product becomes its own bordered
            card, balanced via "Complete Box" (see lib/completeBox.ts), icon
            rendered bare (no circle badge). At lg+: the original single-row
            icon strip, unchanged. */}
        <Reveal className="w-full lg:hidden">
          <ul aria-label={ecosystemGrid.headline} className="flex w-full flex-wrap gap-4">
            {items.map((item) => (
              <li
                key={item.product}
                className={`flex grow flex-col items-center gap-5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${itemsBasis}`}
              >
                <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                <div className="flex w-full flex-col items-center gap-2.5 text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[0] font-bold">
                  <p className="w-full leading-[1.2] text-texto">Interfy</p>
                  {item.colorClass === "gradient" ? (
                    <p className="w-full leading-[1.2]">
                      <span className="inline-block bg-[linear-gradient(123.44deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                        {item.product}
                      </span>
                    </p>
                  ) : (
                    <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                  )}
                </div>
                <p className="w-full text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hidden w-full lg:block">
          <div className="flex w-full flex-wrap gap-4 @container">
            {items.map((item) => (
              <div
                key={item.product}
                className={`flex grow flex-col items-center gap-5 text-center ${itemsBasis} @min-[1232px]:basis-[140px]`}
              >
                <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-contorno-base bg-branco p-4">
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
                </span>
                <div className="flex w-full flex-col items-center gap-2.5 text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] leading-[0] font-bold">
                  <p className="w-full leading-[1.2] text-texto">Interfy</p>
                  {item.colorClass === "gradient" ? (
                    <p className="w-full leading-[1.2]">
                      <span className="inline-block bg-[linear-gradient(123.44deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                        {item.product}
                      </span>
                    </p>
                  ) : (
                    <p className={`w-full leading-[1.2] ${item.colorClass}`}>{item.product}</p>
                  )}
                </div>
                <p className="text-base leading-[1.2] font-medium text-texto-medio">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
