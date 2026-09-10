import type { TrustBadge } from "@/config/trust";

/** Icon order/length matches `hero.highlights` in messages/<locale>/agents.json. */
export const agentesHeroHighlights: { icon: string }[] = [
  { icon: "/icons/products/agents.svg" },
  { icon: "/icons/agentes/raio.svg" },
  { icon: "/icons/agentes/shield-check.svg" },
  { icon: "/icons/agentes/integrado-plataforma.svg" },
];

/** Icon order/length matches `capabilities.items` in messages/<locale>/agents.json. */
export const agentesCapabilities: { icon: string }[] = [
  { icon: "/icons/agentes/agentes-inteligentes.svg" },
  { icon: "/icons/agentes/criacao-agentes.svg" },
  { icon: "/icons/agentes/agentes-por-area.svg" },
  { icon: "/icons/agentes/raio.svg" },
  { icon: "/icons/agentes/leitura-documentos.svg" },
  { icon: "/icons/agentes/acionamento-processos.svg" },
  { icon: "/icons/agentes/monitoramento.svg" },
  { icon: "/icons/agentes/analise-informacoes.svg" },
  { icon: "/icons/agentes/alertas-inteligentes.svg" },
  { icon: "/icons/agentes/recomendacoes.svg" },
  { icon: "/icons/agentes/integracao-sistemas.svg" },
  { icon: "/icons/agentes/execucao-regras.svg" },
];

/** Icon/product/colorClass order/length matches `ecosystem.items` in messages/<locale>/agents.json. Product names are never translated. */
export const agentesEcosystemLinks: { icon: string; product: string; colorClass: string }[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", product: "Interfy Documents", colorClass: "text-ecm" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Interfy Process", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Interfy Capture", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Interfy Connect", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/voice.svg", product: "Interfy Voice", colorClass: "text-lvs-voice" },
];

// Gradient (from -> to) for the connector dot between each pair of ecosystem badges
export const agentesEcosystemConnectorGradients: [string, string][] = [
  ["#2FB79C", "#0781EC"],
  ["#0781EC", "#2669E6"],
  ["#2669E6", "#31C4CC"],
  ["#31C4CC", "#09A1EA"],
];

/** Icon order/length matches `highlights.credits.features` in messages/<locale>/agents.json. */
export const agentesCreditFeatures: { icon: string }[] = [
  { icon: "/icons/agentes/credits-ia.svg" },
  { icon: "/icons/agentes/credits-support.svg" },
  { icon: "/icons/agentes/credits-plus.svg" },
];

export const agentesCreditsBalance = {
  used: 65,
  value: 12480,
};

/** Icon order/length matches `cta.benefits` in messages/<locale>/agents.json. */
export const agentesBenefits: Pick<TrustBadge, "icon">[] = [
  { icon: "/icons/agentes/money.svg" },
  { icon: "/icons/agentes/raio.svg" },
  { icon: "/icons/agentes/load-check.svg" },
  { icon: "/icons/agentes/time.svg" },
  { icon: "/icons/features/escalabilidade.svg" },
];
