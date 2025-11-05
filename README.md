# 💳 Salefni - Solution de Simulation et Gestion des Crédits en Ligne

**Assigné par :** 👤 Zakaria Ziane  
**Créé le :** 📅 03/11/25

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

> *Une application web développée permettant aux visiteurs de simuler différents types de crédits et d'envoyer leurs demandes de financement en ligne.*

## 📦 Ressources

- `📄 db.json`

## 🎯 Compétences visées

- **C1.** 📋 Planifier le travail à effectuer individuellement : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C2.** 👥 Contribuer au pilotage de l'organisation du travail individuel et collectif : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C3.** 🔍 Définir le périmètre d'un problème rencontré en adoptant une démarche inductive : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C4.** 🤝 Interagir dans un contexte professionnel de façon respectueuse et constructive : ![Niveau 1](https://img.shields.io/badge/Niveau-1-yellow?style=flat-square)
- **C5.** 🗣️ Faciliter un temps de travail collectif en assurant une communication constructive entre les participants : ![Niveau 1](https://img.shields.io/badge/Niveau-1-yellow?style=flat-square)
- **C6.** ⚙️ Installer et configurer son environnement de travail en fonction du projet : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C7.** 🎨 Développer des interfaces utilisateur : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C8.** 📊 Contribuer à la gestion d'un projet : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C9.** 📐 Analyser les besoins et maquetter une application : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)
- **C10.** 🏗️ Définir l'architecture logicielle d'une application : ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=flat-square)

## 📖 Contexte du projet

Concevoir une application web permettant :

- 🧮 de simuler des crédits (mensualité, coût total, échéancier simplifié) ;
- 👤 aux visiteurs (guests) de créer des demandes de crédit à partir d'une simulation ;
- 🔐 à un administrateur de consulter et traiter les demandes (validation, rejet, annotation).

La communication côté données s'effectue via un backend mocké avec json-server.

## 👥 Rôles

- **👤 Guest (non authentifié)** : réalise des simulations, soumet une demande de crédit (formulaire + pièces info de base).
- **🔐 Admin** : consulte la liste des demandes, voit le détail, change le statut ![En attente](https://img.shields.io/badge/En_attente-yellow?style=flat-square) ![En cours](https://img.shields.io/badge/En_cours-blue?style=flat-square) ![Acceptée](https://img.shields.io/badge/Acceptée-green?style=flat-square) ![Refusée](https://img.shields.io/badge/Refusée-red?style=flat-square), ajoute des notes internes.

## ⚡ Fonctionnalités

### 🧮 Simulation de crédit

- **📝 Formulaire** : type de crédit (auto, consommation, immobilier, etc.), métier, montant, durée (en mois), taux annuel (%), frais fixes (optionnels), assurance (%) (optionnelle).
- **🔢 Calculs** : mensualité, coût total, TAEG (simplifié), tableau d'amortissement (intérêts/principal par période, résumé).
- **💾 Enregistrement automatique** de la simulation pour transmettre les informations au décideur en vue de la création de nouveaux packs ou promotions.

### 📋 Demande de crédit (Guest)

- **📝 Formulaire** à partir d'une simulation : nom, email, téléphone, revenu mensuel, situation pro, commentaire.
- **➕ Création** d'une entité application liée à la simulation choisie.
- **✅ Accusé visuel** de dépôt ("Votre demande a bien été envoyée").
- **📄 Export PDF** de la simulation/demande.

### 🛡️ Espace Admin

- **📊 Tableau de bord** des demandes : filtre par statut, recherche par nom/email, tri par date.
- **📋 Fiche demande** : détail du demandeur + récap simulation, historique des statuts, notes internes.
- **⚡ Actions** : changer le statut, ajouter une note, marquer comme prioritaire.
- **📊 Export CSV** pour les demandes.

### 🔔 Notifications (basique)

À la création d'une demande : insertion d'un objet notification pour l'admin (à lister dans un badge cloche).

## 🛠️ Périmètre technique

- **⚛️ Frontend** : 
    - React (framework)
    - Outil de build : _Vite_ || _CRA_
    - Routing : _React Router_ (optionnel)
    - Gestion d'état : _Context_ || _Redux_ || _Zustand_
- **🔧 Backend** : 
    - JSON Server (CRUD simulé)
    - middlewares simples (timestamps, tri par défaut).
- **✔️ Validation** : contraintes côté UI (_required_, _min/max_, _formats_).
- **🎨 Styles** : libre (_Tailwind_ || _Chakra UI_ || _MUI_).

## 🌟 Bonus

- 📊 Développer un DataTable personnalisé capable d'afficher des objets de n'importe quel type.
- 🗺️ Implémenter un système de routing personnalisé pour la navigation au sein de l'application.
- 🔄 Créer une solution équivalente à React Query pour la gestion et le fetching des données.

## 📚 Modalités pédagogiques

- **👤 Travail individuel**
- **⏰ Deadline :** 07 Novembre 2025

## 📝 Modalités d'évaluation

Une durée de **25 min** organisée comme suit :

- **⏱️ 5 minutes** pour Démontrer le contenu et la fonctionnalité (très rapidement)
- **💻 5 minutes** : Montrez le code source et expliquez brièvement comment il fonctionne.
- **🎯 10 minutes** : Mise en situation
- **🔍 5 minutes** : Code Review \ Questions culture Web

## 📦 Livrables

- 🔗 Lien Github de l'application
- 📂 Toutes les sources d'application, correctement commentées et organisées.
- ✅ Assurez-vous que le code soit modulaire et respecte les bonnes pratiques de codage.

### 📚 Documentation Technique

- 🏗️ Description de l'architecture d'application.
- 📖 Un guide d'installation et de configuration.
- 📚 Des détails sur toute bibliothèque ou dépendance externe utilisée.

## 🎯 Critères de performance

- ✅ Taux de complétion des fonctionnalités
- 🎣 Maîtrise de l'utilisation des hooks personnalisés
- ⚛️ Utilisation des class components avec des functional components
- 📋 Planification sur JIRA : inclure l'utilisation des Epics, User Stories / Tasks et Sub-tasks, relier JIRA avec GitHub et mettre en place des règles d'automatisation
- 🚨 Gestion des exceptions et des erreurs
- ✔️ Validation des données côté UI
- 📁 Structuration du projet
- 📝 Respect des conventions de nommage
