import { Layout } from 'lucide-react'
import { Module } from '../types'

export const module11: Module = {
  id: 11,
  title: "React Project Architecture",
  level: "Advanced",
  description:
    "Learn how to structure large-scale React applications. Master folder organization, design patterns, and clean code principles for professional development.",

  icon: Layout,
  color: "from-emerald-400 to-green-600",
  shadow: "shadow-green-500/10",

  slides: [
    {
      title: "Scalable Folder Structure",
      content:
        "When a project grows from 5 files to 500, a flat structure becomes impossible to manage. A scalable structure groups files by their 'responsibility' (e.g., components, hooks, services, assets). This makes it easy for multiple developers to work on the same project without getting lost.",
      code:
`src/
├── assets/      # Images, Global CSS
├── components/  # Reusable UI parts
├── hooks/       # Custom React hooks
├── services/    # API & Logic layer
├── context/     # Global state
└── pages/       # Route-level components`
    },

    {
      title: "Organizing Components",
      content:
        "Components should be organized based on their scope. 'Atomic Design' is a popular methodology: 1. Atoms (basic buttons). 2. Molecules (search bars). 3. Organisms (headers/navbars). Alternatively, you can group them by 'feature' (e.g., components/auth, components/dashboard).",
      code:
`components/
├── common/      # Generic Buttons, Inputs
├── layout/      # Navbar, Sidebar, Footer
└── features/    # Feature-specific parts
    ├── cart/    # CartItem, CartSummary
    └── auth/    # LoginForm, SignupForm`
    },

    {
      title: "Shared Components",
      content:
        "Shared (or 'Common') components are those that appear multiple times across the app with the same design but different content. They should be highly flexible, accepting 'props' for colors, sizes, and labels, making them truly 'DRY' (Don't Repeat Yourself).",
      code:
`// Example of a reusable Button
const Button = ({ variant, size, children, ...props }) => {
  const classes = \`btn btn-\${variant} btn-\${size}\`;
  return <button className={classes} {...props}>{children}</button>;
};`
    },

    {
      title: "Utility Functions",
      content:
        "Utility functions (utils) are simple JavaScript functions that don't depend on React. Examples include: formatting dates, calculating prices, or validating email strings. Keeping these in a 'utils/' folder makes them easy to test and reuse anywhere in your app.",
      code:
`// utils/format.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};`
    },

    {
      title: "Constants & Config Files",
      content:
        "Hardcoded strings (like API endpoints or error messages) should be moved to a 'constants/' or 'config/' folder. This prevents 'magic strings' in your code and allows you to update a value in one place to change it everywhere.",
      code:
`// constants/app.js
export const APP_NAME = "SmartShop";
export const ITEMS_PER_PAGE = 12;

// config/api.js
export const API_BASE_URL = "https://api.example.com";`
    },

    {
      title: "Environment Variables",
      content:
        "Values that change between 'Development' and 'Production' (like secret keys or database URLs) must be stored in .env files. These are not committed to Git and keep your sensitive data secure while providing flexibility.",
      code:
`// .env.development
VITE_API_URL=http://localhost:3000

// .env.production
VITE_API_URL=https://api.production.com`
    },

    {
      title: "Clean Code Principles",
      content:
        "1. KISS (Keep It Simple, Stupid). 2. DRY (Don't Repeat Yourself). 3. SoC (Separation of Concerns). 4. Single Responsibility (A component should do ONE thing well). Clean code is about writing code that your 'future self' or a 'teammate' can understand easily.",
      code:
`// Bad: Component handles UI + API + Formatting
// Good: 
// - Service handles API
// - Utils handle Formatting
// - Component handles UI only`
    },

    {
      title: "Reusable Hooks Structure",
      content:
        "Custom hooks should be stored in the 'hooks/' directory. Each hook should be in its own file named after the hook (e.g., useAuth.js). This separation keeps your component files clean and makes your logic extremely portable.",
      code:
`hooks/
├── useAuth.js
├── useLocalStorage.js
├── useFetch.js
└── useDebounce.js`
    },

    {
      title: "Service Layer Pattern",
      content:
        "The Service Layer is where your business logic and API interactions live. Instead of calling 'fetch' inside a component, you call a function from a 'service'. This makes your API logic reusable across multiple components and much easier to mock for testing.",
      code:
`// services/userService.js
import axios from 'axios';

export const getUsers = () => axios.get('/users');
export const getUserById = (id) => axios.get(\`/users/\${id}\`);`
    },

    {
      title: "API Separation",
      content:
        "By separating API logic, your components become 'dumb' UI renderers. They don't care IF you use Fetch, Axios, or GraphQL; they just call a function and get data back. This 'abstraction' is key to building maintainable apps.",
      code:
`// In Component:
const { data } = await userService.getUsers();

// Changing from Fetch to Axios?
// Only 1 file (userService.js) needs to change!`
    },

    {
      title: "State Organization",
      content:
        "Not all state is global. Follow the 'Rule of Least Privilege': 1. If only one component needs it, use useState. 2. If a parent and children need it, lift state up. 3. If the whole app needs it (Theme, User), use Context or Redux.",
      code:
`// State Strategy:
// - Local: Component only
// - Lifted: Sibling components
// - Global: Entire App
// - Server: Cache (React Query)`
    },

    {
      title: "Naming Conventions",
      content:
        "Consistency is key. 1. Components (PascalCase). 2. Hooks (camelCase starting with 'use'). 3. Utils/Constants (camelCase or SCREAMING_SNAKE_CASE). 4. Folders (kebab-case or lower-case).",
      code:
`// ✅ Good
const UserProfile = () => {...}
const [user, setUser] = useState();
const API_URL = "...";

// ❌ Bad
const user_profile = () => {...}
const MyHook = () => {...}`
    },

    {
      title: "Code Splitting Structure",
      content:
        "Large apps should be split at the route level. Each 'page' in your 'pages/' folder should be lazy-loaded. This ensures the user only downloads the code for the page they are currently viewing, making the initial load lightning fast.",
      code:
`// AppRoutes.jsx
const Home = lazy(() => import('../pages/Home'));
const Admin = lazy(() => import('../pages/Admin'));

<Route path="/" element={<Home />} />`
    },

    {
      title: "Project Best Practices",
      content:
        "1. Use ESLint and Prettier for consistent formatting. 2. Commit code often with descriptive messages. 3. Document complex logic with comments. 4. Regularly update dependencies. 5. Perform code reviews within your team.",
      code:
`// Professional Workflow:
// 1. Feature Branch (git checkout -b feature)
// 2. Code (Clean, DRY, SoC)
// 3. PR (Pull Request)
// 4. Review & Merge`
    },

    {
      title: "Mini Project — Professional Dashboard Structure",
      content:
        "We won't just build a component; we'll architect a whole project folder system. We'll set up the services, hooks, and layout components for a high-end dashboard, demonstrating how data flows from the service layer to the UI.",
      code:
`// Project Architecture Demo:
// - Mock Service Layer
// - Custom useDashboard Hook
// - Scoped Tailwind Classes
// - Reusable Chart Atoms`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Architect challenge! 1. Refactor a messy component into UI + Service + Utils. 2. Design a folder structure for a 'Social Media' app. Quiz: 1. Difference between 'utils' and 'hooks'? 2. Why use a Service Layer? 3. What is Atomic Design?",
      code:
`// Exercise: Folder Map
// Draw (or list) where these go:
// 1. API Token (env)
// 2. Date Formatter (utils)
// 3. Primary Button (common)
// 4. Auth Logic (hooks or services)`
    }
  ]
}
