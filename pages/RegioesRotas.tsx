import React from 'react';
import { MapPin, Building2, Factory } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { breadcrumbSchema } from '../lib/schema';
import { BUSINESS, LOCAL_AREAS } from '../lib/business';

const AREA_ICONS = { Sarandi: Building2, Maringá: MapPin, Arapongas: Factory } as const;

const CORRIDORS = [
  {
    uf: 'Santa Catarina',
    cidades: 'Grande Florianópolis, Palhoça, São José',
    contexto: 'Um dos destinos mais frequentes para perfis de alumínio saindo do Paraná.',
  },
  {
    uf: 'Paraná',
    cidades: 'Cascavel, Curitiba, Francisco Beltrão, Foz do Iguaçu',
    contexto: 'Rotas dentro do próprio estado, incluindo indústria e distribuição regional.',
  },
  {
    uf: 'São Paulo',
    cidades: 'Capital e região metropolitana',
    contexto: 'Rota de entrada e saída de insumos industriais, além de entrega de carga.',
  },
  {
    uf: 'Rio Grande do Sul',
    cidades: 'Caxias do Sul e região',
    contexto: 'Atendimento a indústria e distribuidoras da Serra Gaúcha.',
  },
];

export const RegioesRotas: React.FC = () => {
  useSEO({
    title: 'Transportadora em Sarandi, Maringá e Arapongas-PR | C.A. Rodrigues',
    description:
      'Transportadora em Sarandi-PR, com operação em Maringá e coletas no polo do alumínio de Arapongas. Atendimento também para SC, SP, RS e demais estados.',
    path: '/regioes-e-rotas',
    jsonLd: breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Regiões e Rotas', path: '/regioes-e-rotas' },
    ]),
  });

  return (
    <div className="pt-8">
      <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Regiões e Rotas', path: '/regioes-e-rotas' }]} />

      <PageBanner
        eyebrow="Onde atuamos"
        title={
          <>
            Transportadora em <span className="text-brand-red">Sarandi, Maringá e Arapongas</span>
          </>
        }
        description={`A C.A. Rodrigues opera a partir de ${BUSINESS.city}, no eixo de Maringá-PR, com coletas frequentes no polo industrial de Arapongas. Daqui, atendemos rotas regulares para os estados abaixo e avaliamos qualquer outro destino sob consulta.`}
      />

      {/* Base local — as três cidades onde a operação realmente acontece */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-xl font-display font-bold text-white uppercase italic mb-6">
          Nossa base de operação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCAL_AREAS.map((area) => {
            const Icon = AREA_ICONS[area.city];
            return (
              <div
                key={area.city}
                className="p-6 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-brand-red" size={20} />
                  <h3 className="text-white font-display font-bold uppercase">
                    {area.city}-{area.state}
                  </h3>
                </div>
                <span className="inline-block text-[10px] uppercase tracking-widest text-brand-red font-bold font-display mb-2">
                  {area.role}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corredores de destino */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-t border-white/5 pt-16">
        <h2 className="text-xl font-display font-bold text-white uppercase italic mb-6">
          Destinos mais frequentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORRIDORS.map((c) => (
            <div key={c.uf} className="p-6 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-brand-red" size={20} />
                <h3 className="text-white font-display font-bold uppercase">{c.uf}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-2">{c.cidades}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{c.contexto}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-10 max-w-2xl">
          Não encontrou sua região na lista? Isso não significa que não atendemos. São só as rotas mais
          frequentes hoje. Fale com a gente e avaliamos sua rota específica.
        </p>
      </section>

      <CTASection
        title="Sua rota não está na lista?"
        description="Conte a origem e o destino da sua carga. Avaliamos a viabilidade e retornamos com condições."
      />
    </div>
  );
};
