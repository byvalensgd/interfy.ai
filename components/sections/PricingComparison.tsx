import { Fragment } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { pricingComparisonRows, smallPlans } from "@/config/pricing";

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

export default function PricingComparison() {
  return (
    <section aria-labelledby="pricing-comparison-heading" className="flex justify-center px-5 pb-10 sm:pb-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-6">
        <h2 id="pricing-comparison-heading" className="sr-only">
          Comparativo entre planos
        </h2>

        <Reveal className="grid w-full grid-cols-[1.5fr_repeat(4,1fr)] gap-px overflow-hidden rounded-2xl border border-contorno-base bg-contorno-base">
          <div className="flex min-h-[45px] items-center bg-bg-base px-5 py-2.5">
            <p className="text-lg font-bold leading-[1.2] text-texto">Recursos</p>
          </div>
          {smallPlans.map((plan) => (
            <div key={plan.key} className="flex min-h-[45px] items-center justify-center bg-bg-base px-5 py-2.5 text-center">
              <p className="text-lg font-bold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
                {plan.gradient ? (
                  <span className="bg-[linear-gradient(148deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                    {plan.name}
                  </span>
                ) : (
                  plan.name
                )}
              </p>
            </div>
          ))}

          {pricingComparisonRows.map((row) => (
            <Fragment key={row.label}>
              <div className="flex min-h-[45px] items-center gap-2.5 bg-branco px-[15px] py-2.5">
                <Image src={rowIcons[row.icon as keyof typeof rowIcons]} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                <p className="text-base font-bold leading-[1.2] text-texto">{row.label}</p>
              </div>
              {smallPlans.map((plan) => {
                const value = row.values[plan.key];
                const lines = value.split("\n");
                const isSmallText = row.icon === "modules" || (row.icon === "ai" && plan.key === "startup");
                return (
                  <div
                    key={`${row.label}-${plan.key}`}
                    className="flex min-h-[45px] flex-col items-center justify-center bg-branco px-[15px] py-2.5 text-center"
                  >
                    {value === "check" ? (
                      <Image src="/icons/pricing/compare-check.svg" alt="Incluído" width={20} height={20} />
                    ) : (
                      lines.map((line) => (
                        <p
                          key={line}
                          className={`font-bold leading-[1.2] text-texto ${isSmallText ? "text-sm" : "text-base"}`}
                        >
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
