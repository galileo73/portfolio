import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

const items = [
  {
    title: "Galileo & GNSS",
    desc: "Ground Segment evolutions, PRS context, governance and service continuity.",
    span: "lg:col-span-6 lg:row-span-2",
    chips: ["Programmes", "Governance", "Continuity"],
  },
  {
    title: "Security & Accreditation",
    desc: "Risk-driven engineering, compliance alignment and assurance evidence.",
    span: "lg:col-span-3",
    chips: ["Risk", "Compliance", "Assurance"],
  },
  {
    title: "System Architecture",
    desc: "Requirements flowdown, interfaces, validation coordination.",
    span: "lg:col-span-3",
    chips: ["Architecture", "Interfaces", "Validation"],
  },
  {
    title: "Operational Governance",
    desc: "SLA/KPI monitoring, release readiness and stakeholder alignment.",
    span: "lg:col-span-6",
    chips: ["SLA/KPI", "Readiness", "Operations"],
  },
  {
    title: "Digital Platforms",
    desc: "Dashboards, automation workflows and CI-driven delivery.",
    span: "lg:col-span-3",
    chips: ["React", "Automation", "CI"],
  },
  {
    title: "Ventures & Innovation",
    desc: "NFT brand, digital distribution channels and experimentation.",
    span: "lg:col-span-3",
    chips: ["Brand", "Community", "Channels"],
  },
];

export default function Bento() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeader
            title="Domains & Capabilities"
            subtitle="Executive view of core expertise, delivery approach and innovation track."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[200px]">
            {items.map((it) => (
              <Card key={it.title} className={it.span}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-neutral-400">Capability</p>
                    <h4 className="mt-2 text-2xl font-semibold">
                      {it.title}
                    </h4>
                    <p className="mt-3 text-neutral-400">
                      {it.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500">
                    {it.chips.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-1 rounded-full border border-neutral-800"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}