import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Handshake, CreditCard, User, Gavel, ShieldCheck, LifeBuoy, Wrench, RefreshCcw, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageContext';
import Footer from '@/components/home/Footer';
import ScrollToTop from '@/components/home/ScrollToTop';
import ReactMarkdown from 'react-markdown';

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
        content: `tariff.ai provides AI-powered tariff analysis, trade intelligence, and related services designed to assist businesses with international trade compliance and strategy.`
      },
      {
        icon: User,
        title: '3. User Accounts and Responsibilities',
        content: `To access and use certain features of the Service, you must register for a user account. You agree to maintain accurate information and keep your password confidential.`
      },
      {
        icon: CreditCard,
        title: '4. Payment Terms and Subscriptions',
        content: `Subscription fees are billed in advance on a recurring basis. Subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period.`
      },
      {
        icon: Wrench,
        title: '5. Use of Service',
        content: `You agree to use the Service only for lawful purposes. You shall not misuse, attempt unauthorized access, scrape data, or transmit harmful content.`
      },
      {
        icon: ShieldCheck,
        title: '6. Data Accuracy',
        content: `While tariff.ai strives to provide accurate information, we do not guarantee the accuracy, completeness, or timeliness of any data provided through the Service.`
      },
      {
        icon: Gavel,
        title: '7. Intellectual Property',
        content: `All content, features, and functionality of tariff.ai are the exclusive property of tariff.ai and its licensors.`
      },
      {
        icon: LifeBuoy,
        title: '8. Limitation of Liability',
        content: `In no event shall tariff.ai be liable for any indirect, incidental, special, consequential, or punitive damages.`
      },
      {
        icon: User,
        title: '9. Termination',
        content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.`
      },
      {
        icon: Gavel,
        title: '10. Governing Law',
        content: `These Terms shall be governed and construed in accordance with the laws of the State of California, United States.`
      },
      {
        icon: RefreshCcw,
        title: '11. Changes to Terms',
        content: `We reserve the right to modify or replace these Terms at any time.`
      },
      {
        icon: FileText,
        title: '12. Miscellaneous',
        content: `These Terms constitute the entire agreement between you and tariff.ai regarding our Service.`
      },
      {
        icon: Mail,
        title: '13. Contact Information',
        content: `For any questions regarding these Terms of Service, please contact us at info@tariff-ai.com.`
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
        content: `בעצם הגישה או השימוש בכל חלק מאתר tariff.ai, מהפלטפורמה או מהשירותים (יחד: "השירות"), הנך מסכים להיות כפוף לתנאי שימוש אלה ("התנאים").`
      },
      {
        icon: FileText,
        title: '2. תיאור השירות',
        content: `tariff.ai מספקת ניתוח מכסים מבוסס בינה מלאכותית (AI), מודיעין סחר ושירותים נלווים שנועדו לסייע לעסקים בציות לאסטרטגיית סחר בינלאומית.`
      },
      {
        icon: User,
        title: '3. חשבונות משתמש ואחריות',
        content: `כדי לגשת ולהשתמש בתכונות מסוימות של השירות, עליך להירשם לחשבון משתמש. הנך מסכים למתן מידע מדויק ושמירה על אבטחת החשבון.`
      },
      {
        icon: CreditCard,
        title: '4. תנאי תשלום ומנויים',
        content: `דמי המנוי מחויבים מראש על בסיס חוזר. המנויים מתחדשים באופן אוטומטי אלא אם כן תבטל את המנוי לפחות 24 שעות לפני תום תקופת החיוב הנוכחית.`
      },
      {
        icon: Wrench,
        title: '5. שימוש בשירות והתנהגות אסורה',
        content: `הנך מסכים להשתמש בשירות רק למטרות חוקיות ובהתאם לתנאים אלו. לא תבצע שימוש לרעה או גישה בלתי מורשית.`
      },
      {
        icon: ShieldCheck,
        title: '6. דיוק נתונים והצהרת אי-אחריות',
        content: `בעוד ש-tariff.ai שואפת לספק מידע מדויק, איננו מבטיחים את הדיוק, השלמות או העדכניות של נתונים כלשהם.`
      },
      {
        icon: Gavel,
        title: '7. קניין רוחני',
        content: `כל התוכן, התכונות והפונקציונליות של tariff.ai הם רכושה הבלעדי של tariff.ai ושל מעניקי הרישיון שלה.`
      },
      {
        icon: LifeBuoy,
        title: '8. הגבלת אחריות',
        content: `בשום מקרה tariff.ai לא תהיה אחראית לכל נזק עקיף, מקרי, מיוחד, תוצאתי או עונשי.`
      },
      {
        icon: User,
        title: '9. סיום התקשרות',
        content: `אנו רשאים לסגור או להשעות את חשבונך באופן מיידי, ללא הודעה מוקדמת או חבות.`
      },
      {
        icon: Gavel,
        title: '10. הדין החל',
        content: `תנאים אלה יהיו כפופים ויפורשו בהתאם לחוקי מדינת קליפורניה, ארצות הברית.`
      },
      {
        icon: RefreshCcw,
        title: '11. שינויים בתנאים',
        content: `אנו שומרים לעצמנו את הזכות לשנות או להחליף תנאים אלו בכל עת.`
      },
      {
        icon: FileText,
        title: '12. שונות',
        content: `תנאים אלו מהווים את ההסכם המלא בינך לבין tariff.ai בנוגע לשירות שלנו.`
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
  const t = TERMS_CONTENT[language] || TERMS_CONTENT.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-[#050507] ${isRTL ? 'rtl' : 'ltr'}`}>
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
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
