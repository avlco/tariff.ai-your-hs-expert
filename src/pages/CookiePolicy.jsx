import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function CookiePolicy() {
  const { t, isRTL } = useLanguage();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const sections = t('legalPages.cookiePolicy.sections', { returnObjects: true }) || [];

  const renderContent = (content) => {
    if (!content) return null;
    if (typeof content === 'string') {
      return <p className={`whitespace-pre-line leading-relaxed text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{content}</p>;
    }
    
    if (Array.isArray(content)) {
      return content.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} className={`whitespace-pre-line leading-relaxed text-lg mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} ${block.bold ? 'font-bold text-slate-900 dark:text-white' : ''}`}>
              {block.text}
            </p>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className={`list-disc ps-6 mb-4 space-y-2 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              {block.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === 'table') {
            return (
              <div key={i} className="overflow-x-auto mb-8 rounded-lg border border-slate-200 dark:border-white/10">
                <table className="w-full text-sm text-left text-slate-600 dark:text-gray-400">
                  <thead className={`text-xs uppercase ${theme === 'dark' ? 'bg-[#1E293B] text-gray-400' : 'bg-slate-50 text-slate-700'}`}>
                    <tr>
                      {block.headers.map((h, idx) => (
                        <th key={idx} scope="col" className="px-6 py-3 border-b border-slate-200 dark:border-white/10">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={`${
                        theme === 'dark' ? 'bg-[#0F172A] hover:bg-[#1E293B]' : 'bg-white hover:bg-slate-50'
                      } border-b border-slate-200 dark:border-white/10 last:border-0`}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-6 py-4 font-medium whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        return null;
      });
    }
    return null;
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={createPageUrl('Home')}
            className={`inline-flex items-center gap-2 mb-8 text-sm font-medium ${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-[#0F172A]'
            } transition-colors`}
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {t('common.backToHome')}
          </Link>

          <div className="mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
              {t('legalPages.cookiePolicy.title')}
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              {t('legalPages.cookiePolicy.updated')}
            </p>
            <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              {t('legalPages.cookiePolicy.intro')}
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="max-w-none">
                <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
                  {section.title}
                </h2>
                {renderContent(section.content)}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
