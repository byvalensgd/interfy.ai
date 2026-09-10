import type { HeroStat } from "@/config/hero";

/** Icons only — label/sublabel text lives in messages/<locale>/documents.json's `hero.stats`, same order. */
export const ecmHeroStatIcons: string[] = [
  "/icons/ecm/web-cloud.svg",
  "/icons/ecm/ai-native.svg",
  "/icons/ecm/shield-check-hero.svg",
];

/** Icons only — title/description text lives in messages/<locale>/documents.json's `capabilities.items`, same order. */
export const ecmCapabilityIcons: string[] = [
  "/icons/ecm/cloud-seguranca.svg",
  "/icons/ecm/pasta.svg",
  "/icons/ecm/doc-search.svg",
  "/icons/ecm/chat.svg",
  "/icons/ecm/classificacao-ai.svg",
  "/icons/ecm/screen-search.svg",
  "/icons/ecm/tag.svg",
  "/icons/ecm/load-check.svg",
  "/icons/ecm/arquivo.svg",
  "/icons/ecm/share.svg",
  "/icons/ecm/lock.svg",
  "/icons/ecm/shield-check-auditoria.svg",
  "/icons/ecm/governo.svg",
  "/icons/ecm/mobile.svg",
  "/icons/ecm/integracao-total.svg",
  "/icons/ecm/robo-agente.svg",
];

export type EcosystemLink = {
  icon: string;
  /** Product name — never translated (kept identical across locales). */
  product: string;
  colorClass: string;
};

/** Description text lives in messages/<locale>/documents.json's `ecosystem.items`, same order. */
export const ecmEcosystemLinks: EcosystemLink[] = [
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Capture", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Process", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/sign.svg", product: "Sign", colorClass: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Connect", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/agents.svg", product: "Agents", colorClass: "gradient" },
];

export type HighlightBlockMedia = {
  variant: "dark" | "light";
  image: { src: string; alt: string };
};

/** Title/description/checklist text lives in messages/<locale>/documents.json's `highlights.blocks`, same order. */
export const ecmHighlightBlocks: HighlightBlockMedia[] = [
  {
    variant: "dark",
    image: { src: "/ecm/mobile-diagonal.webp", alt: "" },
  },
  {
    variant: "light",
    image: { src: "/ecm/security-shield.mp4", alt: "" },
  },
];

/** Icons only — label/sublabel text lives in messages/<locale>/documents.json's `cta.features`, same order. */
export const ecmCtaFeatureIcons: string[] = [
  "/icons/segments/cta-web-mobile.svg",
  "/icons/agentes/shield-check.svg",
  "/icons/features/escalabilidade.svg",
  "/global/fast-support.svg",
];
