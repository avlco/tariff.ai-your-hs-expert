import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Database, Lock, Globe, UserX, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { LanguageProvider, useLanguage } from '../components/LanguageContext';
import Footer from '../components/home/Footer';
import ScrollToTop from '../components/home/ScrollToTop';
import DataRequestForm from '../components/DataRequestForm';
import ReactMarkdown from 'react-markdown';

function PrivacyContent() {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is our priority. This policy explains how we collect, use, protect, and handle your personal data in compliance with GDPR and LGPD.',
      lastUpdated: 'Last updated: December 22, 2025 | Version 1.0',
      back: 'Back to Home',
      dataRequest: 'Exercise Your Data Rights',
      dataRequestDesc: 'Request access, correction, or deletion of your personal data',
      sections: [
        {
          icon: FileText,
          title: '1. Data Controller',
          content: `tariff.ai ("we", "our", "us") is the data controller responsible for your personal information. You can contact us at:\n\nEmail: info@tariff-ai.com\nAddress: tariff.ai Privacy Team, San Francisco, CA\n\nFor GDPR-related inquiries, our EU representative can be contacted at info@tariff-ai.com`
        },
        {
          icon: Database,
          title: '2. Information We Collect',
          content: `We collect the following types of personal data:\n\n**2.1 Information You Provide:**\n* Account Information: Full name, email address, company name\n* Newsletter Subscriptions: Email address, consent timestamp\n* Contact Forms: Name, email, company, subject, message\n\n**2.2 Information Collected Automatically:**\n* Analytics Data: Page views, page URLs, referrer URLs, session IDs\n* Device Information: IP address (anonymized after 90 days), browser type, operating system, device type, screen resolution\n* Location Data: Country and city (derived from IP address)\n* Interaction Data: Clicks, form submissions, scroll depth, element interactions, viewport size\n* Technical Data: User agent, language preferences, timezone\n\n**2.3 Cookies and Tracking:**\n* Essential Cookies: Session management (necessary for functionality)\n* Analytics Cookies: Usage patterns and site performance (requires consent)\n* Marketing Cookies: User preferences for marketing communications (requires consent)\n\nFor detailed cookie information, see our Cookie Policy.`
        },
        {
          icon: Lock,
          title: '3. Legal Basis for Processing',
          content: `Under GDPR and LGPD, we process your personal data based on:\n\n* **Consent:** Newsletter subscriptions, analytics cookies, marketing communications (you may withdraw consent at any time)\n* **Contractual Necessity:** Account management and service delivery\n* **Legitimate Interests:** Site security, fraud prevention, product improvements (balanced against your privacy rights)\n* **Legal Obligations:** Compliance with tax, accounting, and other legal requirements`
        },
        {
          icon: Shield,
          title: '4. How We Use Your Information',
          content: `We use your personal data for the following purposes:\n\n* **Service Delivery:** Provide tariff analysis reports, maintain your account, process transactions\n* **Communication:** Respond to inquiries, send service updates, deliver newsletters (with consent)\n* **Analytics & Improvement:** Understand usage patterns, optimize user experience, develop new features\n* **Security:** Detect and prevent fraud, abuse, and security incidents\n* **Compliance:** Meet legal and regulatory obligations\n\nWe do NOT:\n* Sell your personal data to third parties\n* Use your data for automated decision-making that significantly affects you\n* Process sensitive personal data (health, biometric, political opinions) without explicit consent`
        },
        {
          icon: Globe,
          title: '5. Information Sharing and Third Parties',
          content: `We share your personal data only in the following circumstances:\n\n**5.1 Service Providers:**\n* Base44 Platform: Infrastructure and database hosting\n* Email Service Providers: Transactional and marketing emails\n* Payment Processors: Secure payment handling (we don't store payment card details)\n\nAll service providers are bound by Data Processing Agreements (DPAs) and process data only as instructed.\n\n**5.2 Legal Requirements:**\nWe may disclose your data if required by law, court order, or to protect our legal rights.\n\n**5.3 Business Transfers:**\nIn the event of a merger or acquisition, your data may be transferred to the new entity, subject to the same privacy protections.\n\nWe do NOT sell, rent, or trade your personal data.`
        },
        {
          icon: Lock,
          title: '6. International Data Transfers',
          content: `Your data may be transferred to and processed in countries outside your residence, including the United States.\n\nFor EU users: We ensure adequate protection through:\n* Standard Contractual Clauses (SCCs) approved by the European Commission\n* Adequacy decisions where applicable\n\nFor Brazilian users (LGPD): We comply with cross-border transfer requirements and implement appropriate safeguards.`
        },
        {
          icon: Database,
          title: '7. Data Retention',
          content: `We retain your personal data only as long as necessary:\n\n* **Account Data:** Duration of account + 90 days after closure\n* **Analytics Data:** 12 months from collection\n* **Newsletter Subscriptions:** Until you unsubscribe + 30 days\n* **Contact Form Submissions:** 24 months after last interaction\n* **Consent Records:** 3 years (for compliance proof)\n* **Financial Records:** 7 years (legal requirement)\n\nAfter retention periods expire, data is permanently deleted or anonymized.`
        },
        {
          icon: Shield,
          title: '8. Data Security',
          content: `We implement industry-standard security measures:\n\n* **Encryption:** Data encrypted in transit (TLS/SSL) and at rest (AES-256)\n* **Access Control:** Role-based access, principle of least privilege\n* **Authentication:** Multi-factor authentication for administrative access\n* **Monitoring:** 24/7 security monitoring and incident response\n* **Regular Audits:** Periodic security assessments and penetration testing\n\nWhile we take every reasonable precaution, no system is 100% secure. We will notify you of any data breaches as required by law.`
        },
        {
          icon: UserX,
          title: '9. Your Rights (GDPR & LGPD)',
          content: `You have the following rights regarding your personal data:\n\n✓ **Be Informed:** This Cookie Policy explains our practices\n\n✓ **Give or Withdraw Consent:** Control which cookies are used\n\n✓ **Access Your Data:** Request information about cookies stored\n\n✓ **Delete Data:** Request deletion of cookie data\n\n✓ **Object to Processing:** Opt out of non-essential cookies\n\nTo exercise these rights, use the Data Request Form below or contact info@tariff-ai.com`
        },
        {
          icon: FileText,
          title: '10. Children\'s Privacy',
          content: `Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children. If we discover we have collected data from a child, we will delete it immediately. Parents or guardians who believe we may have collected data from a child should contact us at info@tariff-ai.com`
        },
        {
          icon: Database,
          title: '11. Automated Decision-Making',
          content: `We do not use automated decision-making or profiling that produces legal or similarly significant effects on you. Any analytics or personalization features are used solely to improve user experience and can be opted out of via cookie preferences.`
        },
        {
          icon: Mail,
          title: '12. Marketing Communications',
          content: `With your consent, we may send you:\n* Product updates and new features\n* Industry insights and educational content\n* Special offers and promotions\n\nYou can opt out at any time by:\n* Clicking "unsubscribe" in any email\n* Updating your account preferences\n* Contacting info@tariff-ai.com`
        },
        {
          icon: Shield,
          title: '13. Data Breach Notification',
          content: `In the event of a data breach that poses a risk to your rights and freedoms, we will:\n* Notify the relevant supervisory authority within 72 hours (GDPR) or as required by LGPD\n* Inform affected individuals without undue delay\n* Provide information about the nature of the breach and remedial actions\n* Document all breaches for regulatory compliance`
        },
        {
          icon: Globe,
          title: '14. Changes to This Policy',
          content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will:\n* Post the updated policy on this page\n* Update the "Last Updated" date\n* Notify you of material changes via email or prominent notice\n* Obtain fresh consent where required by law\n\nContinued use of our services after changes constitutes acceptance of the updated policy.`
        },
        {
          icon: Mail,
          title: '15. Contact & Data Protection Officer',
          content: `For any privacy-related questions or to exercise your rights:\n\n**General Inquiries:**\nEmail: info@tariff-ai.com\n\n**EU GDPR Inquiries:**\nEU Representative: info@tariff-ai.com\n\n**Brazil LGPD Inquiries:**\nBrazil Representative: info@tariff-ai.com\n\n**Mailing Address:**\ntariff.ai Privacy Team\nSan Francisco, CA\n\n**Supervisory Authorities:**\nEU: Your local Data Protection Authority\nBrazil: Autoridade Nacional de Proteção de Dados (ANPD)`
        }
      ]
    },
    he: {
      title: 'מדיניות פרטיות',
      subtitle: 'הפרטיות שלך היא בראש סדר העדיפויות שלנו. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים, מגנים ומטפלים בנתונים האישיים שלך בהתאם ל-GDPR ו-LGPD.',
      lastUpdated: 'עדכון אחרון: 22 בדצמבר 2025 | גרסה 1.0',
      back: 'חזרה לדף הבית',
      dataRequest: 'מימוש זכויות הנתונים שלך',
      dataRequestDesc: 'בקש גישה, תיקון או מחיקה של הנתונים האישיים שלך',
      sections: [
        {
          icon: FileText,
          title: '1. מנהל הנתונים (Data Controller)',
          content: `חברת tariff.ai ("אנחנו", "שלנו") היא בעלת השליטה בנתונים האחראית על המידע האישי שלך. ניתן ליצור איתנו קשר בכתובת:\n\nאימייל: info@tariff-ai.com\nכתובת: צוות הפרטיות של tariff.ai, סן פרנסיסקו, קליפורניה.\n\nלפניות בנושא GDPR, ניתן ליצור קשר עם נציגנו באיחוד האירופי בכתובת: info@tariff-ai.com`
        },
        {
          icon: Database,
          title: '2. המידע שאנו אוספים',
          content: `אנו אוספים את סוגי הנתונים האישיים הבאים:\n\n**2.1 מידע שאתה מספק:**\n* פרטי חשבון: שם מלא, כתובת אימייל, שם חברה.\n* הרשמה לניוזלטר: כתובת אימייל, חותמת זמן של מתן ההסכמה.\n* טפסי יצירת קשר: שם, אימייל, חברה, נושא והודעה.\n\n**2.2 מידע שנאסף באופן אוטומטי:**\n* נתוני אנליטיקה: צפיות בדפים, כתובות URL של דפים, כתובות URL מפנות (referrers), מזהי הפעלה (session IDs).\n* פרטי מכשיר: כתובת IP (הופכת לאנונימית לאחר 90 יום), סוג דפדפן, מערכת הפעלה, סוג מכשיר, רזולוציית מסך.\n* נתוני מיקום: מדינה ועיר (נגזרים מכתובת ה-IP).\n* נתוני אינטראקציה: הקלקות, שליחת טפסים, עומק גלילה, אינטראקציות עם אלמנטים, גודל חלון התצוגה.\n* נתונים טכניים: סוכן משתמש (User agent), העדפות שפה, אזור זמן.\n\n**2.3 עוגיות (Cookies) ומעקב:**\n* עוגיות חיוניות: ניהול הפעלה (הכרחי לתפקוד האתר).\n* עוגיות אנליטיקה: דפוסי שימוש וביצועי האתר (דורש הסכמה).\n* עוגיות שיווק: העדפות משתמש לתקשורת שיווקית (דורש הסכמה).\n\nלמידע מפורט על עוגיות, עיין ב"מדיניות העוגיות" שלנו.`
        },
        {
          icon: Lock,
          title: '3. בסיס משפטי לעיבוד נתונים',
          content: `תחת תקנות ה-GDPR וה-LGPD, אנו מעבדים את הנתונים האישיים שלך על בסיס:\n\n* **הסכמה:** הרשמה לניוזלטר, עוגיות אנליטיקה, תקשורת שיווקית (ניתן לבטל את ההסכמה בכל עת).\n* **נחיצות חוזית:** ניהול חשבון ואספקת השירות.\n* **אינטרסים לגיטימיים:** אבטחת האתר, מניעת הונאה, שיפור המוצר (באיזון מול זכויות הפרטיות שלך).\n* **חובה חוקית:** ציות לדרישות מס, חשבונאות ודרישות משפטיות אחרות.`
        },
        {
          icon: Shield,
          title: '4. כיצד אנו משתמשים במידע שלך',
          content: `אנו משתמשים בנתונים האישיים שלך למטרות הבאות:\n\n* **אספקת השירות:** הפקת דוחות ניתוח מכסים, תחזוקת חשבונך, עיבוד עסקאות.\n* **תקשורת:** מענה לפניות, שליחת עדכוני שירות, שליחת ניוזלטרים (בכפוף להסכמה).\n* **אנליטיקה ושיפור:** הבנת דפוסי שימוש, אופטימיזציה של חווית המשתמש, פיתוח תכונות חדשות.\n* **אבטחה:** זיהוי ומניעת הונאה, שימוש לרעה ואירועי אבטחה.\n* **ציות:** עמידה בחובות משפטיות ורגולטוריות.\n\nאנו מתחייבים כי איננו:\n* מוכרים את הנתונים האישיים שלך לצדדים שלישיים.\n* משתמשים בנתונים שלך לקבלת החלטות אוטומטית המשפיעה עליך משמעותית.\n* מעבדים נתונים אישיים רגישים (בריאות, ביומטריה, דעות פוליטיות) ללא הסכמה מפורשת.`
        },
        {
          icon: Globe,
          title: '5. שיתוף מידע וצדדים שלישיים',
          content: `אנו משתפים את הנתונים האישיים שלך רק בנסיבות הבאות:\n\n**5.1 ספקי שירות:**\n* פלטפורמת Base44: תשתית ואירוח מסדי נתונים.\n* ספקי שירותי אימייל: שליחת הודעות תפעוליות ושיווקיות.\n* מעבדי תשלומים: טיפול מאובטח בתשלומים (איננו שומרים פרטי כרטיסי אשראי).\n\nכל ספקי השירות מחויבים להסכמי עיבוד נתונים (DPAs) ומעבדים נתונים רק על פי הנחיותינו.\n\n**5.2 דרישות משפטיות:**\nאנו עשויים לחשוף את הנתונים שלך אם נידרש לכך על פי חוק, צו בית משפט או כדי להגן על זכויותינו המשפטיות.\n\n**5.3 העברות עסקיות:**\nבמקרה של מיזוג או רכישה, הנתונים שלך עשויים לעבור לישות החדשה, בכפוף לאותן הגנות פרטיות.\n\nאיננו מוכרים, משכירים או סוחרים בנתונים האישיים שלך.`
        },
        {
          icon: Lock,
          title: '6. העברת נתונים בינלאומית',
          content: `הנתונים שלך עשויים להיות מועברים ומעובדים במדינות מחוץ למקום מגוריך, כולל ארצות הברית.\n\nלמשתמשים באיחוד האירופי: אנו מבטיחים הגנה הולמת באמצעות סעיפים חוזיים סטנדרטיים (SCCs) שאושרו על ידי הנציבות האירופית.\n\nלמשתמשים בברזיל (LGPD): אנו מצייתים לדרישות העברה חוצות גבולות ומיישמים אמצעי הגנה מתאימים.`
        },
        {
          icon: Database,
          title: '7. שמירת נתונים',
          content: `אנו שומרים את הנתונים האישיים שלך רק למשך הזמן הדרוש:\n\n* **נתוני חשבון:** משך חיי החשבון + 90 יום לאחר סגירתו.\n* **נתוני אנליטיקה:** 12 חודשים מרגע האיסוף.\n* **הרשמה לניוזלטר:** עד לביטול הרישום + 30 יום.\n* **פניות בטפסי יצירת קשר:** 24 חודשים לאחר האינטראקציה האחרונה.\n* **תיעוד הסכמות:** 3 שנים (לצורך הוכחת ציות).\n* **רישומים פיננסיים:** 7 שנים (דרישה חוקית).\n\nלאחר תום תקופות השמירה, הנתונים נמחקים לצמיתות או עוברים אנונימיזציה.`
        },
        {
          icon: Shield,
          title: '8. אבטחת נתונים',
          content: `אנו מיישמים אמצעי אבטחה המקובלים בתעשייה:\n\n* **הצפנה:** נתונים מוצפנים במעבר (TLS/SSL) ובמנוחה (AES-256).\n* **בקרת גישה:** גישה מבוססת תפקידים, עקרון הגישה המינימלית.\n* **אימות:** אימות דו-שלבי (MFA) לגישה ניהולית.\n* **ניטור:** ניטור אבטחה 24/7 ותגובה לאירועים.\n* **ביקורות תקופתיות:** הערכות אבטחה ומבחני חדירה תקופתיות.\n\nבעוד שאנו נוקטים בכל אמצעי הזהירות הסבירים, אף מערכת אינה מאובטחת ב-100%. אנו נדווח לך על כל הפרת נתונים כפי שנדרש על פי חוק.`
        },
        {
          icon: UserX,
          title: '9. הזכויות שלך (GDPR ו-LGPD)',
          content: `עומדות לזכותך הזכויות הבאות בנוגע לנתונים האישיים שלך:\n\n* **הזכות לקבל מידע:** מדיניות זו מסבירה את שיטות העבודה שלנו.\n* **מתן או ביטול הסכמה:** שליטה בעוגיות שבשימוש.\n* **גישה לנתונים:** בקשת מידע על הנתונים המאוחסנים.\n* **מחיקת נתונים:** בקשה למחיקת נתונים ("הזכות להישכח").\n* **התנגדות לעיבוד:** ביטול הסכמה לעוגיות שאינן חיוניות.\n\nלמימוש זכויות אלו, השתמש ב"טופס בקשת הנתונים" להלן או פנה ל-info@tariff-ai.com.`
        },
        {
          icon: FileText,
          title: '10. פרטיות ילדים',
          content: `השירותים שלנו אינם מיועדים לאנשים מתחת לגיל 18. איננו אוספים ביודעין נתונים אישיים מילדים. אם נגלה שאספנו נתונים מילד, נמחק אותם מיידית.`
        },
        {
          icon: Database,
          title: '11. קבלת החלטות אוטומטית',
          content: `איננו משתמשים בקבלת החלטות אוטומטית או בפרופילים המייצרים השפעות משפטיות או משמעותיות עליך.`
        },
        {
          icon: Mail,
          title: '12. תקשורת שיווקית',
          content: `בהסכמתך, אנו עשויים לשלוח לך: עדכוני מוצר, תובנות מהתעשייה ומבצעים מיוחדים. ניתן לבטל את ההסכמה בכל עת על ידי לחיצה על "הסר" (unsubscribe) בכל אימייל.`
        },
        {
          icon: Shield,
          title: '13. הודעה על הפרת נתונים',
          content: `במקרה של הפרת נתונים המהווה סיכון לזכויותיך, אנו נדווח לרשות הפיקוח הרלוונטית תוך 72 שעות (GDPR) וניידע את האנשים המושפעים ללא עיכוב מיותר.`
        },
        {
          icon: Globe,
          title: '14. שינויים במדיניות זו',
          content: `אנו עשויים לעדכן מדיניות זו מעת לעת. אנו נפרסם את המדיניות המעודכנת בדף זה ונעדכן את תאריך ה"עדכון האחרון". שימוש נמשך בשירות מהווה קבלה של המדיניות המעודכנת.`
        },
        {
          icon: Mail,
          title: '15. יצירת קשר וממונה הגנת נתונים',
          content: `לכל שאלה:\n\n**פניות כלליות:** info@tariff-ai.com\n**רשויות פיקוח:** באיחוד האירופי - רשות הגנת הנתונים המקומית; בברזיל - ANPD.`
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

        {/* Data Request Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#114B5F] dark:text-white mb-3">
              {t.dataRequest}
            </h2>
            <p className="text-[#114B5F]/70 dark:text-gray-400">
              {t.dataRequestDesc}
            </p>
          </div>
          <DataRequestForm />
        </motion.div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  );
}
