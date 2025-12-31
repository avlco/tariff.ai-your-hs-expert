import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/home/Header';
import SideNav from '../components/home/SideNav';
import ScrollToTop from '../components/home/ScrollToTop';
import CookieConsent from '../components/CookieConsent';
import AnalyticsTracker from '../components/AnalyticsTracker';
import HeroModern from '../components/modern/HeroModern';
import FeaturesModern from '../components/modern/FeaturesModern';
import HowItWorksModern from '../components/modern/HowItWorksModern';
import PricingModern from '../components/modern/PricingModern';
import ProblemSection from '../components/home/ProblemSection';
import AboutSection from '../components/home/AboutSection';
import NewsletterSection from '../components/home/NewsletterSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0B2C36] transition-colors duration-300">
        <Header />
        <SideNav />
        <ScrollToTop />
        <AnalyticsTracker />
        <main>
          <HeroModern />
          <ProblemSection />
          <AboutSection />
          <FeaturesModern />
          <HowItWorksModern />
          <PricingModern />
          <NewsletterSection />
          <TestimonialsSection />
          <FAQSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}