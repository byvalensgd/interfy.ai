export const bpmHeroStatIcons: string[] = [
  "/icons/bpm/stat-processos.svg",
  "/icons/bpm/stat-clientes.svg",
  "/icons/bpm/stat-usuarios.svg",
  "/icons/bpm/stat-web.svg",
];

export const bpmCapabilityIcons: string[] = [
  "/icons/bpm/criacao-visual.svg",
  "/icons/bpm/criacao-ai.svg",
  "/icons/bpm/geracao-formularios.svg",
  "/icons/bpm/formularios-inteligentes.svg",
  "/icons/bpm/aprovacoes.svg",
  "/icons/bpm/tarefas.svg",
  "/icons/bpm/regras-negocio.svg",
  "/icons/bpm/slas.svg",
  "/icons/bpm/alertas-notificacoes.svg",
  "/icons/bpm/dashboards.svg",
  "/icons/bpm/indicadores-metricas.svg",
  "/icons/bpm/participacao-externa.svg",
  "/icons/bpm/processos-mobile.svg",
  "/icons/bpm/templates-prontos.svg",
  "/icons/bpm/automacoes-agentes.svg",
  "/icons/bpm/integracao-nativa.svg",
];

export type EcosystemLink = {
  icon: string;
  product: string;
  colorClass: string;
};

/** Product names (Documents/Process/Capture/Sign/Connect/Agents) are never translated. */
export const bpmEcosystemLinks: EcosystemLink[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", product: "Documents", colorClass: "text-ecm" },
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Capture", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Process", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/sign.svg", product: "Sign", colorClass: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Connect", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/agents.svg", product: "Agents", colorClass: "gradient" },
];

export const bpmProcessTypeIcons: string[] = [
  "/icons/bpm/tipo-administrativos.svg",
  "/icons/bpm/tipo-financeiros.svg",
  "/icons/bpm/tipo-compras.svg",
  "/icons/bpm/tipo-rh.svg",
  "/icons/bpm/tipo-juridicos.svg",
  "/icons/bpm/tipo-comerciais.svg",
  "/icons/bpm/tipo-operacionais.svg",
  "/icons/bpm/tipo-ti.svg",
];

export const bpmCtaFeatureIcons: string[] = [
  "/icons/segments/cta-web-mobile.svg",
  "/icons/agentes/shield-check.svg",
  "/icons/features/escalabilidade.svg",
  "/global/fast-support.svg",
];
