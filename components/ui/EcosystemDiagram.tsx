import Image from "next/image";
import { ecosystemItems } from "@/config/platform";

// Design basis: the Figma frame is 840x410 (node 5041:19718). Every geometric
// value below is expressed as cqw (% of that basis) so the whole diagram is
// one immutable object — shrinking the container shrinks everything (icons,
// gaps, text, ring) by the exact same proportion, positions included. There
// is no breakpoint swap to a different layout: this is the diagram at every
// container width, down to mobile.
// The icon always sits closest to the central circle: on the right for the left
// column, on the left for the right column, below the text for the top badge,
// and above the text for the bottom badge (Figma node 5041:19718).
type BadgeOrientation = "icon-text" | "text-icon" | "top" | "bottom";

function EcosystemBadge({
  icon,
  title,
  descriptionLines,
  orientation = "icon-text",
}: {
  icon: string;
  title: string;
  descriptionLines: [string, string];
  orientation?: BadgeOrientation;
}) {
  const iconEl = (
    <span className="flex size-[5.952cqw] shrink-0 items-center justify-center rounded-full border-[0.5px] border-contorno-base bg-branco p-[1.429cqw]">
      <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="h-full w-full" />
    </span>
  );

  const textEl = (
    <div
      className={`flex min-w-0 flex-col gap-[1.19cqw] whitespace-nowrap ${
        orientation === "text-icon"
          ? "items-end text-right"
          : orientation === "top" || orientation === "bottom"
            ? "items-center text-center"
            : "items-start text-left"
      }`}
    >
      <p className="text-[1.905cqw] leading-[1.2] font-bold text-texto">{title}</p>
      <p className="text-[1.667cqw] leading-[1.2] font-medium text-texto-medio">
        {descriptionLines[0]}
        <br />
        {descriptionLines[1]}
      </p>
    </div>
  );

  if (orientation === "top" || orientation === "bottom") {
    return (
      <div className="flex max-w-[38.095cqw] min-w-[28.571cqw] flex-col items-center gap-[2.381cqw] rounded-[2.381cqw]">
        {orientation === "top" ? (
          <>
            {textEl}
            {iconEl}
          </>
        ) : (
          <>
            {iconEl}
            {textEl}
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex max-w-[38.095cqw] min-w-[28.571cqw] items-center gap-[2.381cqw] rounded-[2.381cqw] ${
        orientation === "text-icon" ? "justify-end" : ""
      }`}
    >
      {orientation === "text-icon" ? (
        <>
          {textEl}
          {iconEl}
        </>
      ) : (
        <>
          {iconEl}
          {textEl}
        </>
      )}
    </div>
  );
}

export default function EcosystemDiagram({
  className = "mx-auto w-full max-w-[840px]",
}: {
  className?: string;
}) {
  const [documents, automation, voice, capture, agents, sign, connect, mobile] =
    ecosystemItems;

  return (
    <div className={className} style={{ containerType: "inline-size" }}>
      <div className="relative isolate flex w-full flex-col items-center justify-center gap-[4.762cqw]">
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
          <EcosystemBadge {...documents} orientation="top" />
        </div>
        <div className="relative z-[5] flex w-full items-center justify-center gap-[35.714cqw] px-[2.5cqw]">
          <EcosystemBadge {...automation} orientation="text-icon" />
          <EcosystemBadge {...voice} />
        </div>
        <div className="relative z-[4] flex w-full items-center justify-center gap-[42.857cqw]">
          <EcosystemBadge {...capture} orientation="text-icon" />
          <EcosystemBadge {...agents} />
        </div>
        <div className="relative z-[3] flex w-full items-center justify-center gap-[35.714cqw] px-[2.5cqw]">
          <EcosystemBadge {...sign} orientation="text-icon" />
          <EcosystemBadge {...connect} />
        </div>
        <div className="relative z-[2]">
          <EcosystemBadge {...mobile} orientation="bottom" />
        </div>
      </div>
    </div>
  );
}
