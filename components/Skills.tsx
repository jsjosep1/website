
import React from 'react';
import Section from './Section';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["Python", "R", "Java", "C", "Dart", "HTML", "CSS", "JavaScript"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Django", "Flutter", "Pandas", "NumPy", "Matplotlib", "PyTorch", "PySide6"]
    },
    {
      name: "Technologies & Tools",
      skills: ["SQL", "MongoDB", "Firebase", "Git", "REST APIs", "Jupyter Notebooks"]
    },
    {
      name: "Software & Platforms",
      skills: ["SPSS", "Microsoft Office (Word, Excel, PowerPoint)", "Google Workspace (Docs, Sheets, Drive, Forms)", "Figma"]
    }
  ];

  return (
    <Section id="skills" title="Technical Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {categories.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-sm font-medium text-white">{category.name}</h3>
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-900 hidden lg:block" />
                  <span className="text-zinc-400 text-sm font-light hover:text-zinc-200 transition-colors cursor-default">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
