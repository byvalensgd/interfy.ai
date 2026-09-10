export type PricingHighlight = {
  icon: "trial" | "sign" | "device" | "ai";
};

/** Label text lives at messages/<locale>/pricing.json under `hero.highlights`, same index order. */
export const pricingHighlights: PricingHighlight[] = [
  { icon: "trial" },
  { icon: "sign" },
  { icon: "device" },
  { icon: "ai" },
];

export type PricingProductBadge = {
  icon: string;
  label: string;
};

// Product names (Documents/Process/Capture/Sign/Connect/Mobile/Agents/Voice) are never translated.
export const pricingProductBadges: PricingProductBadge[] = [
  { icon: "/icons/products/documents.svg", label: "Documents" },
  { icon: "/icons/products/automation.svg", label: "Process" },
  { icon: "/icons/products/capture.svg", label: "Capture" },
  { icon: "/icons/products/sign.svg", label: "Sign" },
  { icon: "/icons/products/connect.svg", label: "Connect" },
  { icon: "/icons/products/mobile.svg", label: "Mobile" },
  { icon: "/icons/products/agents.svg", label: "Agents" },
  { icon: "/icons/products/voice.svg", label: "Voice" },
];

export type ProductIconKey =
  | "documents"
  | "automation"
  | "capture"
  | "sign"
  | "connect"
  | "mobile"
  | "agents"
  | "voice";

export const productIconPaths: Record<ProductIconKey, string> = {
  documents: "/icons/pricing/products/documents.svg",
  automation: "/icons/pricing/products/automation.svg",
  capture: "/icons/pricing/products/capture.svg",
  sign: "/icons/pricing/products/sign.svg",
  connect: "/icons/pricing/products/connect.svg",
  mobile: "/icons/pricing/products/mobile.svg",
  agents: "/icons/pricing/products/agents.svg",
  voice: "/icons/pricing/products/voice.svg",
};

const allProductIcons: ProductIconKey[] = [
  "documents",
  "automation",
  "capture",
  "sign",
  "connect",
  "mobile",
  "agents",
  "voice",
];

export type PlanKey = "starter" | "business" | "corporate" | "enterprise";

export type PricingPlan = {
  key: PlanKey;
  colorVar: string;
  gradient?: boolean;
  hasBadge?: boolean;
  monthlyPrice: number | null;
  annualPrice: number | null;
  hasTrialLabel?: boolean;
  trialLabelPlain?: boolean;
  productIcons: ProductIconKey[];
};

/** Name, ctaLabel, trialLabel, badge text live at messages/<locale>/pricing.json's `largePlans`, same index order. */
export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    colorVar: "var(--color-starter)",
    monthlyPrice: 195,
    annualPrice: 120,
    hasTrialLabel: true,
    productIcons: allProductIcons,
  },
  {
    key: "business",
    colorVar: "var(--color-business)",
    monthlyPrice: 250,
    annualPrice: 175,
    hasTrialLabel: true,
    productIcons: allProductIcons,
  },
  {
    key: "corporate",
    colorVar: "var(--color-corporate)",
    monthlyPrice: 300,
    annualPrice: 210,
    hasTrialLabel: true,
    productIcons: allProductIcons,
  },
  {
    key: "enterprise",
    colorVar: "var(--color-enterprise)",
    gradient: true,
    hasBadge: true,
    monthlyPrice: null,
    annualPrice: null,
    hasTrialLabel: true,
    trialLabelPlain: true,
    productIcons: allProductIcons,
  },
];

export type PlanFeatureMark = "check" | "cross" | "product";

export type PlanFeatureRow = {
  mark: PlanFeatureMark;
};

/** Text values live at messages/<locale>/pricing.json's `featureRows`, same index order, keyed by PlanKey. */
export const pricingFeatureRows: PlanFeatureRow[] = [
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "product" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
  { mark: "check" },
];

// Row indexes (0-based) that are not included, and therefore hidden, for a given plan.
export const pricingNotIncluded: Partial<Record<PlanKey, number[]>> = {
  starter: [19],
  business: [19],
};

export type SmallPlanKey = "free" | "individual" | "teams" | "startup";

export type ComparisonRow = {
  icon: string;
};

/** label + values live at messages/<locale>/pricing.json's `comparison.rows`, same index order, keyed by SmallPlanKey. */
export const pricingComparisonRows: ComparisonRow[] = [
  { icon: "users" },
  { icon: "workspace" },
  { icon: "storage" },
  { icon: "sign" },
  { icon: "mobile" },
  { icon: "modules" },
  { icon: "ai" },
  { icon: "credits" },
  { icon: "support" },
];

export type SmallFeatureMark = "check" | "cross" | "product";

export type SmallPlanVariant = {
  price: number;
  oldPrice?: number;
};

export type SmallPlan = {
  key: SmallPlanKey;
  colorVar: string;
  gradient?: boolean;
  popular?: boolean;
  hasTrialLabel?: boolean;
  productIcons: ProductIconKey[];
  // The Mensal/Anual switch only changes how the price is displayed — the feature list is shared.
  featureMarks: SmallFeatureMark[];
  anual: SmallPlanVariant;
  mensal: SmallPlanVariant;
};

/** Name, ctaLabel, trialLabel, productsLabel, features[].text live at messages/<locale>/pricing.json's `smallPlans`, same index order. */
export const smallPlans: SmallPlan[] = [
  {
    key: "free",
    colorVar: "var(--color-ecm)",
    productIcons: ["documents", "sign", "mobile"],
    featureMarks: ["check", "check", "check", "check"],
    anual: { price: 0 },
    mensal: { price: 0 },
  },
  {
    key: "individual",
    colorVar: "var(--color-business)",
    hasTrialLabel: true,
    productIcons: ["documents", "sign", "connect", "mobile"],
    featureMarks: ["check", "check", "check", "check", "check", "check", "check"],
    anual: { price: 50, oldPrice: 71.5 },
    mensal: { price: 71.5 },
  },
  {
    key: "teams",
    colorVar: "var(--color-corporate)",
    hasTrialLabel: true,
    productIcons: ["documents", "capture", "sign", "connect", "mobile"],
    featureMarks: ["check", "check", "check", "product", "check", "check", "check", "check", "check"],
    anual: { price: 68.25, oldPrice: 97.5 },
    mensal: { price: 97.5 },
  },
  {
    key: "startup",
    colorVar: "var(--color-enterprise)",
    gradient: true,
    popular: true,
    hasTrialLabel: true,
    productIcons: allProductIcons,
    featureMarks: ["check", "check", "check", "product", "check", "check", "check", "check", "check", "check"],
    anual: { price: 120, oldPrice: 171 },
    mensal: { price: 171 },
  },
];

export type ResourceSection = {
  key: "processos" | "documentos";
};

/** label + features[] live at messages/<locale>/pricing.json's `resources.sections`, same index order. */
export const resourceSections: ResourceSection[] = [{ key: "processos" }, { key: "documentos" }];
