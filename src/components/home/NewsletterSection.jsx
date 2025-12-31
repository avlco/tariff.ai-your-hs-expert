import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function NewsletterSection({ theme, language }) {
  const isRTL = language === 'he';
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
      setEmail('');
      setAgreed(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className={`py-24 ${
      theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 lg:p-16 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10'
              : 'bg-gradient-to-br from-slate-100 to-white border border-slate-200'
          }`}
        >
          {/* Background Elements */}
          <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 rounded-full ${
            theme === 'dark' ? 'bg-[#E5A840]/10' : 'bg-[#E5A840]/5'
          } blur-[100px]`} />
          <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-64 h-64 rounded-full ${
            theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
          } blur-[80px]`} />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={isRTL ? 'lg:order-2' : ''}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                theme === 'dark' 
                  ? 'bg-[#E5A840]/20 text-[#E5A840]'
                  : 'bg-[#E5A840]/10 text-[#C28E36]'
              }`}>
                <Sparkles className="w-4 h-4" />
                {language === 'en' ? 'Stay Updated' : 'הישארו מעודכנים'}
              </div>
              
              <h2 className={`text-3xl sm:text-4xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
              }`}>
                {language === 'en' ? 'Join Our Newsletter' : 'הצטרפו לניוזלטר'}
              </h2>
              <p className={`mt-4 text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                {language === 'en' 
                  ? 'Get the latest tariff updates, trade news, and exclusive insights delivered to your inbox'
                  : 'קבלו עדכוני מכס, חדשות סחר ותובנות בלעדיות ישירות למייל'}
              </p>
            </div>

            {/* Form */}
            <div className={isRTL ? 'lg:order-1' : ''}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-slate-400'
                  }`} />
                  <Input
                    type="email"
                    placeholder={language === 'en' ? 'Enter your email' : 'הזינו אימייל'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`h-14 ${isRTL ? 'pr-12' : 'pl-12'} rounded-full text-base ${
                      theme === 'dark' 
                        ? 'bg-[#0F172A] border-white/20 text-white placeholder:text-gray-500 focus:border-[#E5A840]'
                        : 'bg-white border-slate-300 focus:border-[#E5A840]'
                    }`}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="newsletter-agree" 
                    checked={agreed}
                    onCheckedChange={setAgreed}
                    className="mt-0.5 border-[#E5A840] data-[state=checked]:bg-[#E5A840] data-[state=checked]:text-[#0F172A]"
                  />
                  <label htmlFor="newsletter-agree" className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {language === 'en' 
                      ? 'I agree to receive newsletters from tariff.ai'
                      : 'אני מסכים/ה לקבל ניוזלטר מ-tariff.ai'}
                  </label>
                </div>

                <Button 
                  type="submit"
                  disabled={!email || !agreed}
                  className="w-full h-14 rounded-full bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold text-base disabled:opacity-50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E5A840]/25"
                >
                  {submitted 
                    ? (language === 'en' ? 'Subscribed!' : 'נרשמת בהצלחה!')
                    : (language === 'en' ? 'Subscribe' : 'הרשמה')}
                  {!submitted && <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />}
                </Button>

                <p className={`text-xs text-center ${
                  theme === 'dark' ? 'text-gray-500' : 'text-slate-500'
                }`}>
                  {language === 'en' 
                    ? 'We respect your privacy. Unsubscribe anytime.'
                    : 'אנו מכבדים את הפרטיות שלך. בטל את המנוי בכל עת.'}
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}