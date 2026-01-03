import PublicReport from './pages/PublicReport';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "PublicReport": PublicReport,
    "CookiePolicy": CookiePolicy,
    "PrivacyPolicy": PrivacyPolicy,
    "TermsOfService": TermsOfService,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "PublicReport",
    Pages: PAGES,
    Layout: __Layout,
};