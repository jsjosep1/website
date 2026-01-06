
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px w-full bg-zinc-900" />
      </div>
      {children}
    </section>
  );
};

export default Section;
