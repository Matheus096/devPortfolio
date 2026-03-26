import React from 'react';

// Interface para Tipagem
interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  side: 'left' | 'right';
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      year: "2023 — Presente",
      role: "Desenvolvedor Full Stack Sênior",
      company: "TechCorp Solutions",
      description: "Liderança técnica no desenvolvimento de plataformas SaaS utilizando React, Node.js e AWS. Arquitetura de microsserviços e definição de padrões de código.",
      tech: ["React", "Node.js", "AWS", "Microsserviços"],
      side: 'left'
    },
    {
      year: "2021 — 2023",
      role: "Desenvolvedor Full Stack",
      company: "StartupXYZ",
      description: "Desenvolvimento de MVP e evolução de produto para plataforma de e-commerce com mais de 50k usuários. Integrações com APIs de pagamento e logística.",
      tech: ["Next.js", "PostgreSQL", "Docker", "Stripe"],
      side: 'right'
    },
    {
      year: "2019 — 2021",
      role: "Desenvolvedor Front-end",
      company: "Agência Digital Creative",
      description: "Criação de interfaces web responsivas e performáticas para clientes de diversos segmentos. Foco em acessibilidade e otimização de performance.",
      tech: ["React", "TypeScript", "CSS", "Figma"],
      side: 'left'
    }
  ];

  return (
    <section id="experiencia" className="bg-[#0a0a0a] text-white py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-mono text-xs tracking-[0.3em] uppercase">
            // TRAJETÓRIA
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">Experiência</h2>
        </div>

        <div className="relative">
          
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-green-800 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-12">
                  <div className={`bg-[#111111] border border-gray-800 p-8 rounded-2xl max-w-lg hover:border-emerald-500/50 transition-all duration-300 relative ${exp.side === 'right' ? 'md:text-left' : 'md:text-left'}`}>
                    
                    <span className="text-emerald-500 font-mono text-sm font-bold">{exp.year}</span>
                    <h3 className="text-2xl font-black mt-2">{exp.role}</h3>
                    <h4 className="text-cyan-400 font-bold mb-4">{exp.company}</h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-950 border border-gray-800 text-gray-400 text-[10px] rounded-md uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-[#0a0a0a] z-10 hidden md:block shadow-[0_0_20px_5px_rgba(16,185,129,0.3)] animate-pulse"></div>

                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;