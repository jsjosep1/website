
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
