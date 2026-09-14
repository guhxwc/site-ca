import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BUSINESS } from '../lib/business';

export const CTASection: React.FC<{
  title?: string;
  description?: string;
}> = ({
  title = 'Precisa transportar sua carga com quem entende do assunto?',
  description = 'Conte o que você precisa transportar e receba uma resposta direta sobre prazo, veículo e condições.',
}) => {
  return (
    <section className="bg-brand-red py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase italic mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto font-light">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contato"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-black hover:bg-black rounded-sm skew-x-[-10deg] transition-all"
          >
            <span className="flex items-center gap-3 skew-x-[10deg] font-bold text-white uppercase tracking-wider font-display">
              Solicitar Cotação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <a
            href={`https://wa.me/${BUSINESS.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/40 hover:bg-white/10 rounded-sm skew-x-[-10deg] transition-all"
          >
            <span className="skew-x-[10deg] font-bold text-white uppercase tracking-wider font-display">
              Falar no WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
