export type PricingHighlight = {
  icon: "trial" | "sign" | "device" | "ai";
  label: string;
};

export const pricingHighlights: PricingHighlight[] = [
  { icon: "trial", label: "Teste grátis por 7 dias" },
  { icon: "sign", label: "Assinatura digital grátis" },
  { icon: "device", label: "Acesso via Web e Mobile" },
  { icon: "ai", label: "Recurso de IA incluídos" },
];

export type PricingProductBadge = {
  icon: string;
  label: string;
};

export const pricingProductBadges: PricingProductBadge[] = [
  { icon: "/icons/products/documents.svg", label: "Documents" },
  { icon: "/icons/products/automation.svg", label: "Process" },
  { icon: "/icons/products/capture.svg", label: "Capture" },
  { icon: "/icons/products/sign.svg", label: "Sign" },
  { icon: "/icons/products/connect.svg", label: "Connect" },
  { icon: "/icons/products/mobile.svg", label: "Mobile" },
  { icon: "/icons/products/agents.svg", label: "Agents" },
  { icon: "/icons/products/voice.svg", label: "Voice" },
];

export type ProductIconKey =
  | "documents"
  | "automation"
  | "capture"
  | "sign"
  | "connect"
  | "mobile"
  | "agents"
  | "voice";

export const productIconPaths: Record<ProductIconKey, string> = {
  documents: "/icons/pricing/products/documents.svg",
  automation: "/icons/pricing/products/automation.svg",
  capture: "/icons/pricing/products/capture.svg",
  sign: "/icons/pricing/products/sign.svg",
  connect: "/icons/pricing/products/connect.svg",
  mobile: "/icons/pricing/products/mobile.svg",
  agents: "/icons/pricing/products/agents.svg",
  voice: "/icons/pricing/products/voice.svg",
};

const allProductIcons: ProductIconKey[] = [
  "documents",
  "automation",
  "capture",
  "sign",
  "connect",
  "mobile",
  "agents",
  "voice",
];

export type PlanKey = "starter" | "business" | "corporate" | "enterprise";

export type PricingPlan = {
  key: PlanKey;
  name: string;
  colorVar: string;
  gradient?: boolean;
  badge?: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  ctaLabel: string;
  trialLabel?: string;
  trialLabelPlain?: boolean;
  productIcons: ProductIconKey[];
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    name: "Starter",
    colorVar: "var(--color-starter)",
    monthlyPrice: 195,
    annualPrice: 120,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste grátis por 7 dias!",
    productIcons: allProductIcons,
  },
  {
    key: "business",
    name: "Business",
    colorVar: "var(--color-business)",
    monthlyPrice: 250,
    annualPrice: 175,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste grátis por 7 dias!",
    productIcons: allProductIcons,
  },
  {
    key: "corporate",
    name: "Corporate",
    colorVar: "var(--color-corporate)",
    monthlyPrice: 300,
    annualPrice: 210,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste grátis por 7 dias!",
    productIcons: allProductIcons,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    colorVar: "var(--color-enterprise)",
    gradient: true,
    badge: "SOLUÇÃO PERSONALIZADA",
    monthlyPrice: null,
    annualPrice: null,
    ctaLabel: "Fale com um especialista",
    trialLabel: "CONSULTE",
    trialLabelPlain: true,
    productIcons: allProductIcons,
  },
];

export type PlanFeatureMark = "check" | "cross" | "product";

export type PlanFeatureRow = {
  mark: PlanFeatureMark;
  values: Record<PlanKey, string>;
};

const included = (text: string): Record<PlanKey, string> => ({
  starter: text,
  business: text,
  corporate: text,
  enterprise: text,
});

