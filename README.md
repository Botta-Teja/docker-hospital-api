# 🏥 Dockerized Hospital Appointment Management API

A production-style backend REST API built using Node.js, Express, MongoDB, JWT Authentication, and Docker.

This project demonstrates backend architecture, authentication, protected routes, database modeling, and containerized deployment using Docker Compose.

---

## 🚀 Features

- User Registration & Login
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected Routes using Middleware
- Appointment Creation & Viewing
- MongoDB Integration using Mongoose
- Fully Dockerized (App + Database)
- Multi-container setup using Docker Compose

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Docker
- Docker Compose

---

## 📁 Project Structure

docker-hospital-api/
│
├── models/
│   ├── User.js
│   └── Appointment.js
│
├── routes/
│   ├── auth.js
│   └── appointment.js
│
├── middleware/
│   └── authMiddleware.js
│
├── Dockerfile
├── docker-compose.yml
├── server.js
├── package.json
├── .gitignore
└── README.md

---

## ▶️ How to Run the Project

1️⃣ Clone the repository

git clone https://github.com/YOUR_USERNAME/docker-hospital-api.git

2️⃣ Navigate into the project folder

cd docker-hospital-api

3️⃣ Run using Docker

docker-compose up --build

The server will start at:

http://localhost:5000

---

## 🔐 API Endpoints

POST /api/auth/register  
POST /api/auth/login  
POST /api/appointments/create (Protected)  
GET /api/appointments/all (Protected)

For protected routes, add this header:

Authorization: <your_jwt_token>

---

## 🐳 Docker Architecture

This project uses Docker Compose to run:

- Node.js Backend (App Container)
- MongoDB Database (Mongo Container)

Both services communicate using Docker internal networking.

---

## 📌 Key Concepts Demonstrated

- REST API Design
- Authentication & Authorization
- Middleware Implementation
- Database Schema Design
- Multi-container Docker Deployment
