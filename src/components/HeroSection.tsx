"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white px-4 pt-20 pb-28 sm:px-6 sm:pt-28 sm:pb-36 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
          <LockIcon className="h-4 w-4" />
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-tight">
          {t.hero.heading}
        </h1>
        <p className="mt-6 text-xl text-slate-600 sm:text-2xl">
          {t.hero.subheading}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
          {t.hero.description}
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/get-started"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <GooglePlayIcon className="h-7 w-7" />
            <span>{t.hero.cta}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85C3.34 21.61 3 21.09 3 20.5zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zM20.16 10.81c.34.27.59.69.59 1.19s-.25.92-.59 1.19l-2.27 1.31-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
    </svg>
  );
}
