export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold tracking-wide">
          Gianluigi
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}