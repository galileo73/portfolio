export type BentoItem = {
  title: string;
  desc: string;
  chips: string[];
};

export const bentoByLang = {
  en: [
    {
      title: "Galileo & GNSS",
      desc: "Ground Segment evolutions, PRS context, service continuity and governance.",
      chips: ["Programmes", "Governance", "Continuity"],
    },
    {
      title: "Security & Accreditation",
      desc: "Risk-driven engineering, compliance alignment and mission-critical assurance.",
      chips: ["Risk", "Compliance", "Assurance"],
    },
    {
      title: "System Architecture",
      desc: "Requirements flowdown, interface definition and validation coordination.",
      chips: ["Architecture", "Interfaces", "Validation"],
    },
    {
      title: "Operational Governance",
      desc: "SLA/KPI monitoring, release readiness and cross-stakeholder alignment.",
      chips: ["SLA/KPI", "Readiness", "Operations"],
    },
    {
      title: "Digital Platforms",
      desc: "React + TypeScript dashboards and automation workflows.",
      chips: ["React", "Automation", "CI"],
    },
    {
      title: "Ventures & Innovation",
      desc: "NFT brand, experiments and digital distribution strategy.",
      chips: ["Brand", "Community", "Channels"],
    },
  ],

  cs: [
    {
      title: "Galileo a GNSS",
      desc: "Evoluce Ground Segmentu, kontext PRS, kontinuita služby a governance.",
      chips: ["Programy", "Governance", "Kontinuita"],
    },
    {
      title: "Bezpečnost a akreditace",
      desc: "Rizikově řízené inženýrství, compliance a assurance pro kritické systémy.",
      chips: ["Riziko", "Compliance", "Assurance"],
    },
    {
      title: "Systémová architektura",
      desc: "Flowdown požadavků, definice rozhraní a koordinace validace.",
      chips: ["Architektura", "Rozhraní", "Validace"],
    },
    {
      title: "Operační governance",
      desc: "SLA/KPI monitoring, readiness releaseů a sladění stakeholderů.",
      chips: ["SLA/KPI", "Readiness", "Provoz"],
    },
    {
      title: "Digitální platformy",
      desc: "Dashboardy v React + TypeScript a automatizační workflow.",
      chips: ["React", "Automatizace", "CI"],
    },
    {
      title: "Venture a inovace",
      desc: "NFT brand, experimenty a strategie digitální distribuce.",
      chips: ["Brand", "Komunita", "Kanály"],
    },
  ],
} as const;

export type LangKey = keyof typeof bentoByLang;