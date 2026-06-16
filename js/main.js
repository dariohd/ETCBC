/* ETCBC — Main JavaScript */

const SITE = {
  name: 'ETCBC',
  fullName: 'Entreprise Turpin Construction Bois Charpente',
  owner: 'Hadrien Turpin',
  siret: '931 522 700 00018',
  phone: '06 19 85 61 22',
  phoneLink: 'tel:+33619856122',
  email: 'contact@etcbc-charpente.fr',
  website: 'www.etcbc-charpente.fr',
  address: '210 route du parc naturel',
  city: '24630 Jumilhac-le-Grand',
  location: 'Jumilhac-le-Grand',
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=210+route+du+parc+naturel+24630+Jumilhac-le-Grand',
  mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=1.04%2C45.31%2C1.07%2C45.34&layer=mapnik&marker=45.3244%2C1.0553',
  logo: 'images/logo.png',
  logoFallback: 'images/logo.webp',
  partnerLogo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/137031/refonte/logo%20comblesdenfrance.png',
};

const NAV_ITEMS = [
  { href: 'index.html', label: 'Accueil' },
  { href: 'charpente.html', label: 'Charpente' },
  { href: 'construction-bois.html', label: 'Construction bois' },
  { href: 'couverture.html', label: 'Couverture' },
  { href: 'menuiseries.html', label: 'Menuiseries' },
  { href: 'realisations.html', label: 'Nos réalisations' },
  { href: 'contact.html', label: 'Contact' },
];

const DOMAINS = [
  {
    id: 'charpente',
    title: 'Charpente',
    href: 'charpente.html',
    image: 'images/gallery/realisation-10.webp',
    intro: 'Fabrication, pose, rénovation et modification de charpentes pour le neuf comme la rénovation.',
    skills: ['Charpentes traditionnelles', 'Fermettes & lamellé-collé', 'Carports, hauts-vents & terrasses', 'Aménagement de combles'],
    cta: 'Découvrir la charpente',
  },
  {
    id: 'construction-bois',
    title: 'Construction bois',
    href: 'construction-bois.html',
    image: 'images/gallery/realisation-18.webp',
    intro: 'Maisons à ossature bois, extensions et surélévations réalisées sur mesure.',
    skills: ['Maisons ossature bois', 'Agrandissements & extensions', 'Surélévation de bâtiments', 'Construction clé en main'],
    cta: 'Découvrir la construction bois',
  },
  {
    id: 'couverture',
    title: 'Couverture',
    href: 'couverture.html',
    image: 'images/gallery/realisation-06.webp',
    intro: 'Création et rénovation de toitures avec des matériaux durables et esthétiques.',
    skills: ['Tuiles mécaniques & plates', 'Ardoise & zinc', 'Bac acier', 'Rénovation complète de toiture'],
    cta: 'Découvrir la couverture',
  },
  {
    id: 'menuiseries',
    title: 'Menuiseries',
    href: 'menuiseries.html',
    image: 'images/gallery/realisation-04.webp',
    intro: "Menuiseries sur mesure en bois pour l'intérieur comme l'extérieur.",
    skills: ['Fenêtres & portes', 'Escaliers & aménagements', 'Terrasses en bois', 'Ouvrages extérieurs'],
    cta: 'Découvrir les menuiseries',
  },
];

