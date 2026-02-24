import Container from "../layout/Container";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-neutral-800">
      <Container>
        <h3 className="text-3xl font-semibold mb-10">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-neutral-800 p-6 rounded-xl hover:border-white transition"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}