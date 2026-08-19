import React, { useState } from 'react';
import { 
  PRICING_PLANS, 
  CUSTOM_SCOPE_ADDONS,
  SERVICES
} from '../data/mockData';
import { 
  PricingPlan, 
  PageType 
} from '../types';
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  DollarSign, 
  FileText,
  Sliders,
  CheckCircle2,
  Copy,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
  preselectedService?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  setActivePage,
  isDarkMode,
  preselectedService,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'calculator'>('packages');
  
  // Scope Calculator State
  const [baseTier, setBaseTier] = useState<number>(1499);
  const [tierName, setTierName] = useState<string>('Starter Business');
  const [pageCount, setPageCount] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'booking-engine',
    'whatsapp-bot',
  ]);
  const [copiedProposal, setCopiedProposal] = useState(false);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculateAddonsTotal = () => {
    return selectedAddons.reduce((acc, addonId) => {
      const found = CUSTOM_SCOPE_ADDONS.find((a) => a.id === addonId);
      return acc + (found ? found.price : 0);
    }, 0);
  };

  // Additional pages beyond standard 5
  const extraPagesCost = Math.max(0, pageCount - 5) * 90;
  const grandTotal = baseTier + calculateAddonsTotal() + extraPagesCost;

  const estimatedDays = Math.round(7 + (pageCount * 0.8) + (selectedAddons.length * 1.2));

  const handleCopyProposal = () => {
    const text = `APEXCRAFT STUDIO - CUSTOM SCOPE ESTIMATE
---------------------------------------------
Base Package: ${tierName} ($${baseTier})
Total Pages: ${pageCount} (+$${extraPagesCost})
Selected Add-ons:
${selectedAddons.map(id => {
  const a = CUSTOM_SCOPE_ADDONS.find(item => item.id === id);
  return a ? `- ${a.name}: $${a.price}` : '';
}).filter(Boolean).join('\n')}

ESTIMATED INVESTMENT: $${grandTotal.toLocaleString()}
ESTIMATED TIMELINE: ~${estimatedDays} Business Days
100% Code Ownership • 100/100 Core Web Vitals • Post-Launch Warranty Included.
Contact Alex Rivera: contact@apexcraft.studio
---------------------------------------------`;

    navigator.clipboard.writeText(text);
    setCopiedProposal(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedProposal(false), 3000);
  };

  return (
    <section id="pricing-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <span>Transparent Fixed Pricing & Zero Hidden Fees</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            High ROI Investment For Serious Brands
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            No hourly billing creep, no bloated agency markups. Choose a battle-tested tier or customize your exact scope below.
          </p>

          {/* View Toggle */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl border border-slate-700 bg-slate-900/60 shadow-inner">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'packages'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard Fixed Packages
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'calculator'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Interactive Scope & Cost Calculator</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STANDARD FIXED TIERS */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/15 bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-slate-950 scale-[1.02] lg:-translate-y-2'
                    : isDarkMode
                      ? 'bg-slate-900/60 border-slate-800'
                      : 'bg-white border-slate-200 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 shadow-lg">
                    ★ Most Popular Choice
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className={`font-heading font-black text-2xl ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-400 font-bold">$</span>
                      <span className="font-heading font-black text-4xl sm:text-5xl text-blue-500">
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ one-time investment</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-300">
                      <span className="flex items-center gap-1 text-cyan-400">
                        <Clock className="w-3.5 h-3.5" />
                        {plan.deliveryTime}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-medium">
                        {plan.support}
                      </span>
                    </div>
                  </div>

                  {/* Included Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      What's Included:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-3 border-t border-slate-800/50 space-y-2">
                        {plan.notIncluded.map((notFeat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-500 line-through">
                            <X className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                            <span>{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30 hover:scale-[1.02]'
                        : 'text-white bg-slate-800 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <span>Get Started with {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: INTERACTIVE CUSTOM SCOPE CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className={`p-6 sm:p-10 rounded-3xl border transition-all ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Configuration Panel (8 Cols) */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl mb-1">
                    1. Choose Base Foundation Tier
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Select the architectural baseline matching your business size.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 1499, name: 'Starter Business', pages: 5, time: '7-10 Days' },
                      { id: 2999, name: 'Growth & Scale', pages: 12, time: '12-16 Days' },
                      { id: 4999, name: 'Enterprise Platform', pages: 20, time: '20-28 Days' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => {
                          setBaseTier(tier.id);
                          setTierName(tier.name);
                          setPageCount(tier.pages);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          baseTier === tier.id
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                            : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-bold text-sm">{tier.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{tier.time}</div>
                        <div className="font-heading font-black text-lg text-blue-400 mt-2">
                          ${tier.id.toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Page Count Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-extrabold text-lg">
                      2. Total Pages Needed: <span className="text-cyan-400">{pageCount} Pages</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {pageCount <= 5 ? 'Included in base tier' : `+${pageCount - 5} extra pages ($${extraPagesCost})`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="30"
                    value={pageCount}
                    onChange={(e) => setPageCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>3 Pages (Landing)</span>
                    <span>12 Pages (Standard)</span>
                    <span>30 Pages (Large Portal)</span>
                  </div>
                </div>

                {/* Modular Addon Features */}
                <div>
                  <h3 className="font-heading font-extrabold text-lg mb-1">
                    3. Select Modular Conversion Features & Integrations
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Toggle individual high-impact modules for your website.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CUSTOM_SCOPE_ADDONS.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                            isChecked
                              ? 'bg-blue-950/40 border-blue-500/80 shadow-md'
                              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-lg border flex items-center justify-center mt-0.5 ${
                              isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-800'
                            }`}>
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <div>
                              <div className="font-bold text-xs text-white">{addon.name}</div>
                              <div className="text-[11px] text-slate-400 mt-0.5">{addon.description}</div>
                            </div>
                          </div>
                          <span className="font-mono text-xs font-bold text-cyan-400 shrink-0">
                            +${addon.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Summary Card (4 Cols) */}
              <div className="lg:col-span-4">
                <div className="p-6 rounded-3xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl sticky top-28">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1 block">
                    Instant Scope Breakdown
                  </span>
                  <h4 className="font-heading font-black text-2xl mb-4">
                    Project Cost Summary
                  </h4>

                  <div className="space-y-3 text-xs border-b border-slate-800 pb-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{tierName} Base:</span>
                      <span className="font-mono font-bold">${baseTier.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Pages ({pageCount}):</span>
                      <span className="font-mono font-bold">+${extraPagesCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Selected Addons ({selectedAddons.length}):</span>
                      <span className="font-mono font-bold">+${calculateAddonsTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-cyan-400 font-semibold">
                      <span>Est. Turnaround Time:</span>
                      <span>~{estimatedDays} Business Days</span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="mb-6">
                    <div className="text-xs text-slate-400">Estimated Total Investment</div>
                    <div className="font-heading font-black text-4xl text-emerald-400">
                      ${grandTotal.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      Fixed milestone billing (50% upfront, 50% on live launch)
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setActivePage('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Discovery Call With This Scope</span>
                    </button>

                    <button
                      onClick={handleCopyProposal}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 flex items-center justify-center gap-2"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedProposal ? '✓ Copied to Clipboard!' : 'Copy Proposal Summary'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
