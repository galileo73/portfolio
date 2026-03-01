export type EducationItem = {
  year?: string;
  period?: string;
  title: string;
  institution: string;
  city?: string;
  country?: string;
  notes?: string[];
};

export const education: EducationItem[] = [
  {
    year: "2021",
    title: "PMI® Authorised PMP® Exam Prep",
    institution: "RHEA System SA • PMI • Learning Tree International",
    city: "Prague",
    country: "Czechia",
    notes: [
      "Leadership & communication",
      "Project scheduling and risk management",
      "Decision making, conflict management",
      "Agile project management",
    ],
  },
  {
    year: "2017",
    title: "ITIL awareness and GSOp Service Management Training Course",
    institution: "Spaceopal GmbH",
    city: "Munich",
    country: "Germany",
    notes: [
      "Service delivery and customer satisfaction",
      "Business risk and service disruption management",
      "Stable service environment to support change",
    ],
  },
  {
    year: "2009",
    title: "Fundamentals of Communication & Time Management Training Course",
    institution: "Altran Italia",
    city: "Rome",
    country: "Italy",
    notes: [
      "Public speaking, active listening",
      "Prioritization and stress reduction",
      "Collaborative mindset and goal delivery",
    ],
  },
  {
    year: "2007",
    title: "Java / J2EE Certification",
    institution: "Axa Sistemi – Crismatica Consulting",
    city: "Rome",
    country: "Italy",
  },
  {
    period: "2004–2007",
    title: "PhD Contest Winner (Computer Engineering and Science) – XX Cycle",
    institution: "University of Cagliari (Italy)",
    city: "Cagliari",
    country: "Italy",
    notes: [
      "Research topic: “The Delphi SM2” – soil moisture retrieval methodology in the Mediterranean Basin",
      "Remote sensing: active and passive techniques",
      "Implementation: C++ modules, Simulink models (ASAR, MODIS, Meteosat 2nd Gen)",
    ],
  },
  {
    year: "2004",
    title: "Master’s Degree in Telecommunication Engineering",
    institution: "Università La Sapienza di Roma",
    city: "Rome",
    country: "Italy",
    notes: [
      "Thesis: Integral Numerical Techniques for the Analysis of Dispersive Properties of Transmission Lines",
      "Tools: Matlab, Simulink, Fortran",
      "Developed Fortran modules for EM field propagation analysis; data analysis in Matlab",
    ],
  },
];