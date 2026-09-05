import React from 'react';
import { 
  Award, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Globe2,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { PageType } from '../types';
import founderPortraitImg from '../assets/images/founder_portrait_1788606413453.jpg';

interface AboutSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

const TECH_STACK = [
  { name: 'React 19 & Next.js', category: 'Frontend Engine' },
  { name: 'TypeScript', category: 'Type Safety' },
  { name: 'Tailwind CSS v4', category: 'Styling' },
  { name: 'Framer Motion', category: 'Micro-Animations' },
  { name: 'Figma & Design Systems', category: 'UI/UX Craft' },
  { name: 'Node.js & Express', category: 'Backend & APIs' },
  { name: 'Stripe & OpenTable APIs', category: 'Checkout & Bookings' },
  { name: 'Schema.org & GA4', category: 'SEO & Attribution' },
];

const TIMELINE = [
  { year: '2017', title: 'Graduated in Computer Science & Interaction Design', desc: 'Specialized in human-computer interaction and web performance.' },
  { year: '2019', title: 'Senior UX Consultant at Silicon Valley Agency', desc: 'Designed high-converting landing pages for Series B & C funded tech companies.' },
  { year: '2021', title: 'Founded ApexCraft Web Architecture Studio', desc: 'Shifted focus to high-value local business sectors (Dentistry, Hospitals, Luxury Resorts).' },
  { year: '2024', title: '100+ Live Websites & Awwwards Honors', desc: 'Generated over $14M in verified client revenue pipelines globally.' },
  { year: '2026', title: 'Pioneering AI-Powered Conversion Workflows', desc: 'Engineering sub-second web platforms for clients across 14+ countries.' },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  return (
    <section id="about-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Personal Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Profile Photo & Credentials Card */}
          <div className="lg:col-span-5 relative">
            <div className={`p-4 rounded-3xl border shadow-2xl relative overflow-hidden transition-colors ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img
                  src={founderPortraitImg}
                  alt="Alex Rivera - Lead Web Architect & Founder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md">
                    Lead Web Architect & Founder
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white mt-1">
                    Alex Rivera
                  </h3>
                  <p className="text-xs text-slate-300">
                    Bespoke Web Developer & CRO Specialist
                  </p>
                </div>
              </div>

              {/* Verified Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-heading font-bold text-base text-blue-400">9+ Years</div>
                  <div className="text-[10px] text-slate-400">Engineering Craft</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-heading font-bold text-base text-emerald-400">180+</div>
                  <div className="text-[10px] text-slate-400">Websites Shipped</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Brand & Digital Agency</span>
            </div>

            <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-950'
            }`}>
              "A great website shouldn't just look pretty. It should generate predictable revenue."
            </h2>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <p>
                Hi, I'm Alex Rivera. Over the past 9 years, I've watched countless business owners spend thousands on slow, bloated WordPress templates that fail to generate a single paying customer.
              </p>
              <p>
                At ApexCraft, I combine high-end editorial aesthetics (the kind you see on Awwwards and Apple) with ruthless conversion engineering. Every button placement, headline, and sub-second animation is scientifically calibrated to build trust and prompt action.
              </p>
              <p>
                Whether you run a private cosmetic dental practice, a multi-specialty hospital, an artisan bistro, or a high-growth tech startup, my goal is simple: to make your business the undisputed market leader in your city.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Zero Bloat Policy', desc: 'No heavy themes or 40+ plugins. Custom lightweight React code only.' },
                { title: 'Obsessive Polish', desc: 'Apple-grade typography, micro-interactions, and harmonic spacing.' },
                { title: 'Revenue Accountability', desc: 'We measure success by appointments, bookings, and cash flow.' },
                { title: 'Direct Partnership', desc: 'You work directly with me, not an outsourced junior intern.' },
              ].map((val, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs text-white">{val.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{val.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className={`p-8 rounded-3xl border mb-20 ${
          isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading font-black text-2xl mb-2">
              Modern Battle-Tested Technology Stack
            </h3>
            <p className="text-xs text-slate-400">
              We leverage modern industry-standard frameworks to ensure 99+ Core Web Vitals and infinite scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TECH_STACK.map((tech, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center">
                <div className="font-bold text-sm text-white">{tech.name}</div>
                <div className="text-[10px] text-cyan-400 mt-1 uppercase font-mono">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-heading font-black text-2xl sm:text-3xl mb-2">
              The Journey & Milestones
            </h3>
            <p className="text-xs text-slate-400">
              A track record of continuous craftsmanship and client success.
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-800">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center justify-between sm:justify-normal ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                } gap-8`}
              >
                <div className="w-full sm:w-1/2 pl-14 sm:pl-0 sm:pr-8 sm:text-right even:sm:text-left even:sm:pl-8 even:sm:pr-0">
                  <div className={`p-5 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {item.year}
                    </span>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
