import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import {
  IconLinkedIn,
  IconGitHub,
  IconMail,
  IconCalendar,
  IconX,
} from "../ui/Icons";
import { testimonial } from "../../data/testimonial";
import { useI18n } from "../../i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="py-28 border-t border-neutral-800 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

      <Container>
        <Reveal>
          <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-neutral-800 glass-surface p-10 shadow-[0_0_60px_rgba(255,255,255,0.04)]">
              <h3 className="text-2xl font-semibold mb-6">
                {t.contact.headline}
              </h3>

              <p className="text-neutral-400 mb-10 leading-relaxed">
                {t.contact.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:rossi.gianluigi@gmail.com"
                  className="hover-lift flex items-center gap-3 rounded-xl border border-neutral-800 bg-black/30 px-5 py-4 hover:border-white/40 hover:text-white transition"
                >
                  <IconMail className="w-5 h-5" />
                  {t.contact.email}
                </a>

                <a
                  href="PASTE_CALENDLY_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-lift flex items-center gap-3 rounded-xl border border-neutral-800 bg-black/30 px-5 py-4 hover:border-white/40 hover:text-white transition"
                >
                  <IconCalendar className="w-5 h-5" />
                  {t.contact.book}
                </a>

                <a
                  href="PASTE_LINKEDIN"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-lift flex items-center gap-3 rounded-xl border border-neutral-800 bg-black/30 px-5 py-4 hover:border-white/40 hover:text-white transition"
                >
                  <IconLinkedIn className="w-5 h-5" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/galileo73"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-lift flex items-center gap-3 rounded-xl border border-neutral-800 bg-black/30 px-5 py-4 hover:border-white/40 hover:text-white transition"
                >
                  <IconGitHub className="w-5 h-5" />
                  GitHub
                </a>

                <a
                  href="PASTE_X"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-lift flex items-center gap-3 rounded-xl border border-neutral-800 bg-black/30 px-5 py-4 hover:border-white/40 hover:text-white transition"
                >
                  <IconX className="w-5 h-5" />
                  X
                </a>
              </div>

              {/* TESTIMONIAL */}
              <div className="mt-10 pt-8 border-t border-neutral-800/70">
                <p className="text-neutral-200 text-base leading-relaxed">
                  “{testimonial.quote}”
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-300">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>

                  <span className="text-xs text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                    Trusted delivery
                  </span>
                </div>
              </div>

              {/* FULL-WIDTH CTA (D) */}
              <div className="mt-8">
                <div className="hover-lift rounded-2xl border border-neutral-800 glass-surface p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm text-neutral-400">Availability</p>
                    <p className="mt-2 text-xl font-semibold">
                      {t.contact.ctaTitle}
                    </p>
                    <p className="mt-2 text-neutral-400">
                      {t.contact.ctaDesc}
                    </p>
                  </div>

                  <a
                    href="mailto:rossi.gianluigi@gmail.com?subject=Advisory%20mandate%202026"
                    className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition text-center"
                  >
                    {t.contact.ctaBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}