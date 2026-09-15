import type { Tint } from "@/config/products-menu";

export type NavMenuItem = {
  href: string;
  icon: string;
};

/** Order matches header.json's `recursosMenu.recursosItems` array. `tint` drives the desktop mega-menu's big cards (mobile still uses `icon` in the plain accordion list). */
export const recursosMenuItems: (NavMenuItem & { tint: Tint })[] = [
  { href: "/segmentos", icon: "/icons/footer/segmentos.svg", tint: "ecm" },
  { href: "/platform/ai-creditos", icon: "/icons/footer/ai-icon.svg", tint: "bpm" },
  { href: "/platform/integracoes", icon: "/icons/footer/integracoes.svg", tint: "swc" },
  { href: "/cases", icon: "/icons/footer/certificado.svg", tint: "dss" },
];

/** Order matches header.json's `recursosMenu.legalItems` array. */
export const legalMenuItems: NavMenuItem[] = [
  { href: "/legal/termos", icon: "/icons/footer/doc.svg" },
  { href: "/legal/privacidade", icon: "/icons/footer/shield.svg" },
  { href: "/legal/lgpd", icon: "/icons/footer/shield-lgpd.svg" },
  { href: "/legal/seguranca", icon: "/icons/footer/lock.svg" },
  { href: "/suporte", icon: "/icons/footer/fone.svg" },
  { href: "/contato", icon: "/icons/footer/telefone.svg" },
];
