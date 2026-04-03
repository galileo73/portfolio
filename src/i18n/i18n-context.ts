import { createContext, useContext } from "react";
import { translations, type Lang } from "./translations";

export type Dict = typeof translations.en;

export type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

export const I18nContext = createContext<I18nContextValue | undefined>(
  undefined,
);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}
