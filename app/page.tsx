import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ModeToggler from "./components/ModeToggler";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-24">
      <header className="flex justify-end p-4">
        <ModeToggler />
        <h1 className="sr-only">Ibrahim Shuaibu Isa - Full-Stack Software Developer</h1>
      </header>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}