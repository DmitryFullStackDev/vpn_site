"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { featureIcons } from "@/components/FeatureIcons";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesContent() {
  const { t } = useLanguage();

  const features = t.features.items.map((item, i) => ({
    ...item,
    icon: [
      featureIcons.secure,
      featureIcons.fast,
      featureIcons.privacy,
      featureIcons.noLogs,
      featureIcons.oneTap,
    ][i],
  }));

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
          <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
          <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
              <ShieldIcon className="h-4 w-4" />
              <span>{t.features.badge}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.features.heading}
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              {t.features.subheading}
            </p>
          </div>
        </section>
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {features.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
