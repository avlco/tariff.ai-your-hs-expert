import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ArrowLeft, Check, X, Info } from 'lucide-react';

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
            
            {/* 1. What Are Cookies */}
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

            {/* 2. How We Use Cookies */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2. How We Use Cookies</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                tariff.ai uses cookies for the following purposes:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Essential Functions:</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Maintain your logged-in session</li>
                    <li>Remember your language and theme preferences</li>
                    <li>Secure your connection to our services</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Analytics & Performance:</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Understand which pages are most popular</li>
                    <li>Analyze user behavior to improve our service</li>
                    <li>Track technical errors and bugs</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>User Experience:</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Remember your cookie consent preferences</li>
                    <li>Personalize content based on your interests</li>
                    <li>Optimize site performance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Types of Cookies We Use */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3.1 Essential Cookies (Always Active)</h3>
                  <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>These cookies are necessary for the website to function and cannot be disabled.</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li><strong>Session Management:</strong> Keeps you logged in as you navigate</li>
                    <li><strong>Security:</strong> Protects against CSRF and other attacks</li>
                    <li><strong>Load Balancing:</strong> Distributes traffic across servers</li>
                  </ul>
                  <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Examples: session_id, csrf_token, auth_state</p>
                </div>

                <div>
                  <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3.2 Analytics Cookies (Requires Consent)</h3>
                  <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Help us understand how visitors interact with our website.</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li><strong>Page Views:</strong> Track which pages are visited (PageView entity)</li>
                    <li><strong>User Actions:</strong> Monitor clicks, form submissions, scrolling (UserAction entity)</li>
                    <li><strong>Session Data:</strong> Analyze user journey and engagement</li>
                    <li><strong>Device Info:</strong> Browser type, OS, screen resolution, language</li>
                  </ul>
                  <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Examples: Google Analytics</p>
                </div>

                <div>
                  <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3.3 Marketing Cookies (Requires Consent)</h3>
                  <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Used to deliver relevant advertisements and measure campaign effectiveness.</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li><strong>Ad Targeting:</strong> Show relevant ads based on interests</li>
                    <li><strong>Conversion Tracking:</strong> Measure effectiveness of campaigns</li>
                    <li><strong>Retargeting:</strong> Display ads to previous visitors</li>
                  </ul>
                  <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Examples: Facebook Pixel, Google Ads</p>
                  <p className={`mt-2 text-sm italic ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Note: Marketing cookies are currently not active on tariff.ai</p>
                </div>
              </div>
            </section>

            {/* 4. Cookie Duration */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>4. Cookie Duration</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Session Cookies (Temporary)</h3>
                  <p className={`mb-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>These cookies expire when you close your browser.</p>
                  <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li><strong>Duration:</strong> Until browser closes</li>
                    <li><strong>Purpose:</strong> Maintain active session, navigation state</li>
                    <li><strong>Examples:</strong> PHPSESSID, session_token</li>
                    <li><strong>Storage:</strong> Browser memory only</li>
                  </ul>
                </div>

                <div>
                  <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Persistent Cookies (Long-term)</h3>
                  <p className={`mb-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>These cookies remain on your device for a specified period.</p>
                  <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li><strong>Short-term:</strong> 24 hours to 30 days (analytics)</li>
                    <li><strong>Medium-term:</strong> 30 days to 1 year (preferences)</li>
                    <li><strong>Long-term:</strong> 1-2 years (consent records)</li>
                  </ul>
                  <div className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
                    <p>Examples:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Cookie Consent: 1 year</li>
                      <li>Analytics Session: 12 months</li>
                      <li>Language Preference: 6 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Cookies We Use - Detailed List */}
            <section className={`rounded-2xl p-6 overflow-hidden ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>5. Cookies We Use - Detailed List</h2>
              
              <div className="space-y-6 overflow-x-auto">
                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Essential Cookies:</h3>
                  <table className={`w-full text-sm text-left ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <thead className={`text-xs uppercase ${theme === 'dark' ? 'bg-[#0F172A] text-gray-300' : 'bg-slate-200 text-slate-700'}`}>
                      <tr>
                        <th className="px-4 py-3 rounded-tl-lg">Cookie Name</th>
                        <th className="px-4 py-3">Purpose</th>
                        <th className="px-4 py-3">Duration</th>
                        <th className="px-4 py-3 rounded-tr-lg">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={theme === 'dark' ? 'border-b border-white/5' : 'border-b border-slate-200'}>
                        <td className="px-4 py-3 font-medium">session_id</td>
                        <td className="px-4 py-3">User session management</td>
                        <td className="px-4 py-3">Session</td>
                        <td className="px-4 py-3">First-party</td>
                      </tr>
                      <tr className={theme === 'dark' ? 'border-b border-white/5' : 'border-b border-slate-200'}>
                        <td className="px-4 py-3 font-medium">analytics_session_id</td>
                        <td className="px-4 py-3">Analytics tracking ID</td>
                        <td className="px-4 py-3">12 months</td>
                        <td className="px-4 py-3">First-party</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">cookie_consent</td>
                        <td className="px-4 py-3">Stores consent preferences</td>
                        <td className="px-4 py-3">1 year</td>
                        <td className="px-4 py-3">First-party</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Analytics Cookies (with consent):</h3>
                  <table className={`w-full text-sm text-left ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <thead className={`text-xs uppercase ${theme === 'dark' ? 'bg-[#0F172A] text-gray-300' : 'bg-slate-200 text-slate-700'}`}>
                      <tr>
                        <th className="px-4 py-3 rounded-tl-lg">Cookie Name</th>
                        <th className="px-4 py-3">Purpose</th>
                        <th className="px-4 py-3">Duration</th>
                        <th className="px-4 py-3 rounded-tr-lg">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={theme === 'dark' ? 'border-b border-white/5' : 'border-b border-slate-200'}>
                        <td className="px-4 py-3 font-medium">Page tracking</td>
                        <td className="px-4 py-3">Records page views</td>
                        <td className="px-4 py-3">12 months</td>
                        <td className="px-4 py-3">First-party</td>
                      </tr>
                      <tr className={theme === 'dark' ? 'border-b border-white/5' : 'border-b border-slate-200'}>
                        <td className="px-4 py-3 font-medium">Action tracking</td>
                        <td className="px-4 py-3">Records user interactions</td>
                        <td className="px-4 py-3">12 months</td>
                        <td className="px-4 py-3">First-party</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Session data</td>
                        <td className="px-4 py-3">Tracks user sessions</td>
                        <td className="px-4 py-3">30 minutes</td>
                        <td className="px-4 py-3">First-party</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 6. Third-Party Cookies */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>6. Third-Party Cookies</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Currently, tariff.ai minimizes the use of third-party cookies. However, we may use:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Base44 Platform (Infrastructure Provider):</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Essential for application functionality</li>
                    <li>Secure data processing</li>
                    <li>Covered by our Data Processing Agreement (DPA)</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Future Third-Party Services:</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>If we integrate additional third-party services (analytics, payment processors, etc.), we will:</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Update this policy with details</li>
                    <li>Request your consent where required</li>
                    <li>Provide opt-out mechanisms</li>
                    <li>Ensure GDPR/LGPD compliance</li>
                  </ul>
                </div>
                <p className={`text-sm italic ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  Note: We do NOT use third-party advertising networks or social media tracking pixels.
                </p>
              </div>
            </section>

            {/* 7. Managing Your Cookie Preferences */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>7. Managing Your Cookie Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>7.1 Through Our Cookie Banner:</h3>
                  <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>When you first visit tariff.ai, you'll see a cookie consent banner allowing you to:</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-2 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Accept all cookies</li>
                    <li>Accept only essential cookies</li>
                    <li>Customize your preferences (choose which categories to allow)</li>
                  </ul>
                  <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Your preferences are saved and can be changed at any time.</p>
                </div>

                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>7.2 Through Your Browser:</h3>
                  <p className={`mt-1 mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>All modern browsers allow you to control cookies:</p>
                  <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data (Choose: Allow all, Block third-party, or Block all)</li>
                    <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data (Choose standard, strict, or custom blocking)</li>
                    <li><strong>Safari (Mac/iOS):</strong> Preferences → Privacy → Cookies and website data (Block all cookies or allow from current website only)</li>
                    <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage cookies (Choose blocking level)</li>
                  </ul>
                  <p className={`mt-3 font-medium text-sm text-red-500`}>Important: Blocking essential cookies will prevent the site from functioning properly.</p>
                </div>
              </div>
            </section>

            {/* 8. Disabling Cookies - Impact */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>8. Disabling Cookies - Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-5 rounded-xl ${theme === 'dark' ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
                  <h3 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    If You Disable All Cookies:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Cannot stay logged in</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Settings and preferences won't be saved</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Some features may not work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>You'll need to set preferences on every visit</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-5 rounded-xl ${theme === 'dark' ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
                  <h3 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                    If You Disable Only Non-Essential Cookies:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>Website will function normally</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>You'll stay logged in</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>We won't be able to improve the site based on usage data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>You may see less relevant content</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <strong>Recommendation:</strong> Keep essential cookies enabled, customize analytics/marketing based on your privacy preferences.
              </p>
            </section>

            {/* 9. Do Not Track (DNT) */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>9. Do Not Track (DNT)</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Some browsers offer a "Do Not Track" (DNT) signal that indicates you don't want to be tracked.
              </p>
              <div className={`mt-4 p-4 rounded-xl ${theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-white'}`}>
                <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Our Approach:</h3>
                <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  <li>We honor your cookie consent choices through our banner</li>
                  <li>DNT signals are not universally standardized</li>
                  <li>Your explicit cookie preferences take precedence</li>
                  <li>We provide granular control through our cookie settings</li>
                </ul>
              </div>
              <p className={`mt-4 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                Best Practice: Use our cookie consent banner for precise control over tracking.
              </p>
            </section>

            {/* 10. Data Collected Through Cookies */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>10. Data Collected Through Cookies</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>The data collected through cookies includes:</p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Device Information:</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>IP address (anonymized after 90 days)</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Device type (mobile, tablet, desktop)</li>
                    <li>Screen resolution</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Usage Information:</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Pages visited and time spent</li>
                    <li>Click patterns and interactions</li>
                    <li>Referrer URL</li>
                    <li>Session duration</li>
                    <li>Scroll depth</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Technical Information:</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Language preference</li>
                    <li>Timezone</li>
                    <li>Connection type</li>
                    <li>Viewport size</li>
                  </ul>
                </div>
              </div>
              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                All data is processed in accordance with our Privacy Policy and GDPR/LGPD requirements.
              </p>
            </section>

            {/* 11. Your Rights */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>11. Your Rights (GDPR & LGPD)</h2>
              <div className="space-y-2">
                {[
                  'Be Informed: This Cookie Policy explains our practices',
                  'Give or Withdraw Consent: Control which cookies are used',
                  'Access Your Data: Request information about cookies stored',
                  'Delete Data: Request deletion of cookie data',
                  'Object to Processing: Opt out of non-essential cookies'
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E5A840] flex-shrink-0 mt-0.5" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}>{right}</span>
                  </div>
                ))}
              </div>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                To exercise these rights, visit our <Link to={createPageUrl('PrivacyPolicy')} className="text-[#E5A840] hover:underline">Privacy Policy</Link> page or contact info@tariff-ai.com
              </p>
            </section>

            {/* 12. International Users */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>12. International Users</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>For EU Users (GDPR):</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>We obtain explicit consent before non-essential cookies</li>
                    <li>You can withdraw consent at any time</li>
                    <li>Data transfers comply with Standard Contractual Clauses (SCCs)</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>For Brazilian Users (LGPD):</h3>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>We obtain consent for non-essential cookies</li>
                    <li>You have the right to revoke consent</li>
                    <li>Data processing complies with LGPD requirements</li>
                  </ul>
                </div>
              </div>
              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                For All Users: Cookie data is subject to the same protections as other personal data under our Privacy Policy.
              </p>
            </section>

            {/* 13. Updates to This Cookie Policy */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>13. Updates to This Cookie Policy</h2>
              <div className="space-y-4">
                <div>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We may update this Cookie Policy to reflect:</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>Changes in technology or cookie usage</li>
                    <li>New features or services</li>
                    <li>Legal or regulatory requirements</li>
                    <li>User feedback and best practices</li>
                  </ul>
                </div>
                <div>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>When We Update:</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} mt-1 space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    <li>The "Last Updated" date will change</li>
                    <li>Material changes will be highlighted</li>
                    <li>You may be asked to review and accept new terms</li>
                    <li>Previous versions will be archived</li>
                  </ul>
                </div>
              </div>
              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Staying Informed: Review this policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            {/* 14. Contact Us */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>14. Contact Us</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                If you have questions about our use of cookies:
              </p>
              <div className={`mt-4 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                <p><strong>Email:</strong> info@tariff-ai.com</p>
                <p><strong>Subject Line:</strong> "Cookie Policy Inquiry"</p>
                <div className="mt-2">
                  <p className="font-semibold mb-1">What to Include:</p>
                  <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 text-sm`}>
                    <li>Your question or concern</li>
                    <li>Browser and device information (if technical issue)</li>
                    <li>Screenshots (if helpful)</li>
                  </ul>
                </div>
                <p className="mt-4">We respond to all cookie-related inquiries within 48 hours.</p>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                  <p className="font-semibold mb-2">For GDPR/LGPD-specific inquiries:</p>
                  <p>EU: info@tariff-ai.com</p>
                  <p>Brazil: info@tariff-ai.com</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer theme={theme} language={language} />
    </div>
  );
}