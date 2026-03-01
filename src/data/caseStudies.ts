export type CaseStudyTag = "space" | "digital" | "venture";

export type CaseStudy = {
  title: string;
  tag: CaseStudyTag;
  summary: string;

  problem: string;
  approach: string;
  impact: string;

  tech: string[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Galileo Ground Segment Deployment & Migration Planning",
    tag: "space",
    summary:
      "Operational planning and risk-controlled migration strategy for Ground Segment evolutions aligned to the programme roadmap.",
    problem:
      "Ground segment evolutions required coordinated planning across stakeholders, strict validation alignment, and controlled operational risk.",
    approach:
      "Led evolution reviews, consolidated stakeholder inputs, produced deployment/migration plans, and supported readiness reviews and performance reporting.",
    impact:
      "Optimized migration timelines, reduced deployment risks, and improved decision-making through structured reporting. Contributed to cost reduction on proposals (10% reported in CV context).",
    tech: ["Service Ops", "Validation Planning", "Risk Analysis", "Reporting", "Stakeholder Mgmt"],
    links: [
      { label: "LinkedIn", href: "PASTE_LINKEDIN" },
    ],
  },
  {
    title: "GOVSATCOM Security Accreditation Support (Initial Service)",
    tag: "space",
    summary:
      "Security governance and accreditation documentation support focused on compliance, anomalies, and non-conformance closure.",
    problem:
      "Initial Service milestone required robust accreditation evidence and consistent security compliance across requirements, design and operations.",
    approach:
      "Reviewed security requirements/specs/design, supported accreditation documentation, and analyzed anomalies/non-conformances for timely resolution.",
    impact:
      "Improved compliance readiness and reduced accreditation friction by accelerating closure of security-related findings and documentation maturity.",
    tech: ["Security Governance", "Compliance", "Accreditation", "Non-Conformance Mgmt"],
    links: [
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "EO Veracity – Full-Stack Dashboard (React + FastAPI)",
    tag: "digital",
    summary:
      "Modern web dashboard with authentication, role-based UI, and modular architecture designed for future integrations.",
    problem:
      "Needed a structured dashboard foundation with secure login, role-based navigation, and scalable component architecture.",
    approach:
      "Built React layout with reusable components, implemented FastAPI backend + MongoDB, JWT auth/decoding, role-based sidebar/header, and clean project structure.",
    impact:
      "Delivered a maintainable base platform enabling rapid feature expansion (Admin, contracts, configuration, future storage/blockchain integrations).",
    tech: ["React", "Vite", "TypeScript", "Tailwind", "FastAPI", "MongoDB", "JWT"],
    links: [
      { label: "GitHub", href: "https://github.com/galileo73" },
    ],
  },
];