export const testimonialByLang = {
  en: {
    quote: "Reliable delivery, clear communication, and strong ownership across complex programmes.",
    author: "Stakeholder feedback",
    role: "Programme / Delivery context",
    badge: "Trusted delivery",
  },
  cs: {
    quote: "Spolehlivá dodávka, jasná komunikace a silné převzetí odpovědnosti i u komplexních programů.",
    author: "Zpětná vazba stakeholderů",
    role: "Program / delivery kontext",
    badge: "Důvěryhodná dodávka",
  },
} as const;

export type LangKey = keyof typeof testimonialByLang;