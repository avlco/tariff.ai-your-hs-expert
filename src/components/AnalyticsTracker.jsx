import { useEffect, useRef, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useLocation } from 'react-router-dom';

export default function AnalyticsTracker() {
  const location = useLocation();
  const sessionIdRef = useRef(null);
  const pageStartTimeRef = useRef(null);
  const scrollTrackedRef = useRef(new Set());
  const [hasConsent, setHasConsent] = useState(false);
  const [userId, setUserId] = useState(null);

  // Check consent and get user ID
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie_consent');
      if (consent) {
        const preferences = JSON.parse(consent);
        setHasConsent(preferences.analytics);
      }
    };

    // Check initial consent
    checkConsent();

    // Listen for storage changes (consent updates)
    const handleStorageChange = (e) => {
      if (e.key === 'cookie_consent') {
        checkConsent();
      }
    };

    // Listen for custom consent event (same tab)
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('consentChanged', handleConsentChange);

    // Get user ID if logged in
    const fetchUser = async () => {
      try {
        const user = await base44.auth.me();
        if (user) {
          setUserId(user.id);
        }
      } catch (error) {
        // User not logged in
      }
    };
    fetchUser();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('consentChanged', handleConsentChange);
    };
  }, []);

  // Generate or retrieve session ID
  useEffect(() => {
    if (!sessionIdRef.current) {
      const storedSessionId = sessionStorage.getItem('analytics_session_id');
      if (storedSessionId) {
        sessionIdRef.current = storedSessionId;
      } else {
        sessionIdRef.current = crypto.randomUUID();
        sessionStorage.setItem('analytics_session_id', sessionIdRef.current);
      }
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (!hasConsent) return;

    const trackPageView = async () => {
      pageStartTimeRef.current = Date.now();
      scrollTrackedRef.current.clear();

      try {
        await base44.functions.invoke('trackEvent', {
          eventType: 'pageview',
          data: {
            page_url: window.location.href,
            page_title: document.title,
            referrer: document.referrer,
            session_id: sessionIdRef.current,
            user_id: userId,
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language || navigator.userLanguage,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          }
        });
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    };

    trackPageView();

    // Track duration when leaving page
    return () => {
      if (pageStartTimeRef.current && hasConsent) {
        const duration = Math.floor((Date.now() - pageStartTimeRef.current) / 1000);
        
        // Use sendBeacon for reliable tracking on page unload
        navigator.sendBeacon(
          '/api/trackEvent',
          JSON.stringify({
            eventType: 'pageview',
            data: {
              page_url: window.location.href,
              page_title: document.title,
              duration,
              session_id: sessionIdRef.current,
              user_id: userId
            }
          })
        );
      }
    };
  }, [location, hasConsent, userId]);

  // Track user actions (clicks, form submits)
  useEffect(() => {
    if (!hasConsent) return;

    const trackClick = async (event) => {
      const target = event.target.closest('[data-analytics-track]') || event.target;
      
      // Track button and link clicks
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        try {
          await base44.functions.invoke('trackEvent', {
            eventType: 'action',
            data: {
              action_type: 'click',
              action_name: target.getAttribute('data-analytics-name') || target.textContent?.trim() || 'Unknown',
              page_url: window.location.href,
              element_id: target.id || '',
              element_text: target.textContent?.trim() || '',
              element_class: target.className || '',
              session_id: sessionIdRef.current,
              user_id: userId,
              viewport_size: `${window.innerWidth}x${window.innerHeight}`,
              timestamp_ms: Date.now()
            }
          });
        } catch (error) {
          console.error('Analytics tracking error:', error);
        }
      }
    };

    const trackFormSubmit = async (event) => {
      const form = event.target;
      
      try {
        await base44.functions.invoke('trackEvent', {
          eventType: 'action',
          data: {
            action_type: 'form_submit',
            action_name: form.getAttribute('data-analytics-name') || form.name || 'Form submission',
            page_url: window.location.href,
            form_id: form.id || '',
            element_id: form.id || '',
            session_id: sessionIdRef.current,
            user_id: userId
          }
        });
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    };

    document.addEventListener('click', trackClick);
    document.addEventListener('submit', trackFormSubmit, true);

    return () => {
      document.removeEventListener('click', trackClick);
      document.removeEventListener('submit', trackFormSubmit, true);
    };
  }, [hasConsent, userId]);

  // Track scroll depth
  useEffect(() => {
    if (!hasConsent) return;

    const trackScroll = async () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      const milestones = [25, 50, 75, 90];
      
      for (const milestone of milestones) {
        if (scrollPercentage >= milestone && !scrollTrackedRef.current.has(milestone)) {
          scrollTrackedRef.current.add(milestone);
          
          try {
            await base44.functions.invoke('trackEvent', {
              eventType: 'action',
              data: {
                action_type: 'scroll',
                action_name: `Scrolled ${milestone}%`,
                page_url: window.location.href,
                scroll_depth: milestone,
                session_id: sessionIdRef.current,
                user_id: userId
              }
            });
          } catch (error) {
            console.error('Analytics tracking error:', error);
          }
          
          break;
        }
      }
    };

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScroll, 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasConsent, userId]);

  return null;
}

// Helper function to track custom events
export async function trackEvent(eventType, data) {
  const sessionId = sessionStorage.getItem('analytics_session_id');
  
  try {
    await base44.functions.invoke('trackEvent', {
      eventType,
      data: {
        ...data,
        session_id: sessionId,
        page_url: window.location.href
      }
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

// Helper function to track conversions
export async function trackConversion(conversionType, conversionName, value = 0, metadata = {}) {
  return trackEvent('conversion', {
    conversion_type: conversionType,
    conversion_name: conversionName,
    value,
    metadata
  });
}