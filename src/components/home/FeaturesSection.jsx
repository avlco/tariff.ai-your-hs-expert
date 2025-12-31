import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Calculator, Globe, Bell, BarChart3, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

const iconMap = {
  0: FileCheck,
  1: Calculator,
  2: Globe,
  3: Bell,
  4: BarChart3,
  5: FileText,
};

export default function FeaturesSection() {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="relative py-32 bg-white dark:bg-[#0B2C36] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#114B5F 1px, transparent 1px), linear-gradient(90deg, #114B5F 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-xs font-medium text-[#42C0B9] tracking-[0.2em] uppercase mono">
              {t.features.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-[#114B5F] dark:text-white mb-6 tracking-tight"
          >
            {t.features.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#114B5F]/60 dark:text-white/50 leading-relaxed"
          >
            {t.features.subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#114B5F]/10 dark:bg-white/5 border border-[#114B5F]/10 dark:border-white/5">
          {t.features.items.map((feature, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white dark:bg-[#0B2C36] p-12 hover:bg-[#114B5F]/5 dark:hover:bg-white/5 transition-colors"
              >
                {/* Number */}
                <div className="absolute top-8 right-8 text-6xl font-bold text-[#114B5F]/5 dark:text-white/5 mono">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="mb-8">
                  <Icon className="w-8 h-8 text-[#42C0B9] stroke-[1.5]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#114B5F] dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#114B5F]/60 dark:text-white/50 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#42C0B9] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            onClick={() => scrollToSection('#pricing')}
            size="lg"
            className="bg-[#42C0B9] hover:bg-[#42C0B9]/90 text-white px-8 py-6 rounded-none font-medium"
          >
            {t.features.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}