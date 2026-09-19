import React from 'react';
import { timelineItems } from '../data/portfolioData.ts';
import { 
  GraduationCap, 
  Smartphone, 
  Globe, 
  Server, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Cpu,
  Briefcase
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'Executive Leadership':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Development Journey':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Software Development':
        return <Server className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>05 // PROFESSIONAL JOURNEY</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Experience & Journey
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                A transparent, authentic timeline reflecting executive leadership at KorvenzaTech, formal computer science engineering, and disciplined cross-platform development.
              </p>
            </div>

            {/* Authenticity Pledge */}
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Authenticity • Zero Fabricated Roles</span>
            </div>
          </div>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12 text-left">
          {timelineItems.map((item) => {
            const isCurrentLeadership = item.id === 'timeline-ceo-korvenzatech';
            return (
              <div
                key={item.id}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Node Point with Glowing Ring */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 ${
                  isCurrentLeadership 
                    ? 'border-cyan-400 ring-4 ring-cyan-500/20 shadow-cyan-500/30' 
                    : 'border-slate-700 group-hover:border-cyan-400'
                } flex items-center justify-center transition-colors shadow-md`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isCurrentLeadership ? 'bg-cyan-300 animate-pulse' : 'bg-cyan-400 group-hover:scale-125'} transition-transform`} />
                </div>

                {/* Timeline Card */}
                <div className={`glass-panel p-6 sm:p-7 rounded-2xl border ${
                  isCurrentLeadership
                    ? 'border-cyan-500/40 bg-gradient-to-br from-[#0c1626]/90 to-[#080d17]/90 shadow-xl shadow-cyan-950/20'
                    : 'border-slate-800 group-hover:border-cyan-500/40'
                } transition-all duration-300`}>
                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        {getSectionIcon(item.section)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                          {item.section}
                          {isCurrentLeadership && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          )}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                        isCurrentLeadership 
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 font-bold' 
                          : 'bg-slate-900 text-slate-300 border-slate-800'
                      }`}>
                        {item.period}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium">
                        {item.typeBadge}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle / Focus */}
                  <div className="text-sm font-semibold text-slate-300 mb-3 font-mono">
                    {item.focus}
                  </div>

                  {/* Description narrative */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Skills Learned / Applied */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-xs font-mono text-slate-400 mb-2">
                      Core Competency Pillars:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
