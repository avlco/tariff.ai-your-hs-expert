import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Clock } from 'lucide-react';

export default function ChallengesSection({ theme, language }) {
  const isRTL = language === 'he';

  const challenges = [
    {
      icon: DollarSign,
      title: language === 'en' ? 'Hidden Costs' : 'עלויות נסתרות',
      description: language === 'en' 
        ? 'Unexpected tariffs and duties can increase product costs by 15-30%, destroying profit margins overnight.'
        : 'מכסים ומיסים בלתי צפויים יכולים להעלות את עלויות המוצר ב-15-30%, ולהרוס שולי רווח בין לילה.',
      color: 'text-red-500',
      bgColor: theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50',
      borderColor: 'border-red-500/20',
    },
    {
      icon: AlertTriangle,
      title: language === 'en' ? 'Compliance Risk' : 'סיכון ציות',
      description: language === 'en' 
        ? 'Non-compliance with trade regulations leads to shipment delays, fines, and damaged business relationships.'
        : 'אי עמידה בתקנות סחר מובילה לעיכובי משלוחים, קנסות ופגיעה ביחסים עסקיים.',
      color: 'text-orange-500',
      bgColor: theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-50',
      borderColor: 'border-orange-500/20',
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Time Waste' : 'בזבוז זמן',
      description: language === 'en' 
        ? 'Manual tariff research takes hours of expert time per product, slowing down business decisions.'
        : 'מחקר מכס ידני לוקח שעות של זמן מומחה למוצר, ומאט החלטות עסקיות.',
      color: 'text-blue-500',
      bgColor: theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50',
      borderColor: 'border-blue-500/20',
    },
  ];

  return (
    <section id="challenges" className={`py-24 ${
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
            {language === 'en' ? 'The Challenge' : 'האתגר'}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {language === 'en' ? 'Global Trade is Complex' : 'הסחר הגלובלי מורכב'}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {language === 'en' 
              ? 'Businesses lose millions annually due to tariff miscalculations and compliance issues'
              : 'עסקים מאבדים מיליונים מדי שנה בגלל טעויות בחישוב מכס ובעיות ציות'}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative group rounded-3xl p-8 border ${challenge.borderColor} ${
                theme === 'dark' 
                  ? 'bg-[#1E293B]/50 hover:bg-[#1E293B]'
                  : 'bg-white hover:shadow-xl'
              } transition-all duration-500`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${challenge.bgColor} mb-6`}>
                <challenge.icon className={`w-7 h-7 ${challenge.color}`} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
              }`}>
                {challenge.title}
              </h3>
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                {challenge.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-32 h-32 ${challenge.bgColor} rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}