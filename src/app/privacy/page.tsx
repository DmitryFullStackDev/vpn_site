import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OrbitSafe VPN privacy policy: minimal data collection, no browsing logs, connection logs policy, and security practices.",
  openGraph: {
    title: "Privacy Policy | OrbitSafe VPN",
    description: "How we collect, use, and protect your data. No browsing logs. Minimal data collection.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
            <p className="mt-3 text-slate-600">Last updated: March 14, 2025</p>
          </div>
        </section>
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="sr-only">
            <h1>Privacy Policy</h1>
          </header>
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">1. Introduction</h2>
              <p>
                OrbitSafe VPN (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our VPN application for iOS. We believe in minimal data collection and transparency.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>
              <p>
                We collect only what is necessary to provide and improve our service:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Account information:</strong> If you create an account, we collect your email address and any payment-related information required by the App Store. We do not store your payment card details; those are handled by Apple.</li>
                <li><strong>Device information:</strong> We may collect device type, operating system version, and app version to ensure compatibility and troubleshoot issues.</li>
                <li><strong>Connection data:</strong> As described in Section 3, we may retain minimal connection logs for a limited time for network operations and abuse prevention. We do not log your browsing activity, DNS queries, or the content of your traffic.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">3. No Browsing Logs</h2>
              <p>
                We do not log, store, or have access to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Websites you visit or apps you use</li>
                <li>DNS queries</li>
                <li>Traffic content, including IP addresses of destinations you connect to while using our VPN</li>
                <li>Timestamps tied to your identity in a way that could reveal your activity</li>
              </ul>
              <p className="mt-4">
                Our infrastructure is designed so that we cannot associate your identity with your online activity.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">4. Connection Logs Policy</h2>
              <p>
                For the operation and security of our network, we may temporarily retain minimal connection-related data, such as:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aggregate connection counts to our servers (not tied to individual users)</li>
                <li>Server load and performance metrics</li>
                <li>In cases of suspected abuse or violation of our Terms of Service, we may retain limited connection metadata for a short period to investigate and resolve the issue. Such data is deleted after the investigation and is not used for marketing or sold to third parties.</li>
              </ul>
              <p className="mt-4">
                We do not keep permanent logs that identify you with your VPN usage.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">5. How We Use Your Information</h2>
              <p>
                We use the limited information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, maintain, and improve the VPN service</li>
                <li>Process subscriptions and respond to support requests</li>
                <li>Send important service or security notices</li>
                <li>Comply with applicable law where we are legally required to do so</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or share your personal information with third parties for their marketing purposes.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">6. Security Practices</h2>
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All VPN traffic is encrypted using strong protocols (e.g., WireGuard, IKEv2).</li>
                <li>We use secure, access-controlled systems for any data we store.</li>
                <li>We regularly review and update our practices to address new threats.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">7. Data Retention</h2>
              <p>
                We retain data only as long as necessary. Account information is kept while your account is active and for a limited period after closure for legal and support purposes. Any temporary connection or operational logs are deleted according to our internal retention schedule, typically within a short period.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">8. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, or to object to or restrict certain processing. To exercise these rights or ask questions about your data, contact us at the email below.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the &quot;Last updated&quot; date. Continued use of the service after changes constitutes acceptance of the revised policy.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">10. Contact Us</h2>
              <p>
                For privacy-related questions or requests, contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:privacy@orbitsafevpn.com" className="font-medium text-indigo-600 hover:text-indigo-500">
                  privacy@orbitsafevpn.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
