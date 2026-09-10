export type EcosystemGridItem = {
  icon: string;
  product: string;
  colorClass: string;
};

/** Order matches messages/<locale>/home.json's `ecosystemGrid.items` array. */
export const ecosystemGridItems: EcosystemGridItem[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", product: "Documents", colorClass: "text-ecm" },
  { icon: "/icons/ecosystem-grid/automation.svg", product: "Process", colorClass: "text-bpm" },
  { icon: "/icons/ecosystem-grid/capture.svg", product: "Capture", colorClass: "text-swc" },
  { icon: "/icons/ecosystem-grid/sign.svg", product: "Sign", colorClass: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", product: "Connect", colorClass: "text-cic" },
  { icon: "/icons/ecosystem-grid/mobile.svg", product: "Mobile", colorClass: "text-azul-base" },
  { icon: "/icons/ecosystem-grid/agents.svg", product: "Agents", colorClass: "gradient" },
  { icon: "/icons/ecosystem-grid/voice.svg", product: "Voice", colorClass: "text-lvs-voice" },
];
