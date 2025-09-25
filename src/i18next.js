import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// importa JSON direto (Next suporta isso nativamente)
import en from "../public/locales/en/translation.json";
import pt from "../public/locales/pt/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
  });

export default i18n;
