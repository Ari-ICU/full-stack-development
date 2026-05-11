import { Lock } from 'lucide-react'
import { Module } from '../types'

export const module13: Module = {
  id: 13,
  title: "Authentication System",
  level: "Advanced",
  description:
    "Master secure user access. Learn how to handle login, registration, JWT tokens, and role-based protection for your React applications.",

  icon: Lock,
  color: "from-red-400 to-rose-600",
  shadow: "shadow-rose-500/10",

  slides: [
    {
      title: "Introduction to Authentication",
      content:
        "Authentication is the process of verifying WHO a user is. In React, this involves collecting credentials, communicating with a backend API, and storing a 'session' or 'token' so the user stays logged in as they navigate. Secure authentication is the backbone of any modern web application.",
      code:
`// Auth Workflow:
// 1. User enters Email/Password
// 2. React sends data to Backend
// 3. Backend returns a Token (JWT)
// 4. React saves Token & allows access`
    },

    {
      title: "Login Form",
      content:
        "A login form is a controlled component with two primary fields: email/username and password. Upon submission, it calls an authentication service. It's important to provide visual feedback (like a loading spinner) during the request.",
      code:
`const [creds, setCreds] = useState({ email: "", pass: "" });

const handleSubmit = async (e) => {
  e.preventDefault();
  const success = await authService.login(creds);
  if (success) navigate('/dashboard');
};`
    },

    {
      title: "Registration Form",
      content:
        "The registration form collects more data (Name, Email, Password, Confirm Password). It should include validation to ensure the email is valid and that the passwords match before even sending a request to the server.",
      code:
`const [user, setUser] = useState({ name: "", email: "", pass: "" });

// Validation:
if (user.pass !== confirmPass) {
  setError("Passwords do not match!");
  return;
}`
    },

    {
      title: "JWT Basics",
      content:
        "JSON Web Tokens (JWT) are the industry standard for securely transmitting information between the server and the frontend. A token is a long string that 'proves' the user is authenticated. It contains encoded user data and an expiration date.",
      code:
`// Example JWT structure:
// header.payload.signature

// payload might contain:
// { "id": 1, "role": "admin", "exp": 12345678 }`
    },

    {
      title: "Saving Tokens",
      content:
        "Once you receive a token from the server, you need to save it. You can store it in 'LocalStorage' (easier) or 'Cookies' (more secure against XSS). This token must be included in the 'Authorization' header of every future API request.",
      code:
`// Save token:
localStorage.setItem('token', response.token);

// Use token:
axios.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;`
    },

    {
      title: "LocalStorage Authentication",
      content:
        "LocalStorage allows you to keep the user logged in even if they close the browser. When the app first loads, you check for a token. If it exists, you set the initial authentication state to 'logged in'.",
      code:
`const initialUser = JSON.parse(localStorage.getItem('user'));
const [user, setUser] = useState(initialUser);`
    },

    {
      title: "Protected Routes",
      content:
        "Protected routes are components that check if a user is logged in before rendering a page. If the user is not authenticated, the component automatically redirects them to the login page using the 'Navigate' component.",
      code:
`function Protected({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}`
    },

    {
      title: "User Session Handling",
      content:
        "Session handling involves managing the lifecycle of a user's logged-in state. This includes checking if a token has expired and handling 'Unauthorized' (401) errors from the API by automatically logging the user out.",
      code:
`axios.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
       authService.logout();
    }
    return Promise.reject(err);
  }
);`
    },

    {
      title: "Logout System",
      content:
        "Logging out is as simple as: 1. Clearing the token and user data from LocalStorage. 2. Setting the Auth state to 'null'. 3. Redirecting the user to the home or login page. This ensures no sensitive data remains in the browser.",
      code:
`const logout = () => {
  localStorage.removeItem('token');
  setUser(null);
  navigate('/login');
};`
    },

    {
      title: "Persist Login State",
      content:
        "To prevent a 'flicker' where the user sees the login page for a split second on refresh, you should perform the 'token check' before the app even renders its first frame, often using a 'loading' state during the initial check.",
      code:
`const [checking, setChecking] = useState(true);

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) validateToken(token);
  setChecking(false);
}, []);`
    },

    {
      title: "Auth Context API",
      content:
        "Because almost every component needs to know if a user is logged in, you should store the user data in a global Context. This allows you to call 'useAuth()' from any component to get the current user or trigger a logout.",
      code:
`const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};`
    },

    {
      title: "Role-based Access",
      content:
        "More advanced apps need 'Roles' (e.g., User, Editor, Admin). Your Protected Route should accept an 'allowedRoles' prop and verify that the user's role matches before granting access to a specific page.",
      code:
`function RequireRole({ role, children }) {
  const { user } = useAuth();
  if (user.role !== role) return <AccessDenied />;
  return children;
}`
    },

    {
      title: "Authentication Best Practices",
      content:
        "1. Always use HTTPS. 2. Never store passwords in the browser. 3. Use secure, HttpOnly cookies for tokens if possible. 4. Implement 'Loading' states for all auth actions. 5. Provide clear error messages for 'Wrong Password' vs 'Server Error'.",
      code:
`// Security Checklist:
// - Use JWT expiration
// - Sanitize inputs
// - Implement CSRF protection
// - Add "Remember Me" option securely`
    },

    {
      title: "Mini Project — Login Dashboard",
      content:
        "We'll build a secure dashboard from scratch. We'll implement a Login page, a global AuthProvider, and Protected Routes that ensure only authorized users can see the 'Sales Data' and 'Admin Settings'.",
      code:
`function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={
          <Protected><Dashboard /></Protected>
        } />
      </Routes>
    </AuthProvider>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Secure the app! 1. Implement a 'Forgot Password' UI flow. 2. Add an 'Auto-logout' timer after 30 minutes of inactivity. Quiz: 1. Difference between LocalStorage and Cookies for tokens? 2. What is a 401 error? 3. Why use Context for Auth?",
      code:
`// Exercise: User Profile Page
// 1. Create a page at /profile
// 2. Make it protected
// 3. Display user email and role from AuthContext

const { user } = useAuth();
return <h1>Welcome, {user.name}</h1>;`
    }
  ]
}
