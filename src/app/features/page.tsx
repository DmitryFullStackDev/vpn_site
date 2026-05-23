import type { Metadata } from "next";
import { FeaturesContent } from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore OrbitSafe VPN features: secure VPN connection, fast global servers, privacy protection, no-logging policy, and one-tap connect. Built for Android.",
  openGraph: {
    title: "Features | OrbitSafe VPN",
    description:
      "Secure VPN connection, fast servers, privacy protection, no logs, one-tap connect. Built for Android.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
