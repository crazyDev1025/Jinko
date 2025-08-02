import React from 'react'
import { Text, Dropdown, Button, LanguageIcon, Language } from '@pancakeswap/uikit'

interface Props {
  currentLang: string
  langs: Language[]
  setLang: (lang: Language) => void
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    target={
      <Button variant="text" startIcon={<LanguageIcon id="lang-icon" width="24px" />}
      style={{
        borderRadius: "20px",
        border: "2px solid var(--textGrey)",
        height: "34px",
        padding: "0 16px"
      }}
      >
        <Text style={{ color: "var(--textGrey)" }}>{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <Button
        key={lang.locale}
        onClick={() => setLang(lang)}
        className="lang-btn"
      >
        {lang.language}
      </Button>
    ))}
  </Dropdown>
)

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang)
