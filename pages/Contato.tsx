import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Contact } from '../components/Contact';
import { useSEO } from '../lib/useSEO';
import { breadcrumbSchema } from '../lib/schema';
import { BUSINESS } from '../lib/business';

export const Contato: React.FC = () => {
  useSEO({
    title: 'Cotação e Contato | C.A. Rodrigues Transportes',
    description: `Solicite uma cotação de transporte rodoviário de cargas. C.A. Rodrigues Transportes, ${BUSINESS.city}-${BUSINESS.state}. Telefone/WhatsApp ${BUSINESS.phoneDisplay}.`,
    path: '/contato',
    jsonLd: breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Contato', path: '/contato' },
    ]),
  });

  return (
    <div className="pt-8">
      <Breadcrumbs items={[{ name: 'Início', path: '/' }, { name: 'Contato', path: '/contato' }]} />
      <Contact />
    </div>
  );
};
