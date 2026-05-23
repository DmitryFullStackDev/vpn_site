import type { Metadata } from "next";
import { GetStartedContent } from "./GetStartedContent";

export const metadata: Metadata = {
  title: "Get Started | OrbitSafe VPN",
  description:
    "Join the OrbitSafe VPN closed beta in three simple steps. Available on Android via Google Play.",
  openGraph: {
    title: "Get Started | OrbitSafe VPN",
    description: "Join the OrbitSafe VPN closed beta in three simple steps.",
    type: "website",
  },
};

export default function GetStartedPage() {
  return <GetStartedContent />;
}
