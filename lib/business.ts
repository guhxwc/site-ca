// Dados centrais da empresa — fonte única de verdade para textos, schema (JSON-LD)
// e metadados. Mudou telefone, endereço ou CNPJ? Só precisa mudar aqui.

export const SITE_URL = 'https://carodrigues.com';

export const BUSINESS = {
  legalName: 'C. A. Rodrigues dos Santos Transportes ME',
  brandName: 'C. A. Rodrigues Transportes',
  shortName: 'C. A. Rodrigues',
  cnpj: '15.663.543/0001-66',
  foundedYear: 2012,
  city: 'Sarandi',
  state: 'PR',
  stateFull: 'Paraná',
  region: 'Sarandi / Maringá – PR',
  country: 'BR',
  phoneDisplay: '(44) 99924-0991',
  phoneE164: '+5544999240991',
  whatsappNumber: '5544999240991',
  email: 'carlosrodrigues.transportes@gmail.com',
} as const;

// Serviços — cada um vira uma página própria (arquitetura de "hub de assuntos").
// slug precisa bater com a rota definida em App.tsx.
export type ServiceKey =
  | 'perfis-aluminio'
  | 'cargas-siderurgicas'
  | 'cargas-secas'
  | 'logistica-dedicada';

export const SERVICES: Record<
  ServiceKey,
  { slug: string; navTitle: string; pageTitle: string; shortDesc: string }
> = {
  'perfis-aluminio': {
    slug: 'transporte-perfis-aluminio',
    navTitle: 'Perfis de Alumínio',
    pageTitle: 'Transporte de Perfis e Barras de Alumínio',
    shortDesc:
      'Transporte especializado de perfis e barras de alumínio, com amarração e acondicionamento pensados para evitar avaria e deformação.',
  },
  'cargas-siderurgicas': {
    slug: 'transporte-cargas-siderurgicas',
    navTitle: 'Cargas Siderúrgicas',
    pageTitle: 'Transporte de Cargas Siderúrgicas e Aço',
    shortDesc:
      'Transporte de produtos siderúrgicos, aço e derivados para indústria metalúrgica, com estrutura pensada para carga pesada.',
  },
  'cargas-secas': {
    slug: 'transporte-cargas-secas',
    navTitle: 'Cargas Secas',
    pageTitle: 'Transporte de Cargas Secas',
    shortDesc:
      'Transporte rodoviário de cargas secas em geral, com abrangência nacional e acompanhamento de ponta a ponta.',
  },
  'logistica-dedicada': {
    slug: 'logistica-dedicada',
    navTitle: 'Logística Dedicada',
    pageTitle: 'Logística Dedicada para Indústria',
    shortDesc:
      'Veículo exclusivo e rotina de coleta combinada com a sua operação, para quem precisa de recorrência e previsibilidade.',
  },
};

export const SERVICE_LIST = Object.values(SERVICES);
