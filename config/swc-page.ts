/** Icons only — matching text lives in messages/<locale>/capture.json's `hero.trust` (same index). */
export const swcHeroTrust: string[] = [
  "/icons/swc/confiabilidade.svg",
  "/icons/swc/lgpd.svg",
  "/icons/swc/ai-native.svg",
  "/icons/swc/escalavel.svg",
];

/** Icons only — matching text lives in messages/<locale>/capture.json's `hero.flow` (same index). */
export const swcHeroFlow: string[] = [
  "/icons/swc/flow-ai-reconhece.svg",
  "/icons/swc/flow-classifica.svg",
  "/icons/swc/flow-documents.svg",
  "/icons/swc/flow-process.svg",
];

/** Icons only — matching title/description live in messages/<locale>/capture.json's `howItWorks.steps` (same index). */
export const swcHowItWorksSteps: string[] = [
  "/icons/swc/step-captura.svg",
  "/icons/swc/step-reconhecimento.svg",
  "/icons/swc/step-leitura.svg",
  "/icons/swc/step-extracao.svg",
  "/icons/swc/step-classificacao.svg",
  "/icons/swc/step-indexacao.svg",
  "/icons/swc/step-validacao.svg",
];

/** Icons only — matching title/description live in messages/<locale>/capture.json's `features.items` (same index). */
export const swcFeatures: string[] = [
  "/icons/swc/feature-browser.svg",
  "/icons/swc/feature-scanner.svg",
  "/icons/swc/feature-lote.svg",
  "/icons/swc/feature-ai-creditos.svg",
  "/icons/swc/feature-mobile.svg",
  "/icons/swc/feature-reconhecimento.svg",
  "/icons/swc/feature-extracao.svg",
  "/icons/swc/feature-documents.svg",
  "/icons/swc/feature-process.svg",
  "/icons/swc/feature-creditos-adicionais.svg",
];

/** Icon for the section header badge; title/badge/description live in messages/<locale>/capture.json's `legalValidity`. */
export const swcLegalValidityIcon = "/icons/swc/legal-validade.svg";

/** Icons only — matching text/textParts live in messages/<locale>/capture.json's `legalValidity.checklist` (same index). */
export const swcLegalValidityChecklistIcons: string[] = [
  "/icons/swc/legal-certificacao.svg",
  "/icons/swc/legal-armazenamento.svg",
  "/icons/swc/legal-rastreabilidade.svg",
  "/icons/swc/legal-evidencias.svg",
  "/icons/swc/legal-carimbo.svg",
  "/icons/swc/legal-trilha.svg",
  "/icons/swc/legal-validacao-juridica.svg",
  "/icons/swc/legal-conformidade.svg",
];

export type ResultStatVisual = {
  icon: string;
  accentColor: string;
};

/** Visuals only — matching accent/label/description live in messages/<locale>/capture.json's `results.stats` (same index). */
export const swcResultStats: ResultStatVisual[] = [
  { icon: "/icons/swc/results-erros.svg", accentColor: "#dae9ff" },
  { icon: "/icons/swc/results-produtividade.svg", accentColor: "#e9e5fd" },
  { icon: "/icons/swc/results-seguranca.svg", accentColor: "#fef3e3" },
];

/** Icons only — matching label/sublabel live in messages/<locale>/capture.json's `cta.highlights` (same index). */
export const swcCtaHighlights: string[] = [
  "/icons/swc/cta-web.svg",
  "/icons/swc/cta-seguranca.svg",
  "/icons/swc/cta-escalavel.svg",
  "/icons/swc/cta-suporte.svg",
];

export type PricingTier = {
  key: string;
  name: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  gradient?: boolean;
  badge?: string;
  credits: string;
  monthlyPrice: string;
  perCredit: string;
  features: string[];
};

