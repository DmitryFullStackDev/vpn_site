"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
            openIndex === index
              ? "border-indigo-200 shadow-lg shadow-indigo-500/5"
              : "border-slate-200/80 hover:border-slate-300"
          }`}
        >
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50/80 sm:px-8"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span className={`shrink-0 transition-transform ${openIndex === index ? "text-indigo-600" : "text-slate-400"}`}>
              {openIndex === index ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-5 sm:px-8">
              <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
