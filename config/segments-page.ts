import type { HeroStat } from "@/config/hero";

export const segmentsHeroStats: HeroStat[] = [
  { icon: "/icons/stats/paises.svg", label: "180+ países" },
  { icon: "/icons/stats/idiomas.svg", label: "16 idiomas" },
  { icon: "/icons/stats/seguranca.svg", label: "Segurança de ponta" },
  { icon: "/icons/stats/ai-native.svg", label: "AI Native" },
  { icon: "/icons/stats/mobile.svg", label: "Mobile", sublabel: "Anos de experiência" },
  { icon: "/icons/stats/disponibilidade.svg", label: "Alta disponibilidade" },
  { icon: "/icons/stats/conformidade.svg", label: "Conformidade Global" },
];

export type HighlightItem = {
  icon: string;
  title: string;
  description: string;
};

export const platformHighlights: HighlightItem[] = [
  { icon: "/icons/segments/highlight-platform.svg", title: "Uma única plataforma", description: "Sem necessidade de versões por setor" },
  { icon: "/icons/segments/highlight-adaptable.svg", title: "100% adaptável", description: "Configure de acordo com seu negócio" },
  { icon: "/icons/segments/highlight-fast.svg", title: "Implantação rápida", description: "Comece em minutos sem complexidade" },
  { icon: "/icons/segments/highlight-security.svg", title: "Segurança enterprise", description: "Proteção de dados e ambientes isolados" },
  { icon: "/icons/segments/highlight-ai.svg", title: "IA em todos os setores", description: "Agentes inteligentes que entendem seu contexto" },
];

export type TrustStat = {
  icon: string;
  value: string;
  label: string;
};

export const trustStats: TrustStat[] = [
  { icon: "/icons/segments/trust-segments.svg", value: "20+", label: "segmentos atendidos" },
  { icon: "/icons/segments/trust-users.svg", value: "2,5M+", label: "usuários atendidos" },
  { icon: "/icons/segments/trust-regions.svg", value: "6", label: "regiões comerciais" },
  { icon: "/icons/segments/trust-documents.svg", value: "7 Bilhões +", label: "documentos gerenciados" },
  { icon: "/icons/segments/trust-processes.svg", value: "6 Milhões +", label: "processos automatizados" },
  { icon: "/icons/segments/trust-uptime.svg", value: "99,99%", label: "uptime da plataforma" },
];

export type PlatformEcosystemItem = {
  icon: string;
  product: string;
  colorClass: string;
  description: string;
};

export const platformEcosystemItems: PlatformEcosystemItem[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", product: "Documentos", colorClass: "text-ecm", description: "Gestão inteligente de documentos e informações" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Processos", colorClass: "text-bpm", description: "Automação inteligente de processos e tarefas" },
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Captura", colorClass: "text-swc", description: "Captura inteligente de documentos com IA" },
  { icon: "/icons/ecosystem-grid/sign.svg", product: "Assinatura", colorClass: "text-dss", description: "Assinatura digital gratuita para todos os usuários" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Colaboração", colorClass: "text-cic", description: "Colaboração e comunicação conectadas à operação" },
  { icon: "/icons/ecosystem-grid/mobile.svg", product: "Mobile", colorClass: "text-azul-base", description: "Sua operação completa na palma da mão" },
  { icon: "/icons/ecosystem-grid/agents.svg", product: "Agentes", colorClass: "gradient", description: "Agentes de IA que analisam, decidem e executam" },
  { icon: "/icons/ecosystem-grid/voice.svg", product: "Voz", colorClass: "text-lvs-voice", description: "Interação por voz com linguagem natural e IA" },
];

export type FinalFeature = {
  icon: string;
  title: string;
  description: string;
};

export const finalFeatureStrip: FinalFeature[] = [
  { icon: "/icons/segments/cta-ai-native.svg", title: "AI-native", description: "inteligência em cada módulo" },
  { icon: "/icons/segments/cta-cloud.svg", title: "Cloud-native", description: "infraestrutura escalável" },
  { icon: "/icons/segments/cta-web-mobile.svg", title: "Web + Mobile", description: "Acesso completo de onde estiver" },
  { icon: "/icons/segments/cta-integrations.svg", title: "APIs e integrações", description: "Conecte tudo o que sua empresa já usa" },
  { icon: "/icons/segments/cta-security.svg", title: "Segurança e compliance", description: "Padrões globais de proteção e conformidade" },
  { icon: "/icons/segments/cta-support.svg", title: "Suporte 24/7", description: "Apoio contínuo para sua operação" },
];
