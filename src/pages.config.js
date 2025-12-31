import CookiePolicy from './pages/CookiePolicy';
import Cookies from './pages/Cookies';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PublicReport from './pages/PublicReport';
import Terms from './pages/Terms';
import TermsOfService from './pages/TermsOfService';
import __Layout from './Layout.jsx';


export const PAGES = {
    "CookiePolicy": CookiePolicy,
    "Cookies": Cookies,
    "Home": Home,
    "Privacy": Privacy,
    "PrivacyPolicy": PrivacyPolicy,
    "PublicReport": PublicReport,
    "Terms": Terms,
    "TermsOfService": TermsOfService,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};