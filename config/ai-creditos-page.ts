/** Icons only — title/description text lives in messages/<locale>/ai-creditos.json's `hero.banner`, same order. */
export const aiCreditosHeroBannerItems: { icon: string; bg: string }[] = [
  { icon: "/icons/ai-creditos/bolt-simples.svg", bg: "bg-azul-base" },
  { icon: "/icons/ai-creditos/shield-transparente.svg", bg: "bg-ecm" },
  { icon: "/icons/ai-creditos/rocket-poderoso.svg", bg: "bg-[#fb5998]" },
];

/** Icon only — label text lives in messages/<locale>/ai-creditos.json's `hero.strip.items`, same order. */
export const aiCreditosStripItemIcons: string[] = [
  "/icons/ai-creditos/scale-produtividade.svg",
  "/icons/ai-creditos/brain-decisoes.svg",
  "/icons/ai-creditos/robo-trabalho-manual.svg",
  "/icons/ai-creditos/alvo-resultados.svg",
];

export type UsageItemVisual = {
  icon: string;
  /** "gradient" renders the product name with the brand gradient (Agents); otherwise a text-* color class. */
  colorClass: string;
};

/** Icon + accent color only — Documents/Process/Capture/Agents/Voice are product names and are never
 *  translated; "E muito mais" and description text live in messages/<locale>/ai-creditos.json's
 *  `usage.items`, same order. */
export const aiCreditosUsageItems: UsageItemVisual[] = [
  { icon: "/icons/products/documents.svg", colorClass: "text-ecm" },
  { icon: "/icons/products/automation.svg", colorClass: "text-bpm" },
  { icon: "/icons/products/capture.svg", colorClass: "text-swc" },
  { icon: "/icons/products/agents.svg", colorClass: "gradient" },
  { icon: "/icons/products/voice.svg", colorClass: "text-lvs-voice" },
  { icon: "/icons/segments/ia-sparkle.svg", colorClass: "text-texto" },
];

/** Icons only — title/description text lives in messages/<locale>/ai-creditos.json's `structure.items`, same order. */
export const aiCreditosStructureIcons: string[] = [
  "/icons/ai-creditos/workspace-controle.svg",
  "/icons/ai-creditos/lock-check-permissoes.svg",
  "/icons/ai-creditos/relatorio-pizza.svg",
  "/icons/ai-creditos/notification-alertas.svg",
  "/icons/ai-creditos/carrinho-compra.svg",
];

export type CreditPlanRow = {
  plan: string;
  credits: string;
  price: string;
  pricePer1000: string;
};

/** Plan names/pricing are BRL-only and not localized yet — same convention as
 *  config/swc-page.ts's swcCreditsTable (left un-i18n'd until a dedicated pricing pass). */
export const aiCreditosPlans: CreditPlanRow[] = [
  { plan: "Starter", credits: "10.000", price: "R$ 199,00", pricePer1000: "R$ 19,90" },
  { plan: "Professional", credits: "50.000", price: "R$ 799,00", pricePer1000: "R$ 15,98" },
  { plan: "Business", credits: "100.000", price: "R$ 1.499,00", pricePer1000: "R$ 14,99" },
  { plan: "Enterprise", credits: "250.000", price: "R$ 3.299,00", pricePer1000: "R$ 13,20" },
  { plan: "Corporate", credits: "500.000", price: "R$ 5.999,00", pricePer1000: "R$ 12,00" },
  { plan: "Custom", credits: "Sob demanda", price: "Fale com um especialista", pricePer1000: "—" },
];

/** Icon only — title/credits text lives in messages/<locale>/ai-creditos.json's `pricing.consumption.items`, same order. */
export const aiCreditosConsumptionIcons: string[] = [
  "/icons/ai-creditos/consumo-doc.svg",
  "/icons/ai-creditos/consumo-extracao.svg",
  "/icons/ai-creditos/consumo-classificacao.svg",
  "/icons/ai-creditos/consumo-agent.svg",
  "/icons/ai-creditos/consumo-voice.svg",
  "/icons/ai-creditos/consumo-grafico.svg",
  "/icons/ai-creditos/consumo-traducao.svg",
];
