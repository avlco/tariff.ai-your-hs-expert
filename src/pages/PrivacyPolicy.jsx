import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import DataRequestForm from '@/components/DataRequestForm';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { cn } from "@/lib/utils";

export default function PrivacyPolicy() {
  const { t, isRTL } = useLanguage();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const fullContent = t('legalPages.privacy.fullContent');

  const markdownComponents = {
    h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-4 text-[#0F172A] dark:text-white" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-3 text-[#0F172A] dark:text-white" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-medium mt-8 mb-2 text-[#0F172A] dark:text-white" {...props} />,
    p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300" {...props} />,
    ul: ({node, ...props}) => <ul className={cn("list-disc pl-5 mb-4 space-y-2 text-slate-700 dark:text-slate-300", isRTL && "list-disc pr-5 mr-0 dir-rtl")} {...props} />,
    ol: ({node, ...props}) => <ol className={cn("list-decimal pl-5 mb-4 space-y-2 text-slate-700 dark:text-slate-300", isRTL && "list-decimal pr-5 mr-0 dir-rtl")} {...props} />,
    li: ({node, ...props}) => <li className="mb-1" {...props} />,
    strong: ({node, ...props}) => <strong className="font-bold text-[#0F172A] dark:text-white" {...props} />,
    table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="w-full border-collapse text-slate-700 dark:text-slate-300" {...props} /></div>,
    thead: ({node, ...props}) => <thead className="bg-slate-100 dark:bg-slate-800" {...props} />,
    th: ({node, ...props}) => <th className="border border-slate-200 dark:border-slate-700 p-3 text-left font-semibold" {...props} />,
    td: ({node, ...props}) => <td className="border border-slate-200 dark:border-slate-700 p-3" {...props} />,
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
            {t('legalPages.privacy.back')}
          </Link>

          <div className="mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>
              {t('legalPages.privacy.title')}
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              {t('legalPages.privacy.updated')}
            </p>
            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              {t('legalPages.privacy.intro')}
            </p>
          </div>

          <div className="space-y-8">
            <div className={`rounded-2xl p-8 ${
              theme === 'dark' ? 'bg-[#1E293B]/50 border border-white/10' : 'bg-slate-50 border border-slate-200'
            }`}>
               <ReactMarkdown components={markdownComponents}>
                 {fullContent}
               </ReactMarkdown>
            </div>

            <section id="data-request" className="pt-8 border-t border-slate-200 dark:border-white/10">
              <DataRequestForm theme={theme} />
            </section>
          </div>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}