import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OrbitSafe VPN privacy policy: what we collect, what we don’t, and how we protect your data.",
  openGraph: {
    title: "Privacy Policy | OrbitSafe VPN",
    description:
      "What OrbitSafe VPN collects, what we don’t collect (no browsing logs), and how we protect your data.",
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
            <p className="mt-3 text-slate-600">Last updated: April 15, 2026</p>
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
                OrbitSafe VPN (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a VPN service built to protect privacy and support a free and open internet. This Privacy Policy explains what information we collect, what we do not collect, how we use information, and the choices you have when you use our apps and website.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">2. Core Principles</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>No activity logging:</strong> We do not collect or store your browsing history, DNS queries, traffic contents, or the destinations you connect to while using the VPN.
                </li>
                <li>
                  <strong>Data minimization:</strong> We collect only the information that is necessary to operate the service, provide support, process subscriptions, and improve reliability.
                </li>
                <li>
                  <strong>Transparency:</strong> We aim to describe our practices clearly and update this policy when our service changes.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">3. Data We Do Not Collect</h2>
              <p>We do not collect, store, or sell the following:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your browsing history</li>
                <li>DNS queries</li>
                <li>Traffic contents (the content of what you do online)</li>
                <li>IP addresses of websites/services you access while connected</li>
                <li>Persistent VPN connection logs tied to you (e.g., connection/disconnection timestamps, session duration, bandwidth usage per user)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">4. Data We Do Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Account information:</strong> If you create an account, we may collect your email address (or another identifier you provide) to manage access and communicate essential service messages.
                </li>
                <li>
                  <strong>Payment information:</strong> Subscription payments are processed by the Apple App Store (and/or other store providers, if applicable). We do not receive or store your full payment card number. We may receive limited purchase information such as transaction status, product identifier, and timestamps related to the purchase.
                </li>
                <li>
                  <strong>Support communications:</strong> If you contact support, we receive the information you choose to share (for example, your email address and the content of your message) to resolve your request.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">5. Technical Privacy Measures</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Strong encryption:</strong> We use modern VPN protocols (for example, WireGuard&reg;) to encrypt traffic between your device and our servers.
                </li>
                <li>
                  <strong>Privacy features:</strong> Depending on the platform/version, features may include kill switch, private DNS, and split tunneling.
                </li>
                <li>
                  <strong>Operational safeguards:</strong> We design our systems to minimize data exposure and limit access to operational data to authorized personnel only.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">6. Website Operation and Cookies</h2>
              <p>
                Our website may use cookies or similar technologies for essential functionality and optional analytics.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Optional analytics:</strong> We may measure anonymous site usage (for example, pages visited and time spent) to improve the website. Where possible, analytics are configured to avoid collecting identifying information.
                </li>
                <li>
                  <strong>Marketing measurement:</strong> If we run advertising campaigns, third-party providers may use pixels/tags to measure campaign performance. We do not provide these services with VPN activity data.
                </li>
                <li>
                  <strong>Forms and anti-abuse:</strong> If we use CAPTCHA or anti-spam protection, those providers may collect data according to their own privacy policies.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">7. Third-Party Services</h2>
              <p>
                To operate the service and website, we may use third-party providers. These providers process data under their own privacy policies and our agreements with them.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>App stores &amp; payments:</strong> Apple (and other app store providers, if applicable) processes purchases and subscriptions.
                </li>
                <li>
                  <strong>Support tooling:</strong> If we use a support platform (for example, a ticketing system), it may process your support messages and email address.
                </li>
                <li>
                  <strong>Diagnostics/analytics:</strong> If enabled, tools may receive crash reports and aggregated product analytics (for example, error traces and app version).
                </li>
                <li>
                  <strong>Infrastructure:</strong> Hosting, CDN, DNS, and security services may process basic request metadata for website delivery and protection (for example, IP addresses for web traffic to our site).
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">8. Data Storage and Retention</h2>
              <p>
                We retain personal data only as long as needed for the purposes described above, including providing the service, complying with legal obligations, resolving disputes, and enforcing agreements.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account data:</strong> stored while your account is active, and then deleted or anonymized within a reasonable period (unless a longer period is required by law).
                </li>
                <li>
                  <strong>Support data:</strong> stored as long as necessary to resolve your request, then deleted or anonymized.
                </li>
                <li>
                  <strong>Diagnostic data:</strong> may be retained longer in aggregated/anonymized form for performance analysis.
                </li>
                <li>
                  <strong>VPN activity logs:</strong> we do not keep browsing logs; therefore, there is no browsing history to retain or delete.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">9. Your Rights</h2>
              <p>
                Depending on where you live (for example, under GDPR or similar laws), you may have rights to access, correct, delete, or export your personal data, and to object to or restrict certain processing.
              </p>
              <p className="mt-4">
                You can submit requests using the contact details below. We may need to verify your identity before processing certain requests.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">10. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share limited information only in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service providers:</strong> with vendors that help us run the service (e.g., payment processors/app stores, support tooling, hosting/security providers), under confidentiality and data protection obligations.
                </li>
                <li>
                  <strong>Legal requirements:</strong> if required by law, regulation, or valid legal process. If we receive a request, we respond only with the information we have.
                </li>
                <li>
                  <strong>Safety and abuse:</strong> to protect users, prevent fraud/abuse, and maintain the security of our systems.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">11. Jurisdiction</h2>
              <p>
                OrbitSafe VPN operates from jurisdictions and vendors that may process data in different countries. Where applicable, we use appropriate safeguards for international data transfers as required by law.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the &quot;Last updated&quot; date. If changes are significant, we may provide additional notice (for example, in-app or by email).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">13. Contact</h2>
              <p>For privacy questions or data requests, contact us at:</p>
              <p className="mt-2">
                <a
                  href="mailto:privacy@orbitsafevpn.com"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
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
