import Home from './pages/Home';
import PublicReport from './pages/PublicReport';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DebugLocales from './pages/DebugLocales';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "PublicReport": PublicReport,
    "CookiePolicy": CookiePolicy,
    "PrivacyPolicy": PrivacyPolicy,
    "TermsOfService": TermsOfService,
    "DebugLocales": DebugLocales,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};