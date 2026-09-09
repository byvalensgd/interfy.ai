import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import {
  swcCreditsTable,
  swcCreditDefinition,
  swcCreditAlerts,
  swcSystemResources,
} from "@/config/swc-page";

export default function SwcCredits() {
  return (
    <section aria-label="Créditos de AI do Interfy Capture" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col gap-10">
        <Reveal className="flex w-full flex-col items-start gap-10 lg:flex-row">
          <div className="w-full flex-1 overflow-x-auto rounded-[32px] border border-contorno-base">
            <table className="w-full min-w-[560px] border-collapse text-center">
              <caption className="bg-azul-base p-5 text-2xl leading-[1.2] font-bold text-branco">
                Tabela de CRÉDITOS AI ADICIONAIS
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="border-2 border-contorno-base bg-azul-bg-superior p-5 text-xl leading-[1.2] font-bold text-azul-base">
                    PACOTE
                  </th>
                  <th scope="col" className="border-2 border-contorno-base bg-azul-bg-superior p-5 text-xl leading-[1.2] font-bold text-azul-base">
                    VALOR POR CRÉDITO
                  </th>
                  <th scope="col" className="border-2 border-contorno-base bg-azul-bg-superior p-5 text-xl leading-[1.2] font-bold text-azul-base">
                    VALOR TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {swcCreditsTable.map((row) => (
                  <tr key={row.package}>
                    <td className="border border-contorno-base p-5 text-base leading-[1.2] font-bold text-texto">{row.package}</td>
                    <td className="border border-contorno-base p-5 text-base leading-[1.2] font-bold text-texto">{row.perCredit}</td>
                    <td className="border border-contorno-base p-5 text-base leading-[1.2] font-bold text-texto">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex w-full flex-col gap-10 rounded-[32px] bg-azul-bg-superior p-5 pt-[30px] sm:p-[25px] sm:pt-[30px] lg:w-[405px] lg:shrink-0">
            <p className="text-2xl leading-[1.2] font-bold text-azul-base">O QUE É 1 CRÉDITO DE AI?</p>
            <p className="w-full text-xl leading-[1.2] font-medium text-texto">
              1 crédito corresponde ao processamento inteligente completo de 1 página via AI, incluindo:
            </p>
            <ul className="flex w-full flex-col gap-[15px]">
              {swcCreditDefinition.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Image src="/icons/swc/check-credits.svg" alt="" aria-hidden="true" width={18} height={18} className="shrink-0" />
                  <span className="min-w-0 flex-1 text-lg leading-[1.2] font-extrabold text-texto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="grid w-full items-start gap-10 lg:grid-cols-2" delayMs={120}>
          {swcCreditAlerts.map((alert) => (
            <div
              key={alert.title}
              className="flex w-full flex-col gap-5 rounded-[20px] border-2 border-contorno-base bg-branco p-5"
            >
              <div className="flex items-center gap-5">
                <Image src="/icons/swc/alert-icon.svg" alt="" aria-hidden="true" width={45} height={45} className="shrink-0" />
                <p className="min-w-0 flex-1 text-2xl leading-[1.2] font-bold text-texto">{alert.title}</p>
              </div>
              {alert.description && (
                <p className="w-full text-lg leading-[1.2] font-semibold text-texto-medio">{alert.description}</p>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal className="w-full" delayMs={240}>
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
            {swcSystemResources.map((card) => (
              <li key={card.label} className="flex flex-col gap-5 rounded-[24px] border border-contorno-base bg-branco p-5">
                <div className="flex items-center gap-5">
                  <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#dcedfc] p-2">
                    <Image src={card.icon} alt="" aria-hidden="true" width={30} height={30} />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                    <p className="w-full text-xl leading-[1.2] font-bold text-azul-base">{card.label}</p>
                    {card.value && <p className="w-full text-[26px] leading-[1.2] font-bold text-texto">{card.value}</p>}
                  </div>
                </div>
                <p className="w-full text-lg leading-[1.2] font-semibold text-texto-medio">{card.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
