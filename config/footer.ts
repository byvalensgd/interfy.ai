export type FooterLink = {
  label: string;
  href: string;
  icon?: string;
};

export type FooterColumn = {
  title: string;
  accentGradient: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Plataforma",
    accentGradient: "linear-gradient(146.8deg, #3447d2 4%, #0035c1 124%)",
    links: [
      { label: "Documents", href: "/plataforma/ecm", icon: "/icons/products/documents.svg" },
      { label: "Process", href: "/plataforma/bpm", icon: "/icons/products/automation.svg" },
      { label: "Capture", href: "/plataforma/swc", icon: "/icons/products/capture.svg" },
      { label: "Sign", href: "/plataforma/dss", icon: "/icons/products/sign.svg" },
      { label: "Connect", href: "/plataforma/cic", icon: "/icons/products/connect.svg" },
      { label: "Agents", href: "/plataforma/ai", icon: "/icons/products/agents.svg" },
      { label: "Mobile", href: "/plataforma/mobile", icon: "/icons/products/mobile.svg" },
      { label: "Voice", href: "/plataforma/voz", icon: "/icons/products/voice.svg" },
    ],
  },
  {
    title: "Recursos",
    accentGradient: "linear-gradient(-7.3deg, #2fb763 45.8%, #13df79 116.3%)",
    links: [
      { label: "Segmentos", href: "/segmentos", icon: "/icons/footer/segmentos.svg" },
      { label: "AI Créditos", href: "/plataforma/ai-creditos", icon: "/icons/footer/ai-icon.svg" },
      { label: "Integrações & API", href: "/plataforma/integracoes", icon: "/icons/footer/integracoes.svg" },
      { label: "Universidade Interfy", href: "/universidade", icon: "/icons/footer/book.svg" },
      { label: "Cases de Sucesso", href: "/cases", icon: "/icons/footer/certificado.svg" },
      { label: "Status da Plataforma", href: "/status", icon: "/icons/footer/status-plataforma.svg" },
    ],
  },
  {
    title: "Empresa",
    accentGradient: "linear-gradient(90deg, #ffa812, #feb21c)",
    links: [
      { label: "Sobre a Interfy", href: "/empresa/sobre", icon: "/icons/footer/pessoas.svg" },
      { label: "Plataforma Interfy", href: "/plataforma", icon: "/icons/footer/logo-interfy.svg" },
      { label: "Test Drive", href: "/comece-gratis", icon: "/icons/footer/free.svg" },
      { label: "Parceiros (Private Label)", href: "/parceria", icon: "/icons/footer/parceria.svg" },
      { label: "Blog / Conteúdo", href: "/blog", icon: "/icons/footer/blog.svg" },
    ],
  },
  {
    title: "Legal & Suporte",
    accentGradient: "linear-gradient(270deg, #9826e6, #a946ff)",
    links: [
      { label: "Termos de Uso", href: "/legal/termos", icon: "/icons/footer/doc.svg" },
      { label: "Políticas de Privacidade", href: "/legal/privacidade", icon: "/icons/footer/shield.svg" },
      { label: "LGPD / GDPR", href: "/legal/lgpd", icon: "/icons/footer/shield-lgpd.svg" },
      { label: "Segurança", href: "/legal/seguranca", icon: "/icons/footer/lock.svg" },
      { label: "Suporte", href: "/suporte", icon: "/icons/footer/fone.svg" },
      { label: "Contato", href: "/contato", icon: "/icons/footer/telefone.svg" },
    ],
  },
];

export const footerRegions = ["Estados Unidos", "Europa", "LATAM", "Brasil", "Ásia", "África"];

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
