import { Palette } from 'lucide-react'
import { Module } from '../types'

export const module9: Module = {
  id: 9,
  title: "Styling in React",
  level: "Intermediate",
  description:
    "Learn the various ways to style React applications, from standard CSS to modern utility-first frameworks like Tailwind CSS.",

  icon: Palette,
  color: "from-pink-400 to-rose-600",
  shadow: "shadow-rose-500/10",

  slides: [
    {
      title: "Introduction to Styling",
      content:
        "There is no single 'right' way to style a React app. Depending on the project size and team preference, you can choose from plain CSS, CSS Modules, Styled Components, or Utility frameworks like Tailwind. This module covers the most popular methods used in the industry today.",
      code:
`// Popular Styling Methods:
// 1. Inline Styles
// 2. CSS Modules
// 3. Tailwind CSS
// 4. CSS-in-JS (Styled Components)`
    },

    {
      title: "Inline Styling",
      content:
        "In React, inline styles are passed as an object to the 'style' attribute. Because it's a JavaScript object, property names use camelCase (e.g., 'backgroundColor' instead of 'background-color') and values are strings.",
      code:
`const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

<h1 style={myStyle}>Hello Style!</h1>`
    },

    {
      title: "External CSS Files",
      content:
        "This is the traditional way. You create a .css file and import it directly into your JavaScript file. Note that these styles are 'global'—a class defined in one file can affect elements in another file if the names match.",
      code:
`/* App.css */
.title { color: blue; }

// App.jsx
import './App.css';
<h1 className="title">Blue Title</h1>`
    },

    {
      title: "CSS Modules",
      content:
        "CSS Modules solve the 'global scope' problem. By naming your file 'Header.module.css', the classes are automatically scoped to that specific component. React generates a unique class name at build time, preventing style conflicts.",
      code:
`// Header.module.css
.nav { background: gray; }

// Header.jsx
import styles from './Header.module.css';
<nav className={styles.nav}>...</nav>`
    },

    {
      title: "Conditional Classes",
      content:
        "React makes it easy to apply styles based on state. You can use template literals or logical operators to toggle class names dynamically.",
      code:
`const [isActive, setIsActive] = useState(false);

<div className={\`box \${isActive ? 'active' : 'inactive'}\`}>
  Status Box
</div>`
    },

    {
      title: "Dynamic Styling",
      content:
        "You can also inject state values directly into inline styles. This is perfect for values that change constantly, like a progress bar width or an element's position based on mouse movement.",
      code:
`const [width, setWidth] = useState(50);

<div style={{ 
  width: \`\${width}%\`, 
  height: "20px", 
  background: "green" 
}} />`
    },

    {
      title: "Responsive Design Basics",
      content:
        "Responsive design ensures your app looks great on phones, tablets, and desktops. In standard CSS, we use '@media' queries to change styles based on the screen width.",
      code:
`/* Standard Media Query */
.container { width: 100%; }

@media (min-width: 768px) {
  .container { width: 50%; }
}`
    },

    {
      title: "Tailwind CSS Setup",
      content:
        "Tailwind is a 'utility-first' CSS framework. Instead of writing custom CSS, you apply pre-defined classes directly to your HTML elements. It speeds up development significantly and keeps your bundle size small.",
      code:
`# Setup Tailwind via terminal:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`
    },

    {
      title: "Utility Classes",
      content:
        "With Tailwind, classes represent specific CSS properties. 'p-4' means padding: 1rem; 'bg-blue-500' means background-color: #3b82f6; 'flex' means display: flex. You combine these to build your entire UI.",
      code:
`<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="text-xl font-medium text-black">ChitChat</div>
</div>`
    },

    {
      title: "Responsive Tailwind Layouts",
      content:
        "Tailwind makes responsive design incredibly easy using prefixes. 'md:w-1/2' means 'width 50% on medium screens and up'. You don't need to write a single media query manually.",
      code:
`{/* Mobile: 1 column, Desktop: 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>`
    },

    {
      title: "Styled Components Introduction",
      content:
        "Styled Components is a popular library for 'CSS-in-JS'. It allows you to write actual CSS code inside your JavaScript using template literals. It automatically scopes styles and allows you to use props directly in your CSS.",
      code:
`import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? "blue" : "white"};
  color: \${props => props.primary ? "white" : "blue"};
  padding: 10px 20px;
\`;`
    },

    {
      title: "Theme Styling",
      content:
        "When using libraries like Tailwind or Styled Components, you can define a central 'theme' (colors, spacing, fonts). This ensures visual consistency across your entire application and makes global changes easy.",
      code:
`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1fb6ff',
      }
    }
  }
}`
    },

    {
      title: "Animation Basics",
      content:
        "Animations bring your app to life. You can use standard CSS transitions and keyframes, or use React-specific libraries like 'Framer Motion' for complex, high-performance interactions.",
      code:
`import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
/>`
    },

    {
      title: "React Icons",
      content:
        "Icons are essential for modern UIs. The 'lucide-react' or 'react-icons' libraries allow you to import thousands of popular icons (like FontAwesome, Material UI) as simple React components.",
      code:
`import { User, Settings, LogOut } from 'lucide-react';

<button>
  <User size={20} className="mr-2" />
  View Profile
</button>`
    },

    {
      title: "UI Design Best Practices",
      content:
        "1. Be consistent with spacing and colors. 2. Use a mobile-first approach. 3. Ensure high contrast for accessibility. 4. Use meaningful white space to group related elements. 5. Keep interactive elements (buttons) easy to tap on mobile.",
      code:
`// Design Checklist:
// - Contrast ratio > 4.5:1
// - Touch targets > 44px
// - Consistent font scale
// - Logical information hierarchy`
    },

    {
      title: "Mini Project — Responsive Landing Page",
      content:
        "We'll build a modern, responsive landing page using Tailwind CSS. It will include a sticky navigation bar, a hero section with animations, a features grid, and a responsive footer.",
      code:
`function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Put your styling skills to the test! 1. Build a 'Dark Mode' toggle using only CSS Variables. 2. Create a responsive 'Product Card' that changes layout on mobile. Quiz: 1. Advantage of CSS Modules? 2. What does 'md:' prefix do in Tailwind? 3. Inline style syntax for 'margin-top'?",
      code:
`// Exercise: Dynamic Progress Bar
// Create a bar that changes color 
// from green to red as the percentage increases.

const color = percent > 80 ? 'red' : 'green';
<div style={{ width: \`\${percent}%\`, background: color }} />`
    }
  ]
}
