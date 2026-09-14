import { BUSINESS, LOCAL_AREAS, SITE_URL } from './business';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.brandName,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.foundedYear),
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: BUSINESS.country,
    },
    areaServed: [
      ...LOCAL_AREAS.map((a) => ({
        '@type': 'City',
        name: a.city,
        containedInPlace: { '@type': 'State', name: 'Paraná' },
      })),
      { '@type': 'Country', name: 'Brasil' },
    ],
    // taxID: ajuste/valide o formato antes de publicar (o Google não exige, mas ajuda a
    // desambiguar a entidade caso a empresa registre no Google Business Profile).
    taxID: BUSINESS.cnpj,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.brandName,
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
