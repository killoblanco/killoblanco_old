import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enLang from './en.json'
import esLang from './es.json'
import { initReactI18next } from 'react-i18next'

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enLang },
      es: { translation: esLang }
    },
    lng: 'es',
    react: {
      bindI18n: 'languageChanged'
    }
  })

export default i18n
