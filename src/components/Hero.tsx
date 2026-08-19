import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Star, 
  TrendingUp, 
  Smartphone, 
  Laptop, 
  Tablet, 
  CheckCircle2, 
  Play, 
  MessageSquare,
  Award,
  Lock,
  ExternalLink
} from 'lucide-react';
import { HERO_STATS } from '../data/mockData';
import { PageType } from '../types';
import { ApexCraftLogo } from './ApexCraftLogo';

interface HeroProps {
  setActivePage: (page: PageType) => void;
  onOpenQuickQuote: () => void;
  onOpenAuditModal: () => void;
  isDarkMode: boolean;
}

const INDUSTRY_ROTATION = [
  'Dental Clinics',
  'Diagnostic Centres',
  'Hospitals & Medical',
  'Restaurants & Cafes',
  'Luxury Hotels & Resorts',
  'Gyms & Fitness Clubs',
  'Salons & Spas',
  'Real Estate Brokerages',
  'E-Commerce Brands',
  'High-Growth Startups',
];

export const Hero: React.FC<HeroProps> = ({
  setActivePage,
  onOpenQuickQuote,
  onOpenAuditModal,
  isDarkMode,
}) => {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeDemoTab, setActiveDemoTab] = useState<'dental' | 'hospital' | 'restaurant'>('dental');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % INDUSTRY_ROTATION.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const demoWebsites = {
    dental: {
      title: 'Apex Smile & Implant Studio',
      badge: 'Dental Healthcare',
      headline: 'World-Class Cosmetic Dentistry & Dental Implants',
      subtext: 'Pain-free treatments with digital smile design & same-day appointments.',
      cta: 'Book Consultation - $0 Deposit',
      stats: '4.9★ (380+ Google Reviews)',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      accentColor: 'from-blue-600 to-cyan-500',
    },
    hospital: {
      title: 'St. Jude Multi-Specialty Hospital',
      badge: 'Hospital & Healthcare',
      headline: 'Advanced Surgical Care & 24/7 Emergency Response',
      subtext: 'Over 45 specialist doctors, robotic surgery & instant online OPD booking.',
      cta: 'Find a Doctor & OPD Slot',
      stats: 'NABH & JCI Accredited',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      accentColor: 'from-emerald-600 to-teal-500',
    },
    restaurant: {
      title: 'Savory & Oak Artisan Dining',
      badge: 'Fine Dining & Bistro',
      headline: 'Culinary Craftsmanship & Vintage Cellar Pairings',
      subtext: 'Reserve your table online or book our private dining salon.',
      cta: 'Reserve a Table via OpenTable',
      stats: 'Michelin Guide Recommended 2026',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
      accentColor: 'from-amber-600 to-orange-500',
    },
  };

  const currentDemo = demoWebsites[activeDemoTab];

  return (
    <section className="relative overflow-hidden pt-6 pb-20 md:py-24">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge & Full Brand Emblem */}
        <div className="flex flex-col items-center text-center mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.03 }}
            className="mb-6 cursor-pointer"
            id="hero-animated-brand-logo"
          >
            <ApexCraftLogo size="lg" variant="full" showSubtitle={true} isDark={isDarkMode} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md transition-all shadow-sm group hover:border-blue-500/50 cursor-pointer"
            onClick={onOpenAuditModal}
            id="hero-audit-banner-pill"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className={isDarkMode ? 'text-cyan-400' : 'text-blue-600 font-bold'}>
              Awwwards Nominee & CRO Specialist
            </span>
            <span className="text-slate-500">•</span>
            <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
              Free Instant AI Website Audit
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.div>

          {/* Main Headline */}
          <h1 className={`font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-5xl leading-[1.1] ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            We Build Websites That{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Grow Businesses.
            </span>
          </h1>

          {/* Subheading with Dynamic Rotating Industry Text */}
          <div className="mt-6 max-w-3xl">
            <p className={`text-lg sm:text-xl font-normal leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Bespoke, Apple-level luxury websites engineered for{' '}
              <span className="inline-block font-bold text-blue-500 underline decoration-cyan-400 decoration-2 underline-offset-4 transition-all duration-300 min-w-[200px] text-center">
                {INDUSTRY_ROTATION[industryIndex]}
              </span>
              . We combine award-winning visual design, sub-second speed, and aggressive conversion architecture to turn casual clicks into loyal paying clients.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="hero-book-call-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <span>Schedule Free 20-Min Discovery Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenQuickQuote}
              id="hero-calc-cost-btn"
              className={`w-full sm:w-auto px-7 py-4 rounded-2xl text-base font-semibold border transition-all duration-200 flex items-center justify-center gap-2.5 ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
              }`}
            >
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Calculate Project Cost</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Core Web Vitals Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>100% Code & Asset Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Fixed Transparent Pricing (Zero Surprises)</span>
            </div>
          </div>
        </div>

        {/* Interactive Device Showcase / Interactive Website Simulator */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Header Controls for Demo Simulator */}
          <div className={`p-4 rounded-t-2xl border-t border-x flex flex-wrap items-center justify-between gap-4 transition-colors ${
            isDarkMode 
              ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
              : 'bg-slate-100/90 border-slate-200 text-slate-800'
          }`}>
            {/* Demo Sector Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Live Interactive Showcase:
              </span>
              <div className="flex items-center bg-slate-950/40 p-1 rounded-xl border border-slate-700/50">
                <button
                  onClick={() => setActiveDemoTab('dental')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeDemoTab === 'dental'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Dental Clinic
                </button>
                <button
                  onClick={() => setActiveDemoTab('hospital')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeDemoTab === 'hospital'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Hospital & Health
                </button>
                <button
                  onClick={() => setActiveDemoTab('restaurant')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeDemoTab === 'restaurant'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Bistro & Dining
                </button>
              </div>
            </div>

            {/* Device Viewport Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 hidden sm:inline">Viewport:</span>
              <div className="flex items-center bg-slate-950/40 p-1 rounded-xl border border-slate-700/50">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded-lg transition-all ${
                    deviceView === 'desktop'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop 1920x1080 View"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded-lg transition-all ${
                    deviceView === 'tablet'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tablet iPad View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded-lg transition-all ${
                    deviceView === 'mobile'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Mobile iPhone View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Browser Window Mockup Frame */}
          <div className={`border-x border-b rounded-b-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isDarkMode 
              ? 'bg-slate-950 border-slate-800 shadow-blue-500/10' 
              : 'bg-white border-slate-200 shadow-slate-300'
          }`}>
            {/* Browser Address Bar */}
            <div className={`px-4 py-2.5 border-b flex items-center gap-3 text-xs ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className={`flex-1 mx-2 sm:mx-8 py-1 px-3 rounded-lg border flex items-center justify-between font-mono text-[11px] ${
                isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
              }`}>
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">https://</span>
                  <span>{activeDemoTab}.apexcraft.studio/live-preview</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 font-sans font-bold">
                  99.8 PageSpeed
                </span>
              </div>
            </div>

            {/* Inner Simulated Website Body with Container Constraint */}
            <div className={`p-4 sm:p-8 flex justify-center bg-gradient-to-b ${
              isDarkMode ? 'from-slate-900 to-slate-950' : 'from-slate-50 to-white'
            }`}>
              <div className={`transition-all duration-500 rounded-xl overflow-hidden border shadow-lg ${
                deviceView === 'desktop'
                  ? 'w-full'
                  : deviceView === 'tablet'
                    ? 'w-[720px] max-w-full'
                    : 'w-[360px] max-w-full'
              } ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'}`}>
                
                {/* Simulated Header */}
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs">
                      ⚡
                    </div>
                    <span>{currentDemo.title}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span>Treatments & Services</span>
                    <span>Before & After</span>
                    <span>Patient Reviews</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 shadow-sm">
                    {currentDemo.cta}
                  </button>
                </div>

                {/* Simulated Hero Body */}
                <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                      {currentDemo.badge}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-3">
                      {currentDemo.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                      {currentDemo.subtext}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button 
                        onClick={() => {
                          setActivePage('portfolio');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md flex items-center gap-1.5"
                      >
                        <span>View Full Live Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs text-slate-400 font-medium">
                        {currentDemo.stats}
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-700/50 group">
                    <img 
                      src={currentDemo.image} 
                      alt={currentDemo.title}
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <div className="text-[11px] text-cyan-300 font-mono font-medium">CONVERSION SURGE</div>
                        <div className="text-lg font-extrabold">+340% Appointments in 60 Days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border text-center transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200/80 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="font-heading font-black text-3xl sm:text-4xl text-blue-500 mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className={`font-bold text-sm sm:text-base ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
