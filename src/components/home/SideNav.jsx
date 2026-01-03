import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function SideNav({ theme }) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: t('nav.home') },
    { id: 'challenges', label: t('challenges.badge') },
    { id: 'about', label: t('nav.about') },
    { id: 'features', label: t('nav.features') },
    { id: 'how-it-works', label: t('nav.howItWorks') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'newsletter', label: t('newsletter.title') },
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'blog', label: t('nav.blog') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="relative">
        <div className={`absolute left-[5px] top-0 bottom-0 w-[2px] ${
          theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'
        }`} />
        
        <motion.div
          className="absolute left-[5px] top-0 w-[2px] bg-[#E5A840]"
          style={{
            height: `${(sections.findIndex(s => s.id === activeSection) + 1) / sections.length * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />

        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3 group"
              >
                <div className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-[#E5A840] scale-125'
                    : theme === 'dark'
                      ? 'bg-white/20 group-hover:bg-white/40'
                      : 'bg-slate-300 group-hover:bg-slate-400'
                }`}>
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 rounded-full bg-[#E5A840] animate-ping"
                      style={{ animationDuration: '1.5s' }}
                    />
                  )}
                </div>
                
                <span className={`text-xs font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-[#E5A840] opacity-100'
                    : theme === 'dark'
                      ? 'text-white/40 opacity-0 group-hover:opacity-100'
                      : 'text-slate-400 opacity-0 group-hover:opacity-100'
                }`}>
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
