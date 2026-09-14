import React from 'react';
import { Crosshair, Repeat, CalendarCheck, ClipboardCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { serviceSchema, breadcrumbSchema } from '../lib/schema';
import { SERVICES } from '../lib/business';

const svc = SERVICES['logistica-dedicada'];

export const ServicoLogisticaDedicada: React.FC = () => {
  useSEO({
    title: 'Logística Dedicada para Indústria | C.A. Rodrigues',
    description:
      'Veículo exclusivo e rotina de coleta combinada com a sua operação. Logística dedicada da C.A. Rodrigues para indústrias que precisam de recorrência e previsibilidade.',
    path: `/${svc.slug}`,
    jsonLd: [
      serviceSchema({
        name: svc.pageTitle,
        description: svc.shortDesc,
        path: `/${svc.slug}`,
        serviceType: 'Logística dedicada / transporte dedicado',
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
            Logística <span className="text-brand-red">Dedicada</span>
          </>
        }
        description="Para indústrias com fluxo de carga recorrente, ter um veículo e uma rotina de coleta combinados com a sua operação reduz incerteza — e é sobre isso que é a logística dedicada."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase italic">
              Carga dedicada ou <span className="text-gray-500">compartilhada?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Quando o volume e a frequência de embarque justificam, faz mais sentido reservar um
              veículo e uma rotina só para a sua operação — em vez de negociar cada viagem separadamente.
              Isso dá mais previsibilidade de prazo e menos variação de custo.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A C.A. Rodrigues avalia com você se o seu volume atual já justifica esse modelo ou se
              faz mais sentido começar com viagens avulsas e evoluir para dedicada conforme a
              recorrência aumenta.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Repeat className="text-brand-red" size={28} />,
                title: 'Rotina combinada com sua operação',
                desc: 'Coleta e entrega alinhadas ao ritmo da sua produção ou expedição.',
              },
              {
                icon: <CalendarCheck className="text-brand-red" size={28} />,
                title: 'Previsibilidade de prazo',
                desc: 'Menos variação e mais controle sobre quando a carga sai e chega.',
              },
              {
                icon: <ClipboardCheck className="text-brand-red" size={28} />,
                title: 'Documentação por viagem',
                desc: 'CT-e e MDF-e emitidos normalmente, mesmo em operação recorrente.',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-start gap-4">
        <Crosshair className="text-brand-red shrink-0" size={32} />
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          Não sabe se o seu volume já justifica um veículo dedicado? Fale com a gente e avaliamos
          juntos — sem compromisso.
        </p>
      </div>

      <CTASection
        title="Vale a pena um veículo dedicado para sua operação?"
        description="Conte a frequência e o volume de embarque e ajudamos a avaliar o melhor modelo."
      />
    </div>
  );
};
