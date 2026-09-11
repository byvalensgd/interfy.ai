import Reveal from "@/components/ui/Reveal";
import StatsBar, { type StatItem } from "@/components/ui/StatsBar";

const statIcons = [
  "/icons/stats/paises.svg",
  "/icons/stats/idiomas.svg",
  "/icons/stats/disponibilidade.svg",
  "/icons/stats/conformidade.svg",
];

export default function DemoTrust({
  ariaLabel,
  heading,
  subheading,
  statsLabel,
  stats,
}: {
  ariaLabel: string;
  heading: string;
  subheading: string;
  statsLabel: string;
  stats: Omit<StatItem, "icon">[];
}) {
  const items = statIcons.map((icon, i) => ({ icon, ...stats[i] }));

  return (
    <section aria-label={ariaLabel} className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-[clamp(1.5rem,0.8333vw+1.3333rem,2rem)] font-extrabold leading-[1.2] text-texto">
            {heading}
          </h2>
          <p className="max-w-xl text-base leading-[1.4] font-medium text-texto-medio">{subheading}</p>
        </div>
        <Reveal className="max-w-4xl">
          <StatsBar stats={items} label={statsLabel} />
        </Reveal>
      </div>
    </section>
  );
}
