import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

export default function PricingModern() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('subscriptions');

  return (
    <section id="pricing" className="relative py-32 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42C0B9] to-[#D89C42]">Pricing</span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {['packages', 'subscriptions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab ? "bg-[#42C0B9] text-white shadow-[0_0_20px_-5px_rgba(66,192,185,0.5)]" : "text-slate-400 hover:text-white"}`}
              >
                {t.pricing.tabs[tab]}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === 'subscriptions' && Object.entries(t.pricing.subscriptions).map(([key, plan], idx) => {
            const isPopular = key === 'pro';
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col ${isPopular ? "border-[#D89C42]/50 bg-gradient-to-b from-[#D89C42]/10 to-transparent shadow-[0_0_40px_-10px_rgba(216,156,66,0.15)]" : "border-white/5 bg-white/5 hover:border-white/20"}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D89C42] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white font-mono">{plan.price}</span>
                    <span className="text-sm text-slate-500">{plan.price !== 'Custom' && '/mo'}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-[#42C0B9]" />
                      {plan.reports} Reports
                    </li>
                    {/* Features list */}
                    {t.pricing.subscriptionFeatures && t.pricing.subscriptionFeatures.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                             <Check className="w-4 h-4 text-[#42C0B9]" />
                             {feature}
                        </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild
                  className={`w-full h-12 rounded-xl font-medium transition-all ${isPopular ? "bg-[#D89C42] hover:bg-[#c28b39] text-black" : "bg-white/10 hover:bg-white/20 text-white"}`}
                >
                  <a href="https://app.tariff-ai.com/" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </motion.div>
            );
          })}
          
           {activeTab === 'packages' && t.pricing.packages.map((plan, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl border flex flex-col border-white/5 bg-white/5 hover:border-white/20"
              >
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.reports} Report{plan.reports > 1 ? 's' : ''}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white font-mono">{plan.price}</span>
                  </div>
                   <p className="text-sm text-slate-500 mt-2">{plan.pricePerReport} / report</p>
                </div>

                 <Button 
                  asChild
                  className="w-full h-12 rounded-xl font-medium transition-all bg-white/10 hover:bg-white/20 text-white"
                >
                  <a href="https://app.tariff-ai.com/" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
