import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection({ theme, language }) {
  const isRTL = language === 'he';
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: language === 'en' 
        ? 'tariff.ai saved us over $50,000 in the first quarter by identifying FTA opportunities we had missed.'
        : 'tariff.ai חסך לנו מעל 50,000$ ברבעון הראשון על ידי זיהוי הזדמנויות FTA שהחמצנו.',
      name: 'Sarah Chen',
      role: language === 'en' ? 'Import Manager' : 'מנהלת יבוא',
      company: 'GlobalTech Solutions',
      avatar: 'S',
    },
    {
      quote: language === 'en' 
        ? 'The accuracy and speed are incredible. What used to take our team days now takes minutes.'
        : 'הדיוק והמהירות מדהימים. מה שנהג לקחת לצוות שלנו ימים, עכשיו לוקח דקות.',
      name: 'Michael Torres',
      role: language === 'en' ? 'Trade Compliance Director' : 'מנהל ציות סחר',
      company: 'Atlas Logistics',
      avatar: 'M',
    },
    {
      quote: language === 'en' 
        ? 'Finally, a tool that speaks our language. The reports are clear, actionable, and always up-to-date.'
        : 'סוף סוף, כלי שמדבר בשפה שלנו. הדוחות ברורים, ניתנים ליישום ותמיד עדכניים.',
      name: 'Emma Williams',
      role: 'CEO',
      company: 'ImportHub',
      avatar: 'E',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'
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
            {language === 'en' ? 'Success Stories' : 'סיפורי הצלחה'}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
          }`}>
            {language === 'en' ? 'What Our Clients Say' : 'מה הלקוחות שלנו אומרים'}
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            {language === 'en' 
              ? 'Trusted by importers, exporters, and trade professionals worldwide'
              : 'מהימן על ידי יבואנים, יצואנים ואנשי סחר ברחבי העולם'}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl p-8 md:p-12 ${
                theme === 'dark' 
                  ? 'bg-[#1E293B]/50 border border-white/10'
                  : 'bg-white border border-slate-200 shadow-xl'
              }`}
            >
              {/* Quote Icon */}
              <div className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'}`}>
                <Quote className={`w-12 h-12 ${
                  theme === 'dark' ? 'text-[#E5A840]/30' : 'text-[#E5A840]/20'
                }`} />
              </div>

              {/* Quote */}
              <p className={`text-xl md:text-2xl leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
              }`}>
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${
                  theme === 'dark' 
                    ? 'bg-[#E5A840]/20 text-[#E5A840]'
                    : 'bg-[#E5A840]/10 text-[#C28E36]'
                }`}>
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {testimonials[activeIndex].name}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className={`p-3 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-[#1E293B] hover:bg-[#E5A840] text-white hover:text-[#0F172A]'
                  : 'bg-slate-100 hover:bg-[#E5A840] text-slate-600 hover:text-white'
              }`}
            >
              <ChevronLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'w-8 bg-[#E5A840]'
                      : theme === 'dark' ? 'bg-white/20' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={`p-3 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-[#1E293B] hover:bg-[#E5A840] text-white hover:text-[#0F172A]'
                  : 'bg-slate-100 hover:bg-[#E5A840] text-slate-600 hover:text-white'
              }`}
            >
              <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}