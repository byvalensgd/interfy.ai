export type HeroHighlight = {
  icon: string;
  label: string;
};

export const connectHeroHighlights: HeroHighlight[] = [
  { icon: "/icons/connect/chat.svg", label: "Colaboração em tempo real" },
  { icon: "/icons/connect/link.svg", label: "Tudo conectado e rastreável" },
  { icon: "/icons/connect/shield-check.svg", label: "Seguro e confiável" },
  { icon: "/icons/connect/mail.svg", label: "Internos e externos na mesma conversa" },
];

export type CapabilityCard = {
  icon: string;
  title: string;
  description: string;
};

export const connectCapabilities: CapabilityCard[] = [
  {
    icon: "/icons/connect/capabilities/comunicacao-interna.svg",
    title: "Comunicação interna",
    description: "Converse em canais, grupos ou mensagens diretas com sua equipe.",
  },
  {
    icon: "/icons/connect/capabilities/compartilhamento-inteligente.svg",
    title: "Compartilhamento inteligente",
    description: "Compartilhe arquivos, links e informações com segurança e praticidade.",
  },
  {
    icon: "/icons/connect/capabilities/notificacao-tempo-real.svg",
    title: "Notificação em tempo real",
    description: "Receba alertas e lembretes sobre mensagens, menções, tarefas e atualizações importantes.",
  },
  {
    icon: "/icons/connect/capabilities/usuarios-internos-externos.svg",
    title: "Usuários internos e externos",
    description: "Inclua clientes, parceiros e fornecedores nas conversas de forma segura.",
  },
  {
    icon: "/icons/connect/capabilities/historico-completo.svg",
    title: "Histórico completo",
    description: "Todo o histórico de conversas, arquivos e ações sempre disponível e pesquisável.",
  },
  {
    icon: "/icons/connect/capabilities/rastreabilidade-total.svg",
    title: "Rastreabilidade total",
    description: "Cada mensagem, análise, decisão registrada com hora e responsável.",
  },
  {
    icon: "/icons/connect/capabilities/colaboracao-equipes.svg",
    title: "Colaboração entre equipes",
    description: "Trabalhe de forma integrada entre áreas e departamentos sem perder o contexto.",
  },
  {
    icon: "/icons/connect/capabilities/ai-resumir-conversas.svg",
    title: "AI para resumir conversas",
    description: "A Interfy AI gera resumos inteligentes das conversas e destaca o que é mais importante.",
  },
  {
    icon: "/icons/connect/capabilities/ai-localizar-informacoes.svg",
    title: "AI para localizar informações",
    description: "Pergunte em linguagem natural e encontre rapidamente o que precisa nas conversas.",
  },
  {
    icon: "/icons/connect/capabilities/mobile-completo.svg",
    title: "Mobile completo",
    description: "Acesse suas conversas, arquivos e notificações de qualquer lugar pelo app Interfy Mobile.",
  },
];

export type EcosystemLink = {
  icon: string;
  product: string;
  description: string;
  colorClass?: string;
  gradient?: boolean;
};

export const connectEcosystemLinks: EcosystemLink[] = [
  {
    icon: "/icons/ecosystem-grid/documents.svg",
    product: "Documents",
    colorClass: "text-ecm",
    description: "Acesse e comente documentos sem sair da conversa.",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    product: "Process",
    colorClass: "text-bpm",
    description: "Inicie ações e mova processos direto da conversa.",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    product: "Connect",
    colorClass: "text-cic",
    description: "Conecte pessoas e centralize todas as comunicações.",
  },
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    product: "Capture",
    colorClass: "text-swc",
    description: "Capture documentos e compartilhe na conversa.",
  },
  {
    icon: "/icons/ecosystem-grid/sign.svg",
    product: "Sign",
    colorClass: "text-dss",
    description: "Envie documentos para assinatura e acompanhe tudo por aqui.",
  },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    product: "Agents",
    gradient: true,
    description: "Agentes de AI apoiam, analisam e executam cada interação.",
  },
];

export type ProductivityItem = {
  icon: string;
  title: string;
  description: string;
};

export const connectProductivityItems: ProductivityItem[] = [
  {
    icon: "/icons/connect/productivity/mais-agilidade.svg",
    title: "Mais agilidade",
    description: "Decisões mais rápidas com tudo no contexto certo.",
  },
  {
    icon: "/icons/connect/productivity/menos-retrabalho.svg",
    title: "Menos retrabalho",
    description: "Informação centralizada e acessível para todos os envolvidos.",
  },
  {
    icon: "/icons/connect/productivity/mais-visibilidade.svg",
    title: "Mais visibilidade",
    description: "Acompanhe o andamento das conversas e atividades em tempo real.",
  },
  {
    icon: "/icons/connect/productivity/mais-seguranca.svg",
    title: "Mais segurança",
    description: "Governança, permissões e conformidade em cada interação.",
  },
];
