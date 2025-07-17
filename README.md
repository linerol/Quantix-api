# Quantix API – Gestion d’Inventaire

Backend NestJS modulaire, sécurisé, prêt pour la production, avec gestion d’inventaire, authentification JWT, MongoDB et upload d’images sur Azure Blob Storage.

---

## 📑 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Architecture & Design Patterns](#architecture--design-patterns)
- [Structure du projet](#structure-du-projet)
- [Installation & Configuration](#installation--configuration)
- [Utilisation de l’API](#utilisation-de-lapi)
- [Intégration Azure Blob Storage](#intégration-azure-blob-storage)
- [Tests](#tests)
- [Contribution](#contribution)
- [Licence](#licence)

---

## 🚀 Fonctionnalités

- **Authentification sécurisée** (inscription, login, JWT, bcrypt, Passport.js)
- **Gestion des utilisateurs** (CRUD, email unique)
- **Gestion des produits** (CRUD, chaque user a ses propres produits)
- **Upload d’images produits** (Azure Blob Storage, URL publique)
- **Validation des données** (class-validator)
- **Documentation Swagger** (auto-générée, testable)
- **Sécurité** (routes protégées, isolation des données)
- **Architecture modulaire et scalable**

---

## 🏛️ Architecture & Design Patterns

- **Modulaire** : chaque domaine (auth, users, products, upload) a son propre module.
- **Service/Repository** : logique métier dans les services, accès DB via Mongoose.
- **DTO** : validation et documentation des entrées/sorties.
- **Guards & Middleware** : protection JWT, décorateurs personnalisés (`@CurrentUser()`).
- **Strategy Pattern** : Passport.js + JWT.
- **Dependency Injection** : tous les services/providers sont injectés.
- **Validation/Transformation** : `class-validator`, `class-transformer`.

---

## 🗂️ Structure du projet

```
src/
├── auth/         # Authentification (JWT, guards, stratégie, décorateurs)
├── users/        # Utilisateurs (schéma, service, module)
├── products/     # Produits (schéma, service, contrôleur, DTO)
├── upload/       # Upload Azure Blob Storage
└── main.ts       # Bootstrap & Swagger
```

---

## ⚙️ Installation & Configuration

### Prérequis

- Node.js v16+
- MongoDB (local ou cloud)
- Un compte Azure Storage (pour l’upload d’images)

### Installation

```bash
git clone <repository-url>
cd Quantix-api
npm install
```

### Configuration

Copie le fichier d’exemple et adapte-le :
```bash
cp env.example .env
```
Remplis les variables :
```env
MONGO_URI=mongodb://localhost:27017/quantix-inventory
JWT_SECRET=ton_secret_jwt
PORT=3000

AZURE_STORAGE_ACCOUNT_NAME=ton_account_name
AZURE_STORAGE_ACCOUNT_KEY=ta_cle_azure
AZURE_BLOB_CONTAINER_NAME=image
```

---

## ▶️ Utilisation de l’API

### Démarrer le serveur

```bash
npm run start:dev
```

### Documentation interactive

Swagger disponible sur :  
[http://localhost:3000/api](http://localhost:3000/api)

---

### Exemples d’API

#### Authentification

**Inscription**
```json
POST /auth/register
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Réponse**
```json
{
  "access_token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

**Connexion**
```json
POST /auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Réponse** : identique à l’inscription.

#### Produits (JWT requis)

**Créer un produit (avec image)**
- Formulaire `multipart/form-data` :
  - `name`, `price`, `quantity` (champs texte)
  - `image` (fichier)

**Réponse**
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

**Récupérer tous les produits**
```http
GET /products
Authorization: Bearer <jwt_token>
```
**Réponse** : liste des produits de l’utilisateur connecté.

---

## ☁️ Intégration Azure Blob Storage

### Étapes de configuration

1. **Créer un Storage Account** sur [portal.azure.com](https://portal.azure.com)
2. **Créer un container Blob** (nom : `image`, accès public niveau Blob)
3. **Récupérer les clés d’accès** et les renseigner dans `.env`

### Fonctionnement

- Lors de la création d’un produit, l’image est uploadée sur Azure.
- L’URL publique est stockée dans le champ `imageUrl` du produit.
- Le front peut afficher l’image via cette URL.

---

## 🧪 Tests

```bash
npm run test         # tests unitaires
npm run test:e2e     # tests end-to-end
npm run test:cov     # couverture de code
```

---

## 🤝 Contribution

1. Fork le projet
2. Crée une branche feature (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -m "feat: ma feature"`)
4. Push la branche (`git push origin feature/ma-feature`)
5. Fais une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
