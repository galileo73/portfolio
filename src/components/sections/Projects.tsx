import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import { caseStudiesByLang } from "../../data/caseStudies";
import { useI18n } from "../../i18n/i18n-context";

function Tag({
  tag,
  labels,
}: {
  tag: "space" | "digital" | "venture";
  labels: { space: string; digital: string; venture: string };
}) {
  const label =
    tag === "space"
      ? labels.space
      : tag === "digital"
        ? labels.digital
        : labels.venture;

  return (
    <span className="text-xs border border-neutral-800 px-3 py-1 rounded-full text-neutral-400">
      {label}
    </span>
  );
}

export default function Projects() {
  const { t, lang } = useI18n();
  const caseStudies = caseStudiesByLang[lang];

  return (
    <section
      id="projects"
      className="py-20 md:py-24 border-t border-neutral-800"
    >
      <Container>
        <Reveal>
          <SectionHeader
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {caseStudies.map((cs) => (
            <Reveal key={cs.title} delay={0.06}>
              <Card className="p-0">
                <div className="grid lg:grid-cols-12">
                  {/* LEFT */}
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-neutral-900">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold">{cs.title}</h3>
                      <Tag
                        tag={cs.tag}
                        labels={{
                          space: t.projects.tagSpace,
                          digital: t.projects.tagDigital,
                          venture: t.projects.tagVenture,
                        }}
                      />
                    </div>

                    <p className="mt-4 text-neutral-400 leading-relaxed">
                      {cs.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500">
                      {cs.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-neutral-800 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {cs.links?.length ? (
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        {cs.links.map((l) => (
                          <a
                            key={`${cs.title}-${l.href}-${l.label}`}
                            href={l.href}
                            target={
                              l.href.startsWith("#") ? undefined : "_blank"
                            }
                            rel={
                              l.href.startsWith("#") ? undefined : "noreferrer"
                            }
                            className="underline text-neutral-300 hover:text-white"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* RIGHT */}
                  <div className="lg:col-span-8 p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                          {t.projects.problem}
                        </p>
                        <p className="mt-3 text-neutral-300 leading-relaxed">
                          {cs.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                          {t.projects.approach}
                        </p>
                        <p className="mt-3 text-neutral-300 leading-relaxed">
                          {cs.approach}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                          {t.projects.impact}
                        </p>
                        <p className="mt-3 text-neutral-300 leading-relaxed">
                          {cs.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
