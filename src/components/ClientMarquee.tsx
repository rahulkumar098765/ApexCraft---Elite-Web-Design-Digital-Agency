import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';
import { ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';

interface ClientMarqueeProps {
  isDarkMode: boolean;
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({ isDarkMode }) => {
  return (
    <div className={`py-12 border-y overflow-hidden transition-colors ${
      isDarkMode 
        ? 'bg-slate-950/60 border-slate-800/80' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
          Trusted by high-growth medical clinics, luxury hospitality, and global brands
        </p>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap py-2">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((item, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 shadow-sm'
              }`}
            >
              <span className="font-heading font-extrabold text-sm tracking-tight text-blue-500">
                {item.logo}
              </span>
              <span className="text-[11px] text-slate-400 font-medium px-2 py-0.5 rounded-full bg-slate-800/50">
                {item.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
