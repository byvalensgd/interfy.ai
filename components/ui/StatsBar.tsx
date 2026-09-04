import Image from "next/image";
import type { HeroStat } from "@/config/hero";

const sizeClasses = {
  sm: { number: "text-base", sublabel: "text-sm" },
  lg: {
    number: "text-[clamp(1.1875rem,0.1042vw+1.1667rem,1.25rem)]",
    sublabel: "text-lg",
  },
} as const;

export default function StatsBar({
  stats,
  label,
  size = "sm",
}: {
  stats: HeroStat[];
  label: string;
  size?: "sm" | "lg";
}) {
  const { number, sublabel } = sizeClasses[size];

  // Fixed grid columns (instead of flex-wrap) so every row's items start at
  // the same x position, regardless of how many land in the last row.
  // Two tiers: sm packs 4 per row, xl widens out to fit every stat in a
  // single row (up to 8) once there's room, per the site's "stay wide as
  // long as possible" breakpoint rule.
  const n = stats.length;
  const smCols =
    n % 4 === 0 || n % 4 === 3 ? "sm:grid-cols-4" : n % 3 === 0 || n % 3 === 2 ? "sm:grid-cols-3" : "sm:grid-cols-2";
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
    <ul
      aria-label={label}
      className={`grid w-full grid-cols-1 gap-x-10 gap-y-5 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] ${smCols} ${xlCols}`}
    >
      {stats.map((stat) => (
        <li key={stat.icon} className="flex min-w-0 items-center gap-2.5">
          <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <div className="flex min-w-0 flex-col items-start gap-2">
            {stat.label.map((line) => (
              <p key={line} className={`leading-[1.2] font-bold text-texto-doc-ok lg:whitespace-nowrap ${number}`}>
                {line}
              </p>
            ))}
            {stat.sublabel && (
              <p className={`leading-[1.2] font-medium text-texto lg:whitespace-nowrap ${sublabel}`}>
                {stat.sublabel}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
