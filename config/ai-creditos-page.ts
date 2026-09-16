/** Icons only — title/description text lives in messages/<locale>/ai-creditos.json's `hero.banner`, same order. */
export const aiCreditosHeroBannerItems: { icon: string; bg: string }[] = [
  { icon: "/icons/ai-creditos/bolt-simples.svg", bg: "bg-azul-base" },
  { icon: "/icons/ai-creditos/shield-transparente.svg", bg: "bg-ecm" },
  { icon: "/icons/ai-creditos/rocket-poderoso.svg", bg: "bg-[#fb5998]" },
];

/** Icon only — label text lives in messages/<locale>/ai-creditos.json's `hero.strip.items`, same
 *  order. White fill, made for the dark navy strip background (desktop row). */
export const aiCreditosStripItemIcons: string[] = [
  "/icons/ai-creditos/scale-produtividade.svg",
  "/icons/ai-creditos/brain-decisoes.svg",
  "/icons/ai-creditos/robo-trabalho-manual.svg",
  "/icons/ai-creditos/alvo-resultados.svg",
];

/** Same icons, recolored blue (#015bf7) — the "Blocos Mobile" cards below lg are white, so the
 *  navy-strip white-fill icons above would be invisible on them. */
export const aiCreditosStripItemIconsBlue: string[] = [
  "/icons/ai-creditos/scale-produtividade-blue.svg",
  "/icons/ai-creditos/brain-decisoes-blue.svg",
  "/icons/ai-creditos/robo-trabalho-manual-blue.svg",
  "/icons/ai-creditos/alvo-resultados-blue.svg",
];

export type UsageItemVisual = {
  icon: string;
  /** "gradient" renders the product name with the brand gradient (Agents); otherwise a text-* color class. */
  colorClass: string;
};

/** Icon + accent color only — Documents/Process/Capture/Agents/Voice are product names and are never
 *  translated; "E muito mais" and description text live in messages/<locale>/ai-creditos.json's
 *  `usage.items`, same order. Icons are page-local recolors of /icons/products/*.svg (that shared
 *  set is hardcoded blue, not currentColor-based, and is reused elsewhere in blue on purpose) so
 *  each one carries its own product's brand color/gradient here instead. */
export const aiCreditosUsageItems: UsageItemVisual[] = [
  { icon: "/icons/ai-creditos/usage-documents.svg", colorClass: "text-ecm" },
  { icon: "/icons/ai-creditos/usage-process.svg", colorClass: "text-bpm" },
  { icon: "/icons/ai-creditos/usage-capture.svg", colorClass: "text-swc" },
  { icon: "/icons/ai-creditos/usage-agents.svg", colorClass: "gradient" },
  { icon: "/icons/ai-creditos/usage-voice.svg", colorClass: "text-lvs-voice" },
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

/** BRL pricing (Figma's "REAL" table variant) — pt only. Plan names are universal/untranslated;
 *  the Custom row's credits/price cells are overridden with localized text in the component
 *  (pricing.table.customCredits/customPrice) instead of being baked in here. */
export const aiCreditosPlansBRL: CreditPlanRow[] = [
  { plan: "Starter", credits: "10.000", price: "R$ 199,00", pricePer1000: "R$ 19,90" },
  { plan: "Professional", credits: "50.000", price: "R$ 799,00", pricePer1000: "R$ 15,98" },
  { plan: "Business", credits: "100.000", price: "R$ 1.499,00", pricePer1000: "R$ 14,99" },
  { plan: "Enterprise", credits: "250.000", price: "R$ 3.299,00", pricePer1000: "R$ 13,20" },
  { plan: "Corporate", credits: "500.000", price: "R$ 5.999,00", pricePer1000: "R$ 12,00" },
  { plan: "Custom", credits: "", price: "", pricePer1000: "—" },
];

/** USD pricing (Figma's "DOLAR" table variant, node 5470:31941) — every locale except pt. */
export const aiCreditosPlansUSD: CreditPlanRow[] = [
  { plan: "Starter", credits: "10.000", price: "US$ 49.00", pricePer1000: "US$ 4.90" },
  { plan: "Professional", credits: "50.000", price: "US$ 189.00", pricePer1000: "US$ 3.78" },
  { plan: "Business", credits: "100.000", price: "US$ 329.00", pricePer1000: "US$ 3.29" },
  { plan: "Enterprise", credits: "250.000", price: "US$ 699.00", pricePer1000: "US$ 2.80" },
  { plan: "Corporate", credits: "500.000", price: "US$ 1.199", pricePer1000: "US$ 2.40" },
  { plan: "Custom", credits: "", price: "", pricePer1000: "—" },
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
