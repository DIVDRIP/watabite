# 🍽️ Watabite

### Smart Food Ordering & Delivery Platform

Watabite is a **full-stack food ordering and delivery platform** designed to replicate how modern food-tech companies operate **internally**, not just how users place orders.
Unlike basic delivery clones, Watabite focuses on **operational intelligence**—order prioritization, kitchen workload management, delivery readiness, and SLA tracking.
This project is built to demonstrate **real-world engineering practices**, not just UI screens.

---

## 🚀 Problem Statement

Most food delivery apps stop at:

```
 > browse → order → deliver
```

In reality, food-tech platforms struggle with deeper operational issues:
* Kitchens get overloaded
* Orders are prepared too early or too late
* Delivery partners are assigned inefficiently
* No visibility into delays or bottlenecks

**Watabite solves these problems** using backend-driven workflows and state-based systems.

---

## 🧠 Core Engineering Concepts

* Backend-first architecture
* Role-based workflows
* State-driven order lifecycle
* Operational dashboards (not just consumer UI)
* Feature-based full-stack ownership

This mirrors how production systems are actually designed.

---

## 👥 User Roles

Watabite supports **four distinct roles**, each with clear responsibilities:

### 👤 Customer

* Browse restaurants and menus
* Place food orders
* Track order status in real time

### 🏪 Restaurant Admin

* Manage restaurant profile and menu
* View incoming orders
* Track kitchen workload and prep status

### 🚴 Delivery Partner

* Accept assigned deliveries
* Update delivery status
* View optimized tasks based on food readiness

### 🧑‍💼 Operations Admin

* Monitor platform-wide activity
* Track order SLAs (prep & delivery)
* Identify delays and operational bottlenecks

---

## 🔁 Smart Order Lifecycle

Orders follow a strict, state-driven flow:

```
PLACED → ACCEPTED → PREPARING → READY → OUT_FOR_DELIVERY → DELIVERED
```

Each transition is:
* Validated on the backend
* Restricted by user role
* Reflected instantly on the frontend

This closely mirrors real production systems.

---

## ✨ Core Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control
* Secure protected routes

### 🍔 Restaurant & Menu Management

* Restaurant onboarding
* Menu CRUD operations
* Item availability control

### 📦 Smart Order Handling

* Prep-time aware order placement
* Priority-based order processing
* Strict order state transitions

### 🍳 Kitchen Workflow Management

* Active kitchen order queue
* Kitchen load indicators (Low / Medium / High)
* Preparation status tracking

### 🚚 Delivery Assignment

* Orders assigned when food is near-ready
* Delivery partner task optimization
* Status-based delivery updates

### 📊 Operational Dashboard

* Order volume analytics
* Average prep & delivery time tracking
* SLA monitoring and delay visibility

---

## 🏗️ Tech Stack

### Frontend

* React
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Tooling & Practices

* RESTful API design
* Feature-based Git branching
* Pull Request–based collaboration
* Postman for API testing

---

## 🧩 Project Structure

```
watabite/
 ├── frontend/
 │    ├── src/
 │    │    ├── components/
 │    │    ├── pages/
 │    │    ├── services/
 │    │    ├── routes/
 │    │    └── utils/
 │    └── index.html
 │
 ├── backend/
 │    ├── controllers/
 │    ├── routes/
 │    ├── models/
 │    ├── middlewares/
 │    └── config/
 │
 └── README.md
```

---

## 🤝 Collaboration & Development Workflow

* Feature-based branching (`feature/auth`, `feature/orders`, etc.)
* Full-stack feature ownership (frontend + backend)
* Code reviews via Pull Requests
* Frontend and backend developed independently using API contracts

This replicates **real product-team workflows**.

---

## 🧠 What This Project Demonstrates

* Real-world backend architecture
* Clean REST API design
* Role-based system modeling
* Full-stack collaboration
* System thinking beyond CRUD apps

---

## 📈 Future Enhancements

* Real-time updates using WebSockets
* Redis caching for hot data
* Payment gateway integration
* Microservices-based order processing
* Advanced delivery optimization logic

---

## 👨‍💻 Authors

Watabite is built collaboratively as a **hands-on full-stack learning project**, focused on gaining practical engineering experience and understanding real-world system design challenges.
