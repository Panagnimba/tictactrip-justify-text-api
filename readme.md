# API de Justification de Texte

## Description du Projet

Cette API est conçue pour fournir un service de justification de texte. Elle permet aux utilisateurs d'envoyer un texte brut, qui sera ensuite justifié à une longueur de ligne définie. Pour garantir la sécurité,un mécanisme d’authentification via token unique est utilisé.

## Fonctionnalités

- **Justification de Texte** : Justifie le texte en fonction de la longueur spécifiée (par défaut, 80 caractères).

- **Authentification par Token** : Sécurise les points d'accès de l'API via un token et une limite d'utilisation journalière.


## Prérequis

Avant d'exécuter ce projet, vous devez avoir installé :
- [Node.js](https://nodejs.org/) (v20 ou supérieur)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

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
    npm install
```

## Lancement du Serveur

```bash
    npm run start
```

Le serveur sera disponible par défaut sur http://localhost:3000.

## Points d'Accès de l'API

### `POST /api/token`

Cet endpoint permet de générer un token d'accès pour authentifier les autres requêtes.

- **Corps de la Requête** : JSON `{"email": "foo@bar.com"}`
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
  
- **Corps de la requête vide ou format incorrect** : Si le corps de la requête est vide ou n'a pas le format `text/plain`, l'API renvoie une erreur.

Dans chacun de ces cas, une réponse appropriée avec un code d'erreur HTTP (comme 401 pour l'authentification ou 400 pour le format de requête) est renvoyée, accompagnée d'un message décrivant l'erreur.

## Structure du Projet

    ├── server/
    │   ├── index.ts       # Point d'entrée de l'application
    │   ├── middleware/
    │   │   └── authMiddleware.ts      # Middleware pour la gestion de l'authentification par token
    |   |   └── rateLimiterMiddleware.ts    # Middleware pour la limite d'utilisation journalière
    │   ├── utils/
    |   |   ├── countWords.ts    # Function utilitaire pour compter le nombre de mots contenus dans le texte
    |   |   ├── justifyText.ts   # Function utilitaire qui Justifie le texte passé en paramètre à une longueur de ligne spécifiée
    |   |   ├── jwtHelper.ts     # Funtion utilitaire pour génèrer et vérifier le token d'authentification (access token).
    │   └── database/
    |   |   ├──models/
    |   |   |  ├── userModel.ts  # Définition du schéma utilisateur pour la base de données
    |   |   ├──  connexion.ts    # Function de connection à la base de données
    │   └── config/
    │       └── config.ts        # Configuration des constantes, ex. longueur de ligne, url de la base de données
    └── package.json             # Fichier de configuration du projet et des dépendances


## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express** : Framework web minimaliste pour Node.js, utilisé pour développer les points d'accès de l'API.
- **TypeScript** : Superset de JavaScript qui ajoute le typage statique, améliorant la fiabilité et la maintenabilité du code.

## Resumé

### Authentification par Token

L'API utilise un mécanisme de tokens d'accès de type Bearer pour authentifier les requêtes des utilisateurs. Chaque utilisateur doit d'abord obtenir un token via l'endpoint `/api/token` en envoyant son email en JSON. Ce token doit ensuite être inclus dans l'en-tête `Authorization` des requêtes pour accéder aux fonctionnalités de justification de texte.

### Justification de Texte

L'API offre une fonctionnalité de justification de texte. Les utilisateurs peuvent envoyer un texte brut à justifier, et l'API ajuste chaque ligne à la longueur spécifiée (par défaut 80 caractères). Cette fonctionnalité garantit une présentation cohérente et lisible du texte.
