import React from 'react';
import { workProcessSteps } from '../data/portfolioData.ts';
import { 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Compass,
  FileCode2,
  Palette,
  Terminal,
  Rocket
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case '02':
        return <FileCode2 className="w-5 h-5 text-blue-400" />;
      case '03':
        return <Palette className="w-5 h-5 text-purple-400" />;
      case '04':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case '05':
        return <Rocket className="w-5 h-5 text-rose-400" />;
      default:
        return <Workflow className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>08 // METHODOLOGY</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                5-Step Development Workflow
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                A structured, transparent engineering lifecycle ensuring that software is delivered on schedule, within specifications, and free of defects.
              </p>
            </div>

            <div className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 px-3.5 py-2 rounded-xl">
              Agile Iteration • Continuous Communication
            </div>
          </div>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {workProcessSteps.map((step, idx) => (
            <div
              key={step.step}
              className="glass-panel p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Step badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getStepIcon(step.step)}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-3">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Outputs checklist */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Milestone Outputs:
                </div>
                {step.outputs.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">{out}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300">
              Need a specialized development sprint or code review? I integrate smoothly with existing engineering teams or manage products end-to-end.
            </span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30 whitespace-nowrap transition-colors"
          >
            Start At Step 01 →
          </a>
        </div>

      </div>
    </section>
  );
};
