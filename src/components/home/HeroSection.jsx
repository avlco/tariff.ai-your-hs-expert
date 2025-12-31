import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0B2C36]">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#114B5F 1px, transparent 1px), linear-gradient(90deg, #114B5F 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating Accent Dots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#42C0B9]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#D89C42]"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-12"
        >
          <Sparkles className="w-4 h-4 text-[#42C0B9]" />
          <span className="text-xs font-medium text-[#114B5F] dark:text-white/60 tracking-[0.2em] uppercase mono">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl sm:text-7xl lg:text-[8rem] font-bold mb-8 tracking-tight"
        >
          <span className="block text-[#114B5F] dark:text-white mb-4">
            {t.hero.title}
          </span>
          <span className="block relative inline-block">
            <span className="relative z-10 text-[#42C0B9]">{t.hero.titleHighlight}</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#42C0B9]/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-[#114B5F]/60 dark:text-white/50 mb-16 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Button
            onClick={() => scrollToSection('#pricing')}
            size="lg"
            className="group relative bg-[#42C0B9] hover:bg-[#42C0B9]/90 text-white px-8 py-6 text-base rounded-none font-medium transition-all"
          >
            <span className="flex items-center gap-2">
              {t.hero.cta}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
            </span>
          </Button>
          
          <Button
            onClick={() => scrollToSection('#how-it-works')}
            size="lg"
            variant="outline"
            className="border-[#114B5F] dark:border-white/20 text-[#114B5F] dark:text-white hover:bg-[#114B5F]/5 dark:hover:bg-white/5 px-8 py-6 text-base rounded-none font-medium transition-all"
          >
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        {/* Stats - Ultra Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          {[
            { value: '190+', label: t.hero.stats.countries },
            { value: '98%', label: t.hero.stats.accuracy },
            { value: '1M+', label: t.hero.stats.reports },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-[#114B5F] dark:text-white mb-2 mono">
                {stat.value}
              </div>
              <div className="text-xs text-[#114B5F]/50 dark:text-white/40 uppercase tracking-[0.2em] mono">
                {stat.label}
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-px bg-[#42C0B9]/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#114B5F]/20 dark:via-[#42C0B9]/30 to-transparent" />
    </section>
  );
}