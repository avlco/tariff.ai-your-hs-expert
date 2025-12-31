import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ArrowLeft, Check, X, Cookie, BarChart, Megaphone } from 'lucide-react';

export default function CookiePolicy() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const isRTL = language === 'he';

  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Essential Cookies',
      subtitle: 'Always Active',
      description: 'These cookies are necessary for the website to function and cannot be disabled. Session management, security, and load balancing.',
      examples: 'session_id, csrf_token, auth_state',
      required: true,
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      subtitle: 'Requires Consent',
      description: 'Help us understand how visitors interact with our website. Page views, user actions, session data, and device info.',
      examples: 'Google Analytics',
      required: false,
    },
    {
      icon: Megaphone,
      title: 'Marketing Cookies',
      subtitle: 'Requires Consent',
      description: 'Used to deliver relevant advertisements and measure campaign effectiveness. Currently not active on tariff.ai.',
      examples: 'Facebook Pixel, Google Ads',
      required: false,
    },
  ];

  const disableAllImpact = [
    { text: 'Cannot stay logged in', allowed: false },
    { text: "Settings and preferences won't be saved", allowed: false },
    { text: 'Some features may not work', allowed: false },
    { text: "You'll need to set preferences on every visit", allowed: false },
  ];

  const disableNonEssentialImpact = [
    { text: 'Website will function normally', allowed: true },
    { text: "You'll stay logged in", allowed: true },
    { text: "We won't be able to improve the site based on usage data", allowed: false },
    { text: 'You may see less relevant content', allowed: false },
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
              {language === 'en' ? 'Cookie Policy' : 'מדיניות עוגיות'}
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              Last updated: December 22, 2025 | Version 1.0
            </p>
            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              Understanding how we use cookies and similar technologies on tariff.ai
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* What Are Cookies */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>1. What Are Cookies</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember your preferences, understand how you use them, and provide a better user experience.
              </p>
              <div className={`mt-4 p-4 rounded-xl ${theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-white'}`}>
                <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Key Characteristics:</h3>
                <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  <li>Text files (not programs or viruses)</li>
                  <li>Store information about your visit</li>
                  <li>Can be deleted or blocked at any time</li>
                  <li>Come in different types with different purposes</li>
                </ul>
              </div>
            </section>

            {/* Types of Cookies */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3. Types of Cookies We Use</h2>
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className={`p-5 rounded-xl ${theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-white'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'}`}>
                        <cookie.icon className="w-6 h-6 text-[#E5A840]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                            {cookie.title}
                          </h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            cookie.required 
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {cookie.subtitle}
                          </span>
                        </div>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                          {cookie.description}
                        </p>
                        <p className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
                          Examples: {cookie.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact of Disabling */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>8. Disabling Cookies - Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-5 rounded-xl ${theme === 'dark' ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
                  <h3 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    If You Disable All Cookies:
                  </h3>
                  <div className="space-y-2">
                    {disableAllImpact.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-5 rounded-xl ${theme === 'dark' ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
                  <h3 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    If You Disable Only Non-Essential:
                  </h3>
                  <div className="space-y-2">
                    {disableNonEssentialImpact.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {item.allowed ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <strong>Recommendation:</strong> Keep essential cookies enabled, customize analytics/marketing based on your privacy preferences.
              </p>
            </section>

            {/* Managing Preferences */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>7. Managing Your Cookie Preferences</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                When you first visit tariff.ai, you'll see a cookie consent banner allowing you to:
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Accept all cookies</li>
                <li>Accept only essential cookies</li>
                <li>Customize your preferences (choose which categories to allow)</li>
              </ul>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Your preferences are saved and can be changed at any time.
              </p>
            </section>

            {/* Contact */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>14. Contact Us</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                If you have questions about our use of cookies:
              </p>
              <div className={`mt-4 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                <p><strong>Email:</strong> info@tariff-ai.com</p>
                <p><strong>Subject Line:</strong> "Cookie Policy Inquiry"</p>
              </div>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                We respond to all cookie-related inquiries within 48 hours.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer theme={theme} language={language} />
    </div>
  );
}