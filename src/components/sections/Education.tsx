import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import { educationByLang } from "../../data/education";
import { useI18n } from "../../i18n/I18nProvider";

export default function Education() {
  const { t, lang } = useI18n();
  const list = educationByLang[lang];

  return (
    <section id="education" className="py-20 md:py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <SectionHeader title={t.education.title} subtitle={t.education.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {list.map((e) => (
            <Reveal
              key={`${e.title}-${e.institution}-${e.year ?? e.period ?? ""}`}
              delay={0.05}
            >
              <Card>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{e.title}</h3>
                      <p className="mt-2 text-neutral-400">{e.institution}</p>
                      <p className="mt-1 text-sm text-neutral-500">
                        {e.year ? e.year : e.period ? e.period : ""}
                        {(e.city || e.country) ? " • " : ""}
                        {[e.city, e.country].filter(Boolean).join(", ")}
                      </p>
                    </div>

                    <span className="text-xs text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                      {e.year ? t.education.year : t.education.period}
                    </span>
                  </div>

                  {e.notes?.length ? (
                    <div className="mt-6 border-t border-neutral-900 pt-6">
                      <ul className="space-y-2 text-neutral-300 leading-relaxed">
                        {e.notes.map((n, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}