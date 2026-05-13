import { useState } from "react";
import Container from "./Container";
import { useI18n } from "../../i18n/i18n-context";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

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

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-neutral-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>

            {/* Desktop navigation */}
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

        {/* Mobile navigation dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4 text-sm text-neutral-300">
              <a
                href="#experience"
                onClick={closeMobileMenu}
                className="hover:text-white transition py-2"
              >
                {t.nav.experience}
              </a>
              <a
                href="#education"
                onClick={closeMobileMenu}
                className="hover:text-white transition py-2"
              >
                {t.nav.education}
              </a>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className="hover:text-white transition py-2"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="hover:text-white transition py-2"
              >
                {t.nav.contact}
              </a>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
