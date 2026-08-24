# 🚀 FSD-2

A Full Stack Development project built to practice and demonstrate modern web development concepts, including frontend development, backend APIs, database integration, and deployment ready project structure.

## 📌 About the Project

**FSD-2** is a full-stack web development project developed as part of my learning and practice in Full Stack Development.

The project focuses on building a complete web application by connecting a frontend interface with backend services and a database.

## ✨ Features

* 🌐 Responsive and user-friendly interface
* ⚡ Modern frontend development
* 🔗 REST API integration
* 🗄️ Database connectivity
* 📊 Dynamic data handling
* 🔐 Backend API structure
* 📱 Responsive design
* 🧩 Modular and maintainable code structure

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* React.js
* Vite

### Backend

* Java / Spring Boot
* REST APIs

### Database

* MySQL
* MongoDB

### Tools

* Git
* GitHub
* VS Code
* Postman

## 📂 Project Structure

```text
FSD-2/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── README.md
└── .gitignore
```

> The exact folder structure may vary depending on the modules implemented in the project.

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shru-shh27/fsd-2.git
```

### 2. Navigate to the Project

```bash
cd fsd-2
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Start the Frontend

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

### 5. Start the Backend

Navigate to the backend directory:

```bash
cd backend
```

Then run the Spring Boot application using:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
.\mvnw.cmd spring-boot:run
```

## 🔑 Environment Variables

Create a `.env` file if your project requires environment variables.

Example:

```env
VITE_API_URL=http://localhost:8080
```

Do not upload sensitive credentials, API keys, or passwords to GitHub.

## 🔄 Application Flow

```text
User
  ↓
Frontend (React + Vite)
  ↓
REST API
  ↓
Backend (Spring Boot)
  ↓
Database (MySQL)
  ↓
Response
  ↓
Frontend UI
```

## 🧪 Testing

API endpoints can be tested using **Postman**.

Frontend can be tested by running:

```bash
npm run dev
```

Backend can be tested using:

```bash
.\mvnw.cmd spring-boot:run
```

## 🎯 Learning Objectives

Through this project, I practiced:

* React component development
* State and event handling
* API integration
* REST API development
* Backend architecture
* Database operations
* CRUD operations
* Git and GitHub
* Frontend-backend integration
* Debugging and error handling

## 🚀 Future Improvements

* 🔐 User authentication and authorization
* ☁️ Cloud deployment
* 📊 Advanced analytics
* 🎨 Improved UI/UX
* 📱 Better mobile responsiveness
* 🔔 Notifications
* 🧪 Automated testing

