import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.imgur.com/KVPxxDG.png" 
                alt="Logo C.A. Rodrigues" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white uppercase italic tracking-tighter leading-none">
                  C. A. Rodrigues
                </span>
                <span className="font-display font-bold text-[10px] text-brand-red tracking-[0.2em] uppercase leading-none mt-1">
                  Transportes
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 max-w-sm mb-6 leading-relaxed">
              Soluções logísticas inteligentes com frota moderna e compromisso com a segurança. Transformando o transporte rodoviário desde 2012.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 bg-brand-gray rounded-sm flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors cursor-pointer">IG</div>
               <div className="w-10 h-10 bg-brand-gray rounded-sm flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors cursor-pointer">FB</div>
               <div className="w-10 h-10 bg-brand-gray rounded-sm flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors cursor-pointer">LN</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-red transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">Sobre a Empresa</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Cotação Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; {currentYear} C. A. Rodrigues Transportes Ltda. CNPJ: 15.663.543/0001-66.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
};