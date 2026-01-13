# ApplyX 🚀

ApplyX is a **full‑stack MERN (MongoDB, Express, React, Node.js) job application platform** designed to connect **students (job seekers)** and **recruiters** in a single ecosystem.

Students can explore jobs, apply with their CV, manage profiles and skills, while recruiters can create companies, post jobs, and track applicants efficiently.

---

## 🌟 Features

### 👨‍🎓 Student Features

* Register & login securely
* Create and manage profile
* Upload CV / resume
* Add and update skills
* Browse available jobs
* Apply for jobs
* Track applied jobs

### 🧑‍💼 Recruiter Features

* Register & login as recruiter
* Create and manage **multiple companies**
* Post job openings for each company
* View applicants per job role
* See number of students applied
* Manage job postings

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie-based auth

---

## 📂 Project Structure

```
ApplyX/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Auth & custom middlewares
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── utils/            # DB connection & helpers
│   ├── .env              # Environment variables
│   ├── index.js          # Entry point
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/       # Images & static assets
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # External libraries setup
│   │   ├── redux/        # Redux store & slices
│   │   ├── utils/        # Helper functions
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .eslintrc.cjs
│   ├── components.json
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
└── README.md
```

---

## 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access (Student / Recruiter)
* Protected routes for dashboard actions

---

## ⚙️ Environment Variables

Create a `.env` file in the **backend** directory and add the following:

```env
# Server
PORT=8000

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# JWT
SECRET_KEY=your_jwt_secret_key
```

---

## ▶️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ApplyX.git
cd ApplyX
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots (Optional)

*Add screenshots of UI here*

---

## 🚧 Future Enhancements

* Job bookmarking
* Application status tracking
* Email notifications
* Admin dashboard
* Advanced job filtering
* Resume parsing

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Shahriar Rahman Shihab**
Full Stack Developer (MERN)

---

⭐ If you like this project, don't forget to give it a star!
