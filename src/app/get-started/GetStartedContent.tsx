"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const GOOGLE_GROUP_URL = "https://groups.google.com/g/safeorbit-testers";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dmitry_dev_react.safe_orbit_vpn";

export function GetStartedContent() {
  const { t, locale } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screenshotSrc =
    locale === "ru"
      ? "/assets/safeorbit_join_ru.png"
      : "/assets/safeorbit_join_en.png";

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxOpen, closeLightbox]);

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
              {/* Step 1 */}
              <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="flex flex-1 flex-col p-8 lg:p-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-xl font-bold text-white shadow-lg shadow-indigo-500/25">
                    1
                  </span>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">
                    {t.getStarted.step1.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {t.getStarted.step1.description}
                  </p>

                  {/* Screenshot thumbnail */}
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="group relative mt-5 block w-full overflow-hidden rounded-xl border border-slate-200 shadow-md transition hover:border-indigo-300 hover:shadow-indigo-500/10 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    aria-label="View screenshot full size"
                  >
                    <Image
                      src={screenshotSrc}
                      alt="Google Groups join screenshot"
                      width={1512}
                      height={780}
                      className="w-full rounded-xl"
                      priority
                    />
                    <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-slate-900/20 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                        <ExpandIcon className="h-3.5 w-3.5" />
                        Full size
                      </span>
                    </div>
                  </button>

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

              {/* Step 2 */}
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

              {/* Step 3 */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative mx-4 max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshotSrc}
              alt="Google Groups join screenshot"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
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

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}
