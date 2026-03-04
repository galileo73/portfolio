import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import profileImg from "../../assets/profile.png";
import cvPdf from "../../assets/curriculum/cv.pdf";
import { useI18n } from "../../i18n/I18nProvider";
import { profile } from "../../data/profile";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";

const METRICS = [
  { k: "20+ yrs", v: "Mission-critical systems" },
  { k: "Galileo", v: "Ground Segment / PRS" },
  { k: "Security", v: "Accreditation & Risk" }
];

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.05),transparent_55%)]" />

      <Container>
        <div className="pt-10 md:pt-12 pb-16 md:pb-20">
          <div className="grid gap-10 lg:gap-12 items-start lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT */}
            <div>

              <Reveal>
                <p className="text-sm text-neutral-400 tracking-wide">
                  {t.hero.role}
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-5 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight whitespace-pre-line">
                  {t.hero.title}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
                  {t.hero.desc}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">

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

                  <a
                    href={cvPdf}
                    download
                    className="px-6 py-3 rounded-xl border border-neutral-800 hover:border-white/50 transition text-neutral-200"
                  >
                    {t.hero.cv}
                  </a>

                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2 text-xs text-neutral-500">

                  {[
                    "Galileo • PRS",
                    "Security Accreditation",
                    "Ground Segment",
                    "System Engineering",
                    "Digital Platforms"
                  ].map((x) => (
                    <span
                      key={x}
                      className="border border-neutral-800 px-3 py-1 rounded-full"
                    >
                      {x}
                    </span>
                  ))}

                </div>
              </Reveal>

            </div>


            {/* RIGHT */}
            <Reveal delay={0.1}>
              <div className="flex justify-center lg:justify-end">

                <div className="w-full max-w-[520px]">

                  <div className="relative rounded-2xl p-[1px]">

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent" />

                    <div className="relative rounded-2xl bg-neutral-950/70 backdrop-blur-xl border border-neutral-800 p-8 shadow-[0_0_60px_rgba(255,255,255,0.04)]">

                      <div className="flex items-center gap-5">

                        <img
                          src={profileImg}
                          alt={profile.name}
                          className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border border-neutral-800"
                        />

                        <div>
                          <p className="text-sm text-neutral-400">{profile.name}</p>
                          <p className="text-xl font-semibold">
                            Consulting • Architecture
                          </p>
                          <p className="text-sm text-neutral-500 mt-1">
                            Space systems + modern delivery
                          </p>
                        </div>

                      </div>


                      <div className="mt-7 space-y-3">

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


                      {/* SOCIAL */}

                      <div className="mt-7 flex gap-3">

                        <a
                          href={profile.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                        >
                          <FaLinkedin size={18} />
                        </a>

                        <a
                          href={profile.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                        >
                          <FaGithub size={18} />
                        </a>

                        {profile.links.instagram && (
                          <a
                            href={profile.links.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                          >
                            <FaInstagram size={18} />
                          </a>
                        )}

                        {profile.links.opensea && (
                          <a
                            href={profile.links.opensea}
                            target="_blank"
                            rel="noreferrer"
                            className="hover-lift w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-black/20 hover:border-white/40 transition"
                          >
                            <SiOpensea size={18} />
                          </a>
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </Container>
    </section>
  );
}