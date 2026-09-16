import Image from "next/image";
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
  return (
    <span
      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border-[0.5px] border-contorno-base bg-branco"
      style={{ left: `${x}%`, top: `${y}%`, width: cqw(50), height: cqw(50), padding: cqw(12) }}
    >
      <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" style={{ width: cqw(30), height: cqw(30) }} />
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
        style={{ width: cqw(190), height: cqw(190) }}
      >
        <Image
          src="/agentes/robot-mascot.webp"
          alt=""
          aria-hidden="true"
          width={165}
          height={154}
          className="object-cover object-top mix-blend-multiply"
          style={{ width: cqw(165), height: cqw(154) }}
        />
      </div>

      {ecosystemItems.map((item, i) => {
        const angle = (360 / RING_COUNT) * i - 90;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + RING_RADIUS_PCT * Math.cos(rad);
        const y = 50 + RING_RADIUS_PCT * Math.sin(rad);
        return <EcosystemBadge key={item.title} icon={item.icon} x={x} y={y} />;
      })}
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
        {/* Diagram and heading/description are one block (never hidden, never split apart) —
            min-w is set explicitly to the pair's real combined minimum (diagram + text's own
            floor + the gap between them) since a flex-wrap container's automatic minimum would
            otherwise shrink to just its widest child, letting the pair collapse into an internal
            wrap (diagram on top, text below) before the outer row itself needs to wrap. This
            way the whole pair only ever moves to its own line as a unit, same as the checklist. */}
        <div className="flex min-w-[600px] max-w-[700px] flex-1 flex-wrap items-center justify-center gap-5 max-sm:min-w-0">
          <AgentsRingDiagram ariaLabel={agentsHighlight.diagramAriaLabel} />

          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <h2 id="integracoes-agents-heading" className="text-[32px] leading-[1.2] font-bold text-texto">
              {agentsHighlight.headingPrefix}
              <span className="bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                {agentsHighlight.headingHighlight}
              </span>
            </h2>
            <p className="text-base leading-[1.2] font-medium text-texto">{agentsHighlight.description}</p>
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
