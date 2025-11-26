import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Curriculum } from './components/Curriculum';
import { Contact } from './components/Contact';
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;