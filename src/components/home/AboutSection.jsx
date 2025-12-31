import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, RefreshCw } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const iconMap = [Target, Zap, RefreshCw];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32 bg-white dark:bg-[#0B2C36] overflow-hidden">
      {/* Minimal Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#42C0B9]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xs font-medium text-[#42C0B9] tracking-[0.2em] uppercase mono">
                {t.about.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold text-[#114B5F] dark:text-white mb-6 tracking-tight"
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#114B5F]/60 dark:text-white/50 mb-8 leading-relaxed"
            >
              {t.about.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#114B5F]/60 dark:text-white/50 mb-12 leading-relaxed"
            >
              {t.about.description}
            </motion.p>

            {/* Values */}
            <div className="space-y-8">
              {t.about.values.map((value, index) => {
                const Icon = iconMap[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-[#42C0B9]/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#42C0B9]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#114B5F] dark:text-white mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[#114B5F]/60 dark:text-white/50">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Large Number */}
            <div className="absolute -top-12 -left-12 text-[12rem] font-bold text-[#114B5F]/5 dark:text-white/5 mono leading-none">
              01
            </div>

            {/* Main Visual Box */}
            <div className="relative border-2 border-[#114B5F]/10 dark:border-white/10 p-12 bg-white dark:bg-[#0B2C36]">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#42C0B9] mb-2 mono">190+</div>
                  <div className="text-xs text-[#114B5F]/50 dark:text-white/40 uppercase tracking-wider">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#42C0B9] mb-2 mono">98%</div>
                  <div className="text-xs text-[#114B5F]/50 dark:text-white/40 uppercase tracking-wider">
                    Accuracy
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#42C0B9] mb-2 mono">1M+</div>
                  <div className="text-xs text-[#114B5F]/50 dark:text-white/40 uppercase tracking-wider">
                    Reports
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#42C0B9] mb-2 mono">24/7</div>
                  <div className="text-xs text-[#114B5F]/50 dark:text-white/40 uppercase tracking-wider">
                    Support
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#42C0B9]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#42C0B9]" />
            </div>

            {/* Floating Accent */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 border border-[#D89C42]/30"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}