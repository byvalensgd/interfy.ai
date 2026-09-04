"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ResourcesAccordion from "@/components/sections/ResourcesAccordion";
import {
  pricingFeatureRows,
  pricingNotIncluded,
  pricingPlans,
  productIconPaths,
  smallPlans,
  type PlanKey,
  type ProductIconKey,
  type SmallFeatureItem,
  type SmallPlanKey,
} from "@/config/pricing";

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const smallCheckIcons: Record<SmallPlanKey, string> = {
  free: "/icons/pricing/check-free.svg",
  individual: "/icons/pricing/check-individual.svg",
  teams: "/icons/pricing/check-teams.svg",
  startup: "/icons/pricing/check-startup.svg",
};

const largeCheckIcon = "/icons/pricing/check-starter.svg";
const negativeIcon = "/icons/pricing/negative.svg";

function SegmentSwitch({
  segment,
  onChange,
}: {
  segment: "small" | "large";
  onChange: (segment: "small" | "large") => void;
}) {
  return (
    <div className="relative flex w-full max-w-[898px] items-center gap-2.5 rounded-full bg-bg-base shadow-[inset_0px_0px_3px_0px_rgba(0,0,0,0.15)]">
      <button
        type="button"
        onClick={() => onChange("small")}
        aria-pressed={segment === "small"}
        className={`flex flex-1 flex-col items-center gap-1.5 rounded-full p-2.5 text-center transition-colors sm:gap-2 sm:p-[15px] ${
          segment === "small"
            ? "bg-[linear-gradient(112deg,#184aee_22.86%,#bf18f6_96.41%)] text-branco"
            : "text-texto"
        }`}
      >
        <span className="text-sm leading-[1.2] font-bold sm:text-base">Pequenos Negócios</span>
        <span className="text-xs leading-[1.2] font-medium sm:text-sm">
          Para profissionais, equipes e empresas em crescimento.
        </span>
      </button>
      <button
        type="button"
        onClick={() => onChange("large")}
        aria-pressed={segment === "large"}
        className={`flex flex-1 flex-col items-center gap-1.5 rounded-full p-2.5 text-center transition-colors sm:gap-2 sm:p-[15px] ${
          segment === "large"
            ? "bg-[linear-gradient(112deg,#184aee_22.86%,#bf18f6_96.41%)] text-branco"
            : "text-texto"
        }`}
      >
        <span className="text-sm leading-[1.2] font-bold sm:text-base">Médias &amp; Grandes Empresas</span>
        <span className="text-xs leading-[1.2] font-medium sm:text-sm">
          Para operações complexas, governança e escala global.
        </span>
      </button>
    </div>
  );
}

function BillingSwitch({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (annual: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!annual)}
      className="relative flex items-center gap-5"
      aria-label="Alternar entre cobrança mensal e anual"
    >
      <span className={`text-lg font-bold leading-[1.2] ${!annual ? "text-azul-base" : "text-texto-sem-destaque"}`}>
        Mensal
      </span>
      <span className="relative flex h-[25px] w-[50px] shrink-0 items-center rounded-full border-2 border-azul-base bg-azul-base p-px">
        <span
          role="switch"
          aria-checked={annual}
          className={`block size-[19px] rounded-full bg-branco transition-transform ${
            annual ? "translate-x-[25px]" : "translate-x-0"
          }`}
        />
      </span>
      <span className={`text-lg font-bold leading-[1.2] ${annual ? "text-azul-base" : "text-texto-sem-destaque"}`}>
        Anual
      </span>
      {annual && (
        <span className="absolute top-full right-0 mt-1 whitespace-nowrap rounded border border-ecm bg-[#fefffe] p-[6px] text-xs font-bold leading-[1.2] text-ecm">
          Economize 30%
        </span>
      )}
    </button>
  );
}

function ProductIconRow({ icons }: { icons: ProductIconKey[] }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-[5px]">
      {icons.map((icon) => (
        <div key={icon} className="flex size-[30px] shrink-0 items-center justify-center rounded-[6px] bg-bg-base p-[6px]">
          <Image src={productIconPaths[icon]} alt="" aria-hidden="true" width={18} height={18} />
        </div>
      ))}
    </div>
  );
}

