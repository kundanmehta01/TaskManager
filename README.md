# Task Manager App

A simple full-stack Task Management Web Application built as part of an internship assessment.

This application allows users to create, view, update, delete, and mark tasks as completed or pending.

---

## Tech Stack

Frontend:
- React
- Tailwind CSS
- Axios

Backend:
- FastAPI (Python)
- SQLAlchemy
- SQLite

---

## Features

- Create a task with title and description
- View all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Basic error handling
- Clean and responsive UI

---

## Project Structure

task-manager/
│
├── backend/
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ └── requirements.txt
│
├── frontend/
│ └── (React App)
│
└── README.md


---

## Setup Instructions

### Step-1 Clone the Repository

git clone <your-repo-url>
cd task-manager


---

### Step-2 Backend Setup

cd backend
python -m venv venv
venv\Scripts\activate # Windows

source venv/bin/activate # Mac/Linux
pip install -r requirements.txt
uvicorn main:app --reload


Backend will run at:
http://127.0.0.1:8000


---

### Step-3 Frontend Setup

Open new terminal:

cd frontend
npm install
npm start


Frontend will run at:
http://localhost:3000


---

## Notes

- SQLite is used for simplicity.
- CORS is enabled for development.
- The project focuses on clarity and clean implementation rather than complex features.

---

## Author

Kundan Kumar 