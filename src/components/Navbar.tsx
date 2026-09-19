import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData.ts';
import { useTheme } from '../context/ThemeContext.tsx';
import { 
  Menu, 
  X, 
  Terminal, 
  ArrowUpRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenConfig }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'korvenzatech', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'KorvenzaTech', href: '#korvenzatech', id: 'korvenzatech', isCompany: true },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            id="nav-logo"
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-900 group-hover:border-cyan-400 transition-all shadow-md group-hover:scale-105">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.profileImageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
            </div>
            <div>
              <div className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-[11px] text-cyan-400 font-mono tracking-tight hidden sm:flex items-center gap-1">
                <span>CEO & Founder @ KorvenzaTech</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                      : link.isCompany
                      ? 'text-cyan-300 hover:text-white hover:bg-slate-800/80 border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {link.isCompany && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-desktop"
              className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-all flex items-center justify-center group"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <button
              onClick={onOpenCv}
              id="nav-cv-button"
              className="inline-flex items-center gap-1.5 px-3 py-2 lg:px-3.5 text-xs font-medium rounded-lg text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all"
              title="View or download professional resume"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume / CV</span>
            </button>

            <a
              href="#contact"
              id="nav-contact-cta"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Theme Toggle Button (Mobile Top Bar) */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-mobile"
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600" />
              )}
            </button>

            <button
              onClick={onOpenCv}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700/60"
              title="Resume"
            >
              <Download className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="md:hidden bg-[#0c121e]/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            {/* Theme Toggle Button (Mobile Drawer) */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-drawer"
              className="w-full py-2.5 px-4 rounded-lg bg-slate-800/90 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-between border border-slate-700"
            >
              <div className="flex items-center gap-2">
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-sky-500" />
                )}
                <span>Appearance Mode</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-400 capitalize">
                {theme} Mode
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-800 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-2 border border-slate-700"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              View & Download CV
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-4 pt-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-white p-1.5"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-white p-1.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-slate-400 hover:text-white p-1.5"
                title="Email Suleman"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-emerald-400 p-1.5"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
