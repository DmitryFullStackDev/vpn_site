"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const GOOGLE_GROUP_URL = "https://groups.google.com/g/safeorbit-testers";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dmitry_dev_react.safe_orbit_vpn";

export function GetStartedContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
          <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
          <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
              <RocketIcon className="h-4 w-4" />
              <span>{t.getStarted.badge}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.getStarted.heading}
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              {t.getStarted.subheading}
            </p>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="p-8 lg:p-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-xl font-bold text-white shadow-lg shadow-indigo-500/25">
                    1
                  </span>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">
                    {t.getStarted.step1.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {t.getStarted.step1.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={GOOGLE_GROUP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {t.getStarted.step1.cta}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="p-8 lg:p-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-xl font-bold text-white shadow-lg shadow-indigo-500/25">
                    2
                  </span>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">
                    {t.getStarted.step2.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {t.getStarted.step2.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {t.getStarted.step2.cta}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="p-8 lg:p-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-xl font-bold text-white shadow-lg shadow-indigo-500/25">
                    3
                  </span>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">
                    {t.getStarted.step3.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {t.getStarted.step3.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.818m2.118-6.37a14.98 14.98 0 00-12.113 6.16"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
