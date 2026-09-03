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
  { icon: "/icons/products/automation.svg", label: "Processes" },
  { icon: "/icons/products/capture.svg", label: "Capture" },
  { icon: "/icons/products/sign.svg", label: "Sign" },
  { icon: "/icons/products/connect.svg", label: "Connect" },
  { icon: "/icons/products/mobile.svg", label: "Mobile" },
  { icon: "/icons/products/agents.svg", label: "Agents" },
  { icon: "/icons/products/voice.svg", label: "Voice" },
];

export type PlanKey = "starter" | "business" | "corporate" | "enterprise";

export type PricingPlan = {
  key: PlanKey;
  name: string;
  colorVar: string;
  gradient?: boolean;
  monthlyPrice: number | null;
  annualPrice: number | null;
  ctaLabel: string;
  trialLabel?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    key: "starter",
    name: "Starter",
    colorVar: "var(--color-starter)",
    monthlyPrice: 171.5,
    annualPrice: 120,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste grátis por 7 dias!",
  },
  {
    key: "business",
    name: "Business",
    colorVar: "var(--color-business)",
    monthlyPrice: 200,
    annualPrice: 140,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste grátis por 7 dias!",
  },
  {
    key: "corporate",
    name: "Corporate",
    colorVar: "var(--color-corporate)",
    monthlyPrice: 250,
    annualPrice: 175,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste grátis por 7 dias!",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    colorVar: "var(--color-enterprise)",
    gradient: true,
    monthlyPrice: null,
    annualPrice: null,
    ctaLabel: "Fale com um especialista",
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
    values: included("Usuários Ilimitados (cobrança p/usuário)"),
  },
  {
    mark: "check",
    values: {
      starter: "Mínimo de 5 Usuários Full",
      business: "Mínimo de 10 Usuários Full",
      corporate: "Mínimo de 15 Usuários Full",
      enterprise: "Usuários Full Ilimitados",
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
    values: included("Interfy Capture + Mobile"),
  },
  {
    mark: "check",
    values: {
      starter: "25 GB de Storage",
      business: "50 GB de Storage",
      corporate: "100 GB de Storage",
      enterprise: "Storage Ilimitado",
    },
  },
  {
    mark: "check",
    values: {
      starter: "100 Créditos de AI/mês (não cumulativo)",
      business: "250 Créditos de AI/mês (não cumulativo)",
      corporate: "500 Créditos de AI/mês (não cumulativo)",
      enterprise: "Créditos de AI/mês Ilimitados",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Envios de Documentos para Assinatura Digital/mês (não cumulativo)",
      business: "20 Envios de Documentos para Assinatura Digital/mês (não cumulativo)",
      corporate: "30 Envios de Documentos para Assinatura Digital/mês (não cumulativo)",
      enterprise: "Envios de Documentos para Assinatura Digital Ilimitados",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Digitalizações de Documentos com Validade Legal/mês (não cumulativo)",
      business: "20 Digitalizações de Documentos com Validade Legal/mês (não cumulativo)",
      corporate: "30 Digitalizações de Documentos com Validade Legal/mês (não cumulativo)",
      enterprise: "Digitalizações de Documentos com Validade Legal Ilimitadas",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos",
      business: "15 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos",
      corporate: "20 Tickets/mês (não cumulativo) do Chat para interação e compartilhamento de documentos",
      enterprise: "Tickets Ilimitados do Chat para interação e compartilhamento de documentos",
    },
  },
  {
    mark: "check",
    values: {
      starter: "10 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
      business: "15 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
      corporate: "20 Interações Dinâmicas para usuários externos em Processos/mês (não cumulativo)",
      enterprise: "Interações Dinâmicas Ilimitadas para usuários externos em Processos",
    },
  },
  { mark: "check", values: included("Processos Ilimitados") },
  { mark: "check", values: included("Acesso API Interfy") },
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
    values: {
      starter: "Módulo de Gestão de Arquivo Físico",
      business: "Módulo de Gestão de Arquivo Físico",
      corporate: "Módulo de Gestão de Arquivo Físico",
      enterprise: "Módulo de Gestão de Arquivo Físico",
    },
    // Starter and Business do not include this module — see notIncludedFor below.
  },
];

// Row indexes (0-based) that are crossed out ("not included") for a given plan.
export const pricingNotIncluded: Partial<Record<PlanKey, number[]>> = {
  starter: [20],
  business: [20],
};

export type ComparisonRow = {
  icon: string;
  label: string;
  values: Record<SmallPlanKey, string>;
};

