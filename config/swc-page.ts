import type { HeroStat } from "@/config/hero";

export type IconLabel = {
  icon: string;
  text: string;
};

export const swcHeroTrust: IconLabel[] = [
  { icon: "/icons/swc/confiabilidade.svg", text: "99,9% de confiabilidade na extração" },
  { icon: "/icons/swc/lgpd.svg", text: "100% seguro e conforme com a LGPD" },
  { icon: "/icons/swc/ai-native.svg", text: "AI-native em toda a plataforma" },
  { icon: "/icons/swc/escalavel.svg", text: "Escalável para qualquer volume de documentos" },
];

export const swcHeroFlow: IconLabel[] = [
  { icon: "/icons/swc/flow-ai-reconhece.svg", text: "AI reconhece e extrai" },
  { icon: "/icons/swc/flow-classifica.svg", text: "Classifica e organiza" },
  { icon: "/icons/swc/flow-documents.svg", text: "Armazena no Interfy Documents" },
  { icon: "/icons/swc/flow-process.svg", text: "Envia para Interfy Process" },
];

export type HowItWorksStep = {
  icon: string;
  title: string;
  description: string;
};

export const swcHowItWorksSteps: HowItWorksStep[] = [
  { icon: "/icons/swc/step-captura.svg", title: "Captura", description: "Captura de qualquer origem: navegador, scanners ou celular." },
  { icon: "/icons/swc/step-reconhecimento.svg", title: "Reconhecimento por AI", description: "A Interfy AI reconhece e extrai automaticamente o conteúdo." },
  { icon: "/icons/swc/step-leitura.svg", title: "Leitura e compreensão", description: "Entende o contexto, campos e relações entre as informações." },
  { icon: "/icons/swc/step-extracao.svg", title: "Extração de dados", description: "Extrai automaticamente os dados estruturados e não estruturados." },
  { icon: "/icons/swc/step-classificacao.svg", title: "Classificação", description: "Classifica e organiza os documentos com AI." },
  { icon: "/icons/swc/step-indexacao.svg", title: "Indexação e metadados", description: "Atribui metadados e prepara para busca e rastreabilidade." },
  { icon: "/icons/swc/step-validacao.svg", title: "Validação e encaminhamento", description: "Valida e encaminha para Interfy Documentos ou Processos." },
];

export type FeatureCard = {
  icon: string;
  title: string;
  description: string;
};

export const swcFeatures: FeatureCard[] = [
  { icon: "/icons/swc/feature-browser.svg", title: "Captura pelo navegador", description: "Capture arquivos diretamente do seu computador. Simples, rápido e seguro." },
  { icon: "/icons/swc/feature-scanner.svg", title: "Scanners profissionais", description: "Integração nativa com scanners de alta performance para máxima qualidade." },
  { icon: "/icons/swc/feature-lote.svg", title: "Captura em lote", description: "Digitalize e processe grandes volumes de documentos de uma só vez." },
  { icon: "/icons/swc/feature-ai-creditos.svg", title: "AI Créditos incluídos", description: "Créditos de AI incluídos em todos os planos." },
  { icon: "/icons/swc/feature-mobile.svg", title: "Mobile Capture", description: "Capture documentos pelo smartphone de qualquer lugar, a qualquer hora." },
  { icon: "/icons/swc/feature-reconhecimento.svg", title: "Reconhecimento por AI", description: "AI reconhece e extrai o conteúdo com alta precisão." },
  { icon: "/icons/swc/feature-extracao.svg", title: "Extração automática", description: "Extração automática de dados estruturados e não estruturados." },
  { icon: "/icons/swc/feature-documents.svg", title: "Interfy Documents", description: "Armazena com segurança, busca inteligente e rastreabilidade." },
  { icon: "/icons/swc/feature-process.svg", title: "Interfy Process", description: "Envio automático para fluxos e automações da sua operação." },
  { icon: "/icons/swc/feature-creditos-adicionais.svg", title: "Compra de créditos adicionais", description: "Mais créditos sempre que sua operação precisar." },
];

export const swcLegalValidity = {
  icon: "/icons/swc/legal-validade.svg",
  title: "Digitalização com Validade Legal",
  badge: "Recurso opcional",
  description: "Recurso opcional para empresas que precisam de validade jurídica em seus documentos digitais. Não incluso no plano padrão.",
  checklist: [
    { icon: "/icons/swc/legal-certificacao.svg", text: "Certificação digital e carimbo do tempo" },
    { icon: "/icons/swc/legal-armazenamento.svg", text: "Armazenamento seguro com validade legal" },
    { icon: "/icons/swc/legal-rastreabilidade.svg", text: "Rastreabilidade de ponta a ponta" },
    { icon: "/icons/swc/legal-evidencias.svg", text: "Evidências e trilhas de auditorias" },
    { icon: "/icons/swc/legal-carimbo.svg", textParts: ["Aplicação de carimbo e trilha conforme o ", "Decreto 10.278"] },
    { icon: "/icons/swc/legal-trilha.svg", text: "Trilha de auditoria" },
    { icon: "/icons/swc/legal-validacao-juridica.svg", text: "Validação jurídica" },
    { icon: "/icons/swc/legal-conformidade.svg", text: "Conformidade e segurança" },
  ] as { icon: string; text?: string; textParts?: [string, string] }[],
};

export type ResultStat = {
  icon: string;
  accent: string;
  accentColor: string;
  label: string;
  description: string;
};

export const swcResultStats: ResultStat[] = [
  { icon: "/icons/swc/results-erros.svg", accent: "ATÉ 85%", accentColor: "#dae9ff", label: "MENOS ERROS", description: "na indexação e classificação." },
  { icon: "/icons/swc/results-produtividade.svg", accent: "MAIS", accentColor: "#e9e5fd", label: "PRODUTIVIDADE", description: "Seu time foca no que realmente importa." },
  { icon: "/icons/swc/results-seguranca.svg", accent: "SEGURANÇA &", accentColor: "#fef3e3", label: "CONFORMIDADE", description: "Total com LGPD, GDPR e padrões globais." },
];

export const swcResultsCta = {
  title: "PRONTO PARA TRANSFORMAR SUA OPERAÇÃO DE DOCUMENTOS?",
  description: "Agende uma demonstração e descubra como o Interfy CAPTURA pode gerar resultados reais para a sua empresa.",
};

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

export const swcCtaHighlights: HeroStat[] = [
  { icon: "/icons/swc/cta-web.svg", label: "100% Web", sublabel: "Acesse de qualquer lugar" },
  { icon: "/icons/swc/cta-seguranca.svg", label: "Segurança de ponta", sublabel: "Dados protegidos e conformes" },
  { icon: "/icons/swc/cta-escalavel.svg", label: "Escalável", sublabel: "Do pequeno ao grande negócio" },
  { icon: "/icons/swc/cta-suporte.svg", label: "Suporte 24/7", sublabel: "Sempre que precisar" },
];
