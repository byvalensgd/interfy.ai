// Recreated (not a photo) as real SVG shapes so it can actually animate — a
// static image can't grow bars or spin a donut chart. Matches the reference
// mockup closely: a "Total Visitors" donut-chart card floating in front of
// a monitor showing a growing bar chart, plus a growth-arrow badge.
const VIEW_W = 254;
const VIEW_H = 211;

// Monitor screen
const SCREEN = { x: 104, y: 6, w: 132, h: 133 };
const BARS = [
  { x: 163, w: 13, h: 29, color: "#6d28d9" },
  { x: 182, w: 13, h: 43, color: "#c4b5fd" },
  { x: 201, w: 13, h: 53, color: "#8b5cf6" },
  { x: 220, w: 13, h: 69, color: "#a78bfa" },
];
const BAR_BASE_Y = SCREEN.y + SCREEN.h - 5;

// Donut chart ("Total Visitors" card)
const DONUT_SLICES = [
  { pct: 30, color: "#5b21b6" },
  { pct: 30, color: "#3b82f6" },
  { pct: 20, color: "#7c3aed" },
  { pct: 15, color: "#a78bfa" },
  { pct: 10, color: "#ddd6fe" },
];
const DONUT_CX = 63.5;
const DONUT_CY = 43;
const DONUT_R_OUTER = 31;
const DONUT_R_INNER = 18;
const DONUT_TOTAL = DONUT_SLICES.reduce((sum, s) => sum + s.pct, 0);

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

// Computed once at module scope — the slice list is static, so there's no
// reason to recompute the arc math (or label positions) on every render.
const DONUT_PATHS = DONUT_SLICES.reduce<
  { cursor: number; slices: (typeof DONUT_SLICES)[number] extends infer S ? (S & { d: string; labelX: number; labelY: number })[] : never }
>(
  (acc, slice) => {
    const start = acc.cursor;
    const end = start + (slice.pct / DONUT_TOTAL) * Math.PI * 2;
    const mid = (start + end) / 2;
    const [labelX, labelY] = polar(DONUT_CX, DONUT_CY, (DONUT_R_OUTER + DONUT_R_INNER) / 2, mid);
    acc.slices.push({ ...slice, d: donutSlicePath(DONUT_CX, DONUT_CY, DONUT_R_OUTER, DONUT_R_INNER, start, end), labelX, labelY });
    acc.cursor = end;
    return acc;
  },
  { cursor: -Math.PI / 2, slices: [] }
).slices;

export default function SegmentsTrustIllustration() {
  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="size-full" role="img" aria-label="Painel com gráficos representando dados de diferentes empresas">
      <defs>
        <linearGradient id="trust-illu-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#184aee" />
          <stop offset="100%" stopColor="#bf18f6" />
        </linearGradient>
      </defs>

      {/* Monitor behind the card: screen + growing bar chart */}
      <rect x={SCREEN.x} y={SCREEN.y} width={SCREEN.w} height={SCREEN.h} rx="10" fill="white" stroke="#e6e6e6" />
      <rect x={SCREEN.x + 14} y={SCREEN.y + 16} width="70" height="4" rx="2" fill="#eef0fb" />
      <rect x={SCREEN.x + 14} y={SCREEN.y + 28} width="55" height="4" rx="2" fill="#eef0fb" />
      <rect x={SCREEN.x + 14} y={SCREEN.y + 40} width="42" height="4" rx="2" fill="#eef0fb" />
      {BARS.map((bar, i) => (
        <rect
          key={bar.x}
          x={bar.x}
          width={bar.w}
          y={BAR_BASE_Y - bar.h}
          height={bar.h}
          rx="4"
          fill={bar.color}
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
            animation: `trust-illu-grow 3.2s ease-in-out ${i * 0.25}s infinite`,
          }}
        />
      ))}
      {/* stand */}
      <path d="M158 139 L188 139 L182 153 L164 153 Z" fill="#ece9fb" />
      <rect x="150" y="153" width="46" height="5" rx="2.5" fill="#ece9fb" />
      <circle cx="173" cy="144" r="3.5" fill="#7a3ff2" />

      {/* Floating "Total Visitors" donut-chart card */}
      <rect x="23" y="0" width="81" height="131" rx="12" fill="white" stroke="#e6e6e6" />
      <text x="35" y="12" className="fill-texto-doc-ok text-[7px] font-bold">
        Total Visitors
      </text>
      <rect x="35" y="17" width="30" height="3" rx="1.5" fill="#dfe3fb" />

      <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "trust-illu-spin 26s linear infinite" }}>
        {DONUT_PATHS.map((slice, i) => (
          <path key={i} d={slice.d} fill={slice.color} />
        ))}
      </g>
      {/* Percent labels counter-rotate against the donut's own spin so the
          text itself always stays upright and readable. */}
      <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "trust-illu-spin-reverse 26s linear infinite" }}>
        {DONUT_PATHS.map((slice, i) => (
          <text
            key={i}
            x={slice.labelX}
            y={slice.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-branco text-[6.5px] font-bold"
          >
            {slice.pct}%
          </text>
        ))}
      </g>

      <text x="35" y="100" className="fill-texto-medio text-[6px] font-medium">
        Total Visitors
      </text>
      <rect x="66" y="96.5" width="20" height="4" rx="2" fill="#dfe3fb" />
      <text x="35" y="112" className="fill-texto-medio text-[6px] font-medium">
        Growth Rate
      </text>
      <rect x="72" y="108.5" width="14" height="4" rx="2" fill="#dfe3fb" />
      <rect x="35" y="120" width="53" height="3" rx="1.5" fill="#eef0fb" />

      {/* Growth-arrow badge */}
      <g style={{ animation: "hex-badge-float 3s ease-in-out infinite" }}>
        <rect x="0" y="134" width="60" height="60" rx="14" fill="url(#trust-illu-badge)" />
        <path
          d="M12 176 L24 162 L32 170 L47 152"
          fill="none"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M36 152 L47 152 L47 162" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
