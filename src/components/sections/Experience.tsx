import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import { experienceByLang } from "../../data/experience";
import { useI18n } from "../../i18n/i18n-context";

function formatPeriod(start: string, end: string | null, locale: string) {
  const s = new Date(start);
  const e = end ? new Date(end) : null;
  const fmt = (d: Date) =>
    d.toLocaleString(locale, { month: "short", year: "numeric" });
  return `${fmt(s)} — ${e ? fmt(e) : "Present"}`;
}

export default function Experience() {
  const { t, lang } = useI18n();
  const list = experienceByLang[lang];
  const locale = lang === "cs" ? "cs-CZ" : "en-US";

  return (
    <section
      id="experience"
      className="py-20 md:py-24 border-t border-neutral-800"
    >
      <Container>
        <Reveal>
          <SectionHeader
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {list.map((x) => {
            const { city, country } = x;

            return (
              <Reveal key={`${x.company}-${x.role}-${x.start}`} delay={0.05}>
                <Card>
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{x.role}</h3>
                        <p className="mt-2 text-neutral-400">{x.company}</p>
                        <p className="mt-1 text-sm text-neutral-500">
                          {formatPeriod(x.start, x.end, locale)}
                          {city || country ? " • " : ""}
                          {[city, country].filter(Boolean).join(", ")}
                        </p>
                      </div>

                      <span className="text-xs text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full self-start">
                        {t.experience.role}
                      </span>
                    </div>

                    <div className="mt-6 border-t border-neutral-900 pt-6">
                      <ul className="space-y-2 text-neutral-300 leading-relaxed">
                        {x.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
