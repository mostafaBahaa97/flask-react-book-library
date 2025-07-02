# 📚 Flask + React Book Library (Dockerized)

A simple Full-Stack Book Library project built with **Flask** (Backend) and **React.js** (Frontend), containerized with **Docker**.

This app allows users to:
- Add, update, view, and delete books
- Interact via web interface or RESTful API
- Run everything with Docker Compose

---

## 🛠️ Technologies Used

### 🔧 Backend
- Python 3.10
- Flask 3.x
- Flask-SQLAlchemy
- Flask-WTF
- Flask-CORS
- SQLite (as a lightweight DB)

### 🎨 Frontend
- React.js
- Vite
- Axios

### 🐳 DevOps
- Docker
- Docker Compose

---

## 📂 Project Structure

flask_docker_lab/
│
├── backend/
│ ├── app.py # Flask main app
│ ├── forms.py # WTForms form definitions
│ ├── templates/ # Jinja templates (optional)
│ ├── requirements.txt # Python dependencies
│ └── Dockerfile # Backend Dockerfile
│
├── frontend/
│ ├── src/ # React components
│ ├── package.json # Frontend dependencies
│ └── Dockerfile # Frontend Dockerfile
│
├── docker-compose.yml # Runs both frontend and backend
└── README.md

yaml
Copy
Edit

---

## ▶️ How to Run the App

### 🔁 Prerequisites:
- Docker
- Docker Compose

### 🧱 Run with Docker:

```bash
git clone https://github.com/mostafaBahaa97/flask-react-book-library.git
cd flask-react-book-library
docker-compose up --build
Visit frontend: http://localhost:5173

Backend API: http://localhost:5000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
POST	/api/books	Add new book
GET	/api/books/<id>	Get book by ID
PUT	/api/books/<id>	Update book
DELETE	/api/books/<id>	Delete book

Use Postman or curl to interact with the API directly.

📝 Notes
Backend form-based views (/add, /update) still work via Jinja templates.

Frontend and backend are fully separated and can run independently.

.gitignore and .dockerignore files are configured for both parts.

📸 Screenshots
You can add screenshots of the frontend UI here.

✍️ Author
Mostafa Bahaa

GitHub

LinkedIn

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

لو حابب أعملك نسخة من الملف الجاهز `.md` وأرفعها في المشروع، قولي بس اسم الملف أو اكتبه هنا، أو [أكمل تلقائيًا رفعه للمشروع الحالي](f)؟
