import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white px-4 pt-20 pb-28 sm:px-6 sm:pt-28 sm:pb-36 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
          <LockIcon className="h-4 w-4" />
          <span>Coming soon to iOS</span>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-tight">
          Privacy that travels with you
        </h1>
        <p className="mt-6 text-xl text-slate-600 sm:text-2xl">
          OrbitSafe VPN — secure, fast, and simple. One tap to a safer internet on your iPhone.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
          Encrypt your connection, hide your location, and browse without being tracked. Built for iOS with a focus on speed and ease of use.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#coming-soon"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <AppStoreIcon className="h-7 w-7" />
            <span>Download on the App Store — Coming Soon</span>
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

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
