export const siteConfig = {
  name: "Interfy",
  title: "Interfy — Sistemas sob medida para o seu negócio",
  description:
    "A Interfy desenvolve sistemas web sob medida para empresas que precisam de eficiência, escala e tecnologia confiável.",
  url: "https://interfy.ai",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Plataforma", href: "/plataforma" },
  { label: "Processes", href: "/processos" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Planos", href: "/planos" },
  { label: "Blog", href: "/blog" },
  { label: "Parceria", href: "/parceria" },
];
