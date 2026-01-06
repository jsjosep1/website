
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col items-start gap-8 pt-12 md:pt-20">
      
      
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          Juan Joseph. <br />
          </h1>
        
        <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed font-light">
          Hey, I'm Juan Joseph. I'm an Honors Computing Science student at the University of Alberta with a strong interest in data science, machine learning, and building real-world software that actually ships. I've worked on end-to-end projects across computer vision, generative models, and full-stack application development, both independently and in team-based environments.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <a 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
        >
          Download Resume (PDF)
        </a>
        <a 
          href="#projects" 
          className="px-6 py-3 bg-zinc-900 text-zinc-100 border border-zinc-800 text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
        >
          View my projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
