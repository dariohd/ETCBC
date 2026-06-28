# ETCBC — Documentation projet

Site professionnel pour **ETCBC** (Entreprise Turpin Construction Bois Charpente) — charpentier, couvreur et menuisier à Jumilhac-le-Grand (Dordogne).

| | |
|---|---|
| **URL production** | https://www.etcbc-charpente.com |
| **Dépôt GitHub** | [github.com/dariohd/ETCBC](https://github.com/dariohd/ETCBC) |
| **Hébergement** | Vercel |
| **Création** | [Bulle ton site](https://bulletonsite.com) — Hugo Davion |

---

## Stack technique

- HTML5, CSS3, JavaScript vanilla (modules ES)
- Polices auto-hébergées (`/fonts/`)
- Galerie chantiers filtrable (données JSON + JS)
- Formulaire contact → **FormSubmit** (`contact@etcbc-charpente.fr`)
- **sharp** (Node) pour scripts d'optimisation images
- Vercel : clean URLs, CSP iframe, cache assets

---

## Fonctionnalités

- **6 métiers** : charpente, aménagement combles, construction bois, couverture, menuiseries, réalisations
- **Galerie filtrable** par type de chantier (`realisations.html` + `data/realisations.json`)
- **Zone d'intervention** : carte OpenStreetMap intégrée
- **FAQ** structurée (SEO local Dordogne)
- **Devis / contact** : formulaire avec notification email client
- SEO : JSON-LD (`js/seo.js`), canonicals, `sitemap.xml`, meta Open Graph
- **Mentions légales** complètes (LCEN, RGPD, cookies)
- Responsive : 1100 / 1024 / 768 / 480 px

---

## Structure du projet

```
ETCBC/
├── index.html
├── charpente.html, amenagement-combles.html, construction-bois.html
├── couverture.html, menuiseries.html, realisations.html
├── contact.html, mentions-legales.html
├── css/styles.css
├── js/main.js, seo.js
├── data/realisations.json
├── fonts/
├── images/gallery/     # WebP chantiers
├── scripts/
│   ├── vendor-fonts.mjs
│   ├── patch-clean-urls.mjs
│   ├── download-photos.mjs
│   └── process-logo.mjs
├── vercel.json
├── sitemap.xml
└── robots.txt
```

---

## Prérequis

- Node.js 18+ (scripts images / polices)
- Compte Vercel + domaine `etcbc-charpente.com`

---

## Développement local

```bash
npm install          # sharp pour les scripts
npx serve . -l 3457
```

→ **http://localhost:3457**

Ne pas ouvrir `index.html` directement (modules ES + chemins absolus).

---

## Scripts de maintenance

```bash
node scripts/vendor-fonts.mjs       # Polices locales CNIL
node scripts/patch-clean-urls.mjs   # Liens sans .html + sitemap
node scripts/download-photos.mjs    # Import photos galerie
node scripts/process-logo.mjs       # Optimisation logo
```

---

## Variables & services

| Service | Détail |
|---------|--------|
| **FormSubmit** | Emails vers `contact@etcbc-charpente.fr` uniquement |
| **OpenStreetMap** | Embed carte contact |
| **Vercel** | Production + redirects clean URLs |

Configuration site : constante `SITE` dans `js/main.js`.

---

## Déploiement

1. `git push origin main` → build Vercel automatique
2. Vérifier :
   - https://www.etcbc-charpente.com/charpente (sans `.html`)
   - Redirections 301 depuis anciennes URLs `.html`
   - Formulaire contact → email Hadrien Turpin
   - Galerie filtres fonctionnels

---

## SEO & données structurées

- `js/seo.js` : LocalBusiness, FAQ, WebSite, BreadcrumbList
- URL de base canonique : `https://www.etcbc-charpente.com`
- Sitemap : 8 pages indexables

---

## Conformité

- `/mentions-legales` : éditeur ETCBC, hébergeur Vercel, FormSubmit, CNIL
- Crédit : Bulle ton site
- Polices : hébergement local (pas de Google Fonts)

---

## Contact projet

- **Client** : Hadrien Turpin — ETCBC, Jumilhac-le-Grand
- **Email** : contact@etcbc-charpente.fr
- **Développement** : [bulletonsite.com](https://bulletonsite.com)
