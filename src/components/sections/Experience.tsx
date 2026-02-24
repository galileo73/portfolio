import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <h3 className="text-3xl font-semibold mb-10">Experience</h3>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-8">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="border border-neutral-800 rounded-xl p-8 hover:border-white transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">{item.role}</h4>
                    <p className="text-neutral-400">
                      {item.company}
                      {item.location ? ` • ${item.location}` : ""}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-500">
                    {item.start} — {item.end}
                  </p>
                </div>

                <ul className="mt-6 list-disc pl-5 space-y-2 text-neutral-300">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}