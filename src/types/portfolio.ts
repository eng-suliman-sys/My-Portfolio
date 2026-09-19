export type ProjectCategory = 'Mobile Apps' | 'Websites' | 'Web Apps' | 'Software' | 'APIs';

export interface PersonalInfo {
  name: string;
  professionalTitle: string;
  shortStatement: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutTextParagraphs: string[];
  educationBadge: string;
  location: string;
  availabilityStatus: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  fiverr: string;
  resumeDownloadUrl?: string;
  profileImage: string;
  profileImageAlt: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  category: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: 'Production-Ready' | 'Advanced' | 'Proficient' | 'Core';
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  iconName: string;
  deliverables: string[];
  featuredTech: string[];
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  techStack: string[];
  developmentProcess: string[];
  challenges: string[];
  results: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isPlaceholder: boolean;
  statusBadge: string;
  accentColor: string;
  mockupType: 'mobile-fintech' | 'web-analytics' | 'mobile-ecommerce' | 'web-management' | 'web-erp';
  caseStudy: CaseStudy;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  section: 'Executive Leadership' | 'Education' | 'Development Journey' | 'Web Development' | 'Software Development';
  focus: string;
  description: string;
  keySkills: string[];
  typeBadge: string;
}

export interface LeadershipPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface KorvenzaTechInfo {
  companyName: string;
  role: string;
  tagline: string;
  shortIntroduction: string;
  detailedOverview: string;
  websiteUrl: string;
  isWebsiteLive: boolean;
  contactEmail: string;
  coreSolutions: string[];
  leadershipPillars: LeadershipPillar[];
}

export interface DualPathData {
  bridgeStatement: string;
  engineer: {
    title: string;
    roleTag: string;
    action: string;
    items: string[];
  };
  ceo: {
    title: string;
    roleTag: string;
    action: string;
    items: string[];
  };
}

export interface ValueCardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyOrPlatform: string;
  quote: string;
  rating: number;
  projectRef?: string;
  isPlaceholder: boolean;
}

export interface GithubRepoItem {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
  topics: string[];
}

export interface GithubSectionData {
  username: string;
  profileUrl: string;
  headline: string;
  subheadline: string;
  totalReposCount: number;
  featuredRepos: GithubRepoItem[];
  technologiesDistribution: { name: string; percentage: number; color: string }[];
}
