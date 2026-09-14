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
    title: 'Sobre a C.A. Rodrigues Transportes | Sarandi, Maringá e Arapongas-PR',
    description: `A C.A. Rodrigues Transportes atua desde ${BUSINESS.foundedYear} em ${BUSINESS.city}-${BUSINESS.state} e Maringá, com coletas em Arapongas. Especializada em cargas siderúrgicas, perfis de alumínio e cargas secas.`,
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
        description={`Desde ${BUSINESS.foundedYear}, atuando em ${BUSINESS.city} e Maringá-PR, com coletas frequentes no polo do alumínio de Arapongas. Foco em cargas siderúrgicas, perfis de alumínio e cargas secas para indústria.`}
      />
      <About />
      <CTASection />
    </div>
  );
};
