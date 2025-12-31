import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-[#f8fafa] to-white dark:from-[#0d1f35] dark:to-[#0a1628] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#42C0B9]/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D89C42]/10 border border-[#D89C42]/20 mb-6"
          >
            <Star className="w-4 h-4 text-[#D89C42]" />
            <span className="text-sm font-medium text-[#D89C42]">{t.testimonials.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-[#114B5F] dark:text-white mb-6"
          >
            {t.testimonials.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#114B5F]/70 dark:text-gray-400"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#42C0B9]/20 to-[#D89C42]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-[#1a2d42] border border-[#114B5F]/10 dark:border-white/10 shadow-lg shadow-black/5">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 p-3 rounded-xl bg-gradient-to-br from-[#42C0B9] to-[#114B5F] shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D89C42] text-[#D89C42]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#114B5F]/80 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42C0B9] to-[#114B5F] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#114B5F] dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[#114B5F]/60 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}