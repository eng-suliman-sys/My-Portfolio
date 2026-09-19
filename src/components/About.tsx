import React from 'react';
import { personalInfo, statisticsCards } from '../data/portfolioData.ts';
import { 
  GraduationCap, 
  Smartphone, 
  Globe, 
  Server, 
  CheckCircle2, 
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Briefcase,
  Building2,
  Sparkles,
  MessageSquare,
  Mail
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#090d16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>01 // PROFESSIONAL IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Software Engineer, Flutter Developer and CEO & Founder of KorvenzaTech — bridging technical mastery, disciplined engineering, and entrepreneurial product development.
          </p>
        </div>

        {/* Content & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutTextParagraphs.map((paragraph, idx) => (
                <p key={idx} className="relative">
                  {idx === 0 && (
                    <span className="font-semibold text-white">
                      {paragraph.slice(0, 19)}
                    </span>
                  )}
                  {idx === 0 ? paragraph.slice(19) : paragraph}
                </p>
              ))}
            </div>

            {/* Core Competency Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: "Technical Leadership", desc: "Driving development direction, software architecture, and product priorities" },
                { title: "Cross-Platform Delivery", desc: "Production Flutter targeting responsive Android & iOS builds" },
                { title: "Modern Web & Dashboards", desc: "Interactive web applications, business portals, and resilient APIs" },
                { title: "Business Alignment", desc: "Turning market needs and ideas into deployable, maintainable digital products" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Engineering & Executive Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-700/80 space-y-5 relative overflow-hidden text-left shadow-2xl shadow-black/40">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-bl-full pointer-events-none blur-xl"></div>

              {/* Executive Profile Header: Distinct horizontal arrangement with framed portrait avatar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-800/80">
                {/* Framed Profile Portrait */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-lg bg-slate-900">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.profileImageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                  </div>
                  {/* Active Leadership status pip */}
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
                  </span>
                </div>

                {/* Profile Identity Details */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" /> Active Executive & Engineer
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{personalInfo.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono font-semibold">
                    CEO & Founder — KorvenzaTech
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-snug">
                    Software Engineer | Flutter Developer | Web Developer
                  </p>
                </div>
              </div>

              {/* Verified Leadership & Engineering Scope Table */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Leadership & Technical Scope</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Formal Profile</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Executive Leadership</span>
                    <span className="text-cyan-400 font-medium">CEO & Founder — KorvenzaTech</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Formal Degree</span>
                    <span className="text-white font-medium">BS Software Engineering</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Mobile Engineering</span>
                    <span className="text-cyan-400 font-medium">Flutter / Dart (Android & iOS)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Web & Cloud Systems</span>
                    <span className="text-white font-medium">Full-Stack SPAs, APIs, Databases</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Backend & Cloud</span>
                    <span className="text-amber-400 font-medium">Firebase, RESTful APIs, Node.js</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Operational Scope</span>
                    <span className="text-emerald-400 font-medium">Remote & International</span>
                  </div>
                </div>
              </div>

              {/* Developer Mindset Quote */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 italic font-sans leading-relaxed">
                "Code is the instrument; solving real business challenges, leading innovation, and delivering scalable digital products is the ultimate goal."
              </div>

              {/* Quick Communication Actions */}
              <div className="pt-1 flex items-center gap-2">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono text-center font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono text-center font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Centralized Statistics Cards (Fully Config-Driven) */}
        <div>
          <div className="text-left mb-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Core Competency & Leadership Profile
            </h3>
            <p className="text-xs text-slate-400">
              Verified credentials configured from <code className="font-mono text-cyan-400">portfolioData.ts</code>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {statisticsCards.map((stat) => (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className="glass-panel-interactive p-6 rounded-2xl text-left relative group overflow-hidden border border-slate-800 hover:border-cyan-500/40"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.iconName)}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                  {stat.category}
                </div>

                <div className="text-xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </div>

                <div className="text-xs font-medium text-slate-400 mb-2">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2.5">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
