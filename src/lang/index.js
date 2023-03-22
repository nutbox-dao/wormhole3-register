import { createI18n } from 'vue-i18n'

import enLocale from './en'
import zhLocale from './zh'

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

const getLocale = () => {
  const cookieLanguage = localStorage.getItem('language')
  if (cookieLanguage) return cookieLanguage
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en',
  legacy: false,
  messages
})

export default i18n
