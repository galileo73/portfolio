export const translations = {
  en: {
    nav: {
      experience: "Experience",
      education: "Education",
      projects: "Case Studies",
      contact: "Contact",
    },

    hero: {
      role: "Executive Technical Consultant • Space Systems Architect",
      title: "GNSS, secure architectures,\ndigital execution.",
      desc: "I support space programmes and organisations with architecture, governance, and delivery across mission-critical systems and modern digital platforms.",
      cta1: "Experience",
      cta2: "Case Studies",
      cta3: "Contact",
      cv: "Download CV",
      tags: [
        "Galileo • PRS",
        "Security Accreditation",
        "Ground Segment",
        "System Engineering",
        "Digital Platforms",
      ],
      cardTitle: "Consulting • Architecture",
      cardSubtitle: "Space systems + modern delivery",
      metrics: [
        { k: "20+ yrs", v: "Mission-critical systems" },
        { k: "Galileo", v: "Ground Segment / PRS" },
        { k: "Security", v: "Accreditation & Risk" },
      ],
    },
    bento: {
      title: "Domains & Capabilities",
      subtitle:
        "Executive view of core expertise, delivery approach and innovation track.",
      label: "Capability",
    },

    experience: {
      title: "Experience",
      subtitle:
        "Selected roles across Galileo operations, secure services, accreditation, and mission-critical delivery.",
      contractRole: "Contract role",
      role: "Role",
      client: "Client",
    },

    education: {
      title: "Education & Certifications",
      subtitle:
        "Formal education and targeted training supporting leadership, delivery and secure operations.",
      year: "Year",
      period: "Period",
    },

    projects: {
      title: "Case Studies",
      subtitle:
        "Selected initiatives framed as executive briefs: problem, approach, impact.",
      tagSpace: "Space",
      tagDigital: "Digital",
      tagVenture: "Venture",
      problem: "Problem",
      approach: "Approach",
      impact: "Impact",
    },

    skills: { title: "Skills" },

    contact: {
      title: "Contact",
      subtitle:
        "Open to advisory roles, architecture discussions and strategic collaborations.",
      headline: "Let’s build something solid.",
      desc: "If you're working on space systems, secure platforms, governance frameworks or digital transformation initiatives, I’m happy to explore how I can support.",
      email: "Email",
      book: "Book a Call",
      availability: "Availability",
      trusted: "Trusted delivery",
      ctaTitle: "Available for advisory mandates in 2026.",
      ctaDesc:
        "Architecture reviews, governance support, secure systems, digital delivery.",
      ctaBtn: "Let’s talk",
    },
  },

  cs: {
    nav: {
      experience: "Zkušenosti",
      education: "Vzdělání",
      projects: "Případové studie",
      contact: "Kontakt",
    },

    hero: {
      role: "Výkonný technický konzultant • Architekt kosmických systémů",
      title: "GNSS, bezpečné architektury,\ndigitální realizace.",
      desc: "Pomáhám kosmickým programům a organizacím s architekturou, governance a dodávkou kritických systémů i moderních digitálních platforem.",
      cta1: "Zkušenosti",
      cta2: "Případové studie",
      cta3: "Kontakt",
      cv: "Stáhnout CV",
      tags: [
        "Galileo • PRS",
        "Bezpečnostní akreditace",
        "Ground Segment",
        "Systémové inženýrství",
        "Digitální platformy",
      ],
      cardTitle: "Konzulting • Architektura",
      cardSubtitle: "Kosmické systémy + moderní delivery",
      metrics: [
        { k: "20+ let", v: "Mission-critical systems" },
        { k: "Galileo", v: "Ground Segment / PRS" },
        { k: "Security", v: "Akreditace a rizika" },
      ],
    },
    bento: {
      title: "Oblasti & schopnosti",
      subtitle:
        "Executive přehled klíčové expertízy, stylu dodávky a inovačního směru.",
      label: "Schopnost",
    },

    experience: {
      title: "Zkušenosti",
      subtitle:
        "Vybrané role napříč Galileo operacemi, secure službami, akreditací a dodávkou kritických systémů.",
      contractRole: "Kontraktní role",
      role: "Role",
      client: "Klient",
    },

    education: {
      title: "Vzdělání & certifikace",
      subtitle:
        "Formální vzdělání a cílené kurzy pro leadership, delivery a secure operations.",
      year: "Rok",
      period: "Období",
    },

    projects: {
      title: "Případové studie",
      subtitle:
        "Vybrané iniciativy ve formátu executive brief: problém, přístup, dopad.",
      tagSpace: "Space",
      tagDigital: "Digital",
      tagVenture: "Venture",
      problem: "Problém",
      approach: "Přístup",
      impact: "Dopad",
    },

    skills: { title: "Dovednosti" },

    contact: {
      title: "Kontakt",
      subtitle:
        "Otevřený poradním rolím, diskuzím o architektuře a strategické spolupráci.",
      headline: "Pojďme postavit něco pevného.",
      desc: "Pokud pracujete na kosmických systémech, bezpečných platformách, governance nebo digitální transformaci, rád proberu, jak mohu pomoci.",
      email: "Email",
      book: "Domluvit hovor",
      availability: "Dostupnost",
      trusted: "Důvěryhodná dodávka",
      ctaTitle: "Dostupný pro poradní mandáty v roce 2026.",
      ctaDesc:
        "Revize architektury, podpora governance, bezpečné systémy, digitální dodávka.",
      ctaBtn: "Ozvěte se",
    },
  },
} as const;

export type Lang = keyof typeof translations;
