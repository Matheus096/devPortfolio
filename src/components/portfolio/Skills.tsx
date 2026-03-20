import React from 'react';

// 1. Defina o formato das props
interface SkillBarProps {
  name: string;
  level: number;
  colorClass: {
    bg: string;
    text: string;
  };
}

// o Typescript infere o tipo do componente a partir da definição das props na interface, se não faz isso ele reclama que os parametros estão como any

// 2. Aplique a interface ao componente
const SkillBar = ({ name, level, colorClass }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 text-sm font-medium">{name}</span>
      <span className={`text-xs font-bold ${colorClass.text}`}>{level}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-1.5">
      <div 
        className={`h-1.5 rounded-full ${colorClass.bg}`} 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: "Front-end",
      dotColor: "bg-emerald-500",
      colorClass: { bg: "bg-emerald-500", text: "text-emerald-500" },
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      title: "Back-end",
      dotColor: "bg-cyan-500",
      colorClass: { bg: "bg-cyan-500", text: "text-cyan-500" },
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST / GraphQL", level: 88 },
      ]
    },
    {
      title: "DevOps & Cloud",
      dotColor: "bg-purple-500",
      colorClass: { bg: "bg-purple-500", text: "text-purple-500" },
      skills: [
        { name: "Docker", level: 82 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Git & GitHub", level: 95 },
      ]
    }
  ];

  const badges = ["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "Docker", "AWS", "Next.js", "GraphQL", "Git"];

  return (
    <section id="skills" className="bg-[#0a0a0a] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-mono text-xs tracking-[0.3em] uppercase">
            // HABILIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">Stack Técnico</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, index) => (
            <div key={index} className="bg-[#111111] border border-gray-800/50 p-8 rounded-2xl hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <span className={`w-2 h-2 rounded-full ${cat.dotColor}`}></span>
                <h3 className={`font-bold text-sm tracking-wider uppercase ${cat.colorClass.text}`}>
                  {cat.title}
                </h3>
              </div>
              
              {cat.skills.map((skill, sIndex) => (
                <SkillBar 
                  key={sIndex} 
                  name={skill.name} 
                  level={skill.level} 
                  colorClass={cat.colorClass}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {badges.map((badge, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 bg-[#111111] border border-gray-800 text-gray-400 text-xs rounded-full hover:text-white hover:border-gray-600 transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;