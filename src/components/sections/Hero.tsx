import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import profileImg from "../../assets/profile.png";
import { IconLinkedIn, IconGitHub, IconOpenSea, IconX } from "../ui/Icons";

const METRICS = [
  { k: "20+ yrs", v: "Mission-critical systems" },
  { k: "Galileo", v: "Ground Segment / PRS" },
  { k: "Security", v: "Accreditation & Risk" },
];

const LINKS = [
  { label: "LinkedIn", href: "PASTE_LINKEDIN" },
  { label: "GitHub", href: "https://github.com/galileo73" },
  { label: "OpenSea", href: "PASTE_OPENSEA" },
  { label: "X", href: "PASTE_X" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.06),transparent_55%)]" />

      <Container>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* LEFT */}
          <div className="relative">
            <Reveal>
              <p className="text-sm text-neutral-400 tracking-wide">
                Executive Technical Consultant • Space Systems Architect
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight">
                GNSS, secure architectures,
                <br />
                digital execution.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-lg text-neutral-400 max-w-2xl leading-relaxed">
                I support space programmes and organisations with architecture,
                governance, and delivery across mission-critical systems and modern
                digital platforms.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-white/70 transition"
                >
                  Case Studies
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-neutral-800 hover:border-white/50 transition text-neutral-200"
                >
                  Contact
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-2 text-xs text-neutral-500">
                {[
                  "Galileo • PRS",
                  "Security Accreditation",
                  "Ground Segment",
                  "System Engineering",
                  "Digital Platforms",
                ].map((t) => (
                  <span
                    key={t}
                    className="border border-neutral-800 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT CARD */}
          <Reveal delay={0.08}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[520px]">
                <div className="relative rounded-2xl p-[1px]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/18 via-white/6 to-transparent" />

                  <div className="relative rounded-2xl bg-neutral-950/60 backdrop-blur-xl border border-neutral-800 p-8 shadow-[0_0_60px_rgba(255,255,255,0.04)]">
                    {/* TOP */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full bg-white/6 blur-2xl" />

                        {/* PHOTO (visible + sized) */}
                        <img
                          src={profileImg}
                          alt="Gianluigi"
                          className="relative w-24 h-24 rounded-2xl object-cover border border-neutral-800"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-neutral-400">Gianluigi</p>
                        <p className="text-xl font-semibold">Consulting • Architecture</p>
                        <p className="text-sm text-neutral-500 mt-1">
                          Space systems + modern delivery
                        </p>
                      </div>
                    </div>

                    {/* METRICS */}
                    <div className="mt-7 grid grid-cols-1 gap-3">
                      {METRICS.map((m) => (
                        <div
                          key={m.k}
                          className="flex items-center justify-between rounded-xl border border-neutral-900 bg-black/30 px-4 py-3"
                        >
                          <span className="text-sm text-white">{m.k}</span>
                          <span className="text-sm text-neutral-400">{m.v}</span>
                        </div>
                      ))}
                    </div>

                    {/* LINKS */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href="PASTE_LINKEDIN"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black/20 px-4 py-2 text-sm text-neutral-200 hover:border-white/40 hover:text-white transition"
                      >
                        <IconLinkedIn className="w-4 h-4" />
                        LinkedIn
                      </a>

                      <a
                        href="https://github.com/galileo73"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black/20 px-4 py-2 text-sm text-neutral-200 hover:border-white/40 hover:text-white transition"
                      >
                        <IconGitHub className="w-4 h-4" />
                        GitHub
                      </a>

                      <a
                        href="PASTE_X"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black/20 px-4 py-2 text-sm text-neutral-200 hover:border-white/40 hover:text-white transition"
                      >
                        <IconX className="w-4 h-4" />
                        X
                      </a>

                      <a
                        href="PASTE_OPENSEA"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black/20 px-4 py-2 text-sm text-neutral-200 hover:border-white/40 hover:text-white transition"
                      >
                        <IconOpenSea className="w-4 h-4" />
                        OpenSea
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-neutral-500">
                  Advisory + hands-on delivery. Clear communication. Measurable outcomes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}