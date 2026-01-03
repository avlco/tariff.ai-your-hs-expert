import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/components/locales/en.js';

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
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        if (langCode === 'en') {
          setTranslations(en);
        } else {
          try {
            // Use absolute path alias for dynamic import to avoid relative path issues
            // Note: dynamic import with template string and alias might be tricky in Vite sometimes
            // but let's try with consistent relative path if alias fails, or stick to relative if we are sure of structure.
            // Actually, for dynamic imports in Vite, relative paths are often better supported for analysis.
            // Let's use relative path but be very careful.
            // components/locales is ./locales from components/LanguageContext.js
            
            // However, the import en above is static.
            
            const module = await import(`./locales/${langCode}.js`);
            setTranslations(module.default);
          } catch (e) {
            console.warn(`Translation for ${langCode} not found, using fallback.`);
            setTranslations(en);
          }
        }
        
        const dir = SUPPORTED_LANGUAGES[langCode]?.dir || 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = langCode;
        localStorage.setItem('tariff-lang', langCode);
      } catch (err) {
        console.error("Language load error:", err);
        setTranslations(en);
      }
    };
    loadLanguage();
  }, [langCode]);

  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    
    const getValue = (obj) => {
      if (!obj) return null;
      return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
    };

    let result = getValue(translations);
    if (result !== null && result !== undefined) return result;
    
    // Fallback to English if translation missing
    const fallbackResult = getValue(en);
    return fallbackResult !== null && fallbackResult !== undefined ? fallbackResult : path;
  };

  const isRTL = SUPPORTED_LANGUAGES[langCode]?.dir === 'rtl';

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