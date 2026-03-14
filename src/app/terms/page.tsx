import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "OrbitSafe VPN terms of service: acceptable use, subscription terms, service limitations, and liability.",
  openGraph: {
    title: "Terms of Service | OrbitSafe VPN",
    description: "Terms of use for OrbitSafe VPN. Acceptable use, subscriptions, and limitations.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
            <p className="mt-2 text-slate-600">Last updated: March 14, 2025</p>
          </header>
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">1. Agreement to Terms</h2>
              <p>
                By downloading, installing, or using OrbitSafe VPN (&quot;Service,&quot; &quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service. We may update these Terms from time to time; continued use after changes constitutes acceptance.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">2. Description of Service</h2>
              <p>
                OrbitSafe VPN provides a virtual private network (VPN) application for iOS devices. The Service encrypts your internet traffic and routes it through our servers. Availability, features, and performance may vary and are subject to change.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">3. Acceptable Use</h2>
              <p>
                You agree to use the Service only for lawful purposes. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate any applicable law, regulation, or third-party rights</li>
                <li>Use the Service for illegal activities, fraud, or to harm others</li>
                <li>Attempt to gain unauthorized access to our systems, other users’ accounts, or any network or system</li>
                <li>Distribute malware, spam, or engage in phishing or other abusive behavior</li>
                <li>Resell or redistribute the Service without our written permission</li>
                <li>Use the Service in a way that could damage, disable, or overburden our infrastructure</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate your access if we reasonably believe you have violated these terms or abused the Service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">4. Subscription and Payment</h2>
              <p>
                Access to certain features may require a paid subscription. Payment is processed through the Apple App Store. By subscribing, you agree to Apple’s payment terms. Subscriptions typically auto-renew unless cancelled before the end of the current period. Refunds are subject to Apple’s refund policy. We do not store your payment card details.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">5. Service Limitations</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Uninterrupted or error-free operation</li>
                <li>Availability in all regions or on all networks</li>
                <li>Compatibility with every app or service</li>
                <li>Specific speed or performance levels</li>
              </ul>
              <p className="mt-4">
                You are responsible for ensuring your use of the Service complies with local laws. We may restrict access in certain jurisdictions if required by law or policy.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">6. Intellectual Property</h2>
              <p>
                OrbitSafe VPN, our logos, and all content and technology in the Service are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without our permission.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">7. Disclaimer of Warranties</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR BE SECURE, UNINTERRUPTED, OR ERROR-FREE.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">8. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORBITSAFE VPN AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED U.S. DOLLARS (USD $100), WHICHEVER IS GREATER. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES; IN SUCH CASES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless OrbitSafe VPN and its affiliates from any claims, damages, losses, or expenses (including reasonable attorneys’ fees) arising from your use of the Service or your violation of these Terms or any law or third-party rights.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">10. Termination</h2>
              <p>
                You may stop using the Service at any time. We may suspend or terminate your access if you breach these Terms or for other operational or legal reasons. Upon termination, your right to use the Service ceases. Sections that by their nature should survive (e.g., liability, indemnification, dispute resolution) will survive.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">11. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which OrbitSafe VPN operates, without regard to conflict of law principles. Any dispute arising from these Terms or the Service shall be resolved in the courts of that jurisdiction, except where prohibited. You may also have rights under consumer protection laws in your country.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">12. Contact</h2>
              <p>
                For questions about these Terms, contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:legal@orbitsafevpn.com" className="font-medium text-indigo-600 hover:text-indigo-500">
                  legal@orbitsafevpn.com
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
