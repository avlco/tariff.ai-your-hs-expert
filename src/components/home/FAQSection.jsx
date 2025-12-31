import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '../LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-white to-[#f8fafa] dark:from-[#0a1628] dark:to-[#0d1f35] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#42C0B9]/20 to-transparent backdrop-blur-sm border border-[#42C0B9]/20"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-10 w-32 h-32 rounded-3xl bg-gradient-to-br from-[#D89C42]/20 to-transparent backdrop-blur-sm border border-[#D89C42]/20"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#42C0B9]/10 dark:bg-[#42C0B9]/20 border border-[#42C0B9]/30 mb-6 backdrop-blur-sm"
          >
            <HelpCircle className="w-4 h-4 text-[#42C0B9]" />
            <span className="text-sm font-semibold text-[#114B5F] dark:text-white">{t.faq.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-[#114B5F] dark:text-white mb-6 tracking-tight"
          >
            {t.faq.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#114B5F]/70 dark:text-gray-400"
          >
            {t.faq.subtitle}
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-[#1a2d42] rounded-3xl border-2 border-[#114B5F]/10 dark:border-white/10 shadow-xl p-8 backdrop-blur-sm"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#114B5F]/10 dark:border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline group">
                  <div className="flex items-start gap-4 pr-8">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#42C0B9]/10 flex items-center justify-center group-hover:bg-[#42C0B9]/20 transition-colors">
                      <span className="text-sm font-bold text-[#42C0B9]">{index + 1}</span>
                    </div>
                    <span className="text-lg font-bold text-[#114B5F] dark:text-white group-hover:text-[#42C0B9] dark:group-hover:text-[#42C0B9] transition-colors">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 px-12">
                  <p className="text-[#114B5F]/80 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#114B5F]/70 dark:text-gray-400 mb-4">
            {t.isRTL ? 'לא מצאתם תשובה? אנחנו כאן לעזור' : 'Didn\'t find your answer? We\'re here to help'}
          </p>
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#42C0B9] to-[#114B5F] text-white font-bold shadow-lg shadow-[#42C0B9]/25 hover:shadow-xl hover:shadow-[#42C0B9]/40 transition-all"
          >
            {t.isRTL ? 'צרו קשר' : 'Contact Us'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}