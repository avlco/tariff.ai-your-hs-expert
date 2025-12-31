import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const iconMap = [DollarSign, Shield, Clock];

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="relative py-32 bg-[#F4F6F8] dark:bg-[#114B5F] overflow-hidden">
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
              {t.problem.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-[#114B5F] dark:text-white mb-6 tracking-tight"
          >
            {t.problem.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#114B5F]/60 dark:text-white/50"
          >
            {t.problem.subtitle}
          </motion.p>
        </div>

        {/* Problems - Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-16">
          {t.problem.cards.map((card, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Line Connector */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-16 h-px bg-[#114B5F]/10 dark:bg-white/10" />
                )}

                {/* Icon */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-[#114B5F]/20 dark:border-white/20">
                    <Icon className="w-7 h-7 text-[#42C0B9] stroke-[1.5]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#114B5F] dark:text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-[#114B5F]/60 dark:text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}