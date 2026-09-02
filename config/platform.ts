import type { HeroStat } from "@/config/hero";

export const platformStats: HeroStat[] = [
  { icon: "/icons/stats2/usuarios.svg", label: ["2,5M +"], sublabel: "usuários" },
  { icon: "/icons/stats2/documentos.svg", label: ["7B +"], sublabel: "documentos" },
  { icon: "/icons/stats2/processos.svg", label: ["6M +"], sublabel: "processos" },
  { icon: "/icons/stats2/gerenciados.svg", label: ["500 TB"], sublabel: "gerenciados" },
  { icon: "/icons/stats2/assinaturas.svg", label: ["20M +"], sublabel: "assinaturas" },
  { icon: "/icons/stats2/uptime.svg", label: ["99,99%"], sublabel: "uptime" },
  { icon: "/icons/stats2/suporte.svg", label: ["24/7"], sublabel: "suporte" },
];

export type EcosystemItem = {
  icon: string;
  title: string;
  description: string;
};

export const ecosystemItems: EcosystemItem[] = [
  { icon: "/icons/ecosystem/documents.svg", title: "Documents", description: "Organize e encontre com inteligência" },
  { icon: "/icons/ecosystem/automation.svg", title: "Automation", description: "Crie fluxos, aprovações e tarefas" },
  { icon: "/icons/ecosystem/voice.svg", title: "Voice", description: "Fale com a plataforma de forma natural" },
  { icon: "/icons/ecosystem/capture.svg", title: "Capture", description: "Digitalize, reconheça e extraia dados" },
  { icon: "/icons/ecosystem/agents.svg", title: "Agents", description: "IA que entende e apoia usuários" },
  { icon: "/icons/ecosystem/sign.svg", title: "Sign", description: "Assine documentos com validade jurídica" },
  { icon: "/icons/ecosystem/connect.svg", title: "Connect", description: "Colabore e comunique-se com sua equipe" },
  { icon: "/icons/ecosystem/mobile.svg", title: "Mobile", description: "Sua operação na palma da mão" },
];
