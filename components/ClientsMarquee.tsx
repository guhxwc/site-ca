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
    <section className="bg-brand-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-white font-bold uppercase tracking-[0.2em] text-xs font-display block text-center mb-8">
          Indústrias que já atendemos
        </span>

        <div className="bg-white/5 border border-white/5 rounded-sm">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-scroll-right items-stretch">
              {TRACK.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex items-center justify-center px-10 md:px-12 py-8 border-r border-white/10 shrink-0"
                >
                  <img
                    src={client.file}
                    alt={client.name}
                    title={client.name}
                    className="h-9 md:h-11 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
