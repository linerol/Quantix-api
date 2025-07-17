<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Quantix API - Gestion d'Inventaire

Backend NestJS complet pour une application de gestion d'inventaire avec authentification JWT et base de données MongoDB.

## 🚀 Fonctionnalités

### Authentification
- **Inscription** : Création de compte utilisateur avec email et mot de passe hashé
- **Connexion** : Authentification avec JWT (expiration24)
- **Sécurité** : Mots de passe hashés avec bcrypt
- **Protection** : Routes protégées avec JwtAuthGuard

### Gestion des Produits
- **CRUD complet** : Create, Read, Update, Delete
- **Champs** : name, price, quantity, imageUrl (optionnel), userId (automatique)
- **Validation** : Prix et quantité minimum0
- **Isolation** : Chaque utilisateur ne voit que ses propres produits
- **Sécurité** : Les produits sont automatiquement liés à l'utilisateur connecté

### Base de Données
- **MongoDB** avec Mongoose
- **Schémas** : User et Product avec timestamps
- **Index** : Email unique pour les utilisateurs
- **Relations** : Produits liés aux utilisateurs via userId

## 📋 Prérequis

- Node.js (v16+)
- MongoDB (local ou cloud)
- npm ou yarn

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd Quantix-api
```

2staller les dépendances**
```bash
npm install
```

3**Configuration**
```bash
# Copier le fichier d'exemple
cp env.example .env

# Éditer .env avec vos valeurs
MONGO_URI=mongodb://localhost:27017/quantix-inventory
JWT_SECRET=votre_secret_jwt_tres_securise_ici
PORT=3000```

4. **Démarrer MongoDB**
```bash
# Local
mongod

# Ou utiliser MongoDB Atlas
```

5. **Lancer lapplication**
```bash
# Développement
npm run start:dev

# Production
npm run build
npm run start:prod
```

## 📚 API Endpoints

### Authentification

#### POST `/auth/register`
Inscription d'un nouvel utilisateur
```json
[object Object]email":user@example.com,
  ssword": "password123}
```

**Réponse :**
```json[object Object]
  access_token:jwt_token_here,
 user":[object Object]   id": "user_id",
 email":user@example.com"
  }
}
```

#### POST `/auth/login`
Connexion utilisateur
```json
[object Object]email":user@example.com,
  ssword": "password123}
```

**Réponse :**
```json[object Object]
  access_token:jwt_token_here,
 user":[object Object]   id": "user_id",
 email":user@example.com"
  }
}
```

### Produits (Protégé par JWT)

**Header requis :** `Authorization: Bearer <jwt_token>`

> **Note importante :** Toutes les opérations sur les produits sont automatiquement liées à l'utilisateur connecté. Chaque utilisateur ne voit et ne peut modifier que ses propres produits.

#### GET `/products`
Récupérer tous les produits de l'utilisateur connecté

#### GET `/products/:id`
Récupérer un produit spécifique de l'utilisateur connecté

#### POST `/products`
Créer un nouveau produit pour l'utilisateur connecté
```json
[object Object]name":Produit Test",
 price": 29.99
  quantity": 100imageUrl": "https://example.com/image.jpg"
}
```

#### PATCH `/products/:id`
Mettre à jour un produit de l'utilisateur connecté
```json
{
name: Nouveau nom",
 price": 39.99,
 quantity": 50
}
```

#### DELETE `/products/:id`
Supprimer un produit de l'utilisateur connecté

## 🔐 Sécurité

- **JWT** : Tokens avec expiration de 24h
- **bcrypt** : Hachage des mots de passe
- **Validation** : Validation des données dentrée
- **Guards** : Protection des routes sensibles
- **Isolation** : Chaque utilisateur n'accède qu'à ses propres données

## 🏗️ Architecture

```
src/
├── auth/                 # Module dauthentification
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│   ├── jwt-auth.guard.ts
│   └── decorators/
│       └── current-user.decorator.ts
├── users/               # Module utilisateurs
│   ├── user.schema.ts
│   ├── users.service.ts
│   └── users.module.ts
├── products/            # Module produits
│   ├── product.schema.ts
│   ├── products.service.ts
│   ├── products.controller.ts
│   ├── products.module.ts
│   └── dto/
│       └── product.dto.ts
└── upload/              # Service dupload (optionnel)
    └── upload.service.ts
```

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Couverture de code
npm run test:cov
```

## 🚀 Déploiement

### Variables d'environnement requises
- `MONGO_URI` : URI de connexion MongoDB
- `JWT_SECRET` : Secret pour signer les JWT
- `PORT` : Port du serveur (défaut: 300# Variables optionnelles
- `AZURE_STORAGE_ACCOUNT_KEY` : Clé Azure Blob Storage
- `AZURE_STORAGE_ACCOUNT_NAME` : Nom du compte Azure
- `AZURE_BLOB_CONTAINER_NAME` : Nom du conteneur

## 📝 Exemples d'utilisation

### Avec cURL

```bash
# Inscription
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":password123

# Connexion
curl -X POST http://localhost:300/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":password123# Créer un produit (avec token)
curl -X POST http://localhost:300/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop,:9990.99,quantity":10}'

# Récupérer tous les produits de l'utilisateur
curl -X GET http://localhost:300/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Avec JavaScript/Fetch

```javascript
// Connexion
const loginResponse = await fetch(http://localhost:3000login',[object Object]  method: POST',
  headers:[object Object]Content-Type': application/json' },
  body: JSON.stringify([object Object]
    email:user@example.com,
    password: 'password123
  })
});

