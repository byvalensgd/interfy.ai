export type NavMenuItem = {
  href: string;
  icon: string;
};

/** Order matches header.json's `recursosMenu.recursosItems` array. */
export const recursosMenuItems: NavMenuItem[] = [
  { href: "/segmentos", icon: "/icons/footer/segmentos.svg" },
  { href: "/platform/ai-creditos", icon: "/icons/footer/ai-icon.svg" },
  { href: "/platform/integracoes", icon: "/icons/footer/integracoes.svg" },
  { href: "/cases", icon: "/icons/footer/certificado.svg" },
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
