/** Icons only — label/title/description text lives in messages/<locale>/parceria.json,
 *  paired with these arrays by index — same pattern as config/integracoes-page.ts. */

/** Icon + title only — label text lives in messages/<locale>/parceria.json's `hero.banner`, same order. */
export const parceriaHeroBannerIcons: string[] = [
  "/icons/parceria/hero-programa-global.svg",
  "/icons/parceria/hero-suporte.svg",
  "/icons/parceria/hero-receita.svg",
  "/icons/parceria/hero-protegidas.svg",
];

export type ParceriaPlanCard = {
  badgeIcon: string;
  checkIcon: string;
};

/** Icons only — title/subtitle/checklist text lives in messages/<locale>/parceria.json's
 *  `participation.cards`, same order (0 = Parceiro Comercial, 1 = Afiliado ou Indicador). */
export const parceriaParticipationCards: ParceriaPlanCard[] = [
  { badgeIcon: "/icons/parceria/badge-parceiro-comercial.svg", checkIcon: "/icons/parceria/check-blue.svg" },
  { badgeIcon: "/icons/parceria/badge-afiliado.svg", checkIcon: "/icons/parceria/check-purple.svg" },
];

/** Icon + rendered size (real asset aspect ratio — step 4's export isn't square) — title/description
 *  text lives in messages/<locale>/parceria.json's `howItWorks.steps`, same order. */
export const parceriaHowItWorksIcons: { icon: string; iconWidth: number; iconHeight: number }[] = [
  { icon: "/icons/parceria/step-1-modalidade.svg", iconWidth: 30, iconHeight: 30 },
  { icon: "/icons/parceria/step-2-cadastro.svg", iconWidth: 30, iconHeight: 30 },
  { icon: "/icons/parceria/step-3-registro.svg", iconWidth: 30, iconHeight: 30 },
  { icon: "/icons/parceria/step-4-resultados.svg", iconWidth: 33, iconHeight: 30 },
];

/** Icons only — title/description text lives in messages/<locale>/parceria.json's
 *  `structure.items`, same order. */
export const parceriaStructureIcons: string[] = [
  "/icons/parceria/grid-ia.svg",
  "/icons/parceria/grid-treinamento.svg",
  "/icons/parceria/grid-workspace.svg",
  "/icons/parceria/grid-materiais.svg",
  "/icons/parceria/grid-registro.svg",
  "/icons/parceria/grid-contratos.svg",
  "/icons/parceria/grid-faturamento.svg",
  "/icons/parceria/hero-suporte.svg",
];

/** Icon only — label text lives in messages/<locale>/parceria.json's `roles.partner.checklist`, same order. */
export const parceriaRolesPartnerIcon = "/icons/parceria/list-check-white.svg";

/** Icon only — label text lives in messages/<locale>/parceria.json's `roles.interfy.checklist`, same order. */
export const parceriaRolesInterfyIcon = "/icons/parceria/list-check-blue.svg";

/** Icons only — label/sublabel text lives in messages/<locale>/parceria.json's `growthCta.stats`, same order. */
export const parceriaGrowthCtaStatIcons: string[] = [
  "/icons/parceria/stat-documentos.svg",
  "/icons/parceria/stat-assinaturas.svg",
  "/icons/parceria/stat-usuarios.svg",
  "/icons/parceria/stat-processos.svg",
  "/icons/parceria/stat-armazenados.svg",
  "/icons/parceria/stat-uptime.svg",
  "/icons/parceria/hero-suporte.svg",
];
