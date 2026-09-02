export type TrustBadge = {
  icon: string;
  label: string;
};

export const securityBadges: TrustBadge[] = [
  { icon: "/global/aws.svg", label: "AWS" },
  { icon: "/global/lock.svg", label: "Controle de acesso" },
  { icon: "/global/doc-check.svg", label: "Auditoria completa" },
  { icon: "/global/fast-support.svg", label: "Disponibilidade 24/7" },
  { icon: "/global/shield-workspace.svg", label: "Isolamento por worspace" },
];

export const scaleFeatures: TrustBadge[] = [
  { icon: "/scale/user-permissions.svg", label: "Permissões por usuário" },
  { icon: "/scale/shield-protected.svg", label: "Dados protegidos" },
  { icon: "/scale/cloud-security.svg", label: "Ambiente isolado" },
  { icon: "/scale/goals.svg", label: "Auditoria e rastreabilidade" },
  { icon: "/scale/cloud.svg", label: "Infraestrutura em nuvem" },
  { icon: "/scale/time.svg", label: "Alta disponibilidade" },
  { icon: "/scale/privacy-global.svg", label: "Privacidade e governança" },
];

export const scaleTrustBadges: TrustBadge[] = [
  { icon: "/scale/planet-global.svg", label: "Empresa global" },
  { icon: "/scale/shield-lgpd.svg", label: "LGPD, GDPR e ISO" },
  { icon: "/scale/encryption.svg", label: "Dados criptografados e protegidos" },
  { icon: "/scale/infra-global.svg", label: "Infraestrutura global de alta disponibilidade" },
  { icon: "/scale/certification.svg", label: "Certificações internacionais" },
  { icon: "/scale/updates.svg", label: "Atualizações contínuas" },
];

export type FooterTrustItem = {
  icon: string;
  title: string;
  description: string;
};

export const footerTrustItems: FooterTrustItem[] = [
  { icon: "/footer/trust-security.svg", title: "Segurança Enterprise", description: "Criptografia AES-256 / TLS 1.3" },
  { icon: "/footer/trust-cloud.svg", title: "Infraestrutura AWS Global", description: "Alta disponibilidade e escalabilidade" },
  { icon: "/footer/trust-lgpd.svg", title: "Compliance Global", description: "LGPD, GDPR e ISO 27001" },
  { icon: "/footer/trust-uptime.svg", title: "99,98% Uptime SLA", description: "Monitoramento 24/7" },
];
