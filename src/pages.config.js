import Cookies from './pages/Cookies';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import PublicReport from './pages/PublicReport';
import Terms from './pages/Terms';


export const PAGES = {
    "Cookies": Cookies,
    "Home": Home,
    "Privacy": Privacy,
    "PublicReport": PublicReport,
    "Terms": Terms,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};