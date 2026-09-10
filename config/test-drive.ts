export type IconBadge = {
  icon: string;
};

/** Icon order/length matches `hero.differentiators` in messages/<locale>/testDrive.json. */
export const heroDifferentiators: IconBadge[] = [
  { icon: "/icons/test-drive/calendar.svg" },
  { icon: "/icons/test-drive/card.svg" },
  { icon: "/icons/test-drive/workspace.svg" },
  { icon: "/icons/test-drive/web-mobile.svg" },
  { icon: "/icons/stats/ai-native.svg" },
  { icon: "/icons/stats/seguranca.svg" },
];

export type NumberedStep = {
  icon: string;
  colorClass: string;
  number: string;
};

/** Icon/colorClass/number order matches `steps.items` in messages/<locale>/testDrive.json. */
export const howItWorksSteps: NumberedStep[] = [
  { icon: "/icons/test-drive/user-add.svg", colorClass: "bg-ecm", number: "01" },
  { icon: "/icons/test-drive/rocket.svg", colorClass: "bg-bpm", number: "02" },
  { icon: "/icons/test-drive/test-operation.svg", colorClass: "bg-dss", number: "03" },
  { icon: "/icons/test-drive/check-circle-blue.svg", colorClass: "bg-swc", number: "04" },
];

export type CapabilityItem = {
  icon: string;
  titleClassName: string;
};

/** Icon/titleClassName order matches `capabilities.items` in messages/<locale>/testDrive.json. */
export const testDriveCapabilities: CapabilityItem[] = [
  { icon: "/icons/ecosystem-grid/documents.svg", titleClassName: "text-ecm" },
  { icon: "/icons/ecosystem-grid/automation.svg", titleClassName: "text-bpm" },
  { icon: "/icons/ecosystem-grid/capture.svg", titleClassName: "text-swc" },
  { icon: "/icons/ecosystem-grid/sign.svg", titleClassName: "text-dss" },
  { icon: "/icons/ecosystem-grid/connect.svg", titleClassName: "text-cic" },
  { icon: "/icons/ecosystem-grid/mobile.svg", titleClassName: "text-azul-base" },
  {
    icon: "/icons/ecosystem-grid/agents.svg",
    titleClassName: "inline-block bg-[linear-gradient(121deg,#184aee_22.86%,#bf18f6_96.41%)] bg-clip-text text-transparent",
  },
  { icon: "/icons/ecosystem-grid/voice.svg", titleClassName: "text-lvs-voice" },
];

export type ChecklistItemStyle = {
  highlightClassName?: string;
};

/** Order matches `journey.readyCard.checklist` in messages/<locale>/testDrive.json. */
export const readyChecklistStyles: ChecklistItemStyle[] = [
  {},
  {},
  {},
  {},
  {},
  { highlightClassName: "text-swc" },
  {},
  { highlightClassName: "text-lvs-voice" },
];

export type JourneyDayIcon = {
  icon: string;
};

/** Order matches `journey.timelineCard.days` in messages/<locale>/testDrive.json. */
export const journeyDays: JourneyDayIcon[] = [
  { icon: "/icons/test-drive/home-bt-2.svg" },
  { icon: "/icons/ecosystem-grid/documents.svg" },
  { icon: "/icons/ecosystem-grid/automation.svg" },
  { icon: "/icons/ecosystem-grid/capture.svg" },
  { icon: "/icons/ecosystem-grid/sign.svg" },
  { icon: "/icons/ecosystem-grid/agents.svg" },
  { icon: "/icons/test-drive/premium-crown.svg" },
];

// Gradient (from -> to) for the connector dot between each pair of journey days
export const journeyConnectorGradients: [string, string][] = [
  ["#2FB79C", "#0781EC"],
  ["#0781EC", "#2669E6"],
  ["#2669E6", "#31C4CC"],
  ["#31C4CC", "#09A1EA"],
  ["#31C4CC", "#09A1EA"],
  ["#31C4CC", "#09A1EA"],
];

export type PlanFeatureIcon = {
  icon: string;
};

/** Order matches `security.endFeatures` in messages/<locale>/testDrive.json. */
export const endOfTrialFeatures: PlanFeatureIcon[] = [
  { icon: "/icons/test-drive/save.svg" },
  { icon: "/icons/test-drive/copy.svg" },
  { icon: "/icons/test-drive/data-protected.svg" },
  { icon: "/icons/test-drive/continue-anytime.svg" },
];
