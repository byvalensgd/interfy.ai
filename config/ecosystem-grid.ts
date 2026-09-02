export type EcosystemGridItem = {
  icon: string;
  product: string;
  colorClass: string;
  description: string;
};

export const ecosystemGridItems: EcosystemGridItem[] = [
  {
    icon: "/icons/ecosystem-grid/documents.svg",
    product: "Documentos",
    colorClass: "text-ecm",
    description: "Gestão inteligente de documentos e informações",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    product: "Processos",
    colorClass: "text-bpm",
    description: "Automação inteligente de processos e Tarefas",
  },
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    product: "Captura",
    colorClass: "text-swc",
    description: "Captura inteligente de documentos com IA",
  },
  {
    icon: "/icons/ecosystem-grid/sign.svg",
    product: "Assinatura",
    colorClass: "text-dss",
    description: "Assinatura digital gratuita para todos os usuários",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    product: "Colaboração",
    colorClass: "text-cic",
    description: "Colaboração e comunicação conectadas à operação",
  },
  {
    icon: "/icons/ecosystem-grid/mobile.svg",
    product: "Mobile",
    colorClass: "text-azul-base",
    description: "Sua operação completa na palma da mão",
  },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    product: "Agentes",
    colorClass: "gradient",
    description: "Agentes de IA que analisam, decidem e executam",
  },
  {
    icon: "/icons/ecosystem-grid/voice.svg",
    product: "Voz",
    colorClass: "text-lvs-voice",
    description: "Interação por voz com linguagem natural e IA",
  },
];