const { access_token } = await loginResponse.json();

// Créer un produit
const productResponse = await fetch(http://localhost:30ducts',[object Object]  method: POST',
  headers: {
   Content-Type':application/json',
    Authorization': `Bearer ${access_token}`
  },
  body: JSON.stringify({
    name: 'Nouveau Produit',
    price: 49.99,
    quantity:25 })
});
```

## 🔧 Développement

### Scripts disponibles
- `npm run start:dev` : Mode développement avec hot reload
- `npm run build` : Compilation TypeScript
- `npm run start:prod` : Mode production
- `npm run lint` : Vérification du code
- `npm run format` : Formatage du code

### Structure des données

#### User Schema
```typescript[object Object]
  email: string (unique),
  password: string (hashé),
  createdAt: Date,
  updatedAt: Date
}
```

#### Product Schema
```typescript
[object Object]
  name: string,
  price: number (min: 0),
  quantity: number (min: 0),
  imageUrl?: string,
  userId: ObjectId (référence vers User),
  createdAt: Date,
  updatedAt: Date
}
```

## 📖 Documentation Swagger

Une fois l'application démarrée, vous pouvez accéder à la documentation interactive Swagger sur :
```
http://localhost:3000`

Cette interface vous permet de :
- Tester toutes les routes directement
- Voir les schémas de données
- Authentifier vos requêtes avec le bouton Authorize"
- Exécuter des requêtes avec des exemples pré-remplis

## ☁️ Intégration Azure Blob Storage pour l’upload d’images produits

### Prérequis Azure

1. **Créer un Storage Account sur Azure**
   - Connecte-toi sur https://portal.azure.com
   - Recherche "Storage accounts" puis clique sur "Create"
   - Remplis les champs :
     - Resource group : crée-en un si besoin
     - Storage account name : ex. moninventaireimg
     - Region : France ou Europe
     - Performance : Standard
     - Redundancy : LRS (le plus économique)
   - Clique sur Review + Create, puis sur Create

2. **Créer un container Blob**
   - Va dans ton Storage Account > "Containers"
   - Clique sur + Container
   - Nom : `image` (ou autre, mais adapte la variable d’environnement)
   - Public access level : `Blob (anonymous read access for blobs only)` pour que l’image soit visible via URL
   - Clique sur Create

3. **Récupérer les infos de connexion**
   - Va dans ton Storage Account > "Access keys"
   - Copie :
     - `AZURE_STORAGE_ACCOUNT_NAME`
     - `AZURE_STORAGE_ACCOUNT_KEY`
   - Mets-les dans ton fichier `.env` :
     ```env
     AZURE_STORAGE_ACCOUNT_NAME=ton_account_name
     AZURE_STORAGE_ACCOUNT_KEY=ta_cle_azure
     AZURE_BLOB_CONTAINER_NAME=image
     ```

### Fonctionnement dans l’API

- Lors de la création d’un produit (`POST /products`), tu peux envoyer un champ `image` (fichier) via Swagger ou un client HTTP.
- L’image est uploadée sur Azure Blob Storage dans le container choisi.
- L’URL publique de l’image est automatiquement stockée dans le champ `imageUrl` du produit et renvoyée dans la réponse.
- Le backend gère le bon Content-Type (image/png, image/jpeg, etc.)

**Exemple de réponse produit :**
```json
{
  "_id": "...",
  "name": "Produit Test",
  "price": 29.99,
  "quantity": 10,
  "imageUrl": "https://ton_account_name.blob.core.windows.net/image/nom-fichier.png",
  ...
}
```

**Sécurité :**
- Le container doit être en accès public (niveau Blob) pour que le front puisse afficher l’image via l’URL.
- Les credentials Azure ne sont jamais exposés côté client.

## 🏛️ Design Patterns utilisés

L’API suit plusieurs patterns de conception reconnus pour garantir la maintenabilité, la testabilité et la scalabilité du code :

- **Architecture modulaire (Module Pattern)** :
  - Chaque domaine fonctionnel (auth, users, products, upload) est isolé dans son propre module.
- **Service/Repository Pattern** :
  - Les services (`*.service.ts`) gèrent la logique métier et orchestrent les accès aux données via Mongoose (Repository).
- **DTO (Data Transfer Object)** :
  - Les DTOs (`*.dto.ts`) définissent les schémas d’entrée/sortie des routes, facilitent la validation et la documentation Swagger.
- **Guards & Middleware** :
  - Utilisation de `JwtAuthGuard` pour la protection des routes sensibles.
- **Strategy Pattern** :
  - Utilisé pour l’authentification avec Passport.js et la stratégie JWT (`jwt.strategy.ts`).
- **Decorator Pattern** :
  - Utilisation de décorateurs personnalisés (`@CurrentUser()`) pour injecter l’utilisateur courant dans les contrôleurs.
- **Dependency Injection** :
  - Tous les services, modules et providers sont injectés via le système d’injection de dépendances de NestJS.
- **Validation & Transformation** :
  - Utilisation de `class-validator` et `class-transformer` pour valider et transformer les données entrantes.

Ces patterns assurent un code clair, évolutif, facilement testable et conforme aux bonnes pratiques NestJS/Node.js.

## 🤝 Contribution

1. Fork le projet2 Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -mAdd some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Fais une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.