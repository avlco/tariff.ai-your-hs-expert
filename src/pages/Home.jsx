import React, { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer'; // שינוי: שימוש בפוטר המעוצב
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

export default function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'}`}>
      <Header theme={theme} language={language} />
      <SideNav theme={theme} />
      <main>
        <HeroSection theme={theme} language={language} />
        <ChallengesSection theme={theme} language={language} />
        <AboutSection theme={theme} language={language} />
        <FeaturesSection theme={theme} language={language} />
        <HowItWorksSection theme={theme} language={language} />
        <PricingSection theme={theme} language={language} />
        <NewsletterSection theme={theme} language={language} />
        <TestimonialsSection theme={theme} language={language} />
        <FAQSection theme={theme} language={language} />
        <BlogSection theme={theme} language={language} />
        <ContactSection theme={theme} language={language} />
      </main>
      <Footer theme={theme} language={language} /> {/* שינוי: שמירה על פוטר יחיד */}
      <CookieBanner theme={theme} language={language} />
    </div>
  );
}