export const pricingComparisonRows: ComparisonRow[] = [
  {
    icon: "storage",
    label: "Armazenamento",
    values: { free: "1 GB", individual: "5 GB", teams: "10 GB", startup: "15 GB" },
  },
  {
    icon: "mobile",
    label: "Interfy Capture + Mobile",
    values: { free: "cross", individual: "cross", teams: "cross", startup: "check" },
  },
  {
    icon: "modules",
    label: "Produtos inclusos",
    values: { free: "2 produtos", individual: "3 produtos", teams: "3 produtos", startup: "7 produtos" },
  },
  {
    icon: "ai",
    label: "Créditos de AI / mês",
    values: { free: "5", individual: "10", teams: "10", startup: "20" },
  },
  {
    icon: "credits",
    label: "Envios para Assinatura Digital / mês",
    values: { free: "3", individual: "10", teams: "10", startup: "10" },
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
  features: SmallFeatureItem[];
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
    productsLabel: "2 PRODUTOS INCLUSOS",
    anual: {
      price: 0,
      billingLabel: "Cobrança anual",
      features: [
        { mark: "check", text: "1 Usuário" },
        { mark: "cross", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "1 GB de armazenamento" },
        { mark: "check", text: "5 créditos de IA / mês" },
        { mark: "check", text: "3 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
      ],
    },
    mensal: {
      price: 0,
      billingLabel: "Cobrança anual",
      features: [
        { mark: "check", text: "1 Usuário" },
        { mark: "cross", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "1 GB de armazenamento" },
        { mark: "check", text: "5 créditos de IA / mês" },
        { mark: "check", text: "3 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
        { mark: "check", text: "5 Digitalizações de Documentos com Validade Legal / mês (não cumulativo)" },
      ],
    },
  },
  {
    key: "individual",
    name: "Individual",
    colorVar: "var(--color-business)",
    ctaLabel: "Contratar agora",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "3 PRODUTOS INCLUSOS",
    anual: {
      price: 50,
      oldPrice: 71.5,
      billingLabel: "Cobrança anual",
      features: [
        { mark: "check", text: "Usuários Ilimitados (cobrança p/usuário)" },
        { mark: "check", text: "Mínimo de 1 Usuário Full" },
        { mark: "check", text: "2 Usuário(s) de Consulta" },
        { mark: "cross", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "5 GB de armazenamento" },
        { mark: "check", text: "10 Créditos de AI/mês (não cumulativo)" },
        { mark: "check", text: "10 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
        { mark: "check", text: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos" },
      ],
    },
    mensal: {
      price: 71.5,
      billingLabel: "Cobrança mensal",
      features: [
        { mark: "check", text: "Usuários Ilimitados (cobrança p/usuário)" },
        { mark: "check", text: "Mínimo de 1 Usuário Full" },
        { mark: "check", text: "2 Usuário(s) de Consulta" },
        { mark: "cross", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "5 GB de armazenamento" },
        { mark: "check", text: "10 Créditos de AI/mês (não cumulativo)" },
        { mark: "check", text: "10 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
        { mark: "check", text: "10 Digitalizações de Documentos com Validade Legal / mês (não cumulativo)" },
        { mark: "check", text: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos" },
      ],
    },
  },
  {
    key: "teams",
    name: "Teams",
    colorVar: "var(--color-corporate)",
    ctaLabel: "Contratar agora",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "3 PRODUTOS INCLUSOS",
    anual: {
      price: 55.02,
      oldPrice: 78.6,
      billingLabel: "Cobrança anual",
      features: [
        { mark: "check", text: "Usuários Ilimitados (cobrança p/usuário)" },
        { mark: "check", text: "Mínimo de 2 Usuários Full" },
        { mark: "check", text: "3 Usuário(s) de Consulta" },
        { mark: "cross", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "10 GB de armazenamento" },
        { mark: "check", text: "10 Créditos de AI/mês (não cumulativo)" },
        { mark: "check", text: "10 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
        { mark: "check", text: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos" },
      ],
    },
    mensal: {
      price: 78.6,
      billingLabel: "Cobrança mensal",
      features: [
        { mark: "check", text: "Usuários Ilimitados (cobrança p/usuário)" },
        { mark: "check", text: "Mínimo de 2 Usuários Full" },
        { mark: "check", text: "3 Usuário(s) de Consulta" },
        { mark: "cross", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "10 GB de armazenamento" },
        { mark: "check", text: "10 Créditos de AI/mês (não cumulativo)" },
        { mark: "check", text: "10 Envios de Documentos para Assinatura Digital / mês (não cumulativo)" },
        { mark: "check", text: "10 Digitalizações de Documentos com Validade Legal / mês (não cumulativo)" },
        { mark: "check", text: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos" },
      ],
    },
  },
  {
    key: "startup",
    name: "Startup",
    colorVar: "var(--color-enterprise)",
    gradient: true,
    popular: true,
    ctaLabel: "Contratar agora",
    trialLabel: "Teste Grátis por 7 dias!",
    productsLabel: "7 PRODUTOS INCLUSOS",
    anual: {
      price: 100,
      oldPrice: 143,
      billingLabel: "Cobrança anual",
      features: [
        { mark: "check", text: "Usuários Ilimitados (cobrança p/usuário)" },
        { mark: "check", text: "Mínimo de 3 Usuários Full" },
        { mark: "check", text: "5 Usuário(s) de Consulta" },
        { mark: "product", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "15 GB de armazenamento" },
        { mark: "check", text: "20 Créditos de AI/mês (não cumulativo)" },
        { mark: "check", text: "10 Envios de Documentos para Assinatura Digital/mês (não cumulativo)" },
        { mark: "check", text: "10 Digitalizações de Documentos com Validade Legal/mês (não cumulativo)" },
        { mark: "check", text: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos" },
      ],
    },
    mensal: {
      price: 143,
      billingLabel: "Cobrança mensal",
      features: [
        { mark: "check", text: "Usuários Ilimitados (cobrança p/usuário)" },
        { mark: "check", text: "Mínimo de 3 Usuários Full" },
        { mark: "check", text: "5 Usuário(s) de Consulta" },
        { mark: "product", text: "Interfy Capture + Mobile" },
        { mark: "check", text: "15 GB de armazenamento" },
        { mark: "check", text: "20 Créditos de AI/mês (não cumulativo)" },
        { mark: "check", text: "10 Envios de Documentos para Assinatura Digital/mês (não cumulativo)" },
        { mark: "check", text: "10 Digitalizações de Documentos com Validade Legal/mês (não cumulativo)" },
        { mark: "check", text: "10 Tickets/mês (Não cumulativo) do Chat para interação e compartilhamento de documentos" },
      ],
    },
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
    label: "Recursos do Interfy Processes",
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
      "Interação de Interfy Documents com Interfy Processes",
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
