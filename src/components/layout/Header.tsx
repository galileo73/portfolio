import { useI18n } from "../../i18n/I18nProvider";

export default function Header() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-900 bg-black/30 backdrop-blur-xl">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">
          Gianluigi Rossi
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#experience" className="hover:text-white">
            {t.nav.experience}
          </a>
          <a href="#projects" className="hover:text-white">
            {t.nav.projects}
          </a>
          <a href="#contact" className="hover:text-white">
            {t.nav.contact}
          </a>
        </nav>

        <button
          onClick={() => setLang(lang === "en" ? "cs" : "en")}
          className="hover-lift rounded-xl border border-neutral-800 bg-black/20 px-4 py-2 text-sm text-neutral-200"
        >
          {lang === "en" ? "CZ" : "EN"}
        </button>
      </div>
    </header>
  );
}