import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    offset: 80,
    easing: "ease-in-out",
  });
}, []);
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /> </section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"> <Projects /> </section>
        <section id="contact"><Contact /></section>
      </main>
      {/* <Footer /> */}

    </div>
  );
}

export default App;