# Template Site Web - Avocat indépendant

Site web template optimisé pour la conversion, développé avec Next.js 14 (App Router), TypeScript et Tailwind CSS. Adapté aux avocats indépendants et cabinets d'avocats.

## 🚀 Installation

1. **Installer les dépendances :**
```bash
npm install
```

2. **Lancer le serveur de développement :**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur :**
```
http://localhost:3000
```

## 📁 Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page services
│   ├── specialisations/   # Page spécialisations
│   ├── a-propos/          # Page à propos
│   ├── prendre-rdv/       # Page contact/RDV
│   └── not-found.tsx      # Page 404
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── Section.tsx
│   ├── Card.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   └── FAQAccordion.tsx
├── lib/
│   └── content.ts        # Données typées (services, FAQ, témoignages)
└── public/               # Assets statiques
```

## 🎨 Personnalisation

### Modifier le contenu

Le contenu (services, FAQ, témoignages) est centralisé dans `lib/content.ts`. Modifiez ce fichier pour adapter le contenu à votre cabinet.

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts`. La couleur principale est `primary-600`.

### Ajouter une image hero

Remplacez le placeholder dans `app/page.tsx` par une vraie image :
1. Placez votre image dans `public/`
2. Utilisez le composant `next/image` pour l'afficher

### Intégrer un calendrier

Dans `app/prendre-rdv/page.tsx`, remplacez le placeholder du calendrier par votre solution (Calendly, Acuity, etc.).

## 🛠️ Build pour la production

```bash
npm run build
npm start
```

## ✨ Fonctionnalités

- ✅ 5 pages optimisées pour la conversion
- ✅ Design responsive mobile-first
- ✅ SEO-friendly (metadata par page)
- ✅ Accessible (ARIA, focus states)
- ✅ Composants réutilisables
- ✅ TypeScript pour la sécurité de type
- ✅ Tailwind CSS pour le styling
- ✅ Formulaire de contact avec validation
- ✅ FAQ interactive (accordéon)
- ✅ Témoignages clients
- ✅ Page 404 personnalisée

## 📝 Notes

- Tous les textes sont en français et orientés conversion
- Les CTAs principaux pointent vers "Prendre rendez-vous" ou "Prendre un RDV gratuit (30 min)"
- Les CTAs secondaires pointent vers "Demander un devis" ou les pages domaines / services
- Le design est sobre et premium, adapté à un cabinet d'avocat

## 🔧 Technologies utilisées

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Next/Image pour l'optimisation d'images
- Next/Link pour la navigation
