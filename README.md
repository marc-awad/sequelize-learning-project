# Management of a Room Reservation System

## 📌 Description
REST API in **Node.js**, **Express**, and **Sequelize** to manage meeting room reservations.

## 🚀 Features
- Add rooms 📌
- Manage employees 🏢
- Record and track reservations 📅
- Prevent double booking ⚠️

## 🛠️ Installation

### 📥 Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MySQL](https://www.mysql.com/)

### 1️⃣ Clone the project
```sh
git clone https://github.com/marc-awad/sequelize-learning-project
cd sequelize-learning-project
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure the database
1. **Create the MySQL database**:
```sql
CREATE DATABASE meeting_db;
```
2. **Configure Sequelize**:
   - Modify `config/config.json` with your MySQL credentials.

### 4️⃣ Run migrations
```sh
npx sequelize-cli db:migrate
```

### 5️⃣ Start the server
```sh
npm start
```
The API will be available at `http://localhost:3000`.

## 📌 API Routes

### **Rooms (`/rooms`)**
- `GET /rooms` → List of rooms
- `POST /rooms` → Add a room

### **Employees (`/employees`)**
- `GET /employees` → List of employees
- `POST /employees` → Add an employee

### **Reservations (`/reservations`)**
- `GET /reservations` → List of reservations
- `POST /reservations` → Add a reservation (availability check)

## 📌 Technologies Used
- **Node.js** + **Express.js**
- **Sequelize** (ORM for MySQL)
- **MySQL** (Database)

## 📌 Authors
👨💻 **Marc AWAD** - [GitHub](https://github.com/marc-awad)
