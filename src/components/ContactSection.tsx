import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Globe2,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzkftxHx3okF_X2LhN_BAfnUj8jro7dO91yXeYC3xBOKAwJ2LeAKa8LlS7CqTuW9kI/exec";

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: 'Dental Clinic',
    budget: '$3,000 - $5,000',
    timeline: 'Within 2-3 weeks',
    currentWebsite: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.businessName,
      business_name: formData.businessName,
      industry: formData.industry,
      budget: formData.budget,
      timeline: formData.timeline,
      currentWebsite: formData.currentWebsite,
      current_website: formData.currentWebsite,
      website_url: formData.currentWebsite,
      message: formData.message,
      form_type: 'contact',
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleString(),
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      BusinessName: formData.businessName,
      Industry: formData.industry,
      Budget: formData.budget,
      Timeline: formData.timeline,
      CurrentWebsite: formData.currentWebsite,
      Message: formData.message,
      Date: new Date().toLocaleString(),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // Save to localStorage as a reliable backup
      try {
        const localLeads = JSON.parse(localStorage.getItem('apexcraft_leads') || '[]');
        localLeads.unshift(payload);
        localStorage.setItem('apexcraft_leads', JSON.stringify(localLeads.slice(0, 100)));
      } catch {
        // Safe fallback
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <section id="contact-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Access to Lead Architect</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Let's Build a Website That Dominates Your Market
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Book a complimentary 20-minute discovery call or send your project details below. You'll receive a detailed scope breakdown within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Timezone Clock (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Methods */}
            <div className={`p-8 rounded-3xl border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <h3 className="font-heading font-black text-2xl mb-6">
                Direct Contact Channel
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 shadow-lg shadow-cyan-500/5">
                  <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Official Email Channel</div>
                    <a href="mailto:THEBUZZUSAOFFICIAL@GMAIL.COM" className="font-heading font-bold text-base sm:text-lg text-white hover:text-cyan-300 transition-colors block truncate">
                      THEBUZZUSAOFFICIAL@GMAIL.COM
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Avg Response Time: &lt; 2 Hours (Priority Inbox)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="p-3 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Global Digital Studio</div>
                    <div className="font-bold text-sm text-white">
                      Worldwide Client Engagements
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Timezones Status */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                  <span>Global Availability Hubs</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800">
                    <span className="text-slate-400">San Francisco:</span>
                    <span className="font-mono text-emerald-400 font-bold ml-1">Active</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800">
                    <span className="text-slate-400">London:</span>
                    <span className="font-mono text-emerald-400 font-bold ml-1">Active</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800">
                    <span className="text-slate-400">Dubai:</span>
                    <span className="font-mono text-emerald-400 font-bold ml-1">Active</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800">
                    <span className="text-slate-400">Singapore:</span>
                    <span className="font-mono text-emerald-400 font-bold ml-1">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Priority Email Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-950/50 via-slate-900 to-cyan-950/40 border border-cyan-500/30 text-white flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base">Prefer Email Directly?</h4>
                <p className="text-xs text-slate-300">Drop your brief directly into our priority inbox.</p>
              </div>
              <a
                href="mailto:THEBUZZUSAOFFICIAL@GMAIL.COM?subject=Website%20Design%20%26%20Development%20Inquiry"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Now</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Project Discovery Intake Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl transition-all ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-3xl text-white">
                    Project Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-white">{formData.name}</span>. Alex will review your requirements for <span className="font-bold text-cyan-400">{formData.businessName}</span> and email a bespoke proposal & video teardown within 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-200"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading font-black text-2xl mb-1">
                      Project Discovery & Scope Intake
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in the details below to receive a guaranteed fixed-price estimate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Jenkins / Marcus Vance"
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@yourpractice.com"
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Business / Clinic Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Dental Studio"
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 234-5678"
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Industry / Category *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="Dental Clinic">Dental Clinic</option>
                        <option value="Diagnostic Centre">Diagnostic & Pathology</option>
                        <option value="Hospital & Medical">Hospital & Specialty Healthcare</option>
                        <option value="Restaurant & Cafe">Restaurant, Bar & Dining</option>
                        <option value="Hotel & Resort">Hotel, Villa & Resort</option>
                        <option value="Gym & Fitness">Gym & Fitness Club</option>
                        <option value="Salon & Spa">Salon, Spa & Beauty</option>
                        <option value="School & Academy">School, College & Institute</option>
                        <option value="Real Estate">Real Estate & Property</option>
                        <option value="E-Commerce">E-Commerce Brand</option>
                        <option value="Corporate / Legal">Law Firm / Accounting / Corporate</option>
                        <option value="SaaS & Startup">SaaS & Tech Startup</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Current Website URL (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                        placeholder="e.g. www.mycurrentwebsite.com"
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Target Investment Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="$1,500 - $3,000">$1,500 - $3,000 (Starter)</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000 (Growth & Scale)</option>
                        <option value="$5,000 - $10,000+">$5,000 - $10,000+ (Enterprise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Preferred Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                          isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="Immediately (Rush Sprint)">Immediately (Rush 7-10 Days)</option>
                        <option value="Within 2-3 weeks">Within 2-3 weeks (Standard)</option>
                        <option value="Next month">Next month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Tell Us About Your Project & Main Business Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We want to double our cosmetic patient bookings and replace our slow outdated WordPress site..."
                      className={`w-full p-3.5 rounded-xl text-sm border focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                        isDarkMode ? 'bg-slate-950 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending to Google Sheet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry (Guaranteed 12-Hr Response)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      100% Confidentiality NDA Protected
                    </span>
                    <span>•</span>
                    <span>Zero spam guaranteed</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
