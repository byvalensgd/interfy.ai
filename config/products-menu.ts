/** Matches a `--color-*` token in globals.css — the site's 4 product brand colors, reused wherever a nav mega-menu needs a big colored card. */
export type Tint = "ecm" | "bpm" | "swc" | "dss";

export type FeaturedProduct = {
  href: string;
  tint: Tint;
  icon: string;
};

/** Order matches header.json's `productsMenu.featured` array. */
export const featuredProducts: FeaturedProduct[] = [
  { href: "/documents", tint: "ecm", icon: "/icons/products/documents.svg" },
  { href: "/process", tint: "bpm", icon: "/icons/products/automation.svg" },
  { href: "/capture", tint: "swc", icon: "/icons/products/capture.svg" },
  { href: "/sign", tint: "dss", icon: "/icons/products/sign.svg" },
];

export type ProductMenuItem = {
  href: string;
  icon: string;
};

/** Order matches header.json's `productsMenu.items` array (Documents/Process/Capture/Sign render as the featured cards above instead). */
export const productsMenu: ProductMenuItem[] = [
  { href: "/connect", icon: "/icons/products/connect.svg" },
  { href: "/agents", icon: "/icons/products/agents.svg" },
  { href: "/mobile", icon: "/icons/products/mobile.svg" },
  { href: "/voice", icon: "/icons/products/voice.svg" },
];
