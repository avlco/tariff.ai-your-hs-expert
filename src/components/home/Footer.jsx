import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Linkedin, Twitter } from 'lucide-react';

export default function Footer({ theme, language }) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreed) {
      setEmail('');
      setAgreed(false);
    }
  };

  return (
    <footer className={`${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-slate-50'} py-16 text-slate-600 dark:text-slate-300`}>
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding column */}
        <div>
          <h2 className="text-lg font-bold text-[#114B5F] dark:text-white">tariff.ai</h2>
          <p>AI-powered tariff intelligence for global trade professionals.</p>
          <div className="flex mt-4 space-x-4">
            <a href="https://linkedin.com" className="hover:text-blue-800">
              <Linkedin />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-500">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Legal navigation */}
        <div>
          <h2 className="text-lg font-bold text-[#114B5F] dark:text-white">Legal</h2>
          <ul className="mt-4 space-y-2">
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div>
          <h2 className="text-lg font-bold text-[#114B5F] dark:text-white">Join Our Newsletter</h2>
          <p className="mt-4">Get the latest tariff updates, trade news, and exclusive insights delivered to your inbox.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:ring focus:ring-indigo-500 focus:outline-none"
            />
            <button 
              type="submit" 
              className="w-full py-2 px-4 text-white bg-[#114B5F] rounded hover:bg-[#0e3f4d]"
            >
              Subscribe
            </button>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-[#114B5F]"
              />
              <span>I agree to receive newsletters from tariff.ai</span>
            </label>
          </form>
        </div>
      </div>

      <div className="text-center mt-12 text-xs text-slate-400 dark:text-slate-500">
        &copy; 2026 tariff.ai. All rights reserved.
      </div>
    </footer>
  );
}
