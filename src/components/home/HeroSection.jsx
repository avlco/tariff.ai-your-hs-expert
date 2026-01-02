import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Target, FileText, CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext'; // ייבוא ה-Hook

export default function HeroSection({ theme }) {
  const { t, isRTL } = useLanguage(); // חילוץ ה-Context

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <Badge className="...">
              {t('hero.badge')}
            </Badge>

            <h1 className="...">
              {/* שימוש במפתחות מקובץ ה-JSON */}
              {t('hero.title')} <br />
              <span className="text-[#E5A840]">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="...">
              {t('hero.subtitle')}
            </p>

            <div className={`mt-10 flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="https://app.tariff-ai.com">
                <Button size="lg" className="...">
                  {t('hero.cta')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </a>
              {/* המשך הרכיב... */}
            </div>
          </motion.div>
          {/* ... */}
        </div>
      </div>
    </section>
  );
}
