import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, CheckCircle2, XCircle, Clock, Settings, Globe, Database, Shield, Lock, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { LanguageProvider, useLanguage } from '../components/LanguageContext';
import Footer from '../components/home/Footer';
import ScrollToTop from '../components/home/ScrollToTop';
import ReactMarkdown from 'react-markdown';

function CookiesContent() {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: 'Cookie Policy',
      subtitle: 'Understanding how we use cookies and similar technologies on tariff.ai',
      lastUpdated: 'Last updated: December 22, 2025 | Version 1.0',
      back: 'Back to Home',
      sections: [
        {
          icon: Cookie,
          title: '1. What Are Cookies',
          content: `Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember your preferences, understand how you use them, and provide a better user experience.\n\n**Key Characteristics:**\n* Text files (not programs or viruses)\n* Store information about your visit\n* Can be deleted or blocked at any time\n* Come in different types with different purposes`
        },
        {
          icon: Settings,
          title: '2. How We Use Cookies',
          content: `tariff.ai uses cookies for the following purposes:\n\n**Essential Functions:**\n* Maintain your logged-in session\n* Remember your language and theme preferences\n* Secure your connection to our services\n\n**Analytics & Performance:**\n* Understand which pages are most popular\n* Analyze user behavior to improve our service\n* Track technical errors and bugs\n\n**User Experience:**\n* Remember your cookie consent preferences\n* Personalize content based on your interests\n* Optimize site performance`
        },
        {
          icon: CheckCircle2,
          title: '3. Types of Cookies We Use',
          content: `**3.1 Essential Cookies (Always Active)**\nThese cookies are necessary for the website to function and cannot be disabled.\n\n* **Session Management:** Keeps you logged in as you navigate\n* **Security:** Protects against CSRF and other attacks\n* **Load Balancing:** Distributes traffic across servers\n\nExamples: session_id, csrf_token, auth_state\n\n**3.2 Analytics Cookies (Requires Consent)**\nHelp us understand how visitors interact with our website.\n\n* **Page Views:** Track which pages are visited (PageView entity)\n* **User Actions:** Monitor clicks, form submissions, scrolling (UserAction entity)\n* **Session Data:** Analyze user journey and engagement\n* **Device Info:** Browser type, OS, screen resolution, language\n\nExamples: Google Analytics\n\n**3.3 Marketing Cookies (Requires Consent)**\nUsed to deliver relevant advertisements and measure campaign effectiveness.\n\n* **Ad Targeting:** Show relevant ads based on interests\n* **Conversion Tracking:** Measure effectiveness of campaigns\n* **Retargeting:** Display ads to previous visitors\n\nExamples: Facebook Pixel, Google Ads\n\nNote: Marketing cookies are currently not active on tariff.ai`
        },
        {
          icon: Clock,
          title: '4. Cookie Duration',
          content: `**Session Cookies (Temporary)**\nThese cookies expire when you close your browser.\n\n* Duration: Until browser closes\n* Purpose: Maintain active session, navigation state\n* Examples: PHPSESSID, session_token\n* Storage: Browser memory only\n\n**Persistent Cookies (Long-term)**\nThese cookies remain on your device for a specified period.\n\n* **Short-term:** 24 hours to 30 days (analytics)\n* **Medium-term:** 30 days to 1 year (preferences)\n* **Long-term:** 1-2 years (consent records)\n\nExamples:\n* Cookie Consent: 1 year (stores your cookie preferences)\n* Analytics Session: 12 months (tracks returning visitors)\n* Language Preference: 6 months (remembers your language choice)`
        },
        {
          icon: Database,
          title: '5. Cookies We Use - Detailed List',
          content: `**Essential Cookies:**

| Cookie Name | Purpose | Duration | Type |
|---|---|---|---|
| session_id | User session management | Session | First-party |
| analytics_session_id | Analytics tracking ID | 12 months | First-party |
| cookie_consent | Stores consent preferences | 1 year | First-party |

**Analytics Cookies (with consent):**

| Cookie Name | Purpose | Duration | Type |
|---|---|---|---|
| Page tracking | Records page views | 12 months | First-party |
| Action tracking | Records user interactions | 12 months | First-party |
| Session data | Tracks user sessions | 30 minutes | First-party |`
        },
        {
          icon: Globe,
          title: '6. Third-Party Cookies',
          content: `Currently, tariff.ai minimizes the use of third-party cookies. However, we may use:\n\n**Base44 Platform (Infrastructure Provider):**\n* Essential for application functionality\n* Secure data processing\n* Covered by our Data Processing Agreement (DPA)\n\n**Future Third-Party Services:**\nIf we integrate additional third-party services (analytics, payment processors, etc.), we will:\n* Update this policy with details\n* Request your consent where required\n* Provide opt-out mechanisms\n* Ensure GDPR/LGPD compliance\n\n**Note:** We do NOT use third-party advertising networks or social media tracking pixels.`
        },
        {
          icon: Settings,
          title: '7. Managing Your Cookie Preferences',
          content: `**7.1 Through Our Cookie Banner:**
When you first visit tariff.ai, you'll see a cookie consent banner allowing you to:
* Accept all cookies
* Accept only essential cookies
* Customize your preferences (choose which categories to allow)

Your preferences are saved and can be changed at any time.

**7.2 Through Your Browser:**
All modern browsers allow you to control cookies:

**Google Chrome:**
1. Settings → Privacy and security → Cookies and other site data
2. Choose: Allow all, Block third-party, or Block all


**Mozilla Firefox:**
1. Settings → Privacy & Security → Cookies and Site Data
2. Choose standard, strict, or custom blocking


**Safari (Mac/iOS):**
1. Preferences → Privacy → Cookies and website data
2. Block all cookies or allow from current website only


**Microsoft Edge:**
1. Settings → Cookies and site permissions → Manage cookies
2. Choose blocking level


**Important:** Blocking essential cookies will prevent the site from functioning properly.`
        },
        {
          icon: XCircle,
          title: '8. Disabling Cookies - Impact',
          content: `**If You Disable All Cookies:**\n* ❌ Cannot stay logged in\n* ❌ Settings and preferences won't be saved\n* ❌ Some features may not work\n* ❌ You'll need to set preferences on every visit\n\n**If You Disable Only Non-Essential Cookies:**\n* ✅ Website will function normally\n* ✅ You'll stay logged in\n* ❌ We won't be able to improve the site based on usage data\n* ❌ You may see less relevant content\n\n**Recommendation:** Keep essential cookies enabled, customize analytics/marketing based on your privacy preferences.`
        },
        {
          icon: Shield,
          title: '9. Do Not Track (DNT)',
          content: `Some browsers offer a "Do Not Track" (DNT) signal that indicates you don't want to be tracked.\n\n**Our Approach:**\n* We honor your cookie consent choices through our banner\n* DNT signals are not universally standardized\n* Your explicit cookie preferences take precedence\n* We provide granular control through our cookie settings\n\n**Best Practice:** Use our cookie consent banner for precise control over tracking.`
        },
        {
          icon: Lock,
          title: '10. Data Collected Through Cookies',
          content: `The data collected through cookies includes:\n\n**Device Information:**\n* IP address (anonymized after 90 days)\n* Browser type and version\n* Operating system\n* Device type (mobile, tablet, desktop)\n* Screen resolution\n\n**Usage Information:**\n* Pages visited and time spent\n* Click patterns and interactions\n* Referrer URL (where you came from)\n* Session duration\n* Scroll depth\n\n**Technical Information:**\n* Language preference\n* Timezone\n* Connection type\n* Viewport size\n\nAll data is processed in accordance with our Privacy Policy and GDPR/LGPD requirements.`
        },
        {
          icon: FileText,
          title: '11. Your Rights',
          content: `Under GDPR and LGPD, you have the right to:\n\n✓ **Be Informed:** This Cookie Policy explains our practices\n\n✓ **Give or Withdraw Consent:** Control which cookies are used\n\n✓ **Access Your Data:** Request information about cookies stored\n\n✓ **Delete Data:** Request deletion of cookie data\n\n✓ **Object to Processing:** Opt out of non-essential cookies\n\nTo exercise these rights, visit our Privacy Policy page or contact info@tariff-ai.com`
        },
        {
          icon: Globe,
          title: '12. International Users',
          content: `**For EU Users (GDPR):**\n* We obtain explicit consent before non-essential cookies\n* You can withdraw consent at any time\n* Data transfers comply with Standard Contractual Clauses (SCCs)\n\n**For Brazilian Users (LGPD):**\n* We obtain consent for non-essential cookies\n* You have the right to revoke consent\n* Data processing complies with LGPD requirements\n\n**For All Users:**\nCookie data is subject to the same protections as other personal data under our Privacy Policy.`
        },
        {
          icon: Settings,
          title: '13. Updates to This Cookie Policy',
          content: `We may update this Cookie Policy to reflect:\n* Changes in technology or cookie usage\n* New features or services\n* Legal or regulatory requirements\n* User feedback and best practices\n\n**When We Update:**\n* The "Last Updated" date will change\n* Material changes will be highlighted\n* You may be asked to review and accept new terms\n* Previous versions will be archived\n\n**Staying Informed:**\nReview this policy periodically to stay informed about how we use cookies.`
        },
        {
          icon: Mail,
          title: '14. Contact Us',
          content: `If you have questions about our use of cookies:\n\n**Email:** info@tariff-ai.com\n\n**Subject Line:** "Cookie Policy Inquiry"\n\n**What to Include:**\n* Your question or concern\n* Browser and device information (if technical issue)\n* Screenshots (if helpful)\n\nWe respond to all cookie-related inquiries within 48 hours.\n\n**For GDPR/LGPD-specific inquiries:**\n* EU: info@tariff-ai.com\n* Brazil: info@tariff-ai.com`
        }
      ]
    },
    he: {
      title: 'מדיניות עוגיות (Cookies)',
      subtitle: 'הבנת האופן שבו אנו משתמשים בעוגיות ובטכנולוגיות דומות באתר tariff.ai.',
      lastUpdated: 'עדכון אחרון: 22 בדצמבר 2025 | גרסה 1.0',
      back: 'חזרה לדף הבית',
      sections: [
        {
          icon: Cookie,
          title: '1. מהן עוגיות (Cookies)?',
          content: `עוגיות הן קבצי טקסט קטנים המאוחסנים במכשיר שלך (מחשב, טאבלט או טלפון נייד) כאשר אתה מבקר באתר אינטרנט. הן עוזרות לאתרים לזכור את העדפותיך, להבין כיצד אתה משתמש בהם ולספק חווית משתמש טובה יותר.\nמאפיינים עיקריים:\n\n* קבצי טקסט (ולא תוכנות או וירוסים).\n* מאחסנות מידע על הביקור שלך.\n* ניתן למחוק או לחסום אותן בכל עת.\n* מגיעות בסוגים שונים למטרות שונות.`
        },
        {
          icon: Settings,
          title: '2. כיצד אנו משתמשים בעוגיות',
          content: `tariff.ai משתמשת בעוגיות למטרות הבאות:\nפונקציות חיוניות:\n\n* שמירה על מצב המחובר של המשתמש (Logged-in session).\n* זכירת העדפות שפה וערכת נושא (Theme).\n* אבטחת החיבור שלך לשירותים שלנו.\nאנליטיקה וביצועים:\n\n* הבנה אילו דפים הם הפופולריים ביותר.\n* ניתוח התנהגות משתמשים לשיפור השירות שלנו.\n* מעקב אחר שגיאות טכניות ותקלות (Bugs).\nחווית משתמש:\n\n* זכירת העדפות הסכמת העוגיות שלך.\n* התאמה אישית של תוכן על בסיס תחומי עניין שלך.\n* אופטימיזציה של ביצועי האתר.`
        },
        {
          icon: CheckCircle2,
          title: '3. סוגי העוגיות שאנו משתמשים בהן',
          content: `**3.1 עוגיות חיוניות (פעילות תמיד)**\nעוגיות אלו נחוצות לתפקוד האתר ולא ניתן להשביתן.\n\n* **ניהול הפעלה (Session):** שומר על מצב מחובר בזמן הניווט.\n* **אבטחה:** מגן מפני התקפות CSRF והתקפות אחרות.\n* **איזון עומסים:** מחלק את התעבורה בין שרתים.\n\nדוגמאות: session_id, csrf_token, auth_state.\n\n**3.2 עוגיות אנליטיקה (דורשות הסכמה)**\nעוזרות לנו להבין כיצד המבקרים מתקשרים עם האתר.\n\n* **צפיות בדפים:** מעקב אחר דפים שביקרו בהם.\n* **פעולות משתמש:** ניטור הקלקות, שליחת טפסים, גלילה.\n* **נתוני הפעלה:** ניתוח מסע המשתמש ומעורבותו.\n* **פרטי מכשיר:** סוג דפדפן, מערכת הפעלה, רזולוציה ושפה.\n\nדוגמה: Google Analytics.\n\n**3.3 עוגיות שיווק (דורשות הסכמה)**\nמשמשות להצגת פרסומות רלוונטיות ולמדידת אפקטיביות של קמפיינים.\n\n* **מיקוד מודעות (Ad Targeting):** הצגת מודעות רלוונטיות לפי תחומי עניין.\n* **מעקב המרות:** מדידת הצלחת קמפיינים.\n* **שיווק מחדש (Retargeting):** הצגת מודעות למבקרים קודמים.\n\nהערה: כיום, עוגיות שיווק אינן פעילות ב-tariff.ai.`
        },
        {
          icon: Clock,
          title: '4. משך זמן אחסון העוגיות',
          content: `**עוגיות הפעלה (זמניות - Session Cookies):**\nעוגיות אלו פוקעות ברגע סגירת הדפדפן. הן משמשות לשמירה על הפעלה פעילה ומצב ניווט.\n**עוגיות קבועות (Long-term / Persistent Cookies):**\nעוגיות אלו נשארות במכשירך לתקופה מוגדרת:\n\n* **טווח קצר:** 24 שעות עד 30 יום (אנליטיקה).\n* **טווח בינוני:** 30 יום עד שנה (העדפות).\n* **טווח ארוך:** 1-2 שנים (תיעוד הסכמות).`
        },
        {
          icon: Database,
          title: '5. רשימת עוגיות מפורטת',
          content: `**עוגיות חיוניות:**\n| שם העוגייה | מטרה | משך זמן | סוג |\n| :--- | :--- | :--- | :--- |\n| session_id | ניהול הפעלת משתמש | זמן הפעלה | צד ראשון |\n| analytics_session_id | מזהה מעקב אנליטי | 12 חודשים | צד ראשון |\n| cookie_consent | שמירת העדפות הסכמה | שנה אחת | צד ראשון |\n**עוגיות אנליטיקה (בכפוף להסכמה):**\n| שם העוגייה | מטרה | משך זמן | סוג |\n| :--- | :--- | :--- | :--- |\n| Page tracking | תיעוד צפיות בדפים | 12 חודשים | צד ראשון |\n| Action tracking | תיעוד אינטראקציות משתמש | 12 חודשים | צד ראשון |\n| Session data | מעקב אחר הפעלות משתמש | 30 דקות | צד ראשון |`
        },
        {
          icon: Globe,
          title: '6. עוגיות צד שלישי',
          content: `כיום, tariff.ai מצמצמת ככל הניתן את השימוש בעוגיות צד שלישי. עם זאת, אנו עשויים להשתמש ב:\n\n**פלטפורמת Base44 (ספק תשתית):** חיוני לתפקוד האפליקציה ועיבוד נתונים מאובטח.\n**שירותי צד שלישי עתידיים:** אם נשלב שירותים נוספים (תשלומים, אנליטיקה מתקדמת), נעדכן מדיניות זו ונבקש הסכמה במידת הצורך.\n**הערה:** איננו משתמשים ברשתות פרסום של צד שלישי או בפיקסלים של רשתות חברתיות למעקב.`
        },
        {
          icon: Settings,
          title: '7. ניהול העדפות העוגיות שלך',
          content: `**7.1 באמצעות באנר העוגיות שלנו:**\nבביקורך הראשון ב-tariff.ai, יופיע באנר המאפשר לך:\n\n* לאשר את כל העוגיות.\n* לאשר עוגיות חיוניות בלבד.\n* להתאים אישית את ההעדפות שלך.\n\n**7.2 באמצעות הדפדפן שלך:**\nכל הדפדפנים המודרניים מאפשרים שליטה בעוגיות דרך תפריט ההגדרות (Settings) > פרטיות ואבטחה (Privacy and security) > עוגיות (Cookies).חשוב: חסימת עוגיות חיוניות תמנע מהאתר לתפקד כראוי.`
        },
        {
          icon: XCircle,
          title: '8. השפעת השבתת העוגיות',
          content: `**אם תשבית את כל העוגיות:** לא תוכל להישאר מחובר, הגדרות לא יישמרו, וחלק מהתכונות לא יעבדו.\n**אם תשבית רק עוגיות לא חיוניות:** האתר יפעל כרגיל, אך לא נוכל לשפר את השירות בהתבסס על נתוני השימוש שלך.`
        },
        {
          icon: Shield,
          title: '9. "אל תעקוב" (Do Not Track - DNT)',
          content: `אנו מכבדים את בחירות הסכמת העוגיות שלך דרך הבאנר שלנו. מכיוון שאותות DNT אינם מתוקננים באופן גלובלי, העדפותיך המפורשות בבאנר האתר הן הקובעות.`
        },
        {
          icon: Lock,
          title: '10. נתונים שנאספים באמצעות עוגיות',
          content: `הנתונים כוללים: פרטי מכשיר (כתובת IP אנונימית, סוג דפדפן), נתוני שימוש (דפים שביקרת בהם, זמן שהייה, אינטראקציות) ומידע טכני (שפה, אזור זמן). כל הנתונים מעובדים בהתאם למדיניות הפרטיות שלנו ולדרישות GDPR/LGPD.`
        },
        {
          icon: FileText,
          title: '11. הזכויות שלך (GDPR ו-LGPD)',
          content: `יש לך את הזכות לקבל מידע, לתת או לבטל הסכמה, לגשת לנתונים שלך, לבקש את מחיקתם או להתנגד לעיבודם. למימוש זכויות אלו, פנה ל-info@tariff-ai.com.`
        },
        {
          icon: Globe,
          title: '12. משתמשים בינלאומיים',
          content: `**משתמשי האיחוד האירופי (GDPR):** אנו מקבלים הסכמה מפורשת לפני הפעלת עוגיות לא חיוניות.\n**משתמשי ברזיל (LGPD):** אנו פועלים בהתאם לדרישות ה-LGPD בנוגע להסכמה וביטולה.`
        },
        {
          icon: Settings,
          title: '13. עדכונים למדיניות זו',
          content: `אנו עשויים לעדכן מדיניות זו מעת לעת כדי לשקף שינויים טכנולוגיים או משפטיים. תאריך ה"עדכון האחרון" ישתנה בהתאם, ושינויים מהותיים יודגשו.`
        },
        {
          icon: Mail,
          title: '14. יצירת קשר',
          content: `לשאלות בנוגע לשימוש בעוגיות:אימייל: info@tariff-ai.comנושא המייל: "Cookie Policy Inquiry"\nאנו משיבים לפניות בנושא עוגיות תוך 48 שעות.`
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
                        table: ({ children }) => (
                          <div className="w-full overflow-x-auto rounded-lg border border-[#114B5F]/20 dark:border-white/20 my-4 shadow-sm">
                            <table className="w-full text-left text-sm">{children}</table>
                          </div>
                        ),
                        thead: ({ children }) => <thead className="bg-gradient-to-r from-[#42C0B9]/10 to-[#114B5F]/10 dark:from-[#42C0B9]/20 dark:to-[#114B5F]/20">{children}</thead>,
                        th: ({ children }) => <th className="px-4 py-3 font-semibold text-[#114B5F] dark:text-white text-xs uppercase tracking-wider border-b-2 border-[#42C0B9]/30">{children}</th>,
                        tbody: ({ children }) => <tbody className="divide-y divide-[#114B5F]/10 dark:divide-white/10">{children}</tbody>,
                        tr: ({ children }) => <tr className="hover:bg-[#42C0B9]/5 dark:hover:bg-[#42C0B9]/10 transition-colors">{children}</tr>,
                        td: ({ children }) => <td className="px-4 py-3 text-[#114B5F]/80 dark:text-gray-300">{children}</td>,
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

export default function CookiePolicy() {
  return (
    <LanguageProvider>
      <CookiesContent />
    </LanguageProvider>
  );
}
