import React from 'react';
import { motion } from 'framer-motion';

// Skills data based on the screenshot provided
const skills = [
  { name: 'React', color: 'bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20' },
  { name: 'React Native', color: 'bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20' },
  { name: 'JavaScript', color: 'bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20' },
  { name: 'C', color: 'bg-[#555555]/10 text-[#A8B9CC] border-[#555555]/20' },
  { name: 'C#', color: 'bg-[#178600]/10 text-[#239120] border-[#178600]/20' }, // Adjusted to generic green/purple usually assoc w/ C#
  { name: '.NET', color: 'bg-[#512BD4]/10 text-[#512BD4] border-[#512BD4]/20' },
  { name: 'HTML5', color: 'bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20' },
  { name: 'CSS3', color: 'bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20' },
  { name: 'Firebase', color: 'bg-[#FFCA28]/10 text-[#FFCA28] border-[#FFCA28]/20' },
  { name: 'PostgreSQL', color: 'bg-[#336791]/10 text-[#336791] border-[#336791]/20' },
  { name: 'MySQL', color: 'bg-[#4479A1]/10 text-[#4479A1] border-[#4479A1]/20' },
  { name: 'Git', color: 'bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20' },
  { name: 'Figma', color: 'bg-[#F24E1E]/10 text-[#F24E1E] border-[#F24E1E]/20' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark border-b border-white/5 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Minhas Ferramentas e Tecnologias</h2>
          <p className="text-slate-400">Stack tecnológica que utilizo para dar vida aos projetos</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`px-6 py-3 rounded-xl border font-bold tracking-wide shadow-lg backdrop-blur-sm cursor-default transition-all ${skill.color}`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
        
        {/* GitHub Stats styled box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl bg-surface border border-white/10 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">Linguagens Mais Utilizadas</h3>
          <div className="space-y-4">
             {/* Progress Bar Visual Representation */}
             <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden flex">
                <div className="h-full bg-blue-500 w-[37.57%]" title="TypeScript" />
                <div className="h-full bg-yellow-400 w-[30.96%]" title="JavaScript" />
                <div className="h-full bg-orange-500 w-[15.29%]" title="HTML" />
                <div className="h-full bg-green-500 w-[7.87%]" title="C#" />
                <div className="h-full bg-purple-500 w-[7.28%]" title="CSS" />
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left pt-2">
                <div className="flex items-center gap-2 text-slate-300"><span className="w-3 h-3 rounded-full bg-blue-500"></span> TypeScript 37.57%</div>
                <div className="flex items-center gap-2 text-slate-300"><span className="w-3 h-3 rounded-full bg-yellow-400"></span> JavaScript 30.96%</div>
                <div className="flex items-center gap-2 text-slate-300"><span className="w-3 h-3 rounded-full bg-orange-500"></span> HTML 15.29%</div>
                <div className="flex items-center gap-2 text-slate-300"><span className="w-3 h-3 rounded-full bg-green-500"></span> C# 7.87%</div>
                <div className="flex items-center gap-2 text-slate-300"><span className="w-3 h-3 rounded-full bg-purple-500"></span> CSS 7.28%</div>
                <div className="flex items-center gap-2 text-slate-300"><span className="w-3 h-3 rounded-full bg-blue-300"></span> Python 1.02%</div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};