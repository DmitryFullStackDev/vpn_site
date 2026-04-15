import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "OrbitSafe VPN terms of service: acceptable use, subscriptions, service limitations, and legal terms.",
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
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
            <p className="mt-3 text-slate-600">Last updated: April 15, 2026</p>
          </div>
        </section>
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="sr-only">
            <h1>Terms of Service</h1>
          </header>
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of OrbitSafe VPN (the
                &quot;Service&quot;), including our apps, websites, and related features. By downloading,
                installing, accessing, or using the Service, you agree to these Terms. If you do not
                agree, do not use the Service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">2. Eligibility and Accounts</h2>
              <p>
                You must be legally able to enter into a binding agreement in your jurisdiction to use
                the Service. If you create an account, you agree to provide accurate information and
                to keep it up to date. You are responsible for maintaining the confidentiality of your
                credentials and for all activity that occurs under your account.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">3. Description of the Service</h2>
              <p>
                OrbitSafe VPN provides a virtual private network (VPN) service that encrypts network
                traffic between your device and our servers. The Service may include features such as
                server selection, protocol options, and privacy/security tools. Availability, features,
                and performance may vary by region, platform, and network conditions and may change
                over time.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">4. Acceptable Use</h2>
              <p>You agree to use the Service only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate applicable laws, regulations, or third-party rights</li>
                <li>Use the Service for illegal activities, fraud, or harm to others</li>
                <li>Distribute malware, spam, or engage in phishing or abusive behavior</li>
                <li>Attempt to gain unauthorized access to systems, accounts, or networks</li>
                <li>Interfere with or disrupt the Service or our infrastructure</li>
                <li>Reverse engineer, circumvent, or attempt to defeat security or access controls</li>
                <li>Resell, sublicense, or redistribute the Service unless we expressly allow it in writing</li>
              </ul>
              <p className="mt-4">
                We may suspend or terminate access if we reasonably believe you violated these Terms,
                abused the Service, or created risk for us, other users, or third parties.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">5. Subscriptions, Billing, and Refunds</h2>
              <p>
                Some features may require a paid subscription. If you purchase a subscription through an
                app store (such as Apple), billing, renewals, cancellations, and refunds are handled by
                that store and subject to its terms and policies. Subscriptions typically auto-renew
                unless canceled before the end of the current billing period.
              </p>
              <p className="mt-4">
                We do not store your full payment card number. We may receive limited purchase metadata
                (for example, product identifier and payment status) to provide access and support.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">6. Service Availability and Limitations</h2>
              <p>
                The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee
                that the Service will be uninterrupted, secure, error-free, or available in all locations
                or on all networks. Speeds, latency, and performance depend on many factors outside our
                control.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">7. Intellectual Property</h2>
              <p>
                The Service, including our software, designs, trademarks, logos, and content, is owned by
                OrbitSafe VPN or its licensors and is protected by intellectual property laws. We grant you
                a limited, non-exclusive, non-transferable, revocable license to use the Service for your
                personal, non-commercial use, subject to these Terms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">8. Third-Party Services and Content</h2>
              <p>
                The Service may interact with third-party services (for example, app stores, payment
                providers, analytics/diagnostics providers, and external websites). We are not responsible
                for third-party services, their content, or their policies. Your use of third-party
                services is subject to their terms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">9. Disclaimer of Warranties</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE
                DO NOT WARRANT THAT THE SERVICE WILL BE SECURE, UNINTERRUPTED, OR ERROR-FREE.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORBITSAFE VPN AND ITS AFFILIATES, OFFICERS,
                EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL,
                ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SERVICE.
              </p>
              <p className="mt-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF
                OR RELATED TO THE SERVICE WILL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE
                TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR USD $100, WHICHEVER IS
                GREATER. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN SUCH CASES, THESE
                LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless OrbitSafe VPN and its affiliates from
                any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’
                fees) arising out of or related to your use of the Service, your violation of these
                Terms, or your violation of any law or third-party rights.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">12. Termination</h2>
              <p>
                You may stop using the Service at any time. We may suspend or terminate your access to
                the Service if you violate these Terms, if required by law, or for operational or
                security reasons. Upon termination, your right to use the Service ceases.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">13. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction where OrbitSafe VPN operates,
                without regard to conflict of law principles. Any disputes arising out of or relating
                to these Terms or the Service will be resolved in the competent courts of that
                jurisdiction, unless applicable law provides otherwise.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">14. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will post the current version on this
                page and update the &quot;Last updated&quot; date. If changes are significant, we may provide
                additional notice (for example, in-app or by email). Continued use of the Service after
                the effective date of changes constitutes acceptance.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900">15. Contact</h2>
              <p>For questions about these Terms, contact us at:</p>
              <p className="mt-2">
                <a
                  href="mailto:legal@orbitsafevpn.com"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
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
