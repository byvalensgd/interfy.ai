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

// The whole diagram is one immutable object: every card/icon/text size below is expressed
// as cqw (% of the container's own width, basis = the 760px design width) so shrinking the
// container — down to a mobile viewport — shrinks card, icon and label by the same
// proportion instead of just repositioning them. Same technique as EcosystemDiagram.tsx.
const DIAGRAM_BASIS = 760;
const cqw = (px: number) => `${(px / DIAGRAM_BASIS) * 100}cqw`;

const CARD_W = 120;
const CARD_W_FLOOR = 95;
const CARD_H = 88;
const CARD_GAP = 8;
const CARD_PAD_X = 10;
const CARD_RADIUS_PX = 12;
const ICON_DEFAULT = 26;
const LABEL_FONT = 12;
const DOT_SIZE = 6.4; // 20% smaller than the original 8px

/** Icon, text, gap and padding floor at the proportion established when the
 *  card's own width floor (95px) was set against its original 110px width —
 *  frozen so later width-ceiling changes (e.g. 110 -> 120) don't also shrink
 *  every other floor along with it. */
const FLOOR_SCALE = 95 / 110;
const cqwFloor = (px: number) => `clamp(${px * FLOOR_SCALE}px, ${cqw(px)}, ${px}px)`;
const cardWidth = `clamp(${CARD_W_FLOOR}px, ${cqw(CARD_W)}, ${CARD_W}px)`;

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
    <div
      aria-label={ariaLabel}
      className="relative mx-auto aspect-square w-full max-w-[760px]"
      style={{ containerType: "inline-size" }}
    >
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
        const iconWidth = item.iconWidth ?? ICON_DEFAULT;
        const iconHeight = item.iconHeight ?? ICON_DEFAULT;
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
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-base"
                style={{
                  left: `${50 + r * cos}%`,
                  top: `${50 + r * sin}%`,
                  width: cqw(DOT_SIZE),
                  height: cqw(DOT_SIZE),
                  animation: `radial-fade-in 0.4s ease-out ${ringDelay(r)}s both, radial-dot-pulse 2.6s ease-in-out ${
                    ringDelay(r) + 0.4 + i * 0.12
                  }s infinite`,
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
              <div
                className="flex flex-col items-center justify-center border border-contorno-base bg-branco text-center shadow-[0_4px_14px_-6px_rgba(0,0,0,0.2)]"
                style={{
                  width: cardWidth,
                  height: cqwFloor(CARD_H),
                  gap: cqwFloor(CARD_GAP),
                  paddingLeft: cqwFloor(CARD_PAD_X),
                  paddingRight: cqwFloor(CARD_PAD_X),
                  borderRadius: cqwFloor(CARD_RADIUS_PX),
                }}
              >
                <Image
                  src={item.icon}
                  alt={showLabel ? "" : item.label}
                  aria-hidden={showLabel}
                  width={iconWidth}
                  height={iconHeight}
                  className="shrink-0"
                  style={{ width: cqwFloor(iconWidth), height: cqwFloor(iconHeight) }}
                />
                {showLabel && (
                  <span
                    className="flex w-full min-h-[2lh] items-center justify-center font-semibold text-texto"
                    style={{ fontSize: cqwFloor(LABEL_FONT), lineHeight: 1.2 }}
                  >
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
  );
}
