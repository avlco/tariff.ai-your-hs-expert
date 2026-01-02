import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, SUPPORTED_LANGUAGES } from '../LanguageContext'; // ייבוא המנגנון החדש
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ theme, toggleTheme }) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark' ? 'bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
              tariff<span className="text-[#E5A840]">.ai</span>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* בורר שפות מעודכן לכל 8 השפות */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={theme === 'dark' ? 'text-white' : 'text-slate-700'}>
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={theme === 'dark' ? 'bg-[#1E293B] border-white/10' : ''}>
                {Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => (
                  <DropdownMenuItem 
                    key={code} 
                    onClick={() => setLanguage(code)}
                    className={`cursor-pointer ${language === code ? 'text-[#E5A840] font-bold' : ''}`}
                  >
                    {info.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className={theme === 'dark' ? 'text-white' : 'text-slate-700'}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* CTA Button מתוך התרגום */}
            <a href="https://app.tariff-ai.com" className="hidden sm:block">
              <Button className="bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-bold px-6 rounded-full">
                {t('common.getStarted')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
