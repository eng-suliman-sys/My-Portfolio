import React from 'react';
import { ProjectItem } from '../types/portfolio.ts';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  Cpu, 
  Workflow, 
  ShieldAlert, 
  Trophy,
  Code2
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0b101d] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden text-left my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="bg-[#0f172a] px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
              CASE STUDY // {project.category.toUpperCase()}
            </span>
            {project.isPlaceholder && (
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Architecture Blueprint
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-800/80 text-slate-300">
          
          {/* Top Overview & Links */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-cyan-400 font-mono text-sm">
                {project.subtitle}
              </p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {caseStudy.overview}
            </p>

            {/* Quick Action Links & Placeholders */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>View Source Code</span>
              </a>

              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Interactive Demo</span>
              </a>
            </div>

            {project.isPlaceholder && (
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400 font-mono">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300">Editable Showcase Notice: </strong>
                  This project represents an architectural showcase and design system engineered for demonstration. External links point to configured repository templates in <code className="text-cyan-400">portfolioData.ts</code>.
                </div>
              </div>
            )}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                The Problem Statement
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                The Engineered Solution
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="pt-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="pt-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              System Architecture & Tech Stack
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Architectural Strategy: </span>
              {caseStudy.architecture}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {caseStudy.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="pt-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-cyan-400" />
              Development Execution Process
            </h3>
            <div className="space-y-2">
              {caseStudy.developmentProcess.map((step, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="pt-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              Engineering Challenges Tackled
            </h3>
            <div className="space-y-2">
              {caseStudy.challenges.map((ch, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Results / Product Outcomes */}
          <div className="pt-6 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              Product Outcome & Viability
            </h3>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-200 leading-relaxed font-mono">
              {caseStudy.results}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#0f172a] px-6 py-4 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-xs font-mono text-slate-400">
            Suleman Khan • Case Study Details
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold font-mono border border-slate-700 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
