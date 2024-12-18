const htmlDocumentation = `
<html>
<head>
    <title>Documentation de l'API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }

        pre {
            background-color: #f4f4f4;
            padding: 10px;
        }

        code {
            display: block;
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            font-size: 14px;
            color: #333;
            white-space: pre-wrap;
        }
    </style>
</head>

<body>
    <h1>Bienvenu sur l'API de Justification de Texte</h1>

    <h2>Description</h2>
    <p>Cette API est conçue pour fournir un service de justification de texte. Elle permet aux utilisateurs d'envoyer un
        texte brut, qui sera ensuite justifié à une longueur de ligne définie. Pour garantir la sécurité, un mécanisme
        d’authentification via token unique est utilisé.
    </p>

    <h2>Fonctionnalités</h2>
    <ul>
        <li><strong>Justification de Texte :</strong> Justifie le texte en fonction de la longueur spécifiée (par
            défaut, 80 caractères par ligne).</li>
        <li><strong>Authentification par Token :</strong> Sécurise les points d'accès de l'API via un token et une
            limite d'utilisation journalière.</li>
    </ul>

    <h2>Points d'Accès de l'API</h2>

    <h3>POST /api/token</h3>
    <p>Permet de générer un token d'accès pour authentifier les autres requêtes.</p>
    <pre>
    Corps de la Requête : JSON { "email": "foo@bar.com" }
    Réponse : Retourne un token d'accès en JSON.
    </pre>
    <h4>Exemple de commande :</h4>
    <code>
        curl -X POST http://localhost:3000/api/token -H "Content-Type: application/json" -d '{"email": "foo@bar.com"}'
    </code>
    <!-- Justification part -->
    <h3>POST /api/justify</h3>
    <p>Justifie le contenu du texte transmis à une longueur de ligne de 80 caractères.</p>
    <pre>
    En-têtes :
        Authorization : Bearer &lt;votre_token&gt;
        Content-Type : text/plain
    Corps de la Requête : 
        Texte brut à justifier.
    Réponse :
        Retourne le texte justifié en texte brut.
    </pre>
    <h4>Exemple de commande :</h4>
    <code>curl -X POST http://localhost:3000/api/justify -H "Authorization: Bearer &lt;votre_token&gt;" -H "Content-Type: text/plain" --data "Votre texte brut à justifier ici."</code>

    <h2>Gestion des Erreurs</h2>
    <p>L'API renvoie un message d'erreur dans les cas suivants :</p>
    <ul>
        <li>Token invalide ou non fourni</li>
        <li>Corps de la requête vide ou format incorrect</li>
    </ul>

    <h2>Technologies Utilisées</h2>
    <ul>
        <li>Node.js : Environnement d'exécution JavaScript côté serveur</li>
        <li>Express : Framework pour la création d'API web en Node.js</li>
        <li>TypeScript : Superset de JavaScript ajoutant un typage statique</li>
        <li>MongoDB : Base de données NoSQL utilisée</li>
    </ul>

    <h2>Résumé</h2>
    <p><strong>Authentification par Token :</strong> L'API utilise des tokens d'accès de type Bearer pour vérifier
        l'authenticité et limiter les requêtes journalières par utilisateur.</p>
    <p><strong>Justification de Texte :</strong> L'API justifie le texte transmis, en ajustant chaque ligne à la
        longueur définie.</p>
</body>

</html>
`
export {htmlDocumentation}