import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { PageType } from '../types';

interface FaqSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers & Zero Ambiguity</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`mt-4 text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Everything you need to know about our process, code ownership, turnaround, and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isDarkMode
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`font-heading font-bold text-base sm:text-lg ${
                    isOpen ? 'text-blue-500' : isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-blue-600/20 border-blue-500/40 text-blue-400' : 'border-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 pt-0 text-xs sm:text-sm leading-relaxed border-t border-slate-800/40 pt-4 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? CTA */}
        <div className={`mt-12 p-6 rounded-2xl border text-center ${
          isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <p className="text-xs sm:text-sm text-slate-400">
            Have a question not covered here?
          </p>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-2 text-sm font-bold text-blue-500 underline decoration-cyan-400 underline-offset-4 hover:text-cyan-400"
          >
            Ask Alex directly via WhatsApp or Discovery Call →
          </button>
        </div>
      </div>
    </section>
  );
};
