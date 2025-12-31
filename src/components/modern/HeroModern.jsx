import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Globe, ShieldCheck, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

export default function HeroModern() {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B2C36]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#114B5F] blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#42C0B9] blur-[120px] opacity-20" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#D89C42] blur-[100px] opacity-10" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#42C0B9] animate-pulse" />
            <span className="text-sm font-medium text-[#42C0B9] tracking-wide uppercase">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
            {t.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42C0B9] to-[#D89C42]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Button size="lg" className="h-14 px-8 bg-[#42C0B9] hover:bg-[#3ab0a9] text-[#0B2C36] font-bold text-lg rounded-full shadow-[0_0_20px_rgba(66,192,185,0.3)] hover:shadow-[0_0_30px_rgba(66,192,185,0.5)] transition-all">
              {t.hero.cta}
              {isRTL ? <ArrowRight className="mr-2 w-5 h-5 rotate-180" /> : <ArrowRight className="ml-2 w-5 h-5" />}
            </Button>
            
            <Button variant="outline" size="lg" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm">
              <Play className="mr-2 w-5 h-5 fill-current" />
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">190+</div>
              <div className="text-sm text-gray-400">{t.hero.stats.countries}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#42C0B9]">98%</div>
              <div className="text-sm text-gray-400">{t.hero.stats.accuracy}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D89C42]">1M+</div>
              <div className="text-sm text-gray-400">{t.hero.stats.reports}</div>
            </div>
          </div>
        </motion.div>

        {/* Visual Content - Floating Glass Cards */}
        <motion.div 
          style={{ opacity }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Main Card */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-10 left-10 right-10 z-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#42C0B9]/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#42C0B9]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Export Route</div>
                  <div className="font-bold text-white">US to Germany</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#42C0B9]/20 text-[#42C0B9] text-xs font-bold">
                COMPLIANT
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-2 bg-white/10 rounded-full w-3/4" />
              <div className="h-2 bg-white/10 rounded-full w-1/2" />
              <div className="mt-4 p-4 rounded-xl bg-[#0B2C36]/50 border border-white/5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Estimated Duty</span>
                  <span className="text-white font-mono">€1,240.50</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-[#D89C42] h-1.5 rounded-full w-[70%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-20 -right-4 z-10 w-64 bg-[#0B2C36] border border-white/10 rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-8 h-8 text-[#D89C42]" />
              <div className="text-white font-bold leading-tight">HS Code<br/>Verified</div>
            </div>
            <div className="text-xs text-gray-400">
              AI confidence score: <span className="text-[#42C0B9]">98.5%</span>
            </div>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 -left-8 z-30 w-56 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#42C0B9]">
                <Zap className="w-5 h-5 text-[#0B2C36]" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Instant Analysis</div>
                <div className="text-xs text-gray-300">0.4s processing</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}