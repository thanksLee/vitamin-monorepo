import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getKrLang, getZhLang, getEnLang } from '@vitamin-ui/utils';

const currentLang = 'kr';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV ? true : false,
    lng: currentLang,
    fallbackLng: currentLang,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      kr: {
        translation: getKrLang(),
      },
      zh: {
        translation: getZhLang(),
      },
      en: {
        translation: getEnLang(),
      },
    },
  });

export default i18n;
