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

export type LangKey = "en" | "cs";

export const caseStudiesByLang: Record<LangKey, CaseStudy[]> = {
  en: [
    {
      title: "Galileo Ground Segment Deployment & Migration Planning",
      tag: "space",
      summary:
        "Operational planning and risk-controlled migration strategy for Ground Segment evolutions aligned to the programme roadmap.",
      problem:
        "Ground segment evolutions required coordinated planning across stakeholders, strict validation alignment, and controlled operational risk.",
      approach:
        "Led evolution reviews, consolidated inputs, produced deployment/migration plans, and supported readiness reviews and performance reporting.",
      impact:
        "Reduced deployment risk and improved decision-making through structured planning and reporting; optimized migration timelines.",
      tech: ["Service Ops", "Validation Planning", "Risk Analysis", "Reporting", "Stakeholder Mgmt"],
      links: [{ label: "LinkedIn", href: "PASTE_LINKEDIN" }],
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
        "Improved compliance readiness and reduced accreditation friction by accelerating closure of security findings and maturing evidence.",
      tech: ["Security Governance", "Compliance", "Accreditation", "Non-Conformance Mgmt"],
      links: [{ label: "Contact", href: "#contact" }],
    },
    {
      title: "EO Veracity – Full-Stack Dashboard (React + FastAPI)",
      tag: "digital",
      summary:
        "Modern dashboard with authentication, role-based UI, and modular architecture designed for future integrations.",
      problem:
        "Needed a secure foundation with role-based navigation and a scalable component architecture for rapid feature delivery.",
      approach:
        "Built React layout with reusable components, implemented FastAPI + MongoDB backend, JWT auth/decoding, and role-aware UI.",
      impact:
        "Delivered a maintainable base platform enabling rapid expansion (Admin, contracts, configuration, future storage/blockchain integrations).",
      tech: ["React", "Vite", "TypeScript", "Tailwind", "FastAPI", "MongoDB", "JWT"],
      links: [{ label: "GitHub", href: "https://github.com/galileo73" }],
    },
  ],

  cs: [
    {
      title: "Plánování nasazení a migrace Galileo Ground Segmentu",
      tag: "space",
      summary:
        "Operační plánování a řízená migrační strategie pro evoluce Ground Segmentu v souladu s roadmapou programu.",
      problem:
        "Evoluce ground segmentu vyžadovaly koordinaci stakeholderů, vazbu na validaci a přísně řízené operační riziko.",
      approach:
        "Vedení evolučních review, konsolidace vstupů, příprava deployment/migračních plánů a podpora readiness review i performance reportingu.",
      impact:
        "Snížení rizik nasazení a lepší rozhodování díky strukturovanému plánování a reportingu; optimalizace migračních termínů.",
      tech: ["Service Ops", "Plán validace", "Analýza rizik", "Reporting", "Stakeholdeři"],
      links: [{ label: "LinkedIn", href: "PASTE_LINKEDIN" }],
    },
    {
      title: "Podpora bezpečnostní akreditace GOVSATCOM (Initial Service)",
      tag: "space",
      summary:
        "Podpora security governance a akreditační dokumentace se zaměřením na compliance, anomálie a uzavírání neshod.",
      problem:
        "Milník Initial Service vyžadoval kvalitní důkazy akreditace a konzistentní bezpečnostní compliance napříč požadavky, návrhem a provozem.",
      approach:
        "Revize bezpečnostních požadavků/specifikací/návrhu, podpora akreditační dokumentace a analýza anomálií/neshod pro rychlé uzavírání.",
      impact:
        "Zvýšení připravenosti compliance a snížení tření v akreditaci díky rychlejšímu uzavírání findingů a dozrání evidence.",
      tech: ["Security Governance", "Compliance", "Akreditace", "Řízení neshod"],
      links: [{ label: "Kontakt", href: "#contact" }],
    },
    {
      title: "EO Veracity – Full-Stack dashboard (React + FastAPI)",
      tag: "digital",
      summary:
        "Moderní dashboard s autentizací, role-based UI a modulární architekturou připravenou na budoucí integrace.",
      problem:
        "Bylo potřeba bezpečné jádro s navigací podle rolí a škálovatelná architektura komponent pro rychlé dodávání funkcí.",
      approach:
        "React layout s reusable komponentami, backend FastAPI + MongoDB, JWT auth/dekódování a role-aware UI.",
      impact:
        "Dodaná udržovatelná platforma pro rychlé rozšíření (Admin, kontrakty, konfigurace, budoucí storage/blockchain integrace).",
      tech: ["React", "Vite", "TypeScript", "Tailwind", "FastAPI", "MongoDB", "JWT"],
      links: [{ label: "GitHub", href: "https://github.com/galileo73" }],
    },
  ],
};