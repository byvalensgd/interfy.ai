import type { TrustBadge } from "@/config/trust";

export type HeroHighlight = {
  icon: string;
  label: string;
};

export const agentesHeroHighlights: HeroHighlight[] = [
  { icon: "/icons/products/agents.svg", label: "Inteligência que gera valor" },
  { icon: "/icons/agentes/raio.svg", label: "Automação sem limites" },
  { icon: "/icons/agentes/shield-check.svg", label: "Seguro e governado" },
  { icon: "/icons/agentes/integrado-plataforma.svg", label: "Integrado a toda plataforma" },
];

export type CapabilityCard = {
  icon: string;
  title: string;
  description: string;
};

export const agentesCapabilities: CapabilityCard[] = [
  {
    icon: "/icons/agentes/agentes-inteligentes.svg",
    title: "Agentes Inteligentes",
    description: "Agentes com IA que entendem o contexto e executam ações de forma autônoma.",
  },
  {
    icon: "/icons/agentes/criacao-agentes.svg",
    title: "Criação de agentes",
    description: "Crie agentes personalizados com ou sem código em poucos minutos.",
  },
  {
    icon: "/icons/agentes/agentes-por-area.svg",
    title: "Agentes por área",
    description: "Tenha agentes dedicados para cada área da sua empresa: Financeiro, RH, Jurídico e mais.",
  },
  {
    icon: "/icons/agentes/raio.svg",
    title: "Execução automática de tarefas",
    description: "Executam tarefas repetitivas, reduzem erros e aceleram sua operação.",
  },
  {
    icon: "/icons/agentes/leitura-documentos.svg",
    title: "Leitura de documentos",
    description: "Leem, compreendem e extraem informações de documentos em segundos.",
  },
  {
    icon: "/icons/agentes/acionamento-processos.svg",
    title: "Acionamento de processos",
    description: "Iniciam e conduzem processos automaticamente na plataforma com base em eventos.",
  },
  {
    icon: "/icons/agentes/monitoramento.svg",
    title: "Monitoramento",
    description: "Acompanham atividades, prazos, indicadores e enviam atualizações em tempo real.",
  },
  {
    icon: "/icons/agentes/analise-informacoes.svg",
    title: "Análise de informações",
    description: "Analisam grandes volumes de dados e entregam insights inteligentes.",
  },
  {
    icon: "/icons/agentes/alertas-inteligentes.svg",
    title: "Alertas inteligentes",
    description: "Enviam alertas proativos sobre riscos, oportunidades, prazos e exceções.",
  },
  {
    icon: "/icons/agentes/recomendacoes.svg",
    title: "Recomendações",
    description: "Sugerem ações, decisões e próximos passos baseados em dados e histórico.",
  },
  {
    icon: "/icons/agentes/integracao-sistemas.svg",
    title: "Integração com sistemas",
    description: "Conectam-se a sistemas externos via APIs e trocam informações com segurança.",
  },
  {
    icon: "/icons/agentes/execucao-regras.svg",
    title: "Execução baseada em regras",
    description: "Executam ações seguindo regras de negócio e políticas da sua empresa.",
  },
];

export type EcosystemLink = {
  icon: string;
  product: string;
  colorClass: string;
  description: string;
};

export const agentesEcosystemLinks: EcosystemLink[] = [
  {
    icon: "/icons/ecosystem-grid/documents.svg",
    product: "Interfy Documents",
    colorClass: "text-ecm",
    description: "Agentes leem, analisam e atualizam documentos inteligentemente.",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    product: "Interfy Process",
    colorClass: "text-bpm",
    description: "Agentes iniciam processos, preenchem dados e conduzem fluxos automaticamente.",
  },
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    product: "Interfy Capture",
    colorClass: "text-swc",
    description: "Agentes extraem informações, classificam e enviam documentos para os fluxos corretos.",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    product: "Interfy Connect",
    colorClass: "text-cic",
    description: "Agentes interagem em conversas, respondem, compartilham informações e colaboram.",
  },
  {
    icon: "/icons/ecosystem-grid/voice.svg",
    product: "Interfy Voice",
    colorClass: "text-lvs-voice",
    description: "Agentes usam voz para responder, registrar, consultar e executar ações.",
  },
];

// Gradient (from -> to) for the connector dot between each pair of ecosystem badges
export const agentesEcosystemConnectorGradients: [string, string][] = [
  ["#2FB79C", "#0781EC"],
  ["#0781EC", "#2669E6"],
  ["#2669E6", "#1BC2DF"],
  ["#1BC2DF", "#09A1EA"],
];

export const agentesGovernanceList: string[] = [
  "Permissões granulares por agente e por usuário",
  "Ações auditadas e rastreáveis em todos os níveis",
  "Políticas de acesso e execução definidas pela empresa",
  "Conformidade com LGPD, ISO 27001, SOC 2 e outras",
  "Dados protegidos com criptografia de ponta a ponta",
];

export type CreditFeature = {
  icon: string;
  label: string;
};

export const agentesCreditFeatures: CreditFeature[] = [
  { icon: "/icons/agentes/credits-ia.svg", label: "Créditos inclusos em todos os planos" },
  { icon: "/icons/agentes/credits-support.svg", label: "Acompanhamento em tempo real" },
  { icon: "/icons/agentes/credits-plus.svg", label: "Compre créditos adicionais quando precisar" },
];

export const agentesCreditsBalance = {
  used: 65,
  label: "AI Credits",
  value: 12480,
  sublabel: "disponíveis",
};

export const agentesBenefits: TrustBadge[] = [
  { icon: "/icons/agentes/money.svg", label: "Reduza custos operacionais" },
  { icon: "/icons/agentes/raio.svg", label: "Mais produtividade e eficiência" },
  { icon: "/icons/agentes/load-check.svg", label: "Menos erros e retrabalho" },
  { icon: "/icons/agentes/time.svg", label: "Decisões mais rápidas e inteligentes" },
  { icon: "/icons/features/escalabilidade.svg", label: "Escalabilidade sem limites" },
];
