import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, CheckCircle2, Play, Quote, ShieldCheck, Award, MessageSquare } from 'lucide-react';
import { PageType } from '../types';

interface TestimonialsSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section id="testimonials-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Verified 4.98★ Client Success Records</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Loved by Doctors, Founders & Business Leaders Worldwide
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Read raw, verified reviews from clients who transformed their digital presence and scaled their monthly revenue.
          </p>

          {/* Social Proof Badges Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-blue-400 font-extrabold text-sm">G</span>
              <span>4.9 / 5.0 Google Reviews (140+ Verified)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-rose-400 font-extrabold text-sm">C</span>
              <span>Clutch Top Web Developer 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-emerald-400 font-extrabold text-sm">★</span>
              <span>100% 5-Star Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/80 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header: Stars & Metric Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.metric}
                  </span>
                </div>

                {/* Review Quote Body */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 italic ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold text-slate-500">
                  {t.verifiedSource}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Story Highlight Banner */}
        <div className={`mt-16 p-8 rounded-3xl border relative overflow-hidden transition-colors ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border-blue-500/30'
            : 'bg-blue-50 border-blue-200'
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-2">
                Video Case Study Spotlight
              </span>
              <h3 className={`font-heading font-black text-2xl sm:text-3xl mb-3 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                How Apex Dental Scaled to $420k+ in Annual Cosmetic Cases
              </h3>
              <p className={`text-sm mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Hear Dr. Marcus Vance explain how a custom-built website replaced cold phone calls with an automated patient intake pipeline.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                <span>⏱ 2 min 45 sec video</span>
                <span>•</span>
                <span>Verified Client Case</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group cursor-pointer w-full lg:w-96 shrink-0"
              onClick={() => setActiveVideoModal('Apex Dental Case Study')}
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop"
                alt="Video Case Study Preview"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Simulation Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 max-w-2xl w-full text-center text-white">
            <h4 className="font-bold text-lg mb-2">{activeVideoModal}</h4>
            <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-video flex flex-col items-center justify-center p-8 mb-4 border border-slate-800">
              <Play className="w-12 h-12 text-blue-400 mb-3" />
              <p className="text-xs text-slate-400 max-w-md">
                "Our consultation inquiries jumped 340% within 60 days. Alex's conversion architecture was the best marketing investment we made this year."
              </p>
              <span className="text-xs font-bold text-cyan-400 mt-3">— Dr. Marcus Vance, Apex Dental</span>
            </div>
            <button
              onClick={() => setActiveVideoModal(null)}
              className="px-6 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white"
            >
              Close Video Player
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
