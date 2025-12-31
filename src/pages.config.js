import Cookies from './pages/Cookies';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import PublicReport from './pages/PublicReport';
import Terms from './pages/Terms';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Cookies": Cookies,
    "Home": Home,
    "Privacy": Privacy,
    "PublicReport": PublicReport,
    "Terms": Terms,
    "TermsOfService": TermsOfService,
    "PrivacyPolicy": PrivacyPolicy,
    "CookiePolicy": CookiePolicy,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};