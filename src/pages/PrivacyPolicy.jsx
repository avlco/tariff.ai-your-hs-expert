import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ArrowLeft, Check } from 'lucide-react';

export default function PrivacyPolicy() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const isRTL = language === 'he';

  const rights = [
    'Be Informed: This Cookie Policy explains our practices',
    'Give or Withdraw Consent: Control which cookies are used',
    'Access Your Data: Request information about cookies stored',
    'Delete Data: Request deletion of cookie data',
    'Object to Processing: Opt out of non-essential cookies',
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
              {language === 'en' ? 'Privacy Policy' : 'מדיניות פרטיות'}
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              Last updated: December 22, 2025 | Version 1.0
            </p>
            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              Your privacy is our priority. This policy explains how we collect, use, protect, and handle your personal data in compliance with GDPR and LGPD.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Data Controller */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>1. Data Controller</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                tariff.ai ("we", "our", "us") is the data controller responsible for your personal information. You can contact us at:
              </p>
              <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                Email: info@tariff-ai.com<br />
                Address: tariff.ai Privacy Team, San Francisco, CA
              </p>
            </section>

            {/* Information We Collect */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2. Information We Collect</h2>
              
              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2.1 Information You Provide:</h3>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Account Information: Full name, email address, company name</li>
                <li>Newsletter Subscriptions: Email address, consent timestamp</li>
                <li>Contact Forms: Name, email, company, subject, message</li>
              </ul>

              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2.2 Information Collected Automatically:</h3>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Analytics Data: Page views, page URLs, referrer URLs, session IDs</li>
                <li>Device Information: IP address (anonymized after 90 days), browser type, operating system</li>
                <li>Location Data: Country and city (derived from IP address)</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3. Legal Basis for Processing</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Under GDPR and LGPD, we process your personal data based on:
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Consent:</strong> Newsletter subscriptions, analytics cookies, marketing communications</li>
                <li><strong>Contractual Necessity:</strong> Account management and service delivery</li>
                <li><strong>Legitimate Interests:</strong> Site security, fraud prevention, product improvements</li>
                <li><strong>Legal Obligations:</strong> Compliance with tax, accounting, and other legal requirements</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>9. Your Rights (GDPR & LGPD)</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                You have the following rights regarding your personal data:
              </p>
              <div className="space-y-2">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E5A840] flex-shrink-0 mt-0.5" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}>{right}</span>
                  </div>
                ))}
              </div>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                To exercise these rights, contact info@tariff-ai.com
              </p>
            </section>

            {/* Data Security */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>8. Data Security</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                We implement industry-standard security measures:
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Encryption: Data encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
                <li>Access Control: Role-based access, principle of least privilege</li>
                <li>Authentication: Multi-factor authentication for administrative access</li>
                <li>Monitoring: 24/7 security monitoring and incident response</li>
                <li>Regular Audits: Periodic security assessments and penetration testing</li>
              </ul>
            </section>

            {/* Contact */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>15. Contact & Data Protection Officer</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                For any privacy-related questions or to exercise your rights:
              </p>
              <div className={`mt-4 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                <p><strong>General Inquiries:</strong> info@tariff-ai.com</p>
                <p><strong>EU GDPR Inquiries:</strong> info@tariff-ai.com</p>
                <p><strong>Brazil LGPD Inquiries:</strong> info@tariff-ai.com</p>
                <p><strong>Mailing Address:</strong> tariff.ai Privacy Team, San Francisco, CA</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer theme={theme} language={language} />
    </div>
  );
}