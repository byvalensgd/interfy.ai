import Image from "next/image";

export type StatItem = {
  icon: string;
  label: string;
  sublabel?: string;
};

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
  dense = false,
}: {
  stats: StatItem[];
  label: string;
  size?: "sm" | "lg";
  dense?: boolean;
}) {
  const { number, sublabel } = sizeClasses[size];

  // Fixed grid columns (instead of flex-wrap) so every row's items start at
  // the same x position, regardless of how many land in the last row —
  // flex-wrap+flex-1 can pack a full row of 6 followed by a lone last item,
  // which a fixed column count never does (the last row is short by at most
  // one item). packedCount picks the largest column count (2-4) that still
  // divides `n` without leaving a lone item, reused at every tier below.
  const n = stats.length;
  const packedCount = n % 4 === 0 || n % 4 === 3 ? 4 : n % 3 === 0 || n % 3 === 2 ? 3 : 2;
  const cardCols = Math.min(packedCount, n);
  const cardColsByCount = [
    "",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-2 sm:grid-cols-3",
    "grid-cols-2 md:grid-cols-4",
  ];
  const cardGridCols = cardColsByCount[cardCols];
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
          desktop's single shared strip with icon+number rows. */}
      <ul aria-label={label} className={`grid w-full gap-4 lg:hidden ${cardGridCols}`}>
        {stats.map((stat) => (
          <li
            key={stat.icon}
            className="flex flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center"
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
    </>
  );
}
