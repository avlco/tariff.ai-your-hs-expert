import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import PublicReport from "./pages/PublicReport";
import Layout from "./Layout";

export const pagesConfig = {
  mainPage: 'home',
  visitedPage: 'home',
  // חשוב: Pages עם P גדולה כדי להתאים ל-App.jsx
  Pages: {
    'home': Home,
    'terms': TermsOfService,
    'privacy': PrivacyPolicy,
    'cookies': CookiePolicy,
    'report': PublicReport
  },
  routes: [
    { path: '/', component: Home },
    { path: '/terms', component: TermsOfService },
    { path: '/privacy', component: PrivacyPolicy },
    { path: '/cookies', component: CookiePolicy },
    { path: '/report', component: PublicReport },
  ],
  Layout: Layout 
};
