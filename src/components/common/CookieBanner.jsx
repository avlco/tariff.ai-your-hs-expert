import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { X, Cookie, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner({ theme, language }) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1500);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleEssentialOnly = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const isRTL = language === 'he';

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className={`max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden ${
            theme === 'dark' 
              ? 'bg-[#1E293B]/95 backdrop-blur-xl border border-white/10'
              : 'bg-white/95 backdrop-blur-xl border border-slate-200'
          }`}>
            {!showSettings ? (
              // Main Banner
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-[#E5A840]/20' : 'bg-[#E5A840]/10'
                  }`}>
                    <Cookie className="w-6 h-6 text-[#E5A840]" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                      {language === 'en' ? 'We Use Cookies' : 'אנחנו משתמשים בעוגיות'}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {language === 'en' 
                        ? 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.'
                        : 'אנו משתמשים בעוגיות לשיפור חווית הגלישה, ניתוח תעבורה והתאמה אישית של תוכן. לחיצה על "קבל הכל" מהווה הסכמה לשימוש בעוגיות.'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-end gap-3 mt-6">
                  <Button
                    variant="ghost"
                    onClick={() => setShowSettings(true)}
                    className={theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-600'}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Customize' : 'התאמה אישית'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleEssentialOnly}
                    className={theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : ''}
                  >
                    {language === 'en' ? 'Essential Only' : 'חיוניות בלבד'}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold"
                  >
                    {language === 'en' ? 'Accept All' : 'קבל הכל'}
                  </Button>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {language === 'en' ? 'Cookie Settings' : 'הגדרות עוגיות'}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Essential Cookies */}
                  <div className={`p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-slate-50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                          {language === 'en' ? 'Essential Cookies' : 'עוגיות חיוניות'}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          {language === 'en' 
                            ? 'These cookies are required for basic site functionality and cannot be disabled.'
                            : 'עוגיות אלו נדרשות לתפקוד בסיסי של האתר ולא ניתן לכבותן.'}
                        </p>
                      </div>
                      <Switch checked disabled className="data-[state=checked]:bg-[#E5A840]" />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className={`p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-slate-50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                          {language === 'en' ? 'Analytics Cookies' : 'עוגיות אנליטיקה'}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          {language === 'en' 
                            ? 'These cookies help us understand how users interact with our website.'
                            : 'עוגיות אלו עוזרות לנו להבין כיצד משתמשים מתקשרים עם האתר.'}
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.analytics}
                        onCheckedChange={(checked) => setPreferences(p => ({ ...p, analytics: checked }))}
                        className="data-[state=checked]:bg-[#E5A840]"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className={`p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-[#0F172A]/50' : 'bg-slate-50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                          {language === 'en' ? 'Marketing Cookies' : 'עוגיות שיווק'}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          {language === 'en' 
                            ? 'These cookies are used to show you more relevant advertisements.'
                            : 'עוגיות אלו משמשות להצגת פרסומות רלוונטיות יותר.'}
                        </p>
                      </div>
                      <Switch 
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => setPreferences(p => ({ ...p, marketing: checked }))}
                        className="data-[state=checked]:bg-[#E5A840]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(false)}
                    className={theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : ''}
                  >
                    {language === 'en' ? 'Cancel' : 'ביטול'}
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-[#E5A840] hover:bg-[#C28E36] text-[#0F172A] font-semibold"
                  >
                    {language === 'en' ? 'Save Preferences' : 'שמור העדפות'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}