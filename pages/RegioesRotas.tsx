import React from 'react';
import { MapPin } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { breadcrumbSchema } from '../lib/schema';
import { BUSINESS } from '../lib/business';

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
    title: 'Regiões e Rotas Atendidas | C.A. Rodrigues Transportes',
    description:
      'Transportadora sediada em Sarandi-PR, na região de Maringá. Atendimento a Santa Catarina, Paraná, São Paulo, Rio Grande do Sul e demais estados mediante consulta.',
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
            Base em <span className="text-brand-red">{BUSINESS.city}-{BUSINESS.state}</span>, atuação
            nacional
          </>
        }
        description={`A C.A. Rodrigues opera a partir de ${BUSINESS.city}, no eixo de Maringá-PR. Daqui, atendemos rotas regulares para os estados abaixo e avaliamos qualquer outro destino sob consulta.`}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
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
