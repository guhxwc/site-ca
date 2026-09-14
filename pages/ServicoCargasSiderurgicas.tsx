import React from 'react';
import { Factory, ShieldCheck, Truck, ClipboardCheck, PackageCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { serviceSchema, breadcrumbSchema } from '../lib/schema';
import { SERVICES } from '../lib/business';

const svc = SERVICES['cargas-siderurgicas'];

export const ServicoCargasSiderurgicas: React.FC = () => {
  useSEO({
    title: 'Transporte de Cargas Siderúrgicas e Aço | C.A. Rodrigues',
    description:
      'Transportadora especializada em cargas siderúrgicas: aço e derivados para indústria metalúrgica. Documentação fiscal completa e atendimento nacional a partir do Paraná.',
    path: `/${svc.slug}`,
    jsonLd: [
      serviceSchema({
        name: svc.pageTitle,
        description: svc.shortDesc,
        path: `/${svc.slug}`,
        serviceType: 'Transporte de aço e produtos siderúrgicos',
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
            Transporte de <span className="text-brand-red">Cargas Siderúrgicas</span>
          </>
        }
        description="Aço e derivados exigem estrutura, amarração e atenção a peso e distribuição de carga diferentes de uma carga seca comum. É uma das frentes em que a C.A. Rodrigues atua com regularidade para a indústria metalúrgica."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs font-display mb-4 block">
              O desafio da carga siderúrgica
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase italic">
              Peso e <span className="text-gray-500">distribuição</span> corretos, do início ao fim
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Aço e produtos siderúrgicos costumam concentrar peso em pouco espaço. Isso exige atenção
              redobrada à amarração, ao ponto de apoio da carga e à condição do veículo. Um erro de
              carregamento vira risco de segurança e de avaria na mercadoria.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A operação da C.A. Rodrigues para esse tipo de carga é pensada considerando essas
              particularidades, com documentação fiscal emitida corretamente para cada viagem
              (CT-e e, quando aplicável, MDF-e).
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <PackageCheck className="text-brand-red" size={28} />,
                title: 'Amarração para carga pesada',
                desc: 'Fixação adequada ao peso e ao formato do material, reduzindo risco de deslocamento durante o trajeto.',
              },
              {
                icon: <ShieldCheck className="text-brand-red" size={28} />,
                title: 'Atenção à distribuição de peso',
                desc: 'Carregamento pensado para manter a estabilidade do veículo ao longo de toda a rota.',
              },
              {
                icon: <ClipboardCheck className="text-brand-red" size={28} />,
                title: 'Documentação fiscal completa',
                desc: 'CT-e e MDF-e emitidos corretamente para cada operação, com rastreabilidade da carga.',
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

      <section className="bg-brand-dark py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Factory className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Foco em indústria metalúrgica</h3>
              <p className="text-gray-500 text-sm">Atendimento pensado para quem embarca aço e derivados com regularidade.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Truck className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Veículo compatível com o peso</h3>
              <p className="text-gray-500 text-sm">Definição do veículo conforme peso, volume e tipo do material transportado.</p>
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
        title="Precisa transportar aço ou produtos siderúrgicos?"
        description="Descreva o material, o peso aproximado e o destino. Retornamos com prazo e condições."
      />
    </div>
  );
};
