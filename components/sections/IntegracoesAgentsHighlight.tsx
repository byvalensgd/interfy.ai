import Image from "next/image";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import Reveal from "@/components/ui/Reveal";
import { ecosystemItems } from "@/config/platform";
import { integracoesAgentsChecklistIcon } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const RING_COUNT = 8;
const RING_RADIUS_PCT = 42; // % of the container — same distance from center for every badge.

// Every size below is expressed as cqw (% of the diagram's own container width, basis =
// the 315px design width) — same technique as SegurancaRadialDiagram.tsx — so shrinking the
// container shrinks the circles, mascot and badges (and, since their offsets are already
// percentages, their position) by the same proportion instead of clipping or staying fixed.
const DIAGRAM_BASIS = 315;
const cqw = (px: number) => `${(px / DIAGRAM_BASIS) * 100}cqw`;

function EcosystemBadge({ icon, x, y }: { icon: string; x: number; y: number }) {
  // max-w-none overrides Tailwind's preflight `img { max-width: 100% }`: with the badge's
  // padding subtracted, its content box (26px) is narrower than the icon's own cqw width
  // (30px) — since height is set to a definite cqw value too (not auto), that stylesheet
  // rule would otherwise clamp only the width, distorting the icon instead of shrinking it.
  // The counter-rotation cancels the orbit wrapper's spin (same duration/easing) so the
  // badge itself stays upright while its position still travels around the ring.
  return (
    <span
      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border-[0.5px] border-contorno-base bg-branco"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: cqw(50),
        height: cqw(50),
        padding: cqw(12),
        animation: "trust-illu-spin-reverse 40s linear infinite",
      }}
    >
      <Image
        src={icon}
        alt=""
        aria-hidden="true"
        width={30}
        height={30}
        className="max-w-none shrink-0"
        style={{ width: cqw(30), height: cqw(30) }}
      />
    </span>
  );
}

/** Decorative ring of the 8 Interfy product icons around the Agents mascot (Figma node
 *  5420:29537) — unlike Figma's literal flex layout (which spaces the middle pair far
 *  wider than the top/bottom singles), every badge sits at the same polar-coordinate
 *  radius from the center, so the ring reads as an actual circle. Fully fluid (never a
 *  fixed pixel size, never hidden): capped at 315px, but free to shrink below that with
 *  whatever space the flex row alongside the heading/description actually gives it. */
function AgentsRingDiagram({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div
      aria-label={ariaLabel}
      className="relative mx-auto aspect-square w-full max-w-[315px] flex-1"
      style={{ containerType: "inline-size" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(209deg,#eaeeff_15.943%,#ffffff_51.251%,#d9edff_83.945%)]"
        style={{ width: cqw(200), height: cqw(200) }}
      />
      <div
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-end justify-center overflow-hidden rounded-full border-[2.5px] border-[#d5dfff] bg-branco"
        style={{ width: cqw(190), height: cqw(190), paddingBottom: cqw(10) }}
      >
        <AutoplayVideo
          src="/features/robot"
          replayDelayMs={2500}
          className="max-w-none object-cover object-top mix-blend-multiply"
          style={{ width: cqw(165), height: cqw(154) }}
        />
      </div>

      {/* The ring orbits slowly around the mascot; each badge counter-rotates (same
          duration/easing) so its own icon stays upright while it travels around the circle. */}
      <div className="absolute inset-0" style={{ animation: "radial-icon-spin 40s linear infinite" }}>
        {ecosystemItems.map((item, i) => {
          const angle = (360 / RING_COUNT) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + RING_RADIUS_PCT * Math.cos(rad);
          const y = 50 + RING_RADIUS_PCT * Math.sin(rad);
          return <EcosystemBadge key={item.title} icon={item.icon} x={x} y={y} />;
        })}
      </div>
    </div>
  );
}

export default async function IntegracoesAgentsHighlight() {
  const { integracoes } = await getDictionary();
  const { agentsHighlight } = integracoes;

  return (
    <section aria-labelledby="integracoes-agents-heading" className="flex justify-center bg-branco px-5 py-10">
      <Reveal
        className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-10 rounded-[20px] border border-contorno-base px-5 py-[30px]"
        style={{ backgroundImage: "linear-gradient(100deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)" }}
      >
        {/* Diagram and heading/description are only grouped into one block below lg (they
            share a line, wrapping together as a unit above the checklist) — at lg and up
            "contents" removes this wrapper's own box entirely, so the diagram and text become
            direct flex children of the row again, same as the checklist, instead of being
            forced to share space with each other as a pair. Below md (the phone breakpoint)
            the pair itself goes fully vertical (diagram over text) and the text centers,
            matching the sitewide stacked-layout convention. */}
        <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row lg:contents">
          <AgentsRingDiagram ariaLabel={agentsHighlight.diagramAriaLabel} />

          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <h2
              id="integracoes-agents-heading"
              className="text-center text-[32px] leading-[1.2] font-bold text-texto md:text-left"
            >
              {agentsHighlight.headingPrefix}
              <span className="bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                {agentsHighlight.headingHighlight}
              </span>
            </h2>
            <p className="text-center text-base leading-[1.2] font-medium text-texto md:text-left">
              {agentsHighlight.description}
            </p>
          </div>
        </div>

        {/* Below lg: Blocos Mobile — each benefit becomes its own bordered card. */}
        <ul
          aria-label={agentsHighlight.checklistAriaLabel}
          className="grid w-full gap-4 lg:hidden"
        >
          {agentsHighlight.checklist.map((item: { label: string }) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 rounded-[14px] border border-contorno-base bg-branco p-4"
            >
              <Image src={integracoesAgentsChecklistIcon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              <p className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{item.label}</p>
            </li>
          ))}
        </ul>

        <ul
          aria-label={agentsHighlight.checklistAriaLabel}
          className="hidden min-w-[280px] flex-1 flex-col gap-[15px] lg:flex"
        >
          {agentsHighlight.checklist.map((item: { label: string }) => (
            <li key={item.label} className="flex items-center gap-2.5">
              <Image src={integracoesAgentsChecklistIcon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              <p className="min-w-0 flex-1 text-sm leading-[1.2] font-medium text-texto">{item.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