const REVIEWS = [
  {
    name: 'Stephanie Marchal',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUygSESXPnDZXQJGg8yMlFazmUXu8lIHEJ4d8wHSrnbJXTmSFjLAg%3Ds120-c-rp-mo-br100',
    text: "Notre maçon et nous avons eu raison de faire confiance à M. Turpin ! Très bon travail sur cette pose de charpente pour réaliser une toiture au dessus de notre terrasse. Malgré la distance (travaux dans le dpt 77) tout s'est parfaitement déroulé. Il ne reste plus qu'à poser les tuiles !",
  },
  {
    name: 'Machiel Mathijssen',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKHWkIkLCSYdL9C507EDyTChqqSBAofl2RQ6bMG5Q8Ky26JPQ%3Ds120-c-rp-mo-br100',
    text: "Hadrien a fait un travail fantastique pour l'aménagement de nos combles. Non seulement il réfléchit avec vous et donne d'excellents conseils, mais il respecte aussi vos idées. Professionnel jusqu'au bout des doigts, toujours ponctuel et fiable. Nous le recommandons sans aucun doute !",
  },
  {
    name: 'mélanie Renard',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjVMAqnt6jXVfYbtv-QaAAI8j2H8UOPc6uhOqxVcbJ3ZOW4S6p0%3Ds120-c-rp-mo-br100',
    text: "Hadrien est un professionnel d'expérience qui sait s'adapter à la complexité du chantier. Nous le recommandons à la fois pour son professionnalisme, son sens de l'esthétique, son sérieux. Les délais ont été respectés, le chantier toujours laissé propre. Merci pour notre belle toiture.",
  },
  {
    name: 'Dimitri Maris',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjWgla3dZ0WPhIZB4DDK8hWaOrxIy4mq07aaDIeC73K9QMjYafo%3Ds120-c-rp-mo-br100',
    text: "Merci à Hadrien pour la réalisation de la nouvelle couverture de notre maison. L'ensemble du chantier s'est déroulé de la meilleure des manières malgré la météo. La réalisation de la toiture a été parfaite. Nous recommandons avec plaisir ETCBC à toute personne qui aurait besoin d'un bon charpentier couvreur.",
  },
  {
    name: 'Clémentine Bert',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIatJ5swe2-VVsxgTqsXbEVNOdPnCj9TehjieXVnzdb7CJuFA%3Ds120-c-rp-mo-br100',
    text: "Hadrien est intervenu pour reprendre notre charpente. Il est d'excellent conseil, honnête, ses prix sont justes et son travail fait avec passion. Nous sommes très satisfait de sa façon de travailler et du résultat obtenu. Nous recommandons chaudement cette entreprise.",
  },
  {
    name: 'Joël LIVYNS',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIleqRm1sK1Id2THR28zKfzu2Z_RqnFjqQQY0WojQgOG3X2Qg%3Ds120-c-rp-mo-br100',
    text: 'Très bon travail à un prix raisonnable.',
  },
  {
    name: 'Elevage de La Note Feutrée',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjViPgP6yJ954xXNQMXL6nnPa_BfOngtVKcdNBAMddbFMY60ZM4E%3Ds120-c-rp-mo-br100',
    text: "Travail de qualité et entreprise sérieuse ! Hadrien Turpin est un charpentier d'expérience, aussi efficace que passionné. Ses devis sont techniquement détaillés, expliqués et transparents. Les prix sont justes et le travail fait dans les délais. Je recommande.",
  },
  {
    name: 'Pierre VROOM',
    avatar: 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocI8VGKm7XNHQF1T9gnFPS6PSXMd9LDoC06K6BxX6sXJbfTMpw%3Ds120-c-rp-mo-br100',
    text: "Professionnel, sérieux et fiable. Contact humain très agréable. Nous avons fait refaire notre toit de hangar et le travail est excellent. Nous recommandons l'entreprise ETCBC et surtout Hadrien Turpin.",
  },
];

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function renderHeader() {
  const current = getCurrentPage();
  const navLinks = NAV_ITEMS.map(
    (item) => `<a href="${item.href}" class="${current === item.href ? 'active' : ''}">${item.label}</a>`
  ).join('');

  return `
    <header class="site-header" id="siteHeader">
      <div class="header-layout">
        <a href="index.html" class="site-logo" aria-label="Accueil ETCBC">
          <img src="${SITE.logo}" alt="${SITE.fullName}" onerror="this.onerror=null;this.src='${SITE.logoFallback}'">
        </a>
        <div class="header-aside">
          <div class="header-content">
            <div class="header-top">
              <a href="${SITE.phoneLink}" class="header-phone" aria-label="Appeler ${SITE.phone}">
                <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>${SITE.phone}</span>
              </a>
              <a href="contact.html" class="btn btn-primary header-cta">Devis gratuit</a>
            </div>
            <nav class="header-nav" id="navbar" aria-label="Navigation principale">
              <div class="nav-links" id="navLinks">${navLinks}</div>
              <button class="nav-toggle" id="navToggle" aria-label="Ouvrir le menu" aria-expanded="false">
                <span></span><span></span><span></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div class="nav-overlay" id="navOverlay"></div>
    </header>
  `;
}

