export type PlatformMenuItem = {
  href: string;
  icon: string;
  hasDescription: boolean;
};

/** Order matches header.json's `productsMenu.items` array — row-major 2-column
 *  grid per Figma node 238:1556 (PLATAFORMA - MENU). The last 2 entries reuse
 *  the Empresa destinations and label-only styling (no description line);
 *  Integrações & API and Cases de Sucesso were dropped — they already live
 *  in the Recursos menu. */
export const platformMenuItems: PlatformMenuItem[] = [
  { href: "/documents", icon: "/icons/ecosystem-grid/documents.svg", hasDescription: true },
  { href: "/process", icon: "/icons/ecosystem-grid/automation.svg", hasDescription: true },
  { href: "/capture", icon: "/icons/ecosystem-grid/capture.svg", hasDescription: true },
  { href: "/sign", icon: "/icons/ecosystem-grid/sign.svg", hasDescription: true },
  { href: "/connect", icon: "/icons/ecosystem-grid/connect.svg", hasDescription: true },
  { href: "/voice", icon: "/icons/ecosystem-grid/voice.svg", hasDescription: true },
  { href: "/agents", icon: "/icons/ecosystem-grid/agents.svg", hasDescription: true },
  { href: "/platform", icon: "/icons/footer/logo-interfy.svg", hasDescription: true },
  { href: "/empresa/sobre", icon: "/icons/footer/pessoas-bpm.svg", hasDescription: false },
  { href: "/parceria", icon: "/icons/footer/parceria-dss.svg", hasDescription: false },
];
