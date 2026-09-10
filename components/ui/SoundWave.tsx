/** Deterministic pseudo-random bar heights, bell-shaped across the row (quiet
 * at both ends, loud in the middle) — mirrors the audio-spectrum reference
 * clip's envelope without needing an actual video/canvas. */
function barHeight(i: number, total: number) {
  const t = i / (total - 1);
  const bell = Math.exp(-(((t - 0.5) * 2.5) ** 2));
  const jitter = 0.55 + 0.45 * Math.abs(Math.sin(i * 12.9898));
  return Math.max(0.08, bell * jitter);
}

export default function SoundWave({
  className = "",
  barClassName = "fill-lvs-voice",
  bars = 60,
  id = "default",
}: {
  className?: string;
  barClassName?: string;
  bars?: number;
  /** Unique per instance — scopes the SVG mask/gradient ids so multiple
   * SoundWave components on the same page don't clash. */
  id?: string;
}) {
  const heights = Array.from({ length: bars }, (_, i) => barHeight(i, bars));
  const maskId = `sound-wave-mask-${id}`;
  const gradientId = `sound-wave-sweep-${id}`;

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="size-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          {/* White-on-black mask shaped exactly like the bars, so the sweep
             highlight below only ever lights up bar pixels — never the
             transparent gaps between them. */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="60">
            {heights.map((h, i) => {
              const x = (i + 0.5) * (400 / bars);
              const barH = Math.max(4, h * 56);
              return <rect key={i} x={x - 1.5} y={30 - barH / 2} width={3} height={barH} rx={1.5} fill="white" />;
            })}
          </mask>
        </defs>

        {heights.map((h, i) => {
          const x = (i + 0.5) * (400 / bars);
          const barH = Math.max(4, h * 56);
          return <rect key={i} x={x - 1.5} y={30 - barH / 2} width={3} height={barH} rx={1.5} className={barClassName} />;
        })}

        <rect
          x="-140"
          y="0"
          width="140"
          height="60"
          fill={`url(#${gradientId})`}
          mask={`url(#${maskId})`}
          style={{ mixBlendMode: "overlay" }}
        >
          <animate attributeName="x" from="-140" to="440" dur="2.2s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}
