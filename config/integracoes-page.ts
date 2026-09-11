/** Icon + rendered size (real asset aspect ratio). None of these show a name label below —
 *  every logo (icon-only or wordmark) fills its card on its own. Label text still lives in
 *  messages/<locale>/integracoes.json's `hero.diagram.items` (same order) for the accessible name. */
export const integracoesHeroDiagramIcons: { icon: string; iconWidth: number; iconHeight: number; showLabel?: boolean }[] = [
  { icon: "/icons/integracoes/logos/microsoft.svg", iconWidth: 64, iconHeight: 64, showLabel: false },
  { icon: "/icons/integracoes/logos/google.svg", iconWidth: 64, iconHeight: 64, showLabel: false },
  { icon: "/icons/integracoes/logos/sap.svg", iconWidth: 88, iconHeight: 44, showLabel: false },
  { icon: "/icons/integracoes/logos/salesforce.svg", iconWidth: 88, iconHeight: 62, showLabel: false },
  { icon: "/icons/integracoes/logos/oracle.svg", iconWidth: 88, iconHeight: 11, showLabel: false },
  { icon: "/icons/integracoes/logos/hubspot.svg", iconWidth: 88, iconHeight: 26, showLabel: false },
  { icon: "/icons/integracoes/logos/mysql.svg", iconWidth: 88, iconHeight: 46, showLabel: false },
  { icon: "/icons/integracoes/logos/zapier.svg", iconWidth: 88, iconHeight: 24, showLabel: false },
];

/** Icon + accent color only — title/description text lives in messages/<locale>/integracoes.json's `hero.banner`, same order. */
export const integracoesHeroBannerItems: { icon: string; bg: string }[] = [
  { icon: "/icons/integracoes/integracao.svg", bg: "bg-azul-base" },
  { icon: "/icons/integracoes/raio.svg", bg: "bg-[#2fb79c]" },
  { icon: "/icons/integracoes/brain.svg", bg: "bg-[#fb5998]" },
];

export type LogosStripItem = {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  /** Brand name — accessible name for the icon, never translated. */
  label: string;
  /** Rendered inline after the icon for logos that don't spell out the full name on their own
   *  (Microsoft's icon has no text; Google's mark here is scoped to "Workspace"). */
  afterText?: string;
  /** "muted" renders afterText in texto-medio instead of texto (Google's "Workspace" sub-label). */
  afterTextTone?: "muted";
  /** True once afterText alone already names the logo fully, so the icon itself is decorative. */
  decorativeIcon?: boolean;
};

/** Exact set/sizes/order from Figma's finished "SUBSTITUIR" instances (node 5418:28800) — 7 logos,
 *  not the full 8-brand diagram set (MySQL isn't part of this particular strip). Heading/CTA text
 *  lives in messages/<locale>/integracoes.json's `logosStrip`. */
export const integracoesLogosStripIcons: LogosStripItem[] = [
  { icon: "/icons/integracoes/logos/sap.svg", iconWidth: 100, iconHeight: 49, label: "SAP" },
  { icon: "/icons/integracoes/logos/oracle.svg", iconWidth: 120, iconHeight: 16, label: "Oracle" },
  {
    icon: "/icons/integracoes/logos/microsoft.svg",
    iconWidth: 36,
    iconHeight: 36,
    label: "Microsoft",
    afterText: "Microsoft",
    decorativeIcon: true,
  },
  {
    icon: "/icons/integracoes/logos/google-land.svg",
    iconWidth: 77,
    iconHeight: 25,
    label: "Google",
    afterText: "Workspace",
    afterTextTone: "muted",
  },
  { icon: "/icons/integracoes/logos/salesforce.svg", iconWidth: 85, iconHeight: 60, label: "Salesforce" },
  { icon: "/icons/integracoes/logos/zapier.svg", iconWidth: 120, iconHeight: 32, label: "Zapier" },
  { icon: "/icons/integracoes/logos/hubspot.svg", iconWidth: 120, iconHeight: 35, label: "HubSpot" },
];

/** Icon only — title/description text lives in messages/<locale>/integracoes.json's
 *  `featuresGrid.items`, same order. */
export const integracoesFeaturesGridIcons: string[] = [
  "/icons/integracoes/features/rest-api.svg",
  "/icons/integracoes/features/webhooks.svg",
  "/icons/integracoes/features/zapier-icon.svg",
  "/icons/integracoes/features/database.svg",
  "/icons/integracoes/features/erp.svg",
  "/icons/integracoes/features/crm.svg",
  "/icons/integracoes/logos/microsoft.svg",
  "/icons/integracoes/logos/google.svg",
  "/icons/integracoes/features/auth-lock.svg",
  "/icons/integracoes/features/ad-ldap.svg",
  "/icons/integracoes/features/legacy-systems.svg",
  "/icons/integracoes/features/custom-integrations.svg",
];

/** Icon only — label text lives in messages/<locale>/integracoes.json's `agentsHighlight.checklist`,
 *  same order. The ring diagram reuses the Home page's 8 ecosystem product icons (config/platform.ts). */
export const integracoesAgentsChecklistIcon = "/icons/integracoes/features/checkin.svg";

/** Icon only — label text lives in messages/<locale>/integracoes.json's `securityHighlight.items`,
 *  same order. */
export const integracoesSecurityIcons: string[] = [
  "/icons/integracoes/security/https-tls.svg",
  "/icons/integracoes/security/oauth.svg",
  "/icons/integracoes/security/rate-limit.svg",
  "/icons/integracoes/security/logs.svg",
  "/icons/integracoes/security/compliance.svg",
];

/** Icon + label only — never translated (language names). */
export const integracoesDevLangs: { icon: string; label: string }[] = [
  { icon: "/icons/integracoes/devlangs/javascript.svg", label: "JavaScript" },
  { icon: "/icons/integracoes/devlangs/python.svg", label: "Python" },
  { icon: "/icons/integracoes/devlangs/dotnet.svg", label: ".NET" },
  { icon: "/icons/integracoes/devlangs/java.svg", label: "Java" },
  { icon: "/icons/integracoes/devlangs/php.svg", label: "PHP" },
];
