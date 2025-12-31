import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

export default function PricingSection() {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <section id="pricing" className="relative py-32 bg-white dark:bg-[#0B2C36] overflow-hidden">
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
              {t.pricing.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-[#114B5F] dark:text-white mb-6 tracking-tight"
          >
            {t.pricing.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#114B5F]/60 dark:text-white/50"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex border border-[#114B5F]/20 dark:border-white/20">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-8 py-3 text-sm font-medium transition-colors ${
                activeTab === 'packages'
                  ? 'bg-[#42C0B9] text-white'
                  : 'text-[#114B5F] dark:text-white hover:bg-[#114B5F]/5 dark:hover:bg-white/5'
              }`}
            >
              {t.pricing.tabs.packages}
            </button>
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`px-8 py-3 text-sm font-medium transition-colors ${
                activeTab === 'subscriptions'
                  ? 'bg-[#42C0B9] text-white'
                  : 'text-[#114B5F] dark:text-white hover:bg-[#114B5F]/5 dark:hover:bg-white/5'
              }`}
            >
              {t.pricing.tabs.subscriptions}
            </button>
          </div>
        </div>

        {/* Free Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="relative border border-[#42C0B9]/50 bg-white dark:bg-[#0B2C36] p-12">
            <div className="absolute top-0 left-0 bg-[#42C0B9] px-4 py-1">
              <span className="text-xs font-medium text-white uppercase tracking-wider">{t.pricing.tryFree}</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <div>
                <h3 className="text-4xl font-bold text-[#114B5F] dark:text-white mb-2 mono">
                  {t.pricing.free.price}
                </h3>
                <p className="text-[#114B5F]/60 dark:text-white/50 mb-8">
                  {t.pricing.free.description}
                </p>
                <Button className="bg-[#42C0B9] hover:bg-[#42C0B9]/90 text-white px-8 py-6 rounded-none font-medium w-full">
                  {t.pricing.getStarted}
                </Button>
              </div>
              
              <div>
                <div className="text-xs font-medium text-[#114B5F] dark:text-white/60 mb-4 uppercase tracking-wider">
                  {t.pricing.reportIncludes}
                </div>
                <ul className="space-y-3">
                  {t.pricing.free.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#42C0B9] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm text-[#114B5F]/80 dark:text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Packages Grid */}
        {activeTab === 'packages' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#114B5F]/10 dark:bg-white/5 border border-[#114B5F]/10 dark:border-white/5">
            {t.pricing.packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-[#0B2C36] p-8 hover:bg-[#114B5F]/5 dark:hover:bg-white/5 transition-colors"
              >
                <div className="text-xs font-medium text-[#42C0B9] mb-4 mono uppercase tracking-wider">
                  {pkg.reports} {isRTL ? 'דוחות' : 'Reports'}
                </div>
                <div className="text-4xl font-bold text-[#114B5F] dark:text-white mb-1 mono">
                  {pkg.price}
                </div>
                <div className="text-xs text-[#114B5F]/50 dark:text-white/40 mb-8">
                  {pkg.pricePerReport} {isRTL ? 'לדוח' : 'per report'}
                </div>
                <Button className="w-full border border-[#114B5F]/20 dark:border-white/20 text-[#114B5F] dark:text-white hover:bg-[#42C0B9] hover:text-white hover:border-[#42C0B9] rounded-none font-medium transition-colors">
                  {t.pricing.getStarted}
                </Button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Subscriptions Grid */}
        {activeTab === 'subscriptions' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.pricing.subscriptions).map(([key, plan], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`relative border p-8 ${
                  key === 'pro'
                    ? 'border-[#D89C42] bg-gradient-to-br from-[#D89C42]/5 to-transparent'
                    : 'border-[#114B5F]/20 dark:border-white/20 bg-white dark:bg-[#0B2C36]'
                }`}
              >
                {key === 'pro' && (
                  <div className="absolute -top-3 left-8 bg-[#D89C42] px-3 py-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white uppercase">{t.pricing.popular}</span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#114B5F] dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#114B5F]/60 dark:text-white/50">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#114B5F] dark:text-white mb-1 mono">
                    {plan.price}
                  </div>
                  <div className="text-xs text-[#114B5F]/50 dark:text-white/40">
                    {plan.reports} {isRTL ? 'דוחות חודשיים' : 'monthly reports'}
                  </div>
                </div>

                <Button 
                  className={`w-full rounded-none font-medium ${
                    key === 'pro'
                      ? 'bg-[#D89C42] hover:bg-[#D89C42]/90 text-white'
                      : 'border border-[#114B5F]/20 dark:border-white/20 text-[#114B5F] dark:text-white hover:bg-[#42C0B9] hover:text-white hover:border-[#42C0B9]'
                  }`}
                >
                  {key === 'enterprise' ? t.pricing.contactSales : t.pricing.getStarted}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}