import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_680e05f48b22dd123802c416/3bb573531_tarifficon.png';

export default function Header() {
  const { language, toggleLanguage, theme, toggleTheme, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.features, id: '#features' },
    { label: t.nav.howItWorks, id: '#how-it-works' },
    { label: t.nav.pricing, id: '#pricing' },
    { label: t.nav.faq, id: '#faq' },
  ];

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#0B2C36]/90 backdrop-blur-xl border-b border-[#114B5F]/10 dark:border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-3 group"
              whileHover={{ x: isRTL ? 5 : -5 }}
            >
              <img src={LOGO_URL} alt="tariff.ai" className="h-8 w-auto" />
              <span className="text-xl font-bold text-[#114B5F] dark:text-white">
                tariff<span className="text-[#42C0B9]">.ai</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-[#114B5F] dark:text-white/80 hover:text-[#42C0B9] dark:hover:text-[#42C0B9] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-[#114B5F] dark:text-white/80 hover:text-[#42C0B9] dark:hover:text-[#42C0B9] transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 text-[#114B5F] dark:text-white/80 hover:text-[#42C0B9] dark:hover:text-[#42C0B9] transition-colors flex items-center gap-1"
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs font-medium mono">{language.toUpperCase()}</span>
              </button>

              {/* CTA */}
              <Button
                onClick={() => scrollToSection('#pricing')}
                className="hidden lg:inline-flex bg-[#42C0B9] hover:bg-[#42C0B9]/90 text-white px-6 py-2 rounded-none font-medium"
              >
                {t.nav.pricing}
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#114B5F] dark:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0B2C36] pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-semibold text-[#114B5F] dark:text-white"
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection('#pricing')}
                className="bg-[#42C0B9] hover:bg-[#42C0B9]/90 text-white px-8 py-6 rounded-none font-medium"
              >
                {t.nav.pricing}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}