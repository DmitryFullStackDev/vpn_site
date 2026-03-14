import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { featureIcons } from "@/components/FeatureIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore OrbitSafe VPN features: secure VPN connection, fast global servers, privacy protection, no-logging policy, one-tap connect, and kill switch. Built for iOS.",
  openGraph: {
    title: "Features | OrbitSafe VPN",
    description:
      "Secure VPN connection, fast servers, privacy protection, no logs, one-tap connect, kill switch. Built for iPhone.",
    type: "website",
  },
};

const features = [
  {
    title: "Secure VPN connection",
    description:
      "Every connection is protected with AES-256 encryption—the same standard trusted by governments and enterprises. Your data stays private on public Wi‑Fi, at home, or on cellular.",
    icon: featureIcons.secure,
  },
  {
    title: "Fast global servers",
    description:
      "Choose from servers in multiple countries and regions. We optimize for speed and stability so you can stream, browse, and work without slowdowns.",
    icon: featureIcons.fast,
  },
  {
    title: "Privacy protection",
    description:
      "We hide your real IP address and help prevent tracking by advertisers and data brokers. Your identity and location stay private while you browse.",
    icon: featureIcons.privacy,
  },
  {
    title: "No logging policy",
    description:
      "We don’t store logs of your browsing history, DNS queries, or traffic. Our no-logging policy is at the core of what we build—your activity is your business only.",
    icon: featureIcons.noLogs,
  },
  {
    title: "Easy one-tap connect",
    description:
      "No complicated setup. Open the app, tap connect, and you’re protected. Perfect for everyday users who want security without the hassle.",
    icon: featureIcons.oneTap,
  },
  {
    title: "Kill switch protection",
    description:
      "If your VPN connection drops, the kill switch can block unencrypted traffic so your data is never exposed. Optional and easy to enable in settings.",
    icon: featureIcons.killSwitch,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Built for security and simplicity
            </h1>
            <p className="mt-4 text-xl text-slate-600">
              Every feature is designed to keep you private and in control—without getting in your way.
            </p>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
