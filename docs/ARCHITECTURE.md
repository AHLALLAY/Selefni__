# 🏗️ Architecture de l'application Salefni

## Vue d'ensemble

Salefni est une application web React moderne qui permet la simulation de crédits et la gestion des demandes de financement. L'architecture suit les principes de séparation des responsabilités et de modularité.

## Architecture technique

### Stack technologique

- **Frontend** : React 19.1.1 avec fonctionnal components et hooks
- **Build Tool** : Vite 7.1.7 (alternative rapide à Create React App)
- **Routing** : React Router v7.9.5
- **Gestion d'état** : useState/useEffect (Context API à venir)
- **Styling** : Tailwind CSS 3.4 (framework CSS utilitaire)
- **Backend mocké** : json-server 1.0.0-beta.3 avec middleware personnalisé
- **Validation** : HTML5 native avec contraintes min/max/required

### Structure des dossiers

```
src/
├── main.jsx                 # Point d'entrée React
├── App.jsx                  # Composant racine avec routing
├── index.css                # Styles globaux Tailwind
│
├── layouts/                 # Layouts de l'application
│   └── layouts.jsx          # Layout principal avec Header et Footer
│
├── services/               # Couche d'accès aux données
│   ├── api.js              # Service API centralisé pour json-server
│   ├── creditService.js    # Services pour les types de crédit, emploi, métiers
│   └── authService.js      # Services d'authentification (à compléter)
│
├── components/             # Composants réutilisables
│   ├── header.jsx          # Header avec navigation
│   └── footer.jsx          # Footer de l'application
│
├── pages/                  # Pages de l'application
│   ├── home.jsx            # Page d'accueil
│   ├── simulation.jsx      # Page de simulation de crédit
│   └── connexion.jsx       # Page de connexion admin
│
└── assets/                 # Assets statiques
    └── landingPage.png     # Image de la page d'accueil
```

**Note** : Les dossiers `contexts/`, `utils/`, et les pages Admin/ApplicationForm seront créés lors du développement des fonctionnalités correspondantes.

## Flux de données

### 1. Chargement des données de référence (actuel)
```
Page Simulation → creditService.getCreditTypes() → api.js → json-server → db.json
Page Simulation → creditService.getEmploymentTypes() → api.js → json-server → db.json
Page Simulation → creditService.getJobs() → api.js → json-server → db.json
```

### 2. Authentification (à venir)
```
User → Connexion → authService.login() → AuthContext → localStorage
```

### 3. Simulation de crédit (à venir)
```
User → Simulation → calculateMonthlyPayment() → simulationService.create() → db.json
```

### 4. Création de demande (à venir)
```
User → ApplicationForm → applicationService.create() → notificationService.create() → db.json
```

### 5. Gestion admin (à venir)
```
Admin → AdminDashboard → applicationService.getAll() → Affichage liste
Admin → ApplicationDetail → applicationService.update() → db.json
```

## Gestion d'état

Actuellement, l'application utilise **useState** et **useEffect** pour la gestion d'état locale dans les composants.

**À venir** : L'application utilisera **Context API** pour la gestion d'état globale :
- **AuthContext** : Gestion de l'authentification admin
- **NotificationContext** : Gestion des notifications

## Services API

Les services API sont organisés de manière modulaire :

### api.js
Service centralisé qui gère toutes les communications HTTP avec json-server :
- Fonction `handleEndpoint()` : Gestion centralisée des appels fetch
- Gestion d'erreurs unifiée
- Configuration de l'URL de base (`http://localhost:3001`)

### creditService.js
Services pour récupérer les données de référence :
- `getCreditTypes()` : Récupère les types de crédit disponibles
- `getEmploymentTypes()` : Récupère les types d'emploi
- `getJobs()` : Récupère la liste des métiers

### authService.js
Services d'authentification (à compléter) :
- `login()` : Authentification admin (à implémenter)

**À venir** : Services pour les simulations, demandes et notifications

## Calculs de crédit

**À venir** : Le module `utils/creditCalculations.js` contiendra toutes les fonctions de calcul :

- `calculateMonthlyPayment()` : Calcul de la mensualité (formule d'annuité)
- `calculateTotalCost()` : Coût total du crédit
- `calculateAPR()` : TAEG simplifié
- `generateAmortizationTable()` : Tableau d'amortissement complet
- `formatCurrency()` : Formatage des montants

### Formule de calcul de la mensualité

```
M = (C × r × (1 + r)^n) / ((1 + r)^n - 1)
```

Où :
- M = Mensualité
- C = Capital (montant du crédit)
- r = Taux mensuel (taux annuel / 12 / 100)
- n = Nombre de mois

## Routing

Le routing est géré par React Router v7.9.5 dans `App.jsx` :

**Routes actuellement implémentées :**
- `/` : Page d'accueil (Home)
- `/simulation` : Simulation de crédit
- `/connexion` : Page de connexion admin

**Routes à venir :**
- `/simulation/:id` : Simulation existante
- `/application/:simulationId` : Formulaire de demande
- `/admin` : Tableau de bord admin
- `/admin/applications/:id` : Détail d'une demande

## Sécurité

**Actuellement implémenté :**
- Validation des données côté UI (required, min, max, formats)

**À venir :**
- Authentification basique côté client (non sécurisée pour un environnement de production)
- Protection des routes admin via `useAuth()` hook

## Performance

- **Code splitting** : Vite génère automatiquement des chunks optimisés
- **Lazy loading** : Possibilité d'implémenter React.lazy() pour les pages
- **Memoization** : Utilisation possible de `useMemo()` et `useCallback()` pour optimiser les re-renders

**À venir :**
- **Auto-refresh** : Notifications rafraîchies toutes les 30 secondes (configurable)

## Organisation des fichiers

### Structure racine
- `docs/` : Documentation technique du projet
- `server/` : Fichiers serveur (db.json, middleware.js)
- `src/` : Code source de l'application

### Organisation actuelle
- `src/pages/simulation.jsx` : Page principale de simulation avec formulaire intégré
- `src/components/header.jsx` : Composant Header avec navigation conditionnelle
- `src/components/footer.jsx` : Composant Footer
- `src/layouts/layouts.jsx` : Layout principal qui enveloppe les pages

**À venir** : Séparation des composants de simulation en composants réutilisables si nécessaire.

## Extensibilité

L'architecture permet d'ajouter facilement :

- **Nouvelles pages** : Créer un fichier dans `pages/` et ajouter la route dans `App.jsx`
- **Nouvelles routes** : Ajouter dans `App.jsx`
- **Nouveaux contextes** : Créer le dossier `contexts/` et ajouter les providers
- **Nouveaux services API** : Créer un fichier dans `services/` ou étendre `api.js`
- **Nouveaux utilitaires** : Créer le dossier `utils/` et ajouter les fonctions
- **Nouveaux composants** : Ajouter dans `components/` (regrouper par fonctionnalité si nécessaire)

## Bonnes pratiques respectées

✅ Séparation des responsabilités (Services / Components / Pages / Layouts)
✅ Composants fonctionnels avec hooks (useState, useEffect)
✅ Réutilisabilité des composants (Header, Footer, Layout)
✅ Gestion d'erreurs avec try/catch dans les services API
✅ Validation des données (HTML5 native)
✅ Formatage cohérent du code
✅ Structure modulaire et organisée
✅ Services API centralisés et réutilisables

**À améliorer :**
- Commentaires dans les fonctions complexes (à ajouter)
- Séparation des composants de simulation (à venir)

