import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Linkedin, Twitter } from 'lucide-react';

export default function Footer({ theme, language }) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreed) {
      console.log('Subscribed:', email);
      setEmail('');
      setAgreed(false);
    }
  };

  const isRTL = language === 'he';

  return (
    <footer className={`${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-slate-50'} py-16 border-t ${
      theme === 'dark' ? 'border-white/10' : 'border-slate-200'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* הגדרת 3 עמודות נקיות בדסקטופ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* עמודה 1 - מיתוג */}
          <div className="space-y-6">
            <div>
              <div className={`text-3xl font-bold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
              }`}>
                tariff<span className="text-[#E5A840]">.ai</span>
              </div>
              <p className={`mt-4 text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                {language === 'en' 
                  ? 'AI-powered tariff intelligence for global trade professionals.'
                  : 'מודיעין מכס מונע AI לאנשי סחר בינלאומי.'}
              </p>
            </div>
            {/* כפתורי לינקדין וטוויטר */}
            <div className="flex gap-4">
              <a href="#" className={`p-2 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-white/10 hover:bg-[#E5A840] text-white' : 'bg-slate-200 hover:bg-[#E5A840] text-slate-600'
              }`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className={`p-2 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-white/10 hover:bg-[#E5A840] text-white' : 'bg-slate-200 hover:bg-[#E5A840] text-slate-600'
              }`}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* עמודה 2 - תפריט משני (משפטי) */}
          <div className="lg:ps-8">
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-900'
            }`}>
              {language === 'en' ? 'Legal' : 'משפטי'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to={createPageUrl('TermsOfService')} className="text-sm hover:text-[#E5A840] transition-colors">
                  {language === 'en' ? 'Terms of Service' : 'תנאי שימוש'}
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('PrivacyPolicy')} className="text-sm hover:text-[#E5A840] transition-colors">
                  {language === 'en' ? 'Privacy Policy' : 'מדיניות פרטיות'}
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('CookiePolicy')} className="text-sm hover:text-[#E5A840] transition-colors">
                  {language === 'en' ? 'Cookie Policy' : 'מדיניות עוגיות'}
                </Link>
              </li>
            </ul>
          </div>

          {/* עמודה 3 - ניוזלטר */}
          <div className={`p-6 rounded-2xl ${
            theme === 'dark' ? 'bg-[#1E293B]/50' : 'bg-white shadow-sm'
          } border ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
            <h4 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Join Our Newsletter' : 'הצטרפו לניוזלטר'}
            </h4>
            <p className="text-sm mb-4 opacity-80">
              {language === 'en' 
                ? 'Get the latest tariff updates, trade news, and exclusive insights'
                : 'קבלו עדכוני מכס, חדשות סחר ותובנות בלעדיות ישירות למייל'}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={language === 'en' ? 'Enter email' : 'הזינו אימייל'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                />
                <Button type="submit" disabled={!email || !agreed} className="bg-[#E5A840] text-[#0F172A] rounded-full px-6">
                  {language === 'en' ? 'Subscribe' : 'הרשמה'}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" checked={agreed} onCheckedChange={setAgreed} className="border-[#E5A840]" />
                <label htmlFor="agree" className="text-xs opacity-70 cursor-pointer">
                  {language === 'en' ? 'I agree to receive newsletters' : 'אני מסכים/ה לקבל ניוזלטר מ-tariff.ai'}
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* שורת זכויות יוצרים תחתונה */}
        <div className="mt-12 pt-8 border-t border-current opacity-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 tariff.ai. {language === 'en' ? 'All rights reserved.' : 'כל הזכויות שמורות.'}</p>
          <div className="flex items-center gap-1">
            <span>{language === 'en' ? 'Made with' : 'נבנה עם'}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            <span>{language === 'en' ? 'for global trade' : 'לסחר גלובלי'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
