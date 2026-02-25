export const translations = {
  en: {
    nav: { experience: "Experience", projects: "Case Studies", contact: "Contact" },
    hero: {
      role: "Executive Technical Consultant • Space Systems Architect",
      title: "GNSS, secure architectures,\ndigital execution.",
      desc:
        "I support space programmes and organisations with architecture, governance, and delivery across mission-critical systems and modern digital platforms.",
      cta1: "Experience",
      cta2: "Case Studies",
      cta3: "Contact",
    },
    contact: {
      title: "Contact",
      subtitle: "Open to advisory roles, architecture discussions and strategic collaborations.",
      headline: "Let’s build something solid.",
      desc:
        "If you're working on space systems, secure platforms, governance frameworks or digital transformation initiatives, I’m happy to explore how I can support.",
      email: "Email",
      book: "Book a Call",
      ctaTitle: "Available for advisory mandates in 2026.",
      ctaDesc: "Architecture reviews, governance support, secure systems, digital delivery.",
      ctaBtn: "Let’s talk",
    },
  },

  cs: {
    nav: { experience: "Zkušenosti", projects: "Případové studie", contact: "Kontakt" },
    hero: {
      role: "Výkonný technický konzultant • Architekt kosmických systémů",
      title: "GNSS, bezpečné architektury,\ndigitální realizace.",
      desc:
        "Pomáhám kosmickým programům a organizacím s architekturou, governance a dodávkou kritických systémů i moderních digitálních platforem.",
      cta1: "Zkušenosti",
      cta2: "Případové studie",
      cta3: "Kontakt",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Otevřený poradním rolím, diskuzím o architektuře a strategické spolupráci.",
      headline: "Pojďme postavit něco pevného.",
      desc:
        "Pokud pracujete na kosmických systémech, bezpečných platformách, governance nebo digitální transformaci, rád proberu, jak mohu pomoci.",
      email: "Email",
      book: "Domluvit hovor",
      ctaTitle: "Dostupný pro poradní mandáty v roce 2026.",
      ctaDesc: "Revize architektury, podpora governance, bezpečné systémy, digitální dodávka.",
      ctaBtn: "Ozvěte se",
    },
  },
} as const;

export type Lang = keyof typeof translations;