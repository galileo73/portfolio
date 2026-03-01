export type ExperienceItem = {
  start: string; // ISO date
  end: string;   // ISO date
  role: string;
  company: string;
  client?: string;
  city?: string;
  country?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    start: "2024-06-14",
    end: "2024-10-31",
    role: "GOVSATCOM Security and Accreditation Engineer (Call For Expert)",
    company: "EUSPA",
    city: "Prague",
    country: "Czechia",
    highlights: [
      "Support accreditation documentation preparation for Initial Service milestone.",
      "Ensure compliance through detailed review of security requirements, specifications, and system design.",
      "Analyze and address security-related anomalies and non-conformances promptly.",
    ],
  },
  {
    start: "2022-04-01",
    end: "2023-12-31",
    role: "Galileo Ground Segment Operations Engineer",
    company: "Rhea System SA",
    client: "EUSPA",
    city: "Prague",
    country: "Czechia",
    highlights: [
      "Led evolution reviews for the Galileo Ground Segment, coordinating stakeholders and ensuring alignment.",
      "Developed deployment plans and migration strategy to align with the programme roadmap and reduce risks.",
      "Supported planning and evaluation meetings for new Ground Segment assets, aligned with service validation planning.",
      "Provided input for security-related activities and reviewed change proposals under the contract framework.",
      "Supported Service Exploitation Reviews and performance reviews (monthly/quarterly) with technical analysis.",
      "Acted as technical expert for qualification/validation activities and as interface for PRS baseline evolution.",
      "Prepared technical reports and schedule presentations using structured planning and reporting tools.",
      "Achieved a 10% reduction in proposal costs through comprehensive technical consolidation and review.",
      "Optimized migration timelines and minimized deployment risks for targeted Ground Segment scenarios.",
    ],
  },
  {
    start: "2020-04-01",
    end: "2022-03-31",
    role: "Galileo Operations Engineer",
    company: "Rhea System SA",
    client: "EUSPA",
    city: "Prague",
    country: "Czechia",
    highlights: [
      "Supported operations engineering activities across Galileo Ground Segment and service operations.",
      "Contributed to planning and execution of operational validation phases supporting roll-out to operational chain.",
      "Prepared technical inputs for service validation test campaigns, supporting test cases as technical expert in PRS/SECMON.",
      "Supported special operations related to new satellite launch preparations.",
      "Prepared Service Exploitation Reviews, assessing improvements and impacts of anomaly reports and non-conformances.",
    ],
  },
  {
    start: "2018-07-01",
    end: "2020-03-31",
    role: "Galileo Ground Segment Engineer",
    company: "Rhea System SA",
    client: "EUSPA",
    city: "Prague",
    country: "Czechia",
    highlights: [
      "Supported ground segment engineering activities for Galileo, contributing to planning, validation and roll-out.",
      "Provided technical support for secure operations contexts (PRS/SECMON related activities).",
      "Contributed to cross-team coordination and reporting for operational preparation activities.",
    ],
  },
  {
    start: "2015-04-01",
    end: "2018-06-30",
    role: "Galileo KMF Manager",
    company: "Spaceopal GmbH",
    city: "Munich",
    country: "Germany",
    highlights: [
      "Managed teams and weekly coordination to execute nominal and secure operational tasks.",
      "Identified and resolved operational issues and planned validation phases leading to roll-out in operational chain.",
      "Supervised Galileo special operations during critical phases such as satellite launch preparation and in-orbit tests.",
      "Produced reports, dashboards and presentations for progress meetings.",
      "Coordinated teams during final integration of elements to ensure smooth integration and readiness.",
    ],
  },
  {
    start: "2013-03-01",
    end: "2015-03-30",
    role: "Solution Architect for Galileo PRS",
    company: "Altran Italia",
    client: "Telespazio (Rome)",
    city: "Rome",
    country: "Italy",
    highlights: [
      "Supported solution architecture activities for Galileo PRS contexts.",
      "Worked across stakeholders to align secure service objectives with system constraints.",
    ],
  },
  {
    start: "2012-02-01",
    end: "2012-12-31",
    role: "Software Developer for SENECA project",
    company: "Altran Italia",
    client: "Telespazio (Rome)",
    city: "Rome",
    country: "Italy",
    highlights: [
      "Software development activities within the SENECA project context.",
      "Supported integration and delivery according to project constraints and timelines.",
    ],
  },
  {
    start: "2010-11-01",
    end: "2012-02-28",
    role: "Software Engineer (MEADS)",
    company: "Altran Italia",
    client: "MBDA (Rome)",
    city: "Rome",
    country: "Italy",
    highlights: [
      "Contributed to software engineering activities within MEADS programme context.",
      "Supported development and validation tasks according to programme processes.",
    ],
  },
  {
    start: "2008-03-01",
    end: "2010-09-30",
    role: "Software Engineer – Pendolino train platform",
    company: "Altran Italia",
    client: "Alstom Transport (Italy)",
    country: "Italy",
    highlights: [
      "Contributed to TCMS/HMI software activities for ETR600/610 commissioning.",
      "Implemented software validation and testing approach onboard to ensure reliability under operational conditions.",
    ],
  },
  {
    start: "2007-07-01",
    end: "2007-12-31",
    role: "Software Engineer – Tornado/Eurofighter flight simulator",
    company: "Altran Italia",
    client: "Leonardo",
    country: "Italy",
    highlights: [
      "Software engineering activities supporting flight simulator systems.",
      "Supported integration and verification tasks for simulator components.",
    ],
  },
  {
    start: "2006-01-01",
    end: "2007-03-30",
    role: "Software Engineer for GEOMOIST Project",
    company: "MEEO S.r.l.",
    country: "Italy",
    highlights: [
      "Worked on remote sensing related software activities supporting GEOMOIST context.",
      "Contributed to data processing and analysis workflows.",
    ],
  },
  {
    start: "2005-02-01",
    end: "2005-12-31",
    role: "Software Engineer for ESA DesertWatch project",
    company: "ENEA C.R. Casaccia",
    client: "ESA ESRIN",
    city: "Rome",
    country: "Italy",
    highlights: [
      "Contributed to software and analysis activities supporting ESA DesertWatch project context.",
      "Supported data analysis and reporting to project stakeholders.",
    ],
  },
  {
    start: "2004-06-01",
    end: "2004-07-31",
    role: "Software Engineer for DIPS project",
    company: "Advanced Computer Systems (A.C.S.) Srl",
    city: "Rome",
    country: "Italy",
    highlights: [
      "Led development of supervised classification software for satellite image processing on Silicon Graphics workstations.",
      "Improved accuracy and efficiency of satellite imagery classification through the full software lifecycle and testing.",
    ],
  },
];