import type { HeroStat } from "@/config/hero";

export const bpmHeroStats: HeroStat[] = [
  { icon: "/icons/bpm/stat-processos.svg", label: "6 MI +", sublabel: "processos automatizados" },
  { icon: "/icons/bpm/stat-clientes.svg", label: "25.000 +", sublabel: "clientes" },
  { icon: "/icons/bpm/stat-usuarios.svg", label: "2.5 MI +", sublabel: "usuários ativos" },
  { icon: "/icons/bpm/stat-web.svg", label: "100% Web", sublabel: "Acesse de qualquer lugar" },
];

export type CapabilityCard = {
  icon: string;
  title: string;
  description: string;
};

export const bpmCapabilities: CapabilityCard[] = [
  {
    icon: "/icons/bpm/criacao-visual.svg",
    title: "Criação visual de processos",
    description: "Monte fluxos de forma simples e intuitiva com o designer visual drag-and-drop.",
  },
  {
    icon: "/icons/bpm/criacao-ai.svg",
    title: "Criação de processos com AI",
    description: "Descreva o que precisa e a AI cria o processo ideal para você em segundos.",
  },
  {
    icon: "/icons/bpm/geracao-formularios.svg",
    title: "Geração automática de formulários",
    description: "A AI gera formulários completos a partir do processo com campos inteligentes.",
  },
  {
    icon: "/icons/bpm/formularios-inteligentes.svg",
    title: "Formulários inteligentes",
    description: "Campos condicionais, validações automáticas e cálculos para reduzir erros e retrabalho.",
  },
  {
    icon: "/icons/bpm/aprovacoes.svg",
    title: "Aprovações",
    description: "Fluxos de aprovação flexíveis com múltiplos níveis paralelos ou condicionais.",
  },
  {
    icon: "/icons/bpm/tarefas.svg",
    title: "Tarefas",
    description: "Atribua, acompanhe e gerencie tarefas com prazos, prioridades e responsáveis.",
  },
  {
    icon: "/icons/bpm/regras-negocio.svg",
    title: "Regras de negócio",
    description: "Automatize decisões e ações com regras personalizadas e condições avançadas.",
  },
  {
    icon: "/icons/bpm/slas.svg",
    title: "SLAs",
    description: "Defina prazos e acordos de nível de serviço com monitoramento e alertas automáticos.",
  },
  {
    icon: "/icons/bpm/alertas-notificacoes.svg",
    title: "Alertas e notificações",
    description: "Notificações por e-mail, push ou dentro da plataforma para manter todos alinhados.",
  },
  {
    icon: "/icons/bpm/dashboards.svg",
    title: "Dashboards em tempo real",
    description: "Acompanhe a operação com dashboards dinâmicos e visuais atualizados.",
  },
  {
    icon: "/icons/bpm/indicadores-metricas.svg",
    title: "Indicadores e métricas",
    description: "Métricas personalizadas para medir desempenho, gargalos e produtividade.",
  },
  {
    icon: "/icons/bpm/participacao-externa.svg",
    title: "Participação externa",
    description: "Inclua clientes, fornecedores e parceiros nos processos com segurança e controle.",
  },
  {
    icon: "/icons/bpm/processos-mobile.svg",
    title: "Processos no Mobile",
    description: "Execute, aprove e acompanhe processos de qualquer lugar pelo app Interfy Mobile.",
  },
  {
    icon: "/icons/bpm/templates-prontos.svg",
    title: "Templates prontos",
    description: "Biblioteca de modelos de processos prontos para usar nos mais diversos setores.",
  },
  {
    icon: "/icons/bpm/automacoes-agentes.svg",
    title: "Automações com Agentes",
    description: "Agentes de AI executam tarefas automáticas, analisam dados e tomam ações inteligentes.",
  },
  {
    icon: "/icons/bpm/integracao-nativa.svg",
    title: "Integração nativa",
    description: "Integração completa com Interfy Documentos, Captura e Assinatura para um fluxo 100% conectado.",
  },
];

export type EcosystemLink = {
  icon: string;
  product: string;
  colorClass: string;
  description: string;
};

export const bpmEcosystemLinks: EcosystemLink[] = [
  {
    icon: "/icons/ecosystem-grid/documents.svg",
    product: "Documents",
    colorClass: "text-ecm",
    description: "Documentos e informações ao alcance do processo.",
  },
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    product: "Capture",
    colorClass: "text-swc",
    description: "Captura inteligente e extração de dados.",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    product: "Process",
    colorClass: "text-bpm",
    description: "Processos e automações inteligentes.",
  },
  {
    icon: "/icons/ecosystem-grid/sign.svg",
    product: "Sign",
    colorClass: "text-dss",
    description: "Assinaturas digitais integradas ao fluxo.",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    product: "Connect",
    colorClass: "text-cic",
    description: "Colaboração e comunicação em tempo real.",
  },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    product: "Agents",
    colorClass: "gradient",
    description: "Agentes de AI que analisam, decidem e executam.",
  },
];

export const bpmResultsChecklist: string[] = [
  "Menos retrabalho e mais padronização",
  "Processos mais rápidos e eficientes",
  "Redução de custos operacionais",
  "Transparência total e rastreabilidade",
  "Decisões melhores com dados e indicadores",
  "Satisfação de clientes, equipes e parceiros",
];

export type ProcessType = {
  icon: string;
  label: string;
};

export const bpmProcessTypes: ProcessType[] = [
  { icon: "/icons/bpm/tipo-administrativos.svg", label: "Administrativos" },
  { icon: "/icons/bpm/tipo-financeiros.svg", label: "Financeiros" },
  { icon: "/icons/bpm/tipo-compras.svg", label: "Compras" },
  { icon: "/icons/bpm/tipo-rh.svg", label: "RH" },
  { icon: "/icons/bpm/tipo-juridicos.svg", label: "Jurídicos" },
  { icon: "/icons/bpm/tipo-comerciais.svg", label: "Comerciais" },
  { icon: "/icons/bpm/tipo-operacionais.svg", label: "Operacionais" },
  { icon: "/icons/bpm/tipo-ti.svg", label: "TI" },
];

export const bpmCtaFeatures: HeroStat[] = [
  { icon: "/icons/segments/cta-web-mobile.svg", label: "100% Web", sublabel: "Acesse de qualquer lugar" },
  { icon: "/icons/agentes/shield-check.svg", label: "Segurança de ponta", sublabel: "Dados protegidos e conformes" },
  { icon: "/icons/features/escalabilidade.svg", label: "Escalável", sublabel: "Do que pequeno ao grande negócio" },
  { icon: "/global/fast-support.svg", label: "Suporte 24/7", sublabel: "Sempre que precisar" },
];
