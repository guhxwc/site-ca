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

// Cidades onde a operação realmente acontece (sede + coleta), usadas na
// página Regiões e Rotas e no schema LocalBusiness. Cada uma tem um papel
// diferente e verdadeiro — não é a mesma frase repetida trocando o nome.
export const LOCAL_AREAS = [
  {
    city: 'Sarandi',
    state: 'PR',
    role: 'Sede',
    desc: 'Matriz da C.A. Rodrigues Transportes desde 2012.',
  },
  {
    city: 'Maringá',
    state: 'PR',
    role: 'Operação',
    desc: 'Região metropolitana onde a empresa também opera e faz coletas.',
  },
  {
    city: 'Arapongas',
    state: 'PR',
    role: 'Coleta',
    desc: 'Polo do alumínio do Norte do Paraná — principal origem de carga da empresa.',
  },
] as const;

// Serviços — cada um vira uma página própria (arquitetura de "hub de assuntos").
// slug precisa bater com a rota definida em App.tsx.
// icon é a chave usada no mapa de ícones do Header (components/Header.tsx),
// não importamos lucide-react aqui pra manter esse arquivo livre de JSX.
export type ServiceKey =
  | 'perfis-aluminio'
  | 'cargas-siderurgicas'
  | 'cargas-secas'
  | 'logistica-dedicada';

export type ServiceIcon = 'Layers' | 'Factory' | 'Package' | 'Truck';

export const SERVICES: Record<
  ServiceKey,
  { slug: string; navTitle: string; pageTitle: string; shortDesc: string; menuDesc: string; icon: ServiceIcon }
> = {
  'perfis-aluminio': {
    slug: 'transporte-perfis-aluminio',
    navTitle: 'Perfis de Alumínio',
    pageTitle: 'Transporte de Perfis e Barras de Alumínio',
    shortDesc:
      'Transporte especializado de perfis e barras de alumínio, com amarração e acondicionamento pensados para evitar avaria e deformação.',
    menuDesc: 'Perfis e barras sem avarias',
    icon: 'Layers',
  },
  'cargas-siderurgicas': {
    slug: 'transporte-cargas-siderurgicas',
    navTitle: 'Cargas Siderúrgicas',
    pageTitle: 'Transporte de Cargas Siderúrgicas e Aço',
    shortDesc:
      'Transporte de produtos siderúrgicos, aço e derivados para indústria metalúrgica, com estrutura pensada para carga pesada.',
    menuDesc: 'Aço e derivados com segurança',
    icon: 'Factory',
  },
  'cargas-secas': {
    slug: 'transporte-cargas-secas',
    navTitle: 'Cargas Secas',
    pageTitle: 'Transporte de Cargas Secas',
    shortDesc:
      'Transporte rodoviário de cargas secas em geral, com abrangência nacional e acompanhamento de ponta a ponta.',
    menuDesc: 'Carga geral, todo o Brasil',
    icon: 'Package',
  },
  'logistica-dedicada': {
    slug: 'logistica-dedicada',
    navTitle: 'Logística Dedicada',
    pageTitle: 'Logística Dedicada para Indústria',
    shortDesc:
      'Veículo exclusivo e rotina de coleta combinada com a sua operação, para quem precisa de recorrência e previsibilidade.',
    menuDesc: 'Veículo exclusivo pra sua rotina',
    icon: 'Truck',
  },
};

export const SERVICE_LIST = Object.values(SERVICES);
