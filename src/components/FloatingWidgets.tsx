import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Zap, 
  ArrowUp, 
  X, 
  Download, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { PageType } from '../types';
import confetti from 'canvas-confetti';

interface FloatingWidgetsProps {
  setActivePage: (page: PageType) => void;
  onOpenQuickQuote: () => void;
  isDarkMode: boolean;
}

const LIVE_ACTIVITIES = [
  { text: 'Dr. Vance scheduled a Dental Practice Strategy Call', loc: 'Austin, TX', time: '4m ago' },
  { text: 'MedVanguard downloaded Scope Proposal for Pathology Portal', loc: 'Chicago, IL', time: '12m ago' },
  { text: 'Jean-Luc claimed Q3 slot for Luxury Resort Booking Engine', loc: 'Miami, FL', time: '28m ago' },
  { text: 'Aura Spa generated an Instant AI Conversion Audit', loc: 'New York, NY', time: '41m ago' },
];

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  setActivePage,
  onOpenQuickQuote,
  isDarkMode,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [leadMagnetOpen, setLeadMagnetOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadDownloaded, setLeadDownloaded] = useState(false);
  
  // Live Activity Toast State
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle activity toasts
  useEffect(() => {
    const toastInterval = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setCurrentActivityIndex((prev) => (prev + 1) % LIVE_ACTIVITIES.length);
        setShowToast(true);
      }, 800);
    }, 9000);

    return () => clearInterval(toastInterval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setLeadDownloaded(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const currentActivity = LIVE_ACTIVITIES[currentActivityIndex];

  return (
    <>
      {/* 1. Live Notification Toast (Bottom Left) */}
      {showToast && (
        <div className={`fixed bottom-6 left-6 z-40 max-w-sm p-3.5 rounded-2xl border shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
          isDarkMode ? 'bg-slate-950/90 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
        }`}>
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-semibold leading-tight line-clamp-2">{currentActivity.text}</p>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
              <span>📍 {currentActivity.loc}</span>
              <span>•</span>
              <span className="text-emerald-400 font-mono font-medium">{currentActivity.time}</span>
            </div>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-slate-500 hover:text-slate-300 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. Floating Action Controls (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            title="Scroll to Top"
            className={`p-3 rounded-full border shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-md'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Lead Magnet Checklist Trigger */}
        <button
          onClick={() => setLeadMagnetOpen(true)}
          id="lead-magnet-floating-btn"
          className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full border border-cyan-500/30 bg-slate-900/90 text-cyan-400 text-xs font-bold shadow-lg hover:border-cyan-400 backdrop-blur-md transition-all hover:scale-105"
        >
          <Download className="w-3.5 h-3.5 animate-bounce" />
          <span>Free 15-Point CRO Checklist</span>
        </button>

        {/* Sticky Direct Email Button */}
        <a
          href="mailto:THEBUZZUSAOFFICIAL@GMAIL.COM?subject=Website%20Inquiry%20-%20ApexCraft"
          id="sticky-email-btn"
          title="Direct Priority Email"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <Mail className="w-4 h-4" />
          <span>Email Us</span>
        </a>
      </div>

      {/* 3. Exit Intent / Lead Magnet Modal */}
      {leadMagnetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setLeadMagnetOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {leadDownloaded ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-black text-2xl">Checklist Sent!</h4>
                <p className="text-xs text-slate-300">
                  We have dispatched the <span className="font-bold text-cyan-400">15-Point High-Converting Website Architecture Blueprint</span> to {leadEmail}.
                </p>
                <button
                  onClick={() => setLeadMagnetOpen(false)}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Exclusive Free Resource
                </span>
                <h3 className="font-heading font-black text-2xl mb-2">
                  The 15-Point High-Converting Website Blueprint
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Download the exact heuristic checklist we use to audit medical clinics, hospitals, and luxury brands for sub-second speed, trust triggers, and frictionless 1-click booking.
                </p>

                <form onSubmit={handleLeadMagnetSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="Enter your business email"
                    className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Blueprint Now</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
