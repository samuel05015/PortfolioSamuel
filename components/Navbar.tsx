import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenYear: (year: string) => void;
}

const navItems = [
  { label: 'Início', href: 'home', action: null },
  { label: '4º Ano', href: 'curriculum', action: '4º' },
  { label: 'Sobre mim', href: 'about', action: null },
  { label: 'Contato', href: 'contact', action: null },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenYear }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, targetId: string, action: string | null) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (action) {
      onOpenYear(action);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Altura aproximada do menu
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, 'home', null)}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          Samuel<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleScrollTo(e, item.href, item.action)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-white/20 mx-2" />

          <div className="flex gap-4">
            <a href="https://github.com/samuel05015" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/samuel-henrique-92b1a3278" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  className="text-slate-300 hover:text-white text-lg font-medium"
                  onClick={(e) => handleScrollTo(e, item.href, item.action)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                <a href="https://github.com/samuel05015" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white"><Github /></a>
                <a href="https://www.linkedin.com/in/samuel-henrique-92b1a3278" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white"><Linkedin /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};