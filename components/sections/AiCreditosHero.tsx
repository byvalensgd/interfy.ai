import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import { aiCreditosHeroBannerItems, aiCreditosStripItemIcons } from "@/config/ai-creditos-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export default async function AiCreditosHero() {
  const locale = await getLocale();
  const { aiCreditos } = await getDictionary();
  const { hero } = aiCreditos;
  const banner = aiCreditosHeroBannerItems.map((item, i) => ({ ...item, ...hero.banner[i] }));
  const stripItems = aiCreditosStripItemIcons.map((icon, i) => ({ icon, ...hero.strip.items[i] }));

  return (
    <section
      aria-labelledby="ai-creditos-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <div className="flex w-full flex-1 flex-wrap items-stretch justify-center gap-10">
          <Reveal immediate className="flex w-full max-w-[620px] min-w-[280px] flex-1 flex-col items-start justify-center gap-10">
            <h1
              id="ai-creditos-hero-heading"
              className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] leading-[1.2] font-extrabold text-texto"
            >
              {hero.headingLine1}
              <br />
              <span className="text-azul-base">{hero.headingHighlight}</span>
              {hero.headingSuffix}
            </h1>
            <p className="text-xl leading-[1.2] font-medium text-texto">
              {hero.description1}
              <br />
              {hero.description2}
            </p>

            <div className="flex w-full flex-nowrap items-center gap-2.5 sm:gap-5">
              <Button
                href={withLocale("/comece-gratis", locale)}
                variant="primary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !text-xs !leading-tight text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5 sm:!text-base"
                showArrow
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                href={withLocale("/demo", locale)}
                variant="secondary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !text-xs !leading-tight text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5 sm:!text-base"
              >
                {hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>

          <div className="flex min-w-[320px] flex-1 items-stretch gap-5">
            {/* Plain (non-Reveal) wrapper: Reveal keeps a permanent translate-* transform even
             * after revealing, which creates a stacking context and would trap mix-blend-multiply
             * inside it instead of blending with the section's actual gradient background.
             * No explicit height/shrink-0: with items-stretch on the row, the flexbox "stretch +
             * aspect-ratio" algorithm auto-fills the sibling cards column's height and derives
             * width from the ratio, shrinking gracefully if space is tight — max-w caps it at
             * the Figma-exact size (603.84px) instead of a hand-picked pixel value. */}
            <div className="-mr-20 hidden aspect-[1440/1438] max-w-[604px] lg:block">
              <AutoplayVideo
                src="/ai-creditos/hero-orb.mp4"
                replayDelayMs={10000}
                className="size-full object-contain mix-blend-multiply"
                style={{
                  // 20px feathered edge: fade each side to transparent instead of a hard cut.
                  maskImage:
                    "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent), linear-gradient(to bottom, transparent, black 20px, black calc(100% - 20px), transparent)",
                  maskComposite: "intersect",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent), linear-gradient(to bottom, transparent, black 20px, black calc(100% - 20px), transparent)",
                  WebkitMaskComposite: "source-in",
                }}
              />
            </div>
            {/* lg:w-[260px] + lg:flex-none (not max-w/shrink-0): flex-1's grow-from-zero-basis
             * was letting the video's ~604px preferred size starve this column down to ~196px —
             * a hard fixed width sidesteps the grow/shrink math entirely and guarantees 260px. */}
            <Reveal immediate delayMs={120} className="flex w-full min-w-0 flex-1 flex-col justify-center lg:w-[260px] lg:flex-none">
              <ul aria-label={hero.bannerAriaLabel} className="flex flex-col gap-[30px]">
                {banner.map((item) => (
                  <li
                    key={item.title}
                    className="flex w-full flex-col gap-5 rounded-[20px] border border-contorno-base bg-branco p-5"
                  >
                    <div className="flex h-[50px] items-center gap-5">
                      <span className={`flex size-[50px] shrink-0 items-center justify-center rounded-full p-3 ${item.bg}`}>
                        <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} />
                      </span>
                      <p className="min-w-0 flex-1 text-xl leading-[1.2] font-bold text-texto-doc-ok">{item.title}</p>
                    </div>
                    <p className="w-full text-base leading-[1.2] font-medium text-texto">{item.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <div className="flex w-full flex-wrap items-center gap-10 rounded-[14px] border border-contorno-base bg-gradient-to-b from-[#001240] to-[#001149] p-[30px]">
            <div className="flex items-center gap-5">
              <Image src="/icons/ai-creditos/stacked-3d-layers.png" alt="" aria-hidden="true" width={52} height={55} className="shrink-0" />
              <div className="flex flex-col gap-2.5">
                <p className="text-xl leading-[1.2] font-bold text-branco">{hero.strip.heading}</p>
                <p className="text-base leading-[1.2] font-medium text-branco">{hero.strip.description}</p>
              </div>
            </div>

            <ul aria-label={hero.strip.ariaLabel} className="flex flex-1 flex-wrap items-center justify-between gap-5">
              {stripItems.map((item) => (
                <li key={item.icon} className="flex flex-1 flex-col items-center gap-2.5">
                  <Image src={item.icon} alt="" aria-hidden="true" width={32} height={32} className="shrink-0" />
                  <p className="w-full text-center text-base leading-[1.2] font-bold whitespace-nowrap text-branco">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
