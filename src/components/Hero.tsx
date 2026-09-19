import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData.ts';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle,
  Copy,
  Check,
  Briefcase,
  Smartphone,
  ShieldCheck,
  User
} from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const [viewMode, setViewMode] = useState<'portrait' | 'code'>('portrait');
  const [activeCodeTab, setActiveCodeTab] = useState<'flutter' | 'api' | 'architecture'>('flutter');
  const [copied, setCopied] = useState(false);

  const flutterCodeSnippet = `// ⚡ Production-grade Flutter Architecture
// Clean, reactive state management using Riverpod
@riverpod
class ProductController extends _$ProductController {
  @override
  FutureOr<List<Product>> build() async {
    return ref.watch(productRepositoryProvider).fetchCatalog();
  }

  Future<void> syncOfflineLedger(Order order) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      await ref.read(firebaseServiceProvider).pushLedger(order);
      return ref.refresh(productControllerProvider.future);
    });
  }
}`;

  const apiCodeSnippet = `// 🛡️ Resilient API & Database Integration Layer
// Strict contracts, caching & error isolation
export async function handleTransaction(req: Request): Promise<ApiResponse> {
  const { userId, amount, currency } = await parsePayload(req);
  
  return await db.transaction(async (trx) => {
    const balance = await trx.accounts.getForUpdate(userId);
    if (balance.available < amount) {
      throw new InsufficientFundsException(userId);
    }
    
    await trx.ledger.record({ userId, amount, currency, timestamp: Date.now() });
    await fcm.sendPushNotification(userId, "Transfer confirmed.");
    return { success: true, ref: generateAuditId() };
  });
}`;

  const architectureDetails = `// 🏗️ End-to-End System Specifications
Core Pillars:
• Presentation: Flutter Multiplatform (iOS & Android) + React Web
• State Machine: Clean Architecture (Domain, Data, Presentation)
• Persistence: Firebase Firestore + SQLite Local Cache (Offline-first)
• Security: Role-Based Access Control, JWT, SSL Pinning, Biometrics
• Performance: 60fps Native UI, Sub-100ms API Execution Latency`;

  const copyCurrentSnippet = () => {
    const text = 
      activeCodeTab === 'flutter' 
        ? flutterCodeSnippet 
        : activeCodeTab === 'api' 
        ? apiCodeSnippet 
        : architectureDetails;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-28 overflow-hidden tech-grid-pattern"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Brand, Headline, Bio, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-slate-300 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-cyan-300 font-mono font-bold">CEO & Founder @ KorvenzaTech</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{personalInfo.educationBadge}</span>
            </div>

            {/* Mobile Balanced Portrait Presentation */}
            <div className="lg:hidden flex items-center justify-center pt-2 pb-1">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-600/25 to-indigo-500/30 rounded-3xl blur-xl opacity-80"></div>
                <div className="relative w-52 h-70 sm:w-60 sm:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl bg-slate-900">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.profileImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-center">
                    <div className="text-sm font-bold text-white tracking-tight">{personalInfo.name}</div>
                    <div className="text-[11px] text-cyan-400 font-mono font-medium">CEO & Founder — KorvenzaTech</div>
                    <div className="text-[10px] text-slate-300 font-sans mt-0.5">Software Engineer | Flutter Developer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name and Professional Title */}
            <div className="space-y-2.5">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
                CEO & Founder at KorvenzaTech | Software Engineer | Flutter Developer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 leading-tight pt-1">
                {personalInfo.heroHeadline}
              </h2>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.heroSupportingText}
            </p>

            {/* Quick Value Callout */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm max-w-xl">
              <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Core Vision: </strong>
                  {personalInfo.shortStatement}
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-explore-work-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#korvenzatech"
                id="hero-korvenzatech-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white text-sm font-semibold border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-md shadow-black/30"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Work With KorvenzaTech</span>
              </a>

              <button
                onClick={onOpenCv}
                id="hero-download-cv"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium border border-slate-800 hover:border-cyan-500/40 transition-all"
                title="View & Download Suleman Khan's Professional CV"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Icons & Connectivity */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="text-xs font-mono tracking-wider uppercase text-slate-500">Connect:</span>
              
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-social-github"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                  title="GitHub Profile (Editable placeholder)"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-social-linkedin"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                  title="LinkedIn Profile (Editable placeholder)"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-social-fiverr"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                  title="Fiverr Freelance Profile (Editable placeholder)"
                >
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">fi</span>
                  <span>Fiverr</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  id="hero-social-email"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                  title={`Email ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email</span>
                </a>

                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-social-whatsapp"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                  title="WhatsApp Direct Contact"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Executive Portrait & Personal Brand Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* View Toggle Bar (Executive Portrait / Dev Console) */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  {viewMode === 'portrait' ? 'Official Portrait' : 'Developer Console'}
                </span>
              </div>
              <button
                onClick={() => setViewMode(viewMode === 'portrait' ? 'code' : 'portrait')}
                className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1.5 shadow-sm"
              >
                {viewMode === 'portrait' ? (
                  <>
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>View Dev Console</span>
                  </>
                ) : (
                  <>
                    <User className="w-3 h-3 text-cyan-400" />
                    <span>View Executive Portrait</span>
                  </>
                )}
              </button>
            </div>

            {viewMode === 'portrait' ? (
              <div className="relative">
                {/* Ambient luminous multi-layer glow behind portrait */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-500/25 rounded-3xl blur-2xl -z-10 opacity-80 pointer-events-none"></div>

                {/* Top Floating Badge: KorvenzaTech Leadership */}
                <div className="absolute -top-3.5 -left-3 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090d16]/95 border border-cyan-500/40 backdrop-blur-md shadow-xl text-xs text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold font-mono">CEO & Founder • KorvenzaTech</span>
                </div>

                {/* Bottom Floating Badge: Mobile & Web Expertise */}
                <div className="absolute -bottom-3.5 -right-2 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090d16]/95 border border-blue-500/40 backdrop-blur-md shadow-xl text-xs text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-medium">Flutter Developer & Software Engineer</span>
                </div>

                {/* Executive Glassmorphism Card Frame */}
                <div className="glass-panel p-2 sm:p-2.5 rounded-3xl border border-slate-700/80 shadow-2xl shadow-black/70 relative overflow-hidden group">
                  {/* Portrait Container */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.profileImageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="eager"
                    />

                    {/* Gradient Overlay for bottom text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

                    {/* Grounding Info Card */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                            <span>{personalInfo.name}</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          </h3>
                          <p className="text-xs text-cyan-400 font-mono font-medium">CEO & Founder — KorvenzaTech</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/30 font-semibold">
                          Executive Profile
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-300 mt-1.5 font-sans flex items-center gap-1.5 flex-wrap">
                        <span className="text-slate-200 font-medium">Software Engineer</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-200 font-medium">Flutter Developer</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-200 font-medium">Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Executive Credential Pills below portrait */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                    <div className="text-[11px] text-slate-400 font-mono">Executive Leadership</div>
                    <div className="text-xs font-bold text-white">CEO & Founder</div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-0.5">KorvenzaTech</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                    <div className="text-[11px] text-slate-400 font-mono">Formal Qualification</div>
                    <div className="text-xs font-bold text-white">BS Software Eng.</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Degree Verified</div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Code Window Container */}
                <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/60">
                  {/* Window Header */}
                  <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">suleman-khan-workspace</span>
                    </div>

                    {/* Code Tabs */}
                    <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 text-[11px] font-mono">
                      <button
                        onClick={() => setActiveCodeTab('flutter')}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          activeCodeTab === 'flutter' 
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        flutter.dart
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('api')}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          activeCodeTab === 'api' 
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        api.ts
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('architecture')}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          activeCodeTab === 'architecture' 
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        arch.spec
                      </button>
                    </div>

                    <button
                      onClick={copyCurrentSnippet}
                      className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Copy code snippet"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Code Content Area */}
                  <div className="p-4 sm:p-5 bg-[#080d1a] font-mono text-xs overflow-x-auto leading-relaxed text-slate-300 min-h-[280px]">
                    <pre className="whitespace-pre">
                      <code>
                        {activeCodeTab === 'flutter' && flutterCodeSnippet}
                        {activeCodeTab === 'api' && apiCodeSnippet}
                        {activeCodeTab === 'architecture' && architectureDetails}
                      </code>
                    </pre>
                  </div>

                  {/* Window Footer: Live Tech Stack Matrix */}
                  <div className="bg-[#0c1322] px-4 py-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                      <span>Stack Coverage:</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Production-Ready
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "Flutter", color: "text-cyan-400 bg-cyan-950/40 border-cyan-800/60" },
                        { label: "Dart", color: "text-blue-400 bg-blue-950/40 border-blue-800/60" },
                        { label: "Firebase", color: "text-amber-400 bg-amber-950/40 border-amber-800/60" },
                        { label: "REST APIs", color: "text-emerald-400 bg-emerald-950/40 border-emerald-800/60" },
                        { label: "JavaScript", color: "text-yellow-400 bg-yellow-950/40 border-yellow-800/60" },
                        { label: "HTML/CSS", color: "text-orange-400 bg-orange-950/40 border-orange-800/60" },
                        { label: "GitHub", color: "text-slate-300 bg-slate-900 border-slate-700" },
                        { label: "Postman", color: "text-rose-400 bg-rose-950/40 border-rose-800/60" },
                        { label: "Databases", color: "text-indigo-400 bg-indigo-950/40 border-indigo-800/60" }
                      ].map((tech, i) => (
                        <span 
                          key={i} 
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${tech.color}`}
                        >
                          {tech.label}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Quick Experience Badge */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                    <div className="text-xs text-slate-400 font-mono">Academic Track</div>
                    <div className="text-sm font-bold text-white">BS Software Engineering</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">Formal Engineering Core</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                    <div className="text-xs text-slate-400 font-mono">Primary Focus</div>
                    <div className="text-sm font-bold text-white">Digital Product Builder</div>
                    <div className="text-[11px] text-emerald-400 font-mono mt-0.5">Mobile • Web • APIs</div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
