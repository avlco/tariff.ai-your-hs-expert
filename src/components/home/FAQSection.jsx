import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQSection({ theme, language }) {
  const isRTL = language === 'he';
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: language === 'en' 
        ? 'What is tariff.ai and how does it save me money?'
        : 'מהו tariff.ai ואיך הוא חוסך לי כסף?',
      answer: language === 'en'
        ? 'tariff.ai is an AI-powered platform that analyzes tariffs, duties, and trade regulations across 190+ countries. It saves you money by identifying the most cost-effective classification codes, alerting you to available trade agreements, and preventing costly compliance errors.'
        : 'tariff.ai היא פלטפורמה מונעת AI שמנתחת מכסים, מיסים ותקנות סחר ב-190+ מדינות. היא חוסכת לכם כסף על ידי זיהוי קודי סיווג חסכוניים, התראה על הסכמי סחר זמינים ומניעת טעויות ציות יקרות.',
    },
    {
      question: language === 'en' 
        ? 'How accurate is the HS code classification?'
        : 'כמה מדויק סיווג ה-HS Code?',
      answer: language === 'en'
        ? 'Our AI achieves 98% accuracy in HS code classification, verified against official customs databases. Each classification includes a confidence score and detailed reasoning, so you can verify the logic behind every recommendation.'
        : 'ה-AI שלנו משיג 98% דיוק בסיווג HS Code, מאומת מול מאגרי מכס רשמיים. כל סיווג כולל ציון ביטחון והסבר מפורט, כך שתוכלו לאמת את ההיגיון מאחורי כל המלצה.',
    },
    {
      question: language === 'en' 
        ? 'Does the system consider Free Trade Agreements (FTAs)?'
        : 'האם המערכת מתחשבת בהסכמי סחר חופשי (FTA)?',
      answer: language === 'en'
        ? 'Absolutely. tariff.ai automatically identifies tax-saving opportunities based on trade agreements between countries (like Israel-Europe or US agreements), and indicates which documents are required to claim the duty exemption.'
        : 'בהחלט. tariff.ai מזהה באופן אוטומטי הזדמנויות לחיסכון במס על בסיס הסכמי סחר בין מדינות (כמו הסכמים ישראל-אירופה או ארה"ב), ומציין אילו מסמכים נדרשים לקבלת פטור מכס.',
    },
    {
      question: language === 'en' 
        ? 'How frequently is the data updated?'
        : 'באיזו תדירות הנתונים מתעדכנים?',
      answer: language === 'en'
        ? 'Our database is updated in real-time with direct connections to government databases in 190+ countries. You\'ll always have access to the latest tariff rates and regulatory changes.'
        : 'מאגר הנתונים שלנו מתעדכן בזמן אמת עם חיבורים ישירים למאגרי ממשלה ב-190+ מדינות. תמיד יהיה לכם גישה לתעריפי המכס והשינויים הרגולטוריים העדכניים ביותר.',
    },
    {
      question: language === 'en' 
        ? 'Can the system be integrated into our corporate ERP?'
        : 'האם ניתן לשלב את המערכת ב-ERP הארגוני שלנו?',
      answer: language === 'en'
        ? 'Yes, we offer API access for enterprise customers, allowing seamless integration with your existing ERP, WMS, or customs management systems. Contact our sales team for integration details.'
        : 'כן, אנו מציעים גישת API ללקוחות ארגוניים, המאפשרת אינטגרציה חלקה עם מערכות ה-ERP, WMS או ניהול מכס הקיימות שלכם. צרו קשר עם צוות המכירות שלנו לפרטי אינטגרציה.',
    },
    {
      question: language === 'en' 
        ? 'Is my information and searches kept confidential?'
        : 'האם המידע והחיפושים שלי נשמרים חסויים?',
      answer: language === 'en'
        ? 'Absolutely. We take data security seriously. All data is encrypted in transit and at rest, and we never share your search history or business data with third parties. See our Privacy Policy for complete details.'
        : 'בהחלט. אנו מתייחסים לאבטחת נתונים ברצינות. כל הנתונים מוצפנים בזמן העברה ואחסון, ואנו לעולם לא משתפים את היסטוריית החיפושים או הנתונים העסקיים שלכם עם צדדים שלישיים. ראו את מדיניות הפרטיות שלנו לפרטים מלאים.',
    },
    {
      question: language === 'en' 
        ? "What's the difference between a regular HS code search and your analysis?"
        : 'מה ההבדל בין חיפוש HS Code רגיל לניתוח שלכם?',
      answer: language === 'en'
        ? 'Unlike basic HS code lookup tools, our analysis provides complete trade intelligence: duties, taxes, regulations, compliance requirements, FTA opportunities, alternative classifications, and confidence scores - all in one comprehensive report.'
        : 'בניגוד לכלי חיפוש HS Code בסיסיים, הניתוח שלנו מספק מודיעין סחר מלא: מכסים, מיסים, תקנות, דרישות ציות, הזדמנויות FTA, סיווגים חלופיים וציוני ביטחון - הכל בדוח מקיף אחד.',
    },
    {
      question: language === 'en' 
        ? 'Which countries are supported by the system?'
        : 'אילו מדינות נתמכות במערכת?',
      answer: language === 'en'
        ? 'tariff.ai covers 190+ countries and territories, including all major trading nations. Our coverage includes the US, EU member states, UK, China, Japan, and most other countries involved in international trade.'
        : 'tariff.ai מכסה 190+ מדינות וטריטוריות, כולל כל מדינות הסחר הגדולות. הכיסוי שלנו כולל את ארה"ב, מדינות האיחוד האירופי, בריטניה, סין, יפן ורוב המדינות האחרות המעורבות בסחר בינלאומי.',
    },
    {
      question: language === 'en' 
        ? 'Is there a trial period?'
        : 'האם יש תקופת ניסיון?',
      answer: language === 'en'
        ? 'Yes! You can try tariff.ai for free with one complimentary report. This gives you a chance to experience our AI classification and see the value before committing to a paid plan.'
        : 'כן! אתם יכולים לנסות את tariff.ai בחינם עם דוח אחד ללא תשלום. זה נותן לכם הזדמנות לחוות את סיווג ה-AI שלנו ולראות את הערך לפני התחייבות לתוכנית בתשלום.',
    },
    {
      question: language === 'en' 
        ? 'How do I get support for professional questions?'
        : 'איך אני מקבל תמיכה לשאלות מקצועיות?',
      answer: language === 'en'
        ? 'Our support team is available via email at hello@tariff.ai. Enterprise customers receive priority support with dedicated account managers and faster response times.'
        : 'צוות התמיכה שלנו זמין באימייל ב-hello@tariff.ai. לקוחות ארגוניים מקבלים תמיכה בעדיפות עם מנהלי חשבון ייעודיים וזמני תגובה מהירים יותר.',
    },
  ];

  return (
    <section id="faqs" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
          }`}>
            FAQs
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {language === 'en' ? 'tariff.ai Knowledge Center' : 'מרכז הידע של tariff.ai'}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {language === 'en' 
              ? "Everything you need to know about the tool that's changing international trade"
              : 'כל מה שצריך לדעת על הכלי שמשנה את הסחר הבינלאומי'}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-2xl overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-[#1E293B]/50 border border-white/10'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-semibold ${isRTL ? 'pr-4' : 'pr-8'} ${
                  theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                }`}>
                  <span className={`${
                    theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
                  } ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                } ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`px-6 pb-6 ${isRTL ? 'pr-16' : 'pl-16'} ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            {language === 'en' 
              ? "Didn't find your answer? We're here to help"
              : 'לא מצאתם תשובה? אנחנו כאן לעזור'}
          </p>
          <Button 
            asChild
            className="bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold px-8 rounded-full"
          >
            <a href="#contact">
              <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {language === 'en' ? 'Contact Us' : 'צרו קשר'}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}