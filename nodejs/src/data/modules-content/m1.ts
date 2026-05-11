import { Terminal, Box, Server, Files, Activity, ShieldCheck, Code, Cpu, Download, Settings, RefreshCcw, Package, Globe } from 'lucide-react'
import { Module } from '../types'

export const module1: Module = {
  id: 1,
  title: "Node.js Fundamentals",
  level: "Beginner",
  description: "Master the essentials of Node.js: from runtime environment and modules to building your first HTTP server with best practices.",
  icon: Terminal,
  color: "from-green-500 to-emerald-600",
  shadow: "shadow-green-500/20",
  slides: [
    {
      title: "Introduction to Node.js",
      content: "Node.js is a cross-platform, open-source JavaScript runtime built on Chrome's V8 engine. It allows developers to use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
      code: `// Node.js is not a language, it's a runtime!
console.log("Welcome to the Backend World!");`
    },
    {
      title: "Understanding Runtime Environment",
      content: "Unlike the browser, Node.js doesn't have a 'window' or 'document' object. Instead, it provides 'global' and built-in modules to interact with the OS, file system, and network. It's single-threaded but uses the Libuv library to handle asynchronous I/O operations efficiently.",
      code: `console.log(global); // The global object
console.log(process.version); // Node version
console.log(process.platform); // OS Platform`
    },
    {
      title: "Installing Node.js",
      content: "Download the LTS (Long Term Support) version from nodejs.org for stability. Use 'node -v' to verify installation. It's highly recommended to use a version manager like NVM (Node Version Manager) to switch between different Node versions easily.",
      code: `# Verify installation
node -v
npm -v

# Recommended: Use NVM
nvm install --lts`
    },
    {
      title: "npm Basics",
      content: "npm (Node Package Manager) is the world's largest software registry. It comes bundled with Node.js. Use 'npm init' to create a package.json file, which tracks your project's dependencies and metadata.",
      code: `npm init -y # Quick initialize
npm install express # Install a package
npm install -D nodemon # Install dev dependency`
    },
    {
      title: "Creating Node.js Server",
      content: "The built-in 'http' module allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP). You can create a server that listens on a specific port and responds to client requests.",
      code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js Server!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`
    },
    {
      title: "File System (fs) Module",
      content: "The 'fs' module allows you to work with the file system on your computer. You can read, create, update, delete, and rename files. It provides both synchronous and asynchronous (recommended) methods.",
      code: `const fs = require('fs');

// Asynchronous read
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('log.txt', 'Hello Node!', () => {
  console.log('File written!');
});`
    },
    {
      title: "Path Module",
      content: "The 'path' module provides utilities for working with file and directory paths. It handles cross-platform differences (Windows vs POSIX) automatically, ensuring your code works everywhere.",
      code: `const path = require('path');

const filePath = path.join(__dirname, 'uploads', 'image.png');
console.log(filePath);
console.log(path.extname(filePath)); // .png
console.log(path.basename(filePath)); // image.png`
    },
    {
      title: "Event Loop Basics",
      content: "The Event Loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded. It offloads operations to the system kernel whenever possible. It's the secret sauce behind Node's high concurrency.",
      code: `console.log('Start');

setTimeout(() => {
  console.log('Timeout (Macro-task)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise (Micro-task)');
});

console.log('End');`
    },
    {
      title: "Environment Variables",
      content: "Use environment variables to store sensitive information like API keys or database credentials. The 'dotenv' package is the standard way to load '.env' files into 'process.env'.",
      code: `// .env file
PORT=5000
DB_URL=mongodb://localhost:27017

// app.js
require('dotenv').config();
const port = process.env.PORT || 3000;`
    },
    {
      title: "Nodemon Setup",
      content: "Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. It saves you from manual restarts.",
      code: `// package.json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

// Run with:
npm run dev`
    },
    {
      title: "JSON Handling",
      content: "Node.js handles JSON natively. You can parse JSON strings into objects and stringify objects into JSON. This is crucial for building REST APIs that exchange data in JSON format.",
      code: `const data = { name: "Node", type: "Runtime" };

// Object to String
const jsonString = JSON.stringify(data);

// String to Object
const obj = JSON.parse(jsonString);`
    },
    {
      title: "Node.js Best Practices",
      content: "1. Use Asynchronous methods. 2. Always handle errors. 3. Keep your code modular using CommonJS or ESM. 4. Use Environment Variables for secrets. 5. Don't block the Event Loop with heavy computations.",
      code: `// Good Practice: Error Handling
try {
  const data = await fs.promises.readFile('config.json');
} catch (error) {
  console.error("Failed to read config:", error.message);
}`
    },
    {
      title: "Mini Project — Basic HTTP Server",
      content: "Let's combine everything! We'll build a server that serves a JSON response when visiting '/api' and a simple text response for the home page, while logging every request to the console.",
      code: `const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', data: 'API working' }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);`
    },
    {
      title: "Exercises & Quiz",
      content: "Test your knowledge! 1. Create a server that reads a file and sends its content as a response. 2. Use 'path' to join multiple directories. 3. Explain the difference between 'setImmediate' and 'process.nextTick'.",
      code: `// Quiz:
// 1. What engine does Node.js use?
// 2. Is Node.js multi-threaded for user code?
// 3. What command initializes a new project?`
    }
  ]
}
