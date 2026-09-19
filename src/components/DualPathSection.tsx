import React from 'react';
import { dualPathData } from '../data/portfolioData.ts';
import { 
  Code2, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Compass,
  Hammer
} from 'lucide-react';

export const DualPathSection: React.FC = () => {
  return (
    <section 
      id="dual-paths" 
      className="py-20 lg:py-24 relative border-t border-slate-800/80 bg-[#080c15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DUAL IDENTITY SYNERGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Two Sides of One Unified Professional
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            High-value digital products require both the technical rigor to engineer robust systems and the executive clarity to solve business problems.
          </p>

          {/* Evolution Bridge Badge */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-mono text-cyan-300 font-bold shadow-inner">
              <span>Engineer</span>
              <span className="text-slate-600">→</span>
              <span>Builder</span>
              <span className="text-slate-600">→</span>
              <span>Founder</span>
              <span className="text-slate-600">→</span>
              <span className="text-emerald-400">CEO</span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Dual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: The Engineer ("I Build") */}
          <div className="glass-panel p-7 sm:p-8 rounded-2xl border border-cyan-500/30 text-left relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/60 transition-all shadow-xl shadow-cyan-950/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none blur-xl"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      Technical Foundation
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      The Engineer
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/20">
                  {dualPathData.engineer.action}
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-6 font-mono leading-relaxed">
                Hands-on software implementation, code architecture, performance optimization, and reliable delivery across mobile and web platforms.
              </p>

              {/* Items List */}
              <div className="space-y-2.5">
                {dualPathData.engineer.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Stack: Flutter, Dart, JS, APIs, Firebase</span>
              <span className="text-cyan-400 font-semibold">60 FPS Native & Scalable</span>
            </div>
          </div>

          {/* Card 2: The CEO ("I Lead") */}
          <div className="glass-panel p-7 sm:p-8 rounded-2xl border border-blue-500/30 text-left relative overflow-hidden flex flex-col justify-between group hover:border-blue-500/60 transition-all shadow-xl shadow-blue-950/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none blur-xl"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                      Executive Leadership
                    </div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      The CEO & Founder
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-mono text-xs font-bold border border-blue-500/20">
                  {dualPathData.ceo.action}
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-6 font-mono leading-relaxed">
                Strategic product direction at KorvenzaTech, aligning software with commercial viability, client objectives, and high-standard execution.
              </p>

              {/* Items List */}
              <div className="space-y-2.5">
                {dualPathData.ceo.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Organization: KorvenzaTech</span>
              <span className="text-blue-400 font-semibold">Strategic Execution</span>
            </div>
          </div>

        </div>

        {/* The Client & Partner Benefit Callout */}
        <div className="mt-12 max-w-5xl mx-auto p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-blue-950/40 border border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white font-semibold">Why this matters for your project: </strong>
            You don't need a technical translator between business management and developers. You work directly with a leader who writes pristine software and understands the commercial return of every screen and endpoint.
          </p>
        </div>

      </div>
    </section>
  );
};
