export type FooterLink = {
  href: string;
  icon?: string;
};

export type FooterColumn = {
  links: FooterLink[];
};

/** Link order/length matches each column in messages/<locale>/footer.json's `columns`. */
export const footerColumns: FooterColumn[] = [
  {
    links: [
      { href: "/platform/documents", icon: "/icons/products/documents.svg" },
      { href: "/platform/process", icon: "/icons/products/automation.svg" },
      { href: "/platform/capture", icon: "/icons/products/capture.svg" },
      { href: "/platform/sign", icon: "/icons/products/sign.svg" },
      { href: "/platform/connect", icon: "/icons/products/connect.svg" },
      { href: "/platform/agents", icon: "/icons/products/agents.svg" },
      { href: "/platform/mobile", icon: "/icons/products/mobile.svg" },
      { href: "/platform/voice", icon: "/icons/products/voice.svg" },
    ],
  },
  {
    links: [
      { href: "/segmentos", icon: "/icons/footer/segmentos.svg" },
      { href: "/platform/ai-creditos", icon: "/icons/footer/ai-icon.svg" },
      { href: "/platform/integracoes", icon: "/icons/footer/integracoes.svg" },
      { href: "/universidade", icon: "/icons/footer/book.svg" },
      { href: "/cases", icon: "/icons/footer/certificado.svg" },
      { href: "/status", icon: "/icons/footer/status-plataforma.svg" },
    ],
  },
  {
    links: [
      { href: "/empresa/sobre", icon: "/icons/footer/pessoas.svg" },
      { href: "/platform", icon: "/icons/footer/logo-interfy.svg" },
      { href: "/comece-gratis", icon: "/icons/footer/free.svg" },
      { href: "/parceria", icon: "/icons/footer/parceria.svg" },
      { href: "/blog", icon: "/icons/footer/blog.svg" },
    ],
  },
  {
    links: [
      { href: "/legal/termos", icon: "/icons/footer/doc.svg" },
      { href: "/legal/privacidade", icon: "/icons/footer/shield.svg" },
      { href: "/legal/lgpd", icon: "/icons/footer/shield-lgpd.svg" },
      { href: "/legal/seguranca", icon: "/icons/footer/lock.svg" },
      { href: "/suporte", icon: "/icons/footer/fone.svg" },
      { href: "/contato", icon: "/icons/footer/telefone.svg" },
    ],
  },
];

export type FooterSocialLink = {
  icon: string;
  label: string;
  href: string;
};

export const footerSocialLinks: FooterSocialLink[] = [
  { icon: "/footer/social-instagram.svg", label: "Instagram", href: "https://instagram.com" },
  { icon: "/footer/social-x.svg", label: "X (Twitter)", href: "https://x.com" },
  { icon: "/footer/social-linkedin.svg", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "/footer/social-youtube.svg", label: "YouTube", href: "https://youtube.com" },
  { icon: "/footer/social-facebook.svg", label: "Facebook", href: "https://facebook.com" },
];

export const footerSocialBadges: FooterSocialLink[] = [
  { icon: "/footer/badge-instagram.svg", label: "Instagram", href: "https://instagram.com" },
  { icon: "/footer/badge-x.svg", label: "X (Twitter)", href: "https://x.com" },
  { icon: "/footer/badge-linkedin.svg", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "/footer/badge-youtube.svg", label: "YouTube", href: "https://youtube.com" },
  { icon: "/footer/badge-facebook.svg", label: "Facebook", href: "https://facebook.com" },
];
