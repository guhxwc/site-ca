import React from 'react';

const CLIENTS = [
  { name: 'FBK Alumínio', file: '/clients/fbk-aluminio.png' },
  { name: 'MaxBelt Correias Transportadoras', file: '/clients/maxbelt.png' },
  { name: 'SG Alumínios', file: '/clients/sg-aluminios.png' },
  { name: 'Fotus Distribuidora Solar', file: '/clients/fotus-solar.png' },
  { name: 'Perfileve Alumínio', file: '/clients/perfileve.png' },
];

// Duplicamos a lista para o loop infinito ficar contínuo (a animação anda
// -50% -> 0%, então a segunda cópia entra exatamente onde a primeira sai).
const TRACK = [...CLIENTS, ...CLIENTS];

export const ClientsMarquee: React.FC = () => {
  return (
    <section className="bg-brand-black py-14 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs font-display block text-center">
          Indústrias que já atendemos
        </span>
      </div>

      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-scroll-right items-center gap-20">
          {TRACK.map((client, i) => (
            <img
              key={`${client.name}-${i}`}
              src={client.file}
              alt={client.name}
              title={client.name}
              className="h-10 md:h-14 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