// SwcPricing is currently unused on the Capture page (temporarily hidden — see
// app/[lang]/platform/capture/page.tsx). Left in Portuguese until it's wired
// back in and gets its own i18n pass.
export const swcPricingTiers: PricingTier[] = [
  {
    key: "essential",
    name: "ESSENTIAL",
    icon: "/icons/swc/plan-essential-icon.svg",
    colorClass: "text-starter",
    bgClass: "bg-starter",
    credits: "1.000",
    monthlyPrice: "800,00",
    perCredit: "0,80",
    features: [
      "Captura inteligente com AI",
      "Extração automática de dados",
      "Classificação e indexação automática",
      "Integração com Interfy Documents & Interfy Process",
    ],
  },
  {
    key: "advanced",
    name: "ADVANCED",
    icon: "/icons/swc/plan-advanced-icon.svg",
    colorClass: "text-business",
    bgClass: "bg-business",
    credits: "2.500",
    monthlyPrice: "1.700,00",
    perCredit: "0,68",
    features: [
      "Captura inteligente com AI",
      "Extração automática de dados",
      "Classificação e indexação automática",
      "Integração com Interfy Documents & Interfy Process",
    ],
  },
  {
    key: "professional",
    name: "PROFESSIONAL",
    icon: "/icons/swc/plan-professional-icon.svg",
    colorClass: "text-corporate",
    bgClass: "bg-corporate",
    badge: "MAIS ESCOLHIDO",
    credits: "5.000",
    monthlyPrice: "3.000,00",
    perCredit: "0,60",
    features: [
      "Captura inteligente com AI",
      "Extração automática de dados",
      "Classificação e indexação automática",
      "Integração com Interfy Documents & Interfy Process",
    ],
  },
  {
    key: "enterprise",
    name: "ENTERPRISE",
    icon: "/icons/swc/plan-enterprise-icon.svg",
    colorClass: "gradient",
    bgClass: "gradient",
    gradient: true,
    credits: "10.000",
    monthlyPrice: "4.800,00",
    perCredit: "0,48",
    features: [
      "Captura inteligente com AI",
      "Extração automática de dados",
      "Classificação e indexação automática",
      "Integração com Interfy DOCUMENTOS & Interfy PROCESSOS",
    ],
  },
];

export const swcPricingAllPlans: string[] = [
  "Aprovação controlada",
  "Armazenamento automático de documentos",
  "Captura 100% automatizada com AI",
  "Captura via Browser",
  "Captura via Mobile",
  "Contratação de créditos adicionais",
  "Controle de certificado e autorização",
  "Controle de integridade",
  "Controle documental",
  "Digitalização em lote e avulsa",
  "Fila de revisão inteligente",
  "Governança e segurança documental",
  "Histórico das capturas",
  "Indexação automática",
  "Indexação manual ou assistida",
  "Indexação no Interfy Documentos",
  "Metadados e rastreabilidade",
  "Modelos de extração configuráveis",
  "Pipelines e roteamento por regras",
  "Registro da origem do documento",
  "Suporte a ADF e scanners profissionais",
  "Tratamento automático de imagem",
];

export type CreditsRow = {
  package: string;
  perCredit: string;
  total: string;
};

export const swcCreditsTable: CreditsRow[] = [
  { package: "1.000 créditos", perCredit: "R$ 0,80", total: "R$ 800,00" },
  { package: "2.500 créditos", perCredit: "R$ 0,68", total: "R$ 1.700,00" },
  { package: "5.000 créditos", perCredit: "R$ 0,60", total: "R$ 3.000,00" },
  { package: "10.000 créditos", perCredit: "R$ 0,48", total: "R$ 4.800,00" },
  { package: "25.000 créditos", perCredit: "R$ 0,36", total: "R$ 9.000,00" },
  { package: "50.000 créditos", perCredit: "R$ 0,28", total: "R$ 14.000,00" },
  { package: "Acima de 50.000", perCredit: "CONSULTE", total: "CONSULTE" },
];

export const swcCreditDefinition: string[] = [
  "Indexação dos dados",
  "Classificação do documento",
  "Extração das informações",
  "Armazenamento automático no destino configurado",
  "Leitura e compreensão do conteúdo",
];

export type AlertNote = {
  title: string;
  description?: string;
};

export const swcCreditAlerts: AlertNote[] = [
  { title: "Todos os planos incluem créditos de AI para processamento inteligente.", description: "Créditos adicionais podem ser adquiridos conforme a necessidade da operação." },
  { title: "Créditos AI podem ser usados na Plataforma Interfy e nos planos Interfy Capture com AI para captura 100% automatizada." },
];

export type SystemResourceCard = {
  icon: string;
  label: string;
  value: string;
  description: string;
};

export const swcSystemResources: SystemResourceCard[] = [
  { icon: "/icons/swc/icon-treinamento.svg", label: "Treinamento Interfy Capture", value: "R$ 3.500,00", description: "cobrança única de implantação e treinamento." },
  { icon: "/icons/swc/icon-parceria.svg", label: "Desconto para parceiros", value: "20%", description: "aplicável aos planos mensais e aos pacotes de créditos." },
  { icon: "/icons/swc/icon-observacao.svg", label: "Observação", value: "", description: "O desconto de parceiro não se aplica ao treinamento do módulo CAPTURA." },
];
