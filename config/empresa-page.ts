/** Icons only — label/title/description text lives in messages/<locale>/empresa.json,
 *  paired with these arrays by index — same pattern as config/parceria-page.ts. */

/** Icon only — label text lives in messages/<locale>/empresa.json's `hero.stats`, same order. */
export const empresaHeroStatIcons: string[] = [
  "/icons/sobre-nos/stat-paises.svg",
  "/icons/sobre-nos/stat-empresas.svg",
  "/icons/sobre-nos/stat-anos.svg",
  "/icons/sobre-nos/stat-orlando.svg",
];

/** Icon only — text lives in messages/<locale>/empresa.json's `missionVision.vision` / `.mission`. */
export const empresaVisionIcon = "/icons/sobre-nos/icon-visao.svg";
export const empresaMissionIcon = "/icons/sobre-nos/icon-missao.svg";

/** Icons only — title/description text lives in messages/<locale>/empresa.json's
 *  `missionVision.principles`, same order. */
export const empresaPrincipleIcons: string[] = [
  "/icons/sobre-nos/icon-principio-etica.svg",
  "/icons/sobre-nos/icon-principio-inovacao.svg",
  "/icons/sobre-nos/icon-principio-democratizacao.svg",
  "/icons/sobre-nos/icon-principio-usabilidade.svg",
];

/** Icons only — title/description text lives in messages/<locale>/empresa.json's
 *  `blueOcean.items`, same order. */
export const empresaBlueOceanIcons: string[] = [
  "/icons/sobre-nos/icon-plataforma-allinone.svg",
  "/icons/sobre-nos/icon-reducao-tco.svg",
  "/icons/sobre-nos/icon-arquitetura-cloud.svg",
  "/icons/sobre-nos/icon-lowcode-nocode.svg",
  "/icons/sobre-nos/icon-seguranca-compliance.svg",
  "/icons/sobre-nos/icon-private-label.svg",
];

export type EmpresaBrandLogo = { icon: string; width: number; height: number };

/** Logo + rendered size (real asset aspect ratio, height normalized to 36px) — description
 *  text lives in messages/<locale>/empresa.json's `brandsEcosystem.brands`, same order. */
export const empresaBrandLogos: EmpresaBrandLogo[] = [
  { icon: "/icons/sobre-nos/brand-ecofy.svg", width: 138, height: 36 },
  { icon: "/icons/sobre-nos/brand-injectra.svg", width: 130, height: 36 },
  { icon: "/icons/sobre-nos/brand-innovecar.png", width: 169, height: 36 },
  { icon: "/icons/sobre-nos/brand-neoai.png", width: 169, height: 36 },
  { icon: "/icons/sobre-nos/brand-prosardoc.svg", width: 181, height: 36 },
  { icon: "/icons/sobre-nos/brand-acquafy.svg", width: 213, height: 36 },
  { icon: "/icons/sobre-nos/brand-interfy.svg", width: 143, height: 36 },
  { icon: "/icons/sobre-nos/brand-visionfy.svg", width: 157, height: 36 },
  { icon: "/icons/sobre-nos/brand-mediafy.svg", width: 137, height: 36 },
  { icon: "/icons/sobre-nos/brand-docsystem.svg", width: 142, height: 36 },
];

/** Icons only — title/description text lives in messages/<locale>/empresa.json's
 *  `technology.items`, same order. */
export const empresaTechnologyIcons: string[] = [
  "/icons/sobre-nos/icon-hospedagem-aws.svg",
  "/icons/sobre-nos/icon-mobilidade.svg",
  "/icons/sobre-nos/icon-kubernetes.svg",
  "/icons/sobre-nos/icon-multi-idiomas.svg",
  "/icons/sobre-nos/icon-seguranca-tech.svg",
  "/icons/sobre-nos/icon-compliance-tech.svg",
];

/** Icons only — title/description text lives in messages/<locale>/empresa.json's
 *  `technology.saas.items`, same order. */
export const empresaSaasIcons: string[] = [
  "/icons/sobre-nos/icon-white-label.svg",
  "/icons/sobre-nos/icon-margens.svg",
  "/icons/sobre-nos/icon-zero-capex.svg",
  "/icons/sobre-nos/icon-payasyougo.svg",
  "/icons/sobre-nos/icon-suporte-especializado.svg",
];

/** Icons only — title/description text lives in messages/<locale>/empresa.json's
 *  `aiFuture.items`, same order. */
export const empresaAiFutureIcons: string[] = [
  "/icons/sobre-nos/icon-ia-sugestoes.svg",
  "/icons/sobre-nos/icon-ia-automacao.svg",
  "/icons/sobre-nos/icon-ia-insights.svg",
  "/icons/sobre-nos/icon-ia-criacao-assistida.svg",
  "/icons/sobre-nos/icon-ia-analise-documental.svg",
  "/icons/sobre-nos/icon-ia-agentes-autonomos.svg",
];

/** Icons only — label/sublabel text lives in messages/<locale>/empresa.json's
 *  `aiFuture.stats`, same order. */
export const empresaAiFutureStatIcons: string[] = [
  "/icons/sobre-nos/stat2-documentos.svg",
  "/icons/sobre-nos/stat2-assinaturas.svg",
  "/icons/sobre-nos/stat2-usuarios.svg",
  "/icons/sobre-nos/stat2-processos.svg",
  "/icons/sobre-nos/stat2-armazenados.svg",
  "/icons/sobre-nos/stat2-uptime.svg",
  "/icons/sobre-nos/stat2-suporte.svg",
];

/** Icon only — label text lives in messages/<locale>/empresa.json's `finalCta`. */
export const empresaFinalCtaIcon = "/icons/sobre-nos/icon-premium-coroa.svg";
