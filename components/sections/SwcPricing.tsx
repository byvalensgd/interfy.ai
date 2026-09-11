import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { swcPricingTiers, swcPricingAllPlans, type PricingTier } from "@/config/swc-page";

const gradient = "linear-gradient(93.5deg, #184aee 22.863%, #bf18f6 96.412%)";

function PlanCard({ plan }: { plan: PricingTier }) {
  return (
    <div
      className={`relative flex h-full flex-col items-center gap-5 rounded-2xl border-[1.5px] bg-branco px-[15px] pb-5 pt-10 ${
        plan.badge ? "border-corporate" : "border-contorno-base"
      }`}
    >
      {plan.badge && (
        <span
          className="-translate-x-1/2 absolute left-1/2 top-[-18px] whitespace-nowrap rounded-full bg-corporate px-4 py-3 text-sm leading-[1.2] font-bold text-branco"
        >
          {plan.badge}
        </span>
      )}

      <span
        className={`flex size-[70px] shrink-0 items-center justify-center rounded-full p-[17px] ${plan.gradient ? "" : plan.bgClass}`}
        style={plan.gradient ? { backgroundImage: gradient } : undefined}
      >
        <Image src={plan.icon} alt="" aria-hidden="true" width={36} height={36} />
      </span>

      <p className="w-full text-center text-[32px] leading-[1.2] font-bold">
        {plan.gradient ? (
          <span className="inline-block bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
            {plan.name}
          </span>
        ) : (
          <span className={plan.colorClass}>{plan.name}</span>
        )}
      </p>

      <div className="flex w-full flex-col items-center gap-[15px] border-t border-contorno-base pt-5 text-center">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[26px] leading-[1.2] font-bold">
            {plan.gradient ? (
              <span className="inline-block bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
                {plan.credits}/mês
              </span>
            ) : (
              <span className={plan.colorClass}>{plan.credits}/mês</span>
            )}
          </p>
          <p className="text-sm leading-[1.2] font-medium text-texto">créditos de AI (não cumulativo)</p>
        </div>

        <div className="flex flex-col items-center gap-[15px] border-t border-contorno-base pt-[15px]">
          <p className="text-[26px] leading-[1.2] font-bold">
            {plan.gradient ? (
              <span className="inline-block bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
                R${plan.monthlyPrice}/mês
              </span>
            ) : (
              <span className={plan.colorClass}>R${plan.monthlyPrice}/mês</span>
            )}
          </p>
          <p className="text-lg leading-[1.2] font-bold text-texto">R${plan.perCredit}/crédito</p>
        </div>
      </div>

      <ul className="flex w-full flex-1 flex-col gap-[15px] border-t border-contorno-base pt-5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex min-h-[14px] items-start gap-[5px]">
            <Image src="/icons/swc/check-plan.svg" alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
            <span className="min-w-0 flex-1 text-sm leading-[1.2] font-bold text-texto">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SwcPricing() {
  return (
    <section aria-labelledby="swc-pricing-heading" className="flex justify-center bg-branco px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="swc-pricing-heading" className="text-center text-[32px] leading-[1.2] font-bold text-corporate">
          Escolha o plano ideal para sua operação
        </h2>

        <Reveal className="w-full">
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {swcPricingTiers.map((plan) => (
              <PlanCard key={plan.key} plan={plan} />
            ))}
          </div>
        </Reveal>

        <Reveal className="w-full" delayMs={120}>
          <div className="flex w-full flex-col gap-[30px] rounded-[32px] border-2 border-contorno-base p-5 sm:p-[25px]">
            <p className="text-2xl leading-[1.2] font-bold text-azul-base">Disponível em todos os planos</p>
            <ul className="flex w-full flex-wrap items-start gap-3">
              {swcPricingAllPlans.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-contorno-base py-1.5 pl-2 pr-3"
                >
                  <Image src="/icons/swc/check-pill.svg" alt="" aria-hidden="true" width={16} height={16} className="shrink-0" />
                  <span className="whitespace-nowrap text-sm leading-[1.2] font-bold text-texto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
