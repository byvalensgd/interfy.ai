/** Icon order/length matches messages/<locale>/cases.json's `hero.badges` array. */
export const casesHeroBadgeIcons: string[] = ["/icons/cases/parceiro.svg", "/icons/cases/scale.svg"];

/** Order matches messages/<locale>/cases.json's `grid.items` array. */
export const casesSegmentIcons: string[] = [
  "/icons/segments/recursos-humanos.svg",
  "/icons/segments/financeiro.svg",
  "/icons/segments/financeiro.svg",
  "/icons/segments/financeiro.svg",
  "/icons/segments/saude.svg",
  "/icons/segments/logistica.svg",
  "/icons/segments/varejo.svg",
  "/icons/segments/educacao.svg",
  "/icons/segments/governo.svg",
  "/icons/segments/industria.svg",
  "/icons/segments/saude.svg",
  "/icons/segments/juridico.svg",
  "/icons/segments/agronegocio.svg",
];

/** Client logo per case, same order as `casesSegmentIcons` — downloaded from
 * the Figma "SUCESS CASE" instances (one real logo asset per client). */
export const casesClientLogos: string[] = [
  "/images/cases/logo-afpesp.svg",
  "/images/cases/logo-sicoob.svg",
  "/images/cases/logo-rendimento.svg",
  "/images/cases/logo-sicredi.svg",
  "/images/cases/logo-hospital-de-amor.svg",
  "/images/cases/logo-rede-dom-pedro.svg",
  "/images/cases/logo-grupo-cacula.svg",
  "/images/cases/logo-faculdade-novoeste.svg",
  "/images/cases/logo-governador-valadares.svg",
  "/images/cases/logo-brazilian-nickel.svg",
  "/images/cases/logo-hospital-sao-camilo.svg",
  "/images/cases/logo-portes-marinho.svg",
  "/images/cases/logo-granosul.svg",
];

/** lucide-react icon names, two per case (challenge-result pair), same order/length as `casesSegmentIcons`. */
export const casesResultIcons: [string, string][] = [
  ["Zap", "Users"],
  ["Zap", "ShieldCheck"],
  ["TrendingUp", "Zap"],
  ["Zap", "TrendingUp"],
  ["DollarSign", "Maximize2"],
  ["Wallet", "Search"],
  ["Zap", "CheckCircle2"],
  ["ShieldCheck", "Zap"],
  ["Zap", "DollarSign"],
  ["TrendingDown", "ShieldCheck"],
  ["Eye", "Settings"],
  ["Search", "Zap"],
  ["Target", "DollarSign"],
];
