import Image from "next/image";
import { ecosystemItems } from "@/config/platform";

// Design basis: 840px-wide Figma frame. Every geometric value below is expressed
// as cqw (% of that basis) so the whole diagram scales as one unit and the ring
// can never collide with a badge, no matter how narrow its column gets.
function EcosystemBadge({
  icon,
  title,
  description,
  align = "start",
}: {
  icon: string;
  title: string;
  description: string;
  align?: "start" | "end";
}) {
  return (
    <div
      className={`flex max-w-[38.095cqw] min-w-[28.571cqw] items-center gap-[2.381cqw] ${
        align === "end" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="flex size-[5.952cqw] shrink-0 items-center justify-center rounded-full border-[0.5px] border-contorno-base bg-branco p-[1.429cqw]">
        <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="h-full w-full" />
      </span>
      <div className={`flex min-w-0 flex-col gap-[1.19cqw] ${align === "end" ? "items-end" : "items-start"}`}>
        <p className="text-base leading-[1.2] font-bold text-texto">{title}</p>
        <p className="text-sm leading-[1.2] font-medium text-texto-medio">{description}</p>
      </div>
    </div>
  );
}

export default function EcosystemDiagram() {
  const [documents, automation, voice, capture, agents, sign, connect, mobile] =
    ecosystemItems;

  return (
    <div className="w-full">
      {/* Desktop (xl+): radial ecosystem diagram, fluidly scaled via container query
          units so its proportions (and the ring's clearance from every badge) stay
          identical at any column width — nothing to break. */}
      <div className="hidden w-full xl:block">
        <div className="mx-auto w-full max-w-[840px]" style={{ containerType: "inline-size" }}>
          <div className="relative isolate flex flex-col items-center justify-center gap-[4.762cqw]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
              {/* Back to front, matching Figma: faint rays -> white disc -> dotted ring */}
              <div className="absolute left-1/2 top-1/2 z-[1] h-[28.571cqw] w-[34.524cqw] -translate-x-1/2 -translate-y-1/2">
                <Image src="/decor/ecosystem-ring-inner.svg" alt="" aria-hidden="true" fill sizes="300px" />
              </div>
              <div className="absolute left-1/2 top-1/2 z-[2] flex size-[23.81cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-branco shadow-[0_0_5px_var(--color-shadow)]">
                <Image
                  src="/decor/interfy-icon.svg"
                  alt="Interfy"
                  width={100}
                  height={100}
                  className="h-[11.905cqw] w-[11.905cqw]"
                />
              </div>
              <div className="relative z-[3] h-[29.286cqw] w-[35.238cqw] rotate-180 scale-y-[-1]">
                <Image src="/decor/ecosystem-ring-outer.svg" alt="" aria-hidden="true" fill sizes="300px" />
              </div>
            </div>

            <div className="relative z-[6]">
              <EcosystemBadge {...documents} />
            </div>
            <div className="relative z-[5] flex w-full items-center justify-center gap-[35.714cqw] px-[2.5cqw]">
              <EcosystemBadge {...automation} align="end" />
              <EcosystemBadge {...voice} />
            </div>
            <div className="relative z-[4] flex w-full items-center justify-center gap-[42.857cqw]">
              <EcosystemBadge {...capture} align="end" />
              <EcosystemBadge {...agents} />
            </div>
            <div className="relative z-[3] flex w-full items-center justify-center gap-[35.714cqw] px-[2.5cqw]">
              <EcosystemBadge {...sign} align="end" />
              <EcosystemBadge {...connect} />
            </div>
            <div className="relative z-[2]">
              <EcosystemBadge {...mobile} />
            </div>
          </div>
        </div>
      </div>

      {/* Below xl: simple, adaptive grid */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:hidden">
        {ecosystemItems.map((item) => (
          <li key={item.title} className="flex items-start gap-4">
            <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-contorno-base bg-branco p-3">
              <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} />
            </span>
            <div className="flex flex-col gap-1.5">
              <p className="text-base font-bold leading-[1.2] text-texto">{item.title}</p>
              <p className="text-sm font-medium leading-[1.2] text-texto-medio">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
