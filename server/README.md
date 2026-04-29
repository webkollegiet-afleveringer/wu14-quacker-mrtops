# Quacker Backend API (MongoDB)

## Setup Instructions

### 1. Install MongoDB
- **macOS:** `brew tap mongodb/brew && brew install mongodb-community`
- **Start MongoDB:** `brew services start mongodb-community`
- **Windows/Linux:** https://www.mongodb.com/docs/manual/installation/

### 2. Install Dependencies
```bash
cd server
npm install
```

### 3. Configure Environment
Edit `.env` file if needed. Default uses local MongoDB.

### 4. Run Development Server
```bash
npm run dev
```

Server will start on http://localhost:3000

## API Endpoints

### Auth
- **POST** `/api/auth/register` - Register new user
  ```json
  { "username": "testuser", "email": "test@example.com", "password": "password123" }
  ```

- **POST** `/api/auth/login` - Login user
  ```json
  { "email": "test@example.com", "password": "password123" }
  ```

### Users
- **GET** `/api/users/me` - Get current user (requires `Authorization: Bearer <token>`)
  - Returns: username, email, followers count, following count

### Posts
- **POST** `/api/posts/` - Create a post (requires auth)
  ```json
  { "content": "Hello Quacker!" }
  ```

- **GET** `/api/posts/` - Get all posts (requires auth)

## Available Scripts
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
