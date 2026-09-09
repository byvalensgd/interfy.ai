export type FeaturedProduct = {
  label: string;
  title: string;
  tagline: string;
  href: string;
  bg: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    label: "Documents",
    title: "Interfy Documents",
    tagline: "Organize, encontre e proteja documentos com AI em cada etapa.",
    href: "/platform/documents",
    bg: "/ecm/cta-bg.webp",
  },
  {
    label: "Process",
    title: "Interfy Process",
    tagline: "Crie processos visuais, formulários e automações com AI.",
    href: "/platform/process",
    bg: "/bpm/cta-bg.webp",
  },
];

export type ProductMenuItem = {
  label: string;
  description: string;
  href: string;
  icon: string;
};

export const productsMenu: ProductMenuItem[] = [
  { label: "Documents", description: "Organize, encontre e proteja documentos com AI", href: "/platform/documents", icon: "/icons/products/documents.svg" },
  { label: "Process", description: "Crie processos visuais e automações com AI", href: "/platform/process", icon: "/icons/products/automation.svg" },
  { label: "Capture", description: "Digitalize, reconheça e extraia dados", href: "/platform/capture", icon: "/icons/products/capture.svg" },
  { label: "Sign", description: "Assine documentos com validade jurídica", href: "/platform/sign", icon: "/icons/products/sign.svg" },
  { label: "Connect", description: "Colabore e comunique-se com sua equipe", href: "/platform/connect", icon: "/icons/products/connect.svg" },
  { label: "Agents", description: "IA que entende e apoia usuários", href: "/platform/agents", icon: "/icons/products/agents.svg" },
  { label: "Mobile", description: "Sua operação na palma da mão", href: "/platform/mobile", icon: "/icons/products/mobile.svg" },
  { label: "Voice", description: "Fale com a plataforma de forma natural", href: "/platform/voice", icon: "/icons/products/voice.svg" },
];
