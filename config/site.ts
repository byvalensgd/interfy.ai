export const siteConfig = {
  name: "Interfy",
  title: "Interfy — Plataforma AI-native para Documentos e Processos",
  description:
    "Gestão de documentos, automação de processos, captura inteligente e assinatura digital em uma única plataforma AI-native. Teste grátis por 7 dias, sem cartão de crédito.",
  keywords: [
    "Interfy",
    "plataforma AI-native",
    "gestão de documentos",
    "gestão eletrônica de documentos",
    "automação de processos",
    "BPM",
    "ECM",
    "captura inteligente de documentos",
    "assinatura digital",
    "colaboração empresarial",
    "agentes de IA",
    "software de gestão empresarial",
  ],
  url: "https://interfy.ai",
  ogImage: "/opengraph-image",
  locale: "pt_BR",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Plataforma", href: "/platform" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Planos", href: "/planos" },
  { label: "Blog", href: "/blog" },
  { label: "Parceria", href: "/parceria" },
];
