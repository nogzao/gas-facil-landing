// Utilitários para SEO e geração de conteúdo dinâmico

export interface BairroSEO {
  bairro: string;
  cidade: string;
  slug: string;
  cidadeBase: string;
}

export function makeHeadline(bairro: string, cidade: string): string {
  const cidadeFormatted = cidade === "Rio de Janeiro" ? "Rio de Janeiro" : "Niterói";
  return `Conserto de aquecedores a gás em ${bairro} (${cidadeFormatted})`;
}

export function makeTitle(bairro: string): string {
  return `Conserto de aquecedores a gás em ${bairro} | Gás Fácil`;
}

export function makeDescription(bairro: string, cidade: string): string {
  const cidadeFormatted = cidade === "Rio de Janeiro" ? "Rio de Janeiro" : "Niterói";
  return `Assistência técnica em aquecedores a gás em ${bairro}, ${cidadeFormatted} - atendimento rápido, técnicos certificados. Agende pelo WhatsApp.`;
}

export function makeCanonicalUrl(cidadeBase: string, slug: string): string {
  return `https://www.gasfacil.com.br/${cidadeBase}/${slug}`;
}

export function makeBreadcrumbSchema(bairro: string, cidade: string, cidadeBase: string, slug: string) {
  const cidadeFormatted = cidade === "Rio de Janeiro" ? "Rio de Janeiro" : "Niterói";
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.gasfacil.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cidadeFormatted,
        "item": `https://www.gasfacil.com.br/${cidadeBase}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": bairro,
        "item": `https://www.gasfacil.com.br/${cidadeBase}/${slug}`
      }
    ]
  };
}

export function makeHVACBusinessSchema(bairro: string, cidade: string, cidadeBase: string, slug: string) {
  const cidadeFormatted = cidade === "Rio de Janeiro" ? "Rio de Janeiro" : "Niterói";
  
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Gás Fácil",
    "description": `Conserto de aquecedores a gás em ${bairro}, ${cidadeFormatted}`,
    "url": `https://www.gasfacil.com.br/${cidadeBase}/${slug}`,
    "telephone": "(21) 99613-1840",
    "email": "contato@gasfacil.com.br",
    "areaServed": {
      "@type": "City",
      "name": cidadeFormatted,
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cidadeFormatted,
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cidade === "Rio de Janeiro" ? "-22.9068" : "-22.8833",
      "longitude": cidade === "Rio de Janeiro" ? "-43.1729" : "-43.1036"
    },
    "openingHours": "Mo-Su 07:00-22:00",
    "priceRange": "$$",
    "serviceType": ["Conserto de aquecedores a gás", "Manutenção de aquecedores", "Assistência técnica"]
  };
}

export function updatePageSEO(seoData: BairroSEO) {
  // Update title
  document.title = makeTitle(seoData.bairro);
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', makeDescription(seoData.bairro, seoData.cidade));
  
  // Update canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', makeCanonicalUrl(seoData.cidadeBase, seoData.slug));
  
  // Add/Update JSON-LD schemas
  updateJsonLdSchema('breadcrumb-schema', makeBreadcrumbSchema(seoData.bairro, seoData.cidade, seoData.cidadeBase, seoData.slug));
  updateJsonLdSchema('hvac-business-schema', makeHVACBusinessSchema(seoData.bairro, seoData.cidade, seoData.cidadeBase, seoData.slug));
}

function updateJsonLdSchema(id: string, schema: object) {
  // Remove existing schema
  const existingSchema = document.getElementById(id);
  if (existingSchema) {
    existingSchema.remove();
  }
  
  // Add new schema
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}