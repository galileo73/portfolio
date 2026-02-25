import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "EO Veracity",
    tag: "space",
    description: "Integrity and traceability concept for EO data using modern secure-by-design patterns.",
    tech: ["React", "FastAPI", "MongoDB", "Blockchain"],
    highlights: [
      "Data integrity workflow + evidence trail",
      "Designed for audits and multi-stakeholder environments",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/galileo73" },
    ],
  },
  {
    title: "Galileo / SB Review Dashboard (concept)",
    tag: "space",
    description: "Structured milestone and review tracking dashboard for programme governance.",
    tech: ["React", "TypeScript", "Data Modeling"],
    highlights: [
      "Timeline + dependencies + deliverable traceability",
      "Built to support quarterly review cycles",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/galileo73" },
    ],
  },
  {
    title: "Lead Automation System",
    tag: "digital",
    description: "Automation-driven lead generation workflow with scoring and daily outreach list.",
    tech: ["Sheets/Apps Script", "Automation", "CRM-ready"],
    highlights: ["Reusable template for multiple industries", "Fast setup, low overhead"],
    links: [
      { label: "GitHub", href: "https://github.com/galileo73" },
    ],
  },
  {
    title: "NFT / Digital Brand",
    tag: "venture",
    description: "Creative venture: collection, branding, and distribution channels.",
    tech: ["Branding", "Content", "Community"],
    highlights: ["Channel strategy across socials", "On-chain marketplace presence"],
    links: [
      { label: "OpenSea", href: "" },
      { label: "X", href: "" },
      { label: "Instagram", href: "" },
    ],
  },
];