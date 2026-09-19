import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData.ts';
import { 
  Smartphone, 
  Globe, 
  Database, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Production-Ready':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'Proficient':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-700';
    }
  };

  const filteredCategories = activeCategoryId === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategoryId);

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>02 // CAPABILITIES & STACK</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Skills & Technologies
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                A verified technical stack spanning cross-platform mobile engineering, modern web frontends, API architectures, and software design principles.
              </p>
            </div>

            {/* Authenticity notice */}
            <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 max-w-xs">
              <span className="text-emerald-400 font-semibold">Authenticity Note:</span> Categorized by verified production competency. No fabricated progress bars.
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
              activeCategoryId === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                activeCategoryId === category.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative text-left"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  {category.skills.length} Competencies
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${getBadgeStyle(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>

                    {skill.highlight && (
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">
                        {skill.highlight}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Ecosystem Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0b1322] to-slate-900/90 border border-slate-800 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need a customized tech stack evaluation?</div>
              <div className="text-xs text-slate-400">I can analyze your product requirements and recommend the optimal mobile and web technology architecture.</div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30 whitespace-nowrap transition-colors"
          >
            Consult On Tech Stack →
          </a>
        </div>

      </div>
    </section>
  );
};
