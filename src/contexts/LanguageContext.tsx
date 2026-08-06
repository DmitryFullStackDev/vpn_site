"use client";

import { createContext, useContext } from "react";
import { translations, type Locale, type Translations } from "@/lib/translations";

type LanguageContextType = {
  locale: Locale;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "ru",
  t: translations.ru,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageContext.Provider value={{ locale: "ru", t: translations.ru }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
