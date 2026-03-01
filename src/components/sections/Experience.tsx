import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import { experience } from "../../data/experience";

function formatPeriod(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleString("en-US", { month: "short", year: "numeric" });
  return `${fmt(s)} — ${fmt(e)}`;
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <SectionHeader
            title="Experience"
            subtitle="Selected roles across Galileo operations, secure services, accreditation, and mission-critical delivery."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {experience.map((x) => (
            <Reveal key={`${x.company}-${x.role}-${x.start}`} delay={0.05}>
              <Card>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{x.role}</h3>
                      <p className="mt-2 text-neutral-400">
                        {x.company}
                        {x.client ? ` • Client: ${x.client}` : ""}
                      </p>
                      <p className="mt-1 text-sm text-neutral-500">
                        {formatPeriod(x.start, x.end)}
                        {x.city || x.country ? " • " : ""}
                        {[x.city, x.country].filter(Boolean).join(", ")}
                      </p>
                    </div>

                    <span className="text-xs text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full self-start">
                      {x.client ? "Contract role" : "Role"}
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
          ))}
        </div>
      </Container>
    </section>
  );
}