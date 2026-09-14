import React from 'react';
import { Layers, ShieldCheck, Truck, MapPin, ClipboardCheck, PackageCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { serviceSchema, breadcrumbSchema } from '../lib/schema';
import { SERVICES } from '../lib/business';

const svc = SERVICES['perfis-aluminio'];

export const ServicoPerfisAluminio: React.FC = () => {
  useSEO({
    title: 'Transporte de Perfis de Alumínio | C.A. Rodrigues',
    description:
      'Transporte especializado de perfis e barras de alumínio para indústria, saindo do polo de Arapongas/Maringá-PR. Amarração adequada, CT-e/MDF-e por viagem e atendimento nacional.',
    path: `/${svc.slug}`,
    jsonLd: [
      serviceSchema({
        name: svc.pageTitle,
        description: svc.shortDesc,
        path: `/${svc.slug}`,
        serviceType: 'Transporte de perfis e barras de alumínio',
      }),
      breadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: svc.navTitle, path: `/${svc.slug}` },
      ]),
    ],
  });

  return (
    <div className="pt-8">
      <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: svc.navTitle, path: `/${svc.slug}` }]} />

      <PageBanner
        eyebrow="Especialização"
        title={
          <>
            Transporte de <span className="text-brand-red">Perfis e Barras de Alumínio</span>
          </>
        }
        description="Um dos materiais mais sensíveis a risco, atrito e deformação durante o transporte. É também uma das operações em que a C.A. Rodrigues mais tem experiência prática — saindo do polo de Arapongas e Maringá-PR para clientes em todo o Brasil."
      />

      {/* Contexto operacional real */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs font-display mb-4 block">
              Por que alumínio é diferente
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase italic">
              Um material que <span className="text-gray-500">não perdoa</span> transporte genérico
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Perfis e barras de alumínio para esquadrias, estruturas e componentes industriais têm
              acabamento superficial e geometria que sofrem com atrito, empilhamento incorreto e
              amarração mal feita. Um risco ou uma deformação pode inutilizar uma peça inteira —
              e o prejuízo cai sobre quem contratou o frete.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Por isso o transporte desse tipo de carga não é só "colocar no caminhão e seguir viagem".
              Exige acondicionamento pensado para o formato da peça, cuidado no carregamento e
              descarregamento, e um motorista que já entende que aquele material pede atenção diferente
              de uma carga seca comum.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <PackageCheck className="text-brand-red" size={28} />,
                title: 'Acondicionamento adequado ao perfil',
                desc: 'Amarração e proteção pensadas para reduzir atrito e movimento da carga durante o trajeto, de acordo com o formato e comprimento de cada peça.',
              },
              {
                icon: <ShieldCheck className="text-brand-red" size={28} />,
                title: 'Cuidado no carregamento e descarregamento',
                desc: 'Etapa em que a maior parte das avarias em perfis de alumínio acontece — por isso é tratada com atenção, não como rotina padrão.',
              },
              {
                icon: <ClipboardCheck className="text-brand-red" size={28} />,
                title: 'Documentação fiscal completa',
                desc: 'Emissão de CT-e e, quando aplicável, MDF-e para cada viagem — rastreabilidade fiscal da carga do início ao fim da operação.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-white/5 border border-white/5 rounded-sm hover:border-brand-red/40 transition-colors"
              >
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-white font-display font-bold uppercase text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regiões atendidas - grounded em operação real */}
      <section className="bg-brand-dark py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-brand-red" size={28} />
            <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase italic">
              Origem e regiões atendidas
            </h2>
          </div>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-8">
            A operação de perfis de alumínio da C.A. Rodrigues sai principalmente de Sarandi e Maringá-PR,
            com coletas frequentes no polo industrial de Arapongas-PR. A partir daí, os destinos mais
            recorrentes incluem:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['Santa Catarina', 'Grande Florianópolis, Palhoça, São José'],
              ['Paraná', 'Cascavel, Curitiba, Francisco Beltrão, Foz do Iguaçu'],
              ['São Paulo', 'Capital e região metropolitana'],
              ['Rio Grande do Sul', 'Caxias do Sul e região'],
            ].map(([uf, cidades]) => (
              <div key={uf} className="p-4 bg-white/5 border border-white/5 rounded-sm">
                <h4 className="text-brand-red font-display font-bold uppercase text-sm mb-1">{uf}</h4>
                <p className="text-gray-500 text-xs">{cidades}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6 max-w-2xl">
            Atendemos também outras rotas e estados mediante consulta — se sua origem ou destino não
            está na lista acima, fale com a gente antes de descartar a possibilidade.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase italic mb-10">
          Como funciona a coleta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            ['01', 'Contato e escopo', 'Você descreve o perfil/barra, quantidade, dimensões e prazo desejado.'],
            ['02', 'Confirmação e coleta', 'Alinhamos data e local de coleta, com o veículo adequado à carga.'],
            ['03', 'Transporte acompanhado', 'Amarração conferida, viagem com documentação fiscal (CT-e/MDF-e) desde a saída.'],
            ['04', 'Entrega e comprovação', 'Entrega no destino com canhoto/comprovante para fechamento da operação.'],
          ].map(([n, title, desc]) => (
            <div key={n} className="relative pt-8 border-t-2 border-brand-red">
              <span className="absolute -top-6 left-0 text-4xl font-display font-black text-white/10">{n}</span>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais rápidos */}
      <section className="bg-brand-dark py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Layers className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Experiência com o material</h3>
              <p className="text-gray-500 text-sm">Operação estruturada em torno do setor de alumínio, não um serviço genérico adaptado.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Truck className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Veículo compatível com a carga</h3>
              <p className="text-gray-500 text-sm">Definimos o veículo conforme dimensão, peso e volume de cada embarque.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Operação segurada</h3>
              <p className="text-gray-500 text-sm">Cobertura de seguro para a carga durante o transporte (RCTR-C).</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vai transportar perfis ou barras de alumínio?"
        description="Conte a quantidade, o formato e o destino da carga — respondemos com prazo e condições."
      />
    </div>
  );
};
