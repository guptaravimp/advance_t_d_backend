### Deployment URL
- **Production URL**: `https://advance-t-d-backend.vercel.app/`
- **API Base URL**: `https://advance-t-d-backend.vercel.app/api/v1`

# Todo App Backend

A Node.js backend API for a Todo application built with Express.js and MongoDB.

## 📖 Project Overview

This backend serves as the API layer for a full-stack Todo application. It provides RESTful endpoints for managing todos and categories, with MongoDB as the persistent storage layer. The application follows MVC architecture with clear separation of concerns:

- **Models**: Mongoose schemas for Todo and Category entities
- **Controllers**: Business logic for handling API requests
- **Routes**: API endpoint definitions and middleware
- **Database**: MongoDB with Mongoose ODM for data persistence

### Key Features:
- RESTful API design with proper HTTP methods
- Data validation using Mongoose schemas
- CORS configuration for frontend integration
- Environment-based configuration management
- Error handling and response standardization

## 🚀 Features

- **Todo Management**: Create, read, update, and delete todos
- **Category Management**: Organize todos with custom categories
- **RESTful API**: Clean and well-structured API endpoints
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **CORS Support**: Configured for frontend integration
- **Environment Configuration**: Secure configuration management
  
## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/guptaravimp/advance_t_d_backend.git
   cd advance_t_d_backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todoapp
   ```
4. **Add cors in inex.js.
   ```
   app.use(cors({
    origin:"http://localhost:5173"
   }))
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`


## 📁 Project Structure

```
Backend/
├── config/
│   └── Database.js          # Database connection configuration
├── controllers/
│   ├── categoryController.js # Category business logic
│   └── todoController.js     # Todo business logic
├── models/
│   ├── Category.js          # Category schema
│   └── todoSchma.js         # Todo schema
├── routes/
│   ├── categoryRoutes.js    # Category routes
│   └── todoRoutes.js        # Todo routes
├── index.js                 # Main application entry point
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 📋 API Endpoints

### Todo Routes (`/api/v1`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/getAllTodo` | Get all todos |
| POST | `/addTodo` | Create a new todo |
| DELETE | `/deleteTodo` | Delete a todo by ID |

### Category Routes (`/api/v1`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/getAllCategory` | Get all categories |

## 🗄️ Database Schema

### Todo Schema
```javascript
{
  title: String (required),
  description: String (required),
  category: String (enum: ["Work", "Health", "Finance", "Travel"]),
  status: String (enum: ["Pending", "Completed"], default: "Pending"),
  startDate: Date (default: Date.now),
  endDate: Date (required),
  timestamps: true
}
```

### Category Schema
```javascript
{
  name: String (required, unique),
  timestamps: true
}
```
