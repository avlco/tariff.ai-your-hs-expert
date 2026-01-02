import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Settings, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageContext';

const COOKIE_CONTENT = {
  en: {
    title: 'Cookie Policy',
    subtitle: 'Understanding how we use cookies and similar technologies on tariff.ai',
    lastUpdated: 'Last updated: December 22, 2025 | Version 1.0',
    back: 'Back to Home',
    sections: [
      {
        icon: Cookie,
        title: '1. What Are Cookies',
        content: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences.'
      },
      {
        icon: Settings,
        title: '2. How We Use Cookies',
        content: 'We use cookies for essential functions (login), analytics (improving service), and user experience (preferences).'
      },
      {
        icon: CheckCircle2,
        title: '3. Types of Cookies',
        content: 'We use Essential Cookies (always active) and Analytics Cookies (require consent).'
      }
    ]
  },
  he: {
    title: 'מדיניות עוגיות (Cookies)',
    subtitle: 'הבנת האופן שבו אנו משתמשים בעוגיות ובטכנולוגיות דומות באתר tariff.ai.',
    lastUpdated: 'עדכון אחרון: 22 בדצמבר, 2025 | גרסה 1.0',
    back: 'חזרה לדף הבית',
    sections: [
      {
        icon: Cookie,
        title: '1. מהן עוגיות?',
        content: 'עוגיות הן קבצי טקסט קטנים המאוחסנים במכשיר שלך בעת ביקור באתר. הן עוזרות לאתר לזכור את ההעדפות שלך.'
      },
      {
        icon: Settings,
        title: '2. כיצד אנו משתמשים בעוגיות',
        content: 'אנו משתמשים בעוגיות לפונקציות חיוניות (התחברות), אנליטיקה (שיפור השירות) וחווית משתמש.'
      },
      {
        icon: CheckCircle2,
        title: '3. סוגי העוגיות',
        content: 'אנו משתמשים בעוגיות חיוניות (פעילות תמיד) ועוגיות אנליטיקה (הדורשות הסכמה).'
      }
    ]
  }
};

export default function CookiePolicy() {
  const { language, isRTL } = useLanguage();
  const t = COOKIE_CONTENT[language] || COOKIE_CONTENT.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-[#050507] ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="bg-[#114B5F] dark:bg-[#0a1628] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {t.back}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <Cookie className="w-10 h-10 text-[#42C0B9]" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{t.title}</h1>
              <p className="text-white/70 text-sm">{t.lastUpdated}</p>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1a2d42] border border-slate-200 dark:border-white/10 shadow-sm"
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-3 rounded-xl bg-[#42C0B9]/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#42C0B9]" />
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-xl font-semibold text-[#114B5F] dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {section.title}
                    </h2>
                    <div className={`text-slate-600 dark:text-slate-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                        {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
