export type FooterLink = {
  label: string;
  href: string;
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
      { label: "ECM - Gestão de Conteúdo Empresarial", href: "/plataforma/ecm" },
      { label: "LVS - Digitalização com Validade Legal", href: "/plataforma/lvs" },
      { label: "BPM - Gestão de Processos de Negócio", href: "/plataforma/bpm" },
      { label: "SWC - Captura Web Inteligente com IA", href: "/plataforma/swc" },
      { label: "DSS - Assinatura Digital", href: "/plataforma/dss" },
      { label: "CIC - Chat Corporativo", href: "/plataforma/cic" },
      { label: "Interfy AI", href: "/plataforma/ai" },
    ],
  },
  {
    title: "Segmentos",
    accentGradient: "linear-gradient(-7.3deg, #2fb763 45.8%, #13df79 116.3%)",
    links: [
      { label: "Concessionárias", href: "/segmentos/concessionarias" },
      { label: "Imobiliário", href: "/segmentos/imobiliario" },
      { label: "Jurídico", href: "/segmentos/juridico" },
      { label: "Saúde", href: "/segmentos/saude" },
      { label: "Farmácia & Laboratórios", href: "/segmentos/farmacia" },
      { label: "Financeiro", href: "/segmentos/financeiro" },
      { label: "Seguros", href: "/segmentos/seguros" },
      { label: "Ver todos +", href: "/segmentos" },
    ],
  },
  {
    title: "Empresa",
    accentGradient: "linear-gradient(90deg, #ffa812, #feb21c)",
    links: [
      { label: "Sobre a Interfy", href: "/empresa/sobre" },
      { label: "Plataforma Interfy", href: "/plataforma" },
      { label: "Parceiros (Private Label)", href: "/parceria" },
      { label: "Universidade Interfy", href: "/universidade" },
      { label: "Blog / Conteúdo", href: "/blog" },
      { label: "Cases de Sucesso", href: "/cases" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Legal & Suporte",
    accentGradient: "linear-gradient(270deg, #9826e6, #a946ff)",
    links: [
      { label: "Termos de Uso", href: "/legal/termos" },
      { label: "Políticas de Privacidade", href: "/legal/privacidade" },
      { label: "LGPD / GDPR", href: "/legal/lgpd" },
      { label: "Segurança", href: "/legal/seguranca" },
      { label: "Status da Plataforma", href: "/status" },
      { label: "Suporte", href: "/suporte" },
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

export const footerLanguages = ["Português", "English", "Español"];