function FeatureMark({ item, planKey }: { item: SmallFeatureItem; planKey: SmallPlanKey }) {
  if (item.mark === "product") {
    return (
      <li className="flex items-start gap-[5px]">
        <Image src="/icons/products/capture.svg" alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
        <span className="text-sm font-medium leading-[1.2] text-swc">{item.text}</span>
      </li>
    );
  }
  if (item.mark === "cross") {
    return (
      <li className="flex items-start gap-[5px]">
        <Image src={negativeIcon} alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
        <span className="text-sm font-medium leading-[1.2] text-[#ff383c]">{item.text}</span>
      </li>
    );
  }
  return (
    <li className="flex items-start gap-[5px]">
      <Image src={smallCheckIcons[planKey]} alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
      <span className="text-sm font-medium leading-[1.2] text-texto">{item.text}</span>
    </li>
  );
}

function SmallPlanCard({ planKey, annual }: { planKey: (typeof smallPlans)[number]["key"]; annual: boolean }) {
  const plan = smallPlans.find((p) => p.key === planKey)!;
  const variant = annual ? plan.anual : plan.mensal;

  return (
    <div
      className={`relative flex h-full flex-col items-center gap-5 rounded-2xl border bg-branco px-[15px] pb-5 pt-10 ${
        plan.gradient ? "border-[#184aee]" : "border-contorno-base"
      }`}
    >
      {plan.popular && (
        <span
          className="-translate-x-1/2 absolute left-1/2 top-[-12px] whitespace-nowrap rounded-2xl px-5 py-1.5 text-sm font-bold text-branco"
          style={{ backgroundImage: "linear-gradient(112deg,#184aee 22.86%,#bf18f6 96.41%)" }}
        >
          MAIS POPULAR
        </span>
      )}
      <div className="flex w-full flex-col items-center gap-5 border-b border-contorno-base pb-5 text-center">
        <p className="text-[32px] font-extrabold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
          {plan.gradient ? (
            <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {plan.name}
            </span>
          ) : (
            plan.name
          )}
        </p>

        <div className="flex min-h-[100px] flex-col items-center justify-center gap-3">
          {variant.oldPrice && (
            <p className="text-[26px] font-bold leading-[1.2] text-texto-sem-destaque line-through">
              R${formatPrice(variant.oldPrice)}
            </p>
          )}
          <p className="text-[32px] font-extrabold leading-[1.2] text-texto">R${formatPrice(variant.price)}</p>
          <p className="text-sm font-bold leading-[1.2] text-texto">Por usuário/Mês</p>
          <p className="text-sm font-bold leading-[1.2] text-texto">{variant.billingLabel}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          <Link
            href="/comece-gratis"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-2 text-base font-bold text-branco"
            style={plan.gradient ? { backgroundImage: "linear-gradient(114deg,#184aee 22.86%,#bf18f6 96.41%)" } : { backgroundColor: plan.colorVar }}
          >
            {plan.ctaLabel}
          </Link>
          {plan.trialLabel && (
            <Link href="/comece-gratis" className="text-sm font-bold underline" style={{ color: plan.colorVar }}>
              {plan.trialLabel}
            </Link>
          )}
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-medium leading-[1.2] text-texto">Produtos inclusos no plano</p>
          <p className="text-sm font-bold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
            {plan.gradient ? (
              <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {plan.productsLabel}
              </span>
            ) : (
              plan.productsLabel
            )}
          </p>
          <ProductIconRow icons={plan.productIcons} />
        </div>
      </div>

      <ul className="flex w-full flex-1 flex-col gap-[15px]">
        {plan.features.map((item, index) => (
          <FeatureMark key={index} item={item} planKey={plan.key} />
        ))}
      </ul>
    </div>
  );
}

