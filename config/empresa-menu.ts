import type { NavMenuItem } from "@/config/recursos-menu";

/** Order matches header.json's `empresaMenu.items` array (Test Drive is excluded — it's already the header's "Comece Grátis" CTA). */
export const empresaMenuItems: NavMenuItem[] = [
  { href: "/empresa/sobre", icon: "/icons/footer/pessoas.svg" },
  { href: "/platform", icon: "/icons/footer/logo-interfy.svg" },
  { href: "/parceria", icon: "/icons/footer/parceria.svg" },
  { href: "/blog", icon: "/icons/footer/blog.svg" },
];
