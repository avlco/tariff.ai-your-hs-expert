import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Database, Lock, Globe, UserX, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageContext';
import DataRequestForm from '@/components/DataRequestForm';

const PRIVACY_CONTENT = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'Your privacy is our priority. This policy explains how we collect, use, protect, and handle your personal data.',
    lastUpdated: 'Last updated: December 22, 2025 | Version 1.0',
    back: 'Back to Home',
    dataRequest: 'Exercise Your Data Rights',
    sections: [
      {
        icon: FileText,
        title: '1. Data Controller',
        content: 'tariff.ai is the data controller responsible for your personal information. Contact us at info@tariff-ai.com.'
      },
      {
        icon: Database,
        title: '2. Information We Collect',
        content: 'We collect account information you provide, usage data collected automatically, and cookies data.'
      },
      {
        icon: Lock,
        title: '3. Legal Basis',
        content: 'We process data based on consent, contractual necessity, legitimate interests, and legal obligations.'
      },
      {
        icon: Shield,
        title: '4. How We Use Your Information',
        content: 'We use your data to deliver services, communicate with you, ensure security, and improve our platform.'
      }
    ]
  },
  he: {
    title: 'מדיניות פרטיות',
    subtitle: 'הפרטיות שלך היא בראש סדר העדיפויות שלנו. מדיניות זו מסבירה כיצד אנו אוספים ומגנים על הנתונים שלך.',
    lastUpdated: 'עדכון אחרון: 22 בדצמבר, 2025 | גרסה 1.0',
    back: 'חזרה לדף הבית',
    dataRequest: 'מימוש זכויות הנתונים שלך',
    sections: [
      {
        icon: FileText,
        title: '1. מנהל הנתונים (Data Controller)',
        content: 'חברת tariff.ai היא בעלת השליטה בנתונים האחראית על המידע האישי שלך. ניתן ליצור איתנו קשר בכתובת: info@tariff-ai.com.'
      },
      {
        icon: Database,
        title: '2. המידע שאנו אוספים',
        content: 'אנו אוספים פרטי חשבון שאתה מספק, נתוני שימוש שנאספים אוטומטית, ונתונים מעוגיות.'
      },
      {
        icon: Lock,
        title: '3. בסיס משפטי לעיבוד נתונים',
        content: 'אנו מעבדים את הנתונים על בסיס הסכמה, נחיצות חוזית, אינטרסים לגיטימיים וחובה חוקית.'
      },
      {
        icon: Shield,
        title: '4. כיצד אנו משתמשים במידע שלך',
        content: 'אנו משתמשים במידע לאספקת השירות, תקשורת איתך, אבטחת המערכת ושיפור הפלטפורמה.'
      },
      {
        icon: UserX,
        title: '5. הזכויות שלך',
        content: 'יש לך זכות לקבלת מידע, גישה, תיקון ומחיקה של המידע שלך.'
      }
    ]
  }
};

export default function PrivacyPolicy() {
  const { language, isRTL } = useLanguage();
  const t = PRIVACY_CONTENT[language] || PRIVACY_CONTENT.en;

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
              <Shield className="w-10 h-10 text-[#42C0B9]" />
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

        {/* Data Request Form Area */}
        <div className="mt-16 bg-white dark:bg-[#1a2d42] p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
            <h2 className={`text-2xl font-bold mb-6 text-[#114B5F] dark:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.dataRequest}
            </h2>
            <DataRequestForm />
        </div>
      </div>
    </div>
  );
}
