"use client";

import { useEffect, useRef, useState } from "react";

// Recreated (not a photo) as real SVG shapes so it can actually animate — a
// static image can't grow bars or float a badge. Geometry below is copied
// 1:1 from the Figma node (K1DjxWj4LaSQpEI0yifRBp, 5587:25885): the viewBox
// and every x/y/width/height match the design's own pixel values exactly,
// so this renders at the same layout, measurements and relative/absolute
// positions as the source — just scaled down by the container.
const VIEW_W = 1118;
const VIEW_H = 868;

// Left "Total Visitors" card (white, rounded top corners only).
const CARD = { x: 101, y: 0, w: 372, h: 629 };
const CARD_TITLE = { x: 158, y: 45 };
const CARD_TITLE_BAR = { x: 158, y: 69, w: 163, h: 14 };

// Donut chart standing in for the design's own placeholder circle — same
// purple family used by the bars/badge/dot elsewhere in this illustration
// (never an arbitrary palette), with a white gap between slices and a
// percentage label on each, darkest slice first shading out to the palest.
// Sized to fill its parent content area edge to edge: the circle's own
// wrapper (Figma's "Frame 409") is 258px wide, so the outer radius is half
// that (129) — up from the original 101 — with the ring's inner radius
// scaled by the same factor so the (already 30%-thickened) ring proportion
// holds.
const PIE = { cx: 287, cy: 285.5, rOuter: 129, rInner: 52.62 };
const PIE_SLICES = [
  { pct: 30, color: "#6f47d5" },
  { pct: 25, color: "#845cec" },
  { pct: 20, color: "#a57cf7" },
  { pct: 15, color: "#a487f6" },
  { pct: 10, color: "#cabafb" },
]; // 30+25+20+15+10 = 100
function polar(cx: number, cy: number, r: number, angle: number): [number, number] {
  return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
}
function donutSlicePath(cx: number, cy: number, rOuter: number, rInner: number, startAngle: number, endAngle: number) {
  const [x1, y1] = polar(cx, cy, rOuter, startAngle);
  const [x2, y2] = polar(cx, cy, rOuter, endAngle);
  const [x3, y3] = polar(cx, cy, rInner, endAngle);
  const [x4, y4] = polar(cx, cy, rInner, startAngle);
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M${x1} ${y1} A${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2} L${x3} ${y3} A${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4} Z`;
}
const PIE_TOTAL = PIE_SLICES.reduce((sum, s) => sum + s.pct, 0);
const PIE_PATHS = PIE_SLICES.reduce<{ cursor: number; slices: { d: string; color: string; labelX: number; labelY: number; pct: number }[] }>(
  (acc, slice) => {
    const start = acc.cursor;
    const end = start + (slice.pct / PIE_TOTAL) * Math.PI * 2;
    const mid = (start + end) / 2;
    const [labelX, labelY] = polar(PIE.cx, PIE.cy, (PIE.rOuter + PIE.rInner) / 2, mid);
    acc.slices.push({ d: donutSlicePath(PIE.cx, PIE.cy, PIE.rOuter, PIE.rInner, start, end), color: slice.color, labelX, labelY, pct: slice.pct });
    acc.cursor = end;
    return acc;
  },
  { cursor: -Math.PI / 2, slices: [] }
).slices;
const ROW_VISITORS_TEXT = { x: 190, y: 488 };
const ROW_VISITORS_BAR = { x: 316, y: 488, w: 100, h: 14 };
const ROW_GROWTH_TEXT = { x: 190, y: 529 };
const ROW_GROWTH_BAR = { x: 312, y: 529, w: 104, h: 14 };
const ROW_PLAIN_BAR = { x: 190, y: 570, w: 226, h: 14 };

// Right panel (3 lavender bands) behind the bar-chart card. The panel as a
// whole is one 50px-rounded-corner shape (Figma clips its 3 bands to that
// silhouette) — a plain per-band <rect> would leave every corner square.
const PANEL = { x: 100, y: 43, w: 1018, h: 717 };
const STRIP_TOP = { x: 100, y: 43, w: 1018, h: 55, color: "#e5e3f9" };
const STRIP_MID = { x: 100, y: 98, w: 1018, h: 532, color: "#f1f0fc" };
const STRIP_BOTTOM = { x: 100, y: 630, w: 1018, h: 130, color: "#e8e6f9" };
const DOT = { cx: 609, cy: 695, r: 24 };

const CHART_CARD = { x: 510, y: 136, w: 551, h: 429 };
const CHART_LINES = [
  { x: 549, y: 175, w: 354, h: 14 },
  { x: 549, y: 216, w: 207, h: 14 },
  { x: 549, y: 257, w: 166, h: 14 },
];

// The 4 bars sit in a "justify-between" row (Figma's own auto-layout on
// this node): fixed width each, evenly spaced to fill the container edge
// to edge, bottom-aligned ("items-end") — computed here instead of as
// hardcoded x positions, which is both what auto-spacing means and what
// had thrown bar 3 out of alignment (a stale hand-copied value).
const BAR_ROW = { x: 549, y: 197, w: 473, h: 329 };
const BAR_W = 79;
const BAR_HEIGHTS = [
  { h: 113, color: "#845cec" },
  { h: 189, color: "#cabafb" },
  { h: 231, color: "#a57cf7" },
  { h: 329, color: "#a487f6" },
];
const BAR_GAP = (BAR_ROW.w - BAR_HEIGHTS.length * BAR_W) / (BAR_HEIGHTS.length - 1);
const BARS = BAR_HEIGHTS.map((bar, i) => ({
  x: BAR_ROW.x + i * (BAR_W + BAR_GAP),
  y: BAR_ROW.y + BAR_ROW.h - bar.h,
  w: BAR_W,
  h: bar.h,
  color: bar.color,
}));

// Growth-arrow badge (bottom-left, overlapping the card and panel).
const BADGE = { x: 0, y: 600, w: 268, h: 268 };

// One-shot entrance: every shape pops in from nothing (small -> full size),
// staggered "outside in" — the panel/card/badge containers first, then the
// bars, donut, dot and text that live inside them. Every delay/duration
// below is written at its original pace (the badge — the last thing to
// arrive — finishes at 1.35s) and then scaled up so the whole sequence
// takes a fixed 3s: stretch the total without hand-adjusting every step.
const ENTRANCE_TOTAL_S = 3;
const ENTRANCE_ORIGINAL_TOTAL_S = 1.35; // badge delay (0.75s) + its own duration (0.6s)
const TIME_SCALE = ENTRANCE_TOTAL_S / ENTRANCE_ORIGINAL_TOTAL_S;

// Before the illustration has scrolled into view, every shape sits frozen at
// the animation's own "from" state (opacity 0, scale 0) instead of playing —
// starting the `animation` only once `started` flips true is what makes the
// pop-in fire when the block scrolls into view rather than the instant this
// (otherwise off-screen, already-mounted) SVG hits the DOM on page load.
function popIn(started: boolean, delaySeconds: number, durationSeconds = 0.5) {
  return started
    ? {
        transformBox: "fill-box" as const,
        animation: `trust-illu-pop-in ${durationSeconds * TIME_SCALE}s ease-out ${delaySeconds * TIME_SCALE}s both`,
      }
    : { transformBox: "fill-box" as const, opacity: 0, scale: 0 };
}

export default function SegmentsTrustIllustration({ ariaLabel }: { ariaLabel: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="size-full overflow-visible"
      style={{ overflow: "visible" }}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id="trust-illu-card-bg" gradientTransform="rotate(73.53 0.5 0.5)">
          <stop offset="7.44%" stopColor="#f8f9fb" />
          <stop offset="100%" stopColor="#f9f9fb" />
        </linearGradient>
        {/* objectBoundingBox (the SVG default) keeps this gradient's vector
            relative to the badge rect's own box — 0..1 on each axis — so it
            always tracks that rect's actual position and size. The earlier
            userSpaceOnUse version hardcoded the vector to the badge's
            original 0..268 local coordinates, which broke the moment the
            badge was translated into place: the gradient rendered outside
            the shape entirely, so the badge showed as one flat color
            instead of the diagonal blue-to-purple blend. */}
        <linearGradient id="trust-illu-badge-fill" x1="0.3209" y1="0.4142" x2="1" y2="1">
          <stop stopColor="#4d6bf2" />
          <stop offset="1" stopColor="#8735df" />
        </linearGradient>
        <linearGradient id="trust-illu-badge-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7495e2" />
          <stop offset="1" stopColor="#8735df" />
        </linearGradient>
        <filter id="trust-illu-badge-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="2" floodOpacity="0.25" />
        </filter>
        <clipPath id="trust-illu-panel-clip">
          <rect x={PANEL.x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx="50" />
        </clipPath>
      </defs>

      {/* Right panel: 3 lavender bands, the bar-chart card, and the small dot,
          all clipped to the panel's own single rounded silhouette. Outer
          bands/cards pop in first, the content living inside them after. */}
      <g clipPath="url(#trust-illu-panel-clip)">
        <rect x={STRIP_TOP.x} y={STRIP_TOP.y} width={STRIP_TOP.w} height={STRIP_TOP.h} fill={STRIP_TOP.color} style={popIn(started, 0)} />
        <rect x={STRIP_MID.x} y={STRIP_MID.y} width={STRIP_MID.w} height={STRIP_MID.h} fill={STRIP_MID.color} style={popIn(started, 0.05)} />
        <rect x={STRIP_BOTTOM.x} y={STRIP_BOTTOM.y} width={STRIP_BOTTOM.w} height={STRIP_BOTTOM.h} fill={STRIP_BOTTOM.color} style={popIn(started, 0.1)} />
        <circle cx={DOT.cx} cy={DOT.cy} r={DOT.r} fill="#6f47d5" style={popIn(started, 0.3)} />

        <rect
          x={CHART_CARD.x}
          y={CHART_CARD.y}
          width={CHART_CARD.w}
          height={CHART_CARD.h}
          rx="25"
          fill="white"
          stroke="white"
          strokeWidth="3"
          style={{ filter: "drop-shadow(0px 5px 11px rgba(0,0,0,0.1))", ...popIn(started, 0.15) }}
        />
        {CHART_LINES.map((line, i) => (
          <rect key={line.y} x={line.x} y={line.y} width={line.w} height={line.h} rx="7" fill="#e4e4f9" style={popIn(started, 0.3 + i * 0.05)} />
        ))}
        {BARS.map((bar, i) => (
          <rect key={bar.x} x={bar.x} y={bar.y} width={bar.w} height={bar.h} rx="12" fill={bar.color} style={popIn(started, 0.35 + i * 0.05)} />
        ))}
      </g>

      {/* Left card: title, pie chart, and 3 stat rows. Only the top corners
          are rounded (per the design), so this is a path rather than a
          plain rounded <rect>. */}
      <path
        d={`M${CARD.x + 35} ${CARD.y} H${CARD.x + CARD.w - 35} A35 35 0 0 1 ${CARD.x + CARD.w} ${CARD.y + 35} V${CARD.y + CARD.h} H${CARD.x} V${CARD.y + 35} A35 35 0 0 1 ${CARD.x + 35} ${CARD.y} Z`}
        fill="url(#trust-illu-card-bg)"
        style={popIn(started, 0)}
      />
      <text
        x={CARD_TITLE.x}
        y={CARD_TITLE.y}
        dominantBaseline="hanging"
        className="fill-black text-[20px] font-medium"
        style={popIn(started, 0.35)}
      >
        Total Visitors
      </text>
      <rect x={CARD_TITLE_BAR.x} y={CARD_TITLE_BAR.y} width={CARD_TITLE_BAR.w} height={CARD_TITLE_BAR.h} rx="7" fill="#e4e4f9" style={popIn(started, 0.35)} />

      {PIE_PATHS.map((slice, i) => (
        <path
          key={slice.color}
          d={slice.d}
          fill={slice.color}
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
          style={popIn(started, 0.4 + i * 0.05)}
        />
      ))}
      {PIE_PATHS.map((slice) => (
        <text
          key={slice.color}
          x={slice.labelX}
          y={slice.labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-[16.8px] font-bold"
          style={popIn(started, 0.65)}
        >
          {slice.pct}%
        </text>
      ))}

      <text x={ROW_VISITORS_TEXT.x} y={ROW_VISITORS_TEXT.y} dominantBaseline="hanging" className="fill-black text-[20px] font-medium" style={popIn(started, 0.4)}>
        Total Visitors
      </text>
      <rect x={ROW_VISITORS_BAR.x} y={ROW_VISITORS_BAR.y} width={ROW_VISITORS_BAR.w} height={ROW_VISITORS_BAR.h} rx="7" fill="#e4e4f9" style={popIn(started, 0.4)} />
      <text x={ROW_GROWTH_TEXT.x} y={ROW_GROWTH_TEXT.y} dominantBaseline="hanging" className="fill-black text-[20px] font-medium" style={popIn(started, 0.45)}>
        Growth Rate
      </text>
      <rect x={ROW_GROWTH_BAR.x} y={ROW_GROWTH_BAR.y} width={ROW_GROWTH_BAR.w} height={ROW_GROWTH_BAR.h} rx="7" fill="#e4e4f9" style={popIn(started, 0.45)} />
      <rect x={ROW_PLAIN_BAR.x} y={ROW_PLAIN_BAR.y} width={ROW_PLAIN_BAR.w} height={ROW_PLAIN_BAR.h} rx="7" fill="#e4e4f9" style={popIn(started, 0.5)} />

      {/* Growth-arrow badge: the last piece to arrive, well after everything
          else has settled — it pops in already mid-rotation and overshoots
          to 45deg before swinging back to 0, a little "jump" rather than a
          plain fade/grow. */}
      <g
        style={
          started
            ? {
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `trust-illu-badge-pop ${0.6 * TIME_SCALE}s ease-out ${0.75 * TIME_SCALE}s both`,
              }
            : { transformBox: "fill-box", transformOrigin: "center", opacity: 0, scale: 0 }
        }
      >
        <rect
          x={BADGE.x + 1.5}
          y={BADGE.y + 1.5}
          width={BADGE.w - 3}
          height={BADGE.h - 3}
          rx="33.5"
          fill="url(#trust-illu-badge-fill)"
          stroke="url(#trust-illu-badge-stroke)"
          strokeWidth="3"
        />
        <path
          d="M213.091 675.0995C213.77 674.8771 214.517 675.0333 215.049 675.5097C215.581 675.9862 215.819 676.711 215.672 677.41L209.753 705.664C209.607 706.363 209.099 706.931 208.42 707.154C207.742 707.377 206.995 707.22 206.462 706.744L198.627 699.7313L140.762 764.173C139.359 765.735 136.987 765.946 135.329 764.657L106.672 742.368L59.1692 791.772C57.6381 793.365 55.1054 793.415 53.513 791.884C51.9206 790.353 51.8707 787.82 53.4017 786.227L103.402 734.227C104.821 732.752 107.126 732.586 108.742 733.843L137.298 756.054L192.665 694.3944L184.952 687.4911C184.42 687.0145 184.183 686.29 184.329 685.5907C184.476 684.8916 184.984 684.3233 185.662 684.1005L213.091 675.0995Z"
          fill="white"
          filter="url(#trust-illu-badge-shadow)"
        />
      </g>
    </svg>
  );
}
