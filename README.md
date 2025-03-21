# Gestion d'un Système de Réservations de Salles

## 📌 Description
API REST en **Node.js**, **Express**, et **Sequelize** pour gérer les réservations de salles de réunion.

## 🚀 Fonctionnalités
- Ajouter des salles 📌
- Gérer les employés 🏢
- Enregistrer et suivre les réservations 📅
- Empêcher la double réservation ⚠️

## 🛠️ Installation

### 📥 Prérequis
- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [MySQL](https://www.mysql.com/)

### 1️⃣ Cloner le projet
```sh
git clone https://github.com/marc-awad/sequelize-learning-project
cd sequelize-learning-project
```

### 2️⃣ Installer les dépendances
```sh
npm install
```

### 3️⃣ Configurer la base de données
1. **Créer la base de données MySQL** :
```sql
CREATE DATABASE meeting_db;
```
2. **Configurer Sequelize** :
   - Modifier `config/config.json` avec vos identifiants MySQL.

### 4️⃣ Exécuter les migrations
```sh
npx sequelize-cli db:migrate
```

### 5️⃣ Lancer le serveur
```sh
npm start
```
L'API sera disponible sur `http://localhost:3000`.

## 📌 Routes API

### **Salles (`/rooms`)
- `GET /rooms` → Liste des salles
- `POST /rooms` → Ajouter une salle

### **Employés (`/employees`)
- `GET /employees` → Liste des employés
- `POST /employees` → Ajouter un employé

### **Réservations (`/reservations`)
- `GET /reservations` → Liste des réservations
- `POST /reservations` → Ajouter une réservation (vérification de disponibilité)

## 📌 Technologies Utilisées
- **Node.js** + **Express.js**
- **Sequelize** (ORM pour MySQL)
- **MySQL** (Base de données)

## 📌 Auteurs
👨‍💻 **Marc AWAD** - [GitHub](https://github.com/marc-awad)

