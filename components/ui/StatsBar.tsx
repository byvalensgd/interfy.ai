import Image from "next/image";
import type { HeroStat } from "@/config/hero";

const sizeClasses = {
  sm: { number: "text-base", sublabel: "text-sm" },
  lg: {
    number: "text-[clamp(1.25rem,0.4167vw+1.1667rem,1.5rem)]",
    sublabel: "text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)]",
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

  return (
    <ul
      aria-label={label}
      className="grid w-full grid-cols-1 items-center justify-items-center gap-x-6 gap-y-6 rounded-[12px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8"
    >
      {stats.map((stat) => (
        <li key={stat.icon} className="flex items-center gap-2.5">
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
