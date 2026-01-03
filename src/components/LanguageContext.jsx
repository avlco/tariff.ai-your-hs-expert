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
          // טוען את אנגלית כגיבוי למקרה שחסרים מפתחות
          const enData = await import('../locales/en.json');
          setFallback(enData.default);
        }
        
        // טוען את השפה שנבחרה
        const selectedData = await import(`../locales/${langCode}.json`);
        setTranslations(selectedData.default);
        
        const dir = SUPPORTED_LANGUAGES[langCode]?.dir || 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = langCode;
        localStorage.setItem('tariff-lang', langCode);
      } catch (err) {
        console.error("Translation load error:", err);
        // במקרה של שגיאה, נשארים עם אנגלית אם היא קיימת כגיבוי
        if (fallback) setTranslations(fallback);
      }
    };
    loadLanguage();
  }, [langCode, fallback]);

  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    
    // פונקציה רקורסיבית לשליפת ערך מתוך אובייקט מקונן
    const getValue = (obj) => {
      if (!obj) return null;
      return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
    };

    const result = getValue(translations);
    
    // אם לא נמצא תרגום, מחזיר את הגיבוי (אנגלית), ואם גם זה לא - את המפתח עצמו
    if (result !== null && result !== undefined) return result;
    const fallbackResult = getValue(fallback);
    return fallbackResult !== null && fallbackResult !== undefined ? fallbackResult : path;
  };

  const isRTL = SUPPORTED_LANGUAGES[langCode]?.dir === 'rtl';

  // לא מרנדרים כלום עד שהתרגומים נטענים כדי למנוע הבהוב של מפתחות
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
