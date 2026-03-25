export default function About() {

  return (
      <section id="sobre" className="relative bg-[#0a0a0a] text-white py-24 px-4 overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        <div className="relative group flex-shrink-0">
          <div className="absolute -inset-4 border-2 border-emerald-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105 group-hover:scale-100"></div>
          
          <img 
            src="https://img.freepik.com/fotos-gratis/close-up-de-um-jovem-bonito-irritado-de-oculos-olhando-para-a-frente-isolada-na-parede-rosa_141793-74123.jpg?t=st=1773201516~exp=1773205116~hmac=b74e2a7ced9b50ae9e78f8f00fe0679749b7f72364f76888de04bcfabe2dcb2e&w=1480"
            alt="Manoel Gomes" 
            className="w-[380px] h-[380px] object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-300 shadow-2xl shadow-emerald-950/20"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          
          <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
            // SOBRE MIM
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
            Desenvolvedor apaixonado<br />
            por <span className="text-emerald-500">construir soluções</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            <p>
              Olá! Sou Manoel Gomes, desenvolvedor full stack com mais de 5 anos de experiência criando aplicações web modernas, performáticas e escaláveis.
            </p>
            <p>
              Trabalho com as principais tecnologias do mercado, tanto no front-end quanto no back-end. Adoro resolver problemas complexos com código elegante e soluções criativas.
            </p>
          </div>

          <div className="h-px bg-gray-800 my-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-emerald-500">5+</span>
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-2">Anos de Experiência</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-emerald-500">40+</span>
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-2">Projetos Entregues</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-emerald-500">15+</span>
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-2">Clientes Satisfeitos</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}