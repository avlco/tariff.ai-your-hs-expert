import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const isRTL = language === 'he';

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using any part of the tariff.ai website, platform, or services (collectively, "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions of this agreement, then you may not access the Service or use any services. These Terms constitute a legally binding agreement between you and tariff.ai. Your continued use of the Service signifies your acceptance of any updated Terms.'
    },
    {
      title: '2. Description of Service',
      content: 'tariff.ai provides AI-powered tariff analysis, trade intelligence, and related services designed to assist businesses with international trade compliance and strategy. The Service includes various features, subscription plans, and usage limits as described on our website and pricing pages. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.'
    },
    {
      title: '3. User Accounts and Responsibilities',
      content: `To access and use certain features of the Service, you must register for a user account. You agree to:
      
• Provide Accurate Information: Maintain accurate, complete, and current registration information.
• Account Security: Keep your username and password confidential and prevent unauthorized access to your account. You are solely responsible for all activities that occur under your account.
• Prohibited Conduct: Not use the Service for any unlawful purpose, or in any way that violates these Terms.
• Age Restriction: Confirm you are at least 18 years of age or the legal age of majority in your jurisdiction.`
    },
    {
      title: '4. Payment Terms and Subscriptions',
      content: `4.1 Subscription Fees: Access to certain features of the Service requires a paid subscription. Subscription fees are billed in advance on a recurring basis (e.g., monthly or annually) as per your chosen plan.

4.2 Automatic Renewal: Subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period.

4.3 Price Changes: We reserve the right to change our subscription fees upon 30 days' prior notice. Your continued use after the price change constitutes your agreement to pay the modified amount.

4.4 Refunds and Cancellations: All subscription fees are non-refundable, except as required by law. You may cancel your subscription at any time, and access will continue until the end of the current billing cycle.`
    },
    {
      title: '5. Use of Service and Prohibited Conduct',
      content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:

• Misuse: Engage in any activity that interferes with or disrupts the Service.
• Unauthorized Access: Attempt to gain unauthorized access to any part of the Service, other accounts, computer systems, or networks.
• Data Scraping: Use any automated system or software to extract data from the Service without express written permission.
• Harmful Content: Transmit any malicious code, viruses, or other harmful data.
• Resale: Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without our express written permission.`
    },
    {
      title: '6. Data Accuracy and Disclaimers',
      content: 'While tariff.ai strives to provide accurate and up-to-date tariff information and trade intelligence, we do not guarantee the accuracy, completeness, or timeliness of any data provided through the Service. The information is for general informational purposes only and does not constitute legal, financial, or professional advice. You are solely responsible for verifying critical information with official sources and for all decisions made based on the Service\'s output.'
    },
    {
      title: '7. Intellectual Property',
      content: 'All content, features, and functionality of tariff.ai are the exclusive property of tariff.ai and its licensors and are protected by international copyright, trademark, patent, and trade secret laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes, subject to these Terms.'
    },
    {
      title: '8. Limitation of Liability',
      content: 'In no event shall tariff.ai, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.'
    },
    {
      title: '9. Termination',
      content: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.'
    },
    {
      title: '10. Governing Law',
      content: 'These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.'
    },
    {
      title: '11. Changes to Terms',
      content: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.'
    },
    {
      title: '12. Miscellaneous',
      content: 'These Terms constitute the entire agreement between you and tariff.ai regarding our Service. Our failure to enforce any right or provision will not be considered a waiver. If any provision is held invalid, the remaining provisions will remain in effect.'
    },
    {
      title: '13. Contact Information',
      content: 'For any questions regarding these Terms of Service, please contact us at info@tariff-ai.com. We will respond to all inquiries within 5 business days.'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header theme={theme} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to={createPageUrl('Home')}
            className={`inline-flex items-center gap-2 mb-8 text-sm font-medium ${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-[#0F172A]'
            } transition-colors`}
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {language === 'en' ? 'Back to Home' : 'חזרה לדף הבית'}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
              {language === 'en' ? 'Terms of Service' : 'תנאי שימוש'}
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              Last updated: December 22, 2025 | Version 1.0
            </p>
            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              This document outlines the legally binding agreement between you and tariff.ai regarding your use of our services.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className={`rounded-2xl p-6 ${
                theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'
              }`}>
                <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                  {section.title}
                </h2>
                <p className={`whitespace-pre-line leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer theme={theme} language={language} />
    </div>
  );
}