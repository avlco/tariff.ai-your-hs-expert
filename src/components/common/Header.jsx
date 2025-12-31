import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ theme, toggleTheme, language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: language === 'en' ? 'Features' : 'יכולות', href: '#features' },
    { label: language === 'en' ? 'How It Works' : 'איך זה עובד', href: '#how-it-works' },
    { label: language === 'en' ? 'Pricing' : 'תמחור', href: '#pricing' },
    { label: language === 'en' ? 'FAQs' : 'שאלות נפוצות', href: '#faqs' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <div className={`text-2xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
            }`}>
              tariff<span className="text-[#E5A840]">.ai</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#E5A840] ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={theme === 'dark' ? 'bg-[#1E293B] border-white/10' : ''}>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={`cursor-pointer ${language === 'en' ? 'text-[#E5A840]' : ''}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('he')}
                  className={`cursor-pointer ${language === 'he' ? 'text-[#E5A840]' : ''}`}
                >
                  עברית
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* CTA Button */}
            <Button
              className="hidden sm:flex bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#E5A840]/25"
            >
              {language === 'en' ? 'Get Started' : 'התחל עכשיו'}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden ${
              theme === 'dark' ? 'bg-[#0F172A]/95' : 'bg-white/95'
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-medium py-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold rounded-full mt-4">
                {language === 'en' ? 'Get Started' : 'התחל עכשיו'}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}