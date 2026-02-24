export type Skill = {
  name: string;
  category: "frontend" | "backend" | "systems" | "devops";
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
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