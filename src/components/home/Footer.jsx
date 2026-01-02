import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-50 text-slate-600 dark:bg-[#050507] dark:text-white py-12">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Branding */}
        <div>
          <h2 className="text-lg font-bold text-[#114B5F] dark:text-white">tariff.ai</h2>
          <p>AI-powered tariff intelligence for global trade professionals.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" className="text-[#114B5F] dark:text-white hover:text-blue-800">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" className="text-[#114B5F] dark:text-white hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Legal Navigation */}
        <div>
          <h2 className="text-lg font-bold text-[#114B5F] dark:text-white">Legal</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/terms" className="hover:underline text-slate-600 dark:text-slate-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline text-slate-600 dark:text-slate-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:underline text-slate-600 dark:text-slate-300">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h2 className="text-lg font-bold text-[#114B5F] dark:text-white">Join Our Newsletter</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Get the latest tariff updates, trade news, and exclusive insights delivered to your inbox.
          </p>
          <form className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-slate-200 dark:border-white/10 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <button type="submit" className="mt-4 w-full bg-[#114B5F] text-white py-2 px-4 rounded hover:bg-[#0e3f4d]">
              Subscribe
            </button>
            <div className="mt-2">
              <label className="text-sm text-slate-600 dark:text-slate-300">
                <input type="checkbox" className="mr-2" />
                I agree to receive newsletters from tariff.ai
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        &copy; {new Date().getFullYear()} tariff.ai. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
