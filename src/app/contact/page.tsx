import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OrbitSafe VPN. Email support and contact form for questions, feedback, and partnership inquiries.",
  openGraph: {
    title: "Contact | OrbitSafe VPN",
    description: "Contact OrbitSafe VPN for support, feedback, or partnership.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-xl text-slate-600">
              Have a question, feedback, or want to partner with us? We’d love to hear from you.
            </p>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10">
              <h2 className="text-lg font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-600">
                We typically respond within 1–2 business days.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div className="mt-12 border-t border-slate-200 pt-12">
              <h2 className="text-lg font-semibold text-slate-900">Other ways to reach us</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>
                  <span className="font-medium text-slate-700">General inquiries:</span>{" "}
                  <a href="mailto:hello@orbitsafevpn.com" className="text-indigo-600 hover:text-indigo-500">
                    hello@orbitsafevpn.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-700">Support:</span>{" "}
                  <a href="mailto:support@orbitsafevpn.com" className="text-indigo-600 hover:text-indigo-500">
                    support@orbitsafevpn.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-700">Privacy & legal:</span>{" "}
                  <a href="mailto:privacy@orbitsafevpn.com" className="text-indigo-600 hover:text-indigo-500">
                    privacy@orbitsafevpn.com
                  </a>
                </li>
              </ul>
              <div className="mt-8 rounded-xl bg-slate-100 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Company
                </h3>
                <p className="mt-2 font-medium text-slate-900">OrbitSafe VPN</p>
                <p className="mt-1 text-sm text-slate-600">
                  Secure, private internet for iOS. Coming soon to the App Store.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
