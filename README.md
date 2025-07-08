#                 Travel World
# 🧳 Travel Agency Booking System (MERN Stack)

A full-stack web application that simplifies travel bookings by allowing users to browse, book, and manage tour packages. Built using the MERN stack with secure authentication, real-time booking features, and responsive design.

---

## 📸 Project Screenshot

![App Screenshot](./Screenshots/homepage.png.png)


---

## 🚀 Features

- ✅ User Registration & Login with JWT Authentication
- 🧭 Browse Tour Packages (Flights, Hotels, Tours)
- 🔐 Admin Dashboard to Add, Edit, Delete Packages
- 🧾 Booking Management & Booking History
- 📡 RESTful API Integration (Tested with Postman)
- 🔑 Secure Password Hashing using Bcrypt
- 🛂 Role-Based Access Control (User/Admin)
- 🎨 Fully Responsive Frontend using ReactJS
- 🚀 Deployment using Render (Backend) and Vercel (Frontend)

---

## 🛠️ Tech Stack

| Layer     | Technologies                             |
|-----------|------------------------------------------|
| Frontend  | ReactJS, Axios, React Router DOM         |
| Backend   | NodeJS, ExpressJS                        |
| Database  | MongoDB (with Mongoose)                  |
| Security  | JWT, Bcrypt                              |
| Tools     | Postman, Git, GitHub                     |
| Hosting   | Vercel (Frontend), Render (Backend)      |

---

## 📁 Project Structure
/client → ReactJS frontend
/server → NodeJS + Express backend
/models → MongoDB schemas
/routes → API route handlers
/controllers → Business logic for routes
/utils → JWT/Bcrypt utilities

---

## 🔐 Authentication & Security

- Passwords are encrypted with **Bcrypt**
- JWT tokens used for **user session management**
- Protected routes and role-based access for **Users** and **Admins**

---

## 📦 Installation & Setup

### Prerequisites:
- Node.js, MongoDB, Git

### Steps:
```bash
# Clone the repo
git clone https://github.com/your-username/travel-agency-booking-system.git
cd travel-agency-booking-system

# Setup Backend
cd server
npm install
npm run dev

# Setup Frontend
cd ../client
npm install
npm start

