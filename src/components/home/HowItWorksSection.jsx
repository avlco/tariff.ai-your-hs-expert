import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function HowItWorksSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-32 bg-[#F4F6F8] dark:bg-[#114B5F] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-xs font-medium text-[#42C0B9] tracking-[0.2em] uppercase mono">
              {t.howItWorks.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-[#114B5F] dark:text-white mb-6 tracking-tight"
          >
            {t.howItWorks.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#114B5F]/60 dark:text-white/50"
          >
            {t.howItWorks.subtitle}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-16 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-[#114B5F]/10 dark:bg-white/10" />

          {t.howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#42C0B9] bg-white dark:bg-[#0B2C36] relative z-10">
                  <span className="text-2xl font-bold text-[#42C0B9] mono">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-[#114B5F] dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-[#114B5F]/60 dark:text-white/50 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (except last) */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-8 left-full w-16 flex items-center justify-center">
                  <ArrowRight 
                    className={`w-5 h-5 text-[#42C0B9]/30 ${isRTL ? 'rotate-180' : ''}`} 
                    strokeWidth={1.5} 
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}