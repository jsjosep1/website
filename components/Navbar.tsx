
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#hero' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#030712]/60 backdrop-blur-md border-b border-zinc-900 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold tracking-tight text-xl">
          JJ<span className="text-zinc-500 text-base">.</span>
        </a>
        
        <div className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
