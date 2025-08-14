"use client";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesContainer from "./components/particles";

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticlesContainer />

      <section id="home" className="scroll-offset">
        <Header />
      </section>

      <section id="about" className="scroll-offset">
        <About />
      </section>

      <section id="services" className="scroll-offset">
        <Services />
      </section>

      <section id="work" className="scroll-offset">
        <Projects />
      </section>

      <section id="contact" className="scroll-offset">
        <Contact />
      </section>
    </>
  );
}
