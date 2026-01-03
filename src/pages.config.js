import PublicReport from './pages/PublicReport';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import __Layout from './Layout.jsx';


export const PAGES = {
    "PublicReport": PublicReport,
    "CookiePolicy": CookiePolicy,
    "PrivacyPolicy": PrivacyPolicy,
    "TermsOfService": TermsOfService,
}

export const pagesConfig = {
    mainPage: "PublicReport",
    Pages: PAGES,
    Layout: __Layout,
};