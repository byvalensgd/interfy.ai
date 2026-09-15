export type ProductMenuItem = {
  href: string;
  icon: string;
};

/** Order matches header.json's `productsMenu.featured` array. */
export const featuredProducts: ProductMenuItem[] = [
  { href: "/documents", icon: "/icons/products/documents.svg" },
  { href: "/process", icon: "/icons/products/automation.svg" },
  { href: "/capture", icon: "/icons/products/capture.svg" },
  { href: "/sign", icon: "/icons/products/sign.svg" },
];

/** Order matches header.json's `productsMenu.items` array (Documents/Process/Capture/Sign render as the featured cards above instead). */
export const productsMenu: ProductMenuItem[] = [
  { href: "/connect", icon: "/icons/products/connect.svg" },
  { href: "/agents", icon: "/icons/products/agents.svg" },
  { href: "/mobile", icon: "/icons/products/mobile.svg" },
  { href: "/voice", icon: "/icons/products/voice.svg" },
];
