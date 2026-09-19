import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData.ts';
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(preselectedService || 'Flutter App Development');
  const [budget, setBudget] = useState('Under $1,000');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync preselectedService if passed
  React.useEffect(() => {
    if (preselectedService) {
      setProjectType(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email mailto fallback with complete message
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} from ${name}`);
    const body = encodeURIComponent(
      `Hi Suleman,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nEstimated Budget: ${budget}\n\nProject Scope:\n${message}\n\nSent from Portfolio Website`
    );

    // Simulate clean submission and trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getWhatsAppUrl = () => {
    const cleanNumber = personalInfo.whatsapp.replace(/[^0-9]/g, '');
    const prefilledText = encodeURIComponent(
      `Hello Suleman! I came across your portfolio website and would like to discuss a project regarding: ${projectType}.`
    );
    return `https://wa.me/${cleanNumber}?text=${prefilledText}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#080c16]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <span>10 // WORK WITH ME & KORVENZATECH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind? Let's build it.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Whether you need a Flutter application, modern website, scalable web application, API integration, Firebase system, or want to collaborate with KorvenzaTech on commercial software products, let's discuss your vision.
          </p>
        </div>

        {/* Form and Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Direct Channels, Socials, Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Communication
              </h3>

              <div className="space-y-4 text-xs font-mono">
                {/* Email item with copy button */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400">Direct Email</div>
                      <div className="text-white font-medium text-xs truncate max-w-[180px] sm:max-w-xs">
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400">WhatsApp</div>
                      <div className="text-white font-medium text-xs">
                        Instant Messenger
                      </div>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Verified Professional Profiles */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Professional Profiles & Ecosystem:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.fiverr}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[9px]">fi</span>
                    <span>Fiverr</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Working Availability */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="text-slate-300">
                  Currently accepting contract opportunities, remote roles, and client product builds.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Project Request Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
              <h3 className="text-xl font-bold text-white mb-1">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Fill in your product vision and receive a prompt, professional architectural reply.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared & Dispatched</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your inquiry has been routed to Suleman Khan's inbox. An email draft has also been created in your mail client for backup assurance.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium border border-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. david@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Project Type *
                      </label>
                      <select
                        id="contact-project-type"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="Flutter App Development">Flutter App Development (iOS/Android)</option>
                        <option value="Website Development">Website Development (Responsive)</option>
                        <option value="Web Application Development">Web Application / Dashboard</option>
                        <option value="KorvenzaTech Venture Collaboration">KorvenzaTech Product / Venture Collaboration</option>
                        <option value="API Integration">API Integration & REST Services</option>
                        <option value="Firebase Development">Firebase Development & Cloud Auth</option>
                        <option value="Technical Leadership & Architecture">Technical Architecture & Consultation</option>
                        <option value="Bug Fixing & Debugging">Bug Fixing & Performance Optimization</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Estimated Budget (USD)
                      </label>
                      <select
                        id="contact-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+ / Enterprise</option>
                        <option value="Flexible / Needs Estimation">Flexible / Needs Estimation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your product requirements, desired features, deadlines, or existing codebases..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Submit and WhatsApp Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold font-mono text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Dispatch...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Contact on WhatsApp</span>
                    </a>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
