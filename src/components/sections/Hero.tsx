import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Space Systems Engineer & Full-Stack Developer
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-neutral-400 text-lg">
              Designing secure, mission-critical systems for space and digital platforms.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-white text-black font-medium"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-neutral-700"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}