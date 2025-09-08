### Deployment URL
- **Production URL**: `https://advance-t-d-backend.vercel.app/`
- **API Base URL**: `https://advance-t-d-backend.vercel.app/api/v1`

  
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
