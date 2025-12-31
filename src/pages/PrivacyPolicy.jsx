import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import DataRequestForm from '@/components/DataRequestForm';
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
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* 1. Data Controller */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>1. Data Controller</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                tariff.ai ("we", "our", "us") is the data controller responsible for your personal information. You can contact us at:
              </p>
              <div className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                <p>Email: info@tariff-ai.com</p>
                <p>Address: tariff.ai Privacy Team, San Francisco, CA</p>
                <p className="mt-2">For GDPR-related inquiries, our EU representative can be contacted at info@tariff-ai.com</p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2. Information We Collect</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We collect the following types of personal data:</p>
              
              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2.1 Information You Provide:</h3>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Account Information:</strong> Full name, email address, company name</li>
                <li><strong>Newsletter Subscriptions:</strong> Email address, consent timestamp</li>
                <li><strong>Contact Forms:</strong> Name, email, company, subject, message</li>
              </ul>

              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2.2 Information Collected Automatically:</h3>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Analytics Data:</strong> Page views, page URLs, referrer URLs, session IDs</li>
                <li><strong>Device Information:</strong> IP address (anonymized after 90 days), browser type, operating system, device type, screen resolution</li>
                <li><strong>Location Data:</strong> Country and city (derived from IP address)</li>
                <li><strong>Interaction Data:</strong> Clicks, form submissions, scroll depth, element interactions, viewport size</li>
                <li><strong>Technical Data:</strong> User agent, language preferences, timezone</li>
              </ul>

              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>2.3 Cookies and Tracking:</h3>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Essential Cookies:</strong> Session management (necessary for functionality)</li>
                <li><strong>Analytics Cookies:</strong> Usage patterns and site performance (requires consent)</li>
                <li><strong>Marketing Cookies:</strong> User preferences for marketing communications (requires consent)</li>
              </ul>
              <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>For detailed cookie information, see our Cookie Policy.</p>
            </section>

            {/* 3. Legal Basis */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>3. Legal Basis for Processing</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Under GDPR and LGPD, we process your personal data based on:
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Consent:</strong> Newsletter subscriptions, analytics cookies, marketing communications (you may withdraw consent at any time)</li>
                <li><strong>Contractual Necessity:</strong> Account management and service delivery</li>
                <li><strong>Legitimate Interests:</strong> Site security, fraud prevention, product improvements (balanced against your privacy rights)</li>
                <li><strong>Legal Obligations:</strong> Compliance with tax, accounting, and other legal requirements</li>
              </ul>
            </section>

            {/* 4. How We Use Your Information */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>4. How We Use Your Information</h2>
              <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We use your personal data for the following purposes:</p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Service Delivery:</strong> Provide tariff analysis reports, maintain your account, process transactions</li>
                <li><strong>Communication:</strong> Respond to inquiries, send service updates, deliver newsletters (with consent)</li>
                <li><strong>Analytics & Improvement:</strong> Understand usage patterns, optimize user experience, develop new features</li>
                <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
                <li><strong>Compliance:</strong> Meet legal and regulatory obligations</li>
              </ul>
              <div className={`mt-4 p-4 rounded-xl ${theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-white/50'}`}>
                <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>We do NOT:</p>
                <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  <li>Sell your personal data to third parties</li>
                  <li>Use your data for automated decision-making that significantly affects you</li>
                  <li>Process sensitive personal data (health, biometric, political opinions) without explicit consent</li>
                </ul>
              </div>
            </section>

            {/* 5. Information Sharing */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>5. Information Sharing and Third Parties</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We share your personal data only in the following circumstances:</p>
              
              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>5.1 Service Providers:</h3>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Base44 Platform:</strong> Infrastructure and database hosting</li>
                <li><strong>Email Service Providers:</strong> Transactional and marketing emails</li>
                <li><strong>Payment Processors:</strong> Secure payment handling (we don't store payment card details)</li>
              </ul>
              <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>All service providers are bound by Data Processing Agreements (DPAs) and process data only as instructed.</p>

              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>5.2 Legal Requirements:</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We may disclose your data if required by law, court order, or to protect our legal rights.</p>

              <h3 className={`font-semibold mt-4 mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>5.3 Business Transfers:</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>In the event of a merger or acquisition, your data may be transferred to the new entity, subject to the same privacy protections.</p>
              
              <p className={`mt-4 font-semibold ${theme === 'dark' ? 'text-[#E5A840]' : 'text-[#C28E36]'}`}>We do NOT sell, rent, or trade your personal data.</p>
            </section>

            {/* 6. International Data Transfers */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>6. International Data Transfers</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Your data may be transferred to and processed in countries outside your residence, including the United States.
              </p>
              <div className="mt-4 space-y-3">
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}><strong>For EU users:</strong> We ensure adequate protection through:</p>
                <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                  <li>Adequacy decisions where applicable</li>
                </ul>
                <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}><strong>For Brazilian users (LGPD):</strong> We comply with cross-border transfer requirements and implement appropriate safeguards.</p>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>7. Data Retention</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We retain your personal data only as long as necessary:</p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Account Data:</strong> Duration of account + 90 days after closure</li>
                <li><strong>Analytics Data:</strong> 12 months from collection</li>
                <li><strong>Newsletter Subscriptions:</strong> Until you unsubscribe + 30 days</li>
                <li><strong>Contact Form Submissions:</strong> 24 months after last interaction</li>
                <li><strong>Consent Records:</strong> 3 years (for compliance proof)</li>
                <li><strong>Financial Records:</strong> 7 years (legal requirement)</li>
              </ul>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>After retention periods expire, data is permanently deleted or anonymized.</p>
            </section>

            {/* 8. Data Security */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>8. Data Security</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                We implement industry-standard security measures:
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li><strong>Encryption:</strong> Data encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
                <li><strong>Access Control:</strong> Role-based access, principle of least privilege</li>
                <li><strong>Authentication:</strong> Multi-factor authentication for administrative access</li>
                <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and penetration testing</li>
              </ul>
              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>While we take every reasonable precaution, no system is 100% secure. We will notify you of any data breaches as required by law.</p>
            </section>

            {/* 9. Your Rights */}
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
                To exercise these rights, use the Data Request Form below or contact info@tariff-ai.com
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>10. Children's Privacy</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children. If we discover we have collected data from a child, we will delete it immediately. Parents or guardians who believe we may have collected data from a child should contact us at info@tariff-ai.com
              </p>
            </section>

            {/* 11. Automated Decision-Making */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>11. Automated Decision-Making</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                We do not use automated decision-making or profiling that produces legal or similarly significant effects on you. Any analytics or personalization features are used solely to improve user experience and can be opted out of via cookie preferences.
              </p>
            </section>

            {/* 12. Marketing Communications */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>12. Marketing Communications</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>With your consent, we may send you:</p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Product updates and new features</li>
                <li>Industry insights and educational content</li>
                <li>Special offers and promotions</li>
              </ul>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>You can opt out at any time by:</p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Clicking "unsubscribe" in any email</li>
                <li>Updating your account preferences</li>
                <li>Contacting info@tariff-ai.com</li>
              </ul>
            </section>

            {/* 13. Data Breach Notification */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>13. Data Breach Notification</h2>
              <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>In the event of a data breach that poses a risk to your rights and freedoms, we will:</p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Notify the relevant supervisory authority within 72 hours (GDPR) or as required by LGPD</li>
                <li>Inform affected individuals without undue delay</li>
                <li>Provide information about the nature of the breach and remedial actions</li>
                <li>Document all breaches for regulatory compliance</li>
              </ul>
            </section>

            {/* 14. Changes to This Policy */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>14. Changes to This Policy</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will:</p>
              <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                <li>Post the updated policy on this page</li>
                <li>Update the "Last Updated" date</li>
                <li>Notify you of material changes via email or prominent notice</li>
                <li>Obtain fresh consent where required by law</li>
              </ul>
              <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            {/* 15. Contact */}
            <section className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'}`}>
              <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>15. Contact & Data Protection Officer</h2>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                For any privacy-related questions or to exercise your rights:
              </p>
              <div className={`mt-4 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                <p><strong>General Inquiries:</strong> Email: info@tariff-ai.com</p>
                <p><strong>EU GDPR Inquiries:</strong> EU Representative: info@tariff-ai.com</p>
                <p><strong>Brazil LGPD Inquiries:</strong> Brazil Representative: info@tariff-ai.com</p>
                <p><strong>Mailing Address:</strong> tariff.ai Privacy Team, San Francisco, CA</p>
                <p className="mt-4"><strong>Supervisory Authorities:</strong></p>
                <ul className={`list-disc ${isRTL ? 'pr-6' : 'pl-6'} space-y-1`}>
                  <li>EU: Your local Data Protection Authority</li>
                  <li>Brazil: Autoridade Nacional de Proteção de Dados (ANPD)</li>
                </ul>
              </div>
            </section>

            {/* Data Request Form - Positioned at the bottom before Footer */}
            <section id="data-request" className="pt-8 border-t border-slate-200 dark:border-white/10">
              <DataRequestForm theme={theme} language={language} />
            </section>
          </div>
        </div>
      </main>

      <Footer theme={theme} language={language} />
    </div>
  );
}