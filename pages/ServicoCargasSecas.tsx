import React from 'react';
import { Package, ShieldCheck, Truck, ClipboardCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { serviceSchema, breadcrumbSchema } from '../lib/schema';
import { SERVICES } from '../lib/business';

const svc = SERVICES['cargas-secas'];

export const ServicoCargasSecas: React.FC = () => {
  useSEO({
    title: 'Transporte de Cargas Secas | C.A. Rodrigues',
    description:
      'Transporte rodoviário de cargas secas em geral, com abrangência nacional e documentação fiscal completa. Transportadora sediada em Sarandi-PR.',
    path: `/${svc.slug}`,
    jsonLd: [
      serviceSchema({
        name: svc.pageTitle,
        description: svc.shortDesc,
        path: `/${svc.slug}`,
        serviceType: 'Transporte de cargas secas',
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
            Transporte de <span className="text-brand-red">Cargas Secas</span>
          </>
        }
        description="Soluções completas para o transporte de cargas secas em geral, com abrangência nacional e a mesma atenção a documentação e prazo que aplicamos nas operações mais especializadas."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Package className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Abrangência nacional</h3>
              <p className="text-gray-500 text-sm">Atendimento para diferentes estados e regiões, conforme a necessidade da sua operação.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ClipboardCheck className="text-brand-red shrink-0" size={32} />
            <div>
              <h3 className="text-white font-display font-bold uppercase text-sm mb-1">Documentação completa</h3>
              <p className="text-gray-500 text-sm">CT-e e MDF-e emitidos corretamente para cada viagem.</p>
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

        <div className="mt-16 flex items-start gap-4 max-w-3xl">
          <Truck className="text-brand-red shrink-0" size={32} />
          <p className="text-gray-400 leading-relaxed">
            Se a sua carga não se encaixa exatamente em perfis de alumínio ou produtos siderúrgicos,
            fale com a gente mesmo assim — atendemos cargas secas em geral e avaliamos o veículo e a
            rota mais adequados para o seu caso.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
