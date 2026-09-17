import Image from "next/image";
import { getCompleteBoxBasis } from "@/lib/completeBox";

export type StatItem = {
  icon: string;
  label: string;
  sublabel?: string;
  /** Desktop-row sizing per Figma auto-layout: true (default) fills its equal share of the
   *  row, false hugs its own content width instead (e.g. a longer last item that shouldn't
   *  be squeezed to 1/3). Set on any stat to switch the lg+ row from the balanced grid to a
   *  flex row honoring this per-item fill/hug split — see node 5389:25960. */
  fill?: boolean;
};

const sizeClasses = {
  sm: { number: "text-base", sublabel: "text-sm" },
  lg: {
    number: "text-[clamp(1.1875rem,0.1042vw+1.1667rem,1.25rem)]",
    sublabel: "text-base",
  },
} as const;

export default function StatsBar({
  stats,
  label,
  size = "sm",
  dense = false,
}: {
  stats: StatItem[];
  label: string;
  size?: "sm" | "lg";
  dense?: boolean;
}) {
  const { number, sublabel } = sizeClasses[size];
  const hasHugItem = stats.some((stat) => stat.fill === false);

  const n = stats.length;
  // "Complete Box" — see lib/completeBox.ts for the full rationale.
  const cardBasis = getCompleteBoxBasis(n);
  const packedCount = n % 4 === 0 || n % 4 === 3 ? 4 : n % 3 === 0 || n % 3 === 2 ? 3 : 2;
  const cardCols = Math.min(packedCount, n);
  const lgColsByCount = ["", "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"];
  const lgCols = lgColsByCount[cardCols];
  const xlColsByCount = [
    "",
    "xl:grid-cols-1",
    "xl:grid-cols-2",
    "xl:grid-cols-3",
    "xl:grid-cols-4",
    "xl:grid-cols-5",
    "xl:grid-cols-6",
    "xl:grid-cols-7",
    "xl:grid-cols-8",
  ];
  const xlCols = xlColsByCount[Math.min(n, 8)];

  return (
    <>
      {/* Below lg: each stat becomes its own bordered card (icon over
          number, centered), per the Figma mobile spec — instead of the
          desktop's single shared strip with icon+number rows. See the
          "Complete Box" note above `n` for why this is flex-wrap, not grid. */}
      <ul aria-label={label} className="flex w-full flex-wrap gap-4 lg:hidden">
        {stats.map((stat) => (
          <li
            key={stat.icon}
            className={`flex h-[150px] min-w-[140px] grow flex-col items-center justify-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center ${cardBasis}`}
          >
            <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
            <div className="flex w-full flex-col items-center gap-2">
              <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                {stat.label}
              </p>
              {stat.sublabel && (
                <p className="w-full text-sm leading-[1.2] font-medium text-texto">{stat.sublabel}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Per-item fill/hug (node 5389:25960): a plain flex row instead of the balanced
          grid, since column widths are meant to be uneven (a longer last item hugs its
          own content instead of being squeezed into an equal share). */}
      {hasHugItem ? (
        <ul aria-label={label} className="hidden w-full flex-wrap items-start gap-5 lg:flex">
          {stats.map((stat) => {
            const fill = stat.fill !== false;
            return (
              <li
                key={stat.icon}
                className={`flex min-w-[120px] flex-col items-start gap-2.5 rounded-[14px] ${fill ? "flex-1" : "shrink-0"}`}
              >
                <div className={`flex items-center gap-2 ${fill ? "w-full" : "shrink-0"}`}>
                  <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <p className="leading-[1.2] font-extrabold whitespace-nowrap text-texto text-lg">{stat.label}</p>
                </div>
                {stat.sublabel && (
                  <p
                    className={`leading-[1.2] font-medium text-texto-medio text-sm ${
                      // A hug item's own width is set by its (nowrap) title row; the sublabel must
                      // stretch to match it without dragging that hug width out wider itself, hence
                      // min-content as its intrinsic size (ignored while the parent's shrink-to-fit
                      // width is computed) plus min-w-full to stretch once that width is resolved.
                      fill ? "w-full" : "min-w-full w-min"
                    }`}
                  >
                    {stat.sublabel}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul
          aria-label={label}
          className={`hidden w-full grid-cols-1 rounded-[20px] border border-contorno-base bg-branco lg:grid ${
            dense ? "gap-5 p-5" : "gap-x-10 gap-y-5 px-5 py-[30px]"
          } ${lgCols} ${xlCols}`}
        >
          {stats.map((stat) => (
            <li key={stat.icon} className="flex min-w-0 items-center gap-2.5">
              <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
                <p className={`w-full leading-[1.2] font-bold text-texto-doc-ok ${number}`}>{stat.label}</p>
                {stat.sublabel && (
                  <p className={`w-full leading-[1.2] font-medium text-texto ${sublabel}`}>{stat.sublabel}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
