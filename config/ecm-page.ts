import type { HeroStat } from "@/config/hero";

export const ecmHeroStats: HeroStat[] = [
  { icon: "/icons/ecm/web-cloud.svg", label: "100% Web", sublabel: "Acesse de qualquer lugar" },
  { icon: "/icons/ecm/ai-native.svg", label: "AI-Native", sublabel: "Inteligência em cada passo" },
  { icon: "/icons/ecm/shield-check-hero.svg", label: "Seguro & Confiável", sublabel: "Governança e conformidade" },
];

export type CapabilityCard = {
  icon: string;
  title: string;
  description: string;
};

export const ecmCapabilities: CapabilityCard[] = [
  {
    icon: "/icons/ecm/cloud-seguranca.svg",
    title: "Armazenamento seguro",
    description: "Armazene qualquer tipo de documento com segurança, alta disponibilidade e proteção de classe enterprise.",
  },
  {
    icon: "/icons/ecm/pasta.svg",
    title: "Organização inteligente",
    description: "Estruture pastas, subpastas e categorias do seu jeito, com modelos flexíveis e etiquetas.",
  },
  {
    icon: "/icons/ecm/doc-search.svg",
    title: "Busca inteligente",
    description: "Encontre documentos em segundos com filtros avançados, AI e busca semântica.",
  },
  {
    icon: "/icons/ecm/chat.svg",
    title: "Busca em linguagem natural",
    description: "Pergunte do seu jeito. A AI entende e encontra o que você precisa.",
  },
  {
    icon: "/icons/ecm/classificacao-ai.svg",
    title: "Classificação automática com AI",
    description: "A AI classifica e categoriza documentos automaticamente, reduzindo trabalho manual e erros.",
  },
  {
    icon: "/icons/ecm/screen-search.svg",
    title: "Extração de informações",
    description: "Extraia dados e informações automaticamente de contratos, notas fiscais, formulários e muito mais.",
  },
  {
    icon: "/icons/ecm/tag.svg",
    title: "Metadados e indexação",
    description: "Crie metadados personalizados e índices inteligentes para recuperar informações com precisão.",
  },
  {
    icon: "/icons/ecm/load-check.svg",
    title: "Controle de versões",
    description: "Histórico completo de versões, comparação de documentos e restauração a qualquer momento.",
  },
  {
    icon: "/icons/ecm/arquivo.svg",
    title: "Records Management",
    description: "Políticas de retenção, prazos legais e descarte automático com total conformidade.",
  },
  {
    icon: "/icons/ecm/share.svg",
    title: "Compartilhamento seguro",
    description: "Compartilhe documentos e pastas com usuários internos e externos de forma segura e controlada.",
  },
  {
    icon: "/icons/ecm/lock.svg",
    title: "Permissões avançadas",
    description: "Controle quem pode visualizar, editar, baixar, comentar ou compartilhar cada documento.",
  },
  {
    icon: "/icons/ecm/shield-check-auditoria.svg",
    title: "Auditoria e rastreabilidade",
    description: "Logs completos de todas as ações com trilha de auditoria e relatórios detalhados.",
  },
  {
    icon: "/icons/ecm/governo.svg",
    title: "Governança e conformidade",
    description: "Políticas, papéis, regras e controles para garantir segurança, privacidade e conformidade.",
  },
  {
    icon: "/icons/ecm/mobile.svg",
    title: "Documentos no mobile",
    description: "Acesse, visualize, compartilhe e aprove em qualquer lugar pelo app Interfy Mobile.",
  },
  {
    icon: "/icons/ecm/integracao-total.svg",
    title: "Integração total",
    description: "Integração nativa com Capture, Process, Sign, Connect e Agents para uma operação contínua.",
  },
  {
    icon: "/icons/ecm/robo-agente.svg",
    title: "Agentes de AI",
    description: "Agentes inteligentes que analisam, resumem, classificam e sugerem ações automaticamente.",
  },
];

export type EcosystemLink = {
  icon: string;
  product: string;
  colorClass: string;
  description: string;
};

export const ecmEcosystemLinks: EcosystemLink[] = [
  {
    icon: "/icons/ecosystem-grid/capture.svg",
    product: "Capture",
    colorClass: "text-swc",
    description: "Captura inteligente de documentos.",
  },
  {
    icon: "/icons/ecosystem-grid/automation.svg",
    product: "Process",
    colorClass: "text-bpm",
    description: "Automação de processos.",
  },
  {
    icon: "/icons/ecosystem-grid/sign.svg",
    product: "Sign",
    colorClass: "text-dss",
    description: "Assinatura digital integrada.",
  },
  {
    icon: "/icons/ecosystem-grid/connect.svg",
    product: "Connect",
    colorClass: "text-cic",
    description: "Colaboração e comunicação.",
  },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    product: "Agents",
    colorClass: "gradient",
    description: "Agentes de AI que entendem e agem.",
  },
];

export type HighlightBlock = {
  variant: "dark" | "light";
  title: string;
  description: string;
  checklist: string[];
  image: { src: string; alt: string };
};

export const ecmHighlightBlocks: HighlightBlock[] = [
  {
    variant: "dark",
    title: "Produtividade na palma da mão",
    description: "O app Interfy Mobile leva sua gestão documental para onde você estiver.",
    checklist: [
      "Acesse e visualize documentos",
      "Aprove solicitações e tarefas",
      "Compartilhe com segurança",
      "Busque com AI",
      "Trabalhe offline e sincronize depois",
    ],
    image: { src: "/ecm/mobile-diagonal.webp", alt: "App Interfy Mobile exibindo a lista de documentos" },
  },
  {
    variant: "light",
    title: "Segurança e governança em primeiro lugar",
    description: "A Interfy Documents foi projetada para proteger suas informações e garantir conformidade em todos os níveis.",
    checklist: [
      "Criptografia em repouso e em trânsito",
      "Controle de acesso baseado em papéis",
      "LGPD, ISO 27001, SOC 2 e GDPR",
      "Logs e auditoria completos",
      "Backup automático e recuperação de desastres",
    ],
    image: { src: "/ecm/security-shield.mp4", alt: "Ilustração animada de um escudo de segurança protegendo os documentos" },
  },
];
