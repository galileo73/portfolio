export type EducationItem = {
  year?: string;
  period?: string;
  title: string;
  institution: string;
  city?: string;
  country?: string;
  notes?: string[];
};

export type LangKey = "en" | "cs";

export const educationByLang: Record<LangKey, EducationItem[]> = {
  en: [
    {
      year: "2021",
      title: "PMI® Authorised PMP® Exam Prep",
      institution: "RHEA System SA, PMI, Learning Tree International",
      city: "Prague",
      country: "Czechia",
      notes: [
        "Leadership skills & techniques",
        "Communicate effectively",
        "Create an effective project schedule",
        "Project Risk Management",
        "Emotional intelligence",
        "Decision making",
        "Conflict Management",
        "Agile project management",
      ],
    },
    {
      year: "2017",
      title: "ITIL awareness and GSOp Service Management Training Course",
      institution: "Spaceopal GmBH",
      city: "Munich",
      country: "Germany",
      notes: [
        "Service delivery and customer satisfaction",
        "Reduced costs through improved utilization of resources",
        "Better management of business risk and service disruption",
        "Stable service environment to support constant business change",
      ],
    },
    {
      year: "2009",
      title: "Fundamentals of Communication, Time Management Training Course",
      institution: "Altran Italia",
      city: "Roma",
      country: "Italy",
      notes: [
        "Listening",
        "Communicate effectively",
        "Public speaking",
        "Collaborative mindset",
        "Achieve goals",
        "Reduce stress",
        "Prioritize work",
      ],
    },
    {
      year: "2007",
      title: "Java/J2EE Certification",
      institution: "Axa Sistemi – Crismatica Consulting",
      city: "Roma",
      country: "Italy",
      notes: [],
    },
    {
      period: "2004–2007",
      title: "PhD (XX° Ciclo) – University of Cagliari",
      institution: "University of Cagliari (Italy)",
      city: "Roma",
      country: "Italy",
      notes: [
        '"The Delphi SM2" – Innovative Soil Moisture Retrieval Methodology in the Mediterranean Basin',
        "Duration: Three years",
        "Focus Area: Engineering and Environmental Science",
        "Developed an advanced soil moisture retrieval technique using active and passive remote sensing technologies",
        "Implemented software modules for soil moisture estimation in C++",
        "Created Simulink models for ASAR sensor, MODIS, and Meteosat 2nd Generation",
      ],
    },
    {
      year: "2004",
      title: "Master's Degree in Telecommunication Engineering",
      institution: "Università La Sapienza di Roma, Italy",
      city: "Roma",
      country: "Italy",
      notes: [
        "Thesis: Integral Numerical Techniques for the Analysis of Dispersive Properties of Transmission Lines",
        "Tools: Matlab, Simulink, and Fortran",
        "Developed specialized software modules in Fortran for electromagnetic field propagation analysis",
        "Conducted comprehensive data analysis using Matlab",
        "Skills: Matlab/Simulink coding; Fortran coding for RF equipment analysis",
      ],
    },
  ],

  cs: [
    {
      year: "2021",
      title: "PMI® Authorised PMP® Exam Prep",
      institution: "RHEA System SA, PMI, Learning Tree International",
      city: "Prague",
      country: "Czechia",
      notes: [
        "Leadership dovednosti a techniky",
        "Efektivní komunikace",
        "Tvorba efektivního harmonogramu projektu",
        "Řízení rizik projektu",
        "Emoční inteligence",
        "Rozhodování",
        "Řízení konfliktů",
        "Agilní řízení projektů",
      ],
    },
    {
      year: "2017",
      title: "ITIL awareness and GSOp Service Management Training Course",
      institution: "Spaceopal GmBH",
      city: "Munich",
      country: "Germany",
      notes: [
        "Dodávka služby a spokojenost zákazníka",
        "Snížení nákladů díky lepšímu využití zdrojů",
        "Lepší řízení business rizik a výpadků služby",
        "Stabilní prostředí služby pro podporu neustálých změn",
      ],
    },
    {
      year: "2009",
      title: "Fundamentals of Communication, Time Management Training Course",
      institution: "Altran Italia",
      city: "Roma",
      country: "Italy",
      notes: [
        "Aktivní naslouchání",
        "Efektivní komunikace",
        "Veřejné vystupování",
        "Spolupracující přístup",
        "Dosažení cílů",
        "Snížení stresu",
        "Prioritizace práce",
      ],
    },
    {
      year: "2007",
      title: "Java/J2EE Certification",
      institution: "Axa Sistemi – Crismatica Consulting",
      city: "Roma",
      country: "Italy",
      notes: [],
    },
    {
      period: "2004–2007",
      title: "PhD (XX° Ciclo) – University of Cagliari",
      institution: "University of Cagliari (Italy)",
      city: "Roma",
      country: "Italy",
      notes: [
        '"The Delphi SM2" – inovativní metodika odhadu vlhkosti půdy ve Středomoří',
        "Doba trvání: tři roky",
        "Zaměření: inženýrství a environmentální vědy",
        "Vývoj techniky odhadu vlhkosti půdy s využitím aktivního i pasivního remote sensing",
        "Implementace modulů pro odhad vlhkosti půdy v jazyce C++",
        "Simulink modely pro ASAR, MODIS a Meteosat 2. generace",
      ],
    },
    {
      year: "2004",
      title: "Magisterský titul – Telekomunikační inženýrství",
      institution: "Università La Sapienza di Roma, Italy",
      city: "Roma",
      country: "Italy",
      notes: [
        "Diplomová práce: Numerické metody pro analýzu disperzních vlastností přenosových vedení",
        "Nástroje: Matlab, Simulink, Fortran",
        "Vývoj specializovaných modulů ve Fortranu pro analýzu šíření elektromagnetického pole v RF",
        "Datová analýza v Matlabu",
        "Dovednosti: Matlab/Simulink; Fortran pro analýzu RF zařízení",
      ],
    },
  ],
};