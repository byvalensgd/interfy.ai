import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import {
  aiCreditosHeroBannerItems,
  aiCreditosStripItemIcons,
  aiCreditosStripItemIconsBlue,
} from "@/config/ai-creditos-page";
import { getDictionary, getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CTA_DISABLED } from "@/config/feature-flags";

export default async function AiCreditosHero() {
  const locale = await getLocale();
  const { aiCreditos } = await getDictionary();
  const { hero } = aiCreditos;
  const banner = aiCreditosHeroBannerItems.map((item, i) => ({ ...item, ...hero.banner[i] }));
  const stripItems = aiCreditosStripItemIcons.map((icon, i) => ({ icon, ...hero.strip.items[i] }));
  const stripItemsBlue = aiCreditosStripItemIconsBlue.map((icon, i) => ({ icon, ...hero.strip.items[i] }));

  return (
    <section
      aria-labelledby="ai-creditos-hero-heading"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-stretch justify-center bg-gradient-to-b from-[#fafbff] to-[#e8f1f8] px-5 py-12 sm:py-16 lg:py-[50px]"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        {/* Grid (not flex-wrap): same two-column hero pattern used sitewide (e.g. SegmentsHero's
         * lg:grid-cols-[520fr_840fr]) — a single implicit column below lg (text first, then the
         * video+cards block, exactly like every other hero's text-over-mockup stacking), and a
         * precise, deliberate 1024px break into two columns instead of flex-wrap's fuzzy
         * fits-or-it-doesn't threshold. */}
        <div className="grid w-full items-stretch gap-10 lg:flex-1 lg:grid-cols-[620fr_740fr]">
          <Reveal immediate className="flex w-full flex-col items-center justify-center gap-10 text-center lg:items-start lg:text-left">
            <h1
              id="ai-creditos-hero-heading"
              className="text-[2rem] lg:text-[clamp(2.25rem,2.88462vw+0.40385rem,3rem)] leading-[1.2] font-extrabold text-texto"
            >
              {hero.headingLine1}{" "}
              <span className="text-azul-base">{hero.headingHighlight}</span>
              {hero.headingSuffix}
            </h1>
            <p className="text-xl leading-[1.2] font-medium text-texto">
              {hero.description1}
              <br />
              {hero.description2}
            </p>

            <div className="@container flex w-full flex-nowrap items-stretch justify-center gap-2.5 sm:gap-5 lg:justify-start">
              <Button
                href={withLocale("/test-drive", locale)}
                variant="primary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                showArrow
                disabled={CTA_DISABLED}
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                href={withLocale("/demo", locale)}
                variant="secondary"
                className="min-w-0 flex-1 !h-auto min-h-9 !whitespace-normal !px-2.5 !py-1.5 !leading-tight !text-[clamp(0.625rem,3.333cqw+0.1667rem,1rem)] text-center sm:min-h-[50px] sm:flex-initial sm:!px-5 sm:!py-2.5"
                disabled={CTA_DISABLED}
              >
                {hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>

          {/* Below lg (its own grid row, full width): video stacks above the cards, gap-5 apart.
           * At lg+ (side by side, matching the grid's own 2-column break): video first, fixed
           * -width cards pinned to the end via justify-end, overlapping it by 100px — CSS `gap`
           * can't go negative (invalid, silently ignored), so lg:gap-0 clears the row gap and the
           * -100px comes from the cards column's own -ml. lg:min-w-[650px]: floor for the row
           * itself so it never gets squeezed under that. */}
          <div className="flex flex-col items-stretch justify-end gap-5 lg:h-full lg:flex-row lg:gap-0 lg:min-w-[650px]">
            {/* Plain (non-Reveal) wrapper: Reveal keeps a permanent translate-* transform even
             * after revealing, which creates a stacking context and would trap mix-blend-multiply
             * inside it instead of blending with the section's actual gradient background.
             * relative + absolute video (instead of a plain size-full child): a <video> is a
             * replaced element, so size-full alone lets its OWN intrinsic ratio (this file is
             * 1440x1438, i.e. ~1:1) dictate the wrapper's auto height once width is free to grow
             * — at 740px wide that produced a 739px-tall, mostly off-screen video. Taking it out
             * of flow means the wrapper's height comes only from aspect-square (mobile) or the
             * row's own stretch against the cards column (lg+, via lg:aspect-auto lg:h-full). */}
            <div className="relative mx-auto w-full max-w-[750px] flex-1 aspect-square lg:mx-0 lg:aspect-auto lg:max-w-none">
              <AutoplayVideo
                src="/ai-creditos/hero-orb"
                replayDelayMs={10000}
                className="absolute inset-0 size-full object-contain mix-blend-multiply"
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
             * was letting the video's preferred size starve this column down well below 260px —
             * a hard fixed width sidesteps the grow/shrink math entirely and guarantees 260px. */}
            <Reveal immediate delayMs={120} className="flex w-full flex-col justify-center lg:w-[260px] lg:flex-none lg:-ml-[100px]">
              <ul
                aria-label={hero.bannerAriaLabel}
                className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-[30px]"
              >
                {banner.map((item) => (
                  <li
                    key={item.title}
                    className="flex w-full flex-col items-center gap-5 rounded-[20px] border border-contorno-base bg-branco p-5 text-center"
                  >
                    <span className={`flex size-[50px] shrink-0 items-center justify-center rounded-full p-3 ${item.bg}`}>
                      <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} />
                    </span>
                    <div className="flex w-full flex-col gap-2.5">
                      <p className="w-full text-xl leading-[1.2] font-bold text-texto-doc-ok">{item.title}</p>
                      <p className="w-full text-base leading-[1.2] font-medium text-texto">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal immediate delayMs={200} className="w-full">
          <div className="flex w-full flex-wrap items-center justify-center gap-10 rounded-[14px] border border-contorno-base bg-gradient-to-b from-[#001240] to-[#001149] p-[30px]">
            <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
              <Image src="/icons/ai-creditos/stacked-3d-layers.webp" alt="" aria-hidden="true" width={52} height={55} className="shrink-0" />
              <div className="flex flex-col items-center gap-2.5 lg:items-start">
                <p className="text-xl leading-[1.2] font-bold text-branco">{hero.strip.heading}</p>
                <p className="text-base leading-[1.2] font-medium text-branco">{hero.strip.description}</p>
              </div>
            </div>

            {/* "Blocos Mobile": only below sm (phone breakpoint), each stat becomes its own
             * bordered white card (StatsBar.tsx's established mobile-card pattern); from sm
             * up (tablet + desktop), the flat in-row treatment that already fits fine
             * directly on the dark navy background. */}
            <ul aria-label={hero.strip.ariaLabel} className="flex w-full flex-wrap gap-4 sm:hidden">
              {stripItemsBlue.map((item) => (
                <li
                  key={item.icon}
                  className="flex min-w-[140px] flex-1 flex-col items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-5 text-center"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
                  <p className="flex min-h-[30px] w-full items-center justify-center text-base leading-[1.2] font-bold text-texto-doc-ok">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
            <ul aria-label={hero.strip.ariaLabel} className="hidden flex-1 grid-cols-2 items-center gap-5 sm:grid sm:min-w-[380px] lg:grid-cols-4">
              {stripItems.map((item) => (
                <li key={item.icon} className="flex flex-col items-center gap-2.5">
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
