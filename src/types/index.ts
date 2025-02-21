export interface User {
  id: string;
  email: string;
  role: 'student' | 'recruiter';
  created_at: string;
}

export interface Resume {
  id: string;
  user_id: string;
  title: string;
  content: ResumeContent;
  template: string;
  created_at: string;
  updated_at: string;
}

export interface ResumeContent {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experience: {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string[];
  }[];
  education: {
    school: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: number;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
}

export interface Portfolio {
  id: string;
  user_id: string;
  title: string;
  bio: string;
  projects: PortfolioProject[];
  theme: string;
  created_at: string;
  updated_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Analytics {
  id: string;
  user_id: string;
  resume_views: number;
  portfolio_views: number;
  application_stats: {
    total: number;
    pending: number;
    interviews: number;
    offers: number;
    rejected: number;
  };
  skill_match_score: number;
  industry_comparison: {
    percentile: number;
    industry: string;
  };
}