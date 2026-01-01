import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../../functions/trackEvent'; 

const NavigationTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Analytics tracking
    const trackPageView = async () => {
      try {
        await trackEvent({
          event_type: 'page_view',
          event_data: {
            path: location.pathname,
            search: location.search,
            hash: location.hash,
            referrer: document.referrer
          }
        });
      } catch (error) {
        console.error('Failed to track page view:', error);
      }
    };

    trackPageView();
  }, [location]);

  return null;
};

export default NavigationTracker;
