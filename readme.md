# API de Justification de Texte

## Description du Projet

Cette API est conçue pour fournir un service de justification de texte. Elle permet aux utilisateurs d'envoyer un texte brut, qui sera ensuite justifié à une longueur de ligne définie. Pour garantir la sécurité, l'API utilise un système d'authentification par token.

## Fonctionnalités

- **Justification de Texte** : Justifie le texte en fonction de la largeur spécifiée (par défaut, 80 caractères).

- **Authentification par Token** : Sécurise les points d'accès de l'API via un token et une limite d'utilisation journalière.


## Prérequis

Avant d'exécuter ce projet, vous devez avoir installé :
- [Node.js](https://nodejs.org/) (v20 ou supérieur)
- [npm](https://www.npmjs.com/)

## Installation

1. Clonez ce dépôt dans votre répertoire local :
```bash
   git clone https://github.com/Panagnimba/tictactrip-justify-text-api.git
```
2. Accédez au répertoire du projet :
```bash
    cd tictactrip-justify-text-api
```

3. Installez les dépendances nécessaires :
``` bash
    npm run start
```

## Lancement du Serveur

```bash
    npm run start
```

Le serveur sera disponible par défaut sur http://localhost:3000.

## Points d'Accès de l'API

### `POST /api/token`

Cet endpoint permet de générer un token d'accès pour authentifier les autres requêtes.

- **Corps de la Requête** : JSON `{ "name": "foo@bar.com" }`
- **Réponse** : Retourne un token d'accès en JSON.

Exemple de requête :
```bash
    curl -X POST http://localhost:3000/api/token -H "Content-Type: application/json" -d '{"email": "foo@bar.com"}'
```

### `POST /api/justify`

Cet endpoint permet de justifier le contenu du texte transmis à une longueur de ligne de 80 caractères.

- **En-têtes** :
  - `Authorization` : `Bearer <votre_token>`
  - `Content-Type` : `text/plain`
- **Corps de la Requête** : Texte brut à justifier.
- **Réponse** : Retourne le texte justifié en texte brut.

#### Exemple de commande :

```bash
curl -X POST http://localhost:3000/api/justify \
  -H "Authorization: Bearer <votre_token>" \
  -H "Content-Type: text/plain" \
  --data "Votre texte brut à justifier ici."
```

## Gestion des Erreurs

L'API renvoie un message d'erreur dans les cas suivants :

- **Token invalide ou non fourni** : Si le token d'accès n'est pas fourni dans l'en-tête `Authorization` ou est invalide, l'API renvoie une erreur d'authentification.
  
- **Corps de la requête vide ou format incorrect** : Si le corps de la requête est vide ou n'a pas le format `text/plain`, l'API renvoie une erreur indiquant que le format du corps de la requête n'est pas valide.

Dans chacun de ces cas, une réponse appropriée avec un code d'erreur HTTP (comme 401 pour l'authentification ou 400 pour le format de requête) est renvoyée, accompagnée d'un message décrivant l'erreur.

## Structure du Projet

    ├── server/
    │   ├── index.ts               # Point d'entrée de l'application
    │   ├── routes/
    │   │   ├── tokenRoutes.ts      # Routes pour la génération de token
    │   │   └── justifyRoutes.ts    # Routes pour la justification de texte
    │   ├── middleware/
    │   │   └── authMiddleware.ts   # Middleware pour la gestion de l'authentification par token
    │   ├── utils/
    │   │   ├── textUtils.ts        # Fonctions utilitaires de justification et comptage
    │   └── config/
    │       └── constants.ts        # Configuration des constantes, ex. largeur de ligne
    └── package.json                # Fichier de configuration du projet et des dépendances

### Description des dossiers

- **server/index.ts** : Point d'entrée principal de l'application où l'API est initialisée.
- **server/routes** : Dossier contenant les routes de l'API :
  - `tokenRoutes.ts` : Gère les routes pour la génération et l'obtention de tokens d'accès.
  - `justifyRoutes.ts` : Gère les routes pour la justification de texte.
- **server/middleware** : Contient les middlewares pour le traitement des requêtes, notamment l'authentification.
  - `authMiddleware.ts` : Middleware pour vérifier et valider les tokens d'authentification.
- **server/utils** : Dossier des fonctions utilitaires :
  - `textUtils.ts` : Fonctions pour justifier le texte et compter les mots.
- **server/config** : Dossier de configuration :
  - `constants.ts` : Définit les constantes du projet, comme la largeur de ligne pour la justification.
- **package.json** : Fichier de configuration listant les dépendances et les scripts du projet.



## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur, permettant de créer des applications réseau performantes.
- **Express** : Framework web minimaliste pour Node.js, utilisé pour développer les points d'accès de l'API.
- **TypeScript** : Superset de JavaScript qui ajoute le typage statique, améliorant la fiabilité et la maintenabilité du code.

## Développement et Authentification

### Authentification par Token

L'API utilise un mécanisme de tokens d'accès de type Bearer pour authentifier les requêtes des utilisateurs. Chaque utilisateur doit d'abord obtenir un token via l'endpoint `/api/token` en envoyant son nom en JSON. Ce token doit ensuite être inclus dans l'en-tête `Authorization` des requêtes pour accéder aux fonctionnalités de justification de texte.

### Justification de Texte

L'API offre une fonctionnalité de justification de texte. Les utilisateurs peuvent envoyer un texte brut à justifier, et l'API ajuste chaque ligne à la largeur spécifiée (par défaut 80 caractères). Cette fonctionnalité garantit une présentation cohérente et lisible du texte.