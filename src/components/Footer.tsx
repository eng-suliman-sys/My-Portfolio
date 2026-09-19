import React from 'react';
import { personalInfo } from '../data/portfolioData.ts';
import { 
  Terminal, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Heart,
  FileText
} from 'lucide-react';

interface FooterProps {
  onOpenCv: () => void;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCv, onOpenConfig }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'KorvenzaTech', href: '#korvenzatech' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#050811] border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {personalInfo.professionalTitle}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {personalInfo.shortStatement}
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for remote contracts & international roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connectivity */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Connect Directly
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.fiverr}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="Fiverr"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">fi</span>
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Complete Resume / CV</span>
              </button>

              <button
                onClick={onOpenConfig}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 font-mono text-left"
                title="View Centralized Config File Details"
              >
                <span>Edit Portfolio Content (Admin Guide)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {personalInfo.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with React, TypeScript & Tailwind CSS</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-mono"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
