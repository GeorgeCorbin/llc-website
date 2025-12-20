import { notFound } from "next/navigation";
import { featureFlags } from "@/config/featureFlags";
import type { FeatureKey } from "@/config/featureFlags";

export function ensureFeatureEnabled(feature: FeatureKey) {
  if (!featureFlags[feature]) {
    notFound();
  }
}
