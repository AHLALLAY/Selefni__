# 📋 Planification JIRA - Salefni

## Epic 1: Configuration et Infrastructure Technique

### User Story 1.1 : Configuration de l'environnement de développement
**En tant que** développeur  
**Je veux** configurer l'environnement de développement  
**Afin de** pouvoir commencer à développer l'application

#### Tasks :
- **Task 1.1.1** : Initialiser le projet React avec Vite ou CRA
  - Exécuter la commande d'initialisation et tester que l'application démarre correctement avec build fonctionnel.
- **Task 1.1.2** : Configurer les outils de développement (ESLint, Prettier optionnel, Tailwind CSS)
  - Installer et configurer ESLint, Prettier (optionnel) et Tailwind CSS pour assurer la qualité du code et le styling cohérent.

### User Story 1.2 : Configuration de la structure du projet
**En tant que** développeur  
**Je veux** structurer le projet selon les bonnes pratiques  
**Afin de** maintenir un code organisé et modulaire

#### Tasks :
- **Task 1.2.1** : Créer l'architecture de dossiers
  - Créer les dossiers supplémentaires (components, pages, services, utils, hooks, contexts) et organiser les assets (images, styles).
- **Task 1.2.2** : Documenter les conventions de nommage (PascalCase pour composants, camelCase pour fonctions)
  - Créer un document définissant les conventions de nommage : PascalCase pour les composants React et camelCase pour les fonctions et variables.

### User Story 1.3 : Configuration du routing
**En tant que** développeur  
**Je veux** configurer le système de navigation  
**Afin de** permettre la navigation entre les pages

#### Tasks :
- **Task 1.3.1** : Installer et configurer React Router (ou créer un système personnalisé)
  - Installer react-router-dom, créer le Router principal et définir les routes de base (Home, Simulation, Admin).
- **Task 1.3.2** : Créer les composants de navigation (Navbar/Header, liens de navigation, navigation conditionnelle Guest/Admin)
  - Développer les composants de navigation avec Navbar/Header, liens de navigation et navigation conditionnelle selon le rôle (Guest/Admin).

### User Story 1.4 : Configuration de la gestion d'état
**En tant que** développeur  
**Je veux** configurer la gestion d'état globale  
**Afin de** partager les données entre les composants

#### Tasks :
- **Task 1.4.1** : Installer et configurer la solution de gestion d'état (Context API / Redux / Zustand)
  - Installer la solution choisie (Context API / Redux / Zustand), créer les stores/contexts de base (AuthProvider si nécessaire, DataProvider) et envelopper l'application avec les providers.

### User Story 1.5 : Configuration du backend mocké (json-server)
**En tant que** développeur  
**Je veux** configurer json-server  
**Afin de** simuler une API backend

#### Tasks :
- **Task 1.5.1** : Créer le fichier db.json avec la structure de données
  - Définir les schémas de données pour simulations, demandes et notifications dans le fichier db.json.
- **Task 1.5.2** : Configurer json-server et créer les services API
  - Installer json-server, créer script de démarrage, configurer routes et middlewares (timestamps, tri par défaut) puis créer les services API (simulations: get/post, demandes: get/post/put/patch, notifications: get/post/patch).

### User Story 1.6 : Configuration des styles
**En tant que** développeur  
**Je veux** configurer Tailwind CSS  
**Afin de** styliser l'application de manière cohérente

#### Tasks :
- **Task 1.6.1** : Installer et configurer Tailwind CSS
  - Installer les dépendances Tailwind CSS, configurer tailwind.config.js et ajouter les directives dans le CSS principal.
- **Task 1.6.2** : Créer le système de design de base (couleurs, composants UI de base Button/Card/Input, layout responsive)
  - Définir la palette de couleurs, créer les composants UI de base (Button, Card, Input) et établir le layout responsive pour l'application.

---

## Epic 2: Simulation de Crédit (Guest)

### User Story 2.1 : Création du formulaire de simulation
**En tant que** visiteur (Guest)  
**Je veux** remplir un formulaire pour simuler un crédit  
**Afin de** connaître les conditions de financement

#### Tasks :
- **Task 2.1.1** : Créer le composant de formulaire de simulation avec tous les champs
  - Implémenter les champs du formulaire : Type de crédit (select), Métier, Montant, Durée (mois), Taux annuel (%), Frais fixes (optionnel), Assurance % (optionnel).
