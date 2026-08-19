import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { RoiCalculator } from './components/RoiCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { WebsiteAuditSection } from './components/WebsiteAuditSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWidgets } from './components/FloatingWidgets';
import { Footer } from './components/Footer';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState<boolean>(false);
  const [quickQuoteSubmitted, setQuickQuoteSubmitted] = useState<boolean>(false);
  const [quickQuoteData, setQuickQuoteData] = useState({
    name: '',
    email: '',
    industry: 'Dental Clinic',
    budget: '$3,000 - $5,000',
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickQuoteSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300 ${
      isDarkMode ? 'bg-[#030712] text-slate-100 dark' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 border-b border-blue-800/50 py-2 px-4 text-center text-xs text-blue-200">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap font-medium">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500 text-white shadow-sm">
            LIMITED AVAILABILITY
          </span>
          <span>Only 1 Client Slot Remaining for This Quarter • Guaranteed Sub-Second Core Web Vitals</span>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="underline underline-offset-2 hover:text-white font-bold ml-1"
          >
            Claim Slot →
          </button>
        </div>
      </div>

      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        onOpenAuditModal={() => {
          setActivePage('audit');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Router / Viewport */}
      <main className="relative overflow-hidden">
        {/* If Active Page is HOME, render full landing experience */}
        {activePage === 'home' && (
          <>
            <Hero
              setActivePage={setActivePage}
              isDarkMode={isDarkMode}
              onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
              onOpenAuditModal={() => {
                setActivePage('audit');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <ClientMarquee isDarkMode={isDarkMode} />
            <ServicesSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <PortfolioSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <RoiCalculator setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <WhyChooseUs setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ProcessSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <PricingSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <WebsiteAuditSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <TestimonialsSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <AboutSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <BlogSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <FaqSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </>
        )}

        {/* Dedicated Isolated Pages */}
        {activePage === 'services' && (
          <div className="pt-8">
            <ServicesSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <RoiCalculator setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'portfolio' && (
          <div className="pt-8">
            <PortfolioSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <TestimonialsSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'pricing' && (
          <div className="pt-8">
            <PricingSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <WhyChooseUs setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <FaqSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="pt-8">
            <AboutSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <WhyChooseUs setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'testimonials' && (
          <div className="pt-8">
            <TestimonialsSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ClientMarquee isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'blog' && (
          <div className="pt-8">
            <BlogSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <WebsiteAuditSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-8">
            <ContactSection isDarkMode={isDarkMode} />
            <FaqSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
          </div>
        )}

        {activePage === 'audit' && (
          <div className="pt-8">
            <WebsiteAuditSection setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <RoiCalculator setActivePage={setActivePage} isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        )}
      </main>

      {/* Global Floating Action Buttons & Notifications */}
      <FloatingWidgets
        setActivePage={setActivePage}
        onOpenQuickQuote={() => setIsQuickQuoteOpen(true)}
        isDarkMode={isDarkMode}
      />

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} isDarkMode={isDarkMode} />

      {/* Quick Quote Modal */}
      {isQuickQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => {
                setIsQuickQuoteOpen(false);
                setQuickQuoteSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {quickQuoteSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-black text-2xl">Quick Quote Requested!</h4>
                <p className="text-xs text-slate-300">
                  Thank you, <span className="font-bold text-white">{quickQuoteData.name}</span>. Alex Rivera will evaluate your project and email your custom itemized scope estimate within 4 hours.
                </p>
                <button
                  onClick={() => {
                    setIsQuickQuoteOpen(false);
                    setQuickQuoteSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Fast 4-Hour Response Guarantee</span>
                </div>
                <h3 className="font-heading font-black text-2xl mb-1">
                  Get a Rapid Project Quote
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Tell us what you're building to receive a transparent price and milestone breakdown.
                </p>

                <form onSubmit={handleQuickQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={quickQuoteData.name}
                      onChange={(e) => setQuickQuoteData({ ...quickQuoteData, name: e.target.value })}
                      placeholder="e.g. Dr. Arthur Bell"
                      className={`w-full p-3 rounded-xl text-xs sm:text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                        isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      value={quickQuoteData.email}
                      onChange={(e) => setQuickQuoteData({ ...quickQuoteData, email: e.target.value })}
                      placeholder="arthur@bellclinic.com"
                      className={`w-full p-3 rounded-xl text-xs sm:text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                        isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Industry
                      </label>
                      <select
                        value={quickQuoteData.industry}
                        onChange={(e) => setQuickQuoteData({ ...quickQuoteData, industry: e.target.value })}
                        className={`w-full p-3 rounded-xl text-xs border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="Dental Clinic">Dental Clinic</option>
                        <option value="Hospital & Medical">Hospital & Medical</option>
                        <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                        <option value="Hotel & Resort">Hotel & Resort</option>
                        <option value="Gym & Fitness">Gym & Fitness</option>
                        <option value="School & Academy">School & Academy</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="E-Commerce">E-Commerce Brand</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Target Budget
                      </label>
                      <select
                        value={quickQuoteData.budget}
                        onChange={(e) => setQuickQuoteData({ ...quickQuoteData, budget: e.target.value })}
                        className={`w-full p-3 rounded-xl text-xs border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000+">$5,000 - $10,000+</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Guaranteed Estimate</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No obligation • 100% confidential</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
