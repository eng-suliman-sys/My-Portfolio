import React, { useState } from 'react';
import { personalInfo, statisticsCards, skillCategories, servicesList, featuredProjects } from '../data/portfolioData.ts';
import { X, Copy, Check, Settings, FileCode, CheckCircle2, Shield } from 'lucide-react';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleConfigSnapshot = JSON.stringify(
    {
      personalInfo: {
        name: personalInfo.name,
        professionalTitle: personalInfo.professionalTitle,
        email: personalInfo.email,
        whatsapp: personalInfo.whatsapp,
        github: personalInfo.github,
        linkedin: personalInfo.linkedin,
        fiverr: personalInfo.fiverr
      },
      statsSummary: statisticsCards.map(s => ({ category: s.category, value: s.value })),
      servicesCount: servicesList.length,
      projectsCount: featuredProjects.length
    },
    null,
    2
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleConfigSnapshot);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md text-left"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c1220] border border-slate-700/90 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Centralized Content Configuration Guide
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                File Location: <code className="text-cyan-400">/src/data/portfolioData.ts</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
          <p>
            Your entire portfolio is built with a single centralized source of truth. Whenever you want to update your contact links, add real client projects, update GitHub handles, or adjust skills, simply edit:
          </p>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-cyan-300 text-xs flex items-center justify-between">
            <span>/src/data/portfolioData.ts</span>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
              Auto-Reactive
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white font-mono text-xs uppercase tracking-wider">
              Sections Managed in <code className="text-cyan-400">portfolioData.ts</code>:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] text-slate-400">
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>personalInfo (Name, Email, Links)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>korvenzaTechData (Company, Pillars, URL)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>dualPathData (Engineer vs CEO Matrix)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>statisticsCards (Executive & Degree Stats)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>skillCategories (All Tech Stacks)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>servicesList (7 Core Services)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>featuredProjects & Case Studies</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>timelineItems (Journey & Degree)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>whyWorkWithMe (Value Cards)</span>
              </li>
              <li className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>testimonialsData & GitHub</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono font-bold text-white text-xs">Current Active Configuration Snapshot:</span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-44">
              <code>{sampleConfigSnapshot}</code>
            </pre>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
