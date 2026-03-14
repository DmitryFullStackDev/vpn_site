import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 sm:p-10">
      <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-gradient-to-b from-indigo-500 to-indigo-400 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600 transition-colors group-hover:from-indigo-500/20 group-hover:to-violet-500/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
