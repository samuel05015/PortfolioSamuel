import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Layout, 
  X, 
  Cpu, 
  Code2, 
  Globe, 
  Briefcase, 
  Users, 
  Calculator, 
  Lightbulb, 
  GitBranch,
  Monitor,
  ArrowLeft,
  CheckCircle2,
  Smartphone,
  Server,
  Github,
  Plane,
  Trophy,
  Brain,
  AppWindow,
  Table2
} from 'lucide-react';

// Interfaces para os dados
interface SubjectDetail {
  title: string;
  description: string;
  topics?: { title: string; items: string[] }[];
  projects?: { title: string; description: string; tags: string[]; links?: { label: string; url: string }[] }[];
  highlight?: { title: string; description: string; icon: React.ReactNode };
}

interface Subject {
  name: string;
  icon: React.ReactNode;
  details?: SubjectDetail;
}

// Dados das matérias
const subjectsData: Record<string, Subject[]> = {
  "4º": [
    { 
      name: "Projeto Integrador", 
      icon: <Lightbulb size={24} />,
      details: {
        title: "Projeto Integrador e Interdisciplinar",
        description: "Este módulo tem como objetivo consolidar os conhecimentos adquiridos através da aplicação prática em projetos reais, focando em versionamento de código, trabalho em equipe e desenvolvimento Full Stack.",
        topics: [
          {
            title: "Git e GitHub na Prática",
            items: [
              "O que é Git: Sistema de controle de versão distribuído que permite gerenciar o histórico do código e trabalhar com múltiplas ramificações (branches).",
              "O que é GitHub: Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git, facilitando a colaboração.",
              "Comandos Essenciais: git init (iniciar), git add (preparar), git commit (salvar versão), git push (enviar para nuvem), git pull (atualizar localmente).",
              "Benefícios: Organização profissional, rastreabilidade de alterações e facilidade no trabalho colaborativo."
            ]
          }
        ],
        highlight: {
          title: "Desenvolvimento Mobile: App ScanPlant",
          description: "Além do versionamento, desenvolvemos o ScanPlant, uma solução completa de aplicativo móvel. O projeto foi estruturado com uma arquitetura Full Stack, integrando um Frontend responsivo e intuitivo com um Backend robusto para gerenciamento de dados.",
          icon: <Smartphone size={32} />
        },
        projects: [
          {
            title: "Repositório Oficial ScanPlant",
            description: "Acesse o código fonte completo do projeto, demonstrando a integração entre Front-end e Back-end e o uso de boas práticas de versionamento.",
            tags: ["Git", "GitHub", "Full Stack", "Mobile", "Frontend Mobile", "Backend API", "Database"],
            links: [
              { label: "Acessar Repositório no GitHub", url: "https://github.com/samuel05015/ScanPlant" }
            ]
          }
        ]
      }
    },
    { 
      name: "Engenharia de Software", 
      icon: <Code2 size={24} />,
      details: {
        title: "Engenharia de Software",
        description: "Disciplina que visa desenvolver software com qualidade, prazo e custo definidos. Trabalha com análise, projeto, codificação, testes e manutenção de sistemas, combinando conhecimentos técnicos com gestão e organização de projetos.",
        highlight: {
          title: "Estudo de Caso: Boeing",
          description: "Análise crítica de um exemplo real onde falhas em engenharia de software tiveram impacto catastrófico. O caso do Boeing 737 MAX evidenciou erros em requisitos e testes, reforçando a importância de processos rigorosos e segurança.",
          icon: <Plane size={32} />
        },
        topics: [
          {
            title: "Engenharia de Requisitos",
            items: [
              "Processo de identificar o que o sistema deve fazer.",
              "Requisitos Funcionais: descrevem funções do sistema (ex: cadastrar usuário).",
              "Requisitos Não Funcionais: critérios de qualidade (desempenho, segurança, usabilidade).",
              "Documentação essencial para guiar o desenvolvimento."
            ]
          },
          {
            title: "Processos de Software",
            items: [
              "Conjunto de atividades organizadas para produzir software.",
              "Modelo Cascata: Abordagem sequencial e simples.",
              "Iterativo e Incremental: Entrega do software em partes funcionais.",
              "Scrum: Metodologia ágil baseada em sprints curtos."
            ]
          },
          {
            title: "Modelagem de Sistemas (UML)",
            items: [
              "Diagrama de Casos de Uso: Mostra as funcionalidades sob o ponto de vista do usuário (atores).",
              "Diagrama de Classes: Define a estrutura do sistema, atributos, métodos e relacionamentos.",
              "Objetivo: Representar visualmente o funcionamento para facilitar o planejamento e a arquitetura."
            ]
          }
        ]
      }
    },
    { 
      name: "Técnicas Avançadas de Banco de Dados Relacional e Não Relacional", 
      icon: <Database size={24} />,
      details: {
        title: "Técnicas Avançadas de Banco de Dados",
        description: "Aprofundamento em gerenciamento, manipulação e segurança de dados utilizando SQL Server e conceitos avançados de modelagem.",
        highlight: {
            title: "Ferramentas e Linguagens",
            description: "Domínio do SSMS (SQL Server Management Studio) e DDL (Data Definition Language) para criar, alterar e gerenciar estruturas robustas de dados.",
            icon: <Table2 size={32} />
        },
        topics: [
            {
                title: "Junções e Visualizações",
                items: [
                    "Tipos de Junções (Joins): INNER, LEFT, RIGHT e FULL JOIN para combinar dados complexos.",
                    "Views: Criação de tabelas virtuais para facilitar leitura e segurança.",
                    "Views Avançadas: Relatórios e combinações úteis para o negócio."
                ]
            },
            {
                title: "Automação e Lógica",
                items: [
                    "Stored Procedures: Conjunto de comandos SQL armazenados para desempenho e segurança.",
                    "Functions: Funções personalizadas para cálculos e conversões.",
                    "DCL (Data Control Language): Controle de acesso (GRANT/REVOKE) e segurança."
                ]
            }
        ]
      }
    },
    { 
      name: "Estrutura de Dados", 
      icon: <GitBranch size={24} />,
      details: {
        title: "Estrutura de Dados e Algoritmos",
        description: "Estudo fundamental sobre como os dados são organizados, gerenciados e armazenados na memória para aumentar a eficiência dos algoritmos.",
        topics: [
            {
                title: "Fundamentos",
                items: [
                    "Tipos de Dados e Ponteiros: Controle de memória e endereçamento.",
                    "Lógica: Estruturas condicionais (if/else, switch) e laços de repetição (for, while)."
                ]
            },
            {
                title: "Estruturas Lineares e Não-Lineares",
                items: [
                    "Vetores e Matrizes (1D e 2D): Armazenamento sequencial e tabular.",
                    "Structs: Criação de tipos compostos.",
                    "Listas Encadeadas: Simples, Dupla e Circular.",
                    "Pilhas (LIFO) e Filas (FIFO): Controle de fluxo de dados e prioridades."
                ]
            }
        ]
      } 
    },
    { 
      name: "Interação Humano Computador", 
      icon: <Users size={24} />,
      details: {
        title: "Interação Humano-Computador (IHC)",
        description: "Foco na experiência do usuário (UX) e no design de interfaces (UI), utilizando ferramentas modernas para prototipação.",
        highlight: {
            title: "Prototipação com Figma",
            description: "Criação de interfaces de alta fidelidade, explorando formas, tipografias, ícones e interações entre telas.",
            icon: <AppWindow size={32} />
        },
        topics: [
            {
                title: "Conceitos de Design",
                items: [
                    "Experiência do Usuário (UX): Facilidade e prazer na navegação.",
                    "UI Design: Cores, tipografia e hierarquia visual.",
                    "Acessibilidade e Usabilidade."
                ]
            },
            {
                title: "Ferramentas",
                items: [
                    "Figma: Prototipação e Design System.",
                    "Plugins e Exportação: Otimização do fluxo de trabalho.",
                    "Integração com Desenvolvimento: Hand-off para HTML/CSS."
                ]
            }
        ],
        projects: [
            {
                title: "Interface com Figma",
                description: "Projeto prático de design de interface focado em usabilidade e estética.",
                tags: ["Figma", "UX/UI", "Prototipagem"],
                links: [{ label: "Ver Projeto no GitHub", url: "https://github.com/samuel05015" }]
            }
        ]
      }
    },
    { 
      name: "Técnicas Avançadas de Programação", 
      icon: <Code2 size={24} />,
      details: {
        title: "Técnicas Avançadas de Programação e .NET",
        description: "Desenvolvimento de aplicações robustas utilizando a plataforma Microsoft .NET e a linguagem C#, com foco em lógica e sistemas CRUD.",
        topics: [
            {
                title: "Ecossistema .NET",
                items: [
                    "Fundamentos de C#: Tipos, operadores e variáveis.",
                    "Estruturas de Controle: Laços e vetores/matrizes.",
                    "Visual Studio: Ambiente de desenvolvimento integrado."
                ]
            },
            {
                title: "Aplicações Práticas",
                items: [
                    "CRUD: Criação, Leitura, Atualização e Deleção de dados.",
                    "Interface Visual: Criação de formulários funcionais.",
                    "Bootstrap: Noções para estilização web."
                ]
            }
        ],
        projects: [
            {
                title: "Sistema CRUD em .NET",
                description: "Sistema completo de gerenciamento de dados com interface gráfica.",
                tags: ["C#", ".NET", "Windows Forms"],
                links: [{ label: "Acessar Repositório", url: "https://github.com/samuel05015" }]
            }
        ]
      }
    },
    { 
      name: "Técnicas Avançadas de Programação Web e Mobile", 
      icon: <Globe size={24} />,
      details: {
        title: "Desenvolvimento Web e Mobile Moderno",
        description: "Introdução a frameworks modernos para criação de interfaces reativas e integração com serviços em nuvem.",
        highlight: {
            title: "Stack: React.js + Firebase",
            description: "Desenvolvimento de uma aplicação de loja virtual utilizando componentes reutilizáveis e banco de dados em tempo real.",
            icon: <Smartphone size={32} />
        },
        topics: [
            {
                title: "React.js",
                items: [
                    "Componentes, Props e States.",
                    "Ciclo de vida da aplicação.",
                    "Estilização modular."
                ]
            },
            {
                title: "Firebase",
                items: [
                    "Banco de dados Realtime.",
                    "Autenticação de usuários.",
                    "Hospedagem e armazenamento."
                ]
            }
        ],
        projects: [
            {
                title: "Loja Virtual React",
                description: "Vitrine de produtos com conexão em tempo real ao Firebase.",
                tags: ["React", "Firebase", "Web"],
                links: [{ label: "Acessar Repositório", url: "https://github.com/samuel05015" }]
            }
        ]
      }
    },
    { 
      name: "Inteligência Corporativa e Negócios", 
      icon: <Briefcase size={24} />,
      details: {
        title: "Inteligência Corporativa e Modelos de Negócio",
        description: "Estudo da transformação digital, inovação e uso estratégico de dados para tomada de decisão nas empresas.",
        highlight: {
            title: "Business Intelligence (BI)",
            description: "Uso de dados para gerar valor, antecipar tendências e melhorar a eficiência operacional.",
            icon: <Brain size={32} />
        },
        topics: [
            {
                title: "Inovação e Estratégia",
                items: [
                    "Processo de Inovação: Geração de ideias até implementação.",
                    "Novos Modelos de Negócio: E-commerce, SaaS, Plataformas.",
                    "Negócios Escaláveis e Sustentáveis."
                ]
            },
            {
                title: "Gestão do Conhecimento",
                items: [
                    "Ciclo da Inteligência: Coleta, análise e ação.",
                    "Ativos Intangíveis: Marca e capital intelectual.",
                    "Alinhamento Estratégico de TI com o negócio."
                ]
            }
        ]
      }
    },
    { 
      name: "Gestão Ágil de Projetos de Software", 
      icon: <Layout size={24} />,
      details: {
        title: "Gestão Ágil de Projetos",
        description: "Exploração de metodologias ágeis focadas em entregas rápidas, colaboração e adaptação a mudanças, contrastando com modelos tradicionais.",
        highlight: {
            title: "Dinâmica: Aviões de Massinha",
            description: "Simulação prática de Sprints utilizando Scrum, onde o time construiu aviões de massinha para entender conceitos de timebox e melhoria contínua.",
            icon: <Trophy size={32} />
        },
        topics: [
            {
                title: "Framework Scrum",
                items: [
                    "Papéis: Product Owner, Scrum Master, Dev Team.",
                    "Artefatos: Backlog, Sprint Backlog, Incremento.",
                    "Cerimônias: Planning, Daily, Review, Retrospective."
                ]
            },
            {
                title: "Conceitos Fundamentais",
                items: [
                    "Manifesto Ágil: 4 valores e 12 princípios.",
                    "XP (Extreme Programming): Foco em qualidade técnica e programação em par.",
                    "Gamificação: Uso de Kahoot para fixação."
                ]
            }
        ]
      }
    },
    { 
      name: "Organização de Computadores e Sistemas Operacionais", 
      icon: <Cpu size={24} />,
      details: {
        title: "Organização de Computadores e Sistemas Operacionais",
        description: "Análise profunda da arquitetura de hardware, compreendendo como processadores e memórias funcionam integrados ao sistema operacional.",
        topics: [
            {
                title: "O Cérebro da Máquina (CPU)",
                items: [
                    "Unidade Aritmética e Lógica (ULA): Cálculos e lógica.",
                    "Unidade de Controle (UC): Gerenciamento de fluxo.",
                    "Registradores: Memória ultrarrápida interna."
                ]
            },
            {
                title: "Hierarquia de Memória",
                items: [
                    "Memória Principal: RAM (Volátil) e ROM (Não Volátil).",
                    "Memória Cache: Aceleração de acesso.",
                    "Memória Secundária: HDs e SSDs."
                ]
            }
        ]
      }
    },
    { 
      name: "Matemática Discreta", 
      icon: <Calculator size={24} />,
      details: {
        title: "Matemática Discreta",
        description: "Fundamentos matemáticos essenciais para a Ciência da Computação, focados em estruturas que não variam continuamente.",
        topics: [
            {
                title: "Lógica e Conjuntos",
                items: [
                    "Lógica Proposicional: Tabelas-verdade, conectivos lógicos.",
                    "Teoria dos Conjuntos: Operações, diagramas de Venn.",
                    "Relações e Funções."
                ]
            },
            {
                title: "Estruturas Discretas",
                items: [
                    "Teoria dos Grafos: Vértices, arestas, caminhos e ciclos.",
                    "Árvores: Estruturas hierárquicas.",
                    "Análise Combinatória e Probabilidade Discreta."
                ]
            }
        ]
      }
    },
  ],
  "5º": [
    { name: "Segurança da Informação", icon: <Monitor size={24} /> },
    { name: "Governança de TI", icon: <Briefcase size={24} /> },
    { name: "Inteligência Artificial", icon: <Cpu size={24} /> },
    { name: "Tópicos Especiais em Informática", icon: <Lightbulb size={24} /> },
  ]
};

