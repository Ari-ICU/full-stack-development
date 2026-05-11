import { Cpu, Server, Route, Shield, List, Code, Layout, Layers, Database, Activity, HelpCircle, Package, Zap } from 'lucide-react'
import { Module } from '../types'

export const module2: Module = {
  id: 2,
  title: "Express.js Backend",
  level: "Beginner",
  description: "Master Express.js to build robust, scalable APIs. Learn routing, middleware, REST principles, and the MVC architecture.",
  icon: Server,
  color: "from-blue-500 to-indigo-600",
  shadow: "shadow-blue-500/20",
  slides: [
    {
      title: "Introduction to Express.js",
      content: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of creating a server and handling different HTTP methods and routes.",
      code: `// Why Express?
// 1. Easy Routing
// 2. Middleware Support
// 3. High Performance
// 4. Large Ecosystem`
    },
    {
      title: "Creating Express Server",
      content: "Setting up an Express server is straightforward. You require the package, initialize it, define a route, and make it listen on a port. It's much cleaner than using the built-in 'http' module.",
      code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
    },
    {
      title: "Routing Basics",
      content: "Routing refers to determining how an application responds to a client request to a particular endpoint (URI/path) and a specific HTTP request method (GET, POST, PUT, DELETE, etc.).",
      code: `app.get('/users', (req, res) => {
  res.json({ message: 'Fetching users...' });
});

app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created!' });
});`
    },
    {
      title: "Route Parameters",
      content: "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the 'req.params' object.",
      code: `// URL: /users/123
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`Searching for user with ID: \${userId}\`);
});`
    },
    {
      title: "Middleware",
      content: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can execute any code, make changes to req/res, and end the cycle.",
      code: `const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to next handler
};

app.use(logger); // Apply globally`
    },
    {
      title: "Request & Response",
      content: "The 'req' object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc. The 'res' object represents the HTTP response that an Express app sends.",
      code: `app.post('/api/data', (req, res) => {
  console.log(req.body); // JSON body
  console.log(req.query); // ?id=1
  res.status(200).send("Received!");
});`
    },
    {
      title: "REST API Basics",
      content: "REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. It uses standard HTTP methods.",
      code: `// RESTful Endpoints:
// GET    /posts     - Get all posts
// GET    /posts/:id - Get one post
// POST   /posts     - Create a post
// PUT    /posts/:id - Update a post
// DELETE /posts/:id - Delete a post`
    },
    {
      title: "CRUD API",
      content: "CRUD stands for Create, Read, Update, and Delete. These are the four basic functions of persistent storage. We can implement these easily using Express and an array or database.",
      code: `let tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});`
    },
    {
      title: "Express Router",
      content: "Use the 'express.Router' class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a 'mini-app'.",
      code: `// routes/userRoutes.js
const router = express.Router();
router.get('/', (req, res) => res.send('User list'));

// server.js
app.use('/users', require('./routes/userRoutes'));`
    },
    {
      title: "Error Handling",
      content: "Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. You can also define custom error-handling middleware by adding four arguments: (err, req, res, next).",
      code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message
  });
});`
    },
    {
      title: "Authentication Middleware",
      content: "You can create custom middleware to protect routes. For example, checking if a valid API key or Token exists in the request headers before allowing access to sensitive data.",
      code: `const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'secret-key') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/admin', auth, (req, res) => {
  res.send('Welcome Admin');
});`
    },
    {
      title: "API Structure",
      content: "Organizing your code is vital as the app grows. A common structure involves separating routes, controllers, models, and middlewares into their own directories.",
      code: `project/
├── controllers/
├── routes/
├── middlewares/
├── models/
└── index.js`
    },
    {
      title: "MVC Pattern",
      content: "MVC (Model-View-Controller) is a design pattern that separates an application into three main components: Model (Data), View (UI), and Controller (Logic). In APIs, 'View' is often just the JSON response.",
      code: `// Controller Example
exports.getUsers = (req, res) => {
  const users = User.findAll(); // Model
  res.json(users); // Response
};`
    },
    {
      title: "Mini Project — REST API Server",
      content: "Build a 'Book Store' API! Support fetching all books, adding a new book, and deleting a book by ID. Use a Router and organized folder structure.",
      code: `const books = [
  { id: 1, title: "Node.js Guide" }
];

router.get('/', (req, res) => res.json(books));
router.post('/', (req, res) => {
  books.push(req.body);
  res.status(201).send();
});`
    },
    {
      title: "Exercises & Quiz",
      content: "1. Create a middleware that logs the time of each request. 2. Build a CRUD API for 'Products'. 3. What is the difference between 'app.use' and 'app.get'?",
      code: `// Quiz:
// 1. What does 'next()' do in middleware?
// 2. How do you access '/users?id=10'?
// 3. Which HTTP method is used for updating?`
    }
  ]
}
