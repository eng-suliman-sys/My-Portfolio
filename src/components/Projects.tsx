import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData.ts';
import { ProjectItem, ProjectCategory } from '../types/portfolio.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Eye, 
  BookOpen, 
  CheckCircle2, 
  Smartphone, 
  BarChart3, 
  ShoppingBag, 
  Dumbbell, 
  School,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Mobile Apps', 'Websites', 'Web Apps', 'Software', 'APIs'];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  // Render a high-tech UI visual mockup for each project based on its mockupType
  const renderProjectMockup = (project: ProjectItem) => {
    switch (project.mockupType) {
      case 'mobile-fintech':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-[#071322] to-slate-900 p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            {/* Ambient glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
            {/* Mobile Wallet UI Container */}
            <div className="w-56 bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md">
              <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400">PaySphere Core</span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Live Balance</span>
              </div>
              <div className="text-lg font-mono font-bold text-white mb-2">$14,850.40</div>
              <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono">
                <div className="bg-slate-800/80 p-1.5 rounded text-cyan-300 text-center">↑ Send Funds</div>
                <div className="bg-slate-800/80 p-1.5 rounded text-emerald-300 text-center">↓ Receive QR</div>
              </div>
            </div>
          </div>
        );

      case 'web-analytics':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-[#061816] to-slate-900 p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
            {/* Analytics Dashboard Preview */}
            <div className="w-64 bg-slate-900/90 border border-emerald-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                <span>DemandRadar Intelligence</span>
                <span className="text-white font-bold">+28.4%</span>
              </div>
              {/* Simulated mini chart bars */}
              <div className="flex items-end gap-1.5 h-14 pt-2 border-b border-slate-800">
                <div className="w-1/6 bg-emerald-500/40 rounded-t h-[40%]"></div>
                <div className="w-1/6 bg-emerald-500/60 rounded-t h-[65%]"></div>
                <div className="w-1/6 bg-emerald-500/50 rounded-t h-[50%]"></div>
                <div className="w-1/6 bg-emerald-500/80 rounded-t h-[85%]"></div>
                <div className="w-1/6 bg-emerald-400 rounded-t h-[100%]"></div>
                <div className="w-1/6 bg-cyan-400 rounded-t h-[75%]"></div>
              </div>
              <div className="flex justify-between text-[8px] font-mono text-slate-400">
                <span>W1 Velocity</span>
                <span>W2 Realtime</span>
                <span>W3 Anomaly Check</span>
              </div>
            </div>
          </div>
        );

      case 'mobile-ecommerce':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-[#130f24] to-slate-900 p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
            {/* Mobile E-Commerce Preview */}
            <div className="w-56 bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-indigo-300">
                <span>Store Catalog</span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-[9px]">Cart (3)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/60 text-center">
                  <div className="w-6 h-6 mx-auto rounded bg-indigo-500/30 mb-1 flex items-center justify-center">
                    <ShoppingBag className="w-3 h-3 text-indigo-300" />
                  </div>
                  <div className="text-[9px] font-mono text-white">Item Alpha</div>
                  <div className="text-[8px] font-mono text-cyan-400">$89.00</div>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/60 text-center">
                  <div className="w-6 h-6 mx-auto rounded bg-purple-500/30 mb-1 flex items-center justify-center">
                    <Layers className="w-3 h-3 text-purple-300" />
                  </div>
                  <div className="text-[9px] font-mono text-white">Item Beta</div>
                  <div className="text-[8px] font-mono text-cyan-400">$120.00</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'web-management':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-[#1f1608] to-slate-900 p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
            {/* Gym Management Preview */}
            <div className="w-64 bg-slate-900/90 border border-amber-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
                <span className="flex items-center gap-1.5">
                  <Dumbbell className="w-3 h-3" /> Gym Ops Portal
                </span>
                <span className="text-[9px] bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">98% Active</span>
              </div>
              <div className="space-y-1 text-[9px] font-mono">
                <div className="flex justify-between p-1 rounded bg-slate-800/80 text-slate-300">
                  <span>#1044 John D.</span>
                  <span className="text-emerald-400">Checked In</span>
                </div>
                <div className="flex justify-between p-1 rounded bg-slate-800/80 text-slate-300">
                  <span>#1045 Sarah M.</span>
                  <span className="text-amber-400">Renewal in 3d</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'web-erp':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-[#07181c] to-slate-900 p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-600/20 rounded-full blur-2xl"></div>
            {/* School ERP Preview */}
            <div className="w-64 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <School className="w-3 h-3" /> Academic ERP
                </span>
                <span className="text-[9px] bg-cyan-500/20 px-1.5 py-0.5 rounded">Term 2026</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[8px] font-mono text-center">
                <div className="p-1 bg-slate-800 rounded">
                  <div className="text-cyan-400 font-bold">1,240</div>
                  <div className="text-slate-400">Students</div>
                </div>
                <div className="p-1 bg-slate-800 rounded">
                  <div className="text-emerald-400 font-bold">96.8%</div>
                  <div className="text-slate-400">Attendance</div>
                </div>
                <div className="p-1 bg-slate-800 rounded">
                  <div className="text-purple-400 font-bold">48</div>
                  <div className="text-slate-400">Classes</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 bg-slate-900 flex items-center justify-center text-slate-500">
            Mockup Preview
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>04 // PORTFOLIO & CODE</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Engineering Projects
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                Production-standard systems, mobile applications, and web architectures engineered with clean patterns, resilient APIs, and modern frameworks.
              </p>
            </div>

            {/* Authenticity Transparency Tag */}
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 max-w-sm flex items-start gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">Configurable Showcase: </strong>
                All projects are editable from <code className="text-cyan-400">portfolioData.ts</code>. Placeholders are clearly identified.
              </span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              id={`project-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="glass-panel-interactive rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between text-left group hover:border-cyan-500/40"
            >
              <div>
                {/* Project Visual Mockup */}
                <div className="relative border-b border-slate-800/80">
                  {renderProjectMockup(project)}

                  {/* Category & Status Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-cyan-300 border border-slate-700/80 font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {project.isPlaceholder && (
                    <div className="absolute bottom-2.5 right-3">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950/90 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        Architecture Blueprint
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {project.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub, Demo, Case Study */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-auto space-y-2.5">
                <button
                  onClick={() => setActiveCaseStudyProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30 flex items-center justify-center gap-2 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View Full Case Study</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* New Project Addition Prompt */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              Have custom projects you'd like added?
            </div>
            <p className="text-xs text-slate-400">
              New projects, screenshots, GitHub repos, and live URLs can be updated in seconds in <code className="text-cyan-400 font-mono">portfolioData.ts</code>.
            </p>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium border border-slate-700 whitespace-nowrap transition-colors"
          >
            Request Custom Product Build
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeCaseStudyProject}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </section>
  );
};
