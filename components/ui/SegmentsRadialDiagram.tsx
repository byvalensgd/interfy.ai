"use client";

import Image from "next/image";
import { Fragment, useEffect, useId, useState, type CSSProperties } from "react";
import { segmentCatalog } from "@/config/segments";

const COUNT = 12;

// Concentric rings expanding from the center hexagon out to the layout's own
// edges. The cards sit one ring in from the outermost one; only the two
// inner rings carry a dot marker on each spoke. Opacity grows from the
// innermost ring (20% transparent) to the outermost (80% transparent).
const RINGS = [
  { r: 18, opacity: 0.8 },
  { r: 29, opacity: 0.6 },
  { r: 40, opacity: 0.4 },
  { r: 48, opacity: 0.2 },
];
const DOT_RINGS = [18, 29];
const CARD_RADIUS = 40; // % of container width/height (container is aspect-square, so this is a true circle)

// Entrance choreography, in seconds: the hex pops in first, then the 12
// spoke lines grow from the center outward; each ring (and the dots on it)
// fades in exactly when the growing line's tip reaches that radius, and the
// cards pop in once the lines finish — landing at ~4s total.
const HEX_POP_DURATION = 0.6;
const LINE_DELAY = HEX_POP_DURATION;
const LINE_DURATION = 2.2;
const CARD_DELAY_BASE = LINE_DELAY + LINE_DURATION; // 2.8
const CARD_DURATION = 0.7;
const CARD_STAGGER = 0.03;
const ENTRANCE_TOTAL_MS = (CARD_DELAY_BASE + (COUNT - 1) * CARD_STAGGER + CARD_DURATION) * 1000;

function ringDelay(r: number) {
  return LINE_DELAY + LINE_DURATION * Math.min(r / CARD_RADIUS, 1);
}

// Once the entrance finishes, the cards keep cycling through every segment
// (not just the first 12 shown initially). The window shifts by a full
// COUNT each time — not by 1 — so a swap reveals the segments that haven't
// shown yet, filling out the remaining slots by wrapping back to the start
// of the catalog, instead of nudging every card by one position.
const CYCLE_INTERVAL_MS = 8000;

// Exact center-hexagon artwork from the Figma "Frame 102" node (5289-21466):
// an outer gradient hexagon acting as a soft border ring, a white inner
// hexagon with its own gradient stroke, and the Interfy icon centered
// within — all already proportioned and centered in one 220x244.718 frame.
const HEX_VIEWBOX_W = 220;
const HEX_VIEWBOX_H = 244.718;
const HEX_OUTER_PATH =
  "M0.0262785 76.1986C0.0288453 65.4845 5.74509 55.585 15.0231 50.2269L95.0314 4.02107C104.313 -1.33907 115.749 -1.34044 125.032 4.01746L204.993 50.1705C214.279 55.5303 219.998 65.4384 219.996 76.1602L219.974 168.519C219.971 179.233 214.255 189.133 204.977 194.491L124.969 240.697C115.687 246.057 104.251 246.058 94.9685 240.7L15.0072 194.547C5.72125 189.188 0.00158261 179.279 0.00415132 168.558L0.0262785 76.1986Z";
const HEX_INNER_PATH =
  "M8.02392 81.4241C8.02649 70.7087 13.7441 60.8082 23.0239 55.4505L94.7891 14.0168C104.069 8.65912 115.502 8.65775 124.783 14.0132L196.503 55.3981C205.791 60.7574 211.512 70.6666 211.51 81.3897L211.49 164.194C211.487 174.909 205.77 184.81 196.49 190.167L124.725 231.601C115.445 236.959 104.012 236.96 94.7308 231.605L23.0103 190.22C13.7225 184.86 8.00151 174.951 8.00408 164.228L8.02392 81.4241Z";
const HEX_ICON_BOX = { x: 43, y: 55, size: 134 };

