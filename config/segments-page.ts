/** Icon-only data for the segments page (and pages that reuse the same
 *  icon sets, e.g. BpmHighlights.tsx reuses `platformHighlights`). Text
 *  (labels/descriptions) lives in messages/<locale>/segments.json (or the
 *  reusing page's own namespace), paired with these arrays by index —
 *  same pattern as config/footer.ts + messages/<locale>/footer.json. */

export type IconEntry = { icon: string };

export const segmentsHeroStats: IconEntry[] = [
  { icon: "/icons/stats/paises.svg" },
  { icon: "/icons/stats/idiomas.svg" },
  { icon: "/icons/stats/seguranca.svg" },
  { icon: "/icons/stats/ai-native.svg" },
  { icon: "/icons/stats/mobile.svg" },
  { icon: "/icons/stats/disponibilidade.svg" },
  { icon: "/icons/stats/conformidade.svg" },
];

export const platformHighlights: IconEntry[] = [
  { icon: "/icons/segments/highlight-platform.svg" },
  { icon: "/icons/segments/highlight-adaptable.svg" },
  { icon: "/icons/segments/highlight-fast.svg" },
  { icon: "/icons/segments/highlight-security.svg" },
  { icon: "/icons/segments/highlight-ai.svg" },
];

export const trustStats: IconEntry[] = [
  { icon: "/icons/segments/trust-segments.svg" },
  { icon: "/icons/segments/trust-users.svg" },
  { icon: "/icons/segments/trust-regions.svg" },
  { icon: "/icons/segments/trust-documents.svg" },
  { icon: "/icons/segments/trust-processes.svg" },
  { icon: "/icons/segments/trust-uptime.svg" },
];

export type PlatformEcosystemIcon = { icon: string; colorClass: string };

export const platformEcosystemItems: PlatformEcosystemIcon[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", colorClass: "text-ecm" },
  { icon: "/icons/ecosystem-grid/automation.svg", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/capture.svg", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/sign.svg", colorClass: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/mobile.svg", colorClass: "text-azul-base" },
  { icon: "/icons/ecosystem-grid/agents.svg", colorClass: "gradient" },
  { icon: "/icons/ecosystem-grid/voice.svg", colorClass: "text-lvs-voice" },
];

export const finalFeatureStrip: IconEntry[] = [
  { icon: "/icons/segments/cta-ai-native.svg" },
  { icon: "/icons/segments/cta-cloud.svg" },
  { icon: "/icons/segments/cta-web-mobile.svg" },
  { icon: "/icons/segments/cta-integrations.svg" },
  { icon: "/icons/segments/cta-security.svg" },
  { icon: "/icons/segments/cta-support.svg" },
];