export const pricingFeatureRows: PlanFeatureRow[] = [
  {
    mark: "check",
    values: included("Usuários Ilimitados (cobrança por usuário)"),
  },
  {
    mark: "check",
    values: {
      starter: "Mínimo de 5 Usuários Full",
      business: "Mínimo de 10 Usuários Full",
      corporate: "Mínimo de 15 Usuários Full",
      enterprise: "Usuários Full (sob consulta)",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Usuários de Consulta",
      business: "15 Usuários de Consulta",
      corporate: "30 Usuários de Consulta",
      enterprise: "Usuários de Consulta Ilimitados",
    },
  },
  {
    mark: "product",
    values: included("Interfy Captura + Mobile"),
  },
  {
    mark: "check",
    values: {
      starter: "25 GB de Storage",
      business: "50 GB de Storage",
      corporate: "100 GB de Storage",
      enterprise: "Storage (sob consulta)",
    },
  },
  {
    mark: "check",
    values: {
      starter: "100 Créditos de AI/mês (não cumulativo)",
      business: "250 Créditos de AI/mês (não cumulativo)",
      corporate: "500 Créditos de AI/mês (não cumulativo)",
      enterprise: "Créditos de AI/mês (não cumulativo) (sob consulta)",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Envios de Documentos para Assinatura Digital/mês (não cumulativo)",
      business: "20 Envios de Documentos para Assinatura Digital / mês (não cumulativo)",
      corporate: "30 Envios de Documentos para Assinatura Digital / mês (não cumulativo)",
      enterprise: "Envios de Documentos Ilimitados para Assinatura Digital",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos",
      business: "15 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos",
      corporate: "20 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos",
      enterprise: "500 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
      business: "15 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
      corporate: "20 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
      enterprise: "500 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
    },
  },
  { mark: "check", values: included("Processos Ilimitados") },
  { mark: "check", values: included("Acesso à API da Interfy") },
  { mark: "check", values: included("Identidade Visual Personalizada (White Label)") },
  { mark: "check", values: included("URL Exclusiva com Isolamento de Dados") },
  { mark: "check", values: included("Integração com Banco de Dados") },
  { mark: "check", values: included("Workspace com Administração e Controles de Segurança Avançada") },
  { mark: "check", values: included("Autenticação com AD/LDAP") },
  { mark: "check", values: included("Bloqueio por IP") },
  { mark: "check", values: included("Autenticação Multifatorial") },
  { mark: "check", values: included("Busca por OCR Full Text") },
  {
    mark: "check",
    values: included("Módulo de Gestão de Arquivo Físico"),
    // Starter and Business do not include this module — see pricingNotIncluded below (row hidden, not crossed out).
  },
];

// Row indexes (0-based) that are not included, and therefore hidden, for a given plan.
export const pricingNotIncluded: Partial<Record<PlanKey, number[]>> = {
  starter: [19],
  business: [19],
};

export type ComparisonRow = {
  icon: string;
  label: string;
  values: Record<SmallPlanKey, string>;
};

export const pricingComparisonRows: ComparisonRow[] = [
  {
    icon: "users",
    label: "Usuários",
    values: { free: "Até 3", individual: "1", teams: "Ilimitados", startup: "Ilimitados" },
  },
  {
    icon: "workspace",
    label: "Workspaces",
    values: { free: "1", individual: "1", teams: "Ilimitados", startup: "Ilimitados" },
  },
  {
    icon: "storage",
    label: "Armazenamento",
    values: { free: "5 GB", individual: "50 GB", teams: "100 GB", startup: "Ilimitado" },
  },
  {
    icon: "sign",
    label: "Assinatura Digital",
    values: { free: "Grátis", individual: "Grátis", teams: "Grátis", startup: "Grátis" },
  },
  {
    icon: "mobile",
    label: "Aplicativo Mobile",
    values: { free: "check", individual: "check", teams: "check", startup: "check" },
  },
  {
    icon: "modules",
    label: "Módulos Inclusos",
    values: {
      free: "Documentos e Assinatura",
      individual: "Documentos, Assinatura e Colaboração",
      teams: "Documentos, Assinatura e Colaboração",
      startup: "Todos, menos Processos",
    },
  },
  {
    icon: "ai",
    label: "Recursos de AI",
    values: { free: "Básicos", individual: "Padrão", teams: "Avançados", startup: "Ilimitados · Créditos incluídos" },
  },
  {
    icon: "credits",
    label: "AI Créditos / mês",
    values: { free: "-", individual: "1.000", teams: "3.000", startup: "10.000" },
  },
  {
    icon: "support",
    label: "Suporte",
    values: { free: "E-mail", individual: "E-mail", teams: "Prioritário", startup: "Premium 24/7" },
  },
];

