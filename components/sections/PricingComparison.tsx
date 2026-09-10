import { Fragment } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { pricingComparisonRows, smallPlans } from "@/config/pricing";
import { getDictionary } from "@/lib/i18n/dictionaries";

const rowIcons = {
  users: "/icons/pricing/compare-users.svg",
  workspace: "/icons/pricing/compare-workspace.svg",
  storage: "/icons/pricing/compare-storage.svg",
  sign: "/icons/pricing/compare-sign.svg",
  mobile: "/icons/pricing/compare-mobile.svg",
  modules: "/icons/pricing/compare-modules.svg",
  ai: "/icons/pricing/compare-ai.svg",
  credits: "/icons/pricing/compare-credits.svg",
  support: "/icons/pricing/compare-support.svg",
} as const;

export default async function PricingComparison() {
  const { pricing } = await getDictionary();
  const { comparison, smallPlans: smallPlanDicts } = pricing;

  return (
    <section aria-labelledby="pricing-comparison-heading" className="flex justify-center px-5 pb-10 sm:pb-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-6">
        <h2 id="pricing-comparison-heading" className="sr-only">
          {comparison.srHeading}
        </h2>

        <Reveal className="grid w-full grid-cols-[1.5fr_repeat(4,1fr)] gap-px overflow-hidden rounded-2xl border border-contorno-base bg-contorno-base">
          <div className="flex min-h-[45px] items-center bg-bg-base px-5 py-2.5">
            <p className="text-lg font-bold leading-[1.2] text-texto">{comparison.resourcesLabel}</p>
          </div>
          {smallPlans.map((plan, planIndex) => (
            <div key={plan.key} className="flex min-h-[45px] items-center justify-center bg-bg-base px-5 py-2.5 text-center">
              <p className="text-lg font-bold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
                {plan.gradient ? (
                  <span className="inline-block bg-[linear-gradient(148deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {smallPlanDicts[planIndex].name}
                  </span>
                ) : (
                  smallPlanDicts[planIndex].name
                )}
              </p>
            </div>
          ))}

          {pricingComparisonRows.map((row, rowIndex) => {
            const rowDict = comparison.rows[rowIndex];
            return (
              <Fragment key={rowDict.label}>
                <div className="flex min-h-[45px] items-center gap-2.5 bg-branco px-[15px] py-2.5">
                  <Image src={rowIcons[row.icon as keyof typeof rowIcons]} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                  <p className="text-base font-bold leading-[1.2] text-texto">{rowDict.label}</p>
                </div>
                {smallPlans.map((plan) => {
                  const value = rowDict.values[plan.key as keyof typeof rowDict.values];
                  const isSmallText = row.icon === "modules" || (row.icon === "ai" && plan.key === "startup");
                  return (
                    <div
                      key={`${rowDict.label}-${plan.key}`}
                      className="flex min-h-[45px] flex-col items-center justify-center bg-branco px-[15px] py-2.5 text-center"
                    >
                      {value === "check" ? (
                        <Image src="/icons/pricing/compare-check.svg" alt={comparison.includedAlt} width={20} height={20} />
                      ) : (
                        <p className={`font-bold leading-[1.2] text-texto ${isSmallText ? "text-sm" : "text-base"}`}>
                          {value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
