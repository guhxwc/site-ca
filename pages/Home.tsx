import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { useSEO } from '../lib/useSEO';
import { localBusinessSchema } from '../lib/schema';
import { BUSINESS } from '../lib/business';

export const Home: React.FC = () => {
  useSEO({
    title: 'C.A. Rodrigues | Transportadora de Cargas Siderúrgicas e Perfis de Alumínio',
    description: `Transportadora especializada em cargas siderúrgicas e perfis de alumínio, sediada em ${BUSINESS.city}-${BUSINESS.state}. Atendimento nacional, desde ${BUSINESS.foundedYear}. Solicite uma cotação.`,
    path: '/',
    jsonLd: localBusinessSchema(),
  });

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
    </>
  );
};
