import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Target, FileText, CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext'; // שינוי: ייבוא

export default function HeroSection({ theme }) {
  const { t, isRTL } = useLanguage(); // שינוי: שימוש ב-Context

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Elements - ללא שינוי */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className={`absolute top-20 ${isRTL ? 'left-20' : 'right-20'} w-[600px] h-[600px] rounded-full ${
          theme === 'dark' ? 'bg-[#E5A840]/10' : 'bg-[#E5A840]/5'
        } blur-[120px]`} />
        <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-[500px] h-[500px] rounded-full ${
          theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
        } blur-[100px]`} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className={`mb-6 px-4 py-2 rounded-full text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-[#E5A840]/20 text-[#E5A840] border border-[#E5A840]/30'
                  : 'bg-[#E5A840]/10 text-[#C28E36] border border-[#E5A840]/20'
              }`}>
                {t('hero.badge')}
              </Badge>
            </motion.div>

            {/* Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
            }`}>
              {t('hero.title')}<br />
              <span className="text-[#E5A840]">{t('hero.titleHighlight')}</span>
            </h1>

            {/* Description */}
            <p className={`mt-6 text-lg lg:text-xl leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
            }`}>
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className={`mt-10 flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="https://app.tariff-ai.com">
                <Button 
                  size="lg"
                  className="bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold px-8 rounded-full h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#E5A840]/25"
                >
                  {t('hero.cta')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </a>
              <Button 
                variant="outline"
                size="lg"
                className={`px-8 rounded-full h-14 text-base font-medium ${
                  theme === 'dark' 
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Play className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            {/* Stats */}
            <div className={`mt-12 flex flex-wrap gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                { value: '190+', label: t('hero.stats.countries') },
                { value: '98%', label: t('hero.stats.accuracy') },
                { value: '1M+', label: t('hero.stats.reports') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`text-${isRTL ? 'right' : 'left'}`}
                >
                  <div className={`text-3xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview (נשאר זהה לחלוטין) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`relative ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className={`relative rounded-3xl p-6 lg:p-8 ${
              theme === 'dark' 
                ? 'bg-[#1E293B]/80 backdrop-blur-xl border border-white/10'
                : 'bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl'
            }`}>
              {/* תוכן הכרטיס הסטטי נשאר כרגע באנגלית כדי לא לשבור את העיצוב */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Export Route</p>
                  <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>US to Germany</p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="w-3 h-3 mr-1" /> COMPLIANT
                </Badge>
              </div>

              <div className={`p-4 rounded-2xl mb-4 ${theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-slate-50'}`}>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Estimated Duty</p>
                <p className={`text-3xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>€1,240.50</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'}`}>
                    <FileText className="w-4 h-4 text-[#E5A840]" />
                  </div>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>HS Code</span>
                </div>
                <Badge className={`${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>Verified</Badge>
              </div>

              <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <Target className="w-4 h-4 text-[#E5A840]" />
                <span>AI confidence score:</span>
                <span className="font-semibold text-[#E5A840]">98.5%</span>
              </div>

              <div className="absolute -bottom-4 -right-4">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-[#E5A840] text-[#0F172A]' : 'bg-[#0F172A] text-white'} shadow-lg`}>
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Instant Analysis</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className={`absolute -top-6 ${isRTL ? '-right-6' : '-left-6'} px-4 py-2 rounded-2xl ${theme === 'dark' ? 'bg-[#1E293B] border border-white/10' : 'bg-white border border-slate-200 shadow-lg'}`}
            >
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#E5A840]" />
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>0.4s processing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
