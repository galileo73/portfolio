import Container from "./Container";
import { useI18n } from "../../i18n/i18n-context";

export default function Header() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800/80 bg-black/70 backdrop-blur-xl">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-semibold tracking-tight text-white"
          >
            Gianluigi Rossi
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              <a href="#experience" className="hover:text-white transition">
                {t.nav.experience}
              </a>
              <a href="#education" className="hover:text-white transition">
                {t.nav.education}
              </a>
              <a href="#projects" className="hover:text-white transition">
                {t.nav.projects}
              </a>
              <a href="#contact" className="hover:text-white transition">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center rounded-xl border border-neutral-800 overflow-hidden text-sm">
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                aria-label="Switch language to English"
                className={`px-3 py-1.5 transition ${
                  lang === "en"
                    ? "bg-white text-black"
                    : "bg-transparent text-neutral-300 hover:text-white"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLang("cs")}
                aria-pressed={lang === "cs"}
                aria-label="Přepnout jazyk do češtiny"
                className={`px-3 py-1.5 transition ${
                  lang === "cs"
                    ? "bg-white text-black"
                    : "bg-transparent text-neutral-300 hover:text-white"
                }`}
              >
                CZ
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
