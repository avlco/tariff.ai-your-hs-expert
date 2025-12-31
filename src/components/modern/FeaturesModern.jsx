import React from 'react';
import { motion } from 'framer-motion';
import { ScanBarcode, Calculator, Globe, Bell, Layers, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [
  ScanBarcode,
  Calculator,
  Globe,
  Bell,
  Layers,
  FileText
];

export default function FeaturesModern() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-[#0B2C36] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#42C0B9] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D89C42] rounded-full blur-[150px] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#42C0B9] tracking-widest uppercase">{t.features.badge}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t.features.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            {t.features.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, index) => {
            const Icon = icons[index] || Globe;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#42C0B9]/30 transition-all duration-500 hover:-translate-y-2 ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#42C0B9]/0 to-[#42C0B9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B2C36] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_0_0_rgba(66,192,185,0)] group-hover:shadow-[0_0_20px_0_rgba(66,192,185,0.2)]">
                    <Icon className="w-7 h-7 text-[#42C0B9]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#42C0B9] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}