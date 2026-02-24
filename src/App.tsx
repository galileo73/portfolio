import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}