import React, { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SideNav from '@/components/common/SideNav';
import CookieBanner from '@/components/common/CookieBanner';
import HeroSection from '@/components/home/HeroSection';
import ChallengesSection from '@/components/home/ChallengesSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import PricingSection from '@/components/home/PricingSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';
import { useLanguage } from '@/components/LanguageContext'; // ייבוא המנגנון

export default function Home() {
  const { isRTL } = useLanguage(); // שליחת ה-Context
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    // הוספת ה-dirAttribute כדי שהאתר יתהפך פיזית
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SideNav theme={theme} />
      
      <main>
        {/* לא מעבירים Props של שפה, הרכיבים ימשכו זאת מה-Context בעצמם */}
        <HeroSection theme={theme} />
        <ChallengesSection theme={theme} />
        <AboutSection theme={theme} />
        <FeaturesSection theme={theme} />
        <HowItWorksSection theme={theme} />
        <PricingSection theme={theme} />
        <NewsletterSection theme={theme} />
        <TestimonialsSection theme={theme} />
        <FAQSection theme={theme} />
        <BlogSection theme={theme} />
        <ContactSection theme={theme} />
      </main>

      <Footer theme={theme} />
      <CookieBanner theme={theme} />
    </div>
  );
}
