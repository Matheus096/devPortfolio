import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada!');
  };

  return (
    <section id="contato" className="bg-[#0a0a0a] text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-emerald-400 font-mono text-xs tracking-[0.3em] uppercase">// CONTATO</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Vamos Conversar</h2>
          <p className="text-gray-400 text-base md:text-lg">
            Tem um projeto em mente? Adoraria ouvir sobre ele. Envie uma mensagem e responderei o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(auto,600px)] gap-16 md:gap-24">
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-bold text-gray-200 mb-8 uppercase tracking-widest">Informações de Contato</h3>
              <div className="space-y-6">
                
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center">
                    <Mail className="text-gray-500" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:manoel@exemplo.com" className="text-gray-300 hover:text-white transition-colors">manoel@exemplo.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" className="text-gray-500" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">GitHub</p>
                    <a href="https://github.com/manoelgomes" target="_blank" className="text-gray-300 hover:text-white transition-colors">github.com/manoelgomes</a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 bg-[#111111] border border-gray-800 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">LinkedIn</p>
                    <a href="https://linkedin.com/in/manoelgomes" target="_blank" className="text-gray-300 hover:text-white transition-colors">linkedin.com/in/manoelgomes</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] border border-gray-800 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h3 className="text-lg font-bold text-emerald-400">Disponível Agora</h3>
              </div>
              <p className="text-sm text-gray-400">Aberto para novas oportunidades de trabalho freelance ou posições full-time.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs text-gray-500 font-medium uppercase tracking-widest">Nome</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Seu nome" className="w-full bg-[#111111] border border-gray-800 rounded-xl p-5 text-gray-300 focus:border-emerald-500/50 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500 font-medium uppercase tracking-widest">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="seu@email.com" className="w-full bg-[#111111] border border-gray-800 rounded-xl p-5 text-gray-300 focus:border-emerald-500/50 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500 font-medium uppercase tracking-widest">Mensagem</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Conte sobre seu projeto..." className="w-full bg-[#111111] border border-gray-800 rounded-xl p-5 text-gray-300 focus:border-emerald-500/50 outline-none transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full md:w-auto px-53 py-5 bg-emerald-500 text-[#0a0a0a] font-black rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 group">
              Enviar Mensagem
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
      
      <footer className="mt-20 text-center border-t border-gray-800/30 pt-8">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          <span className="text-emerald-500 font-bold">Manoel Gomes</span> • Desenvolvedor Full Stack • 2026
        </p>
      </footer>
    </section>
  );
};

export default Contact;