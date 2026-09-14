import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { About } from '../components/About';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../lib/useSEO';
import { breadcrumbSchema, localBusinessSchema } from '../lib/schema';
import { BUSINESS } from '../lib/business';

export const Sobre: React.FC = () => {
  useSEO({
    title: 'Sobre a C.A. Rodrigues Transportes',
    description: `A C.A. Rodrigues Transportes atua desde ${BUSINESS.foundedYear} em ${BUSINESS.city}-${BUSINESS.state}, especializada em cargas siderúrgicas, perfis de alumínio e cargas secas.`,
    path: '/sobre',
    jsonLd: [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Sobre', path: '/sobre' },
      ]),
    ],
  });

  return (
    <div className="pt-8">
      <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Sobre', path: '/sobre' }]} />
      <PageBanner
        eyebrow="Quem somos"
        title={
          <>
            Transportadora especializada, <span className="text-brand-red">não genérica</span>
          </>
        }
        description={`Desde ${BUSINESS.foundedYear}, atuando em ${BUSINESS.city}-${BUSINESS.state} com foco em cargas siderúrgicas, perfis de alumínio e cargas secas para indústria.`}
      />
      <About />
      <CTASection />
    </div>
  );
};
