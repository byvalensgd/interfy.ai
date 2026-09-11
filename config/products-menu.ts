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
    href: "/documents",
    bg: "/ecm/cta-bg.webp",
  },
  {
    label: "Process",
    title: "Interfy Process",
    tagline: "Crie processos visuais, formulários e automações com AI.",
    href: "/process",
    bg: "/bpm/cta-bg.webp",
  },
];

export type ProductMenuItem = {
  href: string;
  icon: string;
};

/** Order matches header.json's `productsMenu.items` array. */
export const productsMenu: ProductMenuItem[] = [
  { href: "/documents", icon: "/icons/products/documents.svg" },
  { href: "/process", icon: "/icons/products/automation.svg" },
  { href: "/capture", icon: "/icons/products/capture.svg" },
  { href: "/sign", icon: "/icons/products/sign.svg" },
  { href: "/connect", icon: "/icons/products/connect.svg" },
  { href: "/agents", icon: "/icons/products/agents.svg" },
  { href: "/mobile", icon: "/icons/products/mobile.svg" },
  { href: "/voice", icon: "/icons/products/voice.svg" },
];
