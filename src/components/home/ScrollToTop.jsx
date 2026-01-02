import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom'; // נוסף לזיהוי מעבר דף

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation(); // זיהוי נתיב העמוד הנוכחי

  // לוגיקה 1: גלילה לראש העמוד בכל פעם שה-pathname משתנה (מעבר עמוד)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // לוגיקה 2: הצגת הכפתור רק לאחר גלילה של 500 פיקסלים
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          // עדכון צבעים למיתוג: Teal & Navy עם תמיכה ב-Dark Mode
          className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl shadow-2xl transition-all duration-300
                     bg-gradient-to-br from-[#42C0B9] to-[#114B5F] 
                     dark:from-[#42C0B9] dark:to-[#3ab0a9]
                     text-white 
                     shadow-[#42C0B9]/20 hover:shadow-[#42C0B9]/40
                     border border-white/10 dark:border-[#42C0B9]/30"
        >
          <ArrowUp className="w-6 h-6 stroke-[2.5px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
