import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/mockData';
import { 
  Compass, 
  Palette, 
  Code2, 
  Zap, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PageType } from '../types';

interface ProcessSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Compass': return <Compass className="w-5 h-5 text-blue-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <span>Seamless & Predictable Execution</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            From Initial Idea to Live Revenue Engine in 6 Steps
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We work in transparent, sprint-based milestones with zero guesswork. Here is exactly how we take your project to launch.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border relative transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    STEP {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className={`font-heading font-extrabold text-xl mb-3 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-4 border-t border-slate-800/60">
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                  Milestone Deliverable:
                </div>
                <div className="text-xs font-semibold text-cyan-400">
                  ⚡ {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Call */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
          >
            <span>Ready to Start Your Project? Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
