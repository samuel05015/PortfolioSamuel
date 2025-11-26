import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Sobre Mim</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Samuel Henrique
            </h3>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Olá! Sou estudante de <strong className="text-slate-200">Análise e Desenvolvimento de Sistemas</strong> na Fatec José Camargo.
              </p>
              <p>
                Desde que entrei na área da tecnologia, descobri uma verdadeira paixão por desenvolver softwares e criar soluções que fazem a diferença no dia a dia das pessoas.
              </p>
              <p>
                Gosto de aprender coisas novas, enfrentar desafios e colocar em prática tudo o que estudo. Estou sempre buscando evoluir como desenvolvedor, tanto em projetos acadêmicos quanto pessoais.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              {[
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/samuel-henrique-92b1a3278" },
                { icon: <Github size={24} />, href: "https://github.com/samuel05015" },
                { icon: <Instagram size={24} />, href: "https://www.instagram.com/samu_henrique.cp/?next=%2F" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Meus Projetos</h4>
              <a 
                href="https://github.com/samuel05015?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Github size={24} />
                  </div>
                  <ExternalLink className="text-slate-500 group-hover:text-white transition-colors" size={20} />
                </div>
                <h5 className="text-xl font-bold text-white mb-2">Repositório Central</h5>
                <p className="text-slate-400 mb-4">
                  Explore todo o código fonte dos meus projetos acadêmicos e pessoais diretamente no GitHub.
                </p>
                <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver todos os projetos <ArrowRightSmall />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
              {/* 
                IMPORTANTE: Certifique-se de salvar a sua foto como 'samuel.png' na pasta public 
                ou na raiz do projeto para que ela seja carregada corretamente aqui.
              */}
              <img 
                src="/samuel.png" 
                alt="Samuel Henrique" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <p className="text-white font-medium">Full Stack Developer</p>
                  <p className="text-slate-300 text-sm">Focado em React & Node.js</p>
                </div>
              </div>
            </div>

            {/* Decorative background element behind image */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-white/5 rounded-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-surface/50 rounded-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ArrowRightSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);