- **Task 2.1.2** : Implémenter la validation du formulaire (champs requis, min/max, formats, messages d'erreur)
  - Mettre en place la validation avec contraintes sur les champs requis, valeurs min/max, formats de données et messages d'erreur appropriés.

### User Story 2.2 : Calculs financiers
**En tant que** visiteur (Guest)  
**Je veux** voir les résultats de ma simulation  
**Afin de** connaître la mensualité et le coût total

#### Tasks :
- **Task 2.2.1** : Créer les fonctions de calcul (mensualité, coût total, TAEG simplifié, gestion frais fixes et assurance)
  - Développer les fonctions de calcul pour déterminer la mensualité, le coût total, le TAEG simplifié, avec gestion des frais fixes et de l'assurance.
- **Task 2.2.2** : Créer le tableau d'amortissement et l'affichage des résultats
  - Calculer intérêts/principal par période, créer composant d'affichage avec résumé (total intérêts/principal), afficher mensualité, coût total, TAEG et tableau d'amortissement (pagination optionnelle).

### User Story 2.3 : Enregistrement automatique des simulations
**En tant que** système  
**Je veux** enregistrer automatiquement chaque simulation  
**Afin de** transmettre les informations aux décideurs

#### Tasks :
- **Task 2.3.1** : Créer la logique d'enregistrement et l'intégrer dans le flux
  - Créer fonction pour sauvegarder dans db.json avec timestamp et gestion d'erreurs, appeler l'API après chaque calcul avec message de confirmation optionnel.

---

## Epic 3: Demande de Crédit (Guest)

### User Story 3.1 : Formulaire de demande de crédit
**En tant que** visiteur (Guest)  
**Je veux** créer une demande de crédit à partir d'une simulation  
**Afin de** soumettre ma demande de financement

#### Tasks :
- **Task 3.1.1** : Créer le composant de formulaire de demande et lier à la simulation
  - Implémenter les champs (Nom, Email avec validation, Téléphone avec validation, Revenu mensuel, Situation pro, Commentaire optionnel), afficher détails de la simulation choisie, passer l'ID et enregistrer la liaison.
- **Task 3.1.2** : Implémenter la validation (champs requis, format email/téléphone, affichage erreurs)
  - Valider les champs requis, formats email/téléphone et afficher les messages d'erreur appropriés pour chaque champ.

### User Story 3.2 : Soumission et accusé de réception
**En tant que** visiteur (Guest)  
**Je veux** recevoir une confirmation visuelle après soumission  
**Afin de** être rassuré que ma demande a été envoyée

#### Tasks :
- **Task 3.2.1** : Créer l'entité application et le composant d'accusé de réception
  - Créer fonction POST demande avec gestion d'erreurs et notification admin (voir Epic 5), créer page/composant confirmation avec message, résumé demande et navigation (retour accueil/nouvelle simulation).

### User Story 3.3 : Export PDF
**En tant que** visiteur (Guest)  
**Je veux** exporter ma simulation/demande en PDF  
**Afin de** conserver une trace de ma demande

#### Tasks :
- **Task 3.3.1** : Installer bibliothèque PDF et créer la fonction d'export
  - Installer react-pdf ou jsPDF, créer template PDF, générer PDF avec données simulation/demande et ajouter bouton d'export.

---

## Epic 4: Espace Administrateur

### User Story 4.1 : Tableau de bord des demandes
**En tant qu'** administrateur  
**Je veux** voir la liste de toutes les demandes  
**Afin de** gérer les demandes efficacement

#### Tasks :
- **Task 4.1.1** : Créer le composant de tableau de bord avec fonctionnalités de recherche/filtrage/tri
  - Récupérer demandes via API, afficher tableau/liste (nom, email, date, statut), implémenter filtrage par statut (Tous, En attente, En cours, Acceptée, Refusée) avec compteurs, recherche par nom/email en temps réel et tri par date (croissant/décroissant) avec indicateurs visuels et persistance état.

### User Story 4.2 : Fiche détaillée de demande
**En tant qu'** administrateur  
**Je veux** voir les détails complets d'une demande  
**Afin de** prendre une décision éclairée

#### Tasks :
- **Task 4.2.1** : Créer la page de détail avec historique et notes
  - Récupérer détails demande et simulation associée, afficher informations demandeur et récap simulation, créer composant historique (changements statut avec dates, notes associées) et afficher notes internes (auteur et date).

### User Story 4.3 : Gestion des statuts de demande
**En tant qu'** administrateur  
**Je veux** changer le statut d'une demande  
**Afin de** suivre l'avancement du traitement

#### Tasks :
- **Task 4.3.1** : Créer l'interface de changement de statut avec mise à jour historique
  - Créer select/dropdown avec statuts disponibles et validation changement autorisé, enregistrer changement dans base de données avec date/heure dans historique et rafraîchir affichage.

### User Story 4.4 : Gestion des notes internes
**En tant qu'** administrateur  
**Je veux** ajouter des notes internes à une demande  
**Afin de** documenter mes observations

#### Tasks :
- **Task 4.4.1** : Créer le composant d'ajout et sauvegarde de notes
  - Créer textarea avec bouton envoi et validation note non vide, enregistrer note avec timestamp, associer à demande et afficher dans liste.

### User Story 4.5 : Marquer une demande comme prioritaire
**En tant qu'** administrateur  
**Je veux** marquer une demande comme prioritaire  
**Afin de** la traiter en priorité

#### Tasks :
- **Task 4.5.1** : Ajouter fonctionnalité prioritaire
  - Ajouter champ dans db.json, créer toggle/bouton, créer badge/indicateur visuel et implémenter tri/filtre prioritaires en premier.

### User Story 4.6 : Export CSV
**En tant qu'** administrateur  
**Je veux** exporter les demandes en CSV  
**Afin de** analyser les données dans Excel

#### Tasks :
- **Task 4.6.1** : Créer la fonction d'export CSV et ajouter le bouton
  - Convertir données en CSV (colonnes importantes, gestion caractères spéciaux), ajouter bouton dans tableau de bord, télécharger fichier et appliquer filtres actifs à l'export.

---

## Epic 5: Système de Notifications

### User Story 5.1 : Création de notification lors d'une nouvelle demande
**En tant que** système  
**Je veux** créer une notification lors d'une nouvelle demande  
**Afin de** informer l'administrateur

#### Tasks :
- **Task 5.1.1** : Créer le modèle de notification et intégrer dans le flux
  - Définir schéma dans db.json (type, message, date, lu/non lu), intégrer dans création demande, enregistrer notification et associer à demande.

### User Story 5.2 : Affichage et gestion des notifications
**En tant qu'** administrateur  
**Je veux** voir et gérer mes notifications  
**Afin de** être informé des nouvelles demandes

#### Tasks :
- **Task 5.2.1** : Créer le badge de notification (cloche) et le dropdown/panneau
  - Créer icône cloche dans header avec nombre notifications non lues et mise à jour temps réel, récupérer notifications via API, afficher liste, distinguer lues/non lues et afficher date/message.
- **Task 5.2.2** : Implémenter la gestion des notifications (marquer lue, navigation)
  - Créer fonction mettre à jour statut, mettre à jour badge, retirer de liste non lues, implémenter redirection vers demande associée au clic et marquer automatiquement lue.

---

## Epic 6: Validation et Gestion des Erreurs

### User Story 6.1 : Validation des formulaires et gestion des erreurs
**En tant qu'** utilisateur  
**Je veux** recevoir des messages d'erreur clairs et être informé des erreurs serveur  
**Afin de** corriger mes erreurs et comprendre ce qui s'est passé

#### Tasks :
- **Task 6.1.1** : Créer la validation côté client et composant de message d'erreur réutilisable
  - Valider champs requis, formats (email, téléphone, etc.), valeurs min/max, afficher messages appropriés, créer composant ErrorMessage, gérer différents types d'erreurs et styliser.
- **Task 6.1.2** : Gérer les erreurs API et créer composant d'alerte
  - Intercepter erreurs 404, 500, timeouts, afficher messages utilisateur-friendly, créer composant Alert/Toast, afficher de manière non intrusive et permettre fermeture.

### User Story 6.2 : Gestion des exceptions
**En tant que** développeur  
**Je veux** gérer toutes les exceptions possibles  
**Afin de** éviter les crashs de l'application

#### Tasks :
- **Task 6.2.1** : Implémenter try/catch et créer Error Boundary React
  - Gérer erreurs dans services API et calculs financiers avec logger pour debug, créer composant ErrorBoundary, envelopper application et afficher page d'erreur élégante.

---

## Epic 7: Documentation Technique

### User Story 7.1 : Documentation de l'architecture et guide d'installation
**En tant que** développeur/futur mainteneur  
**Je veux** comprendre l'architecture et avoir un guide d'installation  
**Afin de** maintenir et démarrer rapidement le projet

#### Tasks :
- **Task 7.1.1** : Documenter la structure du projet et l'architecture technique
  - Créer diagramme structure dossiers, expliquer organisation code, décrire patterns, décrire flux de données, communication Frontend/Backend et choix techniques.
- **Task 7.1.2** : Créer le guide d'installation et de configuration
  - Documenter prérequis (Node.js, npm), instructions installation dépendances, démarrage (frontend + json-server), expliquer configuration json-server, Tailwind et variables d'environnement.

### User Story 7.2 : Documentation des dépendances et commentaires code
**En tant que** développeur  
**Je veux** connaître les dépendances et que le code soit bien commenté  
**Afin de** comprendre les technologies et faciliter la maintenance

#### Tasks :
- **Task 7.2.1** : Lister et documenter les dépendances
  - Lister dépendances principales, expliquer utilité et documenter versions pour chaque dépendance utilisée dans le projet.
- **Task 7.2.2** : Commenter le code (fonctions complexes, composants, hooks)
  - Ajouter commentaires JSDoc pour fonctions principales, expliquer logique métier complexe, ajouter commentaires dans composants React (props, utilisation) et documenter hooks personnalisés.

---

## Epic 8: Fonctionnalités Bonus (Optionnel)

### User Story 8.1 : DataTable personnalisé générique
**En tant que** développeur  
**Je veux** créer un DataTable réutilisable  
**Afin de** l'utiliser pour différents types de données

#### Tasks :
- **Task 8.1.1** : Créer le composant DataTable générique et configurable
  - Créer composant avec props génériques, implémenter tri colonnes, recherche/filtrage, pagination, permettre configuration colonnes, actions personnalisées et rendu personnalisé cellules.
- **Task 8.1.2** : Utiliser le DataTable dans le projet (demandes Admin, simulations si nécessaire)
  - Intégrer le composant DataTable dans le tableau de bord Admin pour les demandes et éventuellement pour les simulations si nécessaire.

### User Story 8.2 : Système de routing personnalisé
**En tant que** développeur  
**Je veux** créer un système de routing personnalisé  
**Afin de** comprendre comment fonctionne React Router

#### Tasks :
- **Task 8.2.1** : Créer le router personnalisé et les composants de navigation
  - Créer contexte routing, navigation programmatique, routes dynamiques, gestion paramètres route, créer composants Link et Route personnalisés et gérer 404.
- **Task 8.2.2** : Intégrer dans l'application (remplacer React Router, tester toutes routes)
  - Remplacer React Router par le router personnalisé dans toute l'application et tester toutes les routes pour vérifier le bon fonctionnement.

### User Story 8.3 : Solution équivalente à React Query
**En tant que** développeur  
**Je veux** créer un système de fetching de données  
**Afin de** gérer efficacement les appels API

#### Tasks :
- **Task 8.3.1** : Créer les hooks de fetching personnalisés (useFetch/useQuery, useMutation)
  - Créer hook useFetch/useQuery avec cache données, re-fetching automatique, loading/error states, créer hook useMutation avec optimistic update et invalidation cache.
- **Task 8.3.2** : Intégrer dans l'application (remplacer appels fetch directs, tester cache et mise à jour)
  - Remplacer tous les appels fetch directs par les hooks personnalisés dans l'application et tester le cache et la mise à jour des données.

---

## 📊 Résumé des Épics

| Epic                       |User Stories|    Priorité   |
|----------------------------|------------|---------------|
| Epic 1: Configuration      |     6      | 🔴 Critique   |
| Epic 2: Simulation         |     3      | 🔴 Critique   |
| Epic 3: Demande            |     3      | 🔴 Critique   |
| Epic 4: Espace Admin       |     6      | 🔴 Critique   |
| Epic 5: Notifications      |     2      | 🟡 Important  |
| Epic 6: Validation/Erreurs |     2      | 🟡 Important  |
| Epic 7: Documentation      |     2      | 🟢 Nécessaire |
| Epic 8: Bonus              |     3      | 🔵 Optionnel  |

---

## 📝 Notes pour JIRA

- Créer un projet JIRA nommé "Salefni"
- Créer les 8 Epics dans JIRA
- Pour chaque Epic, créer les User Stories correspondantes
- Pour chaque User Story, créer les Tasks (les sub-tasks peuvent être des points de vérification ou checklist)
- Configurer les liens entre GitHub et JIRA
- Mettre en place des règles d'automatisation (ex: transition automatique lors d'un commit)
