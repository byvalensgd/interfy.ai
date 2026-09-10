"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import ResourcesAccordion from "@/components/sections/ResourcesAccordion";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";
import {
  pricingFeatureRows,
  pricingNotIncluded,
  pricingPlans,
  productIconPaths,
  smallPlans,
  type PlanKey,
  type ProductIconKey,
  type SmallFeatureMark,
  type SmallPlanKey,
} from "@/config/pricing";

type PlansSectionDict = {
  heading: string;
  segmentSmallTitle: string;
  segmentSmallDesc: string;
  segmentLargeTitle: string;
  segmentLargeDesc: string;
  billingAriaLabel: string;
  billingMonthly: string;
  billingAnnual: string;
  billingSaveBadge: string;
  billingAnnualLabel: string;
  billingMonthlyLabel: string;
  perUserMonth: string;
  productsIncludedLabel: string;
  allProductsLabel: string;
  enterprisePriceLabel: string;
  enterprisePriceSub: string;
  popularBadge: string;
};

type SmallPlanDict = {
  name: string;
  ctaLabel: string;
  trialLabel?: string;
  productsLabel: string;
  features: string[];
};

type LargePlanDict = {
  name: string;
  ctaLabel: string;
  trialLabel?: string;
  badge?: string;
};

type FeatureRowDict = Record<PlanKey, string>;

type ResourceSectionDict = { label: string; features: string[] };
type ResourcesDict = { toggleLabel: string; sections: ResourceSectionDict[] };

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
  dict,
}: {
  segment: "small" | "large";
  onChange: (segment: "small" | "large") => void;
  dict: PlansSectionDict;
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
        <span className="text-sm leading-[1.2] font-bold sm:text-base">{dict.segmentSmallTitle}</span>
        <span className="text-xs leading-[1.2] font-medium sm:text-sm">{dict.segmentSmallDesc}</span>
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
        <span className="text-sm leading-[1.2] font-bold sm:text-base">{dict.segmentLargeTitle}</span>
        <span className="text-xs leading-[1.2] font-medium sm:text-sm">{dict.segmentLargeDesc}</span>
      </button>
    </div>
  );
}

