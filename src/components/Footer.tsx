import React from 'react';
import { 
  Sparkles, 
  Mail, 
  PhoneCall, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { PageType } from '../types';
import { ApexCraftLogo } from './ApexCraftLogo';

interface FooterProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, isDarkMode }) => {
  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors pt-16 pb-12 ${
      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Tagline (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <ApexCraftLogo size="md" isDark={true} showSubtitle={true} />

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-3">
              "We Build Websites That Grow Businesses." Engineering sub-second, high-converting digital platforms for dental clinics, hospitals, luxury resorts, and high-growth brands worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for 1 new client engagement</span>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-cyan-400 transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-cyan-400 transition-colors">
                  Specialized Services (18+)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portfolio')} className="hover:text-cyan-400 transition-colors">
                  Featured Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('pricing')} className="hover:text-cyan-400 transition-colors">
                  Fixed Pricing & Scope Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('testimonials')} className="hover:text-cyan-400 transition-colors">
                  Client Reviews & Ratings
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('audit')} className="hover:text-cyan-400 transition-colors text-cyan-400 font-semibold">
                  Free AI Website CRO Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Solutions */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Dental Clinic Websites</li>
              <li>Diagnostic & Pathology Labs</li>
              <li>Hospital & Medical Centers</li>
              <li>Restaurant & Digital Menus</li>
              <li>Hotel & Resort Direct Bookings</li>
              <li>Gym & Fitness Club Funnels</li>
              <li>Luxury Real Estate Portals</li>
              <li>SaaS & Tech Landing Pages</li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:THEBUZZUSAOFFICIAL@GMAIL.COM" className="hover:text-cyan-400 font-medium text-slate-200 transition-colors">
                  THEBUZZUSAOFFICIAL@GMAIL.COM
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Global Digital Agency</span>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:THEBUZZUSAOFFICIAL@GMAIL.COM"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md inline-flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ApexCraft Studio & Alex Rivera. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              100% Core Web Vitals Guaranteed
            </span>
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
