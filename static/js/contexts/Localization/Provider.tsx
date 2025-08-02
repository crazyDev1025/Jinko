import React, { createContext, useCallback, useEffect, useState } from 'react'
import { Language } from '@pancakeswap/uikit'
import { IntlProvider } from 'react-intl'
import { EN, languages } from 'config/localization/languages'
import translations from 'config/localization/translations.json'
import { ContextApi, ContextData, ProviderState } from './types'
import { LS_KEY, fetchLocale, getLanguageCodeFromLS, getLanguageCodeFromQuery } from './helpers'

const initialState: ProviderState = {
  isFetching: true,
  currentLanguage: EN,
}

// Export the translations directly
export const languageMap = new Map<Language['locale'], Record<string, string>>()
languageMap.set(EN.locale, translations)

export const LanguageContext = createContext<ContextApi>(undefined)

export const LanguageProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getLanguageCodeFromLS()
    const codeFromQuery = getLanguageCodeFromQuery()
    const filteredCodeFromQuery = Object.keys(languages).find(key => key === codeFromQuery)

    return {
      ...initialState,
      currentLanguage: languages[filteredCodeFromQuery ?? codeFromStorage],
    }
  })
  const { currentLanguage } = state

  useEffect(() => {
    const fetchInitialLocales = async () => {
      const codeFromStorage = getLanguageCodeFromLS()
      const codeFromQuery = getLanguageCodeFromQuery()

      const filteredCodeFromQuery = Object.keys(languages).find(key => key === codeFromQuery)

      const enLocale = languageMap.get(EN.locale)
      const currentLocale = await fetchLocale(filteredCodeFromQuery ?? codeFromStorage ?? EN.locale)
      languageMap.set(filteredCodeFromQuery ?? codeFromStorage ?? EN.locale, { ...enLocale, ...currentLocale })
      localStorage.setItem(LS_KEY, filteredCodeFromQuery ?? codeFromStorage ?? EN.locale)

      // if (codeFromStorage !== EN.locale) {
      //   const enLocale = languageMap.get(EN.locale)
      //   const currentLocale = await fetchLocale(codeFromStorage)
      //   languageMap.set(codeFromStorage, { ...enLocale, ...currentLocale })
      // }

      setState((prevState) => ({
        ...prevState,
        isFetching: false,
      }))
    }

    fetchInitialLocales()
  }, [setState])

  const setLanguage = async (language: Language) => {
    if (!languageMap.has(language.locale)) {
      setState((prevState) => ({
        ...prevState,
        isFetching: true,
      }))

      const locale = await fetchLocale(language.locale)
      const enLocale = languageMap.get(EN.locale)

      // Merge the EN locale to ensure that any locale fetched has all the keys
      languageMap.set(language.locale, { ...enLocale, ...locale })
      localStorage.setItem(LS_KEY, language.locale)

      setState((prevState) => ({
        ...prevState,
        isFetching: false,
        currentLanguage: language,
      }))
    } else {
      localStorage.setItem(LS_KEY, language.locale)
      setState((prevState) => ({
        ...prevState,
        isFetching: false,
        currentLanguage: language,
      }))
    }
  }

  const translate = useCallback(
    (key: string, data?: ContextData) => {
      const translationSet = languageMap.has(currentLanguage.locale)
        ? languageMap.get(currentLanguage.locale)
        : languageMap.get(EN.locale)
      const translatedText = translationSet[key] || key

      // Check the existence of at least one combination of %%, separated by 1 or more non space characters
      const includesVariable = translatedText.match(/%\S+?%/gm)

      if (includesVariable && data) {
        let interpolatedText = translatedText
        Object.keys(data).forEach((dataKey) => {
          const templateKey = new RegExp(`%${dataKey}%`, 'g')
          interpolatedText = interpolatedText.replace(templateKey, data[dataKey].toString())
        })

        return interpolatedText
      }

      return translatedText
    },
    [currentLanguage],
  )

  return <LanguageContext.Provider value={{ ...state, setLanguage, t: translate }}>
    <IntlProvider locale={currentLanguage.locale} defaultLocale={EN.locale} messages={languageMap.get(currentLanguage.locale)}>
      {children}
    </IntlProvider>
  </LanguageContext.Provider>
}
