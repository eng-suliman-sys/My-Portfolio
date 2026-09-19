import React from 'react';
import { whyWorkWithMe } from '../data/portfolioData.ts';
import { 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  MessageSquare, 
  TrendingUp, 
  Rocket, 
  ShieldCheck
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-rose-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#090d16]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>07 // PROFESSIONAL ADVANTAGE</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Work With Me
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                A disciplined engineering approach focused on commercial viability, structural durability, and seamless client collaboration.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl">
              Software Engineer Standards • Clear Delivery Guarantees
            </div>
          </div>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item) => (
            <div
              key={item.id}
              className="glass-panel-interactive p-7 rounded-2xl border border-slate-800 flex flex-col justify-between text-left group hover:border-cyan-500/40"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                  {getCardIcon(item.iconName)}
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-1 font-semibold uppercase tracking-wider">
                  {item.subtitle}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center text-xs font-mono text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                Standard Practice
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
