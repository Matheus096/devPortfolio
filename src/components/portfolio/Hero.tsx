export default function Hero() {
  return (
      <div className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4 overflow-hidden">
        
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <nav className="absolute top-0 w-full max-w-7xl flex justify-between items-center p-8">
          <div className="text-2xl font-bold text-emerald-500">ML<span className="text-white">.</span></div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experiencia" className="hover:text-white transition">Experiência</a>
            <a href="#projetos" className="hover:text-white transition">Projetos</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </div>
        </nav>

        <div className="z-10 text-center flex flex-col items-center">
          
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            DISPONÍVEL PARA PROJETOS
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
            Matheus <span className="text-cyan-400">Luiz</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-mono text-gray-400 mb-8 tracking-widest uppercase">
            API & Cloud<span className="text-emerald-500 animate-pulse">|</span>
          </h2>

          <p className="max-w-xl text-gray-500 text-sm md:text-base leading-relaxed mb-10">
            Transformo ideias em produtos digitais robustos e escaláveis, do back-end ao 
            front-end, com foco em performance e experiência do usuário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-bold rounded-full transition-all duration-300">
              Ver Projetos
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-800 hover:border-gray-600 text-white font-medium rounded-full transition-all">
              Falar Comigo
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
        </div>
      </div>
  )
}