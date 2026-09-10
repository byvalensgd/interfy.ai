import { mobileAppStoreUrl, mobileGooglePlayUrl } from "@/config/mobile-page";

export type HeroStat = {
  icon: string;
};

/** Order matches messages/<locale>/home.json's `hero.stats` array. */
export const heroStats: HeroStat[] = [
  { icon: "/icons/stats/clientes.svg" },
  { icon: "/icons/stats/paises.svg" },
  { icon: "/icons/stats/idiomas.svg" },
  { icon: "/icons/stats/seguranca.svg" },
  { icon: "/icons/stats/ai-native.svg" },
  { icon: "/icons/stats/disponibilidade.svg" },
  { icon: "/icons/stats/conformidade.svg" },
];

export type HeroBadge = {
  src: string;
  aspectRatio: number;
  href?: string;
};

/** Order matches messages/<locale>/home.json's `hero.badges` array. */
export const heroBadges: HeroBadge[] = [
  { src: "/hero/badge-webapp.svg", aspectRatio: 120.11 / 32 },
  { src: "/hero/badge-googleplay.svg", aspectRatio: 172.62 / 40.41, href: mobileGooglePlayUrl },
  { src: "/hero/badge-appstore.svg", aspectRatio: 295 / 78.8, href: mobileAppStoreUrl },
];
