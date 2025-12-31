import React from 'react';
import { motion } from 'framer-motion';
import { Package, MapPin, FileText, ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ theme, language }) {
  const isRTL = language === 'he';

  const steps = [
    {
      number: '01',
      icon: Package,
      title: language === 'en' ? 'Describe Your Product' : 'תארו את המוצר',
      description: language === 'en' 
        ? 'Enter your product details or upload an image. Our AI identifies the correct HS code automatically.'
        : 'הזינו פרטי מוצר או העלו תמונה. ה-AI שלנו מזהה את קוד ה-HS הנכון אוטומטית.',
    },
    {
      number: '02',
      icon: MapPin,
      title: language === 'en' ? 'Select Trade Route' : 'בחרו מסלול סחר',
      description: language === 'en' 
        ? "Choose origin and destination countries. We'll factor in all applicable trade agreements."
        : 'בחרו מדינת מוצא ויעד. נביא בחשבון את כל הסכמי הסחר הרלוונטיים.',
    },
    {
      number: '03',
      icon: FileText,
      title: language === 'en' ? 'Get Your Report' : 'קבלו את הדוח',
      description: language === 'en' 
        ? 'Receive a comprehensive breakdown of duties, taxes, and compliance requirements instantly.'
        : 'קבלו פירוט מקיף של מכס, מיסים ודרישות ציות באופן מיידי.',
    },
  ];

  return (
    <section id="how-it-works" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wider uppercase ${
            theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
          }`}>
            {language === 'en' ? 'Process' : 'תהליך'}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {language === 'en' ? 'How It Works' : 'איך זה עובד'}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {language === 'en' 
              ? 'Get accurate tariff insights in three simple steps'
              : 'קבלו תובנות מכס מדויקות בשלושה צעדים פשוטים'}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] ${
            theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'
          }`} style={{ transform: 'translateY(-50%)' }} />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className={`relative rounded-3xl p-8 h-full ${
                  theme === 'dark' 
                    ? 'bg-[#1E293B]/50 border border-white/10'
                    : 'bg-slate-50 border border-slate-200'
                }`}>
                  {/* Number Badge */}
                  <div className={`absolute -top-5 ${isRTL ? 'right-8' : 'left-8'} w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    theme === 'dark' 
                      ? 'bg-[#E5A840] text-[#0F172A]'
                      : 'bg-[#0F172A] text-white'
                  }`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${
                    theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'
                  } mb-6 mt-4`}>
                    <step.icon className="w-8 h-8 text-[#E5A840]" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:flex absolute top-1/2 ${isRTL ? '-left-4' : '-right-4'} transform -translate-y-1/2 z-10`}>
                    <div className={`p-2 rounded-full ${
                      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
                    }`}>
                      <ArrowRight className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'
                      } ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}