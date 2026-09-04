import type { HeroStat } from "@/config/hero";

export const platformStats: HeroStat[] = [
  { icon: "/icons/stats/clientes.svg", label: ["25.000 +"], sublabel: "clientes" },
  { icon: "/icons/stats2/usuarios.svg", label: ["2,5M +"], sublabel: "usuários" },
  { icon: "/icons/stats2/documentos.svg", label: ["12B +"], sublabel: "documentos" },
  { icon: "/icons/stats2/gerenciados.svg", label: ["1000TB +"], sublabel: "armazenados" },
  { icon: "/icons/stats2/assinaturas.svg", label: ["20M +"], sublabel: "assinaturas" },
  { icon: "/icons/stats2/processos.svg", label: ["6M +"], sublabel: "processos" },
  { icon: "/icons/stats/paises.svg", label: ["180 +"], sublabel: "países" },
  { icon: "/icons/stats/idiomas.svg", label: ["16"], sublabel: "idiomas" },
];

export type EcosystemItem = {
  icon: string;
  title: string;
  // Figma's manually-edited two-line break — kept explicit (not left to wrap)
  // so every badge renders at a predictable, equal width.
  descriptionLines: [string, string];
  // English copy, held here for when the site wires up full i18n content
  // switching (only the language selector UI exists today).
  titleEn: string;
  descriptionEn: string;
};

export const ecosystemItems: EcosystemItem[] = [
  {
    icon: "/icons/ecosystem/documents.svg",
    title: "Documents",
    descriptionLines: ["Organize e encontre", "com inteligência"],
    titleEn: "Documents",
    descriptionEn: "Organize and find with intelligence",
  },
  {
    icon: "/icons/ecosystem/automation.svg",
    title: "Process",
    descriptionLines: ["Crie fluxos, aprovações", "e tarefas"],
    titleEn: "Process",
    descriptionEn: "Create flows, approvals and tasks",
  },
  {
    icon: "/icons/ecosystem/voice.svg",
    title: "Voice",
    descriptionLines: ["Fale com a plataforma", "de forma natural"],
    titleEn: "Voice",
    descriptionEn: "Talk to the platform naturally",
  },
  {
    icon: "/icons/ecosystem/capture.svg",
    title: "Capture",
    descriptionLines: ["Digitalize, reconheça", "e extraia dados"],
    titleEn: "Capture",
    descriptionEn: "Scan, recognize and extract data",
  },
  {
    icon: "/icons/ecosystem/agents.svg",
    title: "Agents",
    descriptionLines: ["IA que entende e", "apoia usuários"],
    titleEn: "Agents",
    descriptionEn: "AI that understands and supports users",
  },
  {
    icon: "/icons/ecosystem/sign.svg",
    title: "Sign",
    descriptionLines: ["Assine documentos", "com validade jurídica"],
    titleEn: "Sign",
    descriptionEn: "Sign documents with legal validity",
  },
  {
    icon: "/icons/ecosystem/connect.svg",
    title: "Connect",
    descriptionLines: ["Colabore e comunique-se", "com sua equipe"],
    titleEn: "Connect",
    descriptionEn: "Collaborate and communicate with your team",
  },
  {
    icon: "/icons/ecosystem/mobile.svg",
    title: "Mobile",
    descriptionLines: ["Sua operação na", "palma da mão"],
    titleEn: "Mobile",
    descriptionEn: "Your operation in the palm of your hand",
  },
];
