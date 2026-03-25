import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  deployUrl: string;
}

const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel admin, integração de pagamentos e gestão de estoque.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      githubUrl: "#",
      deployUrl: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Dashboard analítico para gestão de campanhas de marketing com visualizações de dados avançadas.",
      tech: ["React", "TypeScript", "GraphQL", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      githubUrl: "#",
      deployUrl: "#"
    },
    {
      title: "API de Pagamentos",
      description: "API RESTful robusta para processamento de pagamentos com suporte a múltiplas moedas e webhooks.",
      tech: ["Node.js", "Express", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      githubUrl: "#",
      deployUrl: "#"
    },
    {
      title: "App de Colaboração",
      description: "Ferramenta de colaboração em equipe com edição em tempo real e chamadas de vídeo integradas.",
      tech: ["React", "Socket.io", "WebRTC", "MongoDB"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
      githubUrl: "#",
      deployUrl: "#"
    }
  ];

  return (
    <section id="projetos" className="bg-[#0a0a0a] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-mono text-xs tracking-[0.3em] uppercase">
            // PORTFÓLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-white">Projetos em Destaque</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="group bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-950 border border-gray-800 text-gray-500 text-[10px] rounded-md uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a href={project.githubUrl} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Código
                  </a>

                  <a href={project.deployUrl} className="flex items-center gap-2 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors uppercase tracking-widest">
                    <ExternalLink size={16} /> Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;