export type HeroStat = {
  icon: string;
  label: string;
  sublabel?: string;
};

export const heroStats: HeroStat[] = [
  { icon: "/icons/stats/clientes.svg", label: "25.000 +", sublabel: "clientes" },
  { icon: "/icons/stats/paises.svg", label: "180+ países" },
  { icon: "/icons/stats/idiomas.svg", label: "16 idiomas" },
  { icon: "/icons/stats/seguranca.svg", label: "Segurança de ponta" },
  { icon: "/icons/stats/ai-native.svg", label: "AI Native" },
  { icon: "/icons/stats/disponibilidade.svg", label: "Alta disponibilidade" },
  { icon: "/icons/stats/conformidade.svg", label: "Conformidade Global" },
];

export type HeroBadge = {
  src: string;
  alt: string;
  aspectRatio: number;
};

export const heroBadges: HeroBadge[] = [
  { src: "/hero/badge-webapp.svg", alt: "Disponível como Web App", aspectRatio: 120.11 / 32 },
  { src: "/hero/badge-googleplay.svg", alt: "Disponível no Google Play", aspectRatio: 172.62 / 40.41 },
  { src: "/hero/badge-appstore.svg", alt: "Disponível na App Store", aspectRatio: 295 / 78.8 },
];
