import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Bento from "./components/sections/Bento";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full text-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <Bento />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}