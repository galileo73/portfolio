import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    title: "EO Veracity",
    tag: "space",
    summary:
      "Integrity and traceability workflow concept for EO data in multi-stakeholder environments.",
    problem:
      "EO products often need verifiable provenance, evidence trails and audit-ready traceability across teams and suppliers.",
    approach:
      "Designed a secure-by-design workflow: evidence capture, metadata strategy, role-based access, and tamper-resistance pattern; structured UI for review and decision points.",
    impact:
      "Clear integrity narrative for stakeholders, audit-friendly evidence chain, and a scalable blueprint for future integration.",
    tech: ["React", "TypeScript", "FastAPI", "MongoDB", "Blockchain patterns"],
    links: [{ label: "GitHub", href: "https://github.com/galileo73" }],
  },
  {
    title: "Programme Review Dashboard (SB / Governance)",
    tag: "space",
    summary:
      "Milestone and review tracking model for programme governance and decision support.",
    problem:
      "Programme governance is hard when milestones, dependencies and reviews live across separate documents and trackers.",
    approach:
      "Modeled a consolidated dataset: milestones, dependencies, status and evidence; designed UI for quarterly updates and drill-down views.",
    impact:
      "Improved clarity for planning and reviews; faster status comprehension and structured traceability.",
    tech: ["React", "TypeScript", "Data modeling"],
    links: [{ label: "GitHub", href: "https://github.com/galileo73" }],
  },
  {
    title: "Lead Automation System",
    tag: "digital",
    summary:
      "Automation-driven lead workflow with scoring and daily outreach list, designed to be reusable across industries.",
    problem:
      "Manual lead collection and outreach wastes time and lacks consistent prioritization.",
    approach:
      "Built a lightweight pipeline: collect → dedupe → score → produce daily prioritized outreach list; template-first design for reuse.",
    impact:
      "Repeatable process with low overhead and faster execution for outreach campaigns.",
    tech: ["Automation", "Google Sheets/Apps Script", "CRM-ready flow"],
    links: [{ label: "GitHub", href: "https://github.com/galileo73" }],
  },
  {
    title: "NFT / Digital Brand",
    tag: "venture",
    summary:
      "Creative venture combining branding, distribution channels and digital experimentation.",
    problem:
      "Collections fail when branding and distribution are weak, even with good visuals.",
    approach:
      "Structured positioning, content pillars and channel strategy; created link hub approach to drive traffic and conversions.",
    impact:
      "Clear brand identity and a scalable approach to iterate on messaging and channels.",
    tech: ["Branding", "Content", "Community", "Distribution"],
    links: [
      { label: "OpenSea", href: "PASTE_OPENSEA" },
      { label: "X", href: "PASTE_X" },
      { label: "Instagram", href: "PASTE_IG" },
    ],
  },
];