function renderFooter() {
  const serviceLinks = DOMAINS.map((d) => `<a href="${d.href}">${d.title}</a>`).join('');

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${SITE.logo}" alt="${SITE.name}" width="80" height="92" onerror="this.onerror=null;this.src='${SITE.logoFallback}'">
            <p><strong>${SITE.fullName}</strong><br>${SITE.owner}<br>SIRET : ${SITE.siret}</p>
            <p style="margin-top:0.75rem">Charpente · Construction bois · Couverture · Menuiseries<br>${SITE.address} — ${SITE.city}</p>
          </div>
          <div class="footer-links">
            <h4>Services</h4>
            ${serviceLinks}
          </div>
          <div class="footer-links">
            <h4>Navigation</h4>
            <a href="index.html">Accueil</a>
            <a href="realisations.html">Nos réalisations</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-links">
            <h4>Contact</h4>
            <a href="${SITE.phoneLink}">${SITE.phone}</a>
            <a href="mailto:${SITE.email}" style="display:block;margin-top:0.35rem">${SITE.email}</a>
            <p style="margin-top:0.5rem">${SITE.address}<br>${SITE.city}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} ${SITE.name} — ${SITE.fullName}</span>
          <a href="contact.html">Législation &amp; RGPD</a>
        </div>
      </div>
    </footer>
    <div class="floating-cta">
      <a href="${SITE.phoneLink}" class="phone-btn" aria-label="Appeler">&#9742;</a>
      <a href="#" class="top-btn" id="backToTop" aria-label="Retour en haut">&#8593;</a>
    </div>
  `;
}

function renderReviews() {
  const cards = REVIEWS.map(
    (r) => `
      <div class="review-card">
        <div class="review-card-inner">
          <p class="review-text">${r.text}</p>
          <div class="review-author">
            <img src="${r.avatar}" alt="${r.name}" width="48" height="48" loading="lazy">
            <div class="review-author-info">
              <div class="name">${r.name}</div>
              <div class="source">Avis Google</div>
            </div>
          </div>
        </div>
      </div>
    `
  ).join('');

  const dots = REVIEWS.map((_, i) => `<button data-index="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Avis ${i + 1}"></button>`).join('');

  return `
    <section class="reviews" id="avis">
      <div class="container">
        <div class="reviews-header reveal">
          <div class="section-title" style="text-align:left;margin:0">
            <h2>Les avis de nos clients</h2>
            <div class="accent-line" style="margin-left:0"></div>
          </div>
          <div class="reviews-score">
            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="score">5.0</span>
            <span style="color:var(--text-light)">(${REVIEWS.length} avis)</span>
          </div>
        </div>
        <div class="reviews-slider reveal">
          <div class="reviews-track" id="reviewsTrack">${cards}</div>
          <div class="reviews-nav">
            <button id="reviewPrev" aria-label="Avis précédent">&#8592;</button>
            <div class="reviews-dots" id="reviewDots">${dots}</div>
            <button id="reviewNext" aria-label="Avis suivant">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initDomainsHome() {
  const container = document.getElementById('domainsGrid');
  if (!container) return;

  container.innerHTML = DOMAINS.map(
    (d) => `
    <article class="domain-card reveal" id="domain-${d.id}">
      <div class="domain-card-image">
        <img src="${d.image}" alt="${d.title} — ETCBC" width="600" height="280" loading="lazy">
        <span class="domain-card-tag">${d.title}</span>
      </div>
      <div class="domain-card-body">
        <h3>${d.title}</h3>
        <p class="domain-intro">${d.intro}</p>
        <ul class="domain-skills">
          ${d.skills.map((s) => `<li>${s}</li>`).join('')}
        </ul>
        <a href="${d.href}" class="btn btn-primary">${d.cta}</a>
      </div>
    </article>`
  ).join('');
}

function initNavigation() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  if (!toggle) return;

  function closeMenu() {
    toggle.classList.remove('open');
    links.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeMenu);
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
}

function initScrollEffects() {
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
  });

  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));
}

function initReviewsSlider() {
  const track = document.getElementById('reviewsTrack');
  const dots = document.getElementById('reviewDots');
  if (!track) return;

  let current = 0;
  const total = REVIEWS.length;
  let autoplay;

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.querySelectorAll('button').forEach((btn, i) => btn.classList.toggle('active', i === current));
  }

  document.getElementById('reviewPrev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('reviewNext')?.addEventListener('click', () => goTo(current + 1));
  dots?.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => goTo(parseInt(btn.dataset.index)));
  });

  function startAutoplay() {
    autoplay = setInterval(() => goTo(current + 1), 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }

  document.getElementById('reviewPrev')?.addEventListener('click', resetAutoplay);
  document.getElementById('reviewNext')?.addEventListener('click', resetAutoplay);
  startAutoplay();
}

function initGalleryFilter() {
  const filters = document.querySelectorAll('.gallery-filters button');
  const items = document.querySelectorAll('.gallery-item');
  if (!filters.length) return;

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach((item) => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.display = show ? '' : 'none';
        if (show) item.classList.add('visible');
      });
    });
  });
}

async function initGalleryPage() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  try {
    const res = await fetch('data/gallery.json');
    const photos = await res.json();
    grid.innerHTML = photos
      .map(
        (p) => `
      <div class="gallery-item reveal" data-category="${p.category}">
        <img src="${p.file}" alt="${p.alt}" width="400" height="300" loading="lazy">
        <div class="gallery-item-overlay"><span>${p.label}</span></div>
      </div>`
      )
      .join('');

    grid.querySelectorAll('.reveal').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });

    initGalleryFilter();
  } catch (err) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Impossible de charger la galerie.</p>';
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message envoyé !';
    btn.disabled = true;
    btn.style.background = 'var(--secondary)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

function initHero() {
  const hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(() => hero.classList.add('loaded'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const reviewsEl = document.getElementById('site-reviews');

  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();
  if (reviewsEl) reviewsEl.innerHTML = renderReviews();

  initDomainsHome();
  initNavigation();
  initScrollEffects();
  initReviewsSlider();
  initGalleryFilter();
  initGalleryPage();
  initContactForm();
  initHero();
});