interface CurriculumProps {
  externalSelectedYear: string | null;
  onYearChange: (year: string | null) => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ externalSelectedYear, onYearChange }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  // Sync internal modal state with external prop from Navbar
  useEffect(() => {
    if (!externalSelectedYear) {
      setSelectedSubject(null);
    }
  }, [externalSelectedYear]);

  const handleClose = () => {
    onYearChange(null);
    setSelectedSubject(null);
  };

  const handleBackToGrid = () => {
    setSelectedSubject(null);
  };

  return (
    <section id="curriculum" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-3xl -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Grade Curricular
          </h2>
          <p className="text-slate-400 text-lg">
            Clique nos círculos abaixo para explorar as disciplinas detalhadas e competências desenvolvidas em cada ano.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <GradeCard 
            year="4º" 
            period="Ano"
            description="Clique para ver as matérias"
            delay={0}
            gradient="from-blue-600 to-indigo-600"
            icon={<Layout size={32} />}
            onClick={() => onYearChange("4º")}
          />
          <GradeCard 
            year="5º" 
            period="Ano"
            description="Clique para ver as matérias"
            delay={0.2}
            gradient="from-indigo-600 to-purple-600"
            icon={<Database size={32} />}
            onClick={() => onYearChange("5º")}
          />
        </div>
      </div>

      {/* Modal / Overlay Principal */}
      <AnimatePresence>
        {externalSelectedYear && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-dark/95 overflow-y-auto"
          >
            <div className="min-h-screen container mx-auto px-6 py-12 relative">
              {/* Header do Modal */}
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-dark/90 backdrop-blur-md py-4 z-20 border-b border-white/5">
                <div className="flex items-center gap-4">
                  {selectedSubject && (
                    <button 
                      onClick={handleBackToGrid}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors mr-2"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  )}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedSubject ? selectedSubject.name : `Matérias do ${externalSelectedYear} Ano`}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base">
                      {selectedSubject ? "Detalhes da disciplina" : "Grade curricular detalhada"}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Conteúdo Dinâmico: Lista ou Detalhes */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {!selectedSubject ? (
                    /* VIEW 1: Grid de Matérias */
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
                    >
                      {subjectsData[externalSelectedYear]?.map((subject, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setSelectedSubject(subject)}
                          className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-start gap-4 cursor-pointer"
                        >
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:text-white group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-lg shadow-primary/5">
                            {subject.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-100 group-hover:text-white leading-tight">
                              {subject.name}
                            </h4>
                            {subject.details && (
                                <p className="text-xs text-primary mt-2 font-medium">Clique para ver detalhes</p>
                            )}
                          </div>
                          {/* Efeito de brilho no hover */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    /* VIEW 2: Detalhes da Matéria */
                    <SubjectDetailView subject={selectedSubject} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Componente para exibir os detalhes da matéria
const SubjectDetailView: React.FC<{ subject: Subject }> = ({ subject }) => {
  const details = subject.details;

  if (!details) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-500">
          <Code2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Conteúdo em breve</h3>
        <p className="text-slate-400">Os detalhes desta disciplina estão sendo atualizados.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="details"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="max-w-4xl mx-auto space-y-8 pb-20"
    >
      {/* Header Description */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
        <h4 className="text-xl font-bold text-primary mb-4">{details.title}</h4>
        <p className="text-slate-300 leading-relaxed text-lg">{details.description}</p>
      </div>

      {/* Destaque (ScanPlant ou Boeing) */}
      {details.highlight && (
        <div className="p-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
          <div className="bg-dark rounded-xl p-8 h-full">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
               <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                 {details.highlight.icon}
               </div>
               <div>
                 <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{details.highlight.title}</h3>
                    {details.title.includes("Projeto") && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/20">FULL STACK</span>
                    )}
                 </div>
                 <p className="text-slate-300 leading-relaxed">
                    {details.highlight.description}
                 </p>
                 {details.title.includes("Projeto") && (
                   <div className="mt-4 flex gap-2">
                      <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-400">Frontend Mobile</span>
                      <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-400">Backend API</span>
                      <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-400">Database</span>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Topics */}
      <div className="grid md:grid-cols-2 gap-6">
        {details.topics?.map((topic, i) => (
          <div key={i} className="p-6 rounded-2xl bg-surface border border-white/10">
            <h5 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-secondary" size={20} />
              {topic.title}
            </h5>
            <ul className="space-y-3">
              {topic.items.map((item, j) => (
                <li key={j} className="text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Projects / Repos */}
        {details.projects?.map((project, i) => (
          <div key={i} className="p-6 rounded-2xl bg-surface border border-white/10">
            <h5 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Github className="text-white" size={20} />
              {project.title}
            </h5>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, t) => (
                <span key={t} className="text-xs font-medium text-slate-500 bg-dark px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              {project.links?.map((link, l) => (
                <a 
                  key={l}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary transition-all text-sm font-medium text-slate-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

interface GradeCardProps {
  year: string;
  period: string;
  description: string;
  delay: number;
  gradient: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const GradeCard: React.FC<GradeCardProps> = ({ year, period, description, delay, gradient, icon, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br ${gradient} p-1 shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)] transition-all duration-500 group-hover:shadow-[0_0_80px_-12px_rgba(99,102,241,0.8)]`}>
        <div className="w-full h-full bg-dark rounded-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
          {/* Inner Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
          
          <div className="relative z-10 text-white flex flex-col items-center text-center">
            <div className="mb-4 text-white/80 group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-7xl font-bold mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-300">
              {year}
            </h3>
            <span className="text-xl font-medium tracking-widest uppercase text-white/70">
              {period}
            </span>
            <p className="mt-4 px-4 py-2 rounded-full bg-white/10 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};