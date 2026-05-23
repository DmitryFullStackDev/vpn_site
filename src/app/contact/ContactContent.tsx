"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
          <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
              <MailIcon className="h-4 w-4" />
              <span>{t.contact.badge}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.contact.heading}
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              {t.contact.subheading}
            </p>
          </div>
        </section>
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <MailIcon className="h-5 w-5 text-indigo-600" />
                {t.contact.sendMessage}
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">{t.contact.general}</span>
                  <a href="mailto:hello@safeorbitvpn.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    hello@safeorbitvpn.com
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">{t.contact.support}</span>
                  <a href="mailto:support@safeorbitvpn.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    support@safeorbitvpn.com
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">{t.contact.privacyLegal}</span>
                  <a href="mailto:privacy@safeorbitvpn.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    privacy@safeorbitvpn.com
                  </a>
                </li>
              </ul>
              <div className="mt-8 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {t.contact.companyLabel}
                </h3>
                <p className="mt-2 font-semibold text-slate-900">OrbitSafe VPN</p>
                <p className="mt-1 text-sm text-slate-600">
                  {t.contact.companyTagline}
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
