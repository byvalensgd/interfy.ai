export type PlatformStatIcon = {
  icon: string;
};

/** Order matches messages/<locale>/common.json's `platformStats` array. */
export const platformStatIcons: PlatformStatIcon[] = [
  { icon: "/icons/stats2/usuarios.svg" },
  { icon: "/icons/stats2/documentos.svg" },
  { icon: "/icons/stats2/processos.svg" },
  { icon: "/icons/stats2/gerenciados.svg" },
  { icon: "/icons/stats2/assinaturas.svg" },
  { icon: "/icons/stats2/uptime.svg" },
  { icon: "/icons/stats2/suporte.svg" },
];

export type EcosystemItem = {
  icon: string;
  // Product names (Documents/Process/Voice/Capture/Agents/Sign/Connect/Mobile)
  // are never translated — see messages/<locale>/home.json's
  // `platformIntro.ecosystem.items` array for the (translated) description.
  title: string;
};

/** Order matches messages/<locale>/home.json's `platformIntro.ecosystem.items` array. */
export const ecosystemItems: EcosystemItem[] = [
  { icon: "/icons/ecosystem/documents.svg", title: "Documents" },
  { icon: "/icons/ecosystem/automation.svg", title: "Process" },
  { icon: "/icons/ecosystem/voice.svg", title: "Voice" },
  { icon: "/icons/ecosystem/capture.svg", title: "Capture" },
  { icon: "/icons/ecosystem/agents.svg", title: "Agents" },
  { icon: "/icons/ecosystem/sign.svg", title: "Sign" },
  { icon: "/icons/ecosystem/connect.svg", title: "Connect" },
  { icon: "/icons/ecosystem/mobile.svg", title: "Mobile" },
];
