import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, 
  Calculator, 
  FileCheck, 
  Bell, 
  BarChart3, 
  FileText 
} from 'lucide-react';

export default function FeaturesSection({ theme, language }) {
  const isRTL = language === 'he';

  const features = [
    {
      icon: FileSearch,
      number: '01',
      title: language === 'en' ? 'HS Code Classification' : 'סיווג HS-Code',
      description: language === 'en' 
        ? 'Automatic product classification with 98% accuracy using advanced AI'
        : 'סיווג מוצרים אוטומטי עם 98% דיוק באמצעות AI מתקדם',
    },
    {
      icon: Calculator,
      number: '02',
      title: language === 'en' ? 'Duty Calculator' : 'מחשבון מכס',
      description: language === 'en' 
        ? 'Instant calculation of duties, taxes, and fees for any trade route'
        : 'חישוב מיידי של מכס, מיסים ועמלות לכל מסלול סחר',
    },
    {
      icon: FileCheck,
      number: '03',
      title: language === 'en' ? 'Trade Agreement Finder' : 'מאתר הסכמי סחר',
      description: language === 'en' 
        ? 'Discover preferential rates under FTAs and trade agreements'
        : 'גלו תעריפים מועדפים תחת הסכמי סחר חופשי',
    },
    {
      icon: Bell,
      number: '04',
      title: language === 'en' ? 'Compliance Alerts' : 'התראות ציות',
      description: language === 'en' 
        ? 'Real-time notifications on regulatory changes affecting your products'
        : 'התראות בזמן אמת על שינויים רגולטוריים המשפיעים על המוצרים שלכם',
    },
    {
      icon: BarChart3,
      number: '05',
      title: language === 'en' ? 'Multi-Country Analysis' : 'ניתוח רב-מדינתי',
      description: language === 'en' 
        ? 'Compare tariffs across multiple destinations simultaneously'
        : 'השוו מכסים בין מספר יעדים בו-זמנית',
    },
    {
      icon: FileText,
      number: '06',
      title: language === 'en' ? 'Export Documentation' : 'מסמכי יצוא',
      description: language === 'en' 
        ? 'Generate compliant export documents automatically'
        : 'יצירת מסמכי יצוא תואמים באופן אוטומטי',
    },
  ];

  return (
    <section id="features" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {language === 'en' ? 'Capabilities' : 'יכולות'}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {language === 'en' ? 'Everything You Need' : 'כל מה שאתם צריכים'}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {language === 'en' 
              ? 'Powerful tools designed to streamline your global trade operations'
              : 'כלים עוצמתיים שנועדו לייעל את פעילות הסחר הגלובלי שלכם'}
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl p-8 ${
                theme === 'dark' 
                  ? 'bg-[#1E293B]/50 hover:bg-[#1E293B] border border-white/5 hover:border-[#E5A840]/30'
                  : 'bg-white hover:shadow-2xl border border-slate-200 hover:border-[#E5A840]/30'
              } transition-all duration-500`}
            >
              {/* Background Number */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-7xl font-bold ${
                theme === 'dark' ? 'text-white/5' : 'text-slate-100'
              } group-hover:text-[#E5A840]/10 transition-colors duration-500`}>
                {feature.number}
              </div>

              {/* Content */}
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl ${
                  theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'
                } mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-[#E5A840]" />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                <div className={`absolute -bottom-20 ${isRTL ? '-left-20' : '-right-20'} w-40 h-40 bg-[#E5A840]/20 rounded-full blur-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://app.tariff-ai.com"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#E5A840] text-[#0F172A] hover:shadow-xl hover:shadow-[#E5A840]/25'
                : 'bg-[#0F172A] text-white hover:bg-slate-800'
            }`}
          >
            {language === 'en' ? 'Get Started Now' : 'התחילו עכשיו'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}