
# 📝 NoteNest

NoteNest is a full-stack note-taking application built using the MERN stack. It allows users to create, view, update, and delete notes with a clean and responsive interface.

The application uses MongoDB for data storage and Upstash Redis for API rate limiting.

## 🚀 Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- DaisyUI
- React Router
- Axios
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis
- Upstash Rate Limit
- CORS
- dotenv

## ✨ Features

- Create new notes.
- View all saved notes.
- View individual note details.
- Update existing notes.
- Delete notes.
- Store notes in MongoDB.
- API rate limiting using Upstash Redis.
- Responsive user interface.
- Toast notifications for user feedback.

## 📂 Project Structure

```text
NoteNest/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   └── notesControllers.js
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   └── Note.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── components/
│   │   │   ├── NavBar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   └── lib/
│   │       ├── axios.js
│   │       └── util.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone your_repository_url
cd NoteNest
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001

UPSTASH_REDIS_REST_URL=your_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token
```

Start the backend server:

**Development mode:**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The backend server runs on port `5001` by default.

### 3. Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Vite will display the local development URL in your terminal (typically `http://localhost:5173`).

## 🔗 API Endpoints

Base URL: `http://localhost:5001/api/notes`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all notes |
| GET | `/:id` | Get a note by ID |
| POST | `/` | Create a new note |
| PUT | `/:id` | Update an existing note |
| DELETE | `/:id` | Delete a note |

## 🛡️ Rate Limiting

NoteNest uses Upstash Redis and Upstash Rate Limit to protect the backend API from excessive requests.

- Allows up to **100 requests per 60 seconds**.
- Uses a sliding window rate-limiting algorithm.
- Returns HTTP status `429` when the request limit is exceeded.

## 📦 Available Scripts

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start development server using Nodemon |
| `npm start` | Start production server |

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## 🔐 Environment Variables

Make sure to configure all required environment variables before starting the backend.

Never commit your `.env` file or expose your database and Redis credentials publicly.

---

⭐ If you find NoteNest useful, don't forget to give this repository a star!
