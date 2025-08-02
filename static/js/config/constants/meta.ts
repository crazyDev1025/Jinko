import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: process.env.REACT_APP_PROJECT_NAME,
}

export const getCustomMeta = (path: string): PageMeta => {
  switch (path) {
    default:
      return null
  }
}
