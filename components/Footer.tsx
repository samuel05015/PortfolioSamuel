import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
          
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} por Samuel Henrique Carneiro Pereira.
          </div>
        </div>
      </div>
    </footer>
  );
};