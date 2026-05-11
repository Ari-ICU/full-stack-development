import { Globe } from 'lucide-react'
import { Module } from '../types'

export const module8: Module = {
  id: 8,
  title: "React Router",
  level: "Advanced",
  description:
    "Master multi-page application development. Learn how to handle navigation, dynamic routing, and protected pages in modern React SPAs.",

  icon: Globe,
  color: "from-green-400 to-teal-600",
  shadow: "shadow-teal-500/10",

  slides: [
    {
      title: "Introduction to React Router",
      content:
        "React applications are 'Single Page Applications' (SPAs), meaning they don't reload the entire page when you navigate. React Router is the industry-standard library that enables this 'fake' navigation, allowing you to map different URLs to different components seamlessly.",
      code:
`// Why React Router?
// 1. Single Page Experience (No refresh)
// 2. URL-to-Component Mapping
// 3. Nested Layouts
// 4. Secure Authentication Routing`
    },

    {
      title: "Installing React Router",
      content:
        "To get started, you need to install the 'react-router-dom' package. This is the web version of React Router, optimized for browser environments.",
      code:
`# Install via terminal:
npm install react-router-dom`
    },

    {
      title: "BrowserRouter Setup",
      content:
        "The first step is to wrap your entire application (usually in main.jsx or index.js) with the 'BrowserRouter' component. This enables the routing history API and allows all child components to use routing features.",
      code:
`import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`
    },

    {
      title: "Creating Routes",
      content:
        "Inside your App component, you use the 'Routes' and 'Route' components. 'Routes' acts as a container, while each 'Route' defines a 'path' (the URL) and an 'element' (the component to show).",
      code:
`import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}`
    },

    {
      title: "Link Navigation",
      content:
        "In React Router, you should NEVER use standard <a> tags for internal links, as they cause a full page refresh. Instead, use the 'Link' component. It updates the URL and changes the view instantly without reloading the browser.",
      code:
`import { Link } from 'react-router-dom';

<Link to="/about">About Us</Link>
<Link to="/contact">Contact</Link>`
    },

    {
      title: "NavLink Navigation",
      content:
        "The 'NavLink' is a special version of Link that is aware of the current active URL. It's perfect for Navbars because it can automatically apply an 'active' CSS class (or style) to the link that matches the current page.",
      code:
`import { NavLink } from 'react-router-dom';

<NavLink 
  to="/home" 
  className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-gray-500'}
>
  Home
</NavLink>`
    },

    {
      title: "Dynamic Routes",
      content:
        "Dynamic routes allow you to handle URLs with variable parts, like '/user/123' or '/product/phone'. You define these variables using a colon (:) followed by the parameter name.",
      code:
`// Defines a dynamic parameter called "id"
<Route path="/user/:id" element={<UserProfile />} />

// Matches: /user/1, /user/abc, /user/john-doe`
    },

    {
      title: "useParams Hook",
      content:
        "To access the dynamic values from the URL inside your component, you use the 'useParams' hook. It returns an object where the keys are your parameter names defined in the Route.",
      code:
`import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <h1>Viewing Profile for User: {id}</h1>;
}`
    },

    {
      title: "Nested Routes",
      content:
        "Nested routes allow you to render components inside other components. This is great for sub-navigation menus or sidebars. You nest the child 'Route' tags inside a parent 'Route'.",
      code:
`<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>`
    },

    {
      title: "Layout Routes",
      content:
        "When using nested routes, the parent component needs to know WHERE to render the children. You use the 'Outlet' component for this. Think of Outlet as a 'placeholder' for the currently active sub-route.",
      code:
`import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* Child routes go here! */}
      </div>
    </div>
  );
}`
    },

    {
      title: "useNavigate Hook",
      content:
        "Sometimes you need to move the user to a different page automatically (e.g., after they click a button or log in). The 'useNavigate' hook gives you a function to navigate programmatically.",
      code:
`import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleLogin = () => {
  // logic...
  navigate('/dashboard');
};`
    },

    {
      title: "Redirecting Users",
      content:
        "To immediately redirect a user if they reach a certain path, you can use the 'Navigate' component. It's often used for handling authentication or old URL redirects.",
      code:
`import { Navigate } from 'react-router-dom';

// If user hits "/home", redirect to "/"
<Route path="/home" element={<Navigate to="/" />} />`
    },

    {
      title: "Protected Routes",
      content:
        "A Protected Route is a custom component that checks if a user is authorized before allowing them to see a page. If not, it redirects them to the login page.",
      code:
`function ProtectedRoute({ children }) {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" />;
  
  return children;
}`
    },

    {
      title: "Authentication Routing",
      content:
        "You apply protected routes by wrapping the sensitive 'element' in your Route definition. This ensures only logged-in users can access dashboards or admin panels.",
      code:
`<Route 
  path="/admin" 
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  } 
/>`
    },

    {
      title: "Query Parameters",
      content:
        "Query parameters are the key-value pairs at the end of a URL (e.g., '?search=react&sort=desc'). They are often used for filtering and searching without changing the main route path.",
      code:
`// URL: /search?q=books&category=tech

// Standard React Router doesn't have a 
// "useQuery" hook, so we use useLocation.`
    },

    {
      title: "useLocation Hook",
      content:
        "The 'useLocation' hook returns an object that represents the current URL. You can use it to access the 'search' string (query params) or detect which page the user is currently on.",
      code:
`import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const term = query.get('q'); // returns "books"
  
  return <h1>Searching for: {term}</h1>;
}`
    },

    {
      title: "404 Not Found Pages",
      content:
        "To handle cases where a user types a URL that doesn't exist, you use a wildcard path (*). This route will catch any URL that wasn't matched by the routes above it.",
      code:
`<Routes>
  <Route path="/" element={<Home />} />
  {/* Catch-all route */}
  <Route path="*" element={<NotFound />} />
</Routes>`
    },

    {
      title: "Lazy Loading Routes",
      content:
        "Lazy loading is a performance optimization that splits your app into smaller pieces. Instead of loading the entire app at once, React only downloads the code for the specific page the user is visiting.",
      code:
`import { lazy, Suspense } from 'react';

const Admin = lazy(() => import('./pages/Admin'));

<Route path="/admin" element={
  <Suspense fallback={<Loading />}>
    <Admin />
  </Suspense>
} />`
    },

    {
      title: "Code Splitting",
      content:
        "Code splitting (via lazy loading) drastically reduces the initial load time of your application. Large pages like 'Dashboards' or 'Settings' won't slow down the 'Home' page loading speed.",
      code:
`// Benefits of Code Splitting:
// 1. Smaller initial JavaScript bundle
// 2. Faster "Time to First Interaction"
// 3. Users only download what they use`
    },

    {
      title: "Mini Project — Multi Page Dashboard",
      content:
        "Let's build a professional dashboard! It will feature a Main Sidebar, Nested Sub-routes for 'Analytics' and 'Users', a Protected Admin Area, and a beautiful 404 page.",
      code:
`function App() {
  return (
    <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="/app" element={<Layout />}>
          <Route index element={<Stats />} />
          <Route path="users" element={<UserList />} />
       </Route>
    </Routes>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Test your routing knowledge! 1. Implement a 'Breadcrumbs' component using useLocation. 2. Create a dynamic 'Blog' route with post IDs. Quiz: 1. Difference between Link and NavLink? 2. What is an 'Outlet'? 3. Why use 'Suspense'?",
      code:
`// Exercise: Nested User Settings
// 1. Create /user/:id route
// 2. Nest /profile and /security under it
// 3. Use <Outlet /> in the parent UserLayout

<Route path="/user/:id" element={<UserLayout />}>
   <Route path="profile" element={<Profile />} />
   <Route path="security" element={<Security />} />
</Route>`
    }
  ]
}
