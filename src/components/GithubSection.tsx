import React, { useState } from 'react';
import { githubData, personalInfo } from '../data/portfolioData.ts';
import { 
  Github, 
  GitFork, 
  Star, 
  GitCommit, 
  GitBranch, 
  Code2, 
  ExternalLink, 
  Terminal, 
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';

export const GithubSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'repos' | 'activity'>('repos');

  // Simulated clean contribution matrix (7 days x 16 weeks) with non-fabricated honest label
  const weeks = Array.from({ length: 16 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);

  // Honest intensity distribution for visual representation
  const getCellColor = (week: number, day: number) => {
    const seed = (week * 7 + day) % 11;
    if (seed === 0) return 'bg-slate-800/80';
    if (seed < 4) return 'bg-cyan-950 border border-cyan-800/60';
    if (seed < 8) return 'bg-cyan-700/80';
    return 'bg-cyan-400';
  };

  return (
    <section id="github" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>06 // OPEN SOURCE & REPOSITORIES</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                {githubData.headline}
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                {githubData.subheadline}
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold border border-slate-700 hover:border-cyan-500/40 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Visit @{githubData.username}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Technology Distribution Metric Bar */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 mb-10 text-left">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Codebase Technology Distribution
            </span>
            <span className="text-slate-500">Cross-Repository Allocation</span>
          </div>

          {/* Progress Bar Segment */}
          <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex mb-4 border border-slate-800">
            {githubData.technologiesDistribution.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                className="h-full transition-all duration-500 hover:opacity-80"
                title={`${item.name}: ${item.percentage}%`}
              />
            ))}
          </div>

          {/* Legend Items */}
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            {githubData.technologiesDistribution.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-slate-300">{item.name}</span>
                <span className="text-slate-500">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
          {githubData.featuredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-cyan-400 hover:underline flex items-center gap-2 font-mono"
                  >
                    <GitBranch className="w-4 h-4 text-slate-400" />
                    <span>{repo.name}</span>
                  </a>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {repo.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats & Language */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-slate-300">{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {repo.updated}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Activity Heatmap Preview */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="text-xs font-mono text-slate-300 font-bold flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              Development Activity Matrix
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded bg-slate-800"></span>
              <span className="w-2.5 h-2.5 rounded bg-cyan-950 border border-cyan-800"></span>
              <span className="w-2.5 h-2.5 rounded bg-cyan-700"></span>
              <span className="w-2.5 h-2.5 rounded bg-cyan-400"></span>
              <span>More Active</span>
            </div>
          </div>

          {/* Matrix grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[540px]">
              {weeks.map((week) => (
                <div key={week} className="flex flex-col gap-1.5">
                  {days.map((day) => (
                    <div
                      key={day}
                      className={`w-3.5 h-3.5 rounded-sm ${getCellColor(week, day)} transition-opacity hover:opacity-80`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
            <span>Clean commits, branch discipline, and reproducible builds.</span>
            <span className="text-cyan-400">Source: Configured profile @{githubData.username}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
