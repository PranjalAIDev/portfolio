import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-dark-700 to-dark-800 text-white overflow-hidden">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;