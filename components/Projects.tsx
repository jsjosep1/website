
import React from 'react';
import Section from './Section';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Restore One's Dignity App",
      description: "Worked in a 7-person agile team to build a food donation app using Flutter and Django. Implemented database and REST API integrations to support analytics dashboards and multi-user permissions. Improved backend security with 2FA, optimized order scheduling, and enhanced system performance and maintainability.",
      tags: ["Flutter", "Django", "REST API", "Cybera", "Agile"],
      link: "#",
      github: "https://cmput401.ca/projects/32e9c1c0-dc63-4236-ad31-33d5f29fc601"
    },
    {
      title: "Generative Models - Denoising Diffusion with VAE",
      description: "Developed a Denoising Diffusion Model with a Variational Autoencoder (VAE) to generate class-conditional image samples using a custom UNet architecture for noise prediction. Integrated a Variance Scheduler for dynamic noise variance control, enabling robust diffusion and accurate sample recovery with accuracies exceeding 85%.",
      tags: ["Python", "PyTorch", "NumPy", "VAE", "Diffusion Models"],
      link: "#",
      github: "https://github.com/jsjosep1/DiffusionModels#"
    },
    {
      title: "Logistic Regression and Neural Networks for Classification",
      description: "Designed and implemented logistic regression and feedforward neural network (FNN) models for MNIST and CIFAR-10 datasets, achieving 92% accuracy. Conducted hyperparameter tuning (learning rate, weight decay, hidden units) to maximize classification performance.",
      tags: ["Python", "PyTorch", "NumPy", "Neural Networks"],
      link: "#",
      github: "https://github.com/jsjosep1/LR-NN-Classification"
    },
    {
      title: "Collatz301 - QR Check-in Application",
      description: "Led a team of 5 to develop a QR check-in application using Java in Android Studio. Created mock designs and user storyboards using Figma. Implemented Firebase integration for real-time updates, user authentication, and multi-user interaction with distinct roles and permissions (organizers, attendees, administrators).",
      tags: ["Java", "Android Studio", "Firebase", "Figma", "Geolocation"],
      link: "#",
      github: "https://github.com/jsjosep1/Collatz301"
    }
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`group p-6 rounded-xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/50 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between ${
              index === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-zinc-900 text-zinc-500 border border-zinc-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
