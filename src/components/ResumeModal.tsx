import React from 'react';
import { personalInfo, skillCategories, featuredProjects } from '../data/portfolioData.ts';
import { X, Printer, Download, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CV Modal Toolbar (hidden during print) */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400">
              SULEMAN KHAN // CURRICULUM VITAE
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
              International Standard
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Printable Container */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-slate-800 space-y-7 bg-white">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.profileImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border-2 border-slate-900 shadow-sm shrink-0"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase">
                    {personalInfo.name}
                  </h1>
                  <div className="text-xs sm:text-sm font-bold text-cyan-700 tracking-wide font-mono">
                    {personalInfo.professionalTitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact metadata */}
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-800" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-800" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-800" />
                github.com/sulemankhan-dev
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-slate-800" />
                linkedin.com/in/sulemankhan-dev
              </span>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="text-left space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Software Engineer, Flutter Developer, and CEO & Founder of KorvenzaTech. Combines formal computer science engineering with executive leadership and product strategy. Specializing in cross-platform Flutter applications, modern web software, RESTful API design, Firebase systems, and turning technical concepts into deployable commercial products.
            </p>
          </div>

          {/* Executive Leadership & Experience */}
          <div className="text-left space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1">
              Leadership & Experience
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-bold text-slate-950">CEO & Founder — KorvenzaTech</h3>
                  <p className="text-xs text-slate-600">Technology Leadership, Digital Product Development & Software Solutions</p>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-700">Current / Active</span>
              </div>
              <p className="text-xs text-slate-700">
                Directing technology strategy, client solutions, and software product development. Leading mobile, web, and cloud implementations from discovery to scalable production.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="text-left space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-sm font-bold text-slate-950">Bachelor of Science in Software Engineering (BS SE)</h3>
                <p className="text-xs text-slate-600">Core CS Fundamentals: Data Structures, OOP, Database Systems, Software Architecture, Networks</p>
              </div>
              <span className="text-xs font-mono font-semibold text-slate-700">Graduate</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="text-left space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-950">Mobile Development: </span>
                <span className="text-slate-700">Flutter, Dart, Android Native Bridging, BLoC, Riverpod, Local Storage, FCM</span>
              </div>
              <div>
                <span className="font-bold text-slate-950">Web & Frontend: </span>
                <span className="text-slate-700">HTML5, CSS3, JavaScript (ES6+), Responsive UI, Dashboards, Single Page Apps</span>
              </div>
              <div>
                <span className="font-bold text-slate-950">Backend & Cloud: </span>
                <span className="text-slate-700">Firebase Firestore, Firebase Auth, RESTful API Architecture, JSON Serialization</span>
              </div>
              <div>
                <span className="font-bold text-slate-950">Engineering & Tooling: </span>
                <span className="text-slate-700">Git & GitHub, Android Studio, VS Code, Postman, Relational Schema Design, OOP</span>
              </div>
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div className="text-left space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1">
              Key Engineering Projects & Blueprints
            </h2>
            <div className="space-y-3.5">
              {featuredProjects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-950">
                    <span>{proj.title} — <span className="font-normal text-slate-600 font-mono">{proj.subtitle}</span></span>
                    <span className="text-slate-600 font-mono text-[11px]">{proj.category}</span>
                  </div>
                  <p className="text-slate-700">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-cyan-800">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Philosophy */}
          <div className="text-left space-y-1.5 pt-2 border-t border-slate-200">
            <h2 className="text-[11px] font-mono font-bold text-slate-600 uppercase">
              Working Standards
            </h2>
            <p className="text-xs text-slate-600 italic">
              Clean separation of concerns, testable state management, reproducible version control, and clear communication throughout all project phases.
            </p>
          </div>

        </div>

        {/* Modal Footer (hidden on print) */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono print:hidden">
          <span>Editable template in portfolioData.ts</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-bold"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
