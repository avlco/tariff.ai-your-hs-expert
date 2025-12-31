import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cookie, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from './LanguageContext';

export default function CookieConsent({ onConsentChange }) {
  const { t, isRTL } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      onConsentChange?.(savedPreferences);
    }
  }, []);

  const saveConsent = async (prefs) => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    onConsentChange?.(prefs);
    
    // Log consent to database for GDPR compliance
    try {
      const { base44 } = await import('@/api/base44Client');
      await base44.functions.invoke('trackEvent', {
        eventType: 'consent',
        data: {
          consent_type: 'cookies',
          consent_status: true,
          consent_details: prefs,
          privacy_policy_version: '1.0'
        }
      });
    } catch (error) {
      console.error('Failed to log consent:', error);
    }
    
    // Dispatch custom event to notify AnalyticsTracker
    window.dispatchEvent(new Event('consentChanged'));
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
        >
          <Card className="max-w-5xl mx-auto glass-card border-2 border-[#42C0B9]/20 dark:border-[#42C0B9]/30 shadow-2xl shadow-[#42C0B9]/10">
            {!showSettings ? (
              <div className="p-4 sm:p-6 md:p-8">
                <div className={`flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-[#42C0B9]/10 to-[#114B5F]/5 rounded-xl border border-[#42C0B9]/20">
                    <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-[#42C0B9]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-[#114B5F] dark:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                      {isRTL ? 'אנחנו משתמשים בעוגיות' : 'We Use Cookies'}
                    </h3>
                    <p className={`text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                      {isRTL 
                        ? 'אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלך, לנתח את התנועה באתר ולהתאים אישית תוכן. על ידי לחיצה על "קבל הכל", אתה מסכים לשימוש שלנו בעוגיות.'
                        : 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.'
                      }
                    </p>
                  </div>
                </div>

                <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button
                    onClick={acceptAll}
                    className="flex-1 bg-gradient-to-r from-[#42C0B9] to-[#3ab0a9] hover:from-[#3ab0a9] hover:to-[#32a09a] text-white shadow-lg shadow-[#42C0B9]/20 transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5"
                  >
                    {isRTL ? 'קבל הכל' : 'Accept All'}
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="flex-1 border-2 border-[#42C0B9]/30 hover:bg-[#42C0B9]/5 hover:border-[#42C0B9]/50 text-[#114B5F] dark:text-white transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5"
                  >
                    {isRTL ? 'עוגיות הכרחיות בלבד' : 'Essential Only'}
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    className={`flex items-center justify-center gap-2 hover:bg-[#42C0B9]/10 text-[#114B5F] dark:text-white transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {isRTL ? 'התאם אישית' : 'Customize'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-6 md:p-8">
                <div className={`flex items-center justify-between mb-4 sm:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 className={`text-lg sm:text-xl font-bold text-[#114B5F] dark:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'הגדרות עוגיות' : 'Cookie Settings'}
                  </h3>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-[#42C0B9]/10 transition-all duration-300"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
                  </Button>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-[#42C0B9]/5 to-transparent rounded-xl border border-[#42C0B9]/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className={`mt-1 accent-[#42C0B9] ${isRTL ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}
                    />
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 className="font-semibold mb-1 text-[#114B5F] dark:text-white text-sm sm:text-base">
                        {isRTL ? 'עוגיות הכרחיות' : 'Essential Cookies'}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        {isRTL 
                          ? 'עוגיות אלו נדרשות לתפקוד בסיסי של האתר ולא ניתן לבטל אותן.'
                          : 'These cookies are required for basic site functionality and cannot be disabled.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-[#42C0B9]/5 to-transparent rounded-xl border border-[#42C0B9]/10 hover:border-[#42C0B9]/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className={`mt-1 accent-[#42C0B9] cursor-pointer ${isRTL ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}
                    />
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 className="font-semibold mb-1 text-[#114B5F] dark:text-white text-sm sm:text-base">
                        {isRTL ? 'עוגיות אנליטיות' : 'Analytics Cookies'}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        {isRTL 
                          ? 'עוגיות אלו עוזרות לנו להבין כיצד משתמשים מתקשרים עם האתר שלנו.'
                          : 'These cookies help us understand how users interact with our website.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-[#42C0B9]/5 to-transparent rounded-xl border border-[#42C0B9]/10 hover:border-[#42C0B9]/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className={`mt-1 accent-[#42C0B9] cursor-pointer ${isRTL ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}
                    />
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 className="font-semibold mb-1 text-[#114B5F] dark:text-white text-sm sm:text-base">
                        {isRTL ? 'עוגיות שיווקיות' : 'Marketing Cookies'}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        {isRTL 
                          ? 'עוגיות אלו משמשות להצגת פרסומות רלוונטיות יותר עבורך.'
                          : 'These cookies are used to show you more relevant advertisements.'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button
                    onClick={saveCustom}
                    className="flex-1 bg-gradient-to-r from-[#42C0B9] to-[#3ab0a9] hover:from-[#3ab0a9] hover:to-[#32a09a] text-white shadow-lg shadow-[#42C0B9]/20 transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5"
                  >
                    {isRTL ? 'שמור העדפות' : 'Save Preferences'}
                  </Button>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="flex-1 border-2 border-[#42C0B9]/30 hover:bg-[#42C0B9]/5 hover:border-[#42C0B9]/50 text-[#114B5F] dark:text-white transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5"
                  >
                    {isRTL ? 'ביטול' : 'Cancel'}
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}