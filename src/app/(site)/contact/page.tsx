import ContactPageClient from "@/components/ContactPageClient";
import { ensureFeatureEnabled } from "@/utils/featureGuard";

export default function ContactPage() {
  ensureFeatureEnabled("contact");
  return <ContactPageClient />;
}
