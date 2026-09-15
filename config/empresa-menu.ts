import type { NavMenuItem } from "@/config/recursos-menu";
import type { Tint } from "@/config/products-menu";

/** Order matches header.json's `empresaMenu.items` array (Test Drive is excluded — it's already the header's "Comece Grátis" CTA). `tint` drives the desktop mega-menu's big cards (mobile still uses `icon` in the plain accordion list). */
export const empresaMenuItems: (NavMenuItem & { tint: Tint })[] = [
  { href: "/empresa/sobre", icon: "/icons/footer/pessoas.svg", tint: "ecm" },
  { href: "/platform", icon: "/icons/footer/logo-interfy.svg", tint: "bpm" },
  { href: "/parceria", icon: "/icons/footer/parceria.svg", tint: "swc" },
  { href: "/blog", icon: "/icons/footer/blog.svg", tint: "dss" },
];
