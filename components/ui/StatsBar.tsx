import Image from "next/image";
import type { HeroStat } from "@/config/hero";

const sizeClasses = {
  sm: { number: "text-base", sublabel: "text-sm" },
  lg: { number: "text-2xl", sublabel: "text-lg" },
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
      className="grid w-full grid-cols-2 items-center gap-x-6 gap-y-6 rounded-[20px] border border-contorno-base bg-branco px-5 py-[30px] sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-around lg:gap-y-4"
    >
      {stats.map((stat) => (
        <li key={stat.icon} className="flex items-center gap-2.5">
          <Image src={stat.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
          <div className="flex min-w-0 flex-col items-start gap-2">
            {stat.label.map((line) => (
              <p
                key={line}
                className={`leading-[1.2] font-bold text-texto-doc-ok lg:whitespace-nowrap ${number}`}
              >
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
