import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslations from "./locales/en.json"
import deTranslations from "./locales/de.json"

export const resources = {
  en: {
    translation: enTranslations,
  },
  de: {
    translation: deTranslations,
  },
}

const fallbackLocale = "en"
export const supportedLocales = ["en", "de"]

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    debug: false,
    interpolation: { escapeValue: false }, // React already does escaping
    fallbackLng: fallbackLocale,
    react: {
      useSuspense: false,
    },
    compatibilityJSON: "v3",
  })

export default i18n
