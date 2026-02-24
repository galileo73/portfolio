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