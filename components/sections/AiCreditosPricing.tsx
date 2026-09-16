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

        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row">
          <div className="w-full flex-1 overflow-x-auto overflow-y-hidden rounded-[20px] border border-contorno-base">
            {/* border-separate + border-spacing-0 (not border-collapse): with collapse, each
             * cell's own border merges with its neighbor's at shared edges, so any width
             * mismatch (or the outer edge merging with this wrapper's border) reads as an
             * inconsistent stroke. Here only interior dividers carry a border — bottom (or top)
             * between rows, right between columns — so every visible line is drawn exactly once,
             * at the same 1px weight, and the wrapper's border alone forms the outer frame.
             * overflow-x-auto (not -hidden): a hard clip has no scroll escape hatch, so on a
             * viewport narrower than the table's min-width the content was getting cut off
             * instead of reachable — overflow-y-hidden alone still lets the rounded corners clip
             * top/bottom correctly. Smaller mobile font/padding (sm: steps up to the original
             * sizes) shrinks how much horizontal scroll is ever needed in the first place. */}
            <table aria-label={pricing.table.ariaLabel} className="w-full min-w-[480px] border-separate border-spacing-0 text-center">
              <thead>
                <tr>
                  <th scope="col" className="border-r border-b border-contorno-base bg-bg-base p-2.5 text-xs leading-[1.2] font-bold text-texto sm:p-5 sm:text-lg">
                    {pricing.table.colPlan}
                  </th>
                  <th scope="col" className="border-r border-b border-contorno-base bg-bg-base p-2.5 text-xs leading-[1.2] font-bold text-texto sm:p-5 sm:text-lg">
                    {pricing.table.colCredits}
                  </th>
                  <th scope="col" className="border-r border-b border-contorno-base bg-bg-base p-2.5 text-xs leading-[1.2] font-bold text-texto sm:p-5 sm:text-lg">
                    {pricing.table.colPrice}
                  </th>
                  <th scope="col" className="border-b border-contorno-base bg-bg-base p-2.5 text-xs leading-[1.2] font-bold text-texto sm:p-5 sm:text-lg">
                    {pricing.table.colPricePer1000}
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiCreditosPlans.map((row) => (
                  <tr key={row.plan}>
                    <td className="border-r border-b border-contorno-base p-2.5 text-xs leading-[1.2] font-semibold text-texto sm:p-5 sm:text-base">{row.plan}</td>
                    <td className="border-r border-b border-contorno-base p-2.5 text-xs leading-[1.2] font-semibold text-texto sm:p-5 sm:text-base">{row.credits}</td>
                    <td className="border-r border-b border-contorno-base p-2.5 text-xs leading-[1.2] font-semibold text-texto sm:p-5 sm:text-base">{row.price}</td>
                    <td className="border-b border-contorno-base p-2.5 text-xs leading-[1.2] font-semibold text-texto sm:p-5 sm:text-base">{row.pricePer1000}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="p-2.5 text-[10px] leading-[1.2] font-semibold text-texto-medio sm:p-5 sm:text-sm">
                    {pricing.table.footnote}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex w-full flex-col gap-[30px] rounded-[20px] border border-contorno-base bg-bg-base p-[15px] lg:w-[500px] lg:shrink-0">
            <p className="w-full px-2.5 pt-1.5 text-[22px] leading-[1.2] font-bold text-texto">{pricing.consumption.heading}</p>
            <ul className="flex w-full flex-1 flex-col justify-between gap-2.5 rounded-xl bg-branco p-2.5">
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
