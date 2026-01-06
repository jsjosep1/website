
import React from 'react';
import Section from './Section';
import { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Teaching Assistant",
      company: "University of Alberta",
      period: "Jan 2026 — Present",
      description: [
        "Assisted in teaching the course 'Introduction to Principles of Data Science'.",
        "Conducted weekly office hours to help clarify doubts and help students understand concepts.",
        "Graded assignments, labs, and exams."
      ]
    },
    {
      role: "Machine Learning Developer",
      company: "University of Alberta (Modular Construction Lab)",
      period: "May 2025 — Aug 2025",
      description: [
        "Developed an automated computer vision software using YOLOv5 to monitor worker activity and productivity in factory workstations.",
        "Annotated and cleaned 3,000+ video frames, trained YOLOv5 object detection model, and designed algorithms to track tasks, durations, and worker presence, delivering real-time analytics to improve operational efficiency.",
        "Built a Python-based dashboard to display visualizations for task duration analysis, helping informed decision-making based on historical performance trends."
      ]
    }
  ];

  return (
    <Section id="experience" title="Professional Track">
      <div className="space-y-16">
        <div>
          <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-8">Relevant Experience</h3>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company + exp.role} className="relative pl-8 border-l border-zinc-900 group">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h4 className="text-white font-medium">{exp.role}</h4>
                  <span className="text-zinc-500 text-xs font-mono">{exp.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-500 text-sm leading-relaxed font-light">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-8">Academic Foundation</h3>
          <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-medium">Bachelor of Science in Computing Science (Honors)</h4>
              <span className="text-zinc-500 text-xs font-mono">Expected May 2027</span>
            </div>
            <p className="text-zinc-400 text-sm mb-2">University of Alberta, Edmonton, Alberta</p>
            <p className="text-zinc-500 text-xs font-light">
              Relevant Coursework: Intro to Data Science, Applied Statistics, Intro to Machine Learning, Data Structures and Algorithms, Intro to Software Engineering, Database Management, Reinforcement Learning, Search and Planning in AI, Natural Language Processing, Probability and Statistics.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
