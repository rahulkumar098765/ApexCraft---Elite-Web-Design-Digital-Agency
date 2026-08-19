import React, { useState } from 'react';
import { 
  SERVICES 
} from '../data/mockData';
import { 
  ServiceItem, 
  IndustryCategory, 
  PageType 
} from '../types';
import { 
  ArrowRight, 
  Check, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  DollarSign,
  PhoneCall,
  Activity,
  Stethoscope,
  Building2,
  GraduationCap,
  Utensils,
  Palmtree,
  Dumbbell,
  Home,
  ShoppingBag,
  RefreshCw,
  Headphones,
  X
} from 'lucide-react';

interface ServicesSectionProps {
  setActivePage: (page: PageType) => void;
  onOpenQuickQuote: (preselectedService?: string) => void;
  isDarkMode: boolean;
}

const CATEGORY_TABS: { id: IndustryCategory | 'growth' | 'technical' | 'all'; label: string }[] = [
  { id: 'all', label: 'All Services (18+)' },
  { id: 'healthcare', label: 'Healthcare & Clinics' },
  { id: 'hospitality', label: 'Dining & Hotels' },
  { id: 'wellness', label: 'Gyms & Salons' },
  { id: 'education', label: 'Schools & Academies' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'corporate', label: 'Corporate & SaaS' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  setActivePage,
  onOpenQuickQuote,
  isDarkMode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-blue-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-500" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-indigo-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-500" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-500" />;
      case 'Palmtree': return <Palmtree className="w-6 h-6 text-teal-500" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-500" />;
      case 'Home': return <Home className="w-6 h-6 text-blue-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-indigo-400" />;
      default: return <Zap className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="services-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
            <span>Specialized High-Converting Solutions</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Websites Engineered For Your Exact Business Model
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We don’t believe in generic one-size-fits-all templates. Every website is built from the ground up to solve your industry’s specific customer acquisition challenges.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              id={`service-tab-${tab.id}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === tab.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25'
                  : isDarkMode
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/80 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
                  High Demand
                </span>
              )}

              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl border shrink-0 transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-800/80 border-slate-700 group-hover:border-blue-500/50' 
                      : 'bg-blue-50 border-blue-100 group-hover:bg-blue-100'
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-snug group-hover:text-blue-500 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-slate-950'
                    }`}>
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {service.conversionBoost}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm mb-5 leading-relaxed line-clamp-2 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {service.shortDesc}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Conversions Built-in:
                  </div>
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Price, Turnaround, & Modal Action */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Starting from</div>
                  <div className="font-heading font-black text-lg text-blue-500">
                    ${service.startingPrice.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDarkMode
                        ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                        : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onOpenQuickQuote(service.id)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm flex items-center gap-1"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Industry Solutions */}
        <div className={`mt-14 p-8 rounded-3xl border text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border-blue-500/30'
            : 'bg-gradient-to-r from-blue-50 via-cyan-50 to-white border-blue-200'
        }`}>
          <div>
            <h3 className={`font-heading font-extrabold text-xl sm:text-2xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Don't see your exact business category listed above?
            </h3>
            <p className={`mt-1 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              We build custom high-converting web apps for specialized practices, diagnostic networks, and multi-location franchises.
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="service-custom-consult-btn"
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request Custom Architecture Call</span>
          </button>
        </div>
      </div>

      {/* Service Detailed Specs Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400">
                {getServiceIcon(activeServiceModal.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                  Detailed Service Specification
                </span>
                <h3 className="font-heading font-black text-2xl">
                  {activeServiceModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activeServiceModal.fullDesc}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50">
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Timeline</span>
                </div>
                <div className="font-bold text-sm text-white">
                  {activeServiceModal.timeframe}
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50">
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Expected Conversion Surge</span>
                </div>
                <div className="font-bold text-sm text-emerald-400">
                  {activeServiceModal.conversionBoost}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Included High-Impact Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeServiceModal.keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Full Deliverables Package:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeServiceModal.deliverables.map((d, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Starting Investment</span>
                <span className="font-heading font-black text-2xl text-blue-500">
                  ${activeServiceModal.startingPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const id = activeServiceModal.id;
                    setActiveServiceModal(null);
                    onOpenQuickQuote(id);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md flex items-center gap-2"
                >
                  <span>Build Custom Scope Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
