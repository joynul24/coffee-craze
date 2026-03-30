# ☕ Coffee Craze App

A full-stack MERN application to manage coffee products.  
Users can view coffee details, update existing coffee information, and manage the coffee list with a clean UI and robust backend API.

---

## 🚀 Live Demo

- **Frontend (React App):** [https://coffee-craze.netlify.app/](https://coffee-craze.netlify.app/)  
- **Backend API:** [https://github.com/joynul24/coffee-craze-server](https://github.com/joynul24/coffee-craze-server)

---

## 🚀 Features

### Frontend (React + Tailwind + Axios + Toastify)
- Dynamic routing with **React Router**
- Coffee details page (`/coffees/:id`) with auto-filled data
- Update form with **validation** (name, quantity, price, photo URL)
- **Axios** integration for API calls
- **Toastify** notifications for success, warning, and error handling
- Responsive design with TailwindCSS
- Shared components: `Navber`, `Footer`

### Backend (Node.js + Express + MongoDB)
- RESTful API endpoints:
  - `GET /coffees` → fetch all coffees
  - `GET /coffees/:id` → fetch single coffee by ID
  - `PUT /coffees/:id` → update coffee details
- MongoDB integration with ObjectId
- Error handling for invalid requests
- Returns `modifiedCount` to indicate update success

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, TailwindCSS, Axios, Toastify
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB Atlas

---

## ⚙️ Installation

### Clone the repository
```bash
git clone https://github.com/your-username/coffee-craze.git
cd coffee-craze
