import React, { useState } from 'react';
import { 
  PROJECTS 
} from '../data/mockData';
import { 
  ProjectItem, 
  IndustryCategory, 
  PageType 
} from '../types';
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Laptop, 
  Tablet, 
  Smartphone, 
  X, 
  Eye, 
  Star, 
  ShieldCheck,
  SplitSquareVertical,
  Sliders
} from 'lucide-react';

interface PortfolioSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

const PORTFOLIO_TABS: { id: IndustryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Featured Work' },
  { id: 'healthcare', label: 'Healthcare & Clinics' },
  { id: 'hospitality', label: 'Hospitality & Dining' },
  { id: 'wellness', label: 'Gyms & Spas' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'corporate', label: 'SaaS & Enterprise' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<IndustryCategory | 'all'>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);
  const [liveDemoModal, setLiveDemoModal] = useState<ProjectItem | null>(null);
  const [demoDevice, setDemoDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Before / After Slider state
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const featuredBeforeAfter = PROJECTS[0]; // Apex Dental

  return (
    <section id="portfolio-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mb-4">
            <span>Verified Results & Case Studies</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Proven Revenue Transformations
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Explore how our bespoke engineering turns underperforming legacy websites into market-dominating patient and client acquisition engines.
          </p>
        </div>

        {/* Interactive Before / After Spotlight Banner */}
        <div className={`mb-16 p-6 sm:p-8 rounded-3xl border transition-all ${
          isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-5/12">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-500 mb-2">
                <Sliders className="w-4 h-4" />
                <span>Interactive Transformation Slider</span>
              </div>
              <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl mb-3 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Apex Dental Clinic: Before & After Redesign
              </h3>
              <p className={`text-sm mb-6 leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Drag the divider to compare the outdated legacy site against our high-converting modern web application that increased cosmetic patient consultations by +340%.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-xs text-rose-400 font-bold uppercase">Before Redesign</div>
                  <div className="text-xs text-slate-400 mt-1">12 monthly inquiries • 4.8s load time • 1.8% conversion</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/60">
                  <div className="text-xs text-emerald-400 font-bold uppercase">After ApexCraft</div>
                  <div className="text-xs text-slate-200 mt-1">85+ monthly bookings • 0.8s load time • 7.9% conversion</div>
                </div>
              </div>

              <button
                onClick={() => setActiveCaseStudy(featuredBeforeAfter)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center gap-2"
              >
                <span>Read Full Dental Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Draggable Interactive Comparison Frame */}
            <div className="lg:w-7/12 w-full">
              <div
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-700"
                onMouseMove={(e) => isDraggingSlider && handleSliderMove(e)}
                onTouchMove={(e) => handleSliderMove(e)}
                onMouseDown={() => setIsDraggingSlider(true)}
                onMouseUp={() => setIsDraggingSlider(false)}
                onClick={handleSliderMove}
              >
                {/* AFTER Image (Full Layer Behind) */}
                <img
                  src={featuredBeforeAfter.afterImage || featuredBeforeAfter.image}
                  alt="Modern High Converting Website Redesign"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-lg">
                  AFTER: ApexCraft Redesign
                </div>

                {/* BEFORE Image (Clipped Layer on Top) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={featuredBeforeAfter.beforeImage || featuredBeforeAfter.image}
                    alt="Legacy Outdated Website"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75 max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-600 text-white shadow-lg">
                    BEFORE: Slow Legacy Site
                  </div>
                </div>

                {/* Draggable Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white border-2 border-white shadow-xl flex items-center justify-center font-bold text-xs">
                    ⇄
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-slate-400 mt-2 font-medium">
                👈 Drag or click across the image to compare Before vs. After 👉
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Industry Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              id={`portfolio-tab-${tab.id}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                selectedFilter === tab.id
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

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/90 shadow-xl'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl'
              }`}
            >
              {/* Card Image Banner with Hover Overlay */}
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-slate-700">
                    {project.industryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-200 truncate">
                    {project.client}
                  </div>
                  <button
                    onClick={() => setLiveDemoModal(project)}
                    className="p-2 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-md transition-transform active:scale-95 shadow-md flex items-center gap-1 text-[11px] font-bold"
                    title="Open Live Interactive Simulator"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>

              {/* Card Content & Metrics */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-heading font-extrabold text-xl tracking-tight mb-2 group-hover:text-blue-500 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm mb-6 leading-relaxed line-clamp-2 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.tagline}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border ${
                          isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="text-xs text-slate-400 font-medium truncate">
                          {metric.label}
                        </div>
                        <div className="font-heading font-black text-lg text-emerald-400">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills & Case Study Action */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveCaseStudy(project)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-all flex items-center gap-1.5 group-hover:bg-blue-600"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Deep-Dive Modal Drawer */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-10 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
              {activeCaseStudy.industryLabel} Case Study
            </div>
            
            <h3 className="font-heading font-black text-3xl mb-2">
              {activeCaseStudy.title}
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Client: <span className="font-semibold text-slate-200">{activeCaseStudy.client}</span>
            </p>

            <div className="rounded-2xl overflow-hidden mb-8 border border-slate-800">
              <img
                src={activeCaseStudy.image}
                alt={activeCaseStudy.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Metrics Ticker */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {activeCaseStudy.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 text-center">
                  <div className="font-heading font-black text-2xl text-emerald-400">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-1">
                    {m.label}
                  </div>
                  {m.sublabel && (
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {m.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl border border-rose-950/60 bg-rose-950/10">
                <h4 className="font-bold text-rose-400 text-sm mb-2 uppercase tracking-wide">
                  The Problem & Challenge:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCaseStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-blue-950/60 bg-blue-950/10">
                <h4 className="font-bold text-cyan-400 text-sm mb-2 uppercase tracking-wide">
                  The ApexCraft Solution:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCaseStudy.solution}
                </p>
              </div>
            </div>

            {/* Key Results Achieved */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Measurable Business Outcomes:
              </h4>
              <div className="space-y-2.5">
                {activeCaseStudy.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote if present */}
            {activeCaseStudy.testimonial && (
              <div className="p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-950/30 to-slate-900 mb-8">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm italic text-slate-200 mb-4">
                  "{activeCaseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={activeCaseStudy.testimonial.avatar}
                    alt={activeCaseStudy.testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <div className="font-bold text-sm text-white">
                      {activeCaseStudy.testimonial.author}
                    </div>
                    <div className="text-xs text-slate-400">
                      {activeCaseStudy.testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const proj = activeCaseStudy;
                  setActiveCaseStudy(null);
                  setLiveDemoModal(proj);
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Simulate Viewport</span>
              </button>

              <button
                onClick={() => {
                  setActiveCaseStudy(null);
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md flex items-center gap-2"
              >
                <span>Build Similar Website For My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Device Frame Simulator Modal */}
      {liveDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`relative w-full max-w-5xl rounded-3xl border p-4 sm:p-6 max-h-[95vh] flex flex-col ${
            isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Modal Topbar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h4 className="font-bold text-sm">{liveDemoModal.title}</h4>
                  <p className="text-[11px] text-slate-400">Interactive Responsive Viewport Simulator</p>
                </div>
              </div>

              {/* Viewport switcher buttons */}
              <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setDemoDevice('desktop')}
                  className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                    demoDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-4 h-4" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDemoDevice('tablet')}
                  className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                    demoDevice === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-4 h-4" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setDemoDevice('mobile')}
                  className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                    demoDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>

              <button
                onClick={() => setLiveDemoModal(null)}
                className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Device Canvas Frame */}
            <div className="flex-1 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/80">
              <div className={`transition-all duration-300 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl bg-slate-950 ${
                demoDevice === 'desktop'
                  ? 'w-full max-w-4xl h-[520px]'
                  : demoDevice === 'tablet'
                    ? 'w-[640px] max-w-full h-[520px]'
                    : 'w-[340px] max-w-full h-[520px]'
              }`}>
                {/* Simulated browser header */}
                <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-2 text-xs">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex-1 bg-slate-950 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 truncate">
                    https://client-preview.{liveDemoModal.id}.demo
                  </div>
                </div>

                {/* Simulated Web Viewport Body */}
                <div className="h-full overflow-y-auto p-4 bg-slate-900 text-white space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase">Live Showcase Simulation</span>
                    <h5 className="font-extrabold text-lg mt-1">{liveDemoModal.title}</h5>
                    <p className="text-xs text-slate-400 mt-1">{liveDemoModal.tagline}</p>
                    <div className="mt-3 flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 rounded text-xs font-bold">1-Click Booking</button>
                      <button className="px-3 py-1 bg-slate-700 rounded text-xs font-medium">WhatsApp Call</button>
                    </div>
                  </div>

                  <img
                    src={liveDemoModal.image}
                    alt={liveDemoModal.title}
                    className="w-full h-48 object-cover rounded-xl border border-slate-700"
                  />

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                      <div className="text-slate-400">Core Web Vitals</div>
                      <div className="font-bold text-emerald-400">100 / 100 Score</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                      <div className="text-slate-400">Booking Engine</div>
                      <div className="font-bold text-cyan-400">Integrated & Live</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
