import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_LIST, BUSINESS } from '../lib/business';

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
                <span className="font-display font-black text-xl text-white uppercase italic tracking-tight leading-none">
                  C A Rodrigues
                </span>
                <span className="font-display font-bold text-[10px] text-brand-red tracking-[0.25em] uppercase leading-none mt-1.5">
                  Transportes
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 max-w-sm mb-6 leading-relaxed">
              Transportadora especializada em cargas siderúrgicas, perfis de alumínio e cargas secas,
              sediada em {BUSINESS.city}-{BUSINESS.state} desde {BUSINESS.foundedYear}. Operação também
              em Maringá, com coletas no polo do alumínio de Arapongas.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 bg-brand-gray rounded-sm flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors cursor-pointer">IG</div>
               <div className="w-10 h-10 bg-brand-gray rounded-sm flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors cursor-pointer">FB</div>
               <a
                 href="https://www.linkedin.com/in/carlos-santos-71317b31b"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="LinkedIn da C.A. Rodrigues"
                 className="w-10 h-10 bg-brand-gray rounded-sm flex items-center justify-center hover:bg-brand-red transition-colors"
               >
                 <img src="/icons/linkedin.png" alt="LinkedIn" className="w-[18px] h-[18px]" />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest">Serviços</h4>
            <ul className="space-y-3 text-sm">
              {SERVICE_LIST.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:text-brand-red transition-colors">{s.navTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/sobre" className="hover:text-brand-red transition-colors">Sobre a Empresa</Link></li>
              <li><Link to="/regioes-e-rotas" className="hover:text-brand-red transition-colors">Regiões e Rotas</Link></li>
              <li><Link to="/contato" className="hover:text-brand-red transition-colors">Cotação Online</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono gap-2">
          <p>&copy; {currentYear} {BUSINESS.legalName}. CNPJ: {BUSINESS.cnpj}.</p>
          <p>{BUSINESS.city} – {BUSINESS.stateFull} · {BUSINESS.phoneDisplay}</p>
        </div>
      </div>
    </footer>
  );
};