function BillingSwitch({
  annual,
  onChange,
  dict,
}: {
  annual: boolean;
  onChange: (annual: boolean) => void;
  dict: PlansSectionDict;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!annual)}
      className="relative flex items-center gap-5"
      aria-label={dict.billingAriaLabel}
    >
      <span className={`text-lg font-bold leading-[1.2] ${!annual ? "text-azul-base" : "text-texto-sem-destaque"}`}>
        {dict.billingMonthly}
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
        {dict.billingAnnual}
      </span>
      {annual && (
        <span className="absolute top-full right-0 mt-1 whitespace-nowrap rounded border border-ecm bg-[#fefffe] p-[6px] text-xs font-bold leading-[1.2] text-ecm">
          {dict.billingSaveBadge}
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

function FeatureMark({ mark, text, planKey }: { mark: SmallFeatureMark; text: string; planKey: SmallPlanKey }) {
  if (mark === "product") {
    return (
      <li className="flex items-start gap-[5px]">
        <Image src="/icons/products/capture.svg" alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
        <span className="text-sm font-medium leading-[1.2] text-swc">{text}</span>
      </li>
    );
  }
  if (mark === "cross") {
    return (
      <li className="flex items-start gap-[5px]">
        <Image src={negativeIcon} alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
        <span className="text-sm font-medium leading-[1.2] text-[#ff383c]">{text}</span>
      </li>
    );
  }
  return (
    <li className="flex items-start gap-[5px]">
      <Image src={smallCheckIcons[planKey]} alt="" aria-hidden="true" width={14} height={14} className="shrink-0" />
      <span className="text-sm font-medium leading-[1.2] text-texto">{text}</span>
    </li>
  );
}

function SmallPlanCard({
  planKey,
  annual,
  dict,
  sectionDict,
  locale,
}: {
  planKey: (typeof smallPlans)[number]["key"];
  annual: boolean;
  dict: SmallPlanDict;
  sectionDict: PlansSectionDict;
  locale: Locale;
}) {
  const plan = smallPlans.find((p) => p.key === planKey)!;
  const variant = annual ? plan.anual : plan.mensal;
  const billingLabel = annual ? sectionDict.billingAnnualLabel : sectionDict.billingMonthlyLabel;

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
          {sectionDict.popularBadge}
        </span>
      )}
      <div className="flex w-full flex-col items-center gap-5 border-b border-contorno-base pb-5 text-center">
        <p className="text-[32px] font-extrabold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
          {plan.gradient ? (
            <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {dict.name}
            </span>
          ) : (
            dict.name
          )}
        </p>

        <div className="flex min-h-[100px] flex-col items-center justify-center gap-3">
          {variant.oldPrice && (
            <p className="text-[26px] font-bold leading-[1.2] text-texto-sem-destaque line-through">
              R${formatPrice(variant.oldPrice)}
            </p>
          )}
          <p className="text-[32px] font-extrabold leading-[1.2] text-texto">R${formatPrice(variant.price)}</p>
          <p className="text-sm font-bold leading-[1.2] text-texto">{sectionDict.perUserMonth}</p>
          <p className="text-sm font-bold leading-[1.2] text-texto">{billingLabel}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          <Link
            href={withLocale("/comece-gratis", locale)}
            className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-2 text-base font-bold text-branco"
            style={plan.gradient ? { backgroundImage: "linear-gradient(114deg,#184aee 22.86%,#bf18f6 96.41%)" } : { backgroundColor: plan.colorVar }}
          >
            {dict.ctaLabel}
          </Link>
          {dict.trialLabel ? (
            <Link href={withLocale("/comece-gratis", locale)} className="text-sm font-bold underline" style={{ color: plan.colorVar }}>
              {dict.trialLabel}
            </Link>
          ) : (
            <span aria-hidden="true" className="invisible text-sm font-bold leading-[1.2]">
              &nbsp;
            </span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-medium leading-[1.2] text-texto">{sectionDict.productsIncludedLabel}</p>
          <p className="text-sm font-bold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
            {plan.gradient ? (
              <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {dict.productsLabel}
              </span>
            ) : (
              dict.productsLabel
            )}
          </p>
          <ProductIconRow icons={plan.productIcons} />
        </div>
      </div>

      <ul className="flex w-full flex-1 flex-col gap-[15px]">
        {plan.featureMarks.map((mark, index) => (
          <FeatureMark key={index} mark={mark} text={dict.features[index]} planKey={plan.key} />
        ))}
      </ul>
    </div>
  );
}

function LargePlanCard({
  planKey,
  annual,
  dict,
  sectionDict,
  featureRows,
  locale,
}: {
  planKey: PlanKey;
  annual: boolean;
  dict: LargePlanDict;
  sectionDict: PlansSectionDict;
  featureRows: FeatureRowDict[];
  locale: Locale;
}) {
  const plan = pricingPlans.find((p) => p.key === planKey)!;
  const isEnterprise = plan.monthlyPrice === null;
  const notIncluded = pricingNotIncluded[planKey] ?? [];

  return (
    <div className="relative flex h-full flex-col items-center gap-5 rounded-2xl border border-contorno-base bg-branco px-[15px] pb-5 pt-10">
      {plan.hasBadge && dict.badge && (
        <span
          className="-translate-x-1/2 absolute left-1/2 top-[-12px] whitespace-nowrap rounded-2xl px-5 py-1.5 text-sm font-bold text-branco"
          style={{ backgroundImage: "linear-gradient(112deg,#184aee 22.86%,#bf18f6 96.41%)" }}
        >
          {dict.badge}
        </span>
      )}
      <div className="flex w-full flex-col items-center gap-5 border-b border-contorno-base pb-5 text-center">
        <p className="text-[32px] font-extrabold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
          {plan.gradient ? (
            <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
              {dict.name}
            </span>
          ) : (
            dict.name
          )}
        </p>

        <div className="flex min-h-[100px] flex-col items-center justify-center gap-3">
          {isEnterprise ? (
            <>
              <p className="text-[32px] font-extrabold leading-[1.2] text-texto">{sectionDict.enterprisePriceLabel}</p>
              <p className="text-sm font-bold leading-[1.2] text-texto">{sectionDict.enterprisePriceSub}</p>
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
              <p className="text-sm font-bold leading-[1.2] text-texto">{sectionDict.perUserMonth}</p>
              <p className="text-sm font-bold leading-[1.2] text-texto">
                {annual ? sectionDict.billingAnnualLabel : sectionDict.billingMonthlyLabel}
              </p>
            </>
          )}
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          {isEnterprise ? (
            <Link
              href={withLocale("/demo", locale)}
              className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-2 text-base font-bold text-branco"
              style={{ backgroundImage: "linear-gradient(114deg,#184aee 22.86%,#bf18f6 96.41%)" }}
            >
              {dict.ctaLabel}
            </Link>
          ) : (
            <Link
              href={withLocale("/comece-gratis", locale)}
              className="inline-flex shrink-0 items-center justify-center rounded-2xl px-5 py-2 text-base font-bold text-branco"
              style={{ backgroundColor: plan.colorVar }}
            >
              {dict.ctaLabel}
            </Link>
          )}
          {dict.trialLabel &&
            (plan.trialLabelPlain ? (
              <span className="text-sm font-bold leading-[1.2]" style={{ color: plan.colorVar }}>
                {dict.trialLabel}
              </span>
            ) : (
              <Link href={withLocale("/comece-gratis", locale)} className="text-sm font-bold underline" style={{ color: plan.colorVar }}>
                {dict.trialLabel}
              </Link>
            ))}
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <p className="text-sm font-medium leading-[1.2] text-texto">{sectionDict.productsIncludedLabel}</p>
          <p className="text-base font-bold leading-[1.2]" style={plan.gradient ? undefined : { color: plan.colorVar }}>
            {plan.gradient ? (
              <span className="inline-block bg-[linear-gradient(130deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent">
                {sectionDict.allProductsLabel}
              </span>
            ) : (
              sectionDict.allProductsLabel
            )}
          </p>
          <ProductIconRow icons={plan.productIcons} />
        </div>
      </div>

      <ul className="flex w-full flex-1 flex-col gap-[15px]">
        {pricingFeatureRows.map((row, index) => {
          if (notIncluded.includes(index)) return null;

          const text = featureRows[index][planKey];

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

// Reads the `billing` query param in its own Suspense boundary (required by
// Next.js for useSearchParams) so the rest of PricingPlans keeps rendering
// statically instead of the whole section bailing out to CSR.
function BillingParamSync({ onChange }: { onChange: (billing: string | null) => void }) {
  const billingParam = useSearchParams().get("billing");
  const [synced, setSynced] = useState(billingParam);
  if (billingParam !== synced) {
    setSynced(billingParam);
    onChange(billingParam);
  }
  return null;
}

export default function PricingPlans({
  pricing,
  smallPlans: smallPlanDicts,
  largePlans: largePlanDicts,
  featureRows,
  resources,
  locale,
}: {
  pricing: PlansSectionDict;
  smallPlans: SmallPlanDict[];
  largePlans: LargePlanDict[];
  featureRows: FeatureRowDict[];
  resources: ResourcesDict;
  locale: Locale;
}) {
  const [segment, setSegment] = useState<"small" | "large">("small");
  const [annual, setAnnual] = useState(true);

  return (
    <section id="planos" aria-labelledby="pricing-plans-heading" className="flex justify-center px-5 py-10 sm:py-16">
      {/* The hero's "Mensal"/"Anual" buttons link here with a `billing` query
          param so they switch this section's toggle to match, instead of
          only scrolling to it. */}
      <Suspense fallback={null}>
        <BillingParamSync
          onChange={(billingParam) => {
            if (billingParam === "mensal") setAnnual(false);
            else if (billingParam === "anual") setAnnual(true);
          }}
        />
      </Suspense>

      <div className="flex w-full max-w-[1400px] flex-col items-center gap-10">
        <h2 id="pricing-plans-heading" className="sr-only">
          {pricing.heading}
        </h2>

        <Reveal className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
          <SegmentSwitch segment={segment} onChange={setSegment} dict={pricing} />
          <BillingSwitch annual={annual} onChange={setAnnual} dict={pricing} />
        </Reveal>

        {segment === "small" ? (
          <Reveal className="w-full" delayMs={120}>
            <div className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
              {smallPlans.map((plan, index) => (
                <div key={plan.key} className="w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink">
                  <SmallPlanCard
                    planKey={plan.key}
                    annual={annual}
                    dict={smallPlanDicts[index]}
                    sectionDict={pricing}
                    locale={locale}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <>
            <Reveal className="w-full" delayMs={120}>
              <div className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
                {pricingPlans.map((plan, index) => (
                  <div key={plan.key} className="w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink">
                    <LargePlanCard
                      planKey={plan.key}
                      annual={annual}
                      dict={largePlanDicts[index]}
                      sectionDict={pricing}
                      featureRows={featureRows}
                      locale={locale}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            <ResourcesAccordion resources={resources} />
          </>
        )}
      </div>
    </section>
  );
}
