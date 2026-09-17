export type NavMenuItem = {
  href: string;
  icon: string;
};

/** Order matches header.json's `recursosMenu.recursosItems` array.
 *  `-nav` variants recolor the plain footer icon to match the Plataforma menu's palette. */
export const recursosMenuItems: NavMenuItem[] = [
  { href: "/platform/ai-creditos", icon: "/icons/footer/ai-icon-nav.svg" },
  { href: "/platform/integracoes", icon: "/icons/footer/integracoes-nav.svg" },
  { href: "/universidade", icon: "/icons/footer/book-nav.svg" },
  { href: "/cases", icon: "/icons/footer/certificado-nav.svg" },
  { href: "/blog", icon: "/icons/footer/blog-nav.svg" },
];

/** Order matches header.json's `recursosMenu.legalItems` array. */
export const legalMenuItems: NavMenuItem[] = [
  { href: "/legal/termos", icon: "/icons/footer/doc-nav.svg" },
  { href: "/legal/privacidade", icon: "/icons/footer/shield-nav.svg" },
  { href: "/legal/lgpd", icon: "/icons/footer/shield-lgpd-nav.svg" },
  { href: "/seguranca", icon: "/icons/footer/lock-nav.svg" },
  { href: "/suporte", icon: "/icons/footer/fone-nav.svg" },
];
