# 📚 Dépendances et bibliothèques externes

## Dépendances principales (dependencies)

### React
- **react** (^19.1.1) : Bibliothèque JavaScript pour construire des interfaces utilisateur
- **react-dom** (^19.1.1) : Module DOM pour React
- **react-router-dom** (^7.9.5) : Routage déclaratif pour React

**Utilisation** : Framework principal de l'application, gestion du routing entre les pages.

## Dépendances de développement (devDependencies)

### Build et développement
- **vite** (^7.1.7) : Outil de build rapide et moderne, alternative à Create React App
- **@vitejs/plugin-react** (^5.0.4) : Plugin Vite pour React
- **concurrently** (^9.2.1) : Outil pour exécuter plusieurs commandes en parallèle

**Utilisation** : Serveur de développement, build de production, hot module replacement. Concurrently permet de lancer json-server et Vite simultanément avec `npm run dev:all`.

### TypeScript (optionnel)
- **@types/react** (^19.1.16) : Types TypeScript pour React
- **@types/react-dom** (^19.1.9) : Types TypeScript pour react-dom

**Utilisation** : Support TypeScript (actuellement non utilisé, mais disponible pour l'autocomplétion et la validation de types).

### Styling
- **tailwindcss** (^3.4) : Framework CSS utilitaire
- **autoprefixer** (^10.4.21) : Plugin PostCSS pour ajouter automatiquement les préfixes vendeurs
- **postcss** (^8.5.6) : Outil de transformation CSS

**Utilisation** : Styling de l'application avec classes utilitaires Tailwind.

### Backend mocké
- **json-server** (^1.0.0-beta.3) : Serveur REST API mocké utilisant un fichier JSON

**Utilisation** : Backend de développement pour simuler une API REST complète. Démarre sur le port 3001.

### ESLint
- **eslint** (^9.36.0) : Linter JavaScript
- **@eslint/js** (^9.36.0) : Configuration ESLint moderne
- **eslint-plugin-react-hooks** (^5.2.0) : Règles pour les hooks React
- **eslint-plugin-react-refresh** (^0.4.22) : Support du Fast Refresh de Vite
- **globals** (^16.4.0) : Variables globales pour ESLint

**Utilisation** : Vérification de la qualité du code et respect des bonnes pratiques React.

## Pourquoi ces choix ?

### Vite vs Create React App
- **Performance** : Vite est significativement plus rapide au démarrage
- **Hot Module Replacement** : Rechargement instantané des modifications
- **Build optimisé** : Génération de bundles optimisés pour la production

### Tailwind CSS vs CSS traditionnel
- **Rapidité de développement** : Classes utilitaires prêtes à l'emploi
- **Consistance** : Design system intégré
- **Maintenabilité** : Pas de CSS personnalisé dispersé
- **Performance** : Purge automatique du CSS non utilisé

### Gestion d'état
- **Actuellement** : useState et useEffect pour la gestion d'état locale
- **À venir** : Context API pour la gestion d'état globale (auth + notifications)
- **Simplicité** : Context API offre moins de boilerplate que Redux pour ce projet
- **Intégration native** : Pas de dépendance externe nécessaire

### json-server
- **Rapidité** : Pas besoin de configurer un vrai backend
- **RESTful** : API REST complète avec CRUD automatique
- **Middleware** : Possibilité d'ajouter des middlewares personnalisés
- **Développement** : Idéal pour le développement frontend

## Alternatives considérées

### Gestion d'état
- **Redux** : Trop complexe pour ce projet
- **Zustand** : Bonne alternative, mais Context API suffit

### Styling
- **Material-UI** : Plus lourd, composants pré-construits
- **Chakra UI** : Bonne alternative, mais Tailwind plus flexible

### Build
- **Create React App** : Plus lent, mais plus établi
- **Webpack** : Plus de configuration, mais plus de contrôle

## Versions et compatibilité

Toutes les versions sont spécifiées avec le préfixe `^` pour permettre les mises à jour mineures automatiques.

### Node.js
- **Version requise** : 18.0.0 ou supérieure
- **Version testée** : 18.x, 20.x

### Navigateurs supportés
- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## Mises à jour de sécurité

Pour vérifier les vulnérabilités :

```bash
npm audit
```

Pour corriger automatiquement :

```bash
npm audit fix
```

## Ajout de nouvelles dépendances

Avant d'ajouter une nouvelle dépendance, considérer :

1. **Nécessité** : Est-ce vraiment nécessaire ?
2. **Taille** : Impact sur la taille du bundle
3. **Maintenance** : Bibliothèque activement maintenue ?
4. **Compatibilité** : Compatible avec React 19 et les autres dépendances ?
5. **License** : License compatible avec le projet

