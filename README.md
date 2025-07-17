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
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Réponse :**
```json
{
  "access_token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

#### POST `/auth/login`
Connexion utilisateur
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Réponse :**
```json
{
  "access_token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
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
{
  "name": "Produit Test",
  "price": 29.99,
  "quantity": 100,
  "imageUrl": "https://example.com/image.jpg"
}
```

#### PATCH `/products/:id`
Mettre à jour un produit de l'utilisateur connecté
```json
{
  "name": "Nouveau nom",
  "price": 39.99,
  "quantity": 50
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
- `npm run start:dev`