export type IconBadge = {
  icon: string;
  title: string;
  subtitle: string;
};

export const heroDifferentiators: IconBadge[] = [
  { icon: "/icons/test-drive/calendar.svg", title: "7 dias grátis", subtitle: "para testar tudo" },
  { icon: "/icons/test-drive/card.svg", title: "Sem cartão", subtitle: "Sem compromisso" },
  { icon: "/icons/test-drive/workspace.svg", title: "Workspace em minutos", subtitle: "Crie agora mesmo" },
  { icon: "/icons/test-drive/web-mobile.svg", title: "100% Web + Mobile", subtitle: "Acesse de onde estiver" },
  { icon: "/icons/stats/ai-native.svg", title: "AI Native", subtitle: "Inteligência em tudo" },
  { icon: "/icons/stats/seguranca.svg", title: "Dados preservados", subtitle: "Após o teste" },
];

export type NumberedStep = {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  number: string;
};

export const howItWorksSteps: NumberedStep[] = [
  {
    icon: "/icons/test-drive/user-add.svg",
    title: "Crie sua Workspace",
    description: "Cadastro simples e rápido. Sem cartão de crédito.",
    colorClass: "bg-ecm",
    number: "01",
  },
  {
    icon: "/icons/test-drive/rocket.svg",
    title: "Conheça a plataforma",
    description: "Explore todos os produtos e recursos disponíveis.",
    colorClass: "bg-bpm",
    number: "02",
  },
  {
    icon: "/icons/test-drive/test-operation.svg",
    title: "Teste com sua operação",
    description: "Carregue documentos, crie processos, use AI e experimente os recursos.",
    colorClass: "bg-dss",
    number: "03",
  },
  {
    icon: "/icons/test-drive/check-circle-blue.svg",
    title: "Escolha seu plano",
    description: "Ao final dos 7 dias, continue exatamente de onde parou.",
    colorClass: "bg-swc",
    number: "04",
  },
];

export type CapabilityItem = {
  icon: string;
  title: string;
  description: string;
  titleClassName: string;
};

export const testDriveCapabilities: CapabilityItem[] = [
  {
    icon: "/icons/ecosystem-grid/documents.svg",
    title: "Documents",
    description: "Gestão inteligente de documentos e informações",
    titleClassName: "text-ecm",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    title: "Process",
    description: "Automação inteligente de processos e Tarefas",
    titleClassName: "text-bpm",
  },
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    title: "Capture",
    description: "Captura inteligente de documentos com IA",
    titleClassName: "text-swc",
  },
  {
    icon: "/icons/ecosystem-grid/sign.svg",
    title: "Sign",
    description: "Assinatura digital gratuita para todos os usuários",
    titleClassName: "text-dss",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    title: "Connect",
    description: "Colaboração e comunicação conectadas à operação",
    titleClassName: "text-cic",
  },
  {
    icon: "/icons/ecosystem-grid/mobile.svg",
    title: "Mobile",
    description: "Sua operação completa na palma da mão",
    titleClassName: "text-azul-base",
  },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    title: "Agents",
    description: "Agentes de IA que analisam, decidem e executam",
    titleClassName: "inline-block bg-[linear-gradient(121deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent",
  },
  {
    icon: "/icons/ecosystem-grid/voice.svg",
    title: "Voice",
    description: "Interação por voz com linguagem natural e IA",
    titleClassName: "text-lvs-voice",
  },
];

export type ChecklistItem = {
  text: string;
  highlight?: string;
  highlightClassName?: string;
};

export const readyChecklist: ChecklistItem[] = [
  { text: "Documentos de exemplo" },
  { text: "Processo pronto" },
  { text: "Formulário inteligente" },
  { text: "Tarefa pendente" },
  { text: "Documento para assinatura" },
  { text: "Exemplo de ", highlight: "Capture", highlightClassName: "text-swc" },
  { text: "Agente configurado" },
  { text: "Comandos para ", highlight: "Voice", highlightClassName: "text-lvs-voice" },
];

export type JourneyDay = {
  icon: string;
  line1: string;
  line2: string;
};

export const journeyDays: JourneyDay[] = [
  { icon: "/icons/test-drive/home-bt-2.svg", line1: "Conheça sua", line2: "Workspace" },
  { icon: "/icons/ecosystem-grid/documents.svg", line1: "Explore", line2: "Documents" },
  { icon: "/icons/ecosystem-grid/automation.svg", line1: "Automatize um", line2: "Processo" },
  { icon: "/icons/ecosystem-grid/capture.svg", line1: "Teste fazer", line2: "Capture" },
  { icon: "/icons/ecosystem-grid/sign.svg", line1: "Experimente", line2: "Sign" },
  { icon: "/icons/ecosystem-grid/agents.svg", line1: "Agents", line2: "+ Voice" },
  { icon: "/icons/test-drive/premium-crown.svg", line1: "Escolha seu", line2: "Plano" },
];

// Gradient (from -> to) for the connector dot between each pair of journey days
export const journeyConnectorGradients: [string, string][] = [
  ["#2FB79C", "#0781EC"],
  ["#0781EC", "#2669E6"],
  ["#2669E6", "#1BC2DF"],
  ["#1BC2DF", "#09A1EA"],
  ["#1BC2DF", "#09A1EA"],
  ["#1BC2DF", "#09A1EA"],
];

export const dataPreservedList: string[] = [
  "Workspace exclusiva",
  "Ambiente protegido",
  "Criptografia avançada",
  "Controle de acesso",
  "Isolamento de dados",
  "Nenhuma cobrança automática",
  "Sem cartão de crédito",
];

export type PlanFeature = {
  icon: string;
  label: string;
};

export const endOfTrialFeatures: PlanFeature[] = [
  { icon: "/icons/test-drive/save.svg", label: "Seus dados preservados" },
  { icon: "/icons/test-drive/copy.svg", label: "Transição sem perda" },
  { icon: "/icons/test-drive/data-protected.svg", label: "Nada é apagado sem sua autorização" },
  { icon: "/icons/test-drive/continue-anytime.svg", label: "Continue quando quiser" },
];
