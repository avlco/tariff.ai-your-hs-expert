import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Handshake, CreditCard, User, Gavel, ShieldCheck, LifeBuoy, Wrench, RefreshCcw, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { LanguageProvider, useLanguage } from '../components/LanguageContext';
import Footer from '../components/home/Footer';
import ScrollToTop from '../components/home/ScrollToTop';
import ReactMarkdown from 'react-markdown';

function TermsContent() {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: 'Terms of Service',
      subtitle: 'This document outlines the legally binding agreement between you and tariff.ai regarding your use of our services.',
      lastUpdated: 'Last updated: December 22, 2025 | Version 1.0',
      back: 'Back to Home',
      sections: [
        {
          icon: Handshake,
          title: '1. Acceptance of Terms',
          content: `By accessing or using any part of the tariff.ai website, platform, or services (collectively, "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions of this agreement, then you may not access the Service or use any services. These Terms constitute a legally binding agreement between you and tariff.ai. Your continued use of the Service signifies your acceptance of any updated Terms.`
        },
        {
          icon: FileText,
          title: '2. Description of Service',
          content: `tariff.ai provides AI-powered tariff analysis, trade intelligence, and related services designed to assist businesses with international trade compliance and strategy. The Service includes various features, subscription plans, and usage limits as described on our website and pricing pages. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.`
        },
        {
          icon: User,
          title: '3. User Accounts and Responsibilities',
          content: `To access and use certain features of the Service, you must register for a user account. You agree to:\n\n* **Provide Accurate Information:** Maintain accurate, complete, and current registration information.\n* **Account Security:** Keep your username and password confidential and prevent unauthorized access to your account. You are solely responsible for all activities that occur under your account.\n* **Prohibited Conduct:** Not use the Service for any unlawful purpose, or in any way that violates these Terms.\n* **Age Restriction:** Confirm you are at least 18 years of age or the legal age of majority in your jurisdiction.`
        },
        {
          icon: CreditCard,
          title: '4. Payment Terms and Subscriptions',
          content: `**4.1 Subscription Fees:** Access to certain features of the Service requires a paid subscription. Subscription fees are billed in advance on a recurring basis (e.g., monthly or annually) as per your chosen plan.

**4.2 Automatic Renewal:** Subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period.

**4.3 Price Changes:** We reserve the right to change our subscription fees upon 30 days' prior notice. Your continued use after the price change constitutes your agreement to pay the modified amount.

**4.4 Refunds and Cancellations:** All subscription fees are non-refundable, except as required by law. You may cancel your subscription at any time, and access will continue until the end of the current billing cycle.`
        },
        {
          icon: Wrench,
          title: '5. Use of Service and Prohibited Conduct',
          content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:\n\n* **Misuse:** Engage in any activity that interferes with or disrupts the Service.\n* **Unauthorized Access:** Attempt to gain unauthorized access to any part of the Service, other accounts, computer systems, or networks.\n* **Data Scraping:** Use any automated system or software to extract data from the Service without express written permission.\n* **Harmful Content:** Transmit any malicious code, viruses, or other harmful data.\n* **Resale:** Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without our express written permission.`
        },
        {
          icon: ShieldCheck,
          title: '6. Data Accuracy and Disclaimers',
          content: `While tariff.ai strives to provide accurate and up-to-date tariff information and trade intelligence, we do not guarantee the accuracy, completeness, or timeliness of any data provided through the Service. The information is for general informational purposes only and does not constitute legal, financial, or professional advice. You are solely responsible for verifying critical information with official sources and for all decisions made based on the Service's output.`
        },
        {
          icon: Gavel,
          title: '7. Intellectual Property',
          content: `All content, features, and functionality of tariff.ai are the exclusive property of tariff.ai and its licensors and are protected by international copyright, trademark, patent, and trade secret laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes, subject to these Terms.`
        },
        {
          icon: LifeBuoy,
          title: '8. Limitation of Liability',
          content: `In no event shall tariff.ai, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.`
        },
        {
          icon: User,
          title: '9. Termination',
          content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.`
        },
        {
          icon: Gavel,
          title: '10. Governing Law',
          content: `These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.`
        },
        {
          icon: RefreshCcw,
          title: '11. Changes to Terms',
          content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.`
        },
        {
          icon: FileText,
          title: '12. Miscellaneous',
          content: `These Terms constitute the entire agreement between you and tariff.ai regarding our Service. Our failure to enforce any right or provision will not be considered a waiver. If any provision is held invalid, the remaining provisions will remain in effect.`
        },
        {
          icon: Mail,
          title: '13. Contact Information',
          content: `For any questions regarding these Terms of Service, please contact us at info@tariff-ai.com. We will respond to all inquiries within 5 business days.`
        }
      ]
    },
    he: {
      title: 'תנאי שימוש',
      subtitle: 'מסמך זה מפרט את ההסכם המחייב מבחינה משפטית בינך לבין tariff.ai בנוגע לשימושך בשירותים שלנו.',
      lastUpdated: 'עדכון אחרון: 22 בדצמבר 2025 | גרסה 1.0',
      back: 'חזרה לדף הבית',
      sections: [
        {
          icon: Handshake,
          title: '1. קבלת התנאים',
          content: `בעצם הגישה או השימוש בכל חלק מאתר tariff.ai, מהפלטפורמה או מהשירותים (יחד: "השירות"), הנך מסכים להיות כפוף לתנאי שימוש אלה ("התנאים"). אם אינך מסכים לכל התנאים וההתניות של הסכם זה, אינך רשאי לגשת לשירות או להשתמש בשירות כלשהו. תנאים אלו מהווים הסכם מחייב משפטית בינך לבין tariff.ai. המשך השימוש שלך בשירות מעיד על קבלתך את התנאים כפי שיעודכנו מעת לעת.`
        },
        {
          icon: FileText,
          title: '2. תיאור השירות',
          content: `tariff.ai מספקת ניתוח מכסים מבוסס בינה מלאכותית (AI), מודיעין סחר ושירותים נלווים שנועדו לסייע לעסקים בציות לאסטרטגיית סחר בינלאומית. השירות כולל תכונות שונות, תוכניות מנוי ומגבלות שימוש כפי שמתואר באתר האינטרנט שלנו ובדפי התמחור. אנו שומרים לעצמנו את הזכות לשנות, להשעות או להפסיק כל היבט של השירות בכל עת, עם או בלי הודעה מוקדמת.`
        },
        {
          icon: User,
          title: '3. חשבונות משתמש ואחריות',
          content: `כדי לגשת ולהשתמש בתכונות מסוימות של השירות, עליך להירשם לחשבון משתמש. הנך מסכים ל:\n\n* **מתן מידע מדויק:** שמירה על מידע רישום מדויק, מלא ועדכני.\n* **אבטחת חשבון:** שמירה על סודיות שם המשתמש והסיסמה שלך ומניעת גישה בלתי מורשית לחשבונך. הנך האחראי הבלעדי לכל הפעילויות המתרחשות תחת חשבונך.\n* **התנהגות אסורה:** אי-שימוש בשירות לכל מטרה בלתי חוקית, או בכל דרך המפרה תנאים אלו.\n* **הגבלת גיל:** אישור כי אתה בן 18 לפחות או בגיל הבגרות החוקי בתחום השיפוט שלך.`
        },
        {
          icon: CreditCard,
          title: '4. תנאי תשלום ומנויים',
          content: `**4.1 דמי מנוי:** הגישה לתכונות מסוימות בשירות מחייבת מנוי בתשלום. דמי המנוי מחויבים מראש על בסיס חוזר (למשל, חודשי או שנתי) בהתאם לתוכנית שבחרת.\n\n**4.2 חידוש אוטומטי:** המנויים מתחדשים באופן אוטומטי אלא אם כן תבטל את המנוי לפחות 24 שעות לפני תום תקופת החיוב הנוכחית.\n\n**4.3 שינויי מחירים:** אנו שומרים לעצמנו את הזכות לשנות את דמי המנוי שלנו בהודעה מראש של 30 יום. המשך השימוש שלך לאחר שינוי המחיר מהווה את הסכמתך לשלם את הסכום המעודכן.\n\n**4.4 החזרים וביטולים:** כל דמי המנוי אינם ניתנים להחזר, למעט כפי שנדרש על פי חוק. באפשרותך לבטל את המנוי בכל עת, והגישה תימשך עד סוף מחזור החיוב הנוכחי.`
        },
        {
          icon: Wrench,
          title: '5. שימוש בשירות והתנהגות אסורה',
          content: `הנך מסכים להשתמש בשירות רק למטרות חוקיות ובהתאם לתנאים אלו. לא תבצע את הפעולות הבאות:\n\n* **שימוש לרעה:** מעורבות בכל פעילות המפריעה לשירות או משבשת אותו.\n* **גישה בלתי מורשית:** ניסיון לקבל גישה בלתי מורשית לחלק כלשהו של השירות, לחשבונות אחרים, למערכות מחשוב או לרשתות.\n* **גירוד נתונים (Data Scraping):** שימוש בכל מערכת או תוכנה אוטומטית להפקת נתונים מהשירות ללא אישור מפורש בכתב.\n* **תוכן מזיק:** העברת קוד זדוני, וירוסים או נתונים מזיקים אחרים.\n* **מכירה חוזרת:** שחזור, שכפול, העתקה, מכירה, מכירה חוזרת או ניצול של כל חלק מהשירות ללא אישור מפורש בכתב מאיתנו.`
        },
        {
          icon: ShieldCheck,
          title: '6. דיוק נתונים והצהרת אי-אחריות',
          content: `בעוד ש-tariff.ai שואפת לספק מידע מכסים ומודיעין סחר מדויקים ועדכניים, איננו מבטיחים את הדיוק, השלמות או העדכניות של נתונים כלשהם המסופקים דרך השירות. המידע נועד למטרות מידע כללי בלבד ואינו מהווה ייעוץ משפטי, פיננסי או מקצועי. הנך האחראי הבלעדי לאימות מידע קריטי מול מקורות רשמיים ולכל ההחלטות המתקבלות על סמך פלט השירות.`
        },
        {
          icon: Gavel,
          title: '7. קניין רוחני',
          content: `כל התוכן, התכונות והפונקציונליות של tariff.ai הם רכושה הבלעדי של tariff.ai ושל מעניקי הרישיון שלה, ומוגנים על ידי חוקי זכויות יוצרים בינלאומיים, סימני מסחר, פטנטים וסודות מסחריים. אנו מעניקים לך רישיון מוגבל, לא בלעדי, לא ניתן להעברה וניתן לביטול, לגשת ולהשתמש בשירות למטרותיך העסקיות הפנימיות, בכפוף לתנאים אלו.`
        },
        {
          icon: LifeBuoy,
          title: '8. הגבלת אחריות',
          content: `בשום מקרה tariff.ai, מנהליה, עובדיה, שותפיה, סוכניה, ספקיה או שלוחותיה, לא יהיו אחראים לכל נזק עקיף, מקרי, מיוחד, תוצאתי או עונשי, לרבות ללא הגבלה, אובדן רווחים, נתונים, שימוש, מוניטין או הפסדים בלתי מוחשיים אחרים, הנובעים מהגישה שלך לשירות או מהשימוש בו, או מחוסר היכולת לגשת לשירות או להשתמש בו.`
        },
        {
          icon: User,
          title: '9. סיום התקשרות',
          content: `אנו רשאים לסגור או להשעות את חשבונך באופן מיידי, ללא הודעה מוקדמת או חבות, מכל סיבה שהיא, לרבות ללא הגבלה אם תפר את התנאים. עם סיום ההתקשרות, זכותך להשתמש בשירות תיפסק באופן מיידי.`
        },
        {
          icon: Gavel,
          title: '10. הדין החל',
          content: `תנאים אלה יהיו כפופים ויפורשו בהתאם לחוקי מדינת קליפורניה, ארצות הברית, ללא התחשבות בהוראות ברירת הדין שלה.`
        },
        {
          icon: RefreshCcw,
          title: '11. שינויים בתנאים',
          content: `אנו שומרים לעצמנו את הזכות לשנות או להחליף תנאים אלו בכל עת. אם התיקון הוא מהותי, נספק הודעה של 30 יום לפחות. המשך הגישה או השימוש בשירות שלנו לאחר כניסת התיקונים לתוקף מהווה את הסכמתך להיות כפוף לתנאים המעודכנים.`
        },
        {
          icon: FileText,
          title: '12. שונות',
          content: `תנאים אלו מהווים את ההסכם המלא בינך לבין tariff.ai בנוגע לשירות שלנו. אי-אכיפה של זכות או הוראה כלשהי לא תיחשב כויתור עליהן. אם הוראה כלשהי תימצא כבלתי תקפה, שאר ההוראות יישארו בתוקף.`
        },
        {
          icon: Mail,
          title: '13. פרטי התקשרות',
          content: `לכל שאלה בנוגע לתנאי שימוש אלה, אנא צור קשר בכתובת: info@tariff-ai.com. אנו נשיב לכל הפניות תוך 5 ימי עסקים.`
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-[#f8fafa] dark:from-[#0a1628] dark:to-[#0d1f35] ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#114B5F] via-[#0d3a4a] to-[#114B5F] dark:from-[#0d1f35] dark:via-[#0a1628] dark:to-[#0d1f35] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={createPageUrl('Home')}
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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1a2d42] border border-[#114B5F]/10 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-3 rounded-xl bg-[#42C0B9]/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#42C0B9]" />
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-xl font-semibold text-[#114B5F] dark:text-white mb-3 ${isRTL ? 'text-right' : ''}`}>
                      {section.title}
                    </h2>
                    <ReactMarkdown 
                      className={`text-[#114B5F]/70 dark:text-gray-400 leading-relaxed prose prose-sm max-w-none dark:prose-invert ${isRTL ? 'text-right' : ''}`}
                      components={{
                        p: ({ children }) => <p className="mb-3">{children}</p>,
                        ul: ({ children }) => <ul className="space-y-2 mb-4">{children}</ul>,
                        li: ({ children }) => (
                          <li className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#42C0B9] mt-2 flex-shrink-0" />
                            <span>{children}</span>
                          </li>
                        ),
                        strong: ({ children }) => <strong className="font-semibold text-[#114B5F] dark:text-white">{children}</strong>,
                      }}
                    >
                      {section.content}
                    </ReactMarkdown>
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

export default function TermsOfService() {
  return (
    <LanguageProvider>
      <TermsContent />
    </LanguageProvider>
  );
}
