import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Calculator, FileCheck, Bell, BarChart3, FileText } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function FeaturesSection({ theme }) {
  const { t, isRTL } = useLanguage();

  const iconMap = [FileSearch, Calculator, FileCheck, Bell, BarChart3, FileText];
  const featuresData = t('features.items') || [];
  const features = featuresData.map((item, index) => ({
    ...item,
    icon: iconMap[index],
    number: String(index + 1).padStart(2, '0')
  }));

  return (
    <section id="features" className={`py-24 ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'}`}>
            {t('features.badge')}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
            {t('features.title')}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            {t('features.subtitle')}
          </p>
        </motion.div>

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
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-7xl font-bold ${theme === 'dark' ? 'text-white/5' : 'text-slate-100'} group-hover:text-[#E5A840]/10 transition-colors duration-500`}>
                {feature.number}
              </div>
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl ${theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon && <feature.icon className="w-7 h-7 text-[#E5A840]" />}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {feature.desc}
                </p>
              </div>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                <div className={`absolute -bottom-20 ${isRTL ? '-left-20' : '-right-20'} w-40 h-40 bg-[#E5A840]/20 rounded-full blur-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

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
            {t('features.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