function CenterHex({ className, animate = false }: { className?: string; animate?: boolean }) {
  // Two instances of this component render at once (the vertical layout and
  // the radial one, toggled by breakpoint) — hardcoded gradient ids would
  // collide in the DOM and leave url(#id) resolving unpredictably, which is
  // exactly what was making the outer gradient hex disappear.
  const uid = useId();
  const outerGradId = `radial-hex-outer-${uid}`;
  const strokeGradId = `radial-hex-stroke-${uid}`;
  return (
    <div
      className={className}
      style={{
        aspectRatio: `${HEX_VIEWBOX_W} / ${HEX_VIEWBOX_H}`,
        animation: animate ? `radial-pop-in ${HEX_POP_DURATION}s ease-out both` : undefined,
      }}
    >
      <svg
        viewBox={`0 0 ${HEX_VIEWBOX_W} ${HEX_VIEWBOX_H}`}
        className="absolute inset-0 size-full"
        style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.15))" }}
      >
        <defs>
          <linearGradient id={outerGradId} x1="169" y1="29.3589" x2="54.9998" y2="217.359" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAEEFF" style={{ animation: "radial-hex-glow-a 6s ease-in-out infinite" }} />
            <stop offset="0.519231" stopColor="white" />
            <stop offset="1" stopColor="#D9EDFF" style={{ animation: "radial-hex-glow-b 6s ease-in-out infinite 3s" }} />
          </linearGradient>
          <linearGradient id={strokeGradId} x1="-38.275" y1="-53.126" x2="218.627" y2="-39.4763" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D5DFFF" />
            <stop offset="1" stopColor="#F2CAFF" />
          </linearGradient>
        </defs>
        <path d={HEX_OUTER_PATH} fill={`url(#${outerGradId})`} />
        <path d={HEX_INNER_PATH} fill="white" stroke={`url(#${strokeGradId})`} strokeOpacity={0.6} strokeWidth={2.5} />
      </svg>
      <Image
        src="/decor/interfy-icon.svg"
        alt="Interfy"
        width={134}
        height={134}
        className="absolute"
        style={{
          left: `${(HEX_ICON_BOX.x / HEX_VIEWBOX_W) * 100}%`,
          top: `${(HEX_ICON_BOX.y / HEX_VIEWBOX_H) * 100}%`,
          width: `${(HEX_ICON_BOX.size / HEX_VIEWBOX_W) * 100}%`,
          height: `${(HEX_ICON_BOX.size / HEX_VIEWBOX_H) * 100}%`,
        }}
      />
    </div>
  );
}

export default function SegmentsRadialDiagram({ titles }: { titles: string[] }) {
  const [offset, setOffset] = useState(0);
  // Separate from `offset`: counts how many swaps have happened, purely to
  // key the card content so it remounts (and replays the entrance's own
  // pop-in animation) on every swap — and to skip that animation on the
  // very first render, which already gets it from the entrance sequence.
  const [swapCount, setSwapCount] = useState(0);
  const items = segmentCatalog.map((item, i) => ({ ...item, title: titles[i] }));
  const ITEMS = items.slice(0, 12);
  const total = items.length;

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setOffset((o) => (o + COUNT) % total);
        setSwapCount((c) => c + 1);
      }, CYCLE_INTERVAL_MS);
    }, ENTRANCE_TOTAL_MS);
    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [total]);

  return (
    <>
      {/* Below lg there isn't enough width for 12 cards to orbit a center
          without crowding, so the same items flow as a simple vertical
          grid instead of being hidden outright. */}
      <div className="flex w-full flex-col items-center gap-8 lg:hidden">
        <CenterHex className="relative w-[140px] shrink-0" />
        <ul className="grid w-full max-w-[520px] grid-cols-2 gap-4 sm:grid-cols-3">
          {ITEMS.map((segment) => (
            <li
              key={segment.title}
              className="flex flex-col items-center gap-2 rounded-xl border border-contorno-base bg-branco px-2.5 py-3 text-center shadow-[0_4px_14px_-6px_rgba(0,0,0,0.2)]"
            >
              <Image src={segment.icon} alt="" aria-hidden="true" width={26} height={26} className="shrink-0" />
              <span className="w-full text-xs leading-[1.2] font-bold text-texto">{segment.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
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

        {ITEMS.map((_, i) => {
          const segment = items[(i + offset) % total];
          const angle = (360 / COUNT) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          const x = 50 + CARD_RADIUS * cos;
          const y = 50 + CARD_RADIUS * sin;
          return (
            <Fragment key={i}>
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
                <div
                  key={swapCount}
                  className="flex w-[100px] flex-col items-center gap-2 rounded-xl border border-contorno-base bg-branco px-2.5 py-3 text-center shadow-[0_4px_14px_-6px_rgba(0,0,0,0.2)]"
                  style={
                    swapCount > 0
                      ? { animation: `radial-pop-in ${CARD_DURATION}s ease-out ${i * CARD_STAGGER}s both` }
                      : undefined
                  }
                >
                  <Image src={segment.icon} alt="" aria-hidden="true" width={26} height={26} className="shrink-0" />
                  <span className="flex w-full min-h-[2lh] items-center justify-center text-xs leading-[1.2] font-bold text-texto">
                    {segment.title}
                  </span>
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
