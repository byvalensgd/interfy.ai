export const siteConfig = {
  name: "Interfy",
  url: "https://interfy.ai",
  ogImage: "/opengraph-image",
} as const;

export type NavItem = {
  href: string;
};

/** Order matches header.json's `nav` object; labels come from the dictionary. */
export const mainNav: NavItem[] = [
  { href: "/platform" },
  { href: "/segmentos" },
  { href: "/planos" },
  { href: "/blog" },
  { href: "/parceria" },
];
