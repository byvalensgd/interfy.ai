import Reveal from "@/components/ui/Reveal";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function EmpresaHistory() {
  const { empresa } = await getDictionary();
  const { history } = empresa;

  return (
    <section aria-labelledby="empresa-history-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-stretch gap-10 lg:flex-row">
        <div className="relative flex w-full max-w-[520px] flex-1 items-center justify-center overflow-hidden">
          <div className="absolute size-[300px] rounded-full bg-gradient-to-b from-[#e8f1f8] to-[#fafbff] blur-2xl" aria-hidden="true" />
          <div className="relative h-full w-full max-w-[320px]">
            <AutoplayVideo src="/empresa/aperfeicoados-no-desafio.mp4" className="size-full object-cover" />
            <div className="absolute inset-0 bg-azul-base opacity-80 mix-blend-overlay" aria-hidden="true" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center gap-10 py-5">
          <h2 id="empresa-history-heading" className="text-2xl leading-[1.2] font-bold text-texto">
            {history.headingPrefix}
            <span className="text-azul-base">{history.headingHighlight}</span>
          </h2>
          <div className="flex flex-col items-start gap-5">
            <p className="text-lg leading-[1.2] font-semibold text-texto">{history.paragraph1}</p>
            <p className="text-lg leading-[1.2] font-semibold text-texto">{history.paragraph2}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
