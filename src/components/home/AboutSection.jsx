import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, RefreshCw, Globe, Target, FileText, Users } from 'lucide-react';

export default function AboutSection({ theme, language }) {
  const isRTL = language === 'he';

  const features = [
    {
      icon: Shield,
      title: language === 'en' ? 'Accuracy First' : 'דיוק קודם',
      description: language === 'en' 
        ? 'Every report is verified against official sources'
        : 'כל דוח מאומת מול מקורות רשמיים',
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Speed Matters' : 'המהירות חשובה',
      description: language === 'en' 
        ? 'Get answers in seconds, not hours'
        : 'קבלו תשובות בשניות, לא בשעות',
    },
    {
      icon: RefreshCw,
      title: language === 'en' ? 'Always Current' : 'תמיד עדכני',
      description: language === 'en' 
        ? 'Real-time updates on tariff changes'
        : 'עדכונים בזמן אמת על שינויי מכס',
    },
  ];

  const stats = [
    { value: '190+', label: language === 'en' ? 'Countries' : 'מדינות', icon: Globe },
    { value: '98%', label: language === 'en' ? 'Accuracy' : 'דיוק', icon: Target },
    { value: '1M+', label: language === 'en' ? 'Reports' : 'דוחות', icon: FileText },
    { value: '24/7', label: language === 'en' ? 'Support' : 'תמיכה', icon: Users },
  ];

  return (
    <section id="about" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <span className={`text-sm font-semibold tracking-wider uppercase ${
              theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
            }`}>
              {language === 'en' ? 'Who We Are' : 'מי אנחנו'}
            </span>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
            }`}>
              {language === 'en' ? 'Simplifying Global Trade' : 'מפשטים את הסחר הגלובלי'}
            </h2>
            <p className={`mt-6 text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}>
              {language === 'en' 
                ? 'tariff.ai combines cutting-edge AI with comprehensive trade databases to deliver instant, accurate tariff intelligence.'
                : 'tariff.ai משלב בינה מלאכותית מתקדמת עם מאגרי מידע סחר מקיפים לאספקת מודיעין מכס מיידי ומדויק.'}
            </p>
            <p className={`mt-4 text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}>
              {language === 'en' 
                ? "Founded by trade compliance experts and AI engineers, we're on a mission to democratize access to trade intelligence. Our platform processes millions of data points to give you clear, actionable insights in seconds."
                : 'החברה הוקמה על ידי מומחי ציות סחר ומהנדסי AI, ואנחנו במשימה להנגיש מודיעין סחר לכולם. הפלטפורמה שלנו מעבדת מיליוני נקודות נתונים כדי לתת לכם תובנות ברורות וניתנות לפעולה בשניות.'}
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'
                  }`}>
                    <feature.icon className="w-5 h-5 text-[#E5A840]" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`mt-1 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? 'lg:order-1' : ''}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-3xl p-8 ${
                    theme === 'dark' 
                      ? 'bg-[#1E293B]/50 border border-white/10'
                      : 'bg-slate-50 border border-slate-200'
                  } group hover:border-[#E5A840]/50 transition-all duration-300`}
                >
                  <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-20 h-20 ${
                    theme === 'dark' ? 'bg-[#E5A840]/10' : 'bg-[#E5A840]/5'
                  } rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                  
                  <stat.icon className={`w-8 h-8 mb-4 ${
                    theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
                  }`} />
                  <div className={`text-4xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`mt-1 text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}