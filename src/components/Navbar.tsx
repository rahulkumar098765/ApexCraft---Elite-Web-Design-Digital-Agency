import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Globe
} from 'lucide-react';
import { PageType } from '../types';
import { ApexCraftLogo } from './ApexCraftLogo';

interface NavbarProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  onOpenQuickQuote: () => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  isDarkMode,
  setIsDarkMode,
  onOpenQuickQuote,
  onOpenAuditModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageType; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'audit', label: 'Free AI Audit', badge: 'AI' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner: Real-time availability indicator */}
      <div className={`w-full py-1.5 px-4 text-xs font-medium text-center transition-colors border-b ${
        isDarkMode 
          ? 'bg-slate-900/90 text-slate-300 border-slate-800' 
          : 'bg-blue-50 text-blue-900 border-blue-100'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-400">Accepting Q3/Q4 Projects:</span>
          <span>Only 1 Client Slot Remaining for this Month</span>
          <span className="hidden md:inline text-slate-500">•</span>
          <button 
            onClick={() => handleNavClick('contact')}
            className="underline hover:text-blue-400 transition-colors font-medium"
          >
            Claim Your Free Discovery Slot →
          </button>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20 py-3'
              : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50 py-3'
            : isDarkMode
              ? 'bg-transparent py-5'
              : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <ApexCraftLogo size="sm" isDark={isDarkMode} showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? isDarkMode
                        ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                        : 'text-blue-600 bg-blue-50/80 shadow-sm border border-blue-100'
                      : isDarkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-cyan-500 text-slate-950 uppercase tracking-wider animate-pulse">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle-btn"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-amber-300 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Estimate CTA */}
            <button
              onClick={onOpenQuickQuote}
              id="quick-quote-nav-btn"
              className={`hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:border-slate-400'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Quote Calculator</span>
            </button>

            {/* Main Booking Button */}
            <button
              onClick={() => handleNavClick('contact')}
              id="book-consultation-nav-btn"
              className="relative group overflow-hidden px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Call</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="mobile-theme-toggle"
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-4 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200 ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`mobile-nav-${link.id}`}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium text-left flex items-center justify-between ${
                    activePage === link.id
                      ? isDarkMode ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-blue-50 text-blue-600 font-semibold'
                      : isDarkMode ? 'hover:bg-slate-900 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-500 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onOpenQuickQuote();
                  setMobileMenuOpen(false);
                }}
                id="mobile-quick-quote-btn"
                className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-900 text-slate-200'
                    : 'border-slate-300 bg-slate-100 text-slate-800'
                }`}
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Calculate Website Price & Scope</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                id="mobile-book-call-btn"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Schedule Free 20-Min Discovery Call</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
