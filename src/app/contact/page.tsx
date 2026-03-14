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
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
          <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
              <MailIcon className="h-4 w-4" />
              <span>Get in touch</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Have a question, feedback, or want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </section>
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl">
            {/*<div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">*/}
            {/*  <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50/30 px-8 py-8 sm:px-10 sm:py-10">*/}
            {/*    <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>*/}
            {/*    <p className="mt-2 text-sm text-slate-600">*/}
            {/*      We typically respond within 1–2 business days.*/}
            {/*    </p>*/}
            {/*    <div className="mt-8">*/}
            {/*      <ContactForm />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <MailIcon className="h-5 w-5 text-indigo-600" />
                Send us a message
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">General:</span>
                  <a href="mailto:hello@orbitsafevpn.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    hello@orbitsafevpn.com
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">Support:</span>
                  <a href="mailto:support@orbitsafevpn.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    support@orbitsafevpn.com
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">Privacy & legal:</span>
                  <a href="mailto:privacy@orbitsafevpn.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    privacy@orbitsafevpn.com
                  </a>
                </li>
              </ul>
              <div className="mt-8 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Company
                </h3>
                <p className="mt-2 font-semibold text-slate-900">OrbitSafe VPN</p>
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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
