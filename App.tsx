import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Curriculum } from './components/Curriculum';
import { Footer } from './components/Footer';

function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleOpenYear = (year: string) => {
    // 1. Set the year to open the modal
    setSelectedYear(year);
    
    // 2. Manual Smooth scroll with offset
    const element = document.getElementById('curriculum');
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

  return (
    <div className="bg-dark min-h-screen text-slate-100 selection:bg-primary selection:text-white">
      <Navbar onOpenYear={handleOpenYear} />
      <main>
        <Hero />
        <Skills />
        <About />
        <Curriculum 
          externalSelectedYear={selectedYear} 
          onYearChange={setSelectedYear} 
        />
        {/* Placeholder for Contact section referenced in nav */}
        <section id="contact" className="py-24 container mx-auto px-6 text-center border-t border-white/5">
           <h2 className="text-3xl font-bold text-white mb-6">Vamos Conversar?</h2>
           <p className="text-slate-400 mb-8 max-w-xl mx-auto">
             Estou sempre aberto a novas oportunidades e parcerias. Sinta-se à vontade para entrar em contato.
           </p>
           <a href="mailto:sh05015130405@gmail.com" className="text-primary hover:text-white underline text-lg transition-colors">
             sh05015130405@gmail.com
           </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;