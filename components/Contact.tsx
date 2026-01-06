
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  const links = [
    { name: "Email", icon: "📧", href: "mailto:juansjjoseph@gmail.com", label: "juansjjoseph@gmail.com" },
    { name: "GitHub", icon: "💻", href: "https://github.com/jsjosep1", label: "@jsjosep1" },
    { name: "LinkedIn", icon: "🔗", href: "https://linkedin.com/in/juanjosephh", label: "/in/juanjosephh" }
  ];

  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group p-4 rounded-xl border border-zinc-900 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-800 transition-all flex items-center gap-4"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{link.icon}</span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">{link.name}</span>
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{link.label}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
export default Contact;
