/* ETCBC — Données structurées JSON-LD pour le référencement */

const SEO_BASE = 'https://www.etcbc-charpente.fr';

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SEO_BASE}/#organization`,
  name: 'ETCBC — Entreprise Turpin Construction Bois Charpente',
  alternateName: 'ETCBC',
  description:
    'Charpentier, couvreur et constructeur bois à Jumilhac-le-Grand (Dordogne). Charpente, construction bois, couverture, menuiseries et aménagement de combles.',
  url: SEO_BASE,
  telephone: '+33619856122',
  email: 'contact@etcbc-charpente.fr',
  image: `${SEO_BASE}/images/gallery/realisation-10.webp`,
  logo: `${SEO_BASE}/images/logo.png`,
  priceRange: '€€',
  founder: { '@type': 'Person', name: 'Hadrien Turpin' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '210 route du parc naturel',
    addressLocality: 'Jumilhac-le-Grand',
    postalCode: '24630',
    addressRegion: 'Dordogne',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.3244,
    longitude: 1.0553,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Dordogne' },
    { '@type': 'City', name: 'Jumilhac-le-Grand' },
    { '@type': 'City', name: 'Périgueux' },
    { '@type': 'City', name: 'Limoges' },
    { '@type': 'City', name: 'Thiviers' },
    { '@type': 'City', name: 'Sarlat-la-Canéda' },
    { '@type': 'City', name: 'Bergerac' },
  ],
  sameAs: ['https://www.google.com/maps/search/?api=1&query=210+route+du+parc+naturel+24630+Jumilhac-le-Grand'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '8',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services ETCBC',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Charpente' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aménagement de combles' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction bois' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Couverture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Menuiseries' } },
    ],
  },
};

const PAGE_SEO = {
  index: {
    breadcrumbs: [{ name: 'Accueil', path: '/' }],
    service: null,
  },
  charpente: {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Charpente', path: '/charpente.html' },
    ],
    service: {
      name: 'Charpente',
      description:
        'Fabrication, pose et rénovation de charpentes traditionnelles, fermettes et lamellé-collé à Jumilhac-le-Grand et en Dordogne.',
    },
  },
  'amenagement-combles': {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Aménagement de combles', path: '/amenagement-combles.html' },
    ],
    service: {
      name: 'Aménagement de combles',
      description:
        'Transformation de combles en espaces habitables en Dordogne. Partenaire Combles d\'en France.',
    },
  },
  'construction-bois': {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Construction bois', path: '/construction-bois.html' },
    ],
    service: {
      name: 'Construction bois',
      description:
        'Maisons à ossature bois, extensions, surélévations et construction clé en main en Dordogne.',
    },
  },
  couverture: {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Couverture', path: '/couverture.html' },
    ],
    service: {
      name: 'Couverture',
      description:
        'Création et rénovation de toitures en tuile, ardoise, zinc et bac acier à Jumilhac-le-Grand.',
    },
  },
  menuiseries: {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Menuiseries', path: '/menuiseries.html' },
    ],
    service: {
      name: 'Menuiseries',
      description:
        'Menuiseries sur mesure en bois : fenêtres, portes, escaliers, terrasses et aménagements intérieurs.',
    },
  },
  realisations: {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Nos réalisations', path: '/realisations.html' },
    ],
    service: null,
  },
  contact: {
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Contact', path: '/contact.html' },
    ],
    service: null,
  },
};

const CONTACT_FAQ = [
  {
    question: 'Dans quel délai recevrai-je un devis ?',
    answer:
      'Nous vous répondons sous 48 h ouvrées après réception de votre demande. Pour les projets complexes, une visite sur site peut être nécessaire avant l\'établissement du devis détaillé.',
  },
  {
    question: 'Intervenez-vous à Limoges, Périgueux et Thiviers ?',
    answer:
      'Oui. ETCBC intervient principalement en Dordogne et dans un rayon d\'environ 50 km autour de Jumilhac-le-Grand, notamment à Périgueux, Limoges, Thiviers, Ribérac, Sarlat et Bergerac.',
  },
  {
    question: 'Quels types de travaux réalisez-vous ?',
    answer:
      'Nous réalisons la charpente, l\'aménagement de combles, la construction bois (ossature bois, extensions), la couverture (tuile, ardoise, zinc, bac acier) et les menuiseries sur mesure.',
  },
  {
    question: 'Le devis est-il gratuit ?',
    answer:
      'Oui, le devis est gratuit et sans engagement. Contactez Hadrien Turpin par téléphone au 06 19 85 61 22 ou via le formulaire de contact.',
  },
  {
    question: 'Êtes-vous partenaire Combles d\'en France ?',
    answer:
      'Oui, ETCBC est partenaire Combles d\'en France pour l\'aménagement de combles. Nous assurons la partie structurelle : renforcement de charpente, poutre espace et préparation des combles.',
  },
];

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_BASE}${item.path}`,
    })),
  };
}

function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@id': `${SEO_BASE}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Dordogne' },
  };
}

function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_BASE}/#website`,
    url: SEO_BASE,
    name: 'ETCBC — Charpente & Construction bois',
    description: 'Site officiel d\'ETCBC, charpentier et couvreur à Jumilhac-le-Grand.',
    publisher: { '@id': `${SEO_BASE}/#organization` },
    inLanguage: 'fr-FR',
  };
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function injectJsonLd(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

(function initSeoSchema() {
  const pageKey = document.documentElement.dataset.seoPage || 'index';
  const page = PAGE_SEO[pageKey];
  if (!page) return;

  injectJsonLd(LOCAL_BUSINESS);

  if (pageKey === 'index') {
    injectJsonLd(webSiteSchema());
  }

  if (page.breadcrumbs.length > 0) {
    injectJsonLd(breadcrumbSchema(page.breadcrumbs));
  }

  if (page.service) {
    injectJsonLd(serviceSchema(page.service));
  }

  if (pageKey === 'contact') {
    injectJsonLd(faqSchema(CONTACT_FAQ));
  }
})();
