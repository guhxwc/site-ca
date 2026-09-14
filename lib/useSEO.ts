import { useEffect } from 'react';
import { SITE_URL } from './business';

type SEOInput = {
  title: string; // já deve incluir "| C.A. Rodrigues" quando fizer sentido
  description: string; // ~150-160 caracteres
  path: string; // ex: "/transporte-perfis-aluminio"
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
};

function setMeta(nameOrProp: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${nameOrProp}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(nameOrProp, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Aplica título, meta description, canonical, Open Graph e JSON-LD para a
 * página atual. Como o site é uma SPA (Vite + React, sem SSR/prerender),
 * essa troca acontece via JS logo após a navegação — o Googlebot atual
 * executa JS e consegue ler isso, mas o ideal a médio prazo é migrar para
 * uma stack com pré-renderização (SSG) para expor o HTML já pronto.
 */
export function useSEO({ title, description, path, jsonLd, ogImage }: SEOInput) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:locale', 'pt_BR');
    if (ogImage) setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    } else {
      document.getElementById('page-jsonld')?.remove();
    }

    // Rola para o topo a cada troca de rota (navegação client-side não faz isso sozinha)
    window.scrollTo(0, 0);
  }, [title, description, path, ogImage, jsonLd]);
}
