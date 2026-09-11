import Image from "next/image";
import { Fragment } from "react";
import type { CSSProperties } from "react";
import { CenterHex } from "@/components/ui/SegmentsRadialDiagram";

const COUNT = 8;

// Same ring/spoke treatment as SegmentsRadialDiagram (components/ui/SegmentsRadialDiagram.tsx),
// just with 8 fixed items instead of 12 rotating ones — no offset/cycling needed here.
const RINGS = [
  { r: 18, opacity: 0.8 },
  { r: 29, opacity: 0.6 },
  { r: 40, opacity: 0.4 },
  { r: 48, opacity: 0.2 },
];
const DOT_RINGS = [18, 29];
const CARD_RADIUS = 40;

const HEX_POP_DURATION = 0.6;
const LINE_DELAY = HEX_POP_DURATION;
const LINE_DURATION = 2.2;
const CARD_DELAY_BASE = LINE_DELAY + LINE_DURATION;
const CARD_DURATION = 0.7;
const CARD_STAGGER = 0.03;

function ringDelay(r: number) {
  return LINE_DELAY + LINE_DURATION * Math.min(r / CARD_RADIUS, 1);
}

export type RadialDiagramItem = {
  icon: string;
  label: string;
  /** Defaults to 26x26 — pass the asset's real aspect ratio for non-square logos. */
  iconWidth?: number;
  iconHeight?: number;
  /** Set to false when the icon asset already contains the name (e.g. a wordmark logo). Defaults to true. */
  showLabel?: boolean;
};

export default function SegurancaRadialDiagram({
  items,
  ariaLabel,
}: {
  items: RadialDiagramItem[];
  ariaLabel: string;
}) {
  return (
    <>
      {/* Below lg there isn't enough width for 8 cards to orbit a center
          without crowding, so the same items flow as a simple grid instead
          of being hidden outright. */}
      <ul aria-label={ariaLabel} className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
        {items.map((item) => {
          const showLabel = item.showLabel ?? true;
          return (
            <li
              key={item.label}
              className="flex h-[88px] flex-col items-center justify-center gap-2 rounded-xl border border-contorno-base bg-branco px-2.5 text-center shadow-[0_4px_14px_-6px_rgba(0,0,0,0.2)]"
            >
              <Image
                src={item.icon}
                alt={showLabel ? "" : item.label}
                aria-hidden={showLabel}
                width={item.iconWidth ?? 26}
                height={item.iconHeight ?? 26}
                className="shrink-0"
              />
              {showLabel && <span className="w-full text-xs leading-[1.2] font-semibold text-texto">{item.label}</span>}
            </li>
          );
        })}
      </ul>

      <div aria-label={ariaLabel} className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
        {RINGS.map(({ r, opacity }) => (
          <div
            key={r}
            className="absolute rounded-full border border-dashed border-azul-base"
            style={
              {
                inset: `${50 - r}%`,
                "--tgt-opacity": opacity,
                animation: `radial-fade-in-ring 0.5s ease-out ${ringDelay(r)}s both`,
              } as CSSProperties
            }
          />
        ))}

        {items.map((item, i) => {
          const angle = (360 / COUNT) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          const x = 50 + CARD_RADIUS * cos;
          const y = 50 + CARD_RADIUS * sin;
          const showLabel = item.showLabel ?? true;
          return (
            <Fragment key={item.label}>
              <div
                className="absolute top-1/2 left-1/2 h-px bg-contorno-base"
                style={{
                  width: `${CARD_RADIUS}%`,
                  transformOrigin: "left center",
                  rotate: `${angle}deg`,
                  animation: `radial-grow-x ${LINE_DURATION}s ease-out ${LINE_DELAY}s both`,
                }}
              />
              {DOT_RINGS.map((r) => (
                <div
                  key={r}
                  className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-base"
                  style={{
                    left: `${50 + r * cos}%`,
                    top: `${50 + r * sin}%`,
                    animation: `radial-fade-in 0.4s ease-out ${ringDelay(r)}s both`,
                  }}
                />
              ))}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animation: `radial-pop-in ${CARD_DURATION}s ease-out ${CARD_DELAY_BASE + i * CARD_STAGGER}s both`,
                }}
              >
                <div className="flex h-[88px] w-[110px] flex-col items-center justify-center gap-2 rounded-xl border border-contorno-base bg-branco px-2.5 text-center shadow-[0_4px_14px_-6px_rgba(0,0,0,0.2)]">
                  <Image
                    src={item.icon}
                    alt={showLabel ? "" : item.label}
                    aria-hidden={showLabel}
                    width={item.iconWidth ?? 26}
                    height={item.iconHeight ?? 26}
                    className="shrink-0"
                  />
                  {showLabel && (
                    <span className="flex w-full min-h-[2lh] items-center justify-center text-xs leading-[1.2] font-semibold text-texto">
                      {item.label}
                    </span>
                  )}
                </div>
              </div>
            </Fragment>
          );
        })}

        <CenterHex animate className="absolute top-1/2 left-1/2 w-[25.2%] -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
}