function LargePlanCard({ planKey, annual }: { planKey: PlanKey; annual: boolean }) {
  const plan = pricingPlans.find((p) => p.key === planKey)!;
  const isEnterprise = plan.monthlyPrice === null;
  const notIncluded = pricingNotIncluded[planKey] ?? [];

  return (
    <div className="relative flex h-full flex-col items-center gap-5 rounded-2xl border border-contorno-base bg-branco px-[15px] pb-5 pt-10">
      {plan.badge && (
        <span
          className="-translate-x-1/2 absolute left-1/2 top-[-12px] whitespace-nowrap rounded-2xl px-5 py-1.5 text-sm font-bold text-branco"
          style={{ backgroundImage: "linear-gradient(112deg,#184aee 22.86%,#bf18f6 96.41%)" }}
        >
          {plan.badge}
        </span>
      )}
      <div className="flex w-full flex-col items-center gap-5 border-b border-contorno-base pb-5 text-center">
        <p className="text-[32px] font-extrabold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
          {plan.gradient ? (
            <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {plan.name}
            </span>
          ) : (
            plan.name
          )}
        </p>

        <div className="flex min-h-[100px] flex-col items-center justify-center gap-3">
          {isEnterprise ? (
            <>
              <p className="text-[32px] font-extrabold leading-[1.2] text-texto">Consulte</p>
              <p className="text-sm font-bold leading-[1.2] text-texto">Preço personalizado</p>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center gap-[15px]">
                {annual && (
                  <p className="text-[26px] font-bold leading-[1.2] text-texto-sem-destaque line-through">
                    R${formatPrice(plan.monthlyPrice!)}
                  </p>
                )}
                <p className="text-[32px] font-extrabold leading-[1.2] text-texto">
                  R${formatPrice(annual ? plan.annualPrice! : plan.monthlyPrice!)}
                </p>
              </div>
              <p className="text-sm font-bold leading-[1.2] text-texto">Por usuário/Mês</p>
              <p className="text-sm font-bold leading-[1.2] text-texto">
                {annual ? "Cobrança anual" : "Cobrança mensal"}
              </p>
            </>
          )}
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          {isEnterprise ? (
            <Link
              href="/demo"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-2 text-base font-bold text-branco"
              style={{ backgroundImage: "linear-gradient(114deg,#184aee 22.86%,#bf18f6 96.41%)" }}
            >
              {plan.ctaLabel}
            </Link>
          ) : (
            <Link
              href="/comece-gratis"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-2 text-base font-bold text-branco"
              style={{ backgroundColor: plan.colorVar }}
            >
              {plan.ctaLabel}
            </Link>
          )}
          {plan.trialLabel &&
            (plan.trialLabelPlain ? (
              <span className="text-sm font-bold leading-[1.2]" style={{ color: plan.colorVar }}>
                {plan.trialLabel}
              </span>
            ) : (
              <Link href="/comece-gratis" className="text-sm font-bold underline" style={{ color: plan.colorVar }}>
                {plan.trialLabel}
              </Link>
            ))}
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-medium leading-[1.2] text-texto">Produtos inclusos no plano</p>
          <p className="text-base font-bold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
            {plan.gradient ? (
              <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                TODOS OS 8 PRODUTOS
              </span>
            ) : (
              "TODOS OS 8 PRODUTOS"
            )}
          </p>
          <ProductIconRow icons={plan.productIcons} />
        </div>
      </div>

      <ul className="flex w-full flex-1 flex-col gap-[15px]">
        {pricingFeatureRows.map((row, index) => {
          if (notIncluded.includes(index)) return null;

          const text = row.values[planKey];

          if (row.mark === "product") {
            return (
              <li key={index} className="flex items-start gap-[5px]">
                <Image src="/icons/products/capture.svg" alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
                <span className="text-sm font-medium leading-[1.2] text-swc">{text}</span>
              </li>
            );
          }

          return (
            <li key={index} className="flex items-start gap-[5px]">
              <Image src={largeCheckIcon} alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
              <span className="text-sm font-medium leading-[1.2] text-texto">{text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function PricingPlans() {
  const [segment, setSegment] = useState<"small" | "large">("small");
  const [annual, setAnnual] = useState(true);

  return (
    <section id="planos" aria-labelledby="pricing-plans-heading" className="flex justify-center px-5 py-10 sm:py-16">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="pricing-plans-heading" className="sr-only">
          Planos Interfy
        </h2>

        <Reveal className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
          <SegmentSwitch segment={segment} onChange={setSegment} />
          <BillingSwitch annual={annual} onChange={setAnnual} />
        </Reveal>

        {segment === "small" ? (
          <Reveal className="w-full" delayMs={120}>
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {smallPlans.map((plan) => (
                <SmallPlanCard key={plan.key} planKey={plan.key} annual={annual} />
              ))}
            </div>
          </Reveal>
        ) : (
          <>
            <Reveal className="w-full" delayMs={120}>
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {pricingPlans.map((plan) => (
                  <LargePlanCard key={plan.key} planKey={plan.key} annual={annual} />
                ))}
              </div>
            </Reveal>
            <ResourcesAccordion />
          </>
        )}
      </div>
    </section>
  );
}
