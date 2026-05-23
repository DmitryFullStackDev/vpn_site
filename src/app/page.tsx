"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { FAQ } from "@/components/FAQ";
import { featureIcons } from "@/components/FeatureIcons";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const benefits = t.home.benefits.items.map((item, i) => ({
    ...item,
    icon: [featureIcons.secure, featureIcons.fast, featureIcons.privacy, featureIcons.noLogs][i],
  }));

  const faqItems = t.home.faq.items.map((item) => {
    if ("answerLinkText" in item) {
      return {
        question: item.question,
        answer: (
          <>
            {item.answer}{" "}
            <Link href="/get-started" className="text-indigo-600 underline underline-offset-2 hover:text-indigo-500">
              {item.answerLinkText}
            </Link>{" "}
            {item.answerSuffix}
          </>
        ),
      };
    }
    return { question: item.question, answer: item.answer };
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section id="benefits" className="relative border-t border-slate-200/80 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              <ShieldIcon className="h-4 w-4" />
              <span>{t.home.benefits.badge}</span>
            </div>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.home.benefits.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
              {t.home.benefits.subheading}
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {benefits.map((b) => (
                <FeatureCard key={b.title} title={b.title} description={b.description} icon={b.icon} />
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              <StepsIcon className="h-4 w-4" />
              <span>{t.home.howItWorks.badge}</span>
            </div>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.home.howItWorks.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
              {t.home.howItWorks.subheading}
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3 lg:gap-12">
              {t.home.howItWorks.steps.map((item, i) => (
                <div key={i} className="relative">
                  <div className="relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 lg:p-10">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-xl font-bold text-white shadow-lg shadow-indigo-500/25">
                      {i + 1}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative border-t border-slate-200/80 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              <LockIcon className="h-4 w-4" />
              <span>{t.home.security.badge}</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.home.security.heading}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              {t.home.security.body}
            </p>
          </div>
        </section>
        <section id="faq" className="relative border-t border-slate-200/80 bg-gradient-to-b from-slate-50 to-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              <HelpIcon className="h-4 w-4" />
              <span>{t.home.faq.badge}</span>
            </div>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.home.faq.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-lg text-slate-600">
              {t.home.faq.subheading}
            </p>
            <div className="mt-16">
              <FAQ items={faqItems} />
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

function StepsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.757 0-3.223-.835-3.772-2M12 21a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
