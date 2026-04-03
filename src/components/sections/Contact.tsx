import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/profile";
import { useI18n } from "../../i18n/i18n-context";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="py-20 md:py-24 border-t border-neutral-800"
    >
      <Container>
        <Reveal>
          <SectionHeader
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-neutral-400 leading-relaxed">{t.contact.desc}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.emails[0]}`}
                className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-white/70 transition"
              >
                {t.contact.email}
              </a>

              {profile.links.calendly && (
                <a
                  href={profile.links.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-white/70 transition"
                >
                  {t.contact.book}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
