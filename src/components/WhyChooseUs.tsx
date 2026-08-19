import React from 'react';
import { 
  Check, 
  X, 
  Zap, 
  ShieldCheck, 
  Rocket, 
  Code2, 
  Smartphone, 
  Search, 
  Crown,
  HeartHandshake
} from 'lucide-react';
import { PageType } from '../types';

interface WhyChooseUsProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

const COMPARISON_ROWS = [
  {
    feature: 'Core Architecture',
    apexcraft: 'Bespoke React & Tailwind (Clean 0% Bloat)',
    cheapFreelancer: 'Slow $40 ThemeForest WordPress Template',
    bloatedAgency: 'Monolithic CMS with heavy overhead plugins',
  },
  {
    feature: 'Google PageSpeed Score',
    apexcraft: '98 - 100/100 Core Web Vitals Guaranteed',
    cheapFreelancer: '35 - 55/100 (Fails Google Mobile Vitals)',
    bloatedAgency: '70 - 85/100 (Unused heavy JavaScript libraries)',
  },
  {
    feature: 'Conversion Rate Engineering',
    apexcraft: 'Deep CRO psychology, 1-click WhatsApp & booking funnels',
    cheapFreelancer: 'Generic contact form with high friction',
    bloatedAgency: 'Focuses on visual art over sales & inquiries',
  },
  {
    feature: 'Code & Asset Ownership',
    apexcraft: '100% Full Ownership (Zero lock-in hostages)',
    cheapFreelancer: 'Disorganized hosting / missing credentials',
    bloatedAgency: 'Proprietary platform fees & hostage contracts',
  },
  {
    feature: 'Who Actually Builds It?',
    apexcraft: 'Senior Lead Architect with 9+ years experience',
    cheapFreelancer: 'Inexperienced junior / outsourced overseas',
    bloatedAgency: 'Unsupervised junior interns & account managers',
  },
  {
    feature: 'Delivery Speed',
    apexcraft: '7 - 16 Business Days (Agile Sprints)',
    cheapFreelancer: 'Unpredictable delays & ghosting',
    bloatedAgency: '3 to 6 Months of bloated meetings',
  },
  {
    feature: 'Transparent Pricing',
    apexcraft: 'Fixed Upfront Milestone Billing ($1.5k - $5k)',
    cheapFreelancer: 'Cheap bait-and-switch with hidden add-on costs',
    bloatedAgency: '$20,000 - $50,000+ with hourly creep',
  },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>The ApexCraft Standard</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Why Industry Leaders Choose ApexCraft
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            See the unfiltered difference between our bespoke engineering, cheap overseas templates, and slow $30k corporate agency bureaucracies.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-colors ${
          isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className={isDarkMode ? 'bg-slate-950/80 border-b border-slate-800' : 'bg-slate-100 border-b border-slate-200'}>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Comparison Matrix
                  </th>
                  <th className="p-5 text-sm font-heading font-black text-blue-400 bg-blue-950/30 border-x border-blue-500/30 w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>ApexCraft Studio</span>
                    </div>
                  </th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/5">
                    Cheap $500 Freelancers
                  </th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/5">
                    $25k Bloated Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={isDarkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50'}>
                    <td className="p-5 font-bold text-slate-300">
                      {row.feature}
                    </td>
                    <td className="p-5 font-semibold text-white bg-blue-950/20 border-x border-blue-500/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.apexcraft}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.cheapFreelancer}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.bloatedAgency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Core Value Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6 text-amber-400" />,
              title: 'Sub-Second Speed',
              desc: 'Every millisecond counts. We optimize assets, prefetch routes, and guarantee 99+ Core Web Vitals to maximize search rank.',
            },
            {
              icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
              title: 'Thumb-Zone UX',
              desc: '70%+ traffic is mobile. We design 1-tap WhatsApp consultation triggers and sticky booking bars right where thumbs naturally rest.',
            },
            {
              icon: <Search className="w-6 h-6 text-emerald-400" />,
              title: 'Local Google SEO',
              desc: 'Schema.org structured data, LocalBusiness schema, and clean semantic markup engineered to win top Google 3-pack map rankings.',
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
              title: 'Zero Hostage Policy',
              desc: 'You own 100% of your source code, domain, and graphics. No locked platforms or vendor dependency traps ever.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 w-fit mb-4">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-white">
                {card.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
