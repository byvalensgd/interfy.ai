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

        <Reveal className="w-full overflow-x-auto rounded-2xl border border-contorno-base">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-bg-base">
                <th scope="col" className="px-5 py-2.5 text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2] text-texto">
                  Recursos
                </th>
                {smallPlans.map((plan) => (
                  <th
                    key={plan.key}
                    scope="col"
                    className="px-5 py-2.5 text-center text-[clamp(1.0625rem,0.1042vw+1.0417rem,1.125rem)] font-bold leading-[1.2]"
                    style={plan.gradient ? undefined : { color: plan.colorVar }}
                  >
                    {plan.gradient ? (
                      <span className="bg-[linear-gradient(148deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                        {plan.name}
                      </span>
                    ) : (
                      plan.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingComparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-contorno-base">
                  <th
                    scope="row"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-base font-bold leading-[1.2] text-texto"
                  >
                    <Image src={rowIcons[row.icon as keyof typeof rowIcons]} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                    {row.label}
                  </th>
                  {smallPlans.map((plan) => {
                    const value = row.values[plan.key];
                    return (
                      <td
                        key={plan.key}
                        className="px-4 py-2.5 text-center text-base font-bold leading-[1.2] text-texto"
                      >
                        {value === "check" ? (
                          <Image
                            src="/icons/pricing/compare-check.svg"
                            alt="Incluído"
                            width={20}
                            height={20}
                            className="mx-auto"
                          />
                        ) : value === "cross" ? (
                          <Image
                            src="/icons/pricing/negative.svg"
                            alt="Não incluído"
                            width={20}
                            height={20}
                            className="mx-auto"
                          />
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
