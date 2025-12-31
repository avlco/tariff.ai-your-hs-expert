import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from '../LanguageContext';
import { base44 } from '@/api/base44Client';

export default function NewsletterSection() {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !consent) {
      setError(isRTL ? 'יש להסכים לקבלת הניוזלטר' : 'Please agree to receive newsletter');
      return;
    }

    try {
      const response = await base44.functions.invoke('subscribeToNewsletter', {
        email,
        is_consented: consent,
        source_page: 'newsletter_section'
      });

      if (response.data.success) {
        setSubmitted(true);
        setEmail('');
        setConsent(false);
        setError('');
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      if (err.response?.data?.already_subscribed) {
        setError(isRTL ? 'כתובת האימייל כבר רשומה' : 'Email already subscribed');
      } else {
        setError(isRTL ? 'שגיאה בהרשמה' : 'Subscription failed');
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-r from-[#114B5F] via-[#0d3a4a] to-[#114B5F] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #42C0B9 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D89C42 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#42C0B9]/20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#D89C42]/20 blur-xl"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#D89C42]" />
          <span className="text-sm font-medium text-white">{t.newsletter.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          {t.newsletter.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/70 mb-8 max-w-xl mx-auto"
        >
          {t.newsletter.subtitle}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className={`absolute top-1/2 ${isRTL ? 'right-4' : 'left-4'} -translate-y-1/2 w-5 h-5 text-[#114B5F]/40`} />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                required
                className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-6 rounded-xl border-0 bg-white text-[#114B5F] placeholder:text-[#114B5F]/40 text-base`}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitted}
              className="px-8 py-6 rounded-xl bg-gradient-to-r from-[#D89C42] to-[#42C0B9] hover:from-[#c88f3a] hover:to-[#3ab0a9] text-white font-medium shadow-lg shadow-[#D89C42]/25 disabled:opacity-50"
            >
              {submitted ? '✓' : (
                <>
                  {t.newsletter.cta}
                  <Send className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </>
              )}
            </Button>
          </div>

          <div className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <input
              type="checkbox"
              id="newsletter-consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 accent-[#D89C42] cursor-pointer"
              required
            />
            <label htmlFor="newsletter-consent" className="text-sm text-white/80 cursor-pointer">
              {isRTL 
                ? 'אני מסכים/ה לקבל ניוזלטרים מ-tariff.ai'
                : 'I agree to receive newsletters from tariff.ai'}
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-300 text-center">{error}</p>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-white/50 mt-4"
        >
          {t.newsletter.privacy}
        </motion.p>
      </div>
    </section>
  );
}