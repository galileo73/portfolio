import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import profileImg from "../../assets/profile.png";
import { useI18n } from "../../i18n/I18nProvider";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";

const METRICS = [
  { k: "20+ yrs", v: "Mission-critical systems" },
  { k: "Galileo", v: "Ground Segment / PRS" },
  { k: "Security", v: "Accreditation & Risk" },
];

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.05),transparent_55%)]" />

      <Container>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <Reveal>
              <p className="text-sm text-neutral-400 tracking-wide">
                {t.hero.role}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight whitespace-pre-line">
                {t.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-lg text-neutral-400 max-w-2xl leading-relaxed">
                {t.hero.desc}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
                >
                  {t.hero.cta1}
                </a>

                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-white/70 transition"
                >
                  {t.hero.cta2}
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-neutral-800 hover:border-white/50 transition text-neutral-200"
                >
                  {t.hero.cta3}
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE CARD */}
          <Reveal delay={0.1}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[520px]">

                <div className="relative rounded-2xl p-[1px]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent" />

                  <div className="relative rounded-2xl bg-neutral-950/70 backdrop-blur-xl border border-neutral-800 p-8 shadow-[0_0_60px_rgba(255,255,255,0.04)]">

                    {/* Profile */}
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full bg-white/5 blur-2xl" />
                        <img
                          src={profileImg}
                          alt="Gianluigi Rossi"
                          className="relative w-24 h-24 rounded-2xl object-cover border border-neutral-800"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-neutral-400">
                          Gianluigi Rossi
                        </p>
                        <p className="text-xl font-semibold">
                          Consulting • Architecture
                        </p>
                        <p className="text-sm text-neutral-500 mt-1">
                          Space systems + modern delivery
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mt-8 space-y-3">
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

                    {/* Social icons only */}
                    <div className="mt-8 flex gap-3">
                      <a
                        href="PASTE_LINKEDIN"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                      >
                        <FaLinkedin size={18} />
                      </a>

                      <a
                        href="https://github.com/galileo73"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                      >
                        <FaGithub size={18} />
                      </a>

                      <a
                        href="PASTE_INSTAGRAM"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                      >
                        <FaInstagram size={18} />
                      </a>

                      <a
                        href="PASTE_OPENSEA"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                      >
                        <SiOpensea size={18} />
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