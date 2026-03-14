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
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-slate-900 hover:bg-slate-50 sm:px-6"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span className="ml-2 shrink-0 text-slate-400">
              {openIndex === index ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
              <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
