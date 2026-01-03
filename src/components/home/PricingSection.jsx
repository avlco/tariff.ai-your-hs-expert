import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function PricingSection({ theme }) {
  const { t, isRTL } = useLanguage();
  const [pricingType, setPricingType] = useState('packages');
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const freeTierFeatures = t('pricing.freeTier.features') || [];
  const packageFeatures = t('pricing.packageFeatures') || [];
  const subscriptionFeatures = t('pricing.subscriptionFeatures') || [];

  const packages = [
    { reports: 1, price: '$2.99', perReport: '$2.99' },
    { reports: 5, price: '$12.99', perReport: '$2.60' },
    { reports: 10, price: '$22.99', perReport: '$2.30' },
    { reports: 25, price: '$54.99', perReport: '$2.20' },
  ];

  const subscriptions = [
    { reports: 15, monthlyPrice: '$19.99', yearlyPrice: '$15.99', perReport: '$1.33' },
    { reports: 50, monthlyPrice: '$59.99', yearlyPrice: '$47.99', perReport: '$1.20', popular: true },
    { reports: 200, monthlyPrice: '$199', yearlyPrice: '$159', perReport: '$1.00' },
  ];

  return (
    <section id="pricing" className={`py-24 ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'}`}>
            {t('pricing.badge')}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
            {t('pricing.title')}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <Tabs value={pricingType} onValueChange={setPricingType} className="w-auto">
            <TabsList className={`rounded-full p-1 ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-slate-200'}`}>
              <TabsTrigger value="packages" className="rounded-full px-6 py-2 data-[state=active]:bg-[#E5A840] data-[state=active]:text-[#0F172A]">
                {t('pricing.packages')}
              </TabsTrigger>
              <TabsTrigger value="subscriptions" className="rounded-full px-6 py-2 data-[state=active]:bg-[#E5A840] data-[state=active]:text-[#0F172A]">
                {t('pricing.subscriptions')}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-12"
        >
          <div className={`rounded-3xl p-8 text-center ${theme === 'dark' ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10' : 'bg-white border border-slate-200 shadow-lg'}`}>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
              {t('pricing.freeTier.title')}
            </h3>
            <div className={`text-5xl font-bold mt-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>$0</div>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              {t('pricing.freeTier.desc')}
            </p>
            <Button className="w-full mt-6 bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold rounded-full h-12">
              {t('pricing.getStarted')}
            </Button>
            <div className={`mt-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              <p className="font-medium mb-2">{t('pricing.includes')}</p>
              {freeTierFeatures.map((f, i) => (
                <div key={i} className="flex items-center justify-center gap-2 mt-1">
                  <Check className="w-4 h-4 text-[#E5A840]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {pricingType === 'packages' && (
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.reports}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10 hover:border-[#E5A840]/30' : 'bg-white border border-slate-200 hover:border-[#E5A840]/50 shadow-lg'} transition-all duration-300`}
                >
                  <h4 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    {pkg.reports} Reports
                  </h4>
                  <div className={`text-3xl font-bold mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                    {pkg.perReport} {t('pricing.perReport')}
                  </p>
                  <Button variant="outline" className={`w-full mt-4 rounded-full ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : ''}`}>
                    {t('pricing.getStarted')}
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/30' : 'bg-white/50'}`}>
              <p className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                {t('pricing.includes')}
              </p>
              <div className="flex flex-wrap gap-4">
                {packageFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E5A840]" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {pricingType === 'subscriptions' && (
          <div className="space-y-8">
            <div className="flex justify-center items-center gap-4">
              <span className={`text-sm ${billingPeriod === 'monthly' ? (theme === 'dark' ? 'text-white' : 'text-[#0F172A]') : (theme === 'dark' ? 'text-gray-400' : 'text-slate-500')}`}>
                {t('pricing.monthly')}
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-14 h-8 rounded-full transition-colors ${billingPeriod === 'yearly' ? 'bg-[#E5A840]' : (theme === 'dark' ? 'bg-[#1E293B]' : 'bg-slate-300')}`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm flex items-center gap-2 ${billingPeriod === 'yearly' ? (theme === 'dark' ? 'text-white' : 'text-[#0F172A]') : (theme === 'dark' ? 'text-gray-400' : 'text-slate-500')}`}>
                {t('pricing.yearly')}
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                  20% {t('pricing.off')}
                </Badge>
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {subscriptions.map((sub, index) => (
                <motion.div
                  key={sub.reports}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-3xl p-8 ${sub.popular ? 'bg-gradient-to-br from-[#E5A840] to-[#C28E36] text-[#0F172A]' : theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-white border border-slate-200 shadow-lg'}`}
                >
                  {sub.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F172A] text-[#E5A840]">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {t('pricing.popular')}
                    </Badge>
                  )}
                  <h4 className={`text-lg font-bold ${sub.popular ? 'text-[#0F172A]' : theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    {sub.reports} Reports
                  </h4>
                  <div className={`text-4xl font-bold mt-4 ${sub.popular ? 'text-[#0F172A]' : theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    {billingPeriod === 'monthly' ? sub.monthlyPrice : sub.yearlyPrice}
                    <span className={`text-lg font-normal ${sub.popular ? 'text-[#0F172A]/70' : theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                      /{t('pricing.mo')}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${sub.popular ? 'text-[#0F172A]/70' : theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                    {sub.perReport} {t('pricing.perReport')}
                  </p>
                  <Button className={`w-full mt-6 rounded-full h-12 font-semibold ${sub.popular ? 'bg-[#0F172A] text-white hover:bg-slate-800' : 'bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A]'}`}>
                    {t('pricing.getStarted')}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/30' : 'bg-white/50'}`}>
              <p className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                {t('pricing.includes')}
              </p>
              <div className="flex flex-wrap gap-4">
                {subscriptionFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E5A840]" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
