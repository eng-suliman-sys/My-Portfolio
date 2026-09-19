import React from 'react';
import { servicesList } from '../data/portfolioData.ts';
import { 
  Smartphone, 
  Globe, 
  Layers, 
  Network, 
  Flame, 
  Bug, 
  Code, 
  ArrowUpRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'Network':
        return <Network className="w-6 h-6 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Bug':
        return <Bug className="w-6 h-6 text-rose-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-purple-400" />;
      default:
        return <Code className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#090d16]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>03 // SOLUTIONS & SERVICES</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Software Engineering Services
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                End-to-end digital solutions designed to take software products from conceptual architecture to production deployment.
              </p>
            </div>

            <div className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 px-3 py-2 rounded-xl">
              Available for Full-Cycle Product Builds & Specialized Modules
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="glass-panel-interactive p-6 sm:p-7 rounded-2xl flex flex-col justify-between text-left group border border-slate-800 hover:border-cyan-500/40 relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Service Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-slate-800/80">
                  {service.featuredTech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Discuss Project */}
              <button
                onClick={() => onSelectServiceForContact(service.title)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-cyan-500 text-slate-300 group-hover:text-slate-950 font-semibold text-xs font-mono border border-slate-800 group-hover:border-cyan-400 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Discuss Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
