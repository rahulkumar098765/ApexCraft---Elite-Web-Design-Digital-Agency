import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Target, ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface RoiCalculatorProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

const BUSINESS_BENCHMARKS = [
  { id: 'dental', name: 'Dental Clinic / Implants', avgOrder: 2200, defaultTraffic: 1500, label: 'Average Treatment Value' },
  { id: 'hospital', name: 'Hospital / Specialty Clinic', avgOrder: 3500, defaultTraffic: 3000, label: 'Average Inpatient Consult' },
  { id: 'hotel', name: 'Luxury Hotel / Resort', avgOrder: 650, defaultTraffic: 4000, label: 'Average Booking Value' },
  { id: 'restaurant', name: 'Fine Dining Restaurant', avgOrder: 120, defaultTraffic: 2500, label: 'Average Table Check' },
  { id: 'gym', name: 'Gym / Fitness Membership', avgOrder: 900, defaultTraffic: 1800, label: 'Annual Member Value' },
  { id: 'realestate', name: 'Real Estate Brokerage', avgOrder: 8500, defaultTraffic: 1200, label: 'Average Commission' },
  { id: 'ecommerce', name: 'E-Commerce Brand', avgOrder: 85, defaultTraffic: 8000, label: 'Average Order Value' },
];

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState(BUSINESS_BENCHMARKS[0]);
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(selectedIndustry.defaultTraffic);
  const [currentConversion, setCurrentConversion] = useState<number>(1.5); // %
  const [targetConversion, setTargetConversion] = useState<number>(5.2); // %
  const [clientValue, setClientValue] = useState<number>(selectedIndustry.avgOrder);

  // Calculations
  const currentMonthlyLeads = (monthlyTraffic * (currentConversion / 100));
  const newMonthlyLeads = (monthlyTraffic * (targetConversion / 100));
  const additionalLeadsPerMonth = Math.round(newMonthlyLeads - currentMonthlyLeads);

  const currentRevenue = currentMonthlyLeads * clientValue;
  const newRevenue = newMonthlyLeads * clientValue;
  const monthlyRevenueGain = Math.round(newRevenue - currentRevenue);
  const annualRevenueGain = monthlyRevenueGain * 12;

  const handleIndustryChange = (benchId: string) => {
    const found = BUSINESS_BENCHMARKS.find((b) => b.id === benchId);
    if (found) {
      setSelectedIndustry(found);
      setClientValue(found.avgOrder);
      setMonthlyTraffic(found.defaultTraffic);
    }
  };

  return (
    <section className={`py-16 sm:py-24 border-y transition-colors ${
      isDarkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive ROI & Revenue Growth Model</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-4xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Calculate Your Website's Hidden Revenue Potential
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            See exactly how much extra monthly revenue an optimized, sub-second ApexCraft website unlocks for your specific business.
          </p>
        </div>

        <div className={`p-6 sm:p-10 rounded-3xl border ${
          isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Industry selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Select Your Business Archetype:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BUSINESS_BENCHMARKS.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => handleIndustryChange(b.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-left truncate transition-all ${
                        selectedIndustry.id === b.id
                          ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                          : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Visitors Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-bold text-slate-300">Estimated Monthly Website Visitors:</span>
                  <span className="font-mono font-bold text-blue-400 text-sm">
                    {monthlyTraffic.toLocaleString()} Visitors/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="30000"
                  step="100"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Average Customer Value Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-bold text-slate-300">{selectedIndustry.label}:</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    ${clientValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="15000"
                  step="50"
                  value={clientValue}
                  onChange={(e) => setClientValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Conversion rate comparison */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-[11px] text-slate-400 mb-1">Current Conversion Rate</div>
                  <div className="font-mono text-sm font-bold text-rose-400">{currentConversion}% (Industry Average)</div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg mt-2 accent-rose-500"
                  />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 mb-1">ApexCraft Conversion Rate</div>
                  <div className="font-mono text-sm font-bold text-cyan-400">{targetConversion}% (Engineered)</div>
                  <input
                    type="range"
                    min="3.5"
                    max="9.0"
                    step="0.1"
                    value={targetConversion}
                    onChange={(e) => setTargetConversion(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg mt-2 accent-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Results Display (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 border border-blue-500/40 shadow-2xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Projected Revenue Unlock
                </span>
                
                <div className="mb-4">
                  <div className="text-xs text-slate-400">Additional Monthly New Clients</div>
                  <div className="font-heading font-black text-3xl text-white">
                    +{additionalLeadsPerMonth} <span className="text-sm font-normal text-slate-400">new clients/mo</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-4">
                  <div className="text-xs text-slate-400 mb-1">Projected Annual Revenue Increase:</div>
                  <div className="font-heading font-black text-3xl sm:text-4xl text-emerald-400">
                    +${annualRevenueGain.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-400/80 mt-1">
                    (+${monthlyRevenueGain.toLocaleString()}/month recurring value)
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                  A high-converting website isn't an expense—it's an automated patient/client acquisition asset that pays for itself in weeks.
                </p>

                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Unlock This Revenue For My Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
