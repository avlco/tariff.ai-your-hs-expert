import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function FAQSection({ theme }) {
  const { t, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t('faq.items') || [];

  return (
    <section id="faqs" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
          }`}>
            {t('faq.badge')}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {t('faq.title')}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-2xl overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-[#1E293B]/50 border border-white/10'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-semibold ${isRTL ? 'pl-4' : 'pr-8'} ${
                  theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                }`}>
                  <span className={`${
                    theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
                  } ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                } ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`px-6 pb-6 ${isRTL ? 'pr-16' : 'pl-16'} ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            {t('faq.contactTitle')}
          </p>
          <Button 
            asChild
            className="bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold px-8 rounded-full"
          >
            <a href="#contact">
              <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('faq.contactCta')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
