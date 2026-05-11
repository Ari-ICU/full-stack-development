import { BookOpen } from 'lucide-react'
import { Module } from '../types'

export const module1: Module = {
  id: 1,
  title: "React Fundamentals",
  level: "Beginner",
  description:
    "Master the core concepts of React, from understanding why it's the industry standard to building your first interactive components with JSX.",
  icon: BookOpen,
  color: "from-blue-400 to-blue-600",
  shadow: "shadow-blue-500/10",

  slides: [
    {
      title: "Introduction to React",
      content:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Developed by Facebook, it allows you to build complex UIs from small, isolated pieces of code called 'components'. React's primary goal is to make the process of building UIs more predictable and easier to debug.",
      code:
`// A simple React component
function Welcome() {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h1 className="text-2xl font-bold text-blue-600">Hello, React!</h1>
      <p className="text-gray-600">Start building amazing user interfaces.</p>
    </div>
  );
}`
    },

    {
      title: "Why React is Popular",
      content:
        "React dominates the frontend world for several key reasons: its component-based architecture promotes reusability, its Virtual DOM ensures high performance, and its massive ecosystem provides tools for almost every need. It's used by industry giants like Netflix, Airbnb, and Instagram, making it a highly valuable skill for developers.",
      code:
`// Why Developers Love React:
// 1. Reusable Components - Build once, use everywhere.
// 2. Declarative UI - Describe HOW the UI should look.
// 3. Strong Community - Infinite libraries and support.
// 4. Job Market - Highest demand for frontend engineers.
// 5. SEO Friendly - Can be rendered on the server.`
    },

    {
      title: "Single Page Applications (SPA)",
      content:
        "Unlike traditional websites that reload the entire page for every link clicked, React builds Single Page Applications. In an SPA, the initial page load fetches the necessary code, and subsequent interactions only update specific parts of the page. This creates a seamless, app-like experience that is much faster for the user.",
      code:
`// Traditional Web vs SPA
// Traditional: Click -> Server Request -> Entire Page Reloads
// SPA (React): Click -> JavaScript Updates DOM -> No Page Reload

const SPA_Benefits = {
  speed: "Instant transitions",
  ux: "Smooth, app-like feel",
  bandwidth: "Less data transferred after first load"
};`
    },

    {
      title: "Understanding Virtual DOM",
      content:
        "Updating the real browser DOM is expensive and slow. React solves this by creating a 'Virtual DOM'—a lightweight copy of the real DOM in memory. When state changes, React updates the Virtual DOM first, compares it with the previous version (diffing), and then only updates the necessary parts of the real DOM (patching).",
      code:
`// The Reconciliation Process:
// 1. State changes
// 2. React creates a new Virtual DOM tree
// 3. Diffing: Compare new tree with old tree
// 4. Update: Only changed elements are updated in the real DOM

// Result: Extremely fast UI updates even in complex apps.`
    },

    {
      title: "Installing Node.js & npm",
      content:
        "To develop with React, you need Node.js installed on your machine. Node.js comes with npm (Node Package Manager), which you'll use to install React and other libraries. We recommend using the LTS (Long Term Support) version for stability.",
      code:
`# Check if you have Node.js installed
node -v

# Check if you have npm installed
npm -v

# Download at: https://nodejs.org`
    },

    {
      title: "Creating React App with Vite",
      content:
        "Vite is the modern replacement for Create React App. It's significantly faster and provides a better developer experience. Using Vite, you can set up a production-ready React environment in seconds.",
      code:
`# Create a new project
npm create vite@latest my-react-app -- --template react

# Navigate to project folder
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev`
    },

    {
      title: "Understanding React Project Structure",
      content:
        "A standard Vite-React project has a clean structure. 'node_modules' stores libraries, 'public' is for static assets, and 'src' is where 99% of your coding happens. 'main.jsx' is the entry point that hooks your React app into the HTML.",
      code:
`my-app/
├── node_modules/   # External libraries
├── public/         # Static assets (favicon, etc.)
├── src/            # YOUR CODE
│   ├── assets/     # Images/Styles
│   ├── App.jsx     # Root component
│   └── main.jsx    # Entry point
├── index.html      # The single HTML file
└── package.json    # Project metadata & scripts`
    },

    {
      title: "Running React Development Server",
      content:
        "The development server provided by Vite includes 'Hot Module Replacement' (HMR). This means when you save a file, the browser updates instantly without a full page reload, preserving the current state of your application while you work.",
      code:
`# Commands to know:

npm run dev    # Starts local dev server
npm run build  # Creates production-ready files
npm run preview # Test your production build locally`
    },

    {
      title: "JSX Introduction",
      content:
        "JSX (JavaScript XML) is a syntax extension for JavaScript. It looks like HTML but lives inside your JavaScript files. React uses JSX to describe what the UI should look like. It's not required, but it makes React code much more readable and easier to write.",
      code:
`// This is JSX
const element = <h1 className="title">Hello World</h1>;

// Behind the scenes, it becomes:
const element2 = React.createElement(
  'h1',
  { className: 'title' },
  'Hello World'
);`
    },

    {
      title: "JSX Rules",
      content:
        "JSX follows strict rules: 1. You must return a single parent element (or a fragment). 2. Close all tags (even self-closing ones like <img />). 3. Use camelCase for attributes (e.g., className instead of class, onClick instead of onclick).",
      code:
`function Rules() {
  return (
    <> {/* 1. Wrapper needed */}
      <h1 className="heading">Rule 1</h1> {/* 3. className */}
      <br /> {/* 2. Self-closing tag */}
    </>
  );
}`
    },

    {
      title: "Embedding JavaScript in JSX",
      content:
        "The real power of JSX comes from being able to use JavaScript directly inside your UI. Any valid JavaScript expression (variables, function calls, math) can be wrapped in curly braces { } and rendered.",
      code:
`function Math() {
  const name = "Developer";
  const year = 2024;

  return (
    <div>
      <p>Hello, {name}!</p>
      <p>Calculated value: {10 * 5}</p>
      <p>Status: {year > 2000 ? "Modern" : "Legacy"}</p>
    </div>
  );
}`
    },

    {
      title: "React Rendering",
      content:
        "Rendering is the process where React calls your components to figure out what should be on the screen. The root component (App) is rendered into a specific DOM element (usually <div id='root'>) in your index.html using ReactDOM.",
      code:
`// src/main.jsx
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)`
    },

    {
      title: "React Fragments",
      content:
        "Sometimes you need to return multiple elements but don't want to add an extra <div> to the DOM (which can mess up layouts/CSS). React Fragments (<> ... </>) allow you to group multiple children without adding an extra node to the HTML.",
      code:
`function TableData() {
  return (
    <>
      <td>Name</td>
      <td>Age</td>
      <td>Email</td>
    </>
  );
}

// Result in HTML: <td>Name</td><td>Age</td>... 
// (No extra div wrapper!)`
    },

    {
      title: "React Developer Tools",
      content:
        "Debugging React is much easier with the React DevTools browser extension. It allows you to inspect the component hierarchy, see what props are being passed, and even track state changes in real-time.",
      code:
`// Search for "React Developer Tools" on:
// - Chrome Web Store
// - Firefox Add-ons

// Key Features:
// 1. Components Tab - Inspect the tree
// 2. Profiler Tab - Measure performance`
    },

    {
      title: "React Best Practices",
      content:
        "Writing clean React code is essential: 1. Keep components small and focused on one thing. 2. Use descriptive names for components (PascalCase). 3. Keep business logic separate from UI where possible. 4. Always use 'className' and never touch the real DOM directly.",
      code:
`// Good Practice: Component naming
function UserProfile() { ... }

// Good Practice: Small components
function Header() { ... }
function Content() { ... }
function Footer() { ... }

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}`
    },

    {
      title: "Mini Project — Welcome App",
      content:
        "Let's put everything together. We'll build a Welcome App that displays a user's name, the current date, and a greeting message using a reusable component and JSX embedding.",
      code:
`function Greeting({ name }) {
  const date = new Date().toLocaleDateString();
  
  return (
    <div className="card">
      <h1>Welcome, {name}!</h1>
      <p>Today is {date}</p>
      <button onClick={() => alert('Ready to learn!')}>
        Get Started
      </button>
    </div>
  );
}

export default function App() {
  return <Greeting name="Future React Master" />;
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Test your knowledge! Try to create a component that displays a list of your favorite React features. Quiz: 1. What does JSX stand for? 2. Why do we use Fragments? 3. What is the command to create a Vite project?",
      code:
`// Exercise: Create a 'CourseCard' component
// Requirements:
// 1. Use a Fragment
// 2. Embed a variable 'title'
// 3. Add a className 'card-border'

function CourseCard() {
  const title = "React Fundamentals";
  return (
    <>
      <h2 className="card-border">{title}</h2>
      <p>Learn the basics of React!</p>
    </>
  );
}`
    }
  ]
}