export type HeroHighlight = {
  icon: string;
};

/** Length/order matches messages/<locale>/connect.json's `hero.highlights`. */
export const connectHeroHighlights: HeroHighlight[] = [
  { icon: "/icons/connect/chat.svg" },
  { icon: "/icons/connect/link.svg" },
  { icon: "/icons/connect/shield-check.svg" },
  { icon: "/icons/connect/mail.svg" },
];

export type CapabilityCard = {
  icon: string;
};

/** Length/order matches messages/<locale>/connect.json's `capabilities.items`. */
export const connectCapabilities: CapabilityCard[] = [
  { icon: "/icons/connect/capabilities/comunicacao-interna.svg" },
  { icon: "/icons/connect/capabilities/compartilhamento-inteligente.svg" },
  { icon: "/icons/connect/capabilities/notificacao-tempo-real.svg" },
  { icon: "/icons/connect/capabilities/usuarios-internos-externos.svg" },
  { icon: "/icons/connect/capabilities/historico-completo.svg" },
  { icon: "/icons/connect/capabilities/rastreabilidade-total.svg" },
  { icon: "/icons/connect/capabilities/colaboracao-equipes.svg" },
  { icon: "/icons/connect/capabilities/ai-resumir-conversas.svg" },
  { icon: "/icons/connect/capabilities/ai-localizar-informacoes.svg" },
  { icon: "/icons/connect/capabilities/mobile-completo.svg" },
];

export type EcosystemLink = {
  icon: string;
  product: string;
  colorClass?: string;
  gradient?: boolean;
};

/** `product` is a product name, never translated. Description text lives in
 * messages/<locale>/connect.json's `ecosystem.items`, matched by index. */
export const connectEcosystemLinks: EcosystemLink[] = [
  {
    icon: "/icons/ecosystem-grid/documents.svg",
    product: "Documents",
    colorClass: "text-ecm",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    product: "Process",
    colorClass: "text-bpm",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    product: "Connect",
    colorClass: "text-cic",
  },
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    product: "Capture",
    colorClass: "text-swc",
  },
  {
    icon: "/icons/ecosystem-grid/sign.svg",
    product: "Sign",
    colorClass: "text-dss",
  },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    product: "Agents",
    gradient: true,
  },
];

export type ProductivityItem = {
  icon: string;
};

/** Length/order matches messages/<locale>/connect.json's `productivity.items`. */
export const connectProductivityItems: ProductivityItem[] = [
  { icon: "/icons/connect/productivity/mais-agilidade.svg" },
  { icon: "/icons/connect/productivity/menos-retrabalho.svg" },
  { icon: "/icons/connect/productivity/mais-visibilidade.svg" },
  { icon: "/icons/connect/productivity/mais-seguranca.svg" },
];
