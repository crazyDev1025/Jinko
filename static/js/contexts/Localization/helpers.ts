import { EN } from 'config/localization/languages'

const publicUrl = process.env.PUBLIC_URL

export const LS_KEY = 'jinko_language'

export const fetchLocale = async (locale) => {
  const response = await fetch(`${publicUrl}/locales/${locale}.json`)
  const data = await response.json()
  return data
}

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || EN.locale
  } catch {
    return EN.locale
  }
}

export const getLanguageCodeFromQuery = () => {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const codeFromQuery = urlParams.get('lang')

    return codeFromQuery || null
  } catch {
    return null
  }
}