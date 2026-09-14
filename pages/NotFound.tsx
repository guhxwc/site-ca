import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Página não encontrada | C.A. Rodrigues';
    let el = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'robots');
      document.head.appendChild(el);
    }
    el.setAttribute('content', 'noindex');
    return () => {
      // Restaura indexação normal ao sair da página 404
      el?.setAttribute('content', 'index, follow');
    };
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <h1 className="text-3xl font-display font-black text-white uppercase italic mb-4">Página não encontrada</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        A página que você procura não existe ou foi movida. Veja nossos serviços ou entre em contato.
      </p>
      <Link to="/" className="px-6 py-3 bg-brand-red text-white font-display font-bold uppercase tracking-wider rounded-sm">
        Voltar ao início
      </Link>
    </div>
  );
};
