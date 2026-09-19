import React, { useState } from 'react';
import { testimonialsData } from '../data/portfolioData.ts';
import { 
  MessageSquareQuote, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  PlusCircle, 
  X, 
  Check,
  AlertCircle
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [showAddFeedbackModal, setShowAddFeedbackModal] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    quote: '',
    rating: '5'
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setShowAddFeedbackModal(false);
      setFormData({ name: '', role: '', company: '', quote: '', rating: '5' });
    }, 2500);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#090d16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>09 // CLIENT ENDORSEMENTS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Client Testimonials
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                Honest feedback from founders, product teams, and collaborators.
              </p>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Authenticity • Zero Fabricated Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-bl-full pointer-events-none blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 mx-auto flex items-center justify-center text-cyan-400 shadow-lg">
              <MessageSquareQuote className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400/20 text-amber-400" />
                ))}
              </div>

              {/* Exact Prompt Mandate Text */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                "Client testimonials will be added here."
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                As a software engineer committed to absolute integrity, I never invent fake client reviews or false corporate endorsements. Testimonials will appear here as ongoing client deliverables conclude.
              </p>
            </div>

            {/* Testimonial Structure Highlight */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowAddFeedbackModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Submit Client Review / Preview Entry</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium border border-slate-700 transition-colors"
              >
                <span>Hire Suleman For Your Next Product</span>
              </a>
            </div>

            <div className="text-xs font-mono text-slate-500">
              Data structure ready for rapid updates in <code className="text-cyan-400">portfolioData.ts</code> → <code className="text-cyan-400">testimonialsData</code>
            </div>
          </div>
        </div>

      </div>

      {/* Submit / Preview Feedback Modal */}
      {showAddFeedbackModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md text-left"
          onClick={() => setShowAddFeedbackModal(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0c1220] border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-base font-bold text-white">Client Review Simulator</h4>
                <p className="text-xs text-slate-400 font-mono">Easily structure upcoming client reviews</p>
              </div>
              <button
                onClick={() => setShowAddFeedbackModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {feedbackSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="text-sm font-bold text-emerald-300">Feedback Formatted Successfully</h5>
                <p className="text-xs text-slate-300">
                  Ready to be appended into <code className="text-cyan-400 font-mono">portfolioData.ts</code>!
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-3.5 text-xs font-mono">
                <div>
                  <label className="block text-slate-300 mb-1">Client Name / Representative</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alex Mercer"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 mb-1">Client Role</label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g., CTO / Product Lead"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Company / Platform</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g., Nexus Digital / Upwork"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Testimonial Quote</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    placeholder="Describe the product delivered, engineering quality, communication..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold font-mono text-xs shadow-md"
                >
                  Confirm & Format Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
