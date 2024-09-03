import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      english: "English",
      khmer: "Khmer",
      slectLanguage: "Select Languages",
      home: "Home",
      type: "Type",
      about_us: "About Us",
    },
  },
  km: {
    translation: {
      english: "អង់គ្លេស",
      khmer: "ខ្មែរ",
      slectLanguage: "ជ្រើសរើសភាសា",
      home: "ទំព័រដើម",
      type: "ប្រភេទ",
      about_us: "អំពីយើង",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en", // Load from local storage or default to 'en'
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
