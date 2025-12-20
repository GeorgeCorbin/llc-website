export const featureFlags = {
  services: process.env.NEXT_PUBLIC_ENABLE_SERVICES !== "false",
  pricing: process.env.NEXT_PUBLIC_ENABLE_PRICING !== "false",
  portfolio: process.env.NEXT_PUBLIC_ENABLE_PORTFOLIO !== "false",
  about: process.env.NEXT_PUBLIC_ENABLE_ABOUT !== "false",
  contact: process.env.NEXT_PUBLIC_ENABLE_CONTACT !== "false",
  privacy: process.env.NEXT_PUBLIC_ENABLE_PRIVACY !== "false",
  terms: process.env.NEXT_PUBLIC_ENABLE_TERMS !== "false",
} as const;

export type FeatureKey = keyof typeof featureFlags;

export const isFeatureEnabled = (feature: FeatureKey) => featureFlags[feature];

export const featureFlagMeta: Record<FeatureKey, { label: string; envVar: string; description: string }> = {
  services: {
    label: "Services Page",
    envVar: "NEXT_PUBLIC_ENABLE_SERVICES",
    description: "Controls access to the /services page and navigation link.",
  },
  pricing: {
    label: "Pricing Page",
    envVar: "NEXT_PUBLIC_ENABLE_PRICING",
    description: "Controls access to the /pricing page and navigation link.",
  },
  portfolio: {
    label: "Portfolio Page",
    envVar: "NEXT_PUBLIC_ENABLE_PORTFOLIO",
    description: "Controls access to the /portfolio showcase.",
  },
  about: {
    label: "About Page",
    envVar: "NEXT_PUBLIC_ENABLE_ABOUT",
    description: "Controls access to the /about company overview.",
  },
  contact: {
    label: "Contact Page",
    envVar: "NEXT_PUBLIC_ENABLE_CONTACT",
    description: "Controls access to the /contact inquiry form.",
  },
  privacy: {
    label: "Privacy Policy",
    envVar: "NEXT_PUBLIC_ENABLE_PRIVACY",
    description: "Controls access to the /privacy policy page.",
  },
  terms: {
    label: "Terms of Service",
    envVar: "NEXT_PUBLIC_ENABLE_TERMS",
    description: "Controls access to the /terms legal page.",
  },
};
