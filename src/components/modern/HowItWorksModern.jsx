import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function HowItWorksModern() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t.howItWorks.title}
          </motion.h2>
          <p className="text-gray-400 text-lg">{t.howItWorks.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#0a1628] via-[#42C0B9] to-[#0a1628] opacity-20 hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.07] transition-all duration-300 text-center lg:text-left">
                  {/* Holographic Number */}
                  <div className="text-6xl md:text-8xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-[#D89C42] to-transparent opacity-30 mb-6 select-none">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#42C0B9] transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}