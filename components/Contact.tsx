import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, Loader2, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sh05015130405@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reseta mensagem de sucesso após alguns segundos
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-dark relative border-t border-white/5">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Contato</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Vamos criar algo juntos?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Estou sempre aberto a novas oportunidades, parcerias ou apenas para trocar uma ideia sobre tecnologia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-surface border border-white/10 hover:border-primary/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Email</h4>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    Tem alguma dúvida ou proposta? Envie um e-mail e responderei o mais breve possível.
                  </p>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-dark border border-white/5">
                    <span className="text-slate-300 text-sm break-all">sh05015130405@gmail.com</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="ml-auto p-2 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-white relative"
                      title="Copiar email"
                    >
                      {isCopied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-white/10 hover:border-secondary/30 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Localização</h4>
                  <p className="text-slate-400">Jales, São Paulo - Brasil</p>
                  <p className="text-slate-500 text-sm mt-1">Disponível para trabalho remoto</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/samuel-henrique-92b1a3278" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#0077b5] border border-white/10 hover:border-transparent transition-all text-slate-300 hover:text-white font-medium"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="https://github.com/samuel05015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-[#333] border border-white/10 hover:border-transparent transition-all text-slate-300 hover:text-white font-medium"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-surface border border-white/10 relative overflow-hidden"
          >
            {isSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-10 bg-surface flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-400">Obrigado pelo contato. Retornarei em breve.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-8 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors"
                >
                  Enviar nova mensagem
                </button>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
              <h4 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h4>
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Seu E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Ex: joao@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Como posso te ajudar?"
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
