/** Icon order/length matches messages/<locale>/voice.json's `hero.highlights`. */
export const voiceHeroHighlights: { icon: string }[] = [
  { icon: "/icons/voice/hero-fale-naturalmente.svg" },
  { icon: "/icons/voice/hero-ia-entende.svg" },
  { icon: "/icons/voice/hero-seguro.svg" },
  { icon: "/icons/voice/hero-disponivel.svg" },
];

export type VoicePlatformCard = {
  icon: string;
};

/** Length/order matches messages/<locale>/voice.json's `hero.platformCards`. */
export const voicePlatformCards: VoicePlatformCard[] = [
  { icon: "/icons/voice/banner-desktop.svg" },
  { icon: "/icons/voice/banner-mobile.svg" },
  { icon: "/icons/voice/banner-seguranca.svg" },
];

/** Length/order matches messages/<locale>/voice.json's `capabilities.items`. */
export const voiceCapabilities: { icon: string }[] = [
  { icon: "/icons/voice/interacao-por-voz.svg" },
  { icon: "/icons/voice/linguagem-natural.svg" },
  { icon: "/icons/voice/busca-por-voz.svg" },
  { icon: "/icons/voice/criacao-processos.svg" },
  { icon: "/icons/voice/criacao-formularios.svg" },
  { icon: "/icons/voice/consulta-documentos.svg" },
  { icon: "/icons/voice/geracao-relatorios.svg" },
  { icon: "/icons/voice/acionamento-agents.svg" },
  { icon: "/icons/voice/comandos-operacionais.svg" },
  { icon: "/icons/voice/confirmacao-acoes.svg" },
];

/** Icon/product/colorClass order/length matches messages/<locale>/voice.json's
 * `ecosystem.items`. Product names are never translated. Voice is last and
 * highlighted (own product), matching the Figma design. */
export const voiceEcosystemLinks: { icon: string; product: string; colorClass?: string; gradient?: boolean; highlight?: boolean }[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", product: "Documents", colorClass: "text-ecm" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Process", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Capture", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/sign.svg", product: "Sign", colorClass: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Connect", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/agents.svg", product: "Agents", gradient: true },
  { icon: "/icons/ecosystem-grid/voice.svg", product: "Voice", colorClass: "text-lvs-voice", highlight: true },
];

/** Same balance figures used by config/agentes.ts's credits gauge, reused
 * intentionally — the AI Credits system is shared across products. */
export const voiceCreditsBalance = {
  used: 65,
  value: 12480,
};

/** Icon order/length matches messages/<locale>/voice.json's `highlights.credits.features`. */
export const voiceCreditFeatures: { icon: string }[] = [
  { icon: "/icons/agentes/credits-ia.svg" },
  { icon: "/icons/agentes/credits-support.svg" },
  { icon: "/icons/agentes/credits-plus.svg" },
];

/** Icon order/length matches messages/<locale>/voice.json's `cta.stats`. */
export const voiceCtaStatIcons: string[] = [
  "/icons/stats2/documentos.svg",
  "/icons/stats2/assinaturas.svg",
  "/icons/stats2/usuarios.svg",
  "/icons/stats2/processos.svg",
  "/icons/stats2/armazenados.svg",
  "/icons/stats2/uptime.svg",
  "/icons/stats2/suporte.svg",
];
