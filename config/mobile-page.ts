export const mobileAppStoreUrl = "https://apps.apple.com/br/app/interfy-mobile/id6754180801";
export const mobileGooglePlayUrl =
  "https://play.google.com/store/apps/details?id=com.interfy.mobile&pcampaignid=web_share";

export type HeroHighlight = {
  icon: string;
};

/** Length/order matches messages/<locale>/mobile.json's `hero.highlights`. */
export const mobileHeroHighlights: HeroHighlight[] = [
  { icon: "/icons/mobile/hero/shield-check.svg" },
  { icon: "/icons/mobile/hero/cloud.svg" },
  { icon: "/icons/mobile/hero/notification.svg" },
  { icon: "/icons/mobile/hero/lock-check.svg" },
];

export type HeroFloatingCard = {
  icon: string;
  bgClass: string;
};

/** Length/order matches messages/<locale>/mobile.json's `hero.floatingCards`. */
export const mobileHeroFloatingCards: HeroFloatingCard[] = [
  { icon: "/icons/mobile/hero/send-message.svg", bgClass: "bg-azul-base" },
  { icon: "/icons/mobile/hero/lightning.svg", bgClass: "bg-ecm" },
  { icon: "/icons/mobile/hero/heart.svg", bgClass: "bg-[#fb5998]" },
];

export type EcosystemLink = {
  icon: string;
  product: string;
  colorClass?: string;
  gradient?: boolean;
};

/** `product` is a product name, never translated. Description text lives in
 * messages/<locale>/mobile.json's `ecosystem.items`, matched by index. */
export const mobileEcosystemLinks: EcosystemLink[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", product: "Documents", colorClass: "text-ecm" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Process", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Capture", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/sign.svg", product: "Sign", colorClass: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Connect", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/agents.svg", product: "Agents", gradient: true },
  { icon: "/icons/ecosystem-grid/voice.svg", product: "Voice", colorClass: "text-lvs-voice" },
];

export type CapabilityCard = {
  icon: string;
};

/** Length/order matches messages/<locale>/mobile.json's `capabilities.items`. */
export const mobileCapabilities: CapabilityCard[] = [
  { icon: "/icons/mobile/capabilities/aprovacoes.svg" },
  { icon: "/icons/mobile/capabilities/tarefas.svg" },
  { icon: "/icons/mobile/capabilities/notificacoes.svg" },
  { icon: "/icons/mobile/capabilities/dashboards.svg" },
  { icon: "/icons/mobile/capabilities/captura-camera.svg" },
  { icon: "/icons/mobile/capabilities/consultas.svg" },
  { icon: "/icons/mobile/capabilities/pesquisa-inteligente.svg" },
  { icon: "/icons/mobile/capabilities/historico-completo.svg" },
  { icon: "/icons/mobile/capabilities/sincronizacao.svg" },
  { icon: "/icons/mobile/capabilities/modo-offline.svg" },
  { icon: "/icons/mobile/capabilities/multiempresas.svg" },
  { icon: "/icons/mobile/capabilities/interface-intuitiva.svg" },
];

export type SecurityItem = {
  icon: string;
};

/** Length/order matches messages/<locale>/mobile.json's `security.items`. */
export const mobileSecurityItems: SecurityItem[] = [
  { icon: "/icons/mobile/security/criptografia.svg" },
  { icon: "/icons/mobile/security/mfa.svg" },
  { icon: "/icons/mobile/security/conformidade.svg" },
  { icon: "/icons/mobile/security/controle-acesso.svg" },
  { icon: "/icons/mobile/security/backup-nuvem.svg" },
];
