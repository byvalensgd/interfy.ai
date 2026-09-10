import StatsBar from "@/components/ui/StatsBar";
import EcosystemDiagram from "@/components/ui/EcosystemDiagram";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { platformStatIcons } from "@/config/platform";

export default async function PlatformIntro() {
  const { home } = await getDictionary();
  const { platformIntro } = home;

  const stats = platformStatIcons.map((stat, i) => ({ icon: stat.icon, ...platformIntro.stats[i] }));

  return (
    <section
      aria-labelledby="platform-intro-heading"
      className="flex justify-center px-5 py-10 sm:py-16"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="grid w-full items-center gap-10 min-[1440px]:grid-cols-[520fr_840fr]">
          <Reveal className="flex flex-col items-center gap-10 text-center min-[1440px]:max-w-[640px] min-[1440px]:items-start min-[1440px]:text-left">
            <h2
              id="platform-intro-heading"
              className="text-[clamp(1.75rem,1.25vw+1.5rem,2.5rem)] font-bold leading-[1.2] text-texto"
            >
              {platformIntro.headline}{" "}
              <span className="inline-block bg-[linear-gradient(112.76deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {platformIntro.headlineHighlight}
              </span>
            </h2>
            <p className="text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.2] text-texto">
              {platformIntro.description}{" "}
              <span className="font-bold">{platformIntro.descriptionBold}</span>
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <EcosystemDiagram />
          </Reveal>
        </div>

        <Reveal delayMs={200}>
          <StatsBar stats={stats} label={platformIntro.statsAriaLabel} size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
