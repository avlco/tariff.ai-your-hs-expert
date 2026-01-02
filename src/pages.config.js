import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import PublicReport from "./pages/PublicReport";
import Layout from "./Layout";

export const pagesConfig = {
  mainPage: 'Home',
  visitedPage: 'Home',
  // מיפוי אובייקטים לשימוש פנימי
  pages: {
    'Home': Home,
    'Terms': TermsOfService,
    'Privacy': PrivacyPolicy,
    'Cookies': CookiePolicy,
    'PublicReport': PublicReport
  },
  // הגדרת הנתיבים (Routes) בפועל - חובה שתהיה תאימות לקישורים בפוטר
  routes: [
    { path: '/', component: Home },
    { path: '/terms', component: TermsOfService },
    { path: '/privacy', component: PrivacyPolicy },
    { path: '/cookies', component: CookiePolicy },
    { path: '/report', component: PublicReport },
  ],
  Layout: Layout 
};
