import { Layers, Zap, Globe, Shield, Lock, FileUp, FolderTree, Rocket, Activity, Box, Layout, Code, HelpCircle } from 'lucide-react'
import { Module } from '../types'

export const module4: Module = {
  id: 4,
  title: "Full Stack MERN",
  level: "Advanced",
  description: "Bring everything together! Learn to build, secure, and deploy complete full-stack applications using MongoDB, Express, React, and Node.js.",
  icon: Layers,
  color: "from-purple-600 to-blue-700",
  shadow: "shadow-blue-500/20",
  slides: [
    {
      title: "MERN Stack Overview",
      content: "The MERN stack consists of MongoDB, Express, React, and Node.js. It's a popular JavaScript-only stack that allows for rapid development of full-stack web applications with a unified language across the entire development process.",
      code: `// M - MongoDB (Database)
// E - Express (Backend Framework)
// R - React (Frontend Library)
// N - Node.js (Runtime Environment)`
    },
    {
      title: "Connecting React with Node.js",
      content: "Connecting the frontend (React) to the backend (Node/Express) typically involves making HTTP requests. Use tools like 'Axios' or the native 'Fetch API' to communicate with your backend endpoints.",
      code: `// React Side
const fetchData = async () => {
  const res = await axios.get('http://localhost:5000/api/data');
  setData(res.data);
};`
    },
    {
      title: "API Communication",
      content: "Efficient communication between frontend and backend requires structured JSON responses, proper HTTP status codes, and handling CORS (Cross-Origin Resource Sharing) to allow requests from different origins.",
      code: `// Node Side: CORS setup
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));`
    },
    {
      title: "Authentication Flow",
      content: "Full-stack authentication usually follows this flow: 1. User submits credentials. 2. Server validates. 3. Server issues a Token. 4. Frontend stores Token. 5. Frontend sends Token in headers for protected routes.",
      code: `// Flow:
// Login -> Get JWT -> Store in LocalStorage/Cookie
// Request -> Add 'Authorization' Header -> Server Verify`
    },
    {
      title: "JWT Authentication",
      content: "JSON Web Tokens (JWT) are an open, industry-standard method for representing claims securely between two parties. In MERN, they are used to authorize users without keeping session state on the server.",
      code: `const jwt = require('jsonwebtoken');

// Generate Token
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  expiresIn: '1d'
});`
    },
    {
      title: "Protected APIs",
      content: "Protect your backend routes by adding an 'auth' middleware that verifies the JWT token before allowing the request to reach the controller logic.",
      code: `// Protected Route
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json(req.user);
});`
    },
    {
      title: "Uploading Files",
      content: "Handling file uploads (like profile pictures) requires special middleware like 'Multer'. You can store files on the local server or use cloud storage services like Cloudinary or AWS S3.",
      code: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  res.send('Uploaded!');
});`
    },
    {
      title: "Full Stack Folder Structure",
      content: "Organize your project either as a Monorepo (one repository for both) or as two separate repositories. A common monorepo structure has 'client/' and 'server/' folders in the root.",
      code: `mern-project/
├── client/ (React)
├── server/ (Node/Express)
├── .gitignore
└── README.md`
    },
    {
      title: "Deployment Preparation",
      content: "Before deploying, ensure you have set all environment variables, configured your database to allow connections from production IPs, and optimized your frontend for production.",
      code: `# Prepare for production
npm run build # In React folder
# Use process.env for all secrets!`
    },
    {
      title: "Error Handling",
      content: "Implement global error handling on the backend to catch crashes and send friendly messages to the frontend. On the frontend, use 'Error Boundaries' and 'Toast' notifications to alert users.",
      code: `// Backend Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});`
    },
    {
      title: "Production Build",
      content: "In production, the Node server often serves the static React files from the 'build' or 'dist' folder. This simplifies deployment to platforms like Heroku, Render, or DigitalOcean.",
      code: `// Serving React in Node
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});`
    },
    {
      title: "Mini Project — Full Stack Dashboard",
      content: "Create a 'Task Management Dashboard'! Implement user login, fetching tasks from MongoDB, adding new tasks, and displaying them in a beautiful React interface with real-time updates.",
      code: `// Final Project Goal:
// 1. Auth System (JWT)
// 2. CRUD Operations (Tasks)
// 3. Responsive UI (React)
// 4. File Upload (Avatars)`
    },
    {
      title: "Exercises & Quiz",
      content: "1. Connect a React form to a Node POST route. 2. Implement a 'Logout' button that clears the JWT. 3. Why do we need CORS in development?",
      code: `// Quiz:
// 1. What does the 'R' in MERN stand for?
// 2. Where is a JWT typically stored on the client?
// 3. What package is used for file uploads?`
    }
  ]
}
