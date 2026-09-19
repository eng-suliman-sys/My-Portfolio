import React, { useState } from 'react';
import { korvenzaTechData, personalInfo } from '../data/portfolioData.ts';
import {
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
  ExternalLink,
  ShieldCheck,
  Building2,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Mail,
  Info
} from 'lucide-react';

interface KorvenzaTechSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const KorvenzaTechSection: React.FC<KorvenzaTechSectionProps> = ({ onSelectService }) => {
  const [showWebsiteNotice, setShowWebsiteNotice] = useState(false);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleVisitWebsite = (e: React.MouseEvent) => {
    if (!korvenzaTechData.isWebsiteLive) {
      e.preventDefault();
      setShowWebsiteNotice(true);
      setTimeout(() => setShowWebsiteNotice(false), 5000);
    }
  };

  return (
    <section 
      id="korvenzatech" 
      className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#070b13] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>02 // EXECUTIVE LEADERSHIP & VENTURE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                CEO & Founder — KorvenzaTech
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-2">
                Combining rigorous software engineering, modern product development, and strategic technology direction to deliver high-impact digital products.
              </p>
            </div>

            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <div className="text-left">
                <div className="text-xs font-bold text-white tracking-wide">{korvenzaTechData.companyName}</div>
                <div className="text-[10px] font-mono text-cyan-400">{korvenzaTechData.tagline}</div>
              </div>
            </div>
          </div>
        </div>

        {/* KorvenzaTech Detailed Overview & Corporate Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Leadership Vision & Narrative */}
          <div className="lg:col-span-7 glass-panel p-7 sm:p-8 rounded-2xl border border-slate-800 text-left space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-xs font-mono text-cyan-300 border border-cyan-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Executive Statement</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {korvenzaTechData.shortIntroduction}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {korvenzaTechData.detailedOverview}
              </p>
            </div>

            {/* Solutions List */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                KorvenzaTech Core Digital Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {korvenzaTechData.coreSolutions.map((solution, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <a
                href={korvenzaTechData.websiteUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleVisitWebsite}
                id="korvenzatech-visit-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-950/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Visit KorvenzaTech</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="korvenzatech-inquire-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Partner With KorvenzaTech</span>
              </a>

              {/* Website Notice Alert */}
              {showWebsiteNotice && (
                <div className="w-full mt-2 p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs text-slate-300 flex items-center gap-2 animate-fadeIn">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong>Configurable URL:</strong> Website link points to <code className="text-cyan-300 font-mono">{korvenzaTechData.websiteUrl}</code>. Live status can be updated anytime in <code className="text-cyan-300 font-mono">portfolioData.ts</code>.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Founder Profile & Strategic Role Breakdown */}
          <div className="lg:col-span-5 glass-panel p-7 sm:p-8 rounded-2xl border border-slate-800 text-left flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Leadership Scope</div>
                  <h4 className="text-lg font-bold text-white">{korvenzaTechData.role}</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                As CEO & Founder, my focus is bridging the chasm between raw software development and true business value. Every project undertaken via KorvenzaTech undergoes architectural evaluation, user requirement modeling, and strict quality verification.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Idea to Digital Reality</strong>
                    <span className="text-slate-400">Transforming napkin concepts, customer requests, and business problems into production-grade systems.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Full Lifecycle Ownership</strong>
                    <span className="text-slate-400">Handling discovery, architecture, coding, testing, Firebase/cloud setup, and ongoing iteration.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Client & Technical Alignment</strong>
                    <span className="text-slate-400">Ensuring software matches commercial outcomes, budget requirements, and long-term scalability.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
              <span className="text-cyan-400 font-semibold">KorvenzaTech Status: </span>
              Actively accepting high-tier digital product development, mobile app contracts, and web software projects.
            </div>
          </div>
        </div>

        {/* 5 Leadership Pillars (Requested in Profile Update) */}
        <div>
          <div className="text-left mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Executive Leadership Pillars
            </h3>
            <p className="text-xs text-slate-400">
              The fundamental principles steering technology, product development, and execution at KorvenzaTech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {korvenzaTechData.leadershipPillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className={`glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all relative group flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.iconName)}
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                    {pillar.subtitle}
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">KorvenzaTech</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
