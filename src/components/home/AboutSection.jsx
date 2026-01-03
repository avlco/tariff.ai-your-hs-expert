import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, RefreshCw, Globe, Target, FileText, Users } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutSection({ theme }) {
  const { t, isRTL } = useLanguage();

  const iconMap = [Shield, Zap, RefreshCw];
  const featuresData = t('about.features') || [];
  const features = featuresData.map((item, index) => ({
    ...item,
    icon: iconMap[index]
  }));

  const stats = [
    { value: '190+', label: t('about.stats.countries'), icon: Globe },
    { value: '98%', label: t('about.stats.accuracy'), icon: Target },
    { value: '1M+', label: t('about.stats.reports'), icon: FileText },
    { value: '24/7', label: t('about.stats.support'), icon: Users },
  ];

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <span className={`text-sm font-semibold tracking-wider uppercase ${theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'}`}>
              {t('about.badge')}
            </span>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
              {t('about.title')}
            </h2>
            <p className={`mt-6 text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              {t('about.description1')}
            </p>
            <p className={`mt-4 text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              {t('about.description2')}
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl ${theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'}`}>
                    {feature.icon && <feature.icon className="w-5 h-5 text-[#E5A840]" />}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                      {feature.title}
                    </h4>
                    <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? 'lg:order-1' : ''}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-3xl p-8 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'} group hover:border-[#E5A840]/50 transition-all duration-300`}
                >
                  <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-20 h-20 ${theme === 'dark' ? 'bg-[#E5A840]/10' : 'bg-[#E5A840]/5'} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                  <stat.icon className={`w-8 h-8 mb-4 ${theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'}`} />
                  <div className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    {stat.value}
                  </div>
                  <div className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
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
