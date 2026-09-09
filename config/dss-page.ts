export type HeroFeatureChip = {
  icon: string;
  // Figma's manually-edited two-line break — kept explicit (not left to wrap)
  // so every chip renders at the same predictable height.
  labelLines: [string, string];
};

export const dssHeroFeatureChips: HeroFeatureChip[] = [
  { icon: "/icons/dss/assinatura-digital.svg", labelLines: ["Assinatura", "digital"] },
  { icon: "/icons/dss/assinatura-eletronica.svg", labelLines: ["Assinatura", "eletrônica"] },
  { icon: "/icons/dss/assinatura-fluxo.svg", labelLines: ["Assinatura", "por fluxo"] },
  { icon: "/icons/dss/multiplos-signatarios.svg", labelLines: ["Múltiplos", "signatários"] },
  { icon: "/icons/dss/templates-prontos.svg", labelLines: ["Templates", "prontos"] },
  { icon: "/icons/dss/trilha-auditoria.svg", labelLines: ["Trilha de", "auditoria"] },
  { icon: "/icons/dss/autenticacao-segura.svg", labelLines: ["Autenticação", "segura"] },
  { icon: "/icons/dss/envio-externo.svg", labelLines: ["Envio", "externo"] },
  { icon: "/icons/dss/alertas-inteligentes.svg", labelLines: ["Alertas", "inteligentes"] },
  { icon: "/icons/dss/acompanhamento-tempo-real.svg", labelLines: ["Acompanhamento", "em tempo real"] },
  { icon: "/icons/dss/assinatura-mobile.svg", labelLines: ["Assinatura", "via mobile"] },
];

export type LifecycleCard = {
  icon: string;
  title: string;
  description: string;
};

export const dssLifecycleCards: LifecycleCard[] = [
  {
    icon: "/icons/dss/integracao-documents.svg",
    title: "Integração com Documents",
    description: "Assine documentos armazenados com segurança e orientação.",
  },
  {
    icon: "/icons/dss/integracao-process.svg",
    title: "Integração com Process",
    description: "Inclua a assinatura digital em seus processos automatizados ponta a ponta.",
  },
  {
    icon: "/icons/dss/envio-usuarios-externos.svg",
    title: "Envio para usuários externos",
    description: "Envie documentos para pessoas fora da plataforma com total segurança.",
  },
  {
    icon: "/icons/dss/fluxos-aprovacao.svg",
    title: "Fluxos de aprovação",
    description: "Defina etapas, responsáveis e regras para aprovar com agilidade.",
  },
  {
    icon: "/icons/dss/alertas-rastreabilidade.svg",
    title: "Alertas e rastreabilidade",
    description: "Receba notificações e tenha total visibilidade de cada etapa.",
  },
  {
    icon: "/icons/dss/registrado-seguranca.svg",
    title: "Tudo registrado com segurança",
    description: "Rastreabilidade completa com trilha de auditoria e conformidade garantida.",
  },
];

export type HowItWorksStep = {
  number: string;
  icon: string;
  description: string;
};

export const dssHowItWorksSteps: HowItWorksStep[] = [
  { number: "01", icon: "/icons/dss/step-upload.svg", description: "Envie o documento ou escolha um template pronto." },
  { number: "02", icon: "/icons/dss/step-user-add.svg", description: "Defina signatários e a ordem de assinatura." },
  { number: "03", icon: "/icons/dss/step-enviar.svg", description: "Envie para assinatura com autenticação segura." },
  { number: "04", icon: "/icons/dss/step-assinar.svg", description: "Signatários assinam de onde estiverem, até pelo celular." },
  { number: "05", icon: "/icons/dss/step-acompanhar.svg", description: "Acompanhe o status em tempo real e receba alertas." },
  { number: "06", icon: "/icons/dss/step-concluido.svg", description: "Documento concluído e armazenado com segurança." },
];

export type FeatureCard = {
  icon: string;
  title: string;
  description: string;
};

export const dssFeatures: FeatureCard[] = [
  {
    icon: "/icons/dss/templates-prontos.svg",
    title: "Templates prontos",
    description: "Use modelos prontos ou crie seus próprios templates personalizados.",
  },
  {
    icon: "/icons/dss/multiplos-signatarios.svg",
    title: "Múltiplos signatários",
    description: "Assine com uma ou várias pessoas em sequência ou em paralelo.",
  },
  {
    icon: "/icons/dss/autenticacao-segura.svg",
    title: "Autenticação segura",
    description: "Múltiplas camadas de verificação para garantir identidade e segurança.",
  },
  {
    icon: "/icons/dss/trilha-auditoria.svg",
    title: "Trilha de auditoria",
    description: "Acompanhe cada ação com detalhes completos e imutáveis.",
  },
  {
    icon: "/icons/dss/documents-product-icon.svg",
    title: "Integração com Documents",
    description: "Assine documentos diretamente dos seus repositórios.",
  },
  {
    icon: "/icons/dss/process-product-icon.svg",
    title: "Integração com Process",
    description: "Inclua assinatura digital em seus processos automatizados de ponta a ponta.",
  },
  {
    icon: "/icons/dss/acompanhamento-tempo-real.svg",
    title: "Acompanhamento em tempo real",
    description: "Veja quem assinou, quem ainda não assinou e o status atual de cada etapa.",
  },
  {
    icon: "/icons/dss/assinatura-mobile.svg",
    title: "Assinatura no mobile",
    description: "Assine de qualquer lugar pelo app com poucos toques.",
  },
  {
    icon: "/icons/dss/envio-externo.svg",
    title: "Envio externo",
    description: "Envie documentos para pessoas externas com total segurança.",
  },
];
