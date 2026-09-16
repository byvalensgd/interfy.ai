import Reveal from "@/components/ui/Reveal";
import LogosMarquee from "@/components/ui/LogosMarquee";
import { integracoesLogosStripIcons } from "@/config/integracoes-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function IntegracoesLogosStrip() {
  const { integracoes } = await getDictionary();
  const { logosStrip } = integracoes;

  return (
    <section aria-labelledby="integracoes-logos-heading" className="flex justify-center bg-branco px-5 py-10">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="integracoes-logos-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {logosStrip.heading}
        </h2>

        <LogosMarquee items={integracoesLogosStripIcons} ariaLabel={logosStrip.itemsAriaLabel} />
      </Reveal>
    </section>
  );
}
