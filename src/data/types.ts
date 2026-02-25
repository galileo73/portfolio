export type Skill = {
  name: string;
  category: "frontend" | "backend" | "systems" | "devops";
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string; // es: "2024"
  end: string;   // es: "Present"
  highlights: string[];
};

export type EducationItem = {
  title: string;
  org: string;
  year: string;
  details?: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  links?: LinkItem[];
  tag?: "space" | "digital" | "venture";
};

export type LinkItem = {
  label: string;
  href: string;
};

export type CaseStudy = {
  title: string;
  tag: "space" | "digital" | "venture";
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
  links?: LinkItem[];
};