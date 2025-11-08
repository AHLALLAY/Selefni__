# 📦 Guide d'installation et de configuration - Salefni

## Prérequis

- **Node.js** (version 18 ou supérieure)
- **npm** ou **yarn**

## Installation

1. **Installer les dépendances**

```bash
npm install
```

## Démarrage

### Option 1 : Démarrer les deux serveurs ensemble (Recommandé)

Dans un seul terminal, lancez les deux serveurs en même temps :

```bash
npm run dev:all
```

Cette commande démarre automatiquement :
- Le serveur json-server sur `http://localhost:3001`
- L'application React sur `http://localhost:5173` (port par défaut de Vite)

### Option 2 : Démarrer les serveurs séparément

**1. Démarrer le serveur JSON (Backend mocké)**

Dans un premier terminal, lancez le serveur json-server :

```bash
npm run server
```

Le serveur sera accessible sur `http://localhost:3001`

**2. Démarrer l'application React (Frontend)**

Dans un second terminal, lancez l'application :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (port par défaut de Vite)

**Note importante :** Le serveur json-server doit être démarré avant l'application React si vous utilisez l'option 2.

## Structure du projet

```
slfni/
├── docs/                     # Documentation
│   ├── README_INSTALLATION.md
│   ├── ARCHITECTURE.md
│   ├── DEPENDENCIES.md
│   └── PLANIFICATION_JIRA.html
├── server/                   # Fichiers serveur
│   ├── db.json              # Base de données JSON (json-server)
│   └── middleware.js        # Middleware pour json-server (vide pour l'instant)
├── public/                   # Assets statiques
│   └── salefni-*.png        # Images de l'application
├── src/                      # Code source de l'application
│   ├── main.jsx             # Point d'entrée React
│   ├── App.jsx              # Composant racine avec routing
│   ├── index.css            # Styles globaux Tailwind
│   ├── layouts/             # Layouts de l'application
│   │   └── layouts.jsx      # Layout principal avec Header et Footer
│   ├── services/            # Services API
│   │   ├── api.js           # Service API centralisé
│   │   ├── creditService.js # Services pour crédits, emploi, métiers
│   │   └── authService.js   # Services d'authentification (à compléter)
│   ├── components/          # Composants réutilisables
│   │   ├── header.jsx       # Header avec navigation
│   │   └── footer.jsx      # Footer
│   ├── pages/               # Pages de l'application
│   │   ├── home.jsx         # Page d'accueil
│   │   ├── simulation.jsx   # Page de simulation de crédit
│   │   └── connexion.jsx    # Page de connexion admin
│   └── assets/              # Assets statiques
│       └── landingPage.png  # Image de la page d'accueil
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind CSS
├── postcss.config.js        # Configuration PostCSS
├── eslint.config.js         # Configuration ESLint
├── index.html               # Point d'entrée HTML
└── README.md                # README principal
```

## Scripts disponibles

- `npm run dev` : Démarrer le serveur de développement React
- `npm run dev:all` : Démarrer les deux serveurs en même temps (json-server + React)
- `npm run build` : Construire l'application pour la production
- `npm run preview` : Prévisualiser le build de production
- `npm run server` : Démarrer le serveur json-server uniquement

## Accès à l'application

### Espace Guest (non authentifié)
- Accueil : `http://localhost:5173/`
- Simulation : `http://localhost:5173/simulation`
- Connexion : `http://localhost:5173/connexion`

**Routes à venir :**
- Formulaire de demande : `http://localhost:5173/application/:simulationId`

### Espace Admin
**Routes à venir :**
- Tableau de bord : `http://localhost:5173/admin`
- Détail d'une demande : `http://localhost:5173/admin/applications/:id`

**Identifiants de test :**
- Email : `abderrahmanahlalay76@gmail.com `
- Mot de passe : `admin`

## Technologies utilisées

- **React 19.1.1** : Framework JavaScript
- **Vite 7.1.7** : Outil de build et serveur de développement
- **React Router v7.9.5** : Gestion du routing
- **Tailwind CSS 3.4** : Framework CSS utilitaire
- **useState/useEffect** : Gestion d'état locale (Context API à venir)
- **json-server 1.0.0-beta.3** : Backend mocké pour les données
- **concurrently 9.2.1** : Exécution parallèle des serveurs

## Fonctionnalités implémentées

✅ Configuration de l'environnement de développement (Vite, ESLint, Tailwind)
✅ Structure du projet avec architecture modulaire
✅ Routing avec React Router
✅ Composants de navigation (Header, Footer, Layout)
✅ Configuration json-server avec db.json
✅ Services API centralisés (api.js, creditService.js)
✅ Formulaire de simulation avec tous les champs
✅ Validation HTML5 du formulaire (required, min/max)
✅ Chargement dynamique des données depuis json-server (types de crédit, emploi, métiers)

**À venir :**
- Calculs financiers (mensualité, TAEG, tableau d'amortissement)
- Création de demandes de crédit
- Espace admin avec gestion des demandes
- Notifications en temps réel
- Export PDF des simulations
- Export CSV des demandes

## Notes importantes

- Le serveur json-server doit être démarré avant l'application React (ou utiliser `npm run dev:all`)
- Les données sont persistées dans `server/db.json`
- Le port par défaut de Vite est 5173 (et non 3000)
- Le middleware `server/middleware.js` est vide pour l'instant (à implémenter)
- Les notifications seront créées automatiquement lors de la création d'une demande (à venir)

