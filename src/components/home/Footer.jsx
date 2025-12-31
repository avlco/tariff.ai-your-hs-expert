import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_680e05f48b22dd123802c416/3bb573531_tarifficon.png';

function NewsletterForm() {
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
      const { base44 } = await import('@/api/base44Client');
      const response = await base44.functions.invoke('subscribeToNewsletter', {
        email,
        is_consented: consent,
        source_page: 'footer'
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
    <form onSubmit={handleSubmit} className="relative space-y-3">
      <div className="relative">
        <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-white/40`} />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.newsletter.placeholder}
          required
          className={`${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-5 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:bg-white/20 focus:border-[#42C0B9]`}
        />
      </div>

      <div className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
        <input
          type="checkbox"
          id="footer-consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 accent-[#42C0B9] cursor-pointer"
          required
        />
        <label htmlFor="footer-consent" className="text-xs text-white/60 cursor-pointer">
          {isRTL 
            ? 'אני מסכים/ה לקבל ניוזלטרים מ-tariff.ai'
            : 'I agree to receive newsletters from tariff.ai'}
        </label>
      </div>

      {error && (
        <p className="text-xs text-red-300">{error}</p>
      )}

      <Button
        type="submit"
        disabled={submitted}
        className="w-full bg-gradient-to-r from-[#42C0B9] to-[#114B5F] hover:from-[#3ab0a9] hover:to-[#0d3a4a] text-white py-5 rounded-xl font-medium disabled:opacity-50"
      >
        {submitted ? '✓ ' + (isRTL ? 'נשלח' : 'Sent') : (
          <>
            {t.newsletter.cta}
            <Send className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </>
        )}
      </Button>
    </form>
  );
}

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#114B5F] dark:bg-[#0a1628] overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#42C0B9] to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <motion.a 
              href="#"
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img src={LOGO_URL} alt="tariff.ai" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">
                tariff<span className="text-[#42C0B9]">.ai</span>
              </span>
            </motion.a>
            <p className="text-white/60 mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg bg-white/10 text-white/60 hover:text-[#42C0B9] hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">{t.newsletter.title}</h4>
            <p className="text-white/60 text-sm mb-4">
              {t.newsletter.subtitle}
            </p>
            <NewsletterForm />
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to={createPageUrl('Terms')}
                  className="text-white/60 hover:text-[#42C0B9] transition-colors"
                >
                  {t.footer.links.terms}
                </Link>
              </li>
              <li>
                <Link
                  to={createPageUrl('Privacy')}
                  className="text-white/60 hover:text-[#42C0B9] transition-colors"
                >
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to={createPageUrl('Cookies')}
                  className="text-white/60 hover:text-[#42C0B9] transition-colors"
                >
                  {t.footer.links.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-sm">Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span className="text-white/40 text-sm">for global trade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}