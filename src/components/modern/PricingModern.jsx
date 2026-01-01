import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

export default function PricingModern() {
  const { t, isRTL } = useLanguage();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = Object.entries(t.pricing.subscriptions).map(([key, plan]) => ({
    id: key,
    ...plan,
    features: t.pricing.subscriptionFeatures
  }));

  return (
    <section className="py-24 bg-[#0B2C36] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#42C0B9] rounded-full blur-[200px] opacity-[0.03]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            {t.pricing.subtitle}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-[#42C0B9] text-[#0B2C36]' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly' ? 'bg-[#42C0B9] text-[#0B2C36]' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly <span className="text-[10px] ml-1 opacity-80">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isPro = plan.id === 'pro';
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl bg-white/5 backdrop-blur-md border ${isPro ? 'border-[#D89C42] shadow-[0_0_30px_rgba(216,156,66,0.1)]' : 'border-white/10'} hover:translate-y-[-5px] transition-transform duration-300`}
              >
                {isPro && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D89C42] text-[#0B2C36] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {t.pricing.popular}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${isPro ? 'text-[#D89C42]' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 h-10">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-mono text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-500">{t.pricing.perMonth}</span>
                    )}
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.slice(0, isPro ? 8 : 5).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPro ? 'bg-[#D89C42]/20 text-[#D89C42]' : 'bg-white/10 text-gray-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild
                  className={`w-full py-6 text-lg font-bold rounded-xl transition-all ${
                    isPro 
                      ? 'bg-[#D89C42] hover:bg-[#c28b39] text-[#0B2C36] shadow-[0_0_20px_rgba(216,156,66,0.2)]' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <a href="https://app.tariff-ai.com/" target="_blank" rel="noopener noreferrer">
                    {t.pricing.getStarted}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