export type SmallPlanKey = "free" | "individual" | "teams" | "startup";

export type SmallFeatureItem = {
  mark: "check" | "cross" | "product";
  text: string;
};

export type SmallPlanVariant = {
  price: number;
  oldPrice?: number;
  billingLabel: string;
};

export type SmallPlan = {
  key: SmallPlanKey;
  name: string;
  colorVar: string;
  gradient?: boolean;
  popular?: boolean;
  ctaLabel: string;
  trialLabel?: string;
  productsLabel: string;
  productIcons: ProductIconKey[];
  // The Mensal/Anual switch only changes how the price is displayed — the feature list is shared.
  features: SmallFeatureItem[];
  anual: SmallPlanVariant;
  mensal: SmallPlanVariant;
};

export const smallPlans: SmallPlan[] = [
  {
    key: "free",
    name: "Free",
    colorVar: "var(--color-ecm)",
    ctaLabel: "Começar grátis",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "3 PRODUTOS INCLUSOS",
    productIcons: ["documents", "sign", "mobile"],
    features: [
      { mark: "check", text: "1 Usuário Full" },
      { mark: "check", text: "1 GB de armazenamento" },
      { mark: "check", text: "5 créditos de IA / mês" },
      { mark: "check", text: "3 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
    ],
    anual: { price: 0, billingLabel: "Cobrança anual" },
    mensal: { price: 0, billingLabel: "Cobrança mensal" },
  },
  {
    key: "individual",
    name: "Individual",
    colorVar: "var(--color-business)",
    ctaLabel: "Contratar agora",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "4 PRODUTOS INCLUSOS",
    productIcons: ["documents", "sign", "connect", "mobile"],
    features: [
      { mark: "check", text: "Usuários Ilimitados (cobrança por usuário)" },
      { mark: "check", text: "Mínimo de 1 Usuário Full" },
      { mark: "check", text: "2 Usuários de Consulta" },
      { mark: "check", text: "5 GB de armazenamento" },
      { mark: "check", text: "10 Créditos de AI/mês (não cumulativo)" },
      { mark: "check", text: "10 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
      { mark: "check", text: "10 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos" },
    ],
    anual: { price: 50, oldPrice: 71.5, billingLabel: "Cobrança anual" },
    mensal: { price: 71.5, billingLabel: "Cobrança mensal" },
  },
  {
    key: "teams",
    name: "Teams",
    colorVar: "var(--color-corporate)",
    ctaLabel: "Contratar agora",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "4 PRODUTOS INCLUSOS",
    productIcons: ["documents", "sign", "connect", "mobile"],
    features: [
      { mark: "check", text: "Usuários Ilimitados (cobrança por usuário)" },
      { mark: "check", text: "Mínimo de 5 Usuários Full" },
      { mark: "check", text: "5 Usuários de Consulta" },
      { mark: "check", text: "10 GB de armazenamento" },
      { mark: "check", text: "10 Créditos de AI/mês (não cumulativo)" },
      { mark: "check", text: "10 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
      { mark: "check", text: "10 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos" },
    ],
    anual: { price: 68.25, oldPrice: 97.5, billingLabel: "Cobrança anual" },
    mensal: { price: 97.5, billingLabel: "Cobrança mensal" },
  },
  {
    key: "startup",
    name: "Essential",
    colorVar: "var(--color-enterprise)",
    gradient: true,
    popular: true,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "8 PRODUTOS INCLUSOS",
    productIcons: allProductIcons,
    features: [
      { mark: "check", text: "Usuários Ilimitados (cobrança por usuário)" },
      { mark: "check", text: "Mínimo de 5 Usuários Full" },
      { mark: "check", text: "5 Usuários de Consulta" },
      { mark: "product", text: "Interfy Captura + Mobile" },
      { mark: "check", text: "15 GB de armazenamento" },
      { mark: "check", text: "20 Créditos de AI/mês (não cumulativo)" },
      { mark: "check", text: "10 Envios de Documentos para Assinatura Digital/mês (não cumulativo)" },
      { mark: "check", text: "10 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos" },
      { mark: "check", text: "Processos Ilimitados" },
      { mark: "check", text: "Busca por OCR Full Text" },
    ],
    anual: { price: 120, oldPrice: 171, billingLabel: "Cobrança anual" },
    mensal: { price: 171, billingLabel: "Cobrança mensal" },
  },
];

export type ResourceSection = {
  key: "processos" | "documentos";
  label: string;
  features: string[];
};

export const resourceSections: ResourceSection[] = [
  {
    key: "processos",
    label: "Recursos do Interfy Process",
    features: [
      "Criação de Processos Ilimitados",
      "Desenhador BPMN 2.0",
      "Link externo para início de casos",
      "Captura de documentos direto no processo em andamento",
      "Criação de variáveis públicas",
      "Usuários dinâmicos",
      "Fluxos paralelos",
      "Caixa de tarefa",
      "Subprocessos",
      "Supervisão de Processos",
      "Visualização do histórico dos casos",
      "Busca avançada de processos",
      "Visualização gráfica do andamento dos processos",
      "Parametrização e controle de tempos atribuídos a cada tarefa",
      "Controle de notificações com alertas",
      "Atribuições manuais, cíclicas, autoserviço: por variável, por valor e por unidade organizacional",
      "Nomeação de supervisores para gestão dos processos",
      "Reatribuição de casos pelo supervisor",
      "Cancelamento de casos de acordo com o perfil do usuário ou supervisor",
      "Calendário de dias úteis",
      "Notificações de entrada de tarefas",
      "Notificações por hierarquia no processo a partir do SLA",
      "Notificações de SLA crítico ou de término",
      "Vínculo do SLA com o calendário de dias úteis",
      "Interação de Interfy Documents com Interfy Process",
      "Integração com Web Services",
    ],
  },
  {
    key: "documentos",
    label: "Recursos do Interfy Documents",
    features: [
      "Centralização de Conteúdo",
      "Auditoria Avançada",
      "Versionamento de Documentos",
      "Temporalidade Documental",
      "Estrutura de pastas flexível",
      "Perfil de acesso ao conteúdo",
      "Link externo para compartilhamento de conteúdo",
      "Criação de documentos com vários formatos de arquivos",
      "Integração com Microsoft Office (arrastar e soltar)",
      "Busca avançada",
      "Criação de Fichas de Indexação (Formulários Eletrônicos)",
      "Localização Física dos Documentos",
      "Controle de Consumo de Storage e Usuários",
      "Visualizador próprio para os principais formatos de arquivos",
      "Digitalização e Upload de documentos",
      "Captura Local e Descentralizada 100% Web",
      "Captura através de Scanners",
      "Captura através de Multifuncionais",
      "Captura via Smartphone",
      "Captura via Webcam",
    ],
  },
];

export type PricingFaqItem = {
  question: string;
  answer: string;
};

export const pricingFaq: PricingFaqItem[] = [
  {
    question: "Posso mudar de plano a qualquer momento?",
    answer:
      "Sim. Você pode fazer upgrade ou downgrade do seu plano a qualquer momento diretamente pelo painel de administração, sem multas ou burocracia.",
  },
  {
    question: "Como funcionam os créditos de AI?",
    answer:
      "Cada plano inclui uma cota mensal de créditos de AI, usada por recursos como extração inteligente e agentes. Os créditos não são cumulativos e são renovados todo mês.",
  },
  {
    question: "O que acontece após o período de teste?",
    answer:
      "Ao final dos 7 dias grátis, você pode escolher o plano ideal para continuar usando a plataforma. Não é necessário cartão de crédito para iniciar o teste.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartão de crédito, boleto bancário e faturamento via nota fiscal para contratos anuais e planos Enterprise.",
  },
  {
    question: "Os planos incluem implementação?",
    answer:
      "Os planos Starter, Business e Corporate incluem onboarding guiado. Para o plano Enterprise, oferecemos implementação dedicada com nosso time de especialistas.",
  },
  {
    question: "Vocês oferecem contrato anual com desconto?",
    answer:
      "Sim. Ao optar pela cobrança anual, você economiza até 30% em relação ao valor mensal, em qualquer um dos planos Starter, Business ou Corporate.",
  },
];
