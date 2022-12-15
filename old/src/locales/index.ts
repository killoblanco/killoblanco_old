import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLang from './en.json';
import esLang from './es.json';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enLang },
      es: { translation: esLang },
    },
    lng: 'es',
    react: {
      bindI18n: 'languageChanged',
    }
  });

export default i18n;
