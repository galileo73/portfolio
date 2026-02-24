import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { education } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <h3 className="text-3xl font-semibold mb-10">Education</h3>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((e) => (
              <div
                key={`${e.title}-${e.org}`}
                className="border border-neutral-800 rounded-xl p-8 hover:border-white transition"
              >
                <h4 className="text-xl font-semibold">{e.title}</h4>
                <p className="text-neutral-400 mt-2">
                  {e.org} • {e.year}
                </p>

                {e.details?.length ? (
                  <ul className="mt-6 list-disc pl-5 space-y-2 text-neutral-300">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}