# 🏥 Dockerized Hospital Appointment API

Backend REST API built using Node.js, Express, MongoDB, JWT authentication, and Docker.

## Features

- User Registration & Login
- Password hashing using bcrypt
- JWT Authentication
- Protected routes
- Appointment creation and viewing
- Dockerized application with MongoDB

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Docker
- Docker Compose

## How to Run
```bash
git clone https://github.com/Botta-Teja/docker-hospital-api.git
cd docker-hospital-api
docker-compose up --build
```

Server runs at:
http://localhost:5000

## API Routes
```bash
POST /api/auth/register
POST /api/auth/login
POST /api/appointments/create (Protected)
GET /api/appointments/all (Protected)
```
For protected routes, add header:
Authorization: your_jwt_token



