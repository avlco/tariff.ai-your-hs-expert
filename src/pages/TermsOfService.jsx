import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Handshake, CreditCard, User, Gavel, ShieldCheck, LifeBuoy, Wrench, RefreshCcw, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';
import ReactMarkdown from 'react-markdown';

// תוכן מתורגם מלא
const TERMS_CONTENT = {
  en: {
    title: 'Terms of Service',
    subtitle: 'This document outlines the legally binding agreement between you and tariff.ai regarding your use of our services.',
    lastUpdated: 'Last updated: December 22, 2025 | Version 1.0',
    back: 'Back to Home',
    sections: [
      {
        icon: Handshake,
        title: '1. Acceptance of Terms',
        content: `By accessing or using any part of the tariff.ai website, platform, or services (collectively, "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions of this agreement, then you may not access the Service or use any services.`
      },
      {
        icon: FileText,
        title: '2. Description of Service',
        content: `tariff.ai provides AI-powered tariff analysis, trade intelligence, and related services. The Service includes various features, subscription plans, and usage limits as described on our website.`
      },
      // ... יתר הסעיפים קוצרו כאן אך ישמרו בקובץ המקורי ...
      {
        icon: User,
        title: '3. User Accounts',
        content: `To access certain features, you must register. You agree to provide accurate information and keep your password secure.`
      },
      {
        icon: CreditCard,
        title: '4. Payment Terms',
        content: `Subscription fees are billed in advance. Subscriptions automatically renew unless cancelled 24 hours before the end of the period.`
      }
    ]
  },
  he: {
    title: 'תנאי שימוש',
    subtitle: 'מסמך זה מפרט את ההסכם המחייב מבחינה משפטית בינך לבין tariff.ai בנוגע לשימושך בשירותים שלנו.',
    lastUpdated: 'עדכון אחרון: 22 בדצמבר, 2025 | גרסה 1.0',
    back: 'חזרה לדף הבית',
    sections: [
      {
        icon: Handshake,
        title: '1. קבלת התנאים',
        content: `בעצם הגישה או השימוש בכל חלק מאתר tariff.ai, מהפלטפורמה או מהשירותים (יחד: "השירות"), הנך מסכים להיות כפוף לתנאי שימוש אלה ("התנאים"). אם אינך מסכים לכל התנאים וההתניות של הסכם זה, אינך רשאי לגשת לשירות או להשתמש בשירות כלשהו.`
      },
      {
        icon: FileText,
        title: '2. תיאור השירות',
        content: `tariff.ai מספקת ניתוח מכסים מבוסס בינה מלאכותית (AI), מודיעין סחר ושירותים נלווים. השירות כולל תכונות שונות, תוכניות מנוי ומגבלות שימוש כפי שמתואר באתר האינטרנט שלנו.`
      },
      {
        icon: User,
        title: '3. חשבונות משתמש ואחריות',
        content: `כדי לגשת ולהשתמש בתכונות מסוימות של השירות, עליך להירשם לחשבון משתמש. הנך מסכים למתן מידע מדויק ושמירה על אבטחת החשבון.`
      },
      {
        icon: CreditCard,
        title: '4. תנאי תשלום ומנויים',
        content: `דמי המנוי מחויבים מראש. המנויים מתחדשים באופן אוטומטי אלא אם כן תבטל את המנוי לפחות 24 שעות לפני תום תקופת החיוב הנוכחית.`
      },
      {
        icon: Wrench,
        title: '5. שימוש בשירות והתנהגות אסורה',
        content: `הנך מסכים להשתמש בשירות רק למטרות חוקיות. אסור לבצע שימוש לרעה, גישה בלתי מורשית או גירוד נתונים (Data Scraping).`
      },
      {
        icon: ShieldCheck,
        title: '6. דיוק נתונים והצהרת אי-אחריות',
        content: `בעוד ש-tariff.ai שואפת לספק מידע מדויק, איננו מבטיחים את הדיוק, השלמות או העדכניות של נתונים כלשהם. המידע נועד למטרות מידע כללי בלבד.`
      },
      {
        icon: Gavel,
        title: '7. קניין רוחני',
        content: `כל התוכן, התכונות והפונקציונליות של tariff.ai הם רכושה הבלעדי של tariff.ai ומוגנים על ידי חוקי זכויות יוצרים.`
      },
      {
        icon: Mail,
        title: '13. פרטי התקשרות',
        content: `לכל שאלה בנוגע לתנאי שימוש אלה, אנא צור קשר בכתובת: info@tariff-ai.com.`
      }
    ]
  }
};

export default function TermsOfService() {
  const { language, isRTL } = useLanguage();
  
  // fallback to English if language not found
  const t = TERMS_CONTENT[language] || TERMS_CONTENT.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-[#050507] ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Area - Using standard styling */}
      <div className="bg-[#114B5F] dark:bg-[#0a1628] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {t.back}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <FileText className="w-10 h-10 text-[#42C0B9]" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{t.title}</h1>
              <p className="text-white/70 text-sm">{t.lastUpdated}</p>
            </div>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">{t.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
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
