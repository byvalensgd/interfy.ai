import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getCompleteBoxBasis } from "@/lib/completeBox";
import { integracoesSecurityIcons } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

const cardBackground = "linear-gradient(130deg, #ffffff 4.55%, #eff7ff 90.43%, #c8e0ff 126.82%)";

export default async function IntegracoesSecurityHighlight() {
  const { integracoes } = await getDictionary();
  const { securityHighlight } = integracoes;
  const items = integracoesSecurityIcons.map((icon, i) => ({ icon, ...securityHighlight.items[i] }));

  return (
    <section aria-labelledby="integracoes-security-heading" className="flex justify-center bg-branco px-5 py-10">
      <Reveal
        className="flex w-full max-w-[1400px] flex-wrap items-center justify-center gap-10 rounded-[20px] border border-contorno-base p-5"
        style={{ backgroundImage: cardBackground }}
      >
        {/* Below md: illustration stacks above the text and the text centers, matching the
            sitewide stacked-layout convention — the text's own min-w-280 only makes sense
            once it's sharing a row with the illustration, so it's dropped in that state.
            Below lg the pair is still one grouped block; at lg and up "contents" removes this
            wrapper's own box entirely, so the illustration and text become direct flex
            children of the row (alongside the items list) instead of being forced to share
            space with each other as a pair. */}
        <div className="flex min-w-[280px] max-w-[540px] flex-1 flex-col items-center gap-5 md:flex-row lg:contents">
          <div className="relative h-[150px] w-[151px] shrink-0">
            <Image
              src="/icons/integracoes/security/shield-illustration.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="151px"
              className="object-contain"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[30px] md:min-w-[280px]">
            <h2
              id="integracoes-security-heading"
              className="text-center text-2xl leading-[1.2] font-bold text-texto md:text-left"
            >
              {securityHighlight.headingPrefix}
              <span className="bg-[linear-gradient(112deg,#184aee_22.863%,#bf18f6_96.412%)] bg-clip-text text-transparent">
                {securityHighlight.headingHighlight}
              </span>
            </h2>
            <p className="text-center text-base leading-[1.2] font-medium text-texto md:text-left">
              {securityHighlight.description}
            </p>
          </div>
        </div>

        {/* Below lg: Blocos Mobile — each standard becomes its own bordered card. "Complete
            Box" (see lib/completeBox.ts) keeps the wrap balanced (2 cols, 3 from sm) instead
            of a short last row leaving a gap. */}
        <ul aria-label={securityHighlight.itemsAriaLabel} className="flex w-full flex-wrap gap-4 lg:hidden">
          {items.map((item) => (
            <li
              key={item.label}
              className={`flex grow min-w-[140px] ${getCompleteBoxBasis(items.length)} flex-col items-center gap-[15px] rounded-[14px] border border-contorno-base bg-branco p-4 text-center`}
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
              <p className="w-full text-sm leading-[1.2] font-bold text-texto">{item.label}</p>
            </li>
          ))}
        </ul>

        {/* "Complete Box" (see lib/completeBox.ts): flex-basis (hand-calculated for this
            row's gap-[15px] and its 5-col layout) in place of grid-cols-5, so a short last
            row (grow) stretches to fill instead of a CSS Grid leaving it blank. */}
        <ul
          aria-label={securityHighlight.itemsAriaLabel}
          className="hidden min-w-[280px] flex-1 flex-wrap gap-[15px] lg:flex"
        >
          {items.map((item) => (
            <li
              key={item.label}
              className="flex min-w-[100px] grow basis-[calc(20%-0.75rem)] flex-col items-center gap-[15px] text-center"
            >
              <Image src={item.icon} alt="" aria-hidden="true" width={36} height={36} className="shrink-0" />
              <p className="w-full text-sm leading-[1.2] font-bold text-texto">{item.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
