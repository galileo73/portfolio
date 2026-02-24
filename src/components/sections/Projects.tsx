import Container from "../layout/Container";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-neutral-800">
      <Container>
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-neutral-800 p-8 rounded-xl hover:border-white transition"
            >
              <h4 className="text-xl font-semibold mb-4">
                {project.title}
              </h4>

              <p className="text-neutral-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                {project.tech.map((tech) => (
                  <span key={tech} className="border border-neutral-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}