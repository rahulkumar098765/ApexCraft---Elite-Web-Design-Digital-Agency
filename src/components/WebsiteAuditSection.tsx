import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Zap, 
  TrendingUp, 
  Download,
  PhoneCall,
  Activity,
  ShieldCheck,
  Mail,
  Loader2
} from 'lucide-react';
import { AuditResult, PageType } from '../types';
import confetti from 'canvas-confetti';
import { submitLeadToSupabase } from '../lib/supabase';

interface WebsiteAuditSectionProps {
  setActivePage: (page: PageType) => void;
  isDarkMode: boolean;
}

export const WebsiteAuditSection: React.FC<WebsiteAuditSectionProps> = ({
  setActivePage,
  isDarkMode,
}) => {
  const [inputUrl, setInputUrl] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputIndustry, setInputIndustry] = useState('Dental Clinic');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl) return;

    setIsAnalyzing(true);
    setAuditResult(null);

    // Save lead to Supabase if email or website is provided
    try {
      await submitLeadToSupabase({
        name: 'Audit Requester',
        email: inputEmail || 'unspecified@audit-lead.com',
        website_url: inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`,
        industry: inputIndustry,
        message: `Requested AI CRO & Core Web Vitals Audit for ${inputUrl}`,
        form_type: 'website_audit',
        metadata: {
          scanned_url: inputUrl,
          industry: inputIndustry
        }
      });
    } catch (err) {
      console.warn('Audit lead logging notice:', err);
    }

    // Simulate comprehensive AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      const generatedResult: AuditResult = {
        url: inputUrl.startsWith('http') ? inputUrl : `https://${inputUrl}`,
        industry: inputIndustry,
        overallScore: 58,
        scores: {
          cro: 52,
          speed: 48,
          seo: 64,
          design: 60,
          mobile: 65,
        },
        insights: [
          {
            type: 'critical',
            title: 'Mobile Load Latency (4.6s LCP)',
            description: 'Uncompressed hero assets and blocking third-party scripts cause over 48% of mobile visitors to bounce before reading headlines.',
          },
          {
            type: 'critical',
            title: 'Missing Direct 1-Tap Booking Triggers',
            description: 'Visitors must fill out a lengthy 7-field form instead of quick WhatsApp or instant slot booking, creating massive drop-off.',
          },
          {
            type: 'warning',
            title: 'Lack of Localized Social Proof & Reviews Above the Fold',
            description: 'No verified Google review badge or doctor credentials visible in the primary viewport to establish instant patient trust.',
          },
          {
            type: 'positive',
            title: 'Domain Authority & Basic SSL Intact',
            description: 'Valid HTTPS certificate and established domain history ready to capitalize on aggressive schema markup injection.',
          },
        ],
        recommendations: [
          'Rebuild hero section with sub-second LCP and high-contrast primary CTA ("Book Consultation")',
          'Implement persistent sticky mobile conversion bar with direct WhatsApp & Click-to-Call',
          'Inject medical/business JSON-LD Schema to capture Google Local 3-Pack rich snippets',
          'Add interactive before/after transformation slider and real patient photo badges',
          'Migrate to edge-cached React architecture to pass all 3 Google Core Web Vitals',
        ],
        estimatedRevenueUplift: '+180% to +320% Qualified Monthly Inquiries',
      };

      setAuditResult(generatedResult);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 1800);
  };

  return (
    <section id="ai-audit-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free AI Website & CRO Teardown</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Is Your Website Silently Losing You Paying Clients?
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Enter your website address below to receive an instant conversion audit analyzing speed, UX friction, mobile responsiveness, and revenue opportunities.
          </p>
        </div>

        {/* Input Card Form */}
        <div className={`max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl border shadow-2xl mb-12 transition-all ${
          isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <form onSubmit={handleRunAudit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-4 relative">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="e.g. www.yourbusiness.com"
                  required
                  className={`w-full py-3.5 px-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono ${
                    isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="sm:col-span-4 relative">
                <input
                  type="email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  placeholder="Your email (optional)"
                  className={`w-full py-3.5 px-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="sm:col-span-4">
                <select
                  value={inputIndustry}
                  onChange={(e) => setInputIndustry(e.target.value)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium ${
                    isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value="Dental Clinic">Dental Clinic</option>
                  <option value="Diagnostic Centre">Diagnostic Centre</option>
                  <option value="Hospital & Medical">Hospital & Medical</option>
                  <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                  <option value="Hotel & Resort">Hotel & Resort</option>
                  <option value="Gym & Fitness">Gym & Fitness</option>
                  <option value="Salon & Spa">Salon & Spa</option>
                  <option value="School & Academy">School & Academy</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="E-Commerce">E-Commerce Brand</option>
                  <option value="Corporate / Legal">Lawyer / Corporate</option>
                  <option value="SaaS & Startup">SaaS & Startup</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
            >
              {isAnalyzing ? (
                <>
                  <Activity className="w-5 h-5 animate-spin" />
                  <span>Auditing Core Web Vitals, CRO & Schema Markup...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Instant AI Audit & Growth Plan</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Audit Results Dashboard */}
        {auditResult && (
          <div className={`max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border animate-in fade-in slide-in-from-bottom-6 duration-300 ${
            isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
          }`}>
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                  Analysis Complete for {auditResult.industry}
                </span>
                <h3 className="font-heading font-black text-2xl truncate max-w-lg">
                  {auditResult.url}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xs text-slate-400">Overall Health Score</div>
                  <div className="font-heading font-black text-3xl text-amber-400">
                    {auditResult.overallScore} / 100
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-heading font-black text-xl text-amber-400">
                  C-
                </div>
              </div>
            </div>

            {/* Score Pill Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {[
                { label: 'CRO Conversion', score: auditResult.scores.cro, color: 'text-amber-400' },
                { label: 'Page Speed', score: auditResult.scores.speed, color: 'text-rose-400' },
                { label: 'Local SEO', score: auditResult.scores.seo, color: 'text-blue-400' },
                { label: 'Visual Design', score: auditResult.scores.design, color: 'text-cyan-400' },
                { label: 'Mobile UX', score: auditResult.scores.mobile, color: 'text-emerald-400' },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 truncate">{s.label}</div>
                  <div className={`font-heading font-black text-xl ${s.color} mt-1`}>
                    {s.score}%
                  </div>
                </div>
              ))}
            </div>

            {/* Critical Findings */}
            <div className="mb-8">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">
                Identified Friction Points & Bottlenecks:
              </h4>
              <div className="space-y-3">
                {auditResult.insights.map((insight, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                      insight.type === 'critical'
                        ? 'bg-rose-950/20 border-rose-900/40 text-rose-200'
                        : insight.type === 'warning'
                          ? 'bg-amber-950/20 border-amber-900/40 text-amber-200'
                          : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-200'
                    }`}
                  >
                    {insight.type === 'critical' && <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                    {insight.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
                    {insight.type === 'positive' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                    <div>
                      <div className="font-bold text-sm text-white">{insight.title}</div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended 5-Step Action Plan */}
            <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-800/60 mb-8">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-3">
                <TrendingUp className="w-4 h-4" />
                <span>ApexCraft Strategic Redesign Blueprint</span>
              </div>
              <div className="space-y-2 mb-4">
                {auditResult.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-blue-800/40 flex justify-between items-center text-xs">
                <span className="text-slate-300">Estimated Revenue Uplift Potential:</span>
                <span className="font-bold text-emerald-400 font-mono">{auditResult.estimatedRevenueUplift}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Want us to implement this exact optimization plan for your business?
              </div>
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Call to Fix These Bottlenecks</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
