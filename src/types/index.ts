/**
 * Core TypeScript interfaces for Vincent Nguyen's Product Manager portfolio
 */

export type ProjectCategory = 'product' | 'transformation' | 'finance' | 'mobile';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  category: ProjectCategory;
  summary: string;
  context: string;
  problem: string;
  approach: CaseStudySection[];
  results: string[];
  metrics: ProjectMetric[];
  stack: string[];
  scope?: string;
  coverGradient: string; // tailwind gradient classes for cover (fallback)
  coverImage?: string; // optional cover image URL — overrides gradient on cards
  badge?: string; // optional badge (e.g. "🚧 En cours")
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Certification {
  label: string;
  issuer: string;
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[]; // used for certifications
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'editorial' | 'commercial' | 'personal';
  message: string;
  timestamp: Date;
}
