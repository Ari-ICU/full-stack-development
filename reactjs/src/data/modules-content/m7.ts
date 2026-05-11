import { Share2 } from 'lucide-react'
import { Module } from '../types'

export const module7: Module = {
  id: 7,
  title: "React Context API & State Management",
  level: "Advanced",
  description:
    "Learn how to manage global state effortlessly without prop drilling. Master the Context API for building scalable, multi-component applications.",

  icon: Share2,
  color: "from-blue-400 to-indigo-600",
  shadow: "shadow-indigo-500/10",

  slides: [
    {
      title: "Understanding Prop Drilling",
      content:
        "Prop Drilling occurs when you need to pass data from a parent component down through many layers of children that don't actually need the data, just to reach a deeply nested component. This makes code hard to maintain and refactor.",
      code:
`// Prop Drilling Example:
<Parent user={u}>
  <Navbar user={u}>
    <UserMenu user={u}>
      <Avatar user={u} /> // Finally used here!
    </UserMenu>
  </Navbar>
</Parent>`
    },

    {
      title: "Introduction to Context API",
      content:
        "The Context API provides a way to 'teleport' data directly from a parent component to any child component in the tree, no matter how deep it is. It creates a 'Global State' that is accessible to all components wrapped inside a 'Provider'.",
      code:
`// Context API Solution:
// 1. Create a "Space" for data.
// 2. Wrap the App with a "Provider".
// 3. Components "Consume" data directly.
// ✅ No more prop drilling!`
    },

    {
      title: "Creating Context",
      content:
        "To start, you use the 'createContext' function. This creates a Context object. You can optionally provide a 'default value', which will be used if a component tries to access the context without being wrapped in a Provider.",
      code:
`import { createContext } from 'react';

// Create the context
export const UserContext = createContext(null);`
    },

    {
      title: "Provider Component",
      content:
        "Every Context object comes with a 'Provider' component. This component accepts a 'value' prop. Any component inside this Provider (and their children) will have access to this value. Usually, we wrap our entire App with the Provider.",
      code:
`function App() {
  const user = { name: "John", role: "Admin" };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}`
    },

    {
      title: "useContext Hook",
      content:
        "The 'useContext' hook is the modern way to 'consume' (access) data from a context. You simply pass the Context object you created to the hook, and it returns the current value from the nearest Provider above it in the tree.",
      code:
`import { useContext } from 'react';
import { UserContext } from './App';

function Avatar() {
  const user = useContext(UserContext);
  
  return <img src={user.avatarUrl} alt={user.name} />;
}`
    },

    {
      title: "Sharing Global Data",
      content:
        "Context is ideal for data that needs to be accessed by many components at different levels. Common examples include: Current User, UI Theme (Dark/Light), Language settings, or a Shopping Cart state.",
      code:
`// Shared Global Data:
// - User Authentication Status
// - UI Customization Preferences
// - Internationalization (i18n)
// - Application Configuration`
    },

    {
      title: "Theme Management",
      content:
        "One of the most common uses for Context is Theme management. Instead of passing 'color' props to every button and header, you store the theme in Context. Every component can then 'subscribe' to the theme and update automatically when it changes.",
      code:
`const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={\`btn-\${theme}\`}>Click Me</button>;
}`
    },

    {
      title: "Dark & Light Mode",
      content:
        "To implement a toggle, you store the theme in state and pass both the 'value' and the 'setter function' through the Context Provider. This allows any component deep in the tree to trigger a theme switch.",
      code:
`const [theme, setTheme] = useState("light");
const toggleTheme = () => {
  setTheme(t => t === "light" ? "dark" : "light");
};

<ThemeContext.Provider value={{ theme, toggleTheme }}>
  {/* Components */}
</ThemeContext.Provider>`
    },

    {
      title: "Authentication Context",
      content:
        "Authentication is perfect for Context. By wrapping your app in an 'AuthContext', you can easily check if a user is logged in from any page and redirect them or show/hide specific navigation links based on their role.",
      code:
`function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <Link to="/login">Login</Link>
  );
}`
    },

    {
      title: "Managing User State",
      content:
        "When managing user state in Context, you often include functions for 'login' and 'logout'. These functions typically handle the API calls and then update the local Context state with the returned user data.",
      code:
`const login = async (creds) => {
  const user = await api.login(creds);
  setUser(user); // Updates entire app
};`
    },

    {
      title: "Combining Context with useReducer",
      content:
        "For complex global state (like a large shopping cart), combining Context with 'useReducer' is a powerful pattern. You pass the 'dispatch' function through Context, allowing any component to send 'actions' to update the global state.",
      code:
`const [state, dispatch] = useReducer(reducer, initial);

<CartContext.Provider value={{ cart: state, dispatch }}>
  {children}
</CartContext.Provider>`
    },

    {
      title: "Global State Best Practices",
      content:
        "1. Only use Context for truly 'Global' data. 2. Don't put everything in one giant Context; create separate ones (Auth, Theme, Cart). 3. Wrap only the parts of the app that need the data. 4. Use custom hooks for easier consumption.",
      code:
`// Custom Hook Best Practice:
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Must be inside AuthProvider");
  return context;
}`
    },

    {
      title: "Context Folder Structure",
      content:
        "To keep things organized, create a 'context/' folder. Each context should have its own file containing the Context object, the Provider component, and a custom hook for using that specific context.",
      code:
`src/
├── context/
│   ├── AuthContext.js
│   ├── ThemeContext.js
│   └── CartContext.js
└── components/`
    },

    {
      title: "Mini Project — Theme Switcher App",
      content:
        "Let's build a complete Theme Switcher. We'll create a ThemeContext, a Custom Provider that manages state and local storage, and several components that dynamically change their styles based on the active theme.",
      code:
`function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <MainContent />
      <ThemeToggle />
    </ThemeProvider>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Challenge: 1. Create a 'LanguageContext' for multi-language support. 2. Build a 'UserPreferences' context for font-size settings. Quiz: 1. When to use Context vs Props? 2. What is the role of 'Provider'? 3. Why return 'dispatch' in Context?",
      code:
`// Exercise: Language Switcher
// 1. Create context for 'en' or 'kh'
// 2. Wrap app and provide translations
// 3. Create a button to switch languages

const dict = { en: { hi: "Hello" }, kh: { hi: "សួស្តី" } };
const { lang } = useContext(LangContext);
<h1>{dict[lang].hi}</h1>`
    }
  ]
}
