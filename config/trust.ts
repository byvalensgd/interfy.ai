export type TrustBadge = {
  icon: string;
};

/** Order matches messages/<locale>/home.json's `globalTrust.security.badges` array. */
export const securityBadges: TrustBadge[] = [
  { icon: "/global/aws.svg" },
  { icon: "/global/lock.svg" },
  { icon: "/global/doc-check.svg" },
  { icon: "/global/fast-support.svg" },
  { icon: "/global/shield-workspace.svg" },
];

/** Order matches messages/<locale>/home.json's `scaleSecurity.features` array. */
export const scaleFeatures: TrustBadge[] = [
  { icon: "/scale/user-permissions.svg" },
  { icon: "/scale/shield-protected.svg" },
  { icon: "/scale/cloud-security.svg" },
  { icon: "/scale/goals.svg" },
  { icon: "/scale/cloud.svg" },
  { icon: "/scale/time.svg" },
  { icon: "/scale/privacy-global.svg" },
];

/** Order matches messages/<locale>/home.json's `scaleSecurity.trustBadges` array. */
export const scaleTrustBadges: TrustBadge[] = [
  { icon: "/scale/planet-global.svg" },
  { icon: "/scale/shield-lgpd.svg" },
  { icon: "/scale/encryption.svg" },
  { icon: "/scale/infra-global.svg" },
  { icon: "/scale/certification.svg" },
  { icon: "/scale/updates.svg" },
];
