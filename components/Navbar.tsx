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
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active tab based on scroll position
      const sections = navItems.map(item => item.href);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, targetId: string, action: string | null) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveTab(targetId);

    if (action) {
      onOpenYear(action);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl hidden md:block`}>
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`px-2 py-2 rounded-full border border-white/10 backdrop-blur-xl bg-dark/70 shadow-2xl shadow-black/50 flex justify-between items-center transition-all ${scrolled ? 'scale-95 bg-dark/90' : 'scale-100'}`}
        >
          {/* Logo Area */}
          <div className="pl-6 pr-4">
             <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home', null)}
              className="font-bold text-lg tracking-tight text-white"
            >
              Samuel<span className="text-primary">.dev</span>
            </a>
          </div>

          {/* Navigation Pills */}
          <div className="flex bg-white/5 rounded-full p-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleScrollTo(e, item.href, item.action)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors z-10 ${
                  activeTab === item.href ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeTab === item.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pr-6 pl-4 border-l border-white/10 ml-2">
            <a href="https://github.com/samuel05015" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/samuel-henrique-92b1a3278" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navbar (Simplified) */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white">Samuel<span className="text-primary">.dev</span></a>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 md:hidden z-40 overflow-hidden"
          >
             <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  className={`text-lg font-medium ${activeTab === item.href ? 'text-primary' : 'text-slate-300'}`}
                  onClick={(e) => handleScrollTo(e, item.href, item.action)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-6 border-t border-white/10">
                <a href="https://github.com/samuel05015" className="text-slate-300 hover:text-white flex items-center gap-2"><Github size={20} /> GitHub</a>
                <a href="https://www.linkedin.com/in/samuel-henrique-92b1a3278" className="text-slate-300 hover:text-white flex items-center gap-2"><Linkedin size={20} /> LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};