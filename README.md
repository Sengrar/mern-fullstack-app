# 🚀 MERN Fullstack Project (Client + Server + Database)

This repository contains an **ongoing MERN full-stack project** where the **React frontend (client)** is connected with a **Node.js + Express backend (server)** and **MongoDB database**.

The project is being developed incrementally and will continue to evolve as new features, architecture improvements, and production practices are implemented.

---

## 📌 Project Overview

* Frontend built with **React (Vite)**
* Backend built with **Node.js + Express**
* Database powered by **MongoDB (Mongoose)**
* Client communicates with server via REST APIs
* Authentication system (in progress)
* Industry-standard MERN architecture

This repository is updated continuously as development progresses.

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* TailwindCSS
* ESLint

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT Authentication (in progress)

### Database

* MongoDB (Local / Atlas)
* Mongoose ODM

---

## 📂 Folder Structure

```
project-root
│
├── client                     # React Frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── context
│   │   ├── hooks
│   │   ├── api
│   │   └── utils
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env
│
├── server                     # Express Backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models             # Mongoose models
│   │   ├── middleware
│   │   ├── config             # DB connection
│   │   └── utils
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

## 🔗 Client ↔ Server ↔ Database Flow

```
React (client)
      ↓ API (Axios)
Express Server
      ↓
MongoDB (Mongoose)
```

* Vite proxy forwards `/api` requests to backend
* Backend handles business logic
* Mongoose manages database communication

---

## 📦 Dependencies

### ✅ Client

* react
* react-dom
* react-router-dom
* axios
* tailwindcss
* @tailwindcss/vite

### 🧪 Client Dev Dependencies

* vite
* @vitejs/plugin-react
* eslint
* eslint-plugin-react-hooks
* eslint-plugin-react-refresh
* @types/react
* @types/react-dom

---

### ✅ Server

* express
* mongoose
* bcrypt
* jsonwebtoken
* cors
* cookie-parser
* dotenv

### 🧪 Server Dev Dependencies

* nodemon

---

## ⭐ Recommended (Industry Additions)

### Client

* react-hook-form
* zod / yup
* react-hot-toast
* zustand / redux toolkit
* framer-motion

### Server

* express-validator
* helmet
* morgan
* express-rate-limit
* multer
* winston / pino (logging)

---

## ⚙️ Environment Setup

### System Requirements

* Node.js (>=18 recommended)
* npm
* MongoDB (local or Atlas)

---

## 🔐 Environment Variables

### Client (.env)

```
VITE_API_URL=http://localhost:5000
```

---

### Server (.env)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

---

## 🗄️ Database Setup

### MongoDB Options

* Local MongoDB installation
* MongoDB Atlas (recommended)

### Example DB Connection (Mongoose)

```js
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};
```

---

## ▶️ Running the Project

### Install dependencies

#### Client

```
cd client
npm install
```

#### Server

```
cd server
npm install
```

---

### Start development

#### Backend

```
cd server
npm run dev
```

#### Frontend

```
cd client
npm run dev
```

---

## 🔐 Features (Current & Planned)

* Client ↔ Server integration ✅
* MongoDB connection ✅
* Routing system ✅
* Authentication system 🚧
* Protected routes 🚧
* JWT auth 🚧
* Cookie auth 🚧
* File upload 🚧
* Production config 🚧

---

## 🏗️ Architecture Goals

* Feature-based structure
* API service layer
* Auth context
* Global error handling
* Validation layer
* Logging layer
* Refresh token flow
* Production readiness

---

## 🔄 Project Status

⚠️ **Ongoing Project**

This repository is actively evolving.
New commits will be pushed as features, architecture improvements, and best practices are implemented.

---

## 📈 Future Improvements

* Full auth system
* Role based authorization
* Testing (Vitest / Jest / Supertest)
* Docker
* CI/CD
* Deployment
* Micro-optimizations
* Performance tuning

---

## 👨‍💻 Author

Built as part of MERN full-stack learning and production-level practice.

---

⭐ Follow the repository to track progress as new features are implemented.
