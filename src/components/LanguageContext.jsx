import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = {
  en: { label: 'English', dir: 'ltr' },
  he: { label: 'עברית', dir: 'rtl' },
  fr: { label: 'Français', dir: 'ltr' },
  de: { label: 'Deutsch', dir: 'ltr' },
  es: { label: 'Español', dir: 'ltr' },
  it: { label: 'Italiano', dir: 'ltr' },
  ru: { label: 'Русский', dir: 'ltr' },
  ja: { label: '日本語', dir: 'ltr' },
  pt: { label: 'Português', dir: 'ltr' }
};

export function LanguageProvider({ children }) {
  const [langCode, setLangCode] = useState(() => localStorage.getItem('tariff-lang') || 'en');
  const [translations, setTranslations] = useState(null);
  const [fallback, setFallback] = useState(null);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        if (!fallback) {
          try {
            const enData = await import('./locales/en.js');
            setFallback(enData.default);
          } catch (e) {
            console.error("Fallback load error:", e);
          }
        }
        
        try {
          const selectedData = await import(`./locales/${langCode}.js`);
          setTranslations(selectedData.default);
        } catch (e) {
          console.warn(`Translation for ${langCode} not found, using fallback.`);
          if (fallback) setTranslations(fallback);
        }
        
        const dir = SUPPORTED_LANGUAGES[langCode]?.dir || 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = langCode;
        localStorage.setItem('tariff-lang', langCode);
      } catch (err) {
        console.error("Translation load error:", err);
        if (fallback) setTranslations(fallback);
      }
    };
    loadLanguage();
  }, [langCode, fallback]);

  const t = (path, options = {}) => {
    if (!path) return '';
    const keys = path.split('.');
    
    const getValue = (obj) => {
      if (!obj) return null;
      return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
    };

    let result = getValue(translations);
    
    if (result !== null && result !== undefined) return result;
    const fallbackResult = getValue(fallback);
    const finalResult = fallbackResult !== null && fallbackResult !== undefined ? fallbackResult : path;
    
    // Handle options (like returnObjects) - although for strings it might not be needed
    // But existing code used { returnObjects: true } which returns the object/array.
    // My new content is string, so it should be fine.
    
    return finalResult;
  };

  const isRTL = SUPPORTED_LANGUAGES[langCode]?.dir === 'rtl';

  if (!translations && !fallback) return null;

  return (
    <LanguageContext.Provider value={{ language: langCode, setLanguage: setLangCode, t, isRTL, SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};