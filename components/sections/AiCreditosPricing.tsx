import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aiCreditosPlans, aiCreditosConsumptionIcons } from "@/config/ai-creditos-page";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function AiCreditosPricing() {
  const { aiCreditos } = await getDictionary();
  const { pricing } = aiCreditos;
  const consumptionItems = aiCreditosConsumptionIcons.map((icon, i) => ({ icon, ...pricing.consumption.items[i] }));

  return (
    <section aria-labelledby="ai-creditos-pricing-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <Reveal className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="ai-creditos-pricing-heading" className="text-center text-2xl leading-[1.2] font-bold text-texto">
          {pricing.headingPrefix}
          <span className="text-azul-base">{pricing.headingHighlight}</span>
          {pricing.headingSuffix}
        </h2>

        <div className="flex w-full flex-col items-start gap-5 lg:flex-row">
          <div className="w-full flex-1 overflow-x-auto rounded-[20px] border border-contorno-base">
            <table aria-label={pricing.table.ariaLabel} className="w-full min-w-[640px] border-collapse text-center">
              <thead>
                <tr>
                  <th scope="col" className="border-2 border-contorno-base bg-bg-base p-5 text-xl leading-[1.2] font-bold text-texto">
                    {pricing.table.colPlan}
                  </th>
                  <th scope="col" className="border-2 border-contorno-base bg-bg-base p-5 text-xl leading-[1.2] font-bold text-texto">
                    {pricing.table.colCredits}
                  </th>
                  <th scope="col" className="border-2 border-contorno-base bg-bg-base p-5 text-xl leading-[1.2] font-bold text-texto">
                    {pricing.table.colPrice}
                  </th>
                  <th scope="col" className="border-2 border-contorno-base bg-bg-base p-5 text-xl leading-[1.2] font-bold text-texto">
                    {pricing.table.colPricePer1000}
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiCreditosPlans.map((row) => (
                  <tr key={row.plan}>
                    <td className="border border-contorno-base p-5 text-lg leading-[1.2] font-semibold text-texto">{row.plan}</td>
                    <td className="border border-contorno-base p-5 text-lg leading-[1.2] font-semibold text-texto">{row.credits}</td>
                    <td className="border border-contorno-base p-5 text-lg leading-[1.2] font-semibold text-texto">{row.price}</td>
                    <td className="border border-contorno-base p-5 text-lg leading-[1.2] font-semibold text-texto">{row.pricePer1000}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="border border-contorno-base p-5 text-base leading-[1.2] font-semibold text-texto-medio">
                    {pricing.table.footnote}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex w-full flex-col gap-[30px] rounded-[20px] border border-contorno-base bg-bg-base p-[15px] lg:w-[500px] lg:shrink-0">
            <p className="w-full px-2.5 pt-1.5 text-2xl leading-[1.2] font-bold text-texto">{pricing.consumption.heading}</p>
            <ul className="flex w-full flex-col gap-2.5 rounded-xl bg-branco p-2.5">
              {consumptionItems.map((item, index) => (
                <li
                  key={item.title}
                  className={`flex w-full items-center gap-2.5 pb-2.5 ${
                    index < consumptionItems.length - 1 ? "border-b border-contorno-base" : ""
                  }`}
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} className="shrink-0" />
                  <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                    <p className="w-full text-base leading-[1.2] font-bold text-texto">{item.title}</p>
                    <p className="w-full text-sm leading-[1.2] font-medium text-texto-medio">{item.credits}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
