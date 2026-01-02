import CookiePolicy from './pages/CookiePolicy';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PublicReport from './pages/PublicReport';
import TermsOfService from './pages/TermsOfService';
import __Layout from './Layout.jsx';


export const PAGES = {
    "CookiePolicy": CookiePolicy,
    "Home": Home,
    "PrivacyPolicy": PrivacyPolicy,
    "PublicReport": PublicReport,
    "TermsOfService": TermsOfService,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};