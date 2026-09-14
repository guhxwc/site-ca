import React from 'react';

const CLIENTS = [
  { name: 'FBK Alumínio', file: '/clients/fbk-aluminio.png' },
  { name: 'MaxBelt Correias Transportadoras', file: '/clients/maxbelt.png' },
  { name: 'SG Alumínios', file: '/clients/sg-aluminios.png' },
  { name: 'Fotus Distribuidora Solar', file: '/clients/fotus-solar.png' },
  { name: 'Perfileve Alumínio', file: '/clients/perfileve.png' },
];

// 4 cópias (não só 2): garante que a faixa sempre fique bem mais larga que
// qualquer tela, mesmo ultrawide, então nunca sobra vazio — e -50% cai
// exatamente na metade (2 cópias), então o loop não tem emenda visível.
const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

export const ClientsMarquee: React.FC = () => {
  return (
    <section className="bg-brand-black py-14 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <span className="text-white font-bold uppercase tracking-[0.2em] text-xs font-display block text-center">
          Indústrias que já atendemos
        </span>
      </div>

      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-scroll-right items-center gap-16">
          {TRACK.map((client, i) => (
            <img
              key={`${client.name}-${i}`}
              src={client.file}
              alt={client.name}
              title={client.name}
              className="h-12 md:h-16 w-auto shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
