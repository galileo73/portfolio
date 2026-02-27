import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import { caseStudies } from "../../data/caseStudies";

function Tag({ tag }: { tag: "space" | "digital" | "venture" }) {
  const label = tag === "space" ? "Space" : tag === "digital" ? "Digital" : "Venture";
  return (
    <span className="text-xs border border-neutral-800 px-3 py-1 rounded-full text-neutral-400">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <SectionHeader
            title="Case Studies"
            subtitle="Selected initiatives framed as executive briefs: problem, approach, impact."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {caseStudies.map((cs) => (
            <Reveal key={cs.title} delay={0.06}>
              <Card className="p-0">
                <div className="grid lg:grid-cols-12">
                  {/* LEFT SUMMARY */}
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-neutral-900">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold">{cs.title}</h3>
                      <Tag tag={cs.tag} />
                    </div>

                    <p className="mt-4 text-neutral-400 leading-relaxed">
                      {cs.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500">
                      {cs.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-neutral-800 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {cs.links?.length ? (
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        {cs.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="underline text-neutral-300 hover:text-white"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* RIGHT DETAILS */}
                  <div className="lg:col-span-8 p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                          Problem
                        </p>
                        <p className="mt-3 text-neutral-300 leading-relaxed">
                          {cs.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                          Approach
                        </p>
                        <p className="mt-3 text-neutral-300 leading-relaxed">
                          {cs.approach}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                          Impact
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