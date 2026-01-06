
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/next"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-zinc-300 antialiased overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_#050a1a_0%,_transparent_50%)] pointer-events-none opacity-50" />
      <Analytics />
      <Navbar />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20 space-y-32">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

    </div>
  );
};

export default App;
