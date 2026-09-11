import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ecosystemItems } from "@/config/platform";
import { integracoesAgentsChecklistIcon } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

function EcosystemBadge({ icon }: { icon: string }) {
  return (
    <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-contorno-base bg-branco p-3">
      <Image src={icon} alt="" aria-hidden="true" width={30} height={30} className="shrink-0" />
    </span>
  );
}

/** Compact decorative ring of the 8 Interfy product icons around the Agents mascot
 *  (Figma node 5420:29537) — fixed pixel sizes since it's a small, lg-only flourish,
 *  unlike the fluid cqw-based EcosystemDiagram used on the Home page. */
function AgentsRingDiagram({ ariaLabel }: { ariaLabel: string }) {
  const [documents, automation, voice, capture, agents, sign, connect, mobile] = ecosystemItems;

  return (
    <div aria-label={ariaLabel} className="relative hidden size-[314px] shrink-0 lg:block">
      <div className="absolute top-1/2 left-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(209deg,#eaeeff_15.943%,#ffffff_51.251%,#d9edff_83.945%)]" />
      <div className="absolute top-1/2 left-1/2 flex size-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-[2.5px] border-[#d5dfff] bg-branco">
        <Image
          src="/agentes/robot-mascot.png"
          alt=""
          aria-hidden="true"
          width={150}
          height={140}
          className="h-[140px] w-[150px] object-cover object-top mix-blend-multiply"
        />
      </div>

      <div className="relative flex size-full flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-5">
          <EcosystemBadge icon={documents.icon} />
          <div className="flex items-center gap-[140px] px-[21px]">
            <EcosystemBadge icon={automation.icon} />
            <EcosystemBadge icon={voice.icon} />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <EcosystemBadge icon={capture.icon} />
          <EcosystemBadge icon={agents.icon} />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-[140px] px-[21px]">
            <EcosystemBadge icon={sign.icon} />
            <EcosystemBadge icon={connect.icon} />
          </div>
          <EcosystemBadge icon={mobile.icon} />
        </div>
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
        className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-10 rounded-[20px] border border-contorno-base px-5 py-[30px] sm:px-10"
        style={{ backgroundImage: "linear-gradient(100deg, rgba(24,106,238,0.15) 0%, rgba(183,216,255,0.1) 100%)" }}
      >
        <AgentsRingDiagram ariaLabel={agentsHighlight.diagramAriaLabel} />

        <div className="flex min-w-[280px] flex-1 flex-col gap-5">
          <h2 id="integracoes-agents-heading" className="text-[32px] leading-[1.2] font-bold text-texto">
            {agentsHighlight.headingPrefix}
            <span className="bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
              {agentsHighlight.headingHighlight}
            </span>
          </h2>
          <p className="text-base leading-[1.2] font-medium text-texto">{agentsHighlight.description}</p>
        </div>

        <ul aria-label={agentsHighlight.checklistAriaLabel} className="flex min-w-[280px] flex-1 flex-col gap-[15px]">
          {agentsHighlight.checklist.map((item: { label: string }) => (
            <li key={item.label} className="flex items-center gap-2.5">
              <Image src={integracoesAgentsChecklistIcon} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
              <p className="min-w-0 flex-1 text-base leading-[1.2] font-medium text-texto">{item.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
