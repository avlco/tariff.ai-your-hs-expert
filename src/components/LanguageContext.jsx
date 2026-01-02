import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = {
  en: { label: 'English', dir: 'ltr' },
  he: { label: 'עברית', dir: 'rtl' },
  es: { label: 'Español', dir: 'ltr' },
  it: { label: 'Italiano', dir: 'ltr' },
  fr: { label: 'Français', dir: 'ltr' },
  de: { label: 'Deutsch', dir: 'ltr' },
  ru: { label: 'Русский', dir: 'ltr' },
  ja: { label: '日本語', dir: 'ltr' }
};

export function LanguageProvider({ children }) {
  const [langCode, setLangCode] = useState(() => localStorage.getItem('tariff-lang') || 'en');
  const [translations, setTranslations] = useState(null);
  const [fallback, setFallback] = useState(null);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        // טעינת אנגלית כגיבוי פעם אחת
        if (!fallback) {
          const enData = await import('../locales/en.json');
          setFallback(enData.default);
        }
        // טעינה דינמית של השפה שנבחרה
        const selectedData = await import(`../locales/${langCode}.json`);
        setTranslations(selectedData.default);
        
        const dir = SUPPORTED_LANGUAGES[langCode]?.dir || 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = langCode;
        localStorage.setItem('tariff-lang', langCode);
      } catch (err) {
        console.error("Translation load error:", err);
        setTranslations({});
      }
    };
    loadLanguage();
  }, [langCode, fallback]);

  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    const getValue = (obj) => keys.reduce((acc, key) => (acc && acc[key] ? acc[key] : null), obj);
    return getValue(translations) || getValue(fallback) || path;
  };

  if (!translations) return null;

  return (
    <LanguageContext.Provider value={{ language: langCode, setLanguage: setLangCode, t, isRTL: SUPPORTED_LANGUAGES[langCode]?.dir === 'rtl', SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
