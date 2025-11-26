import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, MousePointer2, Terminal, Palette, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animação de flutuação para os cards
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Background Grid Pattern - UX Detail for Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 bg-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-30 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">Disponível para Projetos</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Construindo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
                Experiências Digitais
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Desenvolvedor Full Stack focado em criar interfaces modernas, performáticas e intuitivas. Transformo ideias complexas em código limpo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#curriculum"
                onClick={(e) => handleScrollTo(e, 'curriculum')}
                className="group px-8 py-4 rounded-xl bg-primary hover:bg-indigo-600 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">Conheça meu trabalho <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              </a>
              <a
                href="#skills"
                onClick={(e) => handleScrollTo(e, 'skills')}
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer hover:border-white/20"
              >
                <Code2 size={18} />
                Ver Tecnologias
              </a>
            </div>
          </motion.div>

          {/* Right Column: UI/UX Visual Elements (Hidden on mobile for performance/space) */}
          <div className="hidden lg:block relative h-[600px] w-full">
            
            {/* Element 1: Code Card */}
            <motion.div
              animate={floatingAnimation}
              transition={{ delay: 0 }}
              className="absolute top-10 right-10 w-80 p-5 rounded-2xl bg-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/10 z-20"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-500 ml-2 font-mono">App.tsx</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="text-pink-400">const <span className="text-blue-400">Portfolio</span> = () ={'>'} {'{'}</div>
                <div className="pl-4 text-slate-300">return (</div>
                <div className="pl-8 text-slate-300">{'<'}div className="<span className="text-yellow-300">modern-ui</span>"{'>'}</div>
                <div className="pl-12 text-slate-300">{'<'}Hero / {'>'}</div>
                <div className="pl-12 text-slate-300">{'<'}Skills / {'>'}</div>
                <div className="pl-8 text-slate-300">{'<'}/div{'>'}</div>
                <div className="pl-4 text-slate-300">);</div>
                <div className="text-slate-300">{'}'};</div>
              </div>
            </motion.div>

            {/* Element 2: UI Palette Card */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-60 left-10 w-64 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl z-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                  <Palette size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Design System</h4>
                  <p className="text-[10px] text-slate-400">Cores & Estilos</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="h-10 rounded-lg bg-primary"></div>
                <div className="h-10 rounded-lg bg-secondary"></div>
                <div className="h-10 rounded-lg bg-dark border border-white/20"></div>
                <div className="h-10 rounded-lg bg-slate-500"></div>
              </div>
            </motion.div>

            {/* Element 3: Performance Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-40 right-20 px-4 py-3 rounded-xl bg-surface border border-green-500/30 shadow-lg shadow-green-500/10 flex items-center gap-3 z-30"
            >
              <div className="p-1.5 rounded-full bg-green-500/20 text-green-400">
                <Zap size={16} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Performance</p>
                <p className="text-sm font-bold text-white">100% Otimizado</p>
              </div>
            </motion.div>

            {/* Background Accent Lines */}
            <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" viewBox="0 0 400 400">
              <path d="M 50 200 Q 200 100 350 300" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - UX Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={(e) => handleScrollTo(e, 'skills')}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};
