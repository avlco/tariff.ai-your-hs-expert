import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Clock } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function ChallengesSection({ theme }) {
  const { t, isRTL } = useLanguage();

  const iconMap = [DollarSign, AlertTriangle, Clock];
  const itemsData = t('challenges.items') || [];
  
  const challenges = itemsData.map((item, index) => ({
    ...item,
    icon: iconMap[index],
    color: index === 0 ? 'text-red-500' : index === 1 ? 'text-orange-500' : 'text-blue-500',
    bgColor: index === 0 
      ? (theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50') 
      : index === 1 
        ? (theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-50')
        : (theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'),
    borderColor: index === 0 
      ? 'border-red-500/20' 
      : index === 1 
        ? 'border-orange-500/20' 
        : 'border-blue-500/20'
  }));

  return (
    <section id="challenges" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
          }`}>
            {t('challenges.badge')}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {t('challenges.title')}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {t('challenges.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
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
              <div className={`inline-flex p-4 rounded-2xl ${challenge.bgColor} mb-6`}>
                <challenge.icon className={`w-7 h-7 ${challenge.color}`} />
              </div>

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

              <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-32 h-32 ${challenge.bgColor} rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
