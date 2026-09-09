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
    href: "/plataforma/documents",
    bg: "/ecm/cta-bg.webp",
  },
  {
    label: "Process",
    title: "Interfy Process",
    tagline: "Crie processos visuais, formulários e automações com AI.",
    href: "/plataforma/process",
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
  { label: "Capture", description: "Digitalize, reconheça e extraia dados", href: "/plataforma/capture", icon: "/icons/products/capture.svg" },
  { label: "Sign", description: "Assine documentos com validade jurídica", href: "/plataforma/sign", icon: "/icons/products/sign.svg" },
  { label: "Connect", description: "Colabore e comunique-se com sua equipe", href: "/plataforma/connect", icon: "/icons/products/connect.svg" },
  { label: "Agents", description: "IA que entende e apoia usuários", href: "/plataforma/agents", icon: "/icons/products/agents.svg" },
  { label: "Mobile", description: "Sua operação na palma da mão", href: "/plataforma/mobile", icon: "/icons/products/mobile.svg" },
  { label: "Voice", description: "Fale com a plataforma de forma natural", href: "/plataforma/voice", icon: "/icons/products/voice.svg" },
];
