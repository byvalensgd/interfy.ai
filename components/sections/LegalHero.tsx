import Reveal from "@/components/ui/Reveal";

type LegalHeroContent = {
  eyebrow: string;
  title: string;
  updatedLabel: string;
};

/** Banner for the long-form legal pages (Termos, Privacidade, LGPD) — pattern
 * adapted from acquafy-site's legal page banners (badge + split-color heading
 * + last-updated pill), reskinned with Interfy's tokens and brand gradient. */
export default function LegalHero({
  ariaLabel,
  subtitle,
  content,
}: {
  ariaLabel: string;
  subtitle: string;
  content: LegalHeroContent;
}) {
  const [firstWord, ...rest] = content.title.split(" ");
  const restText = rest.join(" ");

  return (
    <section
      aria-label={ariaLabel}
      className="flex justify-center bg-gradient-to-b from-bg-base to-[#e8f1f8] px-5 py-16 sm:py-20"
    >
      <Reveal immediate className="flex max-w-[800px] flex-col items-center gap-5 text-center">
        <span className="rounded-full border border-azul-base/20 bg-azul-bg-superior px-4 py-1.5 text-sm font-bold leading-[1.2] text-azul-base">
          {content.eyebrow}
        </span>

        <h1 className="text-[clamp(2rem,1.6667vw+1.6667rem,3rem)] font-extrabold leading-[1.2] text-texto">
          {firstWord}
          {restText && (
            <>
              {" "}
              <span className="inline-block bg-[linear-gradient(111.8deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {restText}
              </span>
            </>
          )}
        </h1>

        <p className="max-w-2xl text-[clamp(1rem,0.2083vw+0.9583rem,1.125rem)] font-medium leading-[1.5] text-texto-medio">
          {subtitle}
        </p>

        <span className="rounded-full bg-branco px-4 py-1.5 text-sm font-bold leading-[1.2] text-texto-medio">
          {content.updatedLabel}
        </span>
      </Reveal>
    </section>
  );
